// O documento único, cortado de três formas — pra rodar AO VIVO na aula 21.
//   node src/compare-chunking.js [caminho-do-arquivo]
// Sem chamada de API: isto só mostra os CORTES. O efeito no retrieval de verdade
// (pergunta que muda de resposta) é o `ask.js` rodado contra dois índices, no Lab 2.

import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { chunkFixo, chunkRecursivoComOverlap, chunkPorEstrutura } from "./chunking.js";

function terminaEmFrontFraseCompleta(texto) {
  const t = texto.trim();
  return /[.!?:]["')\]]?$/.test(t) || t.length === 0;
}

function relatar(nome, chunks) {
  console.log(`\n=== ${nome} (${chunks.length} chunk(s)) ===`);
  chunks.forEach((c, i) => {
    const cortouNoMeio = !terminaEmFrontFraseCompleta(c.texto);
    const aviso = cortouNoMeio ? "  <-- corta no meio da frase" : "";
    console.log(`[${i}] (${c.texto.length} chars)${aviso}`);
    console.log(`    "${c.texto.slice(0, 140).replace(/\n/g, " ")}${c.texto.length > 140 ? "..." : ""}"`);
  });
  const quantosCortados = chunks.filter((c) => !terminaEmFrontFraseCompleta(c.texto)).length;
  console.log(`  -> ${quantosCortados}/${chunks.length} chunk(s) terminam no meio de uma frase.`);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const caminho =
    process.argv[2] ?? fileURLToPath(new URL("../corpus/exemplo-dominio1/perfis.md", import.meta.url));
  const texto = await readFile(caminho, "utf8");

  console.log(`Documento: ${caminho} (${texto.length} caracteres)`);
  relatar("Estratégia 1 — fixo, ingênuo (400 chars, sem overlap)", chunkFixo(texto, 400));
  relatar("Estratégia 2 — recursivo com overlap (400 chars, 60 de overlap)", chunkRecursivoComOverlap(texto, 400, 60));
  relatar("Estratégia 3 — por estrutura (cabeçalho Markdown + metadados)", chunkPorEstrutura(texto, 500));
}
