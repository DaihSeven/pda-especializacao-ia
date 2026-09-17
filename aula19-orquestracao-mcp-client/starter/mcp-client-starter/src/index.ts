// Cliente MCP próprio — plumbing de protocolo puro.
//
// FRONTEIRA DA SEMANA: este arquivo NÃO chama nenhum modelo. Não tem
// ANTHROPIC_API_KEY, não tem .env, não tem "anthropic.messages.create". Ele conecta
// no MCP server que você construiu na semana 4 (aula7-mcp-server), faz o handshake,
// lista as tools, chama UMA tool com argumentos fixos (escritos por você, não decididos
// por um LLM) e imprime o resultado cru. É o loop de orquestração falando protocolo,
// sem ninguém "pensando" do outro lado ainda.
//
// A semana 11 pega este mesmo `client` e pluga um LLM no meio do processQuery — é
// literalmente o próximo TODO que este arquivo não tem.

import { Client } from "@modelcontextprotocol/client";
import { StdioClientTransport } from "@modelcontextprotocol/client/stdio";

async function main() {
  const serverPath = process.argv[2];
  if (!serverPath) {
    console.error("Uso: node build/index.js <caminho para o build/index.js do SEU server>");
    console.error("Exemplo: node build/index.js ../../aula7-mcp-server/meu-mcp-server/build/index.js");
    process.exit(1);
  }

  // TODO 1 — crie o Client
  //   const client = new Client({ name: "meu-mcp-client-cli", version: "1.0.0" });
  //   O nome/versão aqui é como VOCÊ se identifica pro server no handshake `initialize`.
  //   Não precisa ser nada especial, mas não deixe genérico tipo "client" — vai aparecer
  //   em log de debug se você precisar depurar depois.

  // TODO 2 — crie o transporte stdio e conecte
  //   const transport = new StdioClientTransport({ command: "node", args: [serverPath] });
  //   await client.connect(transport);
  //
  //   `connect` faz o handshake inteiro por baixo: sobe o processo do seu server,
  //   troca as mensagens `initialize`/`initialized` do protocolo, e só resolve a Promise
  //   quando os dois lados concordaram numa versão do protocolo. Se o seu server não
  //   respeitar o handshake (por exemplo, se ele imprimir algo em stdout antes da hora),
  //   é AQUI que vai quebrar — e a mensagem de erro não vai te dizer isso em português.
  //   Isso é o ponto do lab: você vai ler um erro de protocolo sem um LLM traduzindo
  //   pra você.

  // TODO 3 — liste as tools
  //   const { tools } = await client.listTools();
  //   console.log("Tools disponíveis:", tools.map((t) => t.name));
  //   Para cada tool, `tool.inputSchema` é o contrato de entrada dela — é você quem lê
  //   esse schema à mão agora, não um modelo interpretando a descrição.

  // TODO 4 — chame UMA tool com argumento fixo
  //   Troque "nome_da_sua_tool" e os args pelo que a SUA tool da semana 4 espera.
  //   const result = await client.callTool({
  //     name: "nome_da_sua_tool",
  //     arguments: { /* ... */ },
  //   });
  //   console.log("Resultado:", JSON.stringify(result, null, 2));
  //
  //   Repare em `result.isError`. Uma tool que falha não derruba o cliente — ela
  //   responde com isError:true e um content explicando o quê. Ler isso é sua tarefa
  //   de novo: não tem um LLM decidindo "tenta de outro jeito" por você ainda.

  // TODO 5 — encerre a conexão
  //   await client.close();
  //   Isso derruba o processo do server que você subiu no TODO 2. Sem isso, o processo
  //   filho fica pendurado.

  console.log("Ainda não implementado. Comece pelo TODO 1.");
}

main().catch((err) => {
  console.error("Erro:", err);
  process.exit(1);
});
