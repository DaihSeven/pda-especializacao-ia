// Este teste É o ponto de julgamento indispensável da semana (ver src/filtro.js e
// PACOTE.md seção 7). Ele falha enquanto `deveIndexar` indexar tudo. Ele NÃO diz qual é
// a regra certa pro seu domínio — só prova que você escreveu uma regra e que ela exclui
// pelo menos um tipo de conteúdo real do seu repositório.
//
// Diferente de tests/vectorStore.test.js e tests/chunking.test.js, ESTE arquivo pode
// (e deve) ser adaptado por você: os nomes de arquivo abaixo são exemplos do domínio 1
// do catálogo. Troque pelos nomes reais do SEU repositório antes de rodar de verdade —
// o que não muda é a forma do teste: "pelo menos um arquivo real fica de fora".

import { test } from "node:test";
import assert from "node:assert/strict";
import { deveIndexar } from "../src/filtro.js";

test("pelo menos um tipo de conteúdo real é excluído (edite os exemplos pro seu domínio)", () => {
  const exemploDeRascunho = deveIndexar("rascunho-pessoal.md", "anotação solta, sem revisão, não é conteúdo do produto");
  const exemploDeConteudoValido = deveIndexar("perfis.md", "conteúdo real que o RAG deveria conseguir responder");

  assert.equal(exemploDeRascunho, false, "seu filtro ainda está indexando tudo — decida o que fica de fora");
  assert.equal(exemploDeConteudoValido, true, "seu filtro está excluindo até o conteúdo que deveria entrar");
});

test("caminhos dentro de pastas geradas nunca entram, não importa o filtro do domínio", () => {
  assert.equal(deveIndexar("node_modules/pacote/README.md", "qualquer coisa"), false);
  assert.equal(deveIndexar("data/indice.json", "qualquer coisa"), false);
});
