// NÃO EDITE ESTE ARQUIVO — especificação das 3 estratégias. Testes puros, sem API.

import { test } from "node:test";
import assert from "node:assert/strict";
import { chunkFixo, chunkRecursivoComOverlap, chunkPorEstrutura } from "../src/chunking.js";

test("chunkFixo corta em pedaços exatos de N caracteres, sem olhar limite de palavra", () => {
  const chunks = chunkFixo("abcdefghij", 4);
  assert.deepEqual(
    chunks.map((c) => c.texto),
    ["abcd", "efgh", "ij"]
  );
});

test("chunkFixo PODE cortar no meio de uma palavra — é o comportamento que a semana existe pra expor", () => {
  const texto = "A raposa marrom pula sobre o cachorro."; // 39 caracteres
  const chunks = chunkFixo(texto, 10);
  // "A raposa m" — corta a palavra "marrom" ao meio. Isso é intencional: o ponto do
  // Lab 1 é bater nesse corte com uma pergunta de verdade antes de ler esta linha.
  assert.equal(chunks[0].texto, "A raposa m");
  assert.notEqual(chunks[0].texto.slice(-1), " ");
});

test("chunkRecursivoComOverlap não divide um texto menor que o tamanho-alvo", () => {
  const texto = "Uma frase curta.";
  const chunks = chunkRecursivoComOverlap(texto, 400, 60);
  assert.equal(chunks.length, 1);
  assert.equal(chunks[0].texto, texto);
});

test("chunkRecursivoComOverlap propaga sobreposição real entre chunks consecutivos", () => {
  const paragrafo1 = "Primeiro parágrafo bem grande. ".repeat(6).trim();
  const paragrafo2 = "Segundo parágrafo, também grande. ".repeat(6).trim();
  const texto = `${paragrafo1}\n\n${paragrafo2}`;
  const chunks = chunkRecursivoComOverlap(texto, 120, 30);
  assert.ok(chunks.length >= 2, "texto grande precisa gerar mais de um chunk");
  const caudaDoPrimeiro = chunks[0].texto.slice(-20);
  assert.ok(
    chunks[1].texto.includes(caudaDoPrimeiro.trim().split(" ").slice(-2).join(" ")),
    "o segundo chunk deveria conter um pedaço do fim do primeiro (a sobreposição)"
  );
});

test("chunkPorEstrutura anexa o título da seção como metadado, não como texto embutido", () => {
  const md = `Texto antes de qualquer cabeçalho.\n\n## Regras da vitrine\n\nSó perfis aprovados aparecem.\n\n## FAQ\n\nQuanto custa? Nada.`;
  const chunks = chunkPorEstrutura(md, 500);
  const semTitulo = chunks.find((c) => c.metadados.secao === "(sem título)");
  const regras = chunks.find((c) => c.metadados.secao === "Regras da vitrine");
  const faq = chunks.find((c) => c.metadados.secao === "FAQ");

  assert.ok(semTitulo, "conteúdo antes do primeiro cabeçalho precisa existir como seção própria");
  assert.ok(regras && regras.texto.includes("Só perfis aprovados"));
  assert.ok(faq && faq.texto.includes("Quanto custa"));
  // O título não deve estar duplicado dentro do texto do chunk.
  assert.ok(!regras.texto.includes("Regras da vitrine"));
});
