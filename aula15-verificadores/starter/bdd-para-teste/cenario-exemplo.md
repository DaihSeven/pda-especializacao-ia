# Exemplo trabalhado: de cenário BDD (semana 6) a teste automatizado

Este é o **exemplo modelo**, escrito para o domínio 1 do catálogo (Listagem
de perfis de alunos da PDA), pra você ver a régua antes de mexer nos SEUS 3
cenários da Semana 6 (`aula11-diagnostico-documentos-rpi`).

> Se o formato dos seus cenários da Semana 6 usa nomes de arquivo ou
> estrutura diferente do que está descrito aqui, adapte — o que importa é
> Given/When/Then existindo em algum lugar do seu repo, não o nome do
> arquivo.

## O cenário BDD (como ele deveria estar escrito, na Semana 6)

```gherkin
Cenário: perfil sem habilidades cadastradas não aparece em busca por habilidade
  Dado que o perfil "Ana Souza" existe na listagem sem nenhuma habilidade cadastrada
  Quando alguém busca perfis pela habilidade "React"
  Então o perfil "Ana Souza" não deve aparecer no resultado
```

Formato Given/When/Then (Gherkin) — referência oficial em `REFERENCIAS.md` (#11).

## O teste automatizado equivalente (TypeScript, `node:test`)

```typescript
// tests/busca-por-habilidade.test.ts
import { test } from "node:test";
import assert from "node:assert/strict";
import { buscarPorHabilidade } from "../src/perfis.js";

test("perfil sem habilidades cadastradas não aparece em busca por habilidade", () => {
  // Given
  const perfis = [
    { nome: "Ana Souza", habilidades: [] },
    { nome: "Bruno Lima", habilidades: ["React", "Node"] },
  ];

  // When
  const resultado = buscarPorHabilidade(perfis, "React");

  // Then
  assert.equal(
    resultado.some((p) => p.nome === "Ana Souza"),
    false,
  );
});
```

Repare: **um cenário BDD = um teste**, não um arquivo de testes genérico com
vários `it()` soltos. O nome do teste é a frase do "Cenário:", quase palavra
por palavra — isso é o que faz o teste servir de documentação executável,
não só de checagem.

## O ciclo red → green nesse exemplo (resumo — log completo é outro arquivo)

1. **Red:** escreva o teste acima ANTES de `buscarPorHabilidade` existir (ou
   antes de filtrar corretamente perfis sem habilidade). Rode `npm test`.
   Ele falha — `buscarPorHabilidade is not a function` ou o assert falha.
   Isso é esperado. **Commit o teste falhando, sozinho, antes de tocar no
   `src/`.**
2. **Green:** implemente só o necessário pra esse teste passar. Rode
   `npm test` de novo. Passa. Commit.
3. **Refactor (opcional, se sobrar tempo):** limpe a implementação sem mudar
   comportamento. Rode `npm test` de novo a cada mudança — se ficar
   vermelho, o refactor quebrou algo, desfaça.

O template completo do log (com os comandos exatos e onde colar a saída do
terminal) está em `starter/red-green-refactor-log-TEMPLATE.md`.
