// Gerado por IA. Colado sem ler.

function formatDigitsOnly(value) {
  return String(value).replace(/\D/g, "");
}

// TODO(tarefa B): formatBRL(cents)
//   - recebe um inteiro em centavos (ex.: 1234)
//   - devolve string no formato "R$ 12,34"
//   - valores menores que 100 também formatam certo (ex.: 5 -> "R$ 0,05")
//   - este arquivo é só seu nesta rodada. Ninguém mais mexe em formatters.js.

module.exports = { formatDigitsOnly };
