# Relatório de validação — skill de <nome do colega>

Validador: <seu nome>
Skill validada: `<caminho/nome-da-skill>` do repositório de <nome do colega>
Domínio do projeto do colega (catálogo): <1-7>

> Formato baseado em
> <https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices> —
> a doc recomenda pelo menos 3 cenários de avaliação antes de considerar uma skill
> pronta: dispara quando deve, não dispara quando não deve, e um caso-limite ambíguo.
> Cada cenário abaixo pede o comando bruto e o resultado bruto — não escreva só a
> conclusão.

---

## Cenário 1 — dispara quando deve

**O que eu pedi (prompt exato ou comando):**

```
TODO
```

**O que a skill fez:**

TODO — descreva o que aconteceu. Ela invocou? O resultado bateu com o que o `SKILL.md`
promete fazer?

**Resultado:** [ ] passou · [ ] falhou

---

## Cenário 2 — não dispara quando não deve

Escolha uma tarefa do domínio do colega que é **parecida**, mas que o `SKILL.md`
explicitamente não descreve como gatilho.

**O que eu pedi:**

```
TODO
```

**O que a skill fez:**

TODO — ela ficou de fora (correto) ou disparou sem devia (falha)?

**Resultado:** [ ] passou · [ ] falhou

---

## Cenário 3 — falso positivo

Escolha uma tarefa de um domínio **diferente** do que a skill deveria cobrir, mas que
usa palavras parecidas com a `description` dela (o teste mais difícil).

**O que eu pedi:**

```
TODO
```

**O que a skill fez:**

TODO

**Resultado:** [ ] passou · [ ] falhou

---

## (Bônus) Cenário 4 — o seu próprio jeito de quebrar

Um jeito de fazer a skill falhar que nenhum dos três cenários acima cobre.

**O que eu pedi:**

```
TODO
```

**O que a skill fez:**

TODO

---

## Resumo pro autor da skill

O que eu mudaria na `description`, no `allowed-tools` ou na divisão entre `SKILL.md`
e `reference.md`, com base no que vi acima:

TODO
