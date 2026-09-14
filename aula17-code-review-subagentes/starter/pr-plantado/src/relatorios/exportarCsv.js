'use strict';

// Exporta a listagem de perfis formados para CSV — usado pelo relatório
// mensal que a coordenação da PDA baixa manualmente. Sem teste automatizado
// ainda (dívida conhecida, fora do escopo desta semana).

function escaparCampo(valor) {
  const texto = String(valor);
  if (texto.includes(',') || texto.includes('"') || texto.includes('\n')) {
    return '"' + texto.replace(/"/g, '""') + '"';
  }
  return texto;
}

function montarLinha(campos, separador) {
  return campos.map(escaparCampo).join(separador);
}

function exportarParaCsv(listaDePerfis, separador) {
  const sep = separador || ',';
  const cabecalho = montarLinha(['id', 'nome', 'habilidades'], sep);
  const linhas = listaDePerfis.map((perfil) =>
    montarLinha([perfil.id, perfil.nome, perfil.habilidades.join('|')], sep)
  );
  return [cabecalho, ...linhas].join('\n');
}

module.exports = { exportarParaCsv, escaparCampo, montarLinha };
