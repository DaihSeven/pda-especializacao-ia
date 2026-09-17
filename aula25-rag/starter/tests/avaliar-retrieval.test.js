// NÃO EDITE. Especificação da função pura de avaliação de retrieval. Sem rede.

import { test } from "node:test";
import assert from "node:assert/strict";
import { avaliarCasoRetrieval } from "../evals/avaliar-retrieval.js";

test("passa quando todo trecho esperado aparece em algum chunk recuperado", () => {
  const caso = { contexto_esperado: ["trezentos e oitenta reais", "São Paulo"] };
  const chunks = [{ texto: "o valor é de trezentos e oitenta reais" }, { texto: "quem mora fora de São Paulo" }];
  const resultado = avaliarCasoRetrieval(caso, chunks);
  assert.equal(resultado.passou, true);
  assert.deepEqual(resultado.faltando, []);
});

test("falha e lista o que faltou quando o chunk certo não veio", () => {
  const caso = { contexto_esperado: ["trezentos e oitenta reais"] };
  const chunks = [{ texto: "regras gerais da vitrine, sem o valor da bolsa" }];
  const resultado = avaliarCasoRetrieval(caso, chunks);
  assert.equal(resultado.passou, false);
  assert.deepEqual(resultado.faltando, ["trezentos e oitenta reais"]);
});

test("ignora diferença de acento e maiúscula/minúscula", () => {
  const caso = { contexto_esperado: ["São Paulo"] };
  const chunks = [{ texto: "informação sobre sao paulo aqui" }];
  assert.equal(avaliarCasoRetrieval(caso, chunks).passou, true);
});
