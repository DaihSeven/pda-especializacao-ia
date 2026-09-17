// Smoke test da chave — rode com `npm run checar-chave` ANTES da aula 21.
// Não usa o loop nem streaming: só confirma que a chave existe e funciona.
// Custo desta chamada: menos de US$0,001 (poucos tokens, modelo mais barato). Ver
// REFERENCIAS.md item 5 pra tabela de preço completa.
import Anthropic from "@anthropic-ai/sdk";

const chave = process.env.ANTHROPIC_API_KEY;

if (!chave) {
  console.error("ANTHROPIC_API_KEY não está definida.");
  console.error("Copie .env.example para .env e preencha a chave (ver GUIA-DO-ALUNO.md, bloco de setup).");
  process.exit(1);
}

const client = new Anthropic({ apiKey: chave });

try {
  const resposta = await client.messages.create({
    model: process.env.MODELO_EVALS ?? "claude-haiku-4-5-20251001",
    max_tokens: 10,
    messages: [{ role: "user", content: "Responda só: ok" }],
  });
  const texto = resposta.content.find((b) => b.type === "text")?.text ?? "(sem texto)";
  console.log("Chave funciona. Resposta do modelo:", texto.trim());
} catch (erro) {
  console.error("A chamada falhou:", erro.message);
  console.error("Confira: chave copiada certa? Tem crédito na conta? Nome do modelo bate com REFERENCIAS.md?");
  process.exit(1);
}
