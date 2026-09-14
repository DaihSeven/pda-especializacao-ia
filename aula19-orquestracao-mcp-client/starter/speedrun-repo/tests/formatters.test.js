// Especificação da tarefa B. Não edite este arquivo.
const test = require("node:test");
const assert = require("node:assert/strict");
const { formatBRL } = require("../src/formatters");

test("tarefa B — formata centavos como reais", () => {
  assert.equal(formatBRL(1234), "R$ 12,34");
});

test("tarefa B — formata valor redondo", () => {
  assert.equal(formatBRL(500), "R$ 5,00");
});

test("tarefa B — formata centavos abaixo de 1 real", () => {
  assert.equal(formatBRL(5), "R$ 0,05");
});
