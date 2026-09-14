# starter/ — o que tem aqui

```
starter/
|-- decisao-escopo-template.md         <- copie pra DECISAO-ESCOPO.md, preencha ANTES de codar (Lab 1)
|-- LOG-INJECTION-TEMPLATE.md          <- o entregável principal — preencha após uma tentativa real
|-- mcp-server-template/               <- copie pra `meu-mcp-server/` — SEU server (Lab 1)
|   |-- src/index.ts                   <- tool `ping` funcionando + TODOs pra sua tool
|   |-- package.json, tsconfig.json
|   `-- .mcp.json.example
|-- demos/mcp-demo-vulneravel/         <- USO DA FACILITADORA — Demo 1 e Demo 2 (aula 1)
|   |-- src/index.ts                   <- ler_issue (injection) + gerar_relatorio_html (output handling)
|   `-- fixtures/                      <- issue-42.txt (payload) + segredo.txt (fixture falsa)
`-- supply-chain-sim/                  <- USO DA FACILITADORA — Demo 3 (aula 1)
    |-- src/index.ts                   <- conversor-moeda com descrição envenenada (tool poisoning)
    `-- .env                           <- chave FALSA, só pra demo
```

**Aluno:** você usa `decisao-escopo-template.md`, `mcp-server-template/` e
`LOG-INJECTION-TEMPLATE.md`. Os outros dois (`demos/` e `supply-chain-sim/`) são material
de demonstração da facilitadora — leia o código deles depois da aula se quiser entender a
implementação das três falhas, mas não são o seu ponto de partida.

**Facilitadora:** cada subpasta de demo tem seu próprio `README.md` com o setup e o aviso
de segurança específico (principalmente `supply-chain-sim/README.md` — leia antes de
rodar em sala).
