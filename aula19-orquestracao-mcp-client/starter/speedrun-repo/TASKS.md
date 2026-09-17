# As 3 tarefas do speedrun

Três tarefas. Cada uma tem teste próprio em `tests/` (não editável — é a especificação).
Antes de decidir como dividir o trabalho, leia as três descrições inteiras. A decisão de
paralelizar ou não é sua, e ela vale nota (ver `PLACAR-TEMPLATE.csv` na raiz de `starter/`).

## Tarefa A — `validateCPF` em `src/validators.js`

Recebe uma string de CPF (com ou sem pontuação) e devolve `true`/`false`. Válido = 11
dígitos, não todos iguais. Não implemente o dígito verificador oficial — está fora de
escopo.

**Arquivo que muda:** `src/validators.js` (função nova + linha do `module.exports`).

## Tarefa B — `formatBRL` em `src/formatters.js`

Recebe um inteiro em centavos, devolve string `"R$ 12,34"`.

**Arquivo que muda:** `src/formatters.js` (função nova + linha do `module.exports`).

## Tarefa C — `validatePhone` em `src/validators.js`

Recebe uma string de celular BR (com ou sem pontuação), devolve `true`/`false`. Válido =
exatamente 11 dígitos (DDD + 9 dígitos).

**Arquivo que muda:** `src/validators.js` (função nova + linha do `module.exports`).

---

## Antes de tocar em uma linha de código

Preencha isso em voz alta com sua dupla/trio, cronômetro ainda parado:

1. Quais tarefas tocam o **mesmo arquivo**?
2. Dado isso, qual é a divisão que vocês vão executar — 1 agente sequencial nas 3, 2
   agentes em paralelo com uma sequencial por fora, ou 3 agentes em paralelo torcendo
   pra dar certo?
3. Quanto tempo vocês **apostam** que a divisão escolhida leva, do zero ao `npm test`
   inteiro verde, integração incluída?

A resposta de (1) está no arquivo `src/validators.js` — leia os comentários `TODO`. Se
sua dupla pular esse passo e for direto pro paralelo total, tudo bem: isso também é dado
para o pós-morte.
