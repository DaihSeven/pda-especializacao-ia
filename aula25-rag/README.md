# aula25-rag

Semana 13 — **RAG (Retrieval-Augmented Generation)**
Especialização em Desenvolvimento com IA · Programadores do Amanhã · Turma 2

> **Duas chaves de API nesta semana.** Você já usa `ANTHROPIC_API_KEY` desde a semana 11.
> Esta semana soma `VOYAGE_API_KEY` — a Anthropic não tem modelo de embedding próprio e
> recomenda a Voyage AI na própria doc oficial. Custo real, mas pequeno: **indexar mil
> documentos custa cerca de US$ 0,02**, e os primeiros 200 milhões de tokens de cada conta
> Voyage nova são de graça. Leia o bloco de custo em `GUIA-DO-ALUNO.md` antes de rodar
> qualquer coisa — não é opcional.

Fio condutor da semana: **"O chunk errado responde rápido e errado."**

Você já sabe orquestrar chamadas de modelo com custo e observabilidade (Semana 12). Esta
semana o modelo ganha algo novo pra consultar antes de responder: os **seus** documentos.
E antes de qualquer explicação, você vai VER o RAG mais simples possível responder errado
— com o documento certo bem ali, na base, com a resposta dentro dele. A aula é sobre
entender por que isso acontece e o que corrige.

## Como usar

1. Você já tem um repositório próprio do projeto, criado na Semana 2 — é lá que o
   trabalho desta semana entra, não neste fork.
2. Clone (ou já tenha clonado) o fork do curso `pda-especializacao-ia` pra pegar o
   material desta pasta:

   ```bash
   cd pda-especializacao-ia/aula25-rag/starter
   node -v            # precisa ser v20 ou maior (já exigido desde a Semana 11)
   npm install         # não instala nada — zero dependências de npm, só fetch nativo
   npm test            # 14 de 16 passam. 2 falham de propósito — Lab 2 resolve (src/filtro.js)
   ```

3. **Antes da aula 25**, complete o bloco "Console e API da Anthropic" que já fizer
   parte do seu histórico e o curso Alura **LangChain: criando chatbots inteligentes com
   RAG** (`PACOTE.md`) — sem isso, "embedding" e "chunking" chegam como palavra nova no
   meio de um lab que pressupõe que você já ouviu a definição.
4. Configure a segunda chave (`GUIA-DO-ALUNO.md`, primeira seção) e confirme com
   `npm run checar-chave` — as DUAS chaves (Anthropic e Voyage) precisam responder.
5. Durante a aula 25, siga o [`GUIA-DO-ALUNO.md`](./GUIA-DO-ALUNO.md) lab por lab.
6. Na aula 26 (lab guiado paralelo, checkpoint a cada 20 min), você constrói em cima do
   que já fez — sem conteúdo novo, é laboratório acompanhado.
7. Depois das duas aulas, entregue conforme [`ENTREGAVEL.md`](./ENTREGAVEL.md).

## O que tem aqui

```
.
|-- README.md                     <- este arquivo
|-- GUIA-DO-ALUNO.md               <- setup das duas chaves, passo a passo dos labs, troubleshooting
|-- ENTREGAVEL.md                  <- a atividade (mínima + completa) e a rubrica
|-- ROTEIRO-FACILITADORA.md        <- minuto a minuto das duas aulas (uso da facilitadora)
|-- SLIDES-OUTLINE.md              <- outline dos slides (uso da facilitadora)
|-- REFERENCIAS.md                 <- os 11 links verificados desta semana
|-- PACOTE.md                      <- mapeamento Alura, cortes, ganchos, cobertura de domínio
`-- starter/
    |-- package.json                 <- zero dependências — só o fetch nativo do Node 20+
    |-- .env.example                  <- copie pra .env e preencha as DUAS chaves
    |-- CLAUDE.md                     <- memória do projeto, com TODOs
    |-- .claude/settings.json         <- permissões básicas do agente neste projeto
    |-- CHECKLIST-SEGREDOS-RAG.md     <- o delta desta semana sobre o checklist da Semana 11
    |-- corpus/
    |   |-- exemplo-dominio1/           <- corpus de exemplo (vitrine de perfis) pra quem
    |   |                                  quer seguir a demo sem depender do próprio corpus
    |   `-- exemplo-pouco-texto/        <- pra domínios com pouco documento de "produto"
    |-- data/                         <- onde os índices (.json) são salvos — não versionado
    |-- src/
    |   |-- filtro.js                   <- TODO seu: o que NÃO entra na base (Lab 2)
    |   |-- chunking.js                 <- as 3 estratégias de corte de texto — NÃO EDITE
    |   |-- embeddings.js               <- wrapper da API da Voyage (fetch puro)
    |   |-- vectorStore.js              <- "banco de vetores" hand-rolled — NÃO EDITE
    |   |-- anthropic.js                <- wrapper da Messages API (o mesmo da Semana 11)
    |   |-- ingest.js                   <- pipeline de ingestão (`npm run ingerir`)
    |   |-- ask.js                      <- pergunta contra o índice (`npm run perguntar`)
    |   |-- compare-chunking.js         <- mostra o mesmo documento cortado de 3 formas
    |   `-- teste-chave.js              <- smoke test das duas chaves (`npm run checar-chave`)
    |-- tests/                        <- NÃO EDITE, exceto `filtro.test.js` (adapte pro seu domínio)
    `-- evals/
        |-- README.md                   <- o que é `contexto_esperado` (extensão do formato da Semana 11)
        |-- casos.json                   <- seu template com 5 TODOs
        |-- casos.exemplo.json           <- os 5 casos preenchidos pro corpus de exemplo
        |-- avaliar-retrieval.js         <- lógica pura de avaliação (sem rede)
        `-- runner-retrieval.js          <- `npm run eval-retrieval` — mede antes/depois
```

## Pré-requisitos

- Tudo que a Semana 11 já exigia: Node 20+, `ANTHROPIC_API_KEY` configurada e testada.
- **Uma segunda chave, da Voyage AI** (`VOYAGE_API_KEY`) — passo a passo completo no
  `GUIA-DO-ALUNO.md`. Sem ela você não indexa nada.
- Bloco Alura **LangChain: criando chatbots inteligentes com RAG** concluído — é
  pré-requisito de entrada no lab da Aula 26, mesmo contrato de toda semana desde a 2
  (`PACOTE.md`, seção 1).
- Um corpus próprio (o repositório do seu projeto desde a Semana 2 já é um, mesmo que
  pareça pequeno — ver `starter/corpus/exemplo-pouco-texto/README.md`) ou o corpus de
  exemplo em `starter/corpus/exemplo-dominio1/`.

## Regra da casa (retomada da aula 1)

> Você é responsável por cada linha que commita. O agente executa. Você especifica, lê o
> diff, roda os testes e decide.

Esta semana, a decisão que só você pode tomar tem nome: `src/filtro.js`. O agente monta o
pipeline inteiro sozinho — ingestão, chunking, embedding, busca, geração — sem entender
nada do seu domínio. O que ele não decide por conta própria é **o que representa a voz e
a verdade atual do seu projeto**, e o que é rascunho, decisão revogada ou irrelevante.
Indexar tudo é a forma mais comum de piorar retrieval, não melhorar.

## Referências

Lista completa, com o status de verificação de cada link e onde cada um entra na aula, em
[`REFERENCIAS.md`](./REFERENCIAS.md). As centrais:

| Referência | O que é |
|---|---|
| [Contextual Retrieval — Anthropic](https://www.anthropic.com/news/contextual-retrieval) | Por que chunks isolados perdem contexto, com números reais de falha de retrieval |
| [Embeddings — Claude Platform Docs](https://platform.claude.com/docs/en/build-with-claude/embeddings) | Confirma que a Anthropic não tem modelo de embedding próprio e recomenda a Voyage |
| [Pricing — Voyage AI Docs](https://docs.voyageai.com/docs/pricing) | Preço por milhão de tokens e a cota grátis por conta nova |
| [Chunking Strategies — Pinecone Learn](https://www.pinecone.io/learn/chunking-strategies/) | As estratégias de corte de texto e o tradeoff tamanho × qualidade |
| [The Definitive Guide to Vector Similarity — Pinecone Learn](https://www.pinecone.io/learn/vector-similarity/) | A fórmula e a leitura da similaridade de cosseno |
| [GraphRAG — Microsoft](https://microsoft.github.io/graphrag/) | A variante em grafo — mencionada, não praticada nesta semana |

## Fio condutor da semana

**"O chunk errado responde rápido e errado."** — repetido nas transições dos slides e no
roteiro. O documento pode ter a resposta inteira; se o corte de chunking separou a
pergunta da resposta antes de qualquer busca acontecer, nenhuma quantidade de modelo bom
conserta isso depois.
