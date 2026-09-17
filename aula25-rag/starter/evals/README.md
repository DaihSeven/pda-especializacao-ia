# Eval de retrieval — extensão do formato da Semana 11

Isto NÃO é um formato novo. É `evals/README.md` e `evals/casos.json` da Semana 11
(`aula21-software-com-llm-dentro/starter/evals/README.md`) com **um campo a mais**. Se
você pulou a Semana 11, leia aquele README primeiro — este arquivo só documenta o delta.

## Por que medir retrieval separado da resposta final

RAG sem eval é chute. Mas o eval da Semana 11 mede a ponta errada pra este problema
específico: ele checa se a **resposta final** bateu com o esperado — e uma resposta pode
sair errada por dois motivos completamente diferentes:

1. O chunk certo **não voltou** da busca (problema de retrieval — chunking, embedding).
2. O chunk certo voltou, mas o modelo **não usou direito** (problema de prompt/geração).

Se você só mede a resposta final, não sabe qual dos dois é. `runner-retrieval.js` mede
só o primeiro — isola a variável.

## O campo novo: `contexto_esperado`

Pegue os **mesmos 5 casos** que você já tem em `evals/casos.json` do SEU projeto
(Semana 11) e adicione, em cada um, um campo `contexto_esperado`: um array de trechos
exatos que **precisam aparecer em algum chunk recuperado** pra dizer que o retrieval
funcionou. Não é a resposta pronta — é a evidência mínima que a resposta precisaria pra
existir.

```json
{
  "id": "mesmo-id-de-antes",
  "entrada": "mesma pergunta de antes",
  "criterio_aprovacao": "mesmo critério de antes",
  "tipo": "retrieval",
  "contexto_esperado": ["trecho exato que precisa estar no chunk recuperado"]
}
```

Veja `casos.exemplo.json` — os 5 casos preenchidos pro domínio 1 (Listagem de perfis),
contra o corpus de exemplo em `corpus/exemplo-dominio1/`.

## Como rodar o antes/depois

1. Gere dois índices do MESMO corpus com estratégias de chunking diferentes:

   ```bash
   node --env-file=.env src/ingest.js SEU_CORPUS --estrategia=fixo --tamanho=240 --saida=data/indice-antes.json
   node --env-file=.env src/ingest.js SEU_CORPUS --estrategia=recursivo_overlap --saida=data/indice-depois.json
   ```

2. Rode o runner contra os dois:

   ```bash
   node --env-file=.env evals/runner-retrieval.js --casos=SEU_CAMINHO/evals/casos.json \
     --antes=data/indice-antes.json --depois=data/indice-depois.json
   ```

3. Leia o resumo. Se o número não melhorou, isso é dado, não bug — significa que o
   chunking não era o gargalo do SEU caso, e vale investigar o modelo de embedding ou o
   `k` da busca antes de mexer em chunking de novo.

## O que este runner NÃO faz

Não substitui `evals/runner.js` da Semana 11 — os dois continuam rodando, medindo coisas
diferentes. Não precisa de chave da Anthropic (só da Voyage, pra embedar a pergunta) —
mas se o SEU `ask.js` também depende da Anthropic pra gerar a resposta final, mantenha as
duas chaves configuradas.
