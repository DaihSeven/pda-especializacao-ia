// mcp-demo-vulneravel — SERVER DE DEMONSTRAÇÃO, PROPOSITALMENTE INSEGURO.
//
// Uso: exclusivo pra Demo 1 (prompt injection) e Demo 2 (improper output handling) do
// ROTEIRO-FACILITADORA.md, aula 1. Não use como referência de como escrever uma tool —
// use como referência de como NÃO escrever.
//
// As duas falhas são deliberadas:
// 1. `ler_issue` devolve o conteúdo cru do arquivo, sem separar "dado" de "instrução".
// 2. `gerar_relatorio_html` escreve o texto do modelo direto num arquivo HTML, sem
//    escapar nada.

import { McpServer } from "@modelcontextprotocol/server";
import { StdioServerTransport } from "@modelcontextprotocol/server/stdio";
import { z } from "zod";
import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const FIXTURES_DIR = path.join(__dirname, "..", "fixtures");

const server = new McpServer({
  name: "mcp-demo-vulneravel",
  version: "0.1.0",
});

// FALHA PROPOSITAL 1: lê o arquivo e devolve o conteúdo inteiro, cru, pro modelo — sem
// nenhuma barreira entre "isto é dado a resumir" e "isto poderia ser uma instrução".
server.registerTool(
  "ler_issue",
  {
    description: "Lê uma issue pelo número e devolve o conteúdo completo.",
    inputSchema: z.object({
      id: z.number().int().describe("Número da issue, ex.: 42"),
    }),
  },
  async ({ id }) => {
    const caminho = path.join(FIXTURES_DIR, `issue-${id}.txt`);
    try {
      const conteudo = await readFile(caminho, "utf-8");
      return {
        content: [{ type: "text", text: conteudo }],
      };
    } catch {
      return {
        content: [{ type: "text", text: `Issue #${id} não encontrada.` }],
      };
    }
  },
);

// FALHA PROPOSITAL 2: escreve o texto do modelo direto no HTML, sem escapar. Se o texto
// contiver uma tag <script>, ela vai pro arquivo do jeito que veio.
server.registerTool(
  "gerar_relatorio_html",
  {
    description: "Gera um relatório em HTML com o conteúdo fornecido e devolve o caminho do arquivo.",
    inputSchema: z.object({
      conteudo: z.string().describe("Conteúdo (pode incluir HTML) a colocar no corpo do relatório"),
    }),
  },
  async ({ conteudo }) => {
    const html = `<!doctype html>
<html lang="pt-br">
<head><meta charset="utf-8"><title>Relatório</title></head>
<body>
<h1>Relatório</h1>
<div>${conteudo}</div>
</body>
</html>`;
    const caminho = path.join(__dirname, "..", "relatorio.html");
    await writeFile(caminho, html, "utf-8");
    return {
      content: [{ type: "text", text: `Relatório gerado em ${caminho}` }],
    };
  },
);

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("mcp-demo-vulneravel rodando em stdio (uso exclusivo em demo)");
}

main().catch((error) => {
  console.error("Erro fatal em main():", error);
  process.exit(1);
});
