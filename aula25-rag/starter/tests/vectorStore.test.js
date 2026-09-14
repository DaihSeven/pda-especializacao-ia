// NÃO EDITE ESTE ARQUIVO. Ele é a especificação de como similaridade e busca devem se
// comportar — mesma convenção desde a Semana 8 (`npm run verify`) e a Semana 10 (MCP
// client). Nenhum destes testes chama API — são puramente matemática, rodam offline.

import { test } from "node:test";
import assert from "node:assert/strict";
import { similaridadeCosseno, LocalVectorStore } from "../src/vectorStore.js";

test("vetores idênticos têm similaridade 1", () => {
  const v = [1, 2, 3];
  assert.equal(similaridadeCosseno(v, v), 1);
});

test("vetores ortogonais têm similaridade 0", () => {
  assert.equal(similaridadeCosseno([1, 0], [0, 1]), 0);
});

test("vetores opostos têm similaridade -1", () => {
  // Ponto flutuante: compara com tolerância, não com igualdade exata.
  assert.ok(Math.abs(similaridadeCosseno([1, 2], [-1, -2]) - -1) < 1e-9);
});

test("similaridadeCosseno rejeita vetores de tamanhos diferentes", () => {
  assert.throws(() => similaridadeCosseno([1, 2], [1, 2, 3]));
});

test("buscar devolve os k itens mais parecidos, em ordem decrescente de pontuação", () => {
  const store = new LocalVectorStore("/tmp/nao-usado.json");
  store.adicionar([
    { id: "a", texto: "a", metadados: {}, embedding: [1, 0] }, // igual à consulta
    { id: "b", texto: "b", metadados: {}, embedding: [0, 1] }, // ortogonal
    { id: "c", texto: "c", metadados: {}, embedding: [0.9, 0.1] }, // quase igual
  ]);
  const resultado = store.buscar([1, 0], 2);
  assert.equal(resultado.length, 2);
  assert.equal(resultado[0].id, "a");
  assert.equal(resultado[1].id, "c");
  assert.ok(resultado[0].pontuacao >= resultado[1].pontuacao);
});

test("salvar e carregar preservam os itens do índice", async () => {
  const { mkdtemp, rm } = await import("node:fs/promises");
  const { tmpdir } = await import("node:os");
  const { join } = await import("node:path");
  const pasta = await mkdtemp(join(tmpdir(), "vectorstore-"));
  const caminho = join(pasta, "indice.json");

  const original = new LocalVectorStore(caminho);
  original.adicionar([{ id: "x", texto: "algum texto", metadados: { arquivo: "x.md" }, embedding: [1, 2, 3] }]);
  await original.salvar();

  const carregado = await new LocalVectorStore(caminho).carregar();
  assert.equal(carregado.tamanho, 1);
  assert.equal(carregado.itens[0].texto, "algum texto");

  await rm(pasta, { recursive: true, force: true });
});
