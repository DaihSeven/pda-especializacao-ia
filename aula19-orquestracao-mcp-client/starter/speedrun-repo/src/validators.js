// Gerado por IA. Colado sem ler. Funciona, mas é só isso — leia antes de mexer.

function normalizeDigits(value) {
  return String(value).replace(/\D/g, "");
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email));
}

// TODO(tarefa A): validateCPF(cpf)
//   - aceita string com ou sem pontuação ("123.456.789-09" ou "12345678909")
//   - válido: exatamente 11 dígitos depois de normalizar
//   - inválido: menos de 11 dígitos, ou os 11 dígitos repetidos (ex.: "11111111111")
//   - NÃO precisa implementar o dígito verificador oficial da Receita — é fora de escopo
//     desta semana. É uma validação de forma, não de autenticidade.

// TODO(tarefa C): validatePhone(phone)
//   - aceita string com ou sem pontuação ("(11) 91234-5678" ou "11912345678")
//   - válido: exatamente 11 dígitos (DDD + celular com 9)
//   - inválido: qualquer outra contagem de dígitos

// Lembrete da tarefa A e da tarefa C: as duas mexem neste arquivo.
// Antes de rodar em paralelo, decida COMO vocês vão evitar pisar um no outro
// na linha do module.exports lá embaixo. Isso é o ponto do speedrun, não um detalhe.

module.exports = { normalizeDigits, validateEmail };
