# 🤖 Semana 13 — RAG: Atividade Prática (Entregável)

**Módulo 4 — Harness & Loop Engineer**

|  |  |
| :---- | :---- |
| **Material da aula** | `aula25-rag/` no seu fork de pda-especializacao-ia |
| **Repositório do projeto** | seu repo próprio (criado na Semana 2) |
| **Formulário de entrega** | https://forms.gle/PSd6i65g44GwBMgq6 |
| **Prazo de entrega** | Antes da aula 1 da semana 14 |

Duas entregas. A **mínima** todo mundo consegue até o fim da aula 26. A **completa** é o
pipeline de RAG com prova de que o retrieval melhorou — é o que a semana pede no bloco
da grade.

---

## O que você vai entregar

Um índice de RAG indexado sobre a base de documentos do **seu** projeto (qualquer domínio
do catálogo), com `src/filtro.js` preenchido e justificado, uma pergunta que você
provou bater numa falha de chunking ingênuo e depois sair certa com chunking melhor, e o
`eval-retrieval` rodando antes/depois pra provar a melhora com número, não com a palavra.

## Por que essa atividade existe

Prova que você sabe fazer a distinção que a semana inteira treina: **retrieval e geração
são etapas diferentes, que falham por motivos diferentes.** Um app que só chama
`ask.js` e mostra uma resposta bonita não prova isso — prova só que a API respondeu. O
que esta entrega comprova especificamente é que você consegue (1) **decidir, com
julgamento próprio, o que representa a voz atual do seu projeto** — não é o agente que
decide isso, é `src/filtro.js` — e (2) **medir se o chunk certo voltou da busca, separado
de medir se a resposta final ficou boa**, porque uma resposta pode sair errada por dois
motivos diferentes e só quem separa as duas etapas sabe qual é. Se esta entrega estivesse
errada, o sintoma seria: seu RAG "funciona" na demo com uma pergunta fácil, mas ninguém
sabe dizer se ele recupera o chunk certo pra uma pergunta difícil — porque nunca foi
medido, só sentido.

## Pré-requisitos

- Bloco Alura **LangChain: criando chatbots inteligentes com RAG** concluído
  (`PACOTE.md`, seção 1)
- Duas chaves de API configuradas e testadas (`npm run checar-chave` verde)
- `npm test` verde no `starter/` (os 16 testes, incluindo os 2 de `filtro.test.js` depois
  de editados)

## Passo a passo

1. No seu repositório de projeto, junte um corpus real: os documentos de "produto" do
   seu domínio, ou — se o seu domínio ainda tem pouco texto — os artefatos que você já
   escreveu desde a Semana 2 (`starter/corpus/exemplo-pouco-texto/README.md` tem o passo
   a passo de 5 minutos).
2. Edite `starter/src/filtro.js` (`deveIndexar`) e os exemplos de
   `starter/tests/filtro.test.js` pros nomes reais do seu repositório, até `npm test`
   fechar 16/16 com uma regra que **exclui pelo menos um arquivo real** — nomeie a
   justificativa no comentário ao lado do `return`.
3. Formule uma pergunta sobre o seu corpus cuja resposta esteja perto de uma quebra de
   parágrafo ou seção (use `node src/compare-chunking.js` num arquivo seu pra achar o
   candidato). Indexe com chunking ingênuo de propósito e confirme que a pergunta sai
   errada ou incompleta:

   ```bash
   node --env-file=.env src/ingest.js SEU_CORPUS --estrategia=fixo --tamanho=240 --saida=data/indice-antes.json
   ```

4. Reindexe a MESMA pasta com chunking recursivo e confirme que a mesma pergunta sai
   certa agora:

   ```bash
   node --env-file=.env src/ingest.js SEU_CORPUS --estrategia=recursivo_overlap --saida=data/indice-depois.json
   ```

5. Preencha os 5 casos em `evals/casos.json`, seguindo `evals/README.md` (o campo novo é
   `contexto_esperado`) — inclua o caso da pergunta que você acabou de resolver e pelo
   menos um caso que **não repete as mesmas palavras da resposta** (o tipo de pergunta
   que mais expõe RAG ingênuo).
6. Rode o antes/depois e anote o número:

   ```bash
   node --env-file=.env evals/runner-retrieval.js --casos=evals/casos.json --antes=data/indice-antes.json --depois=data/indice-depois.json
   ```

7. Escreva um `RELATORIO-RAG.md` no seu repo (estrutura sugerida abaixo).
8. Preencha o parágrafo pro dono do negócio (veja o exemplo modelo abaixo antes de
   escrever o seu).

### `RELATORIO-RAG.md` — estrutura sugerida

```markdown
# RAG — Semana 13

## O que ficou de fora da base, e por quê
(o que `src/filtro.js` exclui — pelo menos um item real, com justificativa)

## A falha que reproduzi
(a pergunta, o chunk que voltou incompleto, o trecho exato que faltou)

## O conserto
(qual estratégia de chunking, e por que ela resolveu ESTE caso)

## O antes/depois do eval-retrieval
(cole a saída de `runner-retrieval.js`)

## O que eu ainda não sei se está certo
(honestidade aqui vale mais que 5/5 verde sem explicação)
```

---

## O parágrafo para o dono do negócio

**Enunciado da tarefa:** escreva de 3 a 5 frases, sem jargão técnico, explicando pra
alguém que não programa **que tipo de pergunta esse RAG resolve melhor que antes** e
**por que só "colar tudo no prompt" não é a mesma coisa** — sem citar "chunking",
"embedding" ou "vetor" pelo nome.

**Exemplo modelo — domínio 1 (Listagem de perfis de alunos da PDA):**

> Hoje, quem administra a vitrine de perfis dos alunos da PDA acumula regras, prazos e
> exceções em vários documentos separados — e responder rápido a uma pergunta como "qual
> é o valor da bolsa-auxílio para quem mora fora de São Paulo?" significa procurar no
> documento certo, na hora certa. Este sistema deixa a coordenação perguntar em linguagem
> normal e recebe a resposta com a fonte citada, sem precisar abrir cada arquivo. A
> diferença que importa é que o sistema não lê "um pouco de cada documento e adivinha" —
> ele busca especificamente o trecho que contém a resposta antes de responder, e diz
> quando não encontrou nada em vez de inventar um número. É a diferença entre um
> assistente que sabe onde procurar e um que só parece confiante.

## Checklist antes de entregar

- [ ] `.env` nunca foi commitado (confira `git log` do zero, não só o estado atual)
- [ ] `npm test` verde: 16/16, incluindo os 2 de `filtro.test.js` já editados pro seu
      domínio
- [ ] `src/filtro.js` exclui pelo menos um arquivo real do seu repositório, com
      justificativa no comentário
- [ ] Você tem uma pergunta documentada que saiu errada com chunking ingênuo e certa com
      chunking melhor — com o chunk exato em ambos os casos
- [ ] Os 5 casos de `evals/casos.json` estão preenchidos (não "TODO") e
      `evals/runner-retrieval.js` roda até o fim, com o número antes/depois anotado
- [ ] `RELATORIO-RAG.md` está no repo
- [ ] O parágrafo pro dono do negócio está no README do seu projeto
- [ ] Você sabe explicar, sem olhar o código, a diferença entre "o chunk certo não voltou"
      e "o chunk certo voltou mas o modelo não usou"

---

## Entrega mínima (o que todo mundo consegue até o fim da aula 26)

- Índice gerado (`data/indice.json`, qualquer estratégia) sobre um corpus real ou o
  corpus de exemplo, com pelo menos uma pergunta respondida por `ask.js`
- `src/filtro.js` editado — mesmo que a regra seja simples, precisa excluir algo real
- `npm test` verde
- 2 dos 5 casos de `evals/casos.json` preenchidos
- O parágrafo pro dono do negócio, mesmo que num rascunho

## Entrega completa (tudo da mínima, mais)

- O par antes/depois: dois índices do mesmo corpus, com a mesma pergunta saindo errada e
  depois certa
- Os 5 casos de eval completos, com `runner-retrieval.js` rodado e o número antes/depois
  documentado
- `RELATORIO-RAG.md` completo

---

## Rubrica

| Critério | Peso | O que a facilitadora olha |
|---|---|---|
| Julgamento de domínio em `src/filtro.js` | 25% | A regra exclui pelo menos um arquivo real, com justificativa específica do domínio — não só `node_modules`/`data` |
| Falha reproduzida e consertada | 25% | Existe uma pergunta concreta, um chunk específico apontado como incompleto, e a mesma pergunta saindo certa depois do reajuste de chunking |
| Qualidade dos 5 casos de eval de retrieval | 25% | `contexto_esperado` é um trecho exato e verificável, não uma paráfrase; pelo menos um caso sem parecença lexical com a resposta |
| Uso do `runner-retrieval.js` | 15% | Rodou o antes/depois de verdade e registrou o número — "melhorou" sem número não conta |
| Parágrafo pro dono do negócio | 10% | Sem jargão; explica o tipo de pergunta que melhora, não só "tem RAG agora" |

O que **não** pontua: `npm test` verde com `deveIndexar` ainda perto de "indexa tudo, só
filtra `node_modules`" — isso não é julgamento de domínio. O que pontua mais: uma regra
de exclusão que alguém de fora, lendo o comentário, entende por que aquele tipo de
conteúdo específico do SEU projeto não deveria estar ali.

---

## Bônus (sem peso na nota, com peso na vida)

- Rode o mesmo corpus com `voyage-4` em vez de `voyage-4-lite` e compare o
  `eval-retrieval` dos dois. Mudou alguma coisa? O custo mudou quanto?
- Peça pra alguém da turma formular uma pergunta difícil sobre o SEU corpus, sem avisar
  qual documento tem a resposta. Documente se o seu RAG achou ou não.
