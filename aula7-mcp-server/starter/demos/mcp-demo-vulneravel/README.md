# mcp-demo-vulneravel

Server de demonstração **propositalmente inseguro**, usado exclusivamente pela
facilitadora nas Demos 1 e 2 da aula 1 (ver `ROTEIRO-FACILITADORA.md`). Não é um exemplo
de como escrever uma tool — é um exemplo de como duas falhas comuns se parecem em código
real e curto.

## Setup (facilitadora, antes da aula)

```bash
cd starter/demos/mcp-demo-vulneravel
npm install
npm run build
claude mcp add --transport stdio demo-vulneravel -- node build/index.js
```

## Tools

- `ler_issue(id)` — lê `fixtures/issue-<id>.txt` e devolve cru. `issue-42.txt` tem uma
  instrução escondida que pede pro agente ler `fixtures/segredo.txt` (uma fixture falsa,
  sem dado real) e incluir no resumo, e também injeta uma instrução persistente pra Demo 2.
- `gerar_relatorio_html(conteudo)` — escreve `conteudo` direto num `.html`, sem escapar.
  Usada na Demo 2 pra mostrar a tag `<script>` (inofensiva, só um `alert()`) injetada pela
  Demo 1 executando quando o arquivo é aberto no navegador.

## Depois da aula

Apague `relatorio.html` gerado (`git status` deve mostrar ele como novo, não commitado) —
ele não faz parte do repo, é gerado toda vez que a demo roda.
