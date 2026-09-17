// Especificação da tarefa A. Não edite este arquivo.
const test = require("node:test");
const assert = require("node:assert/strict");
const { validateCPF, validateEmail } = require("../src/validators");

test("tarefa A — aceita CPF com pontuação e 11 dígitos não repetidos", () => {
  assert.equal(validateCPF("123.456.789-09"), true);
});

test("tarefa A — aceita CPF só com dígitos", () => {
  assert.equal(validateCPF("12345678909"), true);
});

test("tarefa A — rejeita CPF com todos os dígitos iguais", () => {
  assert.equal(validateCPF("111.111.111-11"), false);
});

test("tarefa A — rejeita CPF com menos de 11 dígitos", () => {
  assert.equal(validateCPF("123.456.789"), false);
});

test("já existia — validateEmail continua funcionando", () => {
  assert.equal(validateEmail("aluna@pda.org"), true);
  assert.equal(validateEmail("nao é email"), false);
});
