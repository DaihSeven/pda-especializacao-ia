// Wrapper fino sobre a API de embeddings da Voyage AI. Zero dependência — fetch nativo.
// Por que Voyage e não outro provedor: PACOTE.md, seção 3. Doc: REFERENCIAS.md itens 2-5.
//
// A Anthropic não tem modelo de embedding próprio — é por isso que esta semana é a
// primeira do curso com DUAS chaves de API diferentes. Ver .env.example.

const ENDPOINT = "https://api.voyageai.com/v1/embeddings";

// Preço confirmado em 2026-09-13 (REFERENCIAS.md item 3). Usado só pra ESTIMAR custo na
// tela — o valor de cobrança real é o que aparece no seu painel em dashboard.voyageai.com.
const PRECO_USD_POR_MILHAO_TOKENS = {
  "voyage-4-lite": 0.02,
  "voyage-4": 0.06,
};

/**
 * Gera embeddings para uma lista de textos.
 * @param {string[]} textos
 * @param {"query"|"document"} tipoDeEntrada — Voyage otimiza o vetor diferente se é uma
 *   pergunta curta ("query") ou um chunk de documento ("document"). Errar isso não quebra
 *   nada visivelmente — só piora a similaridade sem avisar. É o tipo de bug silencioso
 *   que esta semana existe pra ensinar a desconfiar de.
 * @param {string} [modelo]
 */
export async function gerarEmbeddings(textos, tipoDeEntrada, modelo) {
  const chave = process.env.VOYAGE_API_KEY;
  if (!chave) {
    throw new Error("VOYAGE_API_KEY não definida. Rode `npm run checar-chave` primeiro.");
  }
  if (!Array.isArray(textos) || textos.length === 0) {
    throw new Error("gerarEmbeddings precisa de uma lista não-vazia de textos.");
  }

  const modeloUsado = modelo ?? process.env.MODELO_EMBEDDING ?? "voyage-4-lite";

  const resposta = await fetch(ENDPOINT, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${chave}`,
    },
    body: JSON.stringify({
      input: textos,
      model: modeloUsado,
      input_type: tipoDeEntrada,
    }),
  });

  if (!resposta.ok) {
    const corpo = await resposta.text();
    throw new Error(`Voyage API respondeu ${resposta.status}: ${corpo}`);
  }

  const dados = await resposta.json();
  const vetores = dados.data
    .sort((a, b) => a.index - b.index)
    .map((item) => item.embedding);

  // A Voyage devolve uso de tokens no corpo. Se algum dia parar de devolver, caímos pra
  // uma estimativa grosseira (4 caracteres ~ 1 token em português) — melhor um número
  // aproximado na tela do que nenhum aviso de custo.
  const tokensUsados =
    dados.usage?.total_tokens ??
    Math.ceil(textos.reduce((soma, t) => soma + t.length, 0) / 4);

  const custoEstimadoUsd = (tokensUsados / 1_000_000) * (PRECO_USD_POR_MILHAO_TOKENS[modeloUsado] ?? 0);

  return { vetores, tokensUsados, custoEstimadoUsd, modelo: modeloUsado };
}
