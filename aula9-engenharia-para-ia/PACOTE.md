# PACOTE.md — Semana 5: Engenharia de software para desenvolvimento com IA (aula9-engenharia-para-ia)

Documento interno pra Iasmim e para a orquestradora. Não vai pro aluno.

---

## 0. Decisão de desenho — por que "Abstraction Bloat" como nome, e por que essa ordem

**Ordem:** diagnóstico primeiro (código real, sem nome técnico), checklist com nome
técnico depois, "Abstraction Bloat" como rótulo do padrão mais depois ainda, DDD
estratégico só ao final como resposta estrutural. Essa ordem não é arbitrária — é a
correção literal do erro da semana 1 (`_AULA1-REFERENCIA.md`): teoria antes de mão na
massa trava a turma. Aqui a sequência inteira do Bloco 1 é: sentir → apontar → nomear →
medir → agir.

**Por que "Abstraction Bloat" e não outro nome já existente na literatura:** pesquisei e
não existe um termo único, consolidado, com esse nome exato na literatura (ver
`REFERENCIAS.md`, seção "O que eu procurei e decidi não usar"). O que existe são peças:
"code bloat" (termo genérico, mais antigo, não específico de IA), "God Class Syndrome" e
"Modular Mirage" (nomeados no paper do arXiv, mas cada um cobre só uma fatia), duplicação
e churn como métricas soltas (GitClear). "Abstraction Bloat" é o nome que este curso
cunha pra amarrar essas peças num conceito ensinável em 20 minutos de aula síncrona —
está declarado assim, explicitamente, pro aluno, no roteiro e no checklist. Não finjo que
é termo estabelecido.

---

## 1. Mapeamento Alura

| Curso/módulo Alura | Carga | O que cobre | O que isso tira do síncrono |
|---|---|---|---|
| **DDD: fundamentos do design orientado a domínio** (`alura.com.br/curso-online-ddd-fundamentos-design-orientado-dominio`, 20h, com Vinícius Albano) | Módulos estratégicos: "do domínio ao contexto", "alinhando negócio e tecnologia", Event Storming, Domain Storytelling. Módulos táticos: entidades, objetos de valor, agregados, eventos de domínio | **Só o pré-requisito é a parte estratégica.** O síncrono não explica Event Storming nem Domain Storytelling como técnica de facilitação — assume que quem quiser aprofundar já viu isso na Alura. A parte tática (entidade, agregado, repositório) **não é pré-requisito nem conteúdo desta semana** — é citada como "existe, link pra quem quiser" e nada mais |
| **Qualidade de código: estratégia de Code Review, métricas e governança** (`alura.com.br/curso-online-qualidade-codigo-code-review`, 12h, com Daniel Loureiro Cintra) | Fundamentos de qualidade, refatoração manual, code review profissional, análise estática com SonarCloud, "Inteligência Artificial no fluxo", governança | O síncrono **não define do zero** o que é code smell, o que é complexidade ciclomática, nem como funciona uma quality gate de CI — assume que a turma já viu isso na Alura e vai direto pra versão "gerada por IA" desses mesmos problemas (o checklist desta semana) |

**Pré-requisito de entrada no lab da aula 2 (contrato, não punição):** módulo estratégico
do curso de DDD concluído antes da aula 2 — sem isso o aluno chega no board de Excalidraw
sem vocabulário pra defender a própria fronteira na frente do trio.

---

## 2. O que foi cortado

| Corte | Onde foi (antes → agora) |
|---|---|
| **DDD tático inteiro** (entidade, objeto de valor, agregado, repositório, evento de domínio como implementação) | Uma linha no slide 12 ("existe, não é o que resolve hoje") + link do curso Alura de DDD (que cobre os dois). Decisão do escopo desta semana, não corte por falta de tempo |
| **BDD e EARS** (especificação comportamental) | Não é mencionado além de "semana que vem" — a grade antiga colocava isso nesta semana; a decisão da Iasmim moveu pra semana 6 (`aula11-diagnostico-documentos-rpi`) |
| **Taxonomia completa do paper acadêmico** (Long Method, Temporal Field, Too Many Branches, High RFC, Feature Envy, Unstable Dependency, Scattered Functionality, Cyclic Dependencies — 8+ nomes) | Simplificada em 6 categorias práticas no checklist, com só 2 nomes do paper citados literalmente (God Class Syndrome, Modular Mirage) — os outros 6 nomes técnicos do paper viram exemplo dentro das categorias 2, 3, 5 e 6 do checklist, sem nome próprio, porque nomear 8 termos numa aula de 120 min pra turma que trava em teoria (`_BRIEF.md`, seção 1) reintroduziria o erro da semana 1 |
| **Diagramar a hierarquia managed/usuário/projeto/local do CLAUDE.md no Excalidraw** — `_GANCHOS.md` (lote 1) sugeria isso como "candidata a zona de diagrama coletivo nas semanas 5 e 6" | **Deferido pra semana 6**, deliberadamente. O board desta semana está 100% comprometido com bounded contexts do projeto do aluno — misturar um segundo diagrama (a hierarquia de memória) no mesmo board dilui os dois. Fica registrado aqui como decisão explícita pra quem escrever a semana 6: o gancho está livre, não foi esquecido |
| Explicação de Event Storming e Domain Storytelling como técnica de facilitação | Curso de DDD da Alura (20h) cobre isso — não cabe em 20 min de teoria síncrona |

---

## 3. Ganchos para frente

- **`starter/checklist-sinais-codigo-ia.md` é o artefato mais reusável do curso** — as
  semanas 7 (`aula13-spec-driven-development`), 8 (`aula15-verificadores`) e 9
  (`aula17-code-review-subagentes`) devem citá-lo pelo nome, sem redefinir as 6
  categorias do zero. Quem escrever essas semanas: o arquivo já existe em
  `aula9-engenharia-para-ia/starter/checklist-sinais-codigo-ia.md`, linke ou copie, não
  reinvente.
- **Vocabulário instalado sem reexplicar:** Abstraction Bloat (com as 4 subcategorias:
  Classe Deus, Miragem Modular, Camada de Passagem, nomeação genérica), linguagem
  ubíqua, bounded context. Qualquer semana futura pode usar "isso é uma fronteira
  dissolvida" ou "isso é uma camada de passagem" sem explicar de novo.
- **`RELATORIO-FRONTEIRA.md`** (o entregável completo desta semana) é candidato a virar
  convenção do curso: toda vez que o projeto do aluno ganha uma feature nova numa semana
  futura, cabe perguntar "isso é um bounded context novo ou entra num que já existe?" —
  útil principalmente nas semanas 10-13, quando o projeto ganha mais peças (orquestração,
  agentes, RAG).
- **`.claude/rules/` com escopo por `paths` foi praticado pela primeira vez aqui**
  (bônus do `ENTREGAVEL.md`) — a semana 9 (code review) é candidata natural a reusar
  isso: regra de revisão específica por bounded context, escopada por pasta.
- **A hierarquia managed/usuário/projeto/local do CLAUDE.md** (gancho do lote 1, ver
  seção 2 acima) está livre pra semana 6 usar como segunda zona do Excalidraw coletivo
  daquela semana — não foi usada aqui de propósito.
- **A mecânica de trios cruzados por domínio** (reaproveitada aqui, ver seção 4) continua
  disponível pra qualquer semana futura com dupla/trio — já é vocabulário conhecido da
  turma desde a semana 3.
- **BDD e EARS ficam para a semana 6** — quem escrever `aula11-diagnostico-documentos-rpi`
  precisa introduzir os dois do zero; esta semana não tocou nem de leve no vocabulário
  comportamental (Given/When/Then, "the system shall").

## 4. Ganchos para trás

Retomados literalmente de `_GANCHOS.md` (LOTE 1):

- **"Todo aluno tem código próprio com superfície de ataque — a semana 5 pode tratar
  isso como 'agora existe código de verdade para criticar'"** (gancho da semana 4) — é
  exatamente a abertura do Bloco 1 da aula 1: o Passo 1 da Demo 1 projeta o MCP server de
  um aluno, sem nome técnico, e deixa a turma apontar o que incomoda antes de qualquer
  teoria.
- **Mecânica de pareamento por sorteio com prioridade a domínios diferentes** (inventada
  na semana 3, reusada na semana 4) — reusada de novo na aula 2 desta semana, citando
  explicitamente que já é conhecida da turma (ver `ROTEIRO-FACILITADORA.md`, seção
  "Mecânica").
- **`DECISAO-ESCOPO.md` como convenção do curso** (semana 4) — citado no checklist
  (`starter/checklist-sinais-codigo-ia.md`, seção "O que este checklist NÃO substitui")
  pra deixar claro que são duas perguntas diferentes: raio de dano (semana 4) vs.
  estrutura do código (semana 5).
- **`.claude/rules/` com escopo por `paths`, citado em slide na semana 3 e não
  praticado** — esta semana é a primeira prática real, porque só agora existe uma
  fronteira (bounded context) que dá sentido a escopar uma regra por pasta. Ver slide 15
  (`SLIDES-OUTLINE.md`) e o bônus do `ENTREGAVEL.md`.
- **O catálogo de 7 domínios** (semana 2) segue sendo a base de verificação de cobertura
  — ver seção 5 abaixo.
- **"Comando de teste que roda"** (piso da semana 2, evoluído nas semanas 7-8) — o
  `starter/repo-plantado/` desta semana reforça o ponto de um jeito novo: os testes
  passam e o código ainda é ruim. É a primeira vez no curso que "teste verde" é
  explicitamente insuficiente, preparando o terreno pra semana 8 (Verificadores), onde
  "verde" vai precisar de mais garantias.

---

## 5. Cobertura dos 7 domínios do catálogo

| # | Domínio | Funciona? | Como (2 bounded contexts candidatos) |
|---|---|---|---|
| 1 | Listagem de perfis de alunos da PDA | ✅ | **Perfis** (dados do aluno: nome, habilidade, portfólio) × **Vitrine Pública** (busca, filtro, exibição pro visitante externo). É o exemplo já desenhado no board Excalidraw e no `ENTREGAVEL.md` |
| 2 | Captação de clientes e automações para freelancers | ✅ | **Captação de Lead** (validação, cadastro do lead bruto) × **Engajamento** (quando e como notificar/dar seguimento) — é literalmente o exemplo do `starter/repo-plantado/`, onde as duas coisas vêm misturadas de propósito em `saveToDatabase` |
| 3 | Quiz conectado ao Claude | ✅ | **Motor de Perguntas** (geração e lógica do quiz) × **Exportação de Resultados** (agregação, relatório, reuso por outra turma) — a fronteira já era sugerida no `DECISAO-ESCOPO.md` da semana 4 (a tool era read-only sobre resultados) |
| 4 | Avaliação automatizada de projetos por IA | ✅ | **Checklist de Entrega** (regra técnica do que avaliar) × **Feedback pro Aluno** (como comunicar o resultado sem desmotivar) — dois domínios genuinamente diferentes: um é sobre correção técnica, outro é sobre pedagogia |
| 5 | Agente de revisão de código com a voz da PDA | ✅ | **Base de Padrões da PDA** (linguagem/regras de estilo, consultada) × **Agente Revisor** (orquestra a revisão, decide o que comentar) — é o exemplo citado na nota do board Excalidraw como verificação do domínio "agente" |
| 6 | Problema real da ONG ou das aulas | ✅ | Padrão se repete: **Atendimento/Front** (o que o usuário final vê ou pede) × **Processamento/Back** (a lógica interna que decide o quê fazer com o pedido) — a facilitadora declara o caso concreto no dia e ajuda a turma a nomear com o vocabulário certo |
| 7 | Domínio próprio do aluno | ✅ | Por definição, os dois contextos vêm do negócio real do aluno — é o domínio onde o exercício de linguagem ubíqua rende mais, porque ele já sabe as palavras certas, só nunca parou pra separar |

**Cobertura: 7 de 7.** Verificação específica do `_BRIEF.md` ("o board tem que funcionar
pra um domínio que é site simples e um que é agente"): domínio 1 (site simples) está
desenhado no board; domínio 5 (agente) está descrito na nota do board e detalhado acima —
os dois usam a mesma estrutura de caixas + seta com verbo, sem adaptação de formato.

---

## 6. Soma dos minutos

**Aula 1:** 10 (Giro) + 15 (Recap) + 30 (Teoria+Demo1) + 15 (Lab1) + 20 (Teoria+Demo2) +
25 (Lab2) + 5 (Fechamento) = **120 min.**

**Aula 2:** 10 (Abertura+sorteio) + 5 (Recap relâmpago) + 25 (Rodada trios 1) + 15
(Plenária 1) + 25 (Rodada trios 2) + 15 (Plenária 2) + 20 (Ajuste final) + 5 (Fechamento)
= **120 min.**

(Tabelas completas, bloco a bloco, com o que se diz e o que se faz em cada um: ver
`ROTEIRO-FACILITADORA.md`.)

---

## 7. Onde o julgamento do aluno é indispensável

**O ponto exato:** decidir se uma separação de código é uma fronteira **de domínio** ou
só uma fronteira **técnica** disfarçada de solução.

Por que o agente não resolve isso sozinho: peça ao Claude Code "esse arquivo mistura mais
de um domínio, separa por bounded context" e ele entrega uma separação — só que, sem
saber o negócio, a separação mais provável estatisticamente é por **tipo de operação**
(validação / persistência / notificação), porque isso é um padrão sintático que aparece
muito no treino, não uma leitura semântica do domínio real. Isso é literalmente o erro
proposital da Demo 2 (`ROTEIRO-FACILITADORA.md`): o agente separa
`saveToDatabase`/`sendWelcomeEmail`/`logActivity` em "camadas", mas a regra de negócio
real ("quando notificar" pertence ao domínio de engajamento, não ao de cadastro) continua
enterrada dentro de uma delas. Só quem conhece o negócio — ou pergunta pra quem conhece —
decide isso.

**Como o lab e a aula 2 forçam essa decisão a acontecer, e a ser defendida:** o Lab 2 da
aula 1 pede a fronteira nomeada; a aula 2 inteira é estruturada pra ninguém sair sem
**defender** essa fronteira na frente de duas pessoas de domínio diferente (roteiro de
perguntas de fronteira, `ROTEIRO-FACILITADORA.md`) e, pra alguns, na frente da turma
inteira (plenária sorteada). O `RELATORIO-FRONTEIRA.md` do `ENTREGAVEL.md` pontua
explicitamente "o que o trio/a plenária te fez mudar" — se ninguém questionou nada e você
não mudou nada, isso também precisa ser justificado, não ignorado.

---

## 8. Excalidraw

Esta semana **usa Excalidraw obrigatoriamente** (S5, junto com S6). Arquivo:
`excalidraw/board-bounded-contexts.excalidraw` — validado com
`python3 -c "import json;json.load(open('...'))"` (ver final deste documento e do README
técnico).

**Design do board:**
- Legenda fixa (canto superior direito, amarelo) explicando a convenção de cor.
- Exemplo já preenchido do domínio 1 (Perfis × Vitrine Pública), com nota de texto
  explicando como o mesmo desenho se transporta pro domínio 5 (agente) — verificação
  exigida pelo `_BRIEF.md` feita diretamente no artefato, não só em documento.
- Zonas tracejadas nomeadas ("MEU BOUNDED CONTEXT 1/2/3", "linguagem ubíqua deste
  contexto") com o **minuto exato** de preenchimento escrito dentro da própria caixa —
  assim o aluno não depende de olhar o roteiro pra saber quando mexer em qual zona.
  Tabela completa de zona × quem × quando está em `ROTEIRO-FACILITADORA.md`.
- Zona bônus `.claude/rules/`, amarela, tracejada — opcional, só se sobrar tempo,
  conectando o vocabulário desta semana com o gancho retomado da semana 3.
- Nenhum emoji (não renderiza na fonte do Excalidraw, ver `_EXCALIDRAW.md`). Cores
  seguem a paleta de `_EXCALIDRAW.md` com as variantes escuras pra texto sobre
  preenchimento claro (`#2563eb`, `#2f9e44`, não as versões saturadas).
