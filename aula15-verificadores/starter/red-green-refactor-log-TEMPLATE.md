# LOG-RED-GREEN-REFACTOR — <seu nome> / <nome do cenário>

Copie este arquivo para `LOG-RED-GREEN-REFACTOR-<n>.md` na raiz do seu
projeto, um por cenário BDD (você faz 3 — um por cenário da Semana 6).

**A régua da semana:** este log só vale alguma coisa se **prova a ordem**,
não se narra a ordem. Prova = commit do teste falhando existe no histórico
ANTES do commit da implementação. Se você escreveu teste e código na mesma
volta e só depois "reconstituiu" o log, isso é a cola mais comum desta
semana — e dá pra ver no `git log` (mesmo timestamp, mesmo commit, ou dois
commits em segundos um do outro com o teste já verde no primeiro).

---

## Cenário

(Cole aqui o cenário Given/When/Then, igual está no seu arquivo da Semana 6.)

## RED — o teste que ainda não passa

**Commit do teste (só o teste, nada de `src/`):**

```
<cole aqui o hash curto e a mensagem, ex.:>
a1b2c3d test: red — perfil sem habilidade não aparece na busca (falha, esperado)
```

**Saída do terminal rodando o teste (colada, não resumida):**

```
<cole aqui a saída completa de `npm test`, incluindo o erro/falha>
```

**Por que esperávamos que falhasse assim:** (1-2 frases — a implementação
ainda não existe, ou existe mas não trata esse caso)

## GREEN — o menor código que faz passar

**Commit da implementação:**

```
<hash curto> feat: green — <descrição> (test passa)
```

**Saída do terminal com o teste passando:**

```
<cole aqui a saída completa de `npm test`, verde>
```

**O que você implementou e por que é o mínimo:** (1-3 frases — resista à
tentação de generalizar além do que o teste pede)

## REFACTOR — o que você limpou (se houve)

**Commit do refactor (se houve):**

```
<hash curto> refactor: <descrição>
```

**O que mudou e por que o comportamento continua o mesmo:** (1-2 frases)

**Confirmação:** `npm test` rodado de novo depois do refactor — ainda verde?
`[ ] sim` `[ ] não, e por isso eu desfiz`

---

## Verificação de ordem (obrigatório)

Cole a saída de:

```bash
git log --oneline -- <arquivo(s) de teste> <arquivo(s) de implementação>
```

O commit do teste (red) tem que aparecer **antes** (mais antigo) do commit
da implementação (green) nesse log. Se não aparecer nessa ordem, o ciclo não
aconteceu de verdade — refaça com o próximo cenário, dessa vez commitando o
teste falhando primeiro.
