# speedrun-repo

Repo descartável do speedrun cronometrado da Semana 10 — não é o seu projeto do catálogo,
é um repo à parte só para a dinâmica da aula 2. Node puro, `node:test`, zero dependências.

```
src/
  validators.js   <- tarefas A e C mexem aqui
  formatters.js   <- tarefa B mexe aqui
tests/            <- especificação. Não editar.
exemplos/
  gabarito.md     <- solução de referência, só para a facilitadora conferir os testes
TASKS.md          <- as 3 tarefas
```

## Rodando

```bash
npm test          # começa com 10 de 11 falhando. É de propósito.
```

## Como isto vira 3 worktrees (se sua dupla escolher paralelizar)

```bash
git init -b main && git add -A && git commit -m "base do speedrun"

git worktree add ../speedrun-a -b tarefa-a
git worktree add ../speedrun-b -b tarefa-b
git worktree add ../speedrun-c -b tarefa-c
```

Cada worktree é uma pasta e uma branch próprias, prontas para um agente rodar dentro sem
pisar nas outras duas — no sistema de arquivos. O que acontece quando as três branches
tentam voltar pra `main` é o conteúdo da aula, não deste README.
