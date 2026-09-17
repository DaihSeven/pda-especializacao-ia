# Teste verde que não prova nada — 3 formas de reconhecer

Você precisa achar **uma** dessas três (ou uma variação equivalente) no seu
próprio repositório e documentar no `ENTREGAVEL.md`. Esta página mostra os
três padrões, com um jeito mecânico de confirmar cada um: **quebre a
implementação de propósito e rode o teste de novo.** Se ele continuar
verde, ele não estava testando o que você achava que estava testando. Isso
reusa o **formato de validação em 3 cenários** da Semana 3 (dispara quando
deve / não dispara quando não deve / falso positivo) — aqui aplicado a um
teste em vez de a uma regra ou skill: um teste que não "dispara" (falha)
quando o código está quebrado é, na prática, um falso positivo permanente.

## 1. O teste testa o mock, não o código

```typescript
// RUIM
import { test } from "node:test";
import assert from "node:assert/strict";

test("busca usuário por id", async () => {
  const fakeApi = { buscarUsuario: async () => ({ id: 1, nome: "Ana" }) };
  const resultado = await fakeApi.buscarUsuario(1);
  assert.equal(resultado.nome, "Ana");
});
```

O teste chama o mock e verifica o mock. A função real (`buscarUsuario` do seu
`src/`) nunca é importada, nunca é executada. Você pode apagar a
implementação inteira e esse teste continua verde.

**Como confirmar:** apague ou quebre a função real que o teste deveria
cobrir. Rode o teste. Se ele continua verde, é este padrão.

**Correção:** importe e chame a função real; use o mock só para a
dependência externa dela (ex.: a chamada HTTP), não para a própria coisa
que você está testando.

## 2. O assert que sempre passa

```typescript
// RUIM
test("valida CPF", () => {
  const resultado = validaCpf("111.111.111-11");
  assert.ok(resultado || !resultado); // sempre true, qualquer valor
});
```

ou, variação mais sutil e mais comum com código gerado por agente:

```typescript
// RUIM — o assert está dentro de um callback que nunca roda
test("processa fila de eventos", () => {
  fila.on("erro", (e) => {
    assert.fail("não deveria dar erro: " + e); // só roda se der erro
  });
  fila.processar(eventoValido);
  // teste termina aqui, síncrono, sem esperar o "erro" — sempre passa
});
```

**Como confirmar:** leia o assert isolado do resto do teste — ele consegue
falhar com ALGUM valor de entrada, ou a condição é tautológica / está presa
num callback que o teste não espera terminar?

**Correção:** o assert precisa comparar o resultado real contra um valor
esperado específico, e o teste precisa esperar (`await`, callback com
`done`, ou equivalente) antes de considerar terminado.

## 3. Cobertura alta sem valor

```typescript
// RUIM — 100% de cobertura de linha, 0% de verificação de comportamento
test("formata preço", () => {
  const resultado = formataPreco(19.9);
  assert.ok(resultado); // só confirma que retornou "algo" truthy
});
```

Toda linha de `formataPreco` executa (cobertura reporta 100%), mas o teste
aceitaria `"R$ 19.90"`, `"19.9"`, `"batata"` ou `true` como resultado —
nenhum desses valores faz o teste falhar.

**Como confirmar:** troque o `return` da função por um valor propositalmente
errado (ex.: retorne sempre a string vazia `""`). Se a cobertura continua
100% e o teste continua verde, a cobertura estava medindo execução, não
verificação.

**Correção:** o assert compara contra o valor exato esperado
(`assert.equal(resultado, "R$ 19,90")`), não contra "existe/é truthy".

---

## O que fazer com o que você achou

No `ENTREGAVEL.md` você registra: qual dos três padrões era, o teste
original (cole o trecho), o que você mudou pra implementação quebrar de
verdade o teste, e a versão corrigida. Se você vasculhou o repo inteiro e
genuinamente não achou nenhum dos três — o que é raro, mas possível se você
já escreve teste com disciplina — documente isso e, em vez disso, aplique o
mesmo processo de quebra em UM teste que passou (mesmo que ele já esteja
correto) pra provar que ele de fato falharia se o código quebrasse. Ou seja:
todo aluno entrega uma prova de que pelo menos um teste seu **detecta**
quebra — a diferença é só se essa prova veio de um teste que você corrigiu
ou de um que já estava bom.
