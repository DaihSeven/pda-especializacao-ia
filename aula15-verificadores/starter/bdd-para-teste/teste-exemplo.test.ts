// Arquivo de referência — mesmo conteúdo do bloco de código em
// cenario-exemplo.md, só que como arquivo de verdade pra copiar/colar sem
// erro de transcrição. Ajuste o caminho do import pro seu projeto.

import { test } from "node:test";
import assert from "node:assert/strict";
import { buscarPorHabilidade } from "../src/perfis.js";

test("perfil sem habilidades cadastradas não aparece em busca por habilidade", () => {
  const perfis = [
    { nome: "Ana Souza", habilidades: [] as string[] },
    { nome: "Bruno Lima", habilidades: ["React", "Node"] },
  ];

  const resultado = buscarPorHabilidade(perfis, "React");

  assert.equal(
    resultado.some((p) => p.nome === "Ana Souza"),
    false,
  );
});
