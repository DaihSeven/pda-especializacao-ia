// Runner de eval de RETRIEVAL — mede se o chunk certo volta, não se a resposta final
// está certa (isso é o `evals/runner.js` da Semana 11, que continua existindo no SEU
// projeto e mede a outra ponta do pipeline).
//
// Uso:
//   node --env-file=.env evals/runner-retrieval.js --antes=data/indice-fixo.json --depois=data/indice-melhor.json
//   node --env-file=.env evals/runner-retrieval.js --exemplo --antes=... --depois=...
//   node --env-file=.env evals/runner-retrieval.js --casos=/caminho/pro/seu/projeto/evals/casos.json --antes=... --depois=...
//
// "--antes" e "--depois" são dois índices (`data/indice.json` gerados com
// `npm run ingerir -- --saida=...`) usando DUAS estratégias de chunking diferentes.
// Se você passar só "--antes", ele mede um índice só (sem comparação).

import { readFileSync } from "node:fs";
import { gerarEmbeddings } from "../src/embeddings.js";
import { LocalVectorStore } from "../src/vectorStore.js";
import { avaliarCasoRetrieval } from "./avaliar-retrieval.js";

function pegarFlag(args, nome) {
  const achado = args.find((a) => a.startsWith(`--${nome}=`));
  return achado ? achado.split("=")[1] : undefined;
}

async function medir(caminhoIndice, casos, k) {
  const store = await new LocalVectorStore(caminhoIndice).carregar();
  let passaram = 0;
  const detalhes = [];
  for (const caso of casos) {
    if (!caso.contexto_esperado || caso.contexto_esperado.some((c) => c.startsWith("TODO"))) {
      detalhes.push({ id: caso.id, status: "PULADO (sem contexto_esperado preenchido)" });
      continue;
    }
    const { vetores } = await gerarEmbeddings([caso.entrada], "query");
    const recuperados = store.buscar(vetores[0], k);
    const { passou, faltando } = avaliarCasoRetrieval(caso, recuperados);
    if (passou) passaram++;
    detalhes.push({ id: caso.id, status: passou ? "PASSOU" : `FALHOU (faltou: ${faltando.join(", ")})` });
  }
  return { passaram, total: casos.length, detalhes };
}

const args = process.argv.slice(2);
const usaExemplo = args.includes("--exemplo");
const caminhoCasos = pegarFlag(args, "casos") ?? new URL(usaExemplo ? "./casos.exemplo.json" : "./casos.json", import.meta.url);
const caminhoAntes = pegarFlag(args, "antes");
const caminhoDepois = pegarFlag(args, "depois");
const k = pegarFlag(args, "k") ? Number(pegarFlag(args, "k")) : 4;

if (!caminhoAntes && !caminhoDepois) {
  console.error("Passe pelo menos --antes=<indice.json> (e opcionalmente --depois=<indice.json>).");
  process.exit(1);
}
if (!process.env.VOYAGE_API_KEY) {
  console.error("VOYAGE_API_KEY não definida. Rode `npm run checar-chave` primeiro.");
  process.exit(1);
}

const casos = JSON.parse(readFileSync(caminhoCasos, "utf8"));
console.log(`Medindo retrieval de ${casos.length} caso(s) de ${caminhoCasos}...\n`);

const resultadoAntes = caminhoAntes ? await medir(caminhoAntes, casos, k) : null;
const resultadoDepois = caminhoDepois ? await medir(caminhoDepois, casos, k) : null;

function imprimir(rotulo, resultado) {
  if (!resultado) return;
  console.log(`--- ${rotulo} ---`);
  for (const d of resultado.detalhes) console.log(`  ${d.id.padEnd(30)} ${d.status}`);
  console.log(`  => ${resultado.passaram}/${resultado.total} passaram\n`);
}

imprimir(`ANTES (${caminhoAntes})`, resultadoAntes);
imprimir(`DEPOIS (${caminhoDepois})`, resultadoDepois);

if (resultadoAntes && resultadoDepois) {
  console.log(
    `Resumo: ${resultadoAntes.passaram}/${resultadoAntes.total} -> ${resultadoDepois.passaram}/${resultadoDepois.total} ` +
      `depois do ajuste de chunking.`
  );
  if (resultadoDepois.passaram <= resultadoAntes.passaram) {
    console.log(
      "O ajuste não melhorou (ou piorou) a taxa de acerto. Isso é informação real, não bug do" +
        " script — significa que o problema do seu retrieval não estava (só) no chunking."
    );
  }
}
