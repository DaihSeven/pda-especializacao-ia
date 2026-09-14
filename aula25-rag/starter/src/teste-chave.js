// Smoke test das DUAS chaves desta semana. Rode antes de qualquer coisa:
//   node --env-file=.env src/teste-chave.js

import { gerarEmbeddings } from "./embeddings.js";
import { gerarResposta } from "./anthropic.js";

let falhou = false;

try {
  const { vetores, tokensUsados, custoEstimadoUsd } = await gerarEmbeddings(["teste"], "document");
  console.log(
    `VOYAGE_API_KEY funciona. Vetor de dimensão ${vetores[0].length}. ` +
      `Custo desta chamada: US$ ${custoEstimadoUsd.toFixed(8)} (${tokensUsados} token(s)).`
  );
} catch (erro) {
  falhou = true;
  console.error("VOYAGE_API_KEY falhou:", erro.message);
}

try {
  const { texto } = await gerarResposta({
    systemPrompt: "Responda só a palavra pedida, nada mais.",
    mensagemUsuario: "Responda exatamente: ok",
    maxTokens: 8,
  });
  console.log(`ANTHROPIC_API_KEY funciona. Resposta do modelo: ${texto.trim()}`);
} catch (erro) {
  falhou = true;
  console.error("ANTHROPIC_API_KEY falhou:", erro.message);
}

if (falhou) process.exit(1);
