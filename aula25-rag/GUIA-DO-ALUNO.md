# Guia do aluno — Semana 13: RAG

Este guia acompanha os slides das duas aulas. Quando aparecer **MÃO NA MASSA** na tela, é
a sua vez: abra a seção correspondente aqui e faça junto.

Regra: terminal aberto do lado. Travou? Manda o erro no chat, segue em dupla.

---

## ANTES DE TUDO — a segunda chave desta semana

Desde a Semana 11 você tem `ANTHROPIC_API_KEY`. **Esta semana soma uma segunda chave, de
um segundo provedor**, porque a Anthropic não tem modelo de embedding próprio — a doc
oficial recomenda a Voyage AI (`REFERENCIAS.md` item 2, citação direta: *"Anthropic does
not offer its own embedding model"*). São contas separadas, em painéis separados:
`platform.claude.com` (a de sempre) e `dashboard.voyageai.com` (nova).

### Quanto isso custa, de verdade

Preço confirmado na doc oficial (`REFERENCIAS.md` item 3), por milhão de tokens:

| Modelo de embedding | Preço | Uso recomendado nesta semana |
|---|---|---|
| **`voyage-4-lite`** | US$ 0,02 / MTok | O padrão do starter — texto curto/médio como o de projeto de aluno não justifica pagar 3x mais |
| `voyage-4` | US$ 0,06 / MTok | Só se você comparar com o `eval-retrieval` no SEU corpus e sentir diferença real de qualidade |

**Conta real, não estimativa vaga:** um documento médio de projeto de aluno tem ~600
palavras (~900 tokens). Com chunking recursivo e sobreposição, isso sobe pra ~1.035
tokens efetivos embedados por documento.

```
1.000 documentos x 1.035 tokens  =  1.035.000 tokens  =  1,035 milhão de tokens
1,035 MTok x US$ 0,02/MTok        =  US$ 0,0207
```

**Indexar mil documentos custa cerca de 2 centavos de dólar.** E nem isso na prática:
toda conta Voyage nova vem com **200 milhões de tokens grátis** — dá pra indexar o mesmo
lote de mil documentos umas 190 vezes antes de pagar um centavo. Estourar essa cota numa
conta pessoal exigiria indexar quase 200 mil documentos — não é um cenário real pra um
projeto de curso.

**Onde o custo real pode aparecer:** não é o embedding. É rodar `npm run perguntar` ou
`npm run eval-retrieval` em loop, sem olhar o resultado — isso soma tokens de *geração*
(Anthropic, US$ 2–10/MTok, preço já visto na Semana 11), que custa mais rápido que
embedding. Mesmo aviso de sempre: não peça "roda de novo" cinco vezes sem pensar.

### Setup de chave e `.env` (faça isso ANTES da aula 25)

1. Vá em <https://dashboard.voyageai.com>, crie conta (ou entre) e gere uma chave em
   **Settings → API keys**. Formato real: `pa-...`. Guarde num gerenciador de senha.
2. Se ainda não tiver `ANTHROPIC_API_KEY` de semanas anteriores, gere em
   <https://platform.claude.com> (Settings → API Keys) do mesmo jeito.
3. No `starter/`:

   ```bash
   cd aula25-rag/starter
   cp .env.example .env
   ```

4. Abra `.env` e cole as DUAS chaves nos lugares certos:
   - `ANTHROPIC_API_KEY=sk-ant-...`
   - `VOYAGE_API_KEY=pa-...`
5. **Confira agora, antes de fechar o editor:**

   ```bash
   git check-ignore -v .env   # tem que imprimir uma linha. Se não imprimir nada, PARE.
   ```

6. Teste as duas chaves:

   ```bash
   npm install
   npm run checar-chave
   ```

   Saída esperada:
   ```
   VOYAGE_API_KEY funciona. Vetor de dimensão 1024. Custo desta chamada: US$ 0.00000004 (2 token(s)).
   ANTHROPIC_API_KEY funciona. Resposta do modelo: ok
   ```

   Se der erro em uma das duas, veja a tabela de troubleshooting no fim deste guia.

7. Leia `starter/CHECKLIST-SEGREDOS-RAG.md` inteiro agora — ele é só o **delta** sobre
   `aula21-software-com-llm-dentro/starter/CHECKLIST-SEGREDOS.md`, que continua valendo
   inteiro. A diferença que importa: um `grep` que só procura `sk-ant` não pega uma
   chave da Voyage vazada (prefixo `pa-`).

---

## Terminal: qual usar (retomado da aula 1 — a maioria da turma está no Windows)

| opção | já vem pronto no Windows? | roda os comandos deste guia sem adaptar? |
|---|---|---|
| **Git Bash** — recomendado hoje também | não — instala com o [Git para Windows](https://git-scm.com/download/win) | sim |
| **WSL (Ubuntu)** | não — `wsl --install` como administrador, reiniciar | sim |
| **PowerShell** | sim | parcial — prefira Git Bash pros comandos com `&&` encadeado |
| **CMD** | sim | evite |

Se você já resolveu isso em semana anterior, nada muda aqui. **Node 20+ continua
obrigatório** (exigido desde a Semana 11): `node -v`. Se mostrar 18 ou 19, atualize antes
da aula em <https://nodejs.org> (LTS) ou `nvm install 20`.

---

## LAB 1 (Aula 25, 15 min) — reproduza a falha no SEU corpus

Objetivo: identificar, no terminal, um chunk que corta no meio de uma resposta — não
decorar a falha do corpus de exemplo, encontrar a MESMA classe de falha no seu.

1. Rode contra um arquivo do seu próprio repositório de projeto (README, RESEARCH.md,
   ADR, o que você tiver):

   ```bash
   node src/compare-chunking.js /caminho/pro/seu/arquivo.md
   ```

   Se ainda não tem corpus próprio suficiente, use o de exemplo:

   ```bash
   node src/compare-chunking.js corpus/exemplo-dominio1/perfis.md
   ```

2. Procure, na saída da **Estratégia 1 — fixo, ingênuo**, pelo menos um chunk marcado
   `<-- corta no meio da frase` cujo conteúdo pareça uma resposta importante (um número,
   um nome, uma regra).
3. Formule UMA pergunta cuja resposta caia perto daquele corte.
4. Indexe o seu corpus com a estratégia ingênua de propósito:

   ```bash
   node --env-file=.env src/ingest.js /caminho/pro/seu/corpus --estrategia=fixo --tamanho=240 --saida=data/indice-ingenuo.json
   ```

   (Sem pasta própria pronta ainda? `node --env-file=.env src/ingest.js corpus/exemplo-dominio1 --estrategia=fixo --tamanho=240 --saida=data/indice-ingenuo.json`.)

5. Pergunte contra esse índice:

   ```bash
   node --env-file=.env src/ask.js "sua pergunta aqui"
   ```

   (O `ask.js` usa `data/indice.json` por padrão — se você salvou em outro caminho, ajuste
   o `import.meta.url` do arquivo ou, mais simples, renomeie/copie pra `data/indice.json`
   antes de perguntar.)

**Critério de pronto:** você aponta, no terminal, o chunk específico que voltou
incompleto ou sem a informação. Não precisa ter uma resposta "bonita" errada — precisa
ter **identificado onde o corte comeu a informação**. Se você pulou direto pra "deixa eu
aumentar o `--k`" sem olhar o texto que voltou, volte e leia o chunk primeiro — é o mesmo
hábito de ler o diff antes de aceitar, regra da casa desde a Semana 1.

**Sem corpus suficiente ainda?** `corpus/exemplo-pouco-texto/README.md` tem o passo a
passo de 5 minutos pra montar uma pasta com os artefatos que você já escreveu desde a
Semana 2 (README, CLAUDE.md, ADRs, specs, `ENTREGAVEL.md` de cada semana).

---

## LAB 2 (Aula 25, 25 min) — `src/filtro.js`: o que NÃO entra na base

Objetivo: `npm test` fechar verde depois de você decidir, com justificativa própria, pelo
menos um tipo de conteúdo do seu repositório que fica de fora do índice.

1. Rode `npm test` e confirme que vê a mesma falha que a facilitadora mostrou: 2 testes
   de `tests/filtro.test.js` falhando, porque `deveIndexar` ainda devolve `true` sempre.
2. Antes de editar código, responda em voz alta (ou no chat) pra sua dupla: **o que no
   SEU repositório não deveria estar na base de um RAG?** Rascunho pessoal sem revisão?
   Um ADR que você já revogou por um mais novo? Código-fonte que ninguém vai perguntar
   sobre em linguagem natural? Nomeie pelo menos um caso real, não hipotético.
3. Abra `src/filtro.js` e edite `deveIndexar`. Depois, abra `tests/filtro.test.js` e troque
   os nomes de exemplo (`"rascunho-pessoal.md"`, `"perfis.md"`) pelos nomes reais do SEU
   repositório — é o único teste do starter que você tem permissão (e é esperado) editar.
4. Rode `npm test` de novo. **Critério de pronto:** os 16 testes passam, e a regra que
   você escreveu exclui pelo menos um arquivo real que você nomeou no passo 2.

**Sinal de alerta em você mesmo:** se você só troca `return true` por `return false` (ou
seja, exclui tudo) pra "passar no teste", pergunte-se: seu índice agora tem quantos
documentos? Zero — e o próprio `ingest.js` lança erro nesse caso ("Nenhum chunk pra
indexar"). Isso não é a mesma coisa que ter uma regra.

Depois do Lab 2, se der tempo, reindexe com a estratégia melhor e repita a pergunta do
Lab 1 — é exatamente a demo que a facilitadora acabou de fazer, agora no seu corpus:

```bash
node --env-file=.env src/ingest.js /caminho/pro/seu/corpus --estrategia=recursivo_overlap --saida=data/indice-melhor.json
```

---

## AULA 26 — lab guiado paralelo (checkpoint a cada 20 min)

Formato já conhecido das Semanas 2 e 3: a facilitadora constrói, devagar, sobre o próprio
corpus dela, e você reproduz em paralelo no seu projeto — digitando linha por linha, não
copiando e colando. A diferença desta vez: **checkpoint fixo a cada 20 minutos**, porque
o que trava alguém nesta semana não é sintaxe básica, é uma das duas chaves faltando.

**Checkpoint 0, antes de qualquer coisa:** rode `npm run checar-chave` na sua máquina. Se
não passar, você entra na fila de suporte imediatamente — não espera os próximos 20
minutos de construção.

Objetivo de saída da aula 26: `data/indice.json` do seu corpus gerado, pelo menos uma
pergunta feita com `ask.js`, `src/filtro.js` preenchido e justificado, e `npm test`
verde. Se algo não fechar hoje, não é bloqueador — mas entra na sua lista de pendência
antes do prazo do `ENTREGAVEL.md`.

---

## Troubleshooting

| Sintoma | Causa provável | O que fazer |
|---|---|---|
| `VOYAGE_API_KEY não definida. Rode 'npm run checar-chave' primeiro.` | `.env` não foi criado, ou o comando não carregou o `.env` | Confira que `.env` existe (`ls -a`) e rode com `--env-file=.env` |
| `Voyage API respondeu 401` | Chave copiada com espaço, do painel errado (confundiu com `platform.claude.com`), ou revogada | Recopie de `dashboard.voyageai.com`, sem espaço nas pontas |
| `Anthropic API respondeu 401` | A OUTRA chave está errada — as duas falham por motivos diferentes, confira uma por vez com `npm run checar-chave` | Recopie a chave de `platform.claude.com` |
| `Estratégia desconhecida: <nome>` | Erro de digitação em `--estrategia=` | Valores válidos: `fixo`, `recursivo_overlap`, `por_estrutura` |
| `Nenhum chunk pra indexar.` | A pasta do corpus está vazia, ou `src/filtro.js` excluiu tudo | Confira as duas possibilidades — comece revertendo `deveIndexar` pra `return true` temporariamente só pra confirmar qual é |
| `compare-chunking.js` na Estratégia 3 devolve o documento inteiro, sem nenhum corte | Seu arquivo não tem cabeçalho Markdown (`#`, `##`, `###`) | Não é bug — chunking por estrutura só funciona em documento estruturado. Use `fixo` ou `recursivo_overlap` nesse arquivo |
| `ask.js` responde "o contexto não contém a resposta" mesmo com o documento indexado | O chunk certo não voltou na busca (retrieval), não é problema do modelo | Rode `compare-chunking.js` no mesmo arquivo e confira se a resposta ficou cortada entre dois chunks; se sim, reindexe com `recursivo_overlap` |
| `npm run eval-retrieval` erro `VOYAGE_API_KEY não definida` | Faltou `--env-file=.env` no comando | `node --env-file=.env evals/runner-retrieval.js ...` |
| `npm test` mostra 2 falhas mesmo depois de editar `filtro.js` | Você editou a função mas não os exemplos de `tests/filtro.test.js` (que continuam citando `"rascunho-pessoal.md"`/`"perfis.md"`) | Troque os exemplos do teste pelos nomes reais do SEU repositório |
| Node mostra versão 18 ou 19 | Node antigo, o mesmo requisito desde a Semana 11 | Atualize em <https://nodejs.org> (LTS) ou `nvm install 20` |
| Windows: comando com `--env-file=.env` dá erro de sintaxe estranho | PowerShell/CMD interpretam flag diferente | Use Git Bash (tabela no início deste guia) |

Travou em algo que não está aqui? Chama no chat da turma antes de ficar preso sozinho —
mesmo combinado desde a aula 1.
