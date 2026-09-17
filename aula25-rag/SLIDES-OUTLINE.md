# SLIDES-OUTLINE.md — Semana 13 (aulas 25 e 26)

**Total: 37 slides — S1 a S32 são a Aula 25 (dentro do teto do ADENDO 2: 26–34, aqui 32,
média 30) · S33 a S37 são o mini-deck de apoio da Aula 26 (lab guiado paralelo, quase sem
slide — não contam no teto, que vale só pra aula de conceito+demo).**

Template PDA: roxo escuro + amarelo, Dela Gothic One (títulos) / IBM Plex Sans (corpo).
Teto visual: **no máximo 3 slides seguidos sem imagem/diagrama/GIF** — marcado em cada
slide como `[V]` (tem recurso visual) ou `[T]` (texto/terminal, sem imagem/diagrama/GIF).
Nenhum slide menciona Alura — o mapeamento Alura vive só em `PACOTE.md` e `ENTREGAVEL.md`.

Fio condutor, repetido nas transições:

> **"O CHUNK ERRADO RESPONDE RÁPIDO E ERRADO."**

---

## AULA 25 — conceito + demo

### S1 — Capa `[V]`
- Título: **Semana 13 — RAG**
- Subtítulo: Retrieval-Augmented Generation · Módulo 4 — Harness & Loop Engineer
- Visual: fundo roxo padrão do template + ícone grande de uma tesoura cortando uma folha
  de texto ao meio — a primeira aparição visual da metáfora do corte que erra.

### S2 — `</HOJE>` `[V]`
- Kicker: `> ROTEIRO`
- Linha do tempo minuto a minuto espelhando os 7 blocos da aula 25 (Giro 10 · Recap 15 ·
  Teoria+demo 30 · Lab 1 15 · Teoria+demo 20 · Lab 2 25 · Fechamento 5).
- Visual: barra horizontal proporcional aos minutos de cada bloco, colorida por tipo
  (teoria = roxo, lab = amarelo).

### S3 — `</COMO ACOMPANHAR>` `[V]`
- Kicker: `> REGRAS DA CASA`
- Pontos numerados:
  1. **Duas chaves prontas.** Anthropic (de sempre) e Voyage (nova). Sem as duas, você
     não indexa nada hoje.
  2. **Node 20+.** Confira agora, não durante o Lab 1.
  3. **Um corpus seu.** O repositório do seu projeto desde a Semana 2 já é um — mesmo
     que pareça pequeno.
  4. **Terminal do lado.** O erro de hoje é proposital. É conteúdo, não acidente.
- Visual: ícone de checklist com 4 itens marcáveis.
- ref: `GUIA-DO-ALUNO.md`, seção de setup

### S4 — Giro das IAs `[T]`
- Kicker: `BLOCO 1 · GIRO DAS IAS`
- Fixo. Notícia da semana, opinião da facilitadora, perguntas da turma.
- Notas do apresentador: `[00:00–00:10] Ao fechar, plante a pergunta sem responder.`

### S5 — `</UMA LEMBRANÇA RÁPIDA>` `[V]`
- Kicker: `> ANTES DE COMEÇAR`
- Frase-âncora: **VOCÊ JÁ PERGUNTOU PRA UMA IA SOBRE UM DOCUMENTO SEU\nE A RESPOSTA VEIO
  ERRADA, MESMO COM O DOCUMENTO ALI?**
- Visual: **GIF** — balão de chat com um ponto de interrogação piscando sobre um ícone de
  documento, tom de humor seco ("é, foi comigo também").
- Notas: `[00:00–00:10] Não responda ainda — "guarda essa lembrança, a aula de hoje é
  sobre exatamente isso."`

### S6 — Recap ativo `[V]`
- Kicker: `BLOCO 2 · RECAP ATIVO`
- Mecânica: sorteio de 3 pessoas — cada uma explica um pedaço do que a Semana 12
  entregou (n8n, Google ADK, custo por execução). A facilitadora só corrige.
- Visual: ícone de dados/sorteio (mecânica já conhecida desde a Semana 3).
- Notas: `[00:10–00:25] Nunca vira exposição sua.`

### S7 — `</O QUE MUDA HOJE>` `[V]`
- Kicker: `> A PONTE`
- Frase-âncora: **VOCÊS JÁ SABEM ORQUESTRAR O MODELO.\nHOJE ELE GANHA OS SEUS DOCUMENTOS
  PRA CONSULTAR ANTES DE RESPONDER.**
- Visual: diagrama simples — caixa "modelo" ganhando uma seta nova entrada escrita "seus
  documentos", ao lado das entradas que ele já tinha (pergunta do usuário).
- Notas: primeira aparição do fio condutor completo, em voz: "e já digo de cara: o chunk
  errado responde rápido e errado."

### S8 — `</A SEGUNDA CHAVE>` `[V]`
- Kicker: `BLOCO 3 · TEORIA + DEMO (1/2)`
- Frase-âncora: **A ANTHROPIC NÃO FAZ EMBEDDING.\nA PRÓPRIA DOC DELA MANDA VOCÊ NA
  VOYAGE.**
- Pontos:
  1. **`ANTHROPIC_API_KEY`** — a de sempre, gera resposta.
  2. **`VOYAGE_API_KEY`** — nova, gera embedding.
- Visual: ícone de duas chaves de cores diferentes, uma já "usada" (Anthropic) e uma nova
  (Voyage).
- ref: [Embeddings — Claude Platform Docs](https://platform.claude.com/docs/en/build-with-claude/embeddings)
- Notas: `[00:25–00:28] Mostre o .env.example na tela. "Não vou pedir que confiem em
  mim, vamos abrir a doc."`

### S9 — `</.ENV.EXAMPLE>` `[T]`
- Kicker: `> PEÇA A PEÇA (código)`
- Bloco de terminal real:
  ```
  ANTHROPIC_API_KEY=sk-ant-api03-...
  VOYAGE_API_KEY=pa-...
  MODELO_EMBEDDING=voyage-4-lite
  ```
- Notas: mostre também `npm run checar-chave` já rodado com sucesso, na sua própria
  máquina, antes da aula (checklist pré-aula).

### S10 — `</O ERRO PROPOSITAL — RODANDO AGORA>` `[T]`
- Kicker: `> DEMO AO VIVO — NÃO AVISE ANTES`
- Bloco de terminal real:
  ```
  node --env-file=.env src/ingest.js corpus/exemplo-dominio1 --estrategia=fixo --tamanho=240
  node --env-file=.env src/ask.js "Qual é o valor da bolsa-auxílio de deslocamento pra quem mora fora de São Paulo?"
  ```
- Notas: `[00:28–00:38] Rode de verdade. Já indexado com chunking ingênuo (feito no
  checklist pré-aula, ou ao vivo se o tempo permitir).`

### S11 — `</A RESPOSTA SAIU ERRADA>` `[T]`
- Kicker: `> VAI QUEBRAR`
- A resposta real: incompleta, ou o modelo completando o número por conta própria.
- Frase-âncora: **O DOCUMENTO TEM A RESPOSTA.\nPOR QUE ELE ERROU?**
- Notas: deixe a turma reagir antes de explicar qualquer coisa. Pergunte pra turma, não
  responda ainda.

### S12 — `</POR QUE QUEBROU>` `[V]`
- Kicker: `> ABRINDO O CAPÔ (1/4)`
- Visual: **[DIAGRAMA]** o chunk real cortado ao meio, em duas caixas lado a lado:
  `"...é de trezentos e oitenta re"` | `"ais por mês..."` — com um X vermelho entre elas.
- Frase-âncora: **NENHUM DOS DOIS PEDAÇOS TEM A PALAVRA "REAIS".\nO MODELO TEVE QUE
  ADIVINHAR O RESTO.**
- ref: `starter/src/compare-chunking.js` (saída real reproduzida no `ROTEIRO-FACILITADORA.md`)

### S13 — `</O QUE É CHUNKING>` `[V]`
- Kicker: `> ABRINDO O CAPÔ (2/4)`
- Frase-âncora: **VOCÊ NÃO MANDA O DOCUMENTO INTEIRO.\nO CORTE JÁ DECIDE SE A RESPOSTA
  CABE INTEIRA EM ALGUM PEDAÇO.**
- Visual: diagrama — um documento inteiro virando 3 blocos menores (chunks), com o corte
  marcado.
- ref: [Chunking Strategies — Pinecone Learn](https://www.pinecone.io/learn/chunking-strategies/)

### S14 — `</O QUE É EMBEDDING>` `[V]`
- Kicker: `> ABRINDO O CAPÔ (3/4)`
- Frase-âncora: **CADA CHUNK VIRA UMA LISTA DE NÚMEROS QUE REPRESENTA O SENTIDO DELE.**
- Visual: diagrama — uma caixa de texto (chunk) com uma seta pra uma lista de números
  `[0.12, -0.88, 0.31, ...]`, e ao lado outro chunk PARECIDO em significado com uma lista
  de números parecida (setas convergindo visualmente).
- ref: [Embeddings — Claude Platform Docs](https://platform.claude.com/docs/en/build-with-claude/embeddings)

### S15 — `</BUSCA POR SIMILARIDADE>` `[V]`
- Kicker: `> ABRINDO O CAPÔ (4/4)`
- Fórmula na tela: `(a · b) / (‖a‖‖b‖)`
- Frase-âncora: **1 É IDÊNTICO. 0 É SEM RELAÇÃO. -1 É OPOSTO.**
- Visual: régua visual de -1 a 1, sem aprofundar a matemática — só a leitura.
- ref: [The Definitive Guide to Vector Similarity — Pinecone Learn](https://www.pinecone.io/learn/vector-similarity/)

### S16 — `</O PIPELINE INTEIRO>` `[V]`
- Kicker: `> AGORA QUE VOCÊ VIU AS PEÇAS`
- Visual: **[DIAGRAMA GRANDE]** ingestão → filtro (`deveIndexar`) → chunking → embedding
  → armazenamento → (pergunta) → embedding da pergunta → busca por similaridade →
  contexto → geração. Nove caixas em fila, com a caixa "filtro" destacada em amarelo
  (é o ponto de julgamento do aluno).
- Frase-âncora: **CADA CAIXA DESTAS É UM JEITO DE ERRAR ANTES DE CHEGAR NA RESPOSTA.**

### S17 — `</OS NÚMEROS DA ANTHROPIC>` `[V]`
- Kicker: `> NÃO SOU EU DIZENDO, É A PRÓPRIA ANTHROPIC`
- Visual: gráfico de barras — baseline de falha de retrieval **5,7%**; com embeddings
  contextuais **-35%**; com busca híbrida **-49%**; com reranking **-67%**.
- Frase-âncora: **RAG INGÊNUO TEM UM NÚMERO DE FALHA PUBLICADO.\nHOJE VOCÊ SENTE A
  VERSÃO PEQUENA DELE.**
- ref: [Contextual Retrieval — Anthropic](https://www.anthropic.com/news/contextual-retrieval)

### S18 — `MÃO NA MASSA` — LAB 1 `[V]`
- Kicker: `> 15 MINUTOS`
- Frase-âncora: **REPRODUZA A MESMA FALHA. NO SEU CORPUS.**
- Visual: ícone "mão na massa" do template.

### S19 — `</LAB 1 — O QUE FAZER>` `[T]`
- Kicker: `> INSTRUÇÕES`
- Pontos numerados:
  1. **`compare-chunking.js`** num arquivo seu — ache um corte no meio da frase.
  2. **Formule uma pergunta** cuja resposta caia perto daquele corte.
  3. **Indexe com `--estrategia=fixo`** e pergunte com `ask.js`.
- Critério de pronto: você aponta o chunk que devolveu incompleto — não precisa de
  resposta "bonita" errada, precisa de corte identificado.
- Notas: plano B pra quem não tem corpus — `corpus/exemplo-pouco-texto/`.

### S20 — `</O CONSERTO, AO VIVO>` `[T]`
- Kicker: `BLOCO 5 · TEORIA + DEMO (2/2)`
- Bloco de terminal real:
  ```
  node --env-file=.env src/ingest.js corpus/exemplo-dominio1 --estrategia=recursivo_overlap --saida=data/indice-melhor.json
  node --env-file=.env src/ask.js "Qual é o valor da bolsa-auxílio de deslocamento pra quem mora fora de São Paulo?"
  ```
- Notas: `[00:55–01:01] Mesma pergunta de antes, ao vivo.`

### S21 — `</AGORA A RESPOSTA SAIU CERTA>` `[V]`
- Kicker: `> O PORQUÊ`
- Visual: **[DIAGRAMA]** o mesmo trecho de antes, agora dentro de UM chunk só, com a
  sobreposição (overlap) marcada como uma faixa colorida que "protege" a fronteira.
- Frase-âncora: **A SOBREPOSIÇÃO MANTEVE A FRASE INTEIRA DENTRO DE UM CHUNK SÓ.**
- Notas: diga sem esconder: "nenhuma estratégia zera o problema sozinha — o ponto é
  reduzir com intenção, não prometer perfeição."

### S22 — `</AS 3 ESTRATÉGIAS, LADO A LADO>` `[V]`
- Kicker: `> COMPARAÇÃO`
- Visual: **[DIAGRAMA]** 3 colunas — **fixo** (mais cortes no meio de frase), **recursivo
  com overlap** (fronteira melhor, sobreposição protege referência), **por estrutura**
  (zero corte neste corpus, mas só funciona se o documento tem cabeçalho Markdown).
- Frase-âncora: **NENHUMA ESTRATÉGIA GANHA SEMPRE. CADA UMA TEM UM JEITO DE FALHAR.**
- ref: [Chunking Strategies — Pinecone Learn](https://www.pinecone.io/learn/chunking-strategies/)

### S23 — `</QUANTO CUSTA INDEXAR MIL DOCUMENTOS>` `[V]`
- Kicker: `> AVISO DE CUSTO`
- Visual: cartão de cálculo estilizado — `1.000 docs × ~1.035 tokens = 1,035 MTok × US$
  0,02/MTok ≈ US$ 0,02`.
- Frase-âncora: **DOIS CENTAVOS DE DÓLAR. E OS PRIMEIROS 200 MILHÕES DE TOKENS SÃO DE
  GRAÇA.**
- ref: [Pricing — Voyage AI Docs](https://docs.voyageai.com/docs/pricing)
- Notas: "o risco de custo real não é o embedding — é rodar `perguntar`/`eval-retrieval`
  em loop sem olhar o resultado, mesmo aviso da Semana 11."

### S24 — `</MEDINDO RETRIEVAL, NÃO SÓ RESPOSTA>` `[V]`
- Kicker: `> ENCAIXE COM A SEMANA 11`
- Visual: diagrama — duas caixas separadas: "o chunk certo voltou?" (retrieval) e "o
  modelo usou direito?" (geração), com uma seta mostrando que uma resposta errada pode
  vir de qualquer uma das duas.
- Frase-âncora: **RAG SEM EVAL É CHUTE. AGORA O CHUTE TEM UM CAMPO NOVO:
  `CONTEXTO_ESPERADO`.**

### S25 — `</EVAL-RETRIEVAL, AO VIVO>` `[T]`
- Kicker: `> TERMINAL`
- Bloco de terminal real:
  ```
  node --env-file=.env evals/runner-retrieval.js --exemplo --antes=data/indice-ingenuo.json --depois=data/indice-melhor.json
  ```
- Notas: mostre o resumo antes/depois na tela — os MESMOS 5 casos escritos na Semana 11,
  com um campo a mais.

### S26 — `</E O GRAPH RAG?>` `[V]`
- Kicker: `> MENÇÃO, NÃO BLOCO`
- Frase-âncora: **GUARDA O LINK. NÃO CONSTRUAM ISSO HOJE.**
- Visual: ícone de grafo — nós conectados por linhas, contrastado com as caixas simples
  de chunk usadas no resto da aula.
- ref: [GraphRAG — Microsoft](https://microsoft.github.io/graphrag/)
- Notas: "resolve perguntas que cruzam vários documentos ou pedem síntese — pro tipo de
  pergunta que o SEU projeto responde, um fato específico, é complexidade que você paga
  sem precisar."

### S27 — `MÃO NA MASSA` — LAB 2 `[V]`
- Kicker: `> 25 MINUTOS`
- Frase-âncora: **DECIDA O QUE NÃO ENTRA. O AGENTE NÃO PODE DECIDIR ISSO POR VOCÊ.**
- Visual: ícone "mão na massa" do template.

### S28 — `</LAB 2 — O QUE FAZER>` `[T]`
- Kicker: `> INSTRUÇÕES`
- Pontos numerados:
  1. **`npm test`** — veja o vermelho com os próprios olhos.
  2. **Nomeie, em voz alta, o que exclui** — pelo menos um tipo real do SEU repo.
  3. **Edite `deveIndexar`** e os exemplos do teste até fechar verde.
- Sinal de alerta: quem só troca `return true` por `return false` (exclui tudo) — pare e
  pergunte "seu índice tem quantos documentos agora?"

### S29 — `</FECHAMENTO>` `[V]`
- Kicker: `> ANTES DE MOSTRAR, PERGUNTE`
- Frase-âncora: **O QUE QUEBROU A RESPOSTA NA DEMO DE HOJE?**
- Visual: **GIF** — pessoa pensando com o dedo no queixo, tom de "espera, deixa eu
  lembrar" antes da resposta certa aparecer.
- Notas: `[02:15–02:20] Espere resposta da turma antes de reabrir qualquer slide
  anterior.`

### S30 — `</ATIVIDADE DE FIXAÇÃO>` `[V]`
- Kicker: `> ENTREGÁVEL`
- Pontos: índice indexado sobre corpus real · `src/filtro.js` justificado · uma pergunta
  provada errada-depois-certa · eval-retrieval com número antes/depois.
- Visual: ícone de checklist do entregável.
- ref: `ENTREGAVEL.md`

### S31 — `</A AULA 26>` (penúltimo) `[V]`
- Kicker: `> PRÓXIMA AULA`
- Formato: **lab guiado paralelo**, checkpoint a cada 20 min (mesmo mecanismo das
  Semanas 2 e 3, motivo diferente — sincronizar nível desigual, não primeiro contato).
- O que trazer pronto: **as duas chaves testadas** (`npm run checar-chave` verde) — sem
  isso você não acompanha nada.
- Duplas: por proximidade de domínio (quem tem domínio parecido ajuda quem tem pouco
  texto).
- Visual: mini-linha do tempo dos 4 checkpoints da aula 26.

### S32 — `</PRÓXIMOS PASSOS>` (último) `[V]`
- Kicker: `> DEPOIS DE HOJE`
- Frase-âncora final: **O CHUNK ERRADO RESPONDE RÁPIDO E ERRADO.\nO SEU JÁ NÃO.**
- Visual: repete o ícone da tesoura do S1, agora com o corte "certo" (entre frases, não
  no meio de uma).

**Checagem do teto de 3:** a maior sequência sem visual é `S9 → S10 → S11` (3 slides
`[T]` seguidos — `.env.example`, comando de ingestão, resposta errada), quebrada pelo
diagrama do `S12`. A segunda maior é `S19 → S20` (2 slides), quebrada pelo `S21`. Nenhuma
sequência do deck passa de 3. Confirmado slide a slide.

---

## AULA 26 (mini-deck de apoio — a aula é lab, quase sem slide)

### S33 — Capa aula 26 `[V]`
- Título: **Lab guiado paralelo — RAG no seu projeto**
- Visual: mesmo ícone da tesoura, agora ao lado de um ícone de "dupla" (duas figuras).

### S34 — `</CHECKPOINT 0>` `[T]`
- Kicker: `> ANTES DE QUALQUER LINHA`
- `npm run checar-chave` em toda máquina. Quem não conseguiu entra na fila de suporte
  agora, não nos 20 minutos seguintes.

### S35 — `</OS 4 CHECKPOINTS>` `[V]`
- Kicker: `> CRONOGRAMA`
- Visual: **[DIAGRAMA]** linha do tempo com 4 blocos de 20 min e 4 checkpoints de 5 min
  entre eles (ingestão → embedding+pergunta → ajuste de chunking → `filtro.js`).

### S36 — `</A REGRA DO LAB GUIADO>` `[V]`
- Kicker: `> COMO FUNCIONA`
- Frase-âncora: **A FACILITADORA CONSTRÓI DEVAGAR. VOCÊ DIGITA ATRÁS, NO SEU PROJETO.**
- Visual: ícone de dois terminais lado a lado, um "espelhando" o outro com pequeno delay.

### S37 — Fechamento aula 26 `[V]`
- Kicker: `> ÚLTIMA SEMANA DE CONTEÚDO NOVO`
- Frase-âncora: **A SEMANA 14 É DEMO DAY. O QUE ESTÁ DE PÉ HOJE É O QUE VOCÊ VAI MOSTRAR.**
- Visual: GIF — luzes de palco se acendendo, tom de expectativa (não pressão).
