// Lógica pura de avaliação — sem rede, sem API, testável sozinha (ver
// tests/avaliar-retrieval.test.js). O runner (runner-retrieval.js) só embrulha isto com
// chamadas reais de embedding e busca.

function normalizar(texto) {
  return texto
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "") // tira acento pra não fazer "não bater" por acento
    .toLowerCase();
}

/**
 * @param {{contexto_esperado: string[]}} caso — extensão do formato da Semana 11
 *   (ver evals/README.md): as palavras/trechos que precisam aparecer em ALGUM chunk
 *   recuperado pra dizer que o retrieval, não a geração, funcionou.
 * @param {{texto: string}[]} chunksRecuperados
 */
export function avaliarCasoRetrieval(caso, chunksRecuperados) {
  const contextoConcatenado = normalizar(chunksRecuperados.map((c) => c.texto).join(" \n "));
  const faltando = caso.contexto_esperado.filter(
    (trecho) => !contextoConcatenado.includes(normalizar(trecho))
  );
  return { passou: faltando.length === 0, faltando };
}
