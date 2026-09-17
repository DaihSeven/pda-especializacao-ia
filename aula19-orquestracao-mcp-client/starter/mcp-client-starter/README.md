# mcp-client-starter

O cliente MCP que você constrói no Lab 2 da aula 1. Conecta no MCP server que você já
tem (semana 4, `aula7-mcp-server`), lista as tools dele, chama uma e imprime o resultado.
**Sem LLM. Sem API key.** Isso só entra na semana 11.

## Pacote certo

```bash
npm install @modelcontextprotocol/client
```

Não é `@modelcontextprotocol/sdk` (nome antigo) nem `@modelcontextprotocol/server` (esse
é o pacote do lado SERVER, que você já usou na semana 4). O SDK oficial em TypeScript
separa os dois: `@modelcontextprotocol/server` para construir servers,
`@modelcontextprotocol/client` para construir clients. Confirmado na doc oficial e no
registro do npm — ver `REFERENCIAS.md` da semana.

## Rodando

```bash
npm install
npm run build
node build/index.js /caminho/para/o/build/index.js/do/SEU/server-da-semana-4
```

Se a sua tool não aparecer, ou o `connect` nunca resolver, o problema quase sempre é: o
server não terminou o `npm run build` antes, ou o caminho passado está errado (use
caminho absoluto se tiver dúvida). Não é bug do SDK — é o handshake não completando.

## Checkpoint do Lab 2

`npm run build` sem erro, o terminal imprime a lista de tools do SEU server, e a
chamada a uma tool real imprime um resultado (sucesso ou erro do protocolo — os dois
contam, desde que você explique o que aconteceu).
