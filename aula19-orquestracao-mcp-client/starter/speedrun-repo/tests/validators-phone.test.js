// Especificação da tarefa C. Não edite este arquivo.
const test = require("node:test");
const assert = require("node:assert/strict");
const { validatePhone } = require("../src/validators");

test("tarefa C — aceita celular BR com DDD e pontuação", () => {
  assert.equal(validatePhone("(11) 91234-5678"), true);
});

test("tarefa C — aceita celular BR só com dígitos", () => {
  assert.equal(validatePhone("11912345678"), true);
});

test("tarefa C — rejeita número sem DDD", () => {
  assert.equal(validatePhone("91234-5678"), false);
});
