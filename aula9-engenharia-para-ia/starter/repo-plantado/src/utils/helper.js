'use strict';

// Gerado por IA. Colado sem ler, numa sessão diferente da do leadManager.js — por isso
// a validação de e-mail abaixo não sabe que já existe uma quase igual em
// ../leadManager.js. É a Categoria 2 do checklist: duplicação em vez de reuso.

function validarEmailDeCliente(cliente) {
  if (!cliente.email || !cliente.email.includes('@')) {
    throw new Error('e-mail inválido para o cliente');
  }
  return true;
}

function formatarNomeParaExibicao(pessoa) {
  return pessoa.nome ? pessoa.nome.trim() : 'sem nome';
}

module.exports = { validarEmailDeCliente, formatarNomeParaExibicao };
