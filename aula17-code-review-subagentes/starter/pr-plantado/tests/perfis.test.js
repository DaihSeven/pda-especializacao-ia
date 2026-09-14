'use strict';

// Esta suíte é a especificação. Não se edita — nem você, nem o agente.
// Regra do curso desde a aula 1: "tests/ é a especificação e não se edita."

const test = require('node:test');
const assert = require('node:assert/strict');
const { perfis, buscarPorHabilidade } = require('../src/perfis');

test('busca por habilidade ignora maiúscula/minúscula', () => {
  const resultado = buscarPorHabilidade(perfis, 'react');
  assert.equal(resultado.length, 2); // Ana e Carla
});

test('não retorna perfil de aluno não formado', () => {
  const resultado = buscarPorHabilidade(perfis, 'Node');
  assert.equal(resultado.length, 1); // só Ana — Diego não é formado
});

test('resultado não expõe e-mail', () => {
  const resultado = buscarPorHabilidade(perfis, 'react');
  assert.ok(resultado.length > 0);
  for (const perfil of resultado) {
    assert.equal(perfil.email, undefined);
  }
});
