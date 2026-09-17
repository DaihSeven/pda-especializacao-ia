---
name: TODO-nome-curto-com-hifen
description: TODO — o que essa skill faz + "Use quando" com o gatilho específico. Ex.: "Gera um card de perfil de aluno a partir de um briefing em texto solto. Use quando o usuário pedir um perfil, uma vitrine ou uma bio de aluno da PDA."
allowed-tools: TODO — liste só o que essa skill precisa (ex.: Read, Write). Não use "*" nem libere tudo por preguiça.
---

<!--
  Este arquivo entra na janela de contexto do agente SÓ quando a skill é invocada
  (progressive disclosure) — diferente do CLAUDE.md, que entra em TODA sessão.
  Por isso ele pode ser mais longo, mas ainda assim: mantenha sob 500 linhas.
  Material de referência extenso (exemplos longos, formato de saída detalhado,
  checklist grande) vai em reference.md, não aqui.
  Referência: https://code.claude.com/docs/en/skills
  Referência de description: https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices
-->

# TODO: título curto e humano da skill

## O que ela faz

TODO — 2 a 4 frases. Entrada esperada, saída esperada, em que domínio do seu projeto
ela se aplica.

## Quando ela dispara (e quando não deveria)

TODO — liste explicitamente 1 exemplo de pedido que DEVE disparar essa skill e 1
exemplo parecido que NÃO deveria disparar. Isso é o que sustenta a `description` acima
— se você não consegue escrever os dois exemplos, a description provavelmente está
vaga demais.

## Passos

1. TODO
2. TODO
3. TODO

Se algum passo depende de um formato de saída extenso, um exemplo longo ou uma lista
grande de casos — pare aqui e mova esse conteúdo para `reference.md`. Referencie assim:

> Para o formato exato de saída, veja [reference.md](reference.md).

## Exemplo de invocação

```
TODO: cole aqui um exemplo real de prompt que invoca a skill, e um resumo do resultado
```

<!-- Apague todos os comentários HTML e os TODOs antes de considerar a skill pronta. -->
