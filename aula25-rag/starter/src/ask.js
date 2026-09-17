// CLI de pergunta. Roda o pipeline inteiro: embeda a pergunta -> busca no índice ->
// monta o prompt só com o que voltou -> gera a resposta.
//
//   node --env-file=.env src/ask.js "sua pergunta"
//   node --env-file=.env src/ask.js "sua pergunta" --sem-rag   (pula o retrieval — pra
//     comparar com/sem, é o "antes" da demo da aula 21)
//   node --env-file=.env src/ask.js "sua pergunta" --k=6       (muda quantos chunks vêm)

import { fileURLToPath } from "node:url";
import { gerarEmbeddings } from "./embeddings.js";
import { LocalVectorStore } from "./vectorStore.js";
import { gerarResposta } from "./anthropic.js";

const SYSTEM_PROMPT_COM_RAG = `Você responde SOMENTE com base no CONTEXTO fornecido abaixo.
Se o contexto não contém a resposta, diga exatamente isso — não complete com conhecimento
geral. Cite de qual arquivo veio a informação quando possível.`;

export async function perguntar({ pergunta, caminhoIndice, k = 4, semRag = false }) {
  if (semRag) {
    const { texto } = await gerarResposta({
      systemPrompt: "Responda com o que você sabe, em poucas frases.",
      mensagemUsuario: pergunta,
    });
    return { resposta: texto, chunksUsados: [] };
  }

  const store = await new LocalVectorStore(caminhoIndice).carregar();
  const { vetores } = await gerarEmbeddings([pergunta], "query");
  const encontrados = store.buscar(vetores[0], k);

  const contexto = encontrados
    .map((item, i) => `[Trecho ${i + 1} — ${item.metadados.arquivo}]\n${item.texto}`)
    .join("\n\n");

  const { texto } = await gerarResposta({
    systemPrompt: SYSTEM_PROMPT_COM_RAG,
    mensagemUsuario: `CONTEXTO:\n${contexto}\n\nPERGUNTA: ${pergunta}`,
  });

  return { resposta: texto, chunksUsados: encontrados };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const args = process.argv.slice(2);
  const semRag = args.includes("--sem-rag");
  const flagK = args.find((a) => a.startsWith("--k="));
  const k = flagK ? Number(flagK.split("=")[1]) : 4;
  const pergunta = args.find((a) => !a.startsWith("--"));

  if (!pergunta) {
    console.error('Uso: node src/ask.js "sua pergunta" [--sem-rag] [--k=4]');
    process.exit(1);
  }

  const caminhoIndice = fileURLToPath(new URL("../data/indice.json", import.meta.url));
  const { resposta, chunksUsados } = await perguntar({ pergunta, caminhoIndice, k, semRag });

  if (chunksUsados.length > 0) {
    console.log("--- chunks recuperados (do mais parecido pro menos) ---");
    for (const c of chunksUsados) {
      console.log(`  [${c.pontuacao.toFixed(3)}] ${c.metadados.arquivo} — "${c.texto.slice(0, 80).replace(/\n/g, " ")}..."`);
    }
    console.log("---");
  } else if (semRag) {
    console.log("--- rodando SEM retrieval (baseline) ---");
  }

  console.log("\nResposta:\n" + resposta);
}
