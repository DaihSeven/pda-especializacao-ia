// A regra de negócio que o schema (JSON Schema) NÃO garante sozinho.
// Structured output garante FORMATO (tipos, campos obrigatórios). Não garante SENTIDO.
// "aprovado: true" com "nota: 3" é um JSON perfeitamente válido contra o schema — e
// completamente errado pro seu domínio. Só você sabe essa regra. O modelo não.
//
// TODO (Lab 1): esta função só confere o tipo. Adicione a regra de negócio do SEU
// domínio (ex.: aprovado só pode ser true se nota >= 6 — ajuste o corte pro seu caso).
export function validarAvaliacao(saida) {
  if (typeof saida?.nota !== "number" || saida.nota < 0 || saida.nota > 10) {
    return { ok: false, motivo: `nota inválida: ${saida?.nota}` };
  }
  if (typeof saida?.aprovado !== "boolean") {
    return { ok: false, motivo: "campo aprovado ausente ou não-booleano" };
  }
  if (typeof saida?.justificativa !== "string" || saida.justificativa.length < 10) {
    return { ok: false, motivo: "justificativa ausente ou curta demais pra ser útil" };
  }

  // TODO: regra de negócio. Exemplo pro domínio "avaliação automatizada de projetos":
  // if (saida.aprovado && saida.nota < 6) {
  //   return { ok: false, motivo: `aprovado=true não bate com nota=${saida.nota}` };
  // }

  return { ok: true };
}
