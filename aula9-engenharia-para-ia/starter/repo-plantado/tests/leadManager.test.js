'use strict';

const { test } = require('node:test');
const assert = require('node:assert');
const { LeadManager, LeadHandler } = require('../src/leadManager');

test('valida lead completo', () => {
  const manager = new LeadManager();
  assert.strictEqual(
    manager.validate({ nome: 'Ana', email: 'ana@x.com', telefone: '11999999999' }),
    true
  );
});

test('rejeita lead sem email', () => {
  const manager = new LeadManager();
  assert.strictEqual(
    manager.validate({ nome: 'Ana', telefone: '11999999999' }),
    false
  );
});

test('calcula score do lead', () => {
  const manager = new LeadManager();
  const score = manager.calculateLeadScore({
    email: 'a@a.com',
    telefone: '1',
    empresa: 'x',
    interesse: 'alto',
  });
  assert.strictEqual(score, 80);
});

test('handler repassa para manager sem adicionar regra própria', () => {
  const manager = new LeadManager();
  const handler = new LeadHandler(manager);
  assert.strictEqual(handler.handle({ nome: 'Bea', email: 'bea@x.com' }), true);
});
