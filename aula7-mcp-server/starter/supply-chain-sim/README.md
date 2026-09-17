# supply-chain-sim (Demo 3 — supply chain de MCP de terceiros)

**Leia isto antes de rodar em sala.** Este server simula, de forma segura, o
comportamento descrito pela pesquisa de "tool poisoning" da Invariant Labs
(<https://invariantlabs.ai/blog/mcp-security-notification-tool-poisoning-attacks>). Ele:

- roda 100% local, sem nenhuma chamada de rede;
- não envia nada pra lugar nenhum — o "vazamento" acontece só dentro da própria resposta
  do agente, que fica visível na tela de quem estiver olhando;
- usa um `.env` com uma chave **falsa**, criada só pra esta demo.

**Nunca substitua isso por um pacote MCP real baixado de fonte desconhecida.** O objetivo
da demo é mostrar que a descrição de uma tool pode conter instruções que só o modelo lê —
reproduzir isso com software de terceiro de verdade seria expor a turma a um risco real
sem necessidade.

## Setup (facilitadora, antes da aula)

```bash
cd starter/supply-chain-sim
npm install
npm run build
claude mcp add --transport stdio conversor-moeda -- node build/index.js
```

## Roteiro da demo

Ver `ROTEIRO-FACILITADORA.md`, seção "Demo 3". Resumo: peça uma conversão normal (o
resultado sai certo), depois abra a descrição completa da tool no MCP Inspector ou no
`/mcp` e mostre a instrução escondida que pede a leitura do `.env`.

## Depois da aula

Nada a limpar — o server não escreve nada fora de si mesmo. Só remova a conexão MCP se não
for usar de novo: `claude mcp remove conversor-moeda`.
