# PACOTE.md — Semana 13 (RAG) — decisões, cortes e ganchos

Este arquivo é pra Iasmim e pra quem escrever a Semana 14. Não é material de aluno.

---

## 0. Onde isto se encaixa na grade

Semana 13 é a **última semana de conteúdo novo** do curso (Módulo 4 — Harness & Loop
Engineer, junto com a Semana 12). A Semana 14 é buffer + Demo Day — não tem lab novo, só
o que já foi construído nas 13 semanas anteriores precisa estar de pé. Ver seção 8.

**Dependência não resolvida:** `aula23-agentes-automacao` (Semana 12: n8n + Google ADK +
AIOps 2 + abertura do Projeto Final) está sendo escrita em paralelo e não existe em disco
no momento em que este pacote foi produzido. O Bloco 2 (Recap Ativo) do
`ROTEIRO-FACILITADORA.md` foi escrito com a descrição **genérica** da Semana 12 que veio
no brief da orquestradora (n8n, Google ADK, custo por execução, tracing, observabilidade,
abertura do Projeto Final) — não com nomes de artefato de `_GANCHOS.md`, porque essa
seção ainda não existe. **Pendência para a orquestradora:** quando `aula23` for
finalizada, confira se os nomes de artefato citados no recap (ex.: nome do workflow n8n,
nome do arquivo de tracing) batem com o que foi realmente entregue, e ajuste o Bloco 2 se
não bater.

---

## 1. Mapeamento Alura — o corte da semana

**Os dois cursos de LangChain da Alura cobrem a teoria inteira.** O síncrono não reexplica
nada disso — ele é **implementação guiada sobre a base de documentos do projeto próprio
do aluno**. Este é o corte de 20-30% desta semana: profundidade teórica sai do síncrono,
fica só a prática amarrada no projeto de cada um.

| Curso Alura (REFERENCIAS.md) | Carga | O que cobre | O que isso tira do síncrono |
|---|---|---|---|
| [LangChain: criando chatbots inteligentes com RAG](https://www.alura.com.br/curso-online-langchain-criando-chatbots-inteligentes-rag) (item 10) | 16h / 67 atividades | Embedding e armazenamento vetorial, ETL/chunking, pipelines de recuperação, avaliação de resultado, busca híbrida | Explicação de **o que é** um embedding, matemática de vetor, comparação entre tipos de vector store |
| [LangChain: Técnicas Avançadas de RAG](https://www.alura.com.br/curso-online-langchain-rag-avancado) (item 11) | 10h / 35 atividades | Fundamentos de pipeline RAG, criação de embeddings, otimização de prompt, reestruturação de consulta, avaliação com LangSmith | Otimização de query, técnicas avançadas de re-ranking/reformulação — tratadas como aprofundamento pós-curso, não ensinadas aqui |

**O que o síncrono faz que a Alura não faz:** amarra tudo isso na base de documentos do
PRÓPRIO projeto do aluno (não um dataset de curso), reusa o padrão de eval da Semana 11
pra medir retrieval (a Alura nunca vai saber que caso de eval você escreveu), e entrega o
momento "concreto antes de profundo" — bater numa resposta errada ANTES de qualquer aula
da Alura explicar por quê. A Alura teoriza; a aula síncrona é onde o aluno vê a teoria
morder o próprio projeto.

**Pré-requisito de entrada no Lab da Aula 26:** pelo menos o primeiro curso (item 10)
concluído. Sem isso, "embedding" e "chunking" chegam como palavra nova no meio de um lab
que pressupõe que você já ouviu a definição — mesmo contrato de toda semana desde a 2.

---

## 2. O que foi cortado (além do que a Alura já cobre)

| Cortado | Onde foi parar |
|---|---|
| Teoria matemática de embedding (por que um vetor captura semântica) | Alura, item 10 |
| Comparação entre famílias de vector DB (Pinecone vs Chroma vs Weaviate vs pgvector) | Slide de menção com link (REFERENCIAS.md item 7 dá a mecânica; a comparação de produto vira aprofundamento livre) |
| Re-ranking (segundo estágio de retrieval, depois do top-k) | Não entra nem em slide de menção nesta semana — é aprofundamento natural de pós-curso, citado de passagem no fechamento como "o próximo passo depois do Demo Day" |
| Graph RAG como técnica praticada | Vira **menção com link** (REFERENCIAS.md item 8), não bloco — decisão já dada pelo bloco da grade |
| Fine-tuning de modelo de embedding | Fora de escopo, não citado — seria uma semana inteira sozinho e não muda o resultado pra 75 pessoas em 2 semanas de curso |
| Otimização de query / query rewriting | Fica pro segundo curso de LangChain (item 11), citado no `PACOTE.md` mas não no síncrono |

---

## 3. Decisão de stack — a peça mais sensível do pacote

Regra do brief: **abrir a doc de cada peça, confirmar nome/API/preço hoje, `[CONFIRMAR]`
se não confirmar.** Todas as três peças abaixo foram confirmadas com WebFetch (ver
`REFERENCIAS.md`). Nenhum `[CONFIRMAR]` sobrou.

### 3.1 Modelo de embedding: **Voyage AI, `voyage-4-lite`**

A Anthropic **não tem modelo de embedding próprio** e recomenda a Voyage AI
explicitamente na doc oficial (REFERENCIAS.md item 2) — citação direta: *"Anthropic does
not offer its own embedding model."* Isso significa que esta é a primeira semana do curso
em que o aluno tem **duas chaves de API de dois provedores diferentes**. Documentado como
delta explícito em `starter/CHECKLIST-SEGREDOS-RAG.md`.

Por que `voyage-4-lite` e não `voyage-4` ou outro provedor:
- **Preço:** US$0,02 por milhão de tokens (`voyage-4-lite`) vs US$0,06 (`voyage-4`) —
  REFERENCIAS.md item 3. Pra texto de projeto de aluno (curto/médio, não jurídico nem
  multilíngue de alta exigência), a diferença de qualidade não justifica 3x o custo.
- **Tokens grátis:** os primeiros 200 milhões de tokens são de graça **por conta**
  (REFERENCIAS.md item 3). Com 75 alunos, cada um com conta própria, isso é 75 cotas
  grátis independentes — ver cálculo de custo na seção 6.
- **Alternativa avaliada e descartada:** embeddings do Gemini (`gemini-embedding-001`).
  Motivo do descarte: a doc de rate limit do free tier não publica número fixo (manda
  conferir em tempo real no AI Studio — REFERENCIAS.md, ver nota abaixo), o que é ruim
  pra instrução de turma ("confira seu limite" não é um número que cabe em slide). A
  Voyage publica preço e cota fixos, verificáveis, e citáveis sem variar por sessão.

**Nota sobre Gemini embeddings:** não incluído nas 11 referências porque a verificação
de rate limit do free tier não deu número fixo (a doc manda checar em
`aistudio.google.com/rate-limit`, que varia por conta) — decidimos não citar uma fonte
cujo dado mais importante pro slide de custo não é estável o bastante pra imprimir.

### 3.2 Armazenamento de vetor: **hand-rolled, não um pacote**

Decisão deliberada, documentada em `starter/src/vectorStore.js`: o "banco de vetores" é
um arquivo JSON + uma função de similaridade de cosseno de ~40 linhas, escrita pelo
próprio curso — não `vectra`, não nenhum outro pacote npm.

**O que foi avaliado:** `vectra` (npm, MIT — REFERENCIAS.md item 9), o candidato mais
citado pra "vector DB local em Node". **Por que foi descartado:**
1. **Dependências:** a versão atual arrasta ~13 dependências de produção — `@grpc/grpc-js`,
   cliente da OpenAI, `cheerio`/`turndown` (scraping), `wink-nlp`/`wink-bm25` (busca
   híbrida), tokenizer. Nenhuma delas é o que o curso precisa (indexar texto próprio e
   buscar por similaridade). Cada dependência a mais é mais um jeito do `npm install`
   falhar numa das 75 máquinas Windows que ninguém testou — o mesmo raciocínio que já
   levou a semanas anteriores a manterem zero dependências sempre que davam.
2. **Pedagógico:** "busca por similaridade" é o item nomeado explicitamente no bloco da
   grade desta semana. Se ela mora dentro de um pacote fechado, o aluno não abre o capô —
   ele troca de capô por outro fechado. Cosseno de vetor cabe em uma função de 10 linhas
   e é exatamente o que Pinecone/Chroma fazem por baixo numa escala que este curso nunca
   alcança (REFERENCIAS.md item 7).
3. **Escala real do problema:** o corpus de um projeto de aluno tem, na prática, dezenas
   a poucas centenas de chunks. Busca por força bruta (`O(n)`, comparar com todo mundo)
   roda em milissegundos nesse tamanho. Índice aproximado (HNSW, o que pacotes de vector
   DB usam) só compensa quando força bruta já é o gargalo medido — não é o caso aqui, e
   "otimize antes de medir" é uma lição que vale a pena instalar de graça.

Isso NÃO é a mesma decisão de "zero dependência" da Semana 11 (que teve uma exceção
declarada: `@anthropic-ai/sdk`). Aqui não há exceção nenhuma: **o starter inteiro roda com
zero dependências de npm**, só o `fetch` nativo do Node 20+, tanto pra Voyage quanto pra
Anthropic. `npm install` não instala nada — o que também significa nada quebra por causa
de instalação no Windows.

### 3.3 A cola: **Node + `fetch` nativo**

Sem SDK de nenhum provedor. Voyage confirma na própria doc (REFERENCIAS.md item 4) que o
endpoint REST funciona sem SDK. A chamada da Anthropic reusa o padrão já validado desde a
Semana 11 (Messages API via `fetch`, mesma chave, mesmo modelo `claude-sonnet-5`).

### 3.4 Roda no Windows?

Sim, sem ressalva: zero dependência nativa/compilada, zero passo de instalação além de
`node -v` (>=20) e colar duas chaves num `.env`. É o único requisito de plataforma desde
a Semana 11 (Node 20+), sem nada novo.

---

## 4. Diferença do lab guiado paralelo desta semana (vs Semanas 2 e 3)

O formato "lab guiado paralelo" já existiu duas vezes (S2, S3 — `_GANCHOS.md`, Lote 1).
A mecânica de base é a mesma: facilitadora constrói, turma acompanha no próprio projeto,
checkpoint a intervalos fixos. **O que muda aqui:**

| | Semana 2/3 | Semana 13 |
|---|---|---|
| O que a turma já sabe fazer | Nada ainda — é a primeira vez com o agente/com skills | Já rodaram 11 labs guiados de complexidade crescente — dispersão de nível é o problema real agora, não inexperiência |
| Checkpoint | Solto, no ritmo do primeiro contato | **Fixo a cada 20 minutos**, cronometrado — ver `ROTEIRO-FACILITADORA.md` |
| O que trava quem fica pra trás | Comando de terminal, sintaxe básica | **Duas chaves de API configuradas** (Anthropic + Voyage) — se uma faltar na Aula 26, o aluno não indexa nada, então o checkpoint dos primeiros 20 min é EXATAMENTE checar as duas chaves, não o primeiro passo do pipeline |
| Plano B pra quem fica pra trás | Repetir o passo com a dupla | **Dupla com quem já passou do checkpoint** (não sorteio novo — usa a dupla já formada desde domínios parecidos, ver `ROTEIRO-FACILITADORA.md`) + corpus de exemplo pronto (`corpus/exemplo-dominio1/`) pra nunca ficar bloqueado esperando o próprio corpus |

Em suma: o mecanismo é o mesmo, o **motivo** de usá-lo mudou — não é mais "primeiro
contato guiado", é "sincronizar uma turma com nível desigual numa semana com dependência
dura de setup (duas chaves)".

---

## 5. Onde o julgamento do aluno é indispensável

**Decidir o que entra na base.** Implementado como o TODO de `starter/src/filtro.js`
(função `deveIndexar`) com teste em `tests/filtro.test.js` que **falha enquanto a função
indexar tudo** — o valor padrão do stub é `return true` sempre, e o teste está desenhado
pra nunca passar nesse estado.

Por que este é o ponto certo: o agente resolve o pipeline inteiro sozinho — ingestão,
chunking, chamada de embedding, busca, geração — sem entender nada do domínio do aluno.
O que ele NÃO pode decidir por conta própria, porque não tem contexto de negócio pra
isso, é **qual conteúdo do repositório representa a voz e a verdade atual do projeto**, e
qual é rascunho, decisão revogada, ou irrelevante pro tipo de pergunta que o RAG existe
pra responder. Indexar tudo é a forma mais comum de PIORAR retrieval (mais chunks
concorrendo por espaço no top-k, informação desatualizada competindo com a atual) — e só
o aluno, olhando pro próprio repo, sabe separar um do outro.

O teste não diz a regra certa. Ele só prova que existe uma regra, e que ela exclui pelo
menos um tipo de conteúdo real (ver `tests/filtro.test.js`, que também bloqueia
`node_modules/` e `data/` incondicionalmente — isso não é julgamento de domínio, é
higiene, e por isso é regra fixa, não TODO).

---

## 6. Custo — quanto custa indexar mil documentos

Modelo: `voyage-4-lite`, US$0,02 por milhão de tokens (REFERENCIAS.md item 3).

**Suposição declarada** (não é preço incerto — é tamanho de documento assumido, deixado
explícito pra não virar número inventado): documento médio de projeto de aluno com ~600
palavras (~900 tokens antes do chunking). Chunking recursivo com 15% de sobreposição
adiciona texto — ~1.035 tokens efetivos embedados por documento.

```
1.000 documentos x 1.035 tokens  =  1.035.000 tokens  =  1,035 milhão de tokens
1,035 MTok x US$0,02/MTok         =  US$ 0,0207
```

**Indexar mil documentos custa cerca de 2 centavos de dólar.** E nem isso, na prática:
cada conta nova da Voyage vem com 200 milhões de tokens grátis — dá pra indexar o mesmo
lote de mil documentos umas **190 vezes** antes de gastar um centavo. Pra estourar a cota
grátis de UMA conta, um aluno teria que indexar quase 200 mil documentos — não é um
cenário real pra um projeto de curso.

**Pra turma inteira (75 contas independentes):** como a cota é por conta, não há
"orçamento coletivo" se esgotando — são 75 cotas de 200 milhões cada. O risco de custo
real desta semana não é o embedding, é **rodar `npm run eval-retrieval` ou `npm run
perguntar` em loop sem pensar**, que soma tokens de geração (Anthropic, US$2-10/MTok,
preço já citado na Semana 11) mais rápido do que embedding — o mesmo aviso de "não peça
pro agente gerar 1000 exemplos sem pensar" da Semana 11 volta aqui, agora aplicado a "não
rode o eval-retrieval em loop automático sem olhar o resultado".

---

## 7. Cobertura dos 7 domínios

| # | Domínio | Funciona? | Como |
|---|---|---|---|
| 1 | Listagem de perfis de alunos da PDA | Sim | Corpus natural: bios, regras da vitrine, FAQ. É o corpus de exemplo do starter (`corpus/exemplo-dominio1/`), com dado real verificado (valor de bolsa, prazos) |
| 2 | Captação de clientes e automações pra freelancers | Sim | Corpus natural: templates de proposta, scripts de follow-up, casos de sucesso documentados, FAQ de cliente — perguntas do tipo "qual script uso pra lead frio" são retrieval clássico |
| 3 | Quiz conectado ao Claude | Sim, via corpus de projeto | Um quiz não gera muito texto de "produto" por natureza — usa a rota de `corpus/exemplo-pouco-texto/`: README, banco de perguntas com explicação de gabarito, guia de setup acumulado desde a Semana 2 |
| 4 | Avaliação automatizada de projetos por IA | Sim | Corpus natural: rubricas usadas, exemplos de feedback já dado, critérios de correção documentados — "por que essa entrega foi reprovada antes" é retrieval direto |
| 5 | Agente de revisão de código com a voz da PDA | Sim | Corpus rico por natureza: `REGISTRO-SUBAGENTE.md`, `LISTA-SINAIS-ALERTA-PR-AGENTE.md` (Semana 9, `_GANCHOS.md`) já são texto real e específico do domínio |
| 6 | Problema real da ONG ou das aulas | Sim | Corpus natural: `RESEARCH.md` + ADRs (Semana 6) já documentam a dor de negócio em texto — exatamente o material que RAG deveria conseguir consultar |
| 7 | Domínio próprio do aluno | Sim, via corpus de projeto | Caso mais variável do catálogo — mesma rota de `corpus/exemplo-pouco-texto/`: os artefatos acumulados desde a Semana 2 (README, CLAUDE.md, specs, ADRs, `ENTREGAVEL.md` de cada semana) formam corpus real mesmo quando o "produto" ainda tem pouco conteúdo de usuário final |

**7 de 7 funcionam** — acima do mínimo de 5 pedido pelo brief. Os domínios 3 e 7 são os
"com pouco texto" que o brief pede pra tratar explicitamente: a resposta é **de onde vem
o corpus** (`corpus/exemplo-pouco-texto/README.md`), não "arranje documentos".

---

## 8. Gancho para a Semana 14 (Demo Day) — o que precisa estar de pé

Esta é a última semana de conteúdo novo. A Semana 14 não ensina nada — só sustenta o que
já existe. Deixando registrado pra quem escrever a Semana 14:

- **O app em produção desde a Semana 11** (Render) continua no ar — RAG desta semana é
  uma CAMADA em cima dele, não um serviço separado. Se o Demo Day pede demonstração ao
  vivo, o app tem que responder com e sem RAG pra mostrar a diferença (é literalmente o
  `--sem-rag` de `starter/src/ask.js`).
- **`evals/casos.json`** (Semana 11) + a extensão de retrieval desta semana
  (`contexto_esperado`) são a evidência que sustenta qualquer alegação de "meu RAG
  funciona" no Demo Day — sem eval rodado, é demo sem prova.
- **Duas chaves de API ativas e com custo sob controle** — o Demo Day não pode ser o
  momento em que alguém descobre que zerou a cota grátis da Voyage ou estourou o crédito
  da Anthropic rodando eval em loop na noite anterior.
- **`src/filtro.js` preenchido e justificado** — é o artefato que prova julgamento de
  domínio, não só código rodando; vale a pena um slide do Demo Day mostrar O QUE ficou de
  fora da base e por quê, não só o que ficou dentro.

## 9. Ganchos para frente (citáveis, copiados aqui e no fechamento do roteiro)

- **`starter/src/vectorStore.js` (cosseno hand-rolled) é a implementação de referência de
  "busca por similaridade" do curso** — qualquer semana futura que precisar do conceito
  cita este arquivo, não reexplica.
- **`contexto_esperado` em `evals/casos.json` é a extensão do formato de eval do curso**
  pra medir retrieval separado de geração — reusável em qualquer feature futura que tenha
  uma etapa de busca antes de uma etapa de resposta.
- **Duas chaves de API configuradas (Anthropic + Voyage) é o novo piso** — qualquer
  semana futura que envolva uma terceira API (ex.: um provedor de busca externa) segue o
  mesmo padrão de `CHECKLIST-SEGREDOS-<NOME>.md` como delta, não recriação do checklist
  inteiro.
- **GraphRAG ficou como menção com link, nunca praticado** — gancho livre pra quem quiser
  uma trilha de aprofundamento pós-curso ou uma masterclass opcional.

## 10. Ganchos retomados de trás (de `_GANCHOS.md`)

- **"O esqueleto do projeto nasce na Semana 2, nada é descartado"** (Lote 1) — é a base
  do argumento inteiro da seção 7 (cobertura de domínio com pouco texto).
- **`evals/casos.json` + runner em lote, Semana 11** — reusado literalmente, estendido
  com `contexto_esperado` em vez de recriado.
- **`CHECKLIST-SEGREDOS.md`, Semana 11** — citado pelo nome, nunca duplicado; só o delta
  de ter uma segunda chave vira arquivo novo (`CHECKLIST-SEGREDOS-RAG.md`).
- **`REGISTRO-SUBAGENTE.md` e `LISTA-SINAIS-ALERTA-PR-AGENTE.md`, Semana 9** — citados
  como corpus natural do domínio 5 (seção 7).
- **`RESEARCH.md` + ADRs, Semana 6** — citados como corpus natural do domínio 6 e como
  parte do corpus de fallback pra domínios com pouco texto (seção 7, domínios 3 e 7).
- **Node 20+, obrigatório desde a Semana 11** — continua sendo o piso, sem mudança.
- **Fronteira de ferramenta (chave de API a partir da Semana 11)** — esta semana soma a
  SEGUNDA chave à mesma fronteira, não abre uma fronteira nova.

---

## 11. Soma dos minutos

### Aula 25 (conceito + demo) — 120 min

| Bloco | Min | Conteúdo |
|---|---|---|
| Giro das IAs | 10 | Fixo |
| Recap ativo | 15 | Sorteio sobre Semana 12 (n8n/ADK/AIOps2/abertura do Projeto Final — ver seção 0) |
| Teoria + demo (1) | 30 | Setup 2ª chave (3) + demo ao vivo do RAG ingênuo falhando (10) + abrir o capô: chunk/embedding/similaridade (12) + números do contextual retrieval (5) |
| Lab 1 | 15 | Reproduzir a falha no próprio corpus com `comparar-chunking` + `ask.js` |
| Teoria + demo (2) | 20 | Reindexar com chunking melhor, mesma pergunta, resposta certa (6) + comparação das 3 estratégias (5) + custo (3) + eval de retrieval antes/depois (4) + menção a Graph RAG (2) |
| Lab 2 | 25 | Implementar `src/filtro.js` no próprio projeto até `npm test` fechar verde |
| Fechamento | 5 | Recap perguntando antes de mostrar + entregável + anúncio da Aula 26 |
| **Total** | **120** | |

### Aula 26 (lab guiado paralelo) — 120 min

| Bloco | Min | Conteúdo |
|---|---|---|
| Checkpoint 0 — abertura | 5 | Confirma as duas chaves rodando pra todo mundo (`npm run checar-chave`) antes de começar qualquer coisa |
| Bloco 1 (facilitadora constrói, turma acompanha) | 20 | Ingestão + chunking do corpus real dela, ao vivo |
| **Checkpoint 1** | 5 | Sinaliza quem já indexou; forma dupla pra quem não conseguiu |
| Bloco 2 | 20 | Embedding + primeira pergunta (ainda com chunking ingênuo, de propósito) |
| **Checkpoint 2** | 5 | Compara quem bateu na falha e quem não bateu ainda — ajusta ritmo |
| Bloco 3 | 20 | Ajuste de chunking + segunda pergunta, resposta melhor |
| **Checkpoint 3** | 5 | Confere `npm run eval-retrieval` rodando com dois índices |
| Bloco 4 | 20 | `src/filtro.js` da facilitadora ao vivo — ela justifica em voz alta o que exclui e por quê |
| **Checkpoint 4** | 5 | Última verificação: `npm test` verde pra quem for entregar hoje |
| Fechamento | 15 | Dúvidas abertas + o que falta pra `ENTREGAVEL.md` |
| **Total** | **120** | |

Checkpoints somam 25 min dos 120 — o resto (95 min) é construção acompanhada, cumprindo
"nunca a facilitadora construindo por 2 horas sozinha": em cada bloco de 20 min ela
constrói LENTO o suficiente pra turma reproduzir linha por linha, não demonstra e segue.
