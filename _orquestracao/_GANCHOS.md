# GANCHOS — o que cada semana entrega para as seguintes

Este arquivo é escrito pela orquestradora depois de cada lote. Se a sua semana é do
lote 1, a seção de ganchos anteriores está vazia e você só declara os seus ganchos
para frente.

## Grade completa (para você saber o que vem antes e depois — NÃO escreva fora da sua semana)

| Semana | Pasta | Tema | Aula 2 |
|---|---|---|---|
| 2 | `aula3-prompts-contexto-projeto` | Prompt, contexto e o nascimento do projeto | lab guiado paralelo |
| 3 | `aula5-agents-md-skills` | AGENTS.md e skills | lab guiado paralelo |
| 4 | `aula7-mcp-server` | MCP na prática (server próprio) | red team em duplas |
| 5 | `aula9-engenharia-para-ia` | Engenharia de software para desenvolvimento com IA | Excalidraw coletivo |
| 6 | `aula11-diagnostico-documentos-rpi` | Diagnóstico, documentos e RPI | Excalidraw coletivo |
| 7 | `aula13-spec-driven-development` | Spec-Driven Development | clínica rotativa |
| 8 | `aula15-verificadores` | Verificadores | clínica rotativa |
| 9 | `aula17-code-review-subagentes` | Code review e subagentes de revisão | red team em duplas |
| 10 | `aula19-orquestracao-mcp-client` | Orquestração, paralelismo e MCP client próprio | speedrun |
| 11 | `aula21-software-com-llm-dentro` | Software com LLM dentro + AIOps 1 | clínica + demo relâmpago |
| 12 | `aula23-agentes-automacao` | Agentes e automação (n8n + Google ADK) + AIOps 2 | clínica + demo relâmpago |
| 13 | `aula25-rag` | RAG | lab guiado paralelo |
| 14 | `aula27-buffer-demo-day` | Buffer, finalização e Demo Day | Demo Day |

## Ganchos declarados pelos lotes anteriores

(vazio — lote 1)

---

# LOTE 1 ENTREGUE — ganchos das semanas 2, 3 e 4

Leia isto como fato. Não reinvente o que já existe; retome com o nome que já tem.

## Decisões estruturais tomadas no lote 1 e que valem para todas as semanas seguintes

- **O projeto do aluno vive num repositório GitHub próprio**, separado do fork do curso.
  O fork do curso guarda o material da aula (starter, guias, templates). Portanto, na
  tabela do ENTREGAVEL.md use DUAS linhas:
  `| **Material da aula** | `aulaX-<slug>/` no seu fork de pda-especializacao-ia |`
  `| **Repositório do projeto** | seu repo próprio (criado na semana 2) |`
- **Contrato mínimo do esqueleto do projeto** (nasce na semana 2, todas as semanas
  constroem por cima, nada é descartado): git inicializado, README, separação código/teste,
  comando de teste que roda, CLAUDE.md, e um artefato real do domínio.
- **Padrão de músculo central do curso, reusado em todo lab:** especifique → leia o que
  voltou → rejeite o que não serve.
- **Nome de pacote do MCP:** o SDK oficial mudou de nome. Use `@modelcontextprotocol/server`
  (confirmado na doc oficial, 2026-07-28). Não escreva `@modelcontextprotocol/sdk` por hábito.
- **Divergência AGENTS.md × CLAUDE.md:** o Claude Code lê `CLAUDE.md`; `AGENTS.md` é a
  convenção aberta e se liga por import ou symlink. A semana 3 ensina os dois como conceitos
  distintos, não como sinônimos. Mantenha essa distinção.
- **Mecânica de pareamento por sorteio com prioridade a domínios diferentes** — inventada na
  semana 3, reusada na semana 4. Reuse literalmente em qualquer semana com dupla, citando
  que já é conhecida da turma.

## Semana 2 — `aula3-prompts-contexto-projeto`

- Eles saem com: repo do projeto próprio criado, esqueleto gerado com o agente, primeiro
  `CLAUDE.md` escrito à mão, e o parágrafo para o dono do negócio.
- Vocabulário já instalado e citável sem reexplicar: especificidade / exemplos / formato de
  saída; **Smart Zone vs Dumb Zone**; ocupação da janela de contexto e o comando `/context`;
  CLAUDE.md como memória entre sessões.
- Cortado para a Alura: Self-Consistency e otimização PT/EN.
- Aviso: o número "abaixo de 40%" **não tem fonte publicada verificável** — foi apresentado
  como observação empírica. Se você citar, cite do mesmo jeito. Não invente número nem paper.
- Smart Zone/Dumb Zone e `/context` são pré-requisito direto das semanas 10 e 11.
- O catálogo de domínios escolhido aqui é a base de documentos que a semana 13 (RAG) indexa.
- O "comando de teste que roda" é o piso que as semanas 7 e 8 fazem evoluir.

## Semana 3 — `aula5-agents-md-skills`

- Eles saem com: uma skill própria com **progressive disclosure** (SKILL.md curto +
  arquivo de referência carregado sob demanda), `allowed-tools` restrito, e um
  `RELATORIO-VALIDACAO.md` da skill de um colega.
- Vocabulário citável: anatomia do arquivo de regras; rules sempre carregadas vs skills sob
  demanda; hierarquia managed / usuário / projeto / local; progressive disclosure;
  "a IA não escreve as próprias regras".
- **Formato de validação em 3 cenários** — dispara quando deve / não dispara quando não deve /
  falso positivo. Artefato reusável em qualquer red team, e a semana 8 (Verificadores) deve
  reusá-lo explicitamente.
- `.claude/rules/` com escopo por `paths` foi citado em slide mas **não praticado** — gancho
  livre para a semana 5 ou 9.
- A hierarquia managed/usuário/projeto/local é candidata a zona de diagrama coletivo nas
  semanas 5 e 6 (conceito já visto, então desenhar é recuperação ativa).

## Semana 4 — `aula7-mcp-server`

- Eles saem com: um **MCP server próprio em TypeScript** com uma tool que serve o domínio do
  projeto, rodando via Claude Code como client; um `DECISAO-ESCOPO.md` (o que a tool NÃO pode
  fazer); e o **log de uma injection bem-sucedida no próprio server**.
- Vocabulário citável sem reexplicar: **prompt injection**, **improper output handling**,
  **supply chain de MCP de terceiros** (tool poisoning). Esse trio é o vocabulário mínimo de
  segurança do curso — as semanas 11 e 12 se apoiam nele em vez de reabrir o assunto.
- `DECISAO-ESCOPO.md` é convenção do curso para qualquer tool nova.
- Todo aluno tem código próprio com superfície de ataque — a semana 5 pode tratar isso como
  "agora existe código de verdade para criticar".
- A semana 10 (MCP client próprio) conecta no server desta semana, fechando host/client/server.
- Cortado: varredura completa do OWASP Top 10 → slide de referência + aulas de segurança da Alura.

---

# LOTE 2 ENTREGUE — ganchos das semanas 5, 6, 7 e 8

Leia como fato. Cite os artefatos pelo nome exato abaixo; não redefina o que já existe.

## Convenções de curso instaladas no lote 2

- `starter/checklist-sinais-codigo-ia.md` (semana 5) — o checklist de sinais de código ruim
  gerado por IA. Sinais nomeados: **Classe Deus**, **Miragem Modular**, **Camada de Passagem**,
  **nomeação genérica**, sob o guarda-chuva **Abstraction Bloat**. Cite pelo nome, não redefina.
- `ADR-template.md` no padrão Nygard (semana 6) — convenção para qualquer decisão arquitetural
  do curso daqui em diante.
- Régua **P/M/G de escala do documento vs escala do problema** (semana 6).
- **RPI em três sessões separadas** (semana 6) — Research / Plan / Implement em sessões de agente
  distintas. Origem confirmada: Dex Horthy / HumanLayer, ago 2025; a doc oficial do Claude Code
  recomenda a mesma separação. É hábito transversal do curso, não técnica de uma semana.
- **EARS** — notação da Rolls-Royce, Alistair Mavin, 2009. **BDD** — Dan North, 2006. Use essas
  atribuições; estão verificadas.
- `TASKS-TEMPLATE.md` + **"task atômica = tem gate"** + **regra dos 3 strikes** (semana 7).
- `REGISTRO-TAXA-DE-ACERTO.csv` (semana 7) — formato de medição reusável.
- `LOG-RED-GREEN-REFACTOR` (semana 8) — prova por ordem de commit, não por narrativa.
- **`npm run verify`** (semana 8) — o comando local que roda os 5 sensores.
- `.claude/rules/` com escopo por `paths` foi **praticado** na semana 5 (regra por bounded context).
- **Mecânica de clínica rotativa** (semana 7): fila de sinalização, direito de pular fila por
  variedade, tarefa fixa da plateia (aposta + auto-auditoria). A semana 8 reusou e acrescentou
  "fila do CI vermelho + diagnóstico às cegas".
- **`uv` (Python) está instalado** em quem passou pela semana 7 (exigência do Spec Kit). É a única
  saída do Node no curso até aqui.
- **Nome do pacote MCP:** `@modelcontextprotocol/server`. Não use `@modelcontextprotocol/sdk`.

## Semana 5 — `aula9-engenharia-para-ia`

- Eles saem com: bounded contexts do próprio projeto desenhados, um `RELATORIO-FRONTEIRA.md`,
  e o checklist de sinais de código ruim aplicado ao próprio repo.
- Vocabulário citável: linguagem ubíqua, bounded context, Abstraction Bloat e os quatro sinais.
- DDD tático foi cortado do curso inteiro. Não o reintroduza.
- `RELATORIO-FRONTEIRA.md` é candidato a convenção para semanas que adicionam feature (10–13).
- Board: `excalidraw/board-bounded-contexts.excalidraw`.

## Semana 6 — `aula11-diagnostico-documentos-rpi`

- Eles saem com: `RESEARCH.md` (a dor real do negócio nomeada), ADR, **um documento único enxuto**
  (PRD e Design Doc foram fundidos e cortados como formatos separados), **5 critérios EARS** e
  **3 cenários BDD em Gherkin**.
- Os 3 cenários BDD são consumidos **literalmente** pela semana 8 como teste.
- Board: `excalidraw/mapa-da-dor.excalidraw` (quem sente / onde dói / custo hoje / o que muda).
- A fase Research é diagnóstico de negócio — é a mesma competência do parágrafo para o dono do
  negócio, e ficou explicitamente amarrada nela.

## Semana 7 — `aula13-spec-driven-development`

- Eles saem com: 3 specs executadas, tasks atômicas com gate, e o registro de taxa de acerto de
  primeira tentativa (CSV).
- Spec Kit é o único framework mostrado funcionando. **OpenSpec, Superpowers e TLC são menção com
  link.** Achado verificado: **TLC = Tech Leads Club** (comunidade brasileira, skill
  `tlc-spec-driven`, usa EARS) — **não** é o model checker do TLA+. Não confunda.
- Crítica central da semana, verificada no template oficial: o Spec Kit dá gate por checkpoint,
  não por task. O aluno aprende a suprir isso.
- Pendência aberta: o comando de instalação do Spec Kit usa `main`, sem tag fixa.

## Semana 8 — `aula15-verificadores`

- Eles saem com: **CI no GitHub Actions bloqueando merge** (lint + type check + build + testes +
  dependency check), os 3 cenários BDD da semana 6 virados em teste, e o log de um ciclo
  red/green/refactor completo.
- Frase-âncora instalada: **o verificador existe para o agente, não para você** — lint, type check,
  build, teste e dependency check são os sentidos dele. Toda semana seguinte pode se apoiar nisso.
- **Package hallucination / slopsquatting** entra no vocabulário de segurança do curso, ao lado do
  trio da semana 4 (prompt injection, improper output handling, supply chain de MCP).
- Taxonomia dos **3 padrões de teste que não prova nada** — alvo reusável de red team.
- Restrição real de plataforma: branch protection não é gratuita em repo privado no plano Free do
  GitHub. Três saídas documentadas (repo público / Student Pack / documentar a limitação).
- A partir daqui, assuma CI verde e `npm run verify` rodando no repo de todo aluno.
