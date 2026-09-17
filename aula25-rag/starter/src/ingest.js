// Pipeline de ingestão: lê o corpus -> filtra (src/filtro.js, seu TODO) -> chunka ->
// embeda (Voyage) -> salva em data/indice.json. Roda com:
//
//   node --env-file=.env src/ingest.js [pasta-do-corpus] [--estrategia=recursivo_overlap]
//     [--tamanho=400] [--saida=data/indice.json]
//
// Se não passar pasta, usa ../corpus/exemplo-dominio1 (a base de exemplo). No SEU
// projeto, aponte pra dentro do seu próprio repositório (GUIA-DO-ALUNO.md, Lab da
// Aula 25).

import { readdir, readFile, stat } from "node:fs/promises";
import { join, relative, extname } from "node:path";
import { fileURLToPath } from "node:url";
import { deveIndexar } from "./filtro.js";
import { ESTRATEGIAS } from "./chunking.js";
import { gerarEmbeddings } from "./embeddings.js";
import { LocalVectorStore } from "./vectorStore.js";

const EXTENSOES_TEXTO = new Set([".md", ".txt", ".mdx"]);

async function listarArquivos(pasta, raiz = pasta) {
  const entradas = await readdir(pasta, { withFileTypes: true });
  let arquivos = [];
  for (const entrada of entradas) {
    const caminho = join(pasta, entrada.name);
    if (entrada.isDirectory()) {
      arquivos = arquivos.concat(await listarArquivos(caminho, raiz));
    } else if (EXTENSOES_TEXTO.has(extname(entrada.name))) {
      arquivos.push(caminho);
    }
  }
  return arquivos;
}

export async function ingerir({ pastaCorpus, estrategiaNome = "recursivo_overlap", tamanho, caminhoIndice }) {
  const arquivos = await listarArquivos(pastaCorpus);
  const chunkFnBase = ESTRATEGIAS[estrategiaNome];
  if (!chunkFnBase) throw new Error(`Estratégia desconhecida: ${estrategiaNome}`);
  const chunkFn = (texto) => (tamanho ? chunkFnBase(texto, tamanho) : chunkFnBase(texto));

  const candidatos = [];
  let excluidos = 0;
  for (const caminho of arquivos) {
    const conteudo = await readFile(caminho, "utf8");
    const caminhoRelativo = relative(pastaCorpus, caminho);
    if (!deveIndexar(caminhoRelativo, conteudo)) {
      excluidos++;
      continue;
    }
    const partes = chunkFn(conteudo);
    for (const parte of partes) {
      candidatos.push({
        texto: parte.texto,
        metadados: { ...parte.metadados, arquivo: caminhoRelativo },
      });
    }
  }

  if (candidatos.length === 0) {
    throw new Error(
      "Nenhum chunk pra indexar. Ou a pasta está vazia, ou o filtro em src/filtro.js excluiu tudo — confira os dois."
    );
  }

  const { vetores, tokensUsados, custoEstimadoUsd, modelo } = await gerarEmbeddings(
    candidatos.map((c) => c.texto),
    "document"
  );

  const store = new LocalVectorStore(caminhoIndice);
  store.adicionar(
    candidatos.map((c, i) => ({
      id: `${c.metadados.arquivo}#${i}`,
      texto: c.texto,
      metadados: c.metadados,
      embedding: vetores[i],
    }))
  );
  await store.salvar();

  return {
    arquivosLidos: arquivos.length,
    arquivosExcluidos: excluidos,
    chunksIndexados: candidatos.length,
    tokensUsados,
    custoEstimadoUsd,
    modelo,
    caminhoIndice,
  };
}

// Execução via CLI
if (import.meta.url === `file://${process.argv[1]}`) {
  const args = process.argv.slice(2);
  const flagEstrategia = args.find((a) => a.startsWith("--estrategia="));
  const estrategiaNome = flagEstrategia ? flagEstrategia.split("=")[1] : "recursivo_overlap";
  const flagTamanho = args.find((a) => a.startsWith("--tamanho="));
  const tamanho = flagTamanho ? Number(flagTamanho.split("=")[1]) : undefined;
  const flagSaida = args.find((a) => a.startsWith("--saida="));
  const pastaCorpus = args.find((a) => !a.startsWith("--")) ?? new URL("../corpus/exemplo-dominio1", import.meta.url).pathname;
  const caminhoIndice = flagSaida
    ? flagSaida.split("=")[1]
    : fileURLToPath(new URL("../data/indice.json", import.meta.url));

  console.log(`Ingerindo "${pastaCorpus}" com a estratégia "${estrategiaNome}"${tamanho ? ` (tamanho=${tamanho})` : ""}...`);
  const resultado = await ingerir({ pastaCorpus, estrategiaNome, tamanho, caminhoIndice });
  console.log(`
Arquivos lidos:      ${resultado.arquivosLidos}
Arquivos excluídos:  ${resultado.arquivosExcluidos} (pelo seu filtro em src/filtro.js)
Chunks indexados:    ${resultado.chunksIndexados}
Tokens usados:       ${resultado.tokensUsados} (modelo ${resultado.modelo})
Custo estimado:      US$ ${resultado.custoEstimadoUsd.toFixed(6)}
Índice salvo em:     ${resultado.caminhoIndice}
`);
}
