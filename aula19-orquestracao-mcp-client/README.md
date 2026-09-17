# Semana 10 — Orquestração, paralelismo e o MCP client próprio

**Módulo 3 — AI Orchestrator / Agentes**

Fio condutor da semana: **"três agentes não fazem um terço do tempo."** Você vai provar
isso com um cronômetro na mão, não vai só ouvir a frase.

Esta é a última semana do curso sem chave de API. Tudo aqui — worktree, MCP client,
speedrun — roda com a sua assinatura Claude Pro, sem `ANTHROPIC_API_KEY`, sem custo por
token. Na semana 11 você pluga um modelo dentro do mesmo cliente que constrói aqui. Guarde
essa frase: o cliente desta semana é o loop de orquestração falando protocolo; o próximo
passo é fazer esse loop pensar.

## O que muda esta semana

Você já construiu, sem perceber que era a mesma coisa, boa parte de um "harness": um
`CLAUDE.md` (semana 2), uma skill própria (semana 3), um MCP server (semana 4), regras de
escopo (semana 5), specs executáveis (semana 7), verificadores que travam merge (semana
8), e dois subagentes de revisão (semana 9). Esta semana não adiciona mais uma peça — ela
te mostra que já são peças do mesmo aparato, e te dá a última peça que faltava para rodar
mais de um agente ao mesmo tempo em cima dele: **como decidir se vale a pena**, e **como
falar protocolo com o server que você já tem**, sem um modelo no meio.

## Duas ideias que este material separa com força

1. **Worktree não é subagente.** Worktree isola **sistema de arquivos** — duas pastas,
   dois checkouts do mesmo repo, dois agentes sem se atropelar. Subagente (semana 9)
   isola **contexto** — uma janela separada que te devolve um resumo. São eixos
   diferentes. Você pode ter um subagente rodando dentro de um worktree; um não substitui
   o outro.
2. **Paralelizar tem custo, e o custo às vezes é maior que o ganho.** Três agentes em
   paralelo não dividem o tempo por três — dividem por menos, e às vezes pioram: merge
   conflict, contexto duplicado, diffs demais pra revisar no fim. O entregável da semana
   existe pra você medir isso no seu próprio log, não pra decorar a frase.

## Como as duas aulas se conectam

- **Aula 1 (aula 19)** — conceito + demo ao vivo. Harness Engineering como fio condutor,
  os três padrões de orquestração (sequencial, paralelo, supervisor), a fronteira
  worktree × subagente, e a construção do seu MCP client próprio (sem LLM) conectado no
  MCP server que você fez na semana 4.
- **Aula 2 (aula 20)** — **speedrun cronometrado**: 40 minutos pra rodar 3 tarefas num
  repo compartilhado, escolhendo antes se vai paralelizar ou não, com placar e pós-morte
  coletivo no fim. Ver `GUIA-DO-ALUNO.md` para os detalhes de como o jogo funciona.

## Pré-requisito de entrada

- Bloco assíncrono da Alura desta semana concluído (ver `ENTREGAVEL.md` e
  `PACOTE.md` para o mapeamento exato).
- MCP server da semana 4 (`aula7-mcp-server`) buildado e funcionando — você vai conectar
  nele hoje, não num server novo.

## Estrutura desta pasta

```
aula19-orquestracao-mcp-client/
  README.md                      <- este arquivo
  GUIA-DO-ALUNO.md                <- passo a passo dos labs e do speedrun
  ENTREGAVEL.md                   <- o que entregar, prazo, rubrica
  ROTEIRO-FACILITADORA.md         <- só para a Iasmim
  SLIDES-OUTLINE.md               <- só para a Iasmim
  REFERENCIAS.md                  <- só para a Iasmim
  PACOTE.md                       <- só para a Iasmim
  starter/
    mcp-client-starter/           <- esqueleto do cliente MCP (Lab 2, aula 1)
    speedrun-repo/                <- repo das 3 tarefas do speedrun (aula 2)
    LOG-SESSAO-PARALELA-TEMPLATE.md
    DOC-AGENTE-UNICO-TEMPLATE.md
    PLACAR-TEMPLATE.csv
  excalidraw/
    padroes-orquestracao.excalidraw  <- os 3 padrões, projetado durante a teoria
```

## Referências

Todas verificadas nesta sessão — ver `REFERENCIAS.md` para a lista completa com o que é
cada uma e onde entra. As mais importantes para revisar por conta própria:

- [Run parallel sessions with worktrees](https://code.claude.com/docs/en/worktrees) — doc
  oficial do Claude Code, a fonte da distinção worktree × subagente.
- [Build an MCP client](https://modelcontextprotocol.io/docs/2026-07-28/develop/build-client) —
  tutorial oficial (nós tiramos a parte de LLM; a de protocolo é a mesma).
- [Multi-Agent Research System](https://www.anthropic.com/engineering/multi-agent-research-system) —
  engenharia da Anthropic sobre quando orquestração paralela vale o custo, e quando não.
