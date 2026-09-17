// meu-mcp-server — esqueleto incompleto de propósito.
//
// Referência oficial do SDK: https://modelcontextprotocol.io/docs/2026-07-28/develop/build-server
//
// Antes de mexer aqui: preencha DECISAO-ESCOPO.md na raiz do seu projeto.
// A tool de exemplo (`ping`) já funciona de ponta a ponta — use ela pra confirmar que a
// conexão com o Claude Code está OK antes de escrever a sua.

import { McpServer } from "@modelcontextprotocol/server";
import { StdioServerTransport } from "@modelcontextprotocol/server/stdio";
import { z } from "zod";

const server = new McpServer({
  name: "meu-mcp-server",
  version: "0.1.0",
});

// --- Tool de exemplo: NÃO apague até a sua primeira tool real estar funcionando. ---
server.registerTool(
  "ping",
  {
    description: "Confirma que o server está no ar. Devolve 'pong' e um timestamp.",
    inputSchema: z.object({}),
  },
  async () => {
    return {
      content: [
        {
          type: "text",
          text: `pong — ${new Date().toISOString()}`,
        },
      ],
    };
  },
);

// --- TODO 1: nomeie a sua tool ---
// Use um nome específico do domínio, não genérico. Exemplos por domínio no ENTREGAVEL.md
// da aula: `buscar_perfil_por_habilidade`, `exportar_resultados_quiz`,
// `checar_estrutura_entrega`, `buscar_padrao_de_estilo`.

// --- TODO 2: defina o inputSchema com zod ---
// Todo campo que a tool aceita deve ter um `.describe(...)` — é esse texto que o modelo lê
// pra decidir como preencher o parâmetro. Trate isso como parte da interface pública da
// tool, não como um detalhe interno.
//
// Exemplo:
// inputSchema: z.object({
//   habilidade: z.string().min(1).describe("Habilidade a buscar, ex.: 'React'"),
// }),

// --- TODO 3: implemente a lógica ---
// Releia DECISAO-ESCOPO.md antes de escrever o corpo da função. Toda vez que você for
// tentado a "deixar mais flexível" (aceitar um caminho de arquivo livre, aceitar um
// comando arbitrário, não validar um limite de tamanho), pare e confira se isso está na
// lista do que a tool PRECISA fazer — se não estiver, não implemente.
//
// server.registerTool(
//   "nome_da_sua_tool",
//   {
//     description: "descrição clara e específica — sem ambiguidade sobre o que ela faz",
//     inputSchema: z.object({ /* ... */ }),
//   },
//   async (params) => {
//     // sua lógica aqui
//     return {
//       content: [{ type: "text", text: "resultado" }],
//     };
//   },
// );

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("meu-mcp-server rodando em stdio");
}

main().catch((error) => {
  console.error("Erro fatal em main():", error);
  process.exit(1);
});
