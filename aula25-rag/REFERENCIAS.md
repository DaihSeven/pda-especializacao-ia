# Referências — Semana 13 (aulas 25 e 26)

Todo link abaixo foi aberto com WebFetch nesta sessão antes de entrar aqui. Nenhum link
composto por analogia. Data da verificação: 2026-09-13.

| # | Link | O que é | Verificação | Onde entra |
|---|---|---|---|---|
| 1 | [Contextual Retrieval — Anthropic](https://www.anthropic.com/news/contextual-retrieval) | Artigo de engenharia da Anthropic: por que chunks isolados perdem contexto, e números de falha de retrieval antes/depois de mitigação | Aberto via WebFetch — confirma o exemplo do "3% de crescimento" sem dizer de qual empresa/trimestre, e os números: baseline 5,7% de falha de retrieval; -35% só com embeddings contextuais; -49% com BM25 contextual; -67% com reranking | Coração da aula: slide "por que RAG ingênuo tem precisão baixa" (Bloco 3, depois da demo); `ROTEIRO-FACILITADORA.md`, revelação do capô |
| 2 | [Embeddings — Claude Platform Docs](https://platform.claude.com/docs/en/build-with-claude/embeddings) | Doc oficial: confirma que a Anthropic **não** tem modelo de embedding próprio e recomenda a Voyage AI; lista a família voyage-4 (large/normal/lite/nano), contexto de 32k tokens, dimensão padrão 1024 | Aberto via WebFetch — citação direta: "Anthropic does not offer its own embedding model" | Decisão de stack (PACOTE.md seção 3); bloco `</DUAS CHAVES>` do slide de setup |
| 3 | [Pricing — Voyage AI Docs](https://docs.voyageai.com/docs/pricing) | Preço oficial por milhão de tokens dos modelos de embedding Voyage, e a política de tokens grátis por conta nova | Aberto via WebFetch — confirma voyage-4-lite US$0,02/MTok, voyage-4 US$0,06/MTok, e "os primeiros 200 milhões de tokens são grátis, por conta" pros modelos 4 | Slide de custo (`</QUANTO CUSTA INDEXAR MIL DOCUMENTOS>`); `.env.example`; `GUIA-DO-ALUNO.md` |
| 4 | [Embeddings API Reference — Voyage AI Docs](https://docs.voyageai.com/reference/embeddings-api) | Doc oficial do endpoint REST `POST /v1/embeddings`: shape do corpo (`input`, `model`, `input_type`) e da resposta (`data[].embedding`) | Aberto via WebFetch — confirma que dá pra chamar com fetch puro, sem SDK; confirma o campo `input_type: query \| document` | `starter/src/embeddings.js` |
| 5 | [API Keys and Installation — Voyage AI Docs](https://docs.voyageai.com/docs/api-key-and-installation) | Doc oficial de autenticação: cabeçalho `Authorization: Bearer <chave>`, onde gerar a chave no dashboard | Aberto via WebFetch — confirma o formato exato do cabeçalho usado em `embeddings.js` | `starter/src/embeddings.js`; `starter/CHECKLIST-SEGREDOS-RAG.md` |
| 6 | [Chunking Strategies for LLM Applications — Pinecone Learn](https://www.pinecone.io/learn/chunking-strategies/) | Guia técnico: chunking fixo, recursivo, por sentença, por estrutura de documento e semântico; o tradeoff tamanho × qualidade e o "lost-in-the-middle" de chunk grande demais | Aberto via WebFetch — confirma as 5 estratégias descritas e a faixa de 128–1024 tokens citada como ponto de partida pra teste | Slide de chunking (diagrama das 3 estratégias); base de `starter/src/chunking.js` |
| 7 | [The Definitive Guide to Vector Similarity — Pinecone Learn](https://www.pinecone.io/learn/vector-similarity/) | Explicação da similaridade de cosseno: fórmula, intuição geométrica, quando ela é a métrica certa (direção) e quando não é (magnitude importa) | Aberto via WebFetch — confirma a fórmula `(a·b)/(‖a‖‖b‖)` e a leitura de -1 a 1 | `starter/src/vectorStore.js`; slide "busca por similaridade" |
| 8 | [GraphRAG — Microsoft](https://microsoft.github.io/graphrag/) | Página oficial do projeto: RAG estruturado em grafo de conhecimento + hierarquia de comunidades, pra perguntas que cruzam vários documentos ou pedem síntese de tema | Aberto via WebFetch — confirma o posicionamento: só compensa a complexidade extra em perguntas multi-hop/síntese, não em busca de fato pontual | Slide de menção (`</E O GRAPH RAG?>`), com link — não é bloco |
| 9 | [Stevenic/vectra — GitHub](https://github.com/Stevenic/vectra) | Pacote npm de vector DB local pra Node.js, MIT | Aberto via WebFetch — confirma ~13 dependências de produção (grpc, cliente da OpenAI, parser de HTML, tokenizer) pro `package.json` da versão atual | PACOTE.md seção 3 — motivo declarado de TER SIDO DESCARTADO em favor do armazenamento hand-rolled em `starter/src/vectorStore.js` |
| 10 | [LangChain: criando chatbots inteligentes com RAG — Alura](https://www.alura.com.br/curso-online-langchain-criando-chatbots-inteligentes-rag) | Curso Alura, 16h/67 atividades: embedding e armazenamento vetorial, chunking, pipelines de recuperação, avaliação de resultado, busca híbrida, projeto final | Aberto via WebFetch — confirma título exato e ementa | `PACOTE.md`, mapeamento Alura — é o curso "síncrono só implementação guiada" |
| 11 | [LangChain: Técnicas Avançadas de RAG — Alura](https://www.alura.com.br/curso-online-langchain-rag-avancado) | Curso Alura, 10h/35 atividades: fundamentos de RAG, embeddings e vector store, otimização de prompt e reestruturação de consulta, avaliação com LangSmith | Aberto via WebFetch — confirma título exato e ementa | `PACOTE.md`, mapeamento Alura — o segundo dos "dois cursos de LangChain" citados no bloco da grade |

## Repetição entre semanas

Nenhuma destas 11 fontes apareceu em `REFERENCIAS.md` de nenhuma semana anterior — é a
primeira vez que o curso cita Voyage AI, Pinecone Learn, GraphRAG/Microsoft ou os cursos
de LangChain da Alura. Não há repetição a sinalizar.

## `[CONFIRMAR]` desta semana

Nenhum. Diferente da Semana 11 (que deixou em aberto o limite de gasto configurável na
Anthropic), todas as peças da stack desta semana — modelo de embedding, preço, formato de
API, armazenamento — foram confirmadas com WebFetch antes de entrar no `starter/`.

Uma ressalva que NÃO é `[CONFIRMAR]`, é estimativa declarada: o cálculo de "quanto custa
indexar mil documentos" (`PACOTE.md` seção 6) assume um documento médio de ~900 tokens
depois do chunking com sobreposição — é uma suposição de tamanho, não um preço incerto. O
preço em si (item 3) é oficial.
