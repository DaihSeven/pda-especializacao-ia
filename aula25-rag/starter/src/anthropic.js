// Wrapper fino sobre a Messages API da Anthropic. Zero dependência — só fetch nativo
// (Node 20+ traz fetch de fábrica). Já usa a MESMA chave e o MESMO modelo da Semana 11;
// nada aqui é novo em termos de fronteira de ferramenta, só reaproveitado — a API em si
// já foi verificada e referenciada em `aula21-software-com-llm-dentro/REFERENCIAS.md`.

const ENDPOINT = "https://api.anthropic.com/v1/messages";
const VERSAO_API = "2023-06-01";

export async function gerarResposta({ systemPrompt, mensagemUsuario, modelo, maxTokens = 1024 }) {
  const chave = process.env.ANTHROPIC_API_KEY;
  if (!chave) {
    throw new Error("ANTHROPIC_API_KEY não definida. Rode `npm run checar-chave` primeiro.");
  }

  const resposta = await fetch(ENDPOINT, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-api-key": chave,
      "anthropic-version": VERSAO_API,
    },
    body: JSON.stringify({
      model: modelo ?? process.env.MODELO_PRINCIPAL ?? "claude-sonnet-5",
      max_tokens: maxTokens,
      system: systemPrompt,
      messages: [{ role: "user", content: mensagemUsuario }],
    }),
  });

  if (!resposta.ok) {
    const corpo = await resposta.text();
    throw new Error(`Anthropic API respondeu ${resposta.status}: ${corpo}`);
  }

  const dados = await resposta.json();
  const texto = dados.content?.map((bloco) => bloco.text ?? "").join("") ?? "";
  return { texto, uso: dados.usage };
}
