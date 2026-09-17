# PACOTE.md — Semana 9: Code review e subagentes de revisão (`aula17-code-review-subagentes`)

Documento interno pra Iasmim e para a orquestradora. Não vai pro aluno.

**Nota sobre módulo:** cabeçalho do `ENTREGAVEL.md` usa **"Módulo 3 — AI
Orchestrator / Agentes"**, conforme a distribuição do ADENDO do `_BRIEF.md`
(M3 = semanas 9–12). Os subagentes foram puxados da Semana 10 pra cá — a
semana 10 fica só com orquestração, paralelismo e o MCP client próprio.

---

## 0. Decisão central desta semana e por que a ordem é o mecanismo

O coração do pacote é a comparação humano × subagente, e a regra dura é:
**o registro humano tem que existir e estar commitado antes de o aluno
rodar qualquer subagente.** Sem isso, o exercício vira "o aluno lê o output
do subagente e finge que também tinha visto aquilo" — que não ensina nada
sobre onde cada lado é cego.

**Mecanismo escolhido:** `templates/REGISTRO-REVISAO-HUMANA.md`, preenchido
e commitado ANTES do primeiro uso de `revisor-sinais-ia` ou
`revisor-seguranca-ia`. A prova não é a palavra do aluno — é `git log
--oneline`, mostrando o commit do registro humano com timestamp anterior ao
commit do `REGISTRO-SUBAGENTE.md`. Isso reusa literalmente o padrão de
`LOG-RED-GREEN-REFACTOR` da Semana 8: **prova pela ordem dos commits, não
pela narrativa reconstruída depois.** Não é um mecanismo novo — é o mesmo
músculo aplicado a um objeto novo (revisão, em vez de teste).

**Por que não usar hook ou trava técnica mais forte (ex.: hook que bloqueia
a invocação do subagente se o registro não existir):** foi cogitado e
descartado. Um hook de `PreToolUse` que verifica a existência do
`REGISTRO-REVISAO-HUMANA.md` antes de permitir o subagente rodar É POSSÍVEL
tecnicamente (Semana 5 já ensinou hooks-adjacentes via `.claude/rules`), mas
tornaria o mecanismo de prova sobre a ferramenta, não sobre a disciplina do
aluno — e um aluno pode sempre criar o arquivo vazio só pra passar no hook.
O commit com timestamp é mais fraco tecnicamente e mais forte
pedagogicamente: é a mesma decisão de design que a Semana 8 tomou com
red/green/refactor (provar por prática registrada, não por trava que não
pode ser burlada).

---

## 1. Mapeamento Alura

| Curso/módulo Alura | Carga | O que cobre | O que isso tira do síncrono |
|---|---|---|---|
| **Qualidade de código: estratégia de Code Review, métricas e governança** (`alura.com.br/curso-online-qualidade-codigo-code-review`, 12h) | Fundamentos de qualidade (Clean Code, Code Smells), refatoração manual, Code Review Profissional, análise estática com Sonarcloud, IA no fluxo, processo e liderança | O aluno chega à aula 1 já tendo visto o que é um code review "de livro-texto" — etiqueta de comentário, processo estruturado, ferramenta de análise estática (Sonarcloud). **A aula não reexplica "o que é code review" nem etiqueta de comentário genérica** — vai direto pro que a Alura NÃO cobre: como isso muda quando quem escreveu o código foi um agente, e como delegar parte da revisão pra um subagente configurado por você. Sonarcloud é mencionado só de passagem (o `revisor-sinais-ia` faz um trabalho adjacente, mas não é a mesma ferramenta nem o mesmo objetivo — Sonar mede métrica estática, o subagente aplica um checklist qualitativo do curso) |
| **OWASP IA Top 10 para LLMs: protegendo aplicações e agentes inteligentes** (já mapeado pela Semana 4, `alura.com.br/curso-online-owasp-top-10-para-llms`, 5h) | Prompt injection, output handling, supply chain de LLM/agente | A configuração do `revisor-seguranca-ia` não reexplica nenhum dos quatro riscos — assume que a turma já tem o vocabulário (Semana 4) e vai direto pra "agora você escreve um subagente que procura isso automaticamente" |

**Pré-requisito de entrada no lab da aula 2 (contrato, não punição):** o
bloco "Code Review Profissional" do curso de Qualidade de Código concluído
— sem isso o aluno não tem vocabulário mínimo de "o que comentar e como" pra
revisar o PR real do colega no red team.

---

## 2. O que foi cortado

| Corte | Onde foi |
|---|---|
| "O que é code review" e etiqueta de comentário do zero | Alura (curso de Qualidade de Código, módulo 3) |
| Sonarcloud / análise estática de terceiros como ferramenta ensinada ativamente | Mencionado de passagem como contraste ("mede métrica, não julgamento") — não configurado em sala, porque exigiria conta em serviço externo e este curso mantém zero API key/zero cadastro novo até a Semana 10 |
| Clean Code / Code Smells como vocabulário novo | Não é novo — já é `checklist-sinais-codigo-ia.md` da Semana 5, com nomes próprios do curso (Abstraction Bloat etc.); a Alura reforça com o vocabulário de mercado (Code Smells), o curso não duplica a explicação |
| Varredura ampla de "todos os campos possíveis de frontmatter de subagente" (model, `permissionMode`, `maxTurns`, `skills`, `mcpServers`, `memory`, `background`, `effort`, `isolation`, `hooks` — todos confirmados na doc oficial, `REFERENCIAS.md` #1) | Só `name`, `description`, `tools`, `model`, `permissionMode` entram no síncrono — os dois exemplos do `starter/` usam só esses 5. O resto vira nota de rodapé no `GUIA-DO-ALUNO.md` ("existe mais, veja a doc") — ensinar os 15 campos nesta semana estouraria o corte de profundidade |
| Configuração de hook (`PreToolUse`) pra travar a ordem humano→subagente automaticamente | Cogitado e descartado — ver seção 0. Fica como gancho livre pra Semana 10 ou 11 se quiserem aprofundar hooks |

---

## 3. Ganchos para frente

- **Os dois subagentes (`revisor-sinais-ia`, `revisor-seguranca-ia`)** são
  artefato de curso a partir de agora — qualquer semana futura que precise
  de revisão automatizada de diff (Semana 11 em diante, quando o código
  passa a ter chamada de API de verdade e mais superfície de risco) pode
  citar os dois pelo nome e estendê-los, não recriar do zero.
- **`REGISTRO-REVISAO-HUMANA.md` / `REGISTRO-SUBAGENTE.md` / ordem-por-commit
  como mecanismo de prova** é reusável em qualquer semana futura que compare
  julgamento humano com output de agente — é a mesma lógica de
  `LOG-RED-GREEN-REFACTOR` (Semana 8) aplicada a um objeto diferente
  (revisão). Nomeie explicitamente se reusar: "mesma lógica da Semana 9."
- **`LISTA-SINAIS-ALERTA-PR-AGENTE.md`** (scope creep/R007, teste alterado,
  dependência não justificada, comentário que explica o óbvio, refactor não
  pedido) é vocabulário citável sem reexplicar em qualquer semana que envolva
  revisar PR de agente — Semanas 10 (orquestração/paralelismo, PRs saindo de
  múltiplas sessões em paralelo) e 11–12 (AIOps) são candidatas diretas.
- **A técnica de leitura em camadas** (visão geral → estrutura → risco de
  domínio → linha a linha) fica disponível como músculo para qualquer semana
  com diff grande — nomeadamente a Semana 10, onde paralelismo produz vários
  diffs de uma vez.
- **`.claude/agents/` como convenção de repositório** (assim como
  `.claude/rules/` desde a Semana 5) — qualquer projeto do aluno daqui pra
  frente pode ter subagentes versionados no repo; isso é setup que só
  precisa acontecer uma vez.
- **Pendência explícita pra quem escrever a Semana 10 ou 11:** o hook de
  `PreToolUse` que travaria automaticamente a ordem humano→subagente (ver
  seção 0) foi cogitado e descartado aqui por motivo pedagógico, não por
  impossibilidade técnica — é gancho livre se uma semana futura quiser
  ensinar hooks de verdade com um caso de uso concreto e já familiar à
  turma.

## 4. Ganchos para trás

Retomados do `_GANCHOS.md` (LOTE 1 e LOTE 2), citados pelo nome exato:

- **`checklist-sinais-codigo-ia.md` (Semana 5)** — é a régua inteira do
  `revisor-sinais-ia`. Os nomes (Classe Deus, Miragem Modular, Camada de
  Passagem, nomeação genérica, Abstraction Bloat) são citados sem
  redefinição em todo o pacote. Uma cópia do arquivo foi trazida pra dentro
  de `starter/pr-plantado/` só pra o exercício isolado funcionar sozinho —
  não é uma redefinição, é a mesma fonte, copiada pra um projeto separado.
- **Trio de vocabulário de segurança da Semana 4** (prompt injection,
  improper output handling, supply chain de MCP) — vocabulário completo do
  `revisor-seguranca-ia`, riscos 1–3, sem reexplicação.
- **Package hallucination / slopsquatting (Semana 8)** — risco 4 do
  `revisor-seguranca-ia`, e o pacote inventado do `pr-plantado`
  (`pt-acento-normalize-utils`) segue o mesmo molde do
  `exemplo-pacote-inventado.md` da Semana 8.
- **Taxonomia dos "3 padrões de teste que não prova nada" (Semana 8)** —
  usada literalmente: o assert enfraquecido no `pr-plantado` é uma instância
  do padrão #2 ("o assert que sempre passa"), citado pelo nome no
  `GABARITO-PR-PLANTADO.md`.
- **`.claude/rules/` com escopo por `paths`, praticado pela primeira vez na
  Semana 5** — citado no `SLIDES-OUTLINE.md` como analogia de configuração
  versionada no repo (regra por pasta ↔ subagente por responsabilidade),
  não reensinado.
- **`REGISTRO-TAXA-DE-ACERTO.csv` (Semana 7)** — inspirou o formato de
  `templates/REGISTRO-COMPARACAO.csv` (linha por achado, colunas de
  categoria e veredito) — mesmo espírito de medição quantificável, aplicado
  a revisão em vez de taxa de acerto de spec.
- **Mecânica de sorteio com prioridade a domínios diferentes (Semana 3,
  reusada na 4)** — reusada tal e qual no sorteio das duplas da aula 2 desta
  semana, citando que a turma já conhece a regra.
- **"Regra da casa" e "`tests/` é a especificação e não se edita"** (aula 1)
  — citada explicitamente no `GABARITO-PR-PLANTADO.md` e no
  `LISTA-SINAIS-ALERTA-PR-AGENTE.md` (item 2) como a regra que o PR plantado
  viola.
- **`DECISAO-ESCOPO.md` (Semana 4)** — citado de passagem no item 3 da lista
  de sinais de alerta ("toda coisa nova exposta é uma escolha que alguém
  assume"), mesma lógica aplicada a dependência em vez de tool.

---

## 5. Cobertura dos 7 domínios do catálogo

| # | Domínio | Funciona? | Como |
|---|---|---|---|
| 1 | Listagem de perfis de alunos da PDA | ✅ | É o domínio usado literalmente em `starter/pr-plantado/` — o exemplo modelo do `ENTREGAVEL.md` também usa este domínio |
| 2 | Captação de clientes e automações para freelancers | ✅ | Qualquer diff de pipeline/automação em Node/TS aplica os dois subagentes sem adaptação — `checklist-sinais-codigo-ia.md` e o vocabulário de segurança não são específicos de UI |
| 3 | Quiz conectado ao Claude | ✅ | PR típico (endpoint de exportar resultado, tratamento de resposta do Claude) é terreno direto do `revisor-seguranca-ia` (o próprio quiz processa conteúdo do usuário que pode ir pro prompt — risco 1 dele) |
| 4 | Avaliação automatizada de projetos por IA | ✅ | Esse domínio inteiro É um revisor — configurar `revisor-sinais-ia`/`revisor-seguranca-ia` nele é literalmente o produto do aluno evoluindo; bom gancho de discussão em sala ("seu projeto é um subagente de revisão") |
| 5 | Agente de revisão de código com a voz da PDA | ✅ | Mesmo caso do domínio 4, ainda mais direto — o aluno deste domínio pode literalmente adaptar `starter/agentes-revisao/*.md` como ponto de partida do seu próprio produto |
| 6 | Problema real da ONG ou das aulas | ✅ | Qualquer repositório de código (dashboard, script) tem diff e pode ter os dois subagentes configurados; se o problema é majoritariamente planilha/sem código, o Lab 2 ainda se aplica ao próprio repositório de automação que suporta o processo |
| 7 | Domínio próprio do aluno | ✅ | Mesmo raciocínio do 6 — os dois subagentes são genéricos o bastante (leem diff, procuram padrão de texto) pra funcionar em qualquer coisa versionada em git com `package.json` ou equivalente |

**Cobertura: 7 de 7.** Nenhum domínio exige adaptação de ferramenta — os
dois subagentes leem diff e código-fonte, não dependem de stack específica
além de "está num repositório git".

---

## 6. Soma dos minutos

**Aula 1 (leitura em camadas + configuração dos 2 subagentes):**
10 (Giro) + 15 (Recap) + 30 (Teoria+Demo 1: leitura em camadas) +
15 (Lab 1: aplicar a leitura em camadas + registro humano) +
20 (Teoria+Demo 2: configurar os subagentes) +
25 (Lab 2: configurar e rodar os 2 subagentes + comparação) +
5 (Fechamento) = **120 min.**

**Aula 2 (red team em duplas):**
10 (Abertura+sorteio) + 5 (Setup: troca de link do PR real) +
30 (Rodada 1: revisão humana individual do PR do colega, registro commitado) +
5 (Corte: trava do registro — "commitem agora") +
25 (Rodada 2: rodar os 2 subagentes no mesmo PR) +
25 (Rodada 3: comparação em dupla + priorização — o que bloqueia de verdade) +
15 (Consolidação plenária) + 5 (Fechamento) = **120 min.**

(Tabelas completas, bloco a bloco, com falas e planos B: ver
`ROTEIRO-FACILITADORA.md`.)

---

## 7. Onde o julgamento do aluno é indispensável

**O ponto exato:** decidir **o que, dos achados (seus e dos dois
subagentes), realmente bloqueia o merge** — e ser capaz de defender por que
o resto não bloqueia.

Por que o agente não resolve isso sozinho: peça a um subagente pra revisar
um diff e ele vai achar problema — a própria doc oficial da Anthropic
avisa isso (`REFERENCIAS.md` #2): "um revisor instruído a achar problema
geralmente vai achar, mesmo quando o trabalho está sólido." Perseguir todo
achado leva a over-engineering: camada extra, código defensivo, teste pra
caso que não acontece. O Google (`REFERENCIAS.md` #4) formaliza o mesmo
princípio do lado humano: "favoreça aprovar um PR que já melhora a saúde do
código, mesmo que não seja perfeito." Nenhum subagente decide isso por
você — os dois deste pacote (`revisor-sinais-ia`, `revisor-seguranca-ia`)
foram desenhados de propósito pra classificar cada achado como "bloqueia"
ou "não bloqueia" **com justificativa obrigatória**, mas a palavra final —
concordar ou discordar do subagente — é do aluno.

**Como o lab/red-team força essa decisão a acontecer:** `REGISTRO-
COMPARACAO.csv` (preenchido em dupla na Rodada 3 da aula 2) exige uma
`prioridade_final` por achado, e todo achado marcado `nao-bloqueia` exige
uma `justificativa_se_nao_bloqueia` preenchida — não existe saída de
"deixei em branco". O `ENTREGAVEL.md` cobra isso na rubrica com peso maior
do que "quantos achados você encontrou" — porque quantidade de achado é
fácil (é literalmente o que um subagente sem limite produz), priorizar é o
que só um humano com contexto do próprio projeto faz.

**O que aparece do lado do subagente que o humano perde, e vice-versa
(nomeado explicitamente, porque o desconforto é conteúdo):**

- **O que o subagente pega e o humano tende a perder:** padrão mecânico
  que exige ler/grepar MUITOS arquivos sem cansar (duplicação espalhada,
  nome genérico repetido, dependência nova que ninguém conferiu no
  registro do npm) — cansaço e pressa de tempo são a causa humana disso, não
  falta de conhecimento.
- **O que o humano pega e o subagente perde:** julgamento de domínio que
  não está em NENHUM checklist — no `pr-plantado`, é saber que aquele
  endpoint específico é uma vitrine PÚBLICA e por isso vazar e-mail ali é
  grave. Nenhum dos dois subagentes deste pacote foi desenhado pra pegar
  isso, de propósito — é o ponto do exercício, não uma falha de design.

---

## 8. Excalidraw

Esta semana **não usa Excalidraw**. O formato fixo da aula 2 no mapeamento
do `_BRIEF.md`/`_GANCHOS.md` é **red team em duplas** (S4 e S9), não
modelagem coletiva — as semanas com Excalidraw obrigatório são S5 e S6,
já entregues. O quadro visual desta semana é o `REGISTRO-COMPARACAO.csv`
preenchido ao vivo em dupla — uma tabela de achados versus veredito, não um
diagrama de arquitetura, porque o conteúdo é comparação e priorização, não
desenho de sistema.
