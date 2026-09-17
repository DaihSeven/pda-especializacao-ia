// O LOOP DETERMINÍSTICO. Este arquivo é seu — não é "gerado por IA, colado sem ler".
// É a peça central da Semana 11: o código que decide, valida, tenta de novo e desiste.
// O modelo (não-determinístico) entra só como o argumento `chamarModelo`.
//
// Padrão do curso (retomado da Semana 2): especifique -> leia o que voltou -> rejeite o
// que não serve. Aqui: chamarModelo() especifica -> validar() lê o que voltou -> o loop
// rejeita e tenta de novo, ou desiste.
//
// TODO (Lab 2, aula 21): a função `desistir` está incompleta. Ela precisa devolver um
// objeto { ok: false, motivo, tentativas } em vez de lançar um erro genérico — porque
// quem chama este loop (o app, o eval, o deploy) precisa de uma resposta previsível
// mesmo quando o modelo falhou repetidamente. Use os testes em tests/loop.test.js como
// especificação: eles já dizem exatamente o formato esperado. Rode `npm test` — os que
// falham por causa deste TODO mostram no nome do teste.

const MAX_TENTATIVAS_PADRAO = 3; // "regra dos 3 strikes" (convenção da Semana 7 — ver _GANCHOS.md)

/**
 * @param {Object} opcoes
 * @param {() => Promise<any>} opcoes.chamarModelo - faz UMA chamada ao modelo e devolve a
 *   saída bruta (já parseada de JSON, se for structured output). Não-determinístico:
 *   pode devolver coisas diferentes a cada chamada, inclusive coisas inválidas.
 * @param {(saida: any) => { ok: boolean, motivo?: string }} opcoes.validar - a regra de
 *   negócio que só você conhece. Roda em código, nunca dentro do prompt.
 * @param {number} [opcoes.maxTentativas]
 * @returns {Promise<{ ok: true, resultado: any, tentativas: number } | { ok: false, motivo: string, tentativas: number }>}
 */
export async function rodarLoop({ chamarModelo, validar, maxTentativas = MAX_TENTATIVAS_PADRAO }) {
  let ultimoMotivo = "nenhuma tentativa foi feita";

  for (let tentativa = 1; tentativa <= maxTentativas; tentativa++) {
    let saida;
    try {
      saida = await chamarModelo();
    } catch (erro) {
      ultimoMotivo = `chamada ao modelo falhou: ${erro.message}`;
      continue; // não-determinismo inclui a chamada falhar de vez em quando. Tenta de novo.
    }

    const veredito = validar(saida);
    if (veredito.ok) {
      return { ok: true, resultado: saida, tentativas: tentativa };
    }
    ultimoMotivo = veredito.motivo ?? "validação recusou a saída sem dizer por quê";
  }

  return desistir(ultimoMotivo, maxTentativas);
}

/**
 * TODO (Lab 2): implemente. Hoje só lança um erro genérico — troque por um retorno
 * { ok: false, motivo, tentativas } (ver a assinatura de rodarLoop acima e os testes).
 */
function desistir(motivo, tentativas) {
  throw new Error("TODO: desistir() ainda não devolve { ok: false, ... } — implemente no Lab 2");
}
