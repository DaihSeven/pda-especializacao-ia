# Log de injection — `<nome do server>`

<!--
  Este é o entregável mais importante da semana. Preencha depois de uma tentativa real
  (bem-sucedida OU registrada como "não passou, e eis exatamente por quê"). Não escreva
  isso de memória horas depois — copie e cole o payload exato, ao vivo, no momento em que
  aconteceu.
-->

## Metadados

| campo | valor |
|---|---|
| Data | |
| Server atacado | (nome + link do repo) |
| Tool alvo | |
| Quem executou o ataque | (você mesmo no Lab 2 / seu colega na aula 2 — nomeie) |
| Fase | Lab 2 (auto-injeção) / Aula 2 (red team em dupla) |

## O que entrou (payload exato)

<!-- Cole literalmente, em bloco de código, sem parafrasear. Se o payload estava escondido
     dentro de um arquivo/texto externo, cole o arquivo inteiro, não só o trecho malicioso. -->

```
<payload aqui>
```

## Vetor

- [ ] Injeção **direta** — pedido explícito, sem disfarce, pro agente fazer o que não devia.
- [ ] Injeção **indireta** — instrução escondida dentro de um dado externo que a tool leu
      (arquivo, resultado de API, conteúdo de outro tool).
- [ ] **Tool poisoning** — a instrução maliciosa estava na *descrição* da tool, não no dado
      que ela processa.

## O que o agente fez

<!-- Passo a passo observado: quais tools ele chamou, em que ordem, o que apareceu na
     resposta. Se tiver print ou transcript, referencie o arquivo aqui. -->

1.
2.
3.

## Por que passou (causa raiz)

<!-- Não é "a IA é burra". É uma causa técnica concreta: falta de validação de input,
     ausência de allow-list, saída não sanitizada antes de virar entrada de outro sistema,
     confiança cega em conteúdo externo, tool com mais permissão do que precisava. -->

## Risco correspondente (OWASP Top 10 for LLM Applications, 2025)

- [ ] LLM01 — Prompt Injection
- [ ] LLM03 — Supply Chain
- [ ] LLM05 — Improper Output Handling
- [ ] Outro (nomeie):

## O que isso viola no `DECISAO-ESCOPO.md`

<!-- Cite o item exato da lista "o que ela NÃO PODE fazer" que essa tentativa contrariou. -->

## Severidade

- [ ] Crítica — dado sensível exposto, ou ação destrutiva/irreversível executada
- [ ] Alta — a tool fez algo fora do escopo declarado, sem dano irreversível
- [ ] Média — o ataque quase funcionou, foi barrado por um controle já existente
- [ ] Baixa — tentativa registrada, não chegou perto de funcionar

## Mitigação proposta

<!-- O que muda no código. Seja específico: "validar que o parâmetro X só aceita valores
     de uma allow-list Y" é uma mitigação; "ter mais cuidado" não é. -->

## Mitigação implementada?

- [ ] Sim — testado de novo com o mesmo payload, resultado:
- [ ] Não ainda — motivo:

## Se não passou: por que essa tentativa falhou

<!-- Preencha esta seção só se NENHUM payload testado funcionou. O que já existia no
     código que barrou o ataque? Isso também é aprendizado válido — nomeie o controle que
     funcionou. -->
