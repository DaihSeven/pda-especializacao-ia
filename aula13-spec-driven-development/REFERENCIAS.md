# Referências verificadas — Semana 7: Spec-Driven Development

Todas abertas com WebFetch nesta sessão. Nenhum link foi composto por analogia. Onde o
GitHub bloqueou a página "bonita" (blob/tree) por `robots.txt`, abri o conteúdo real via
`raw.githubusercontent.com` — mesmo arquivo, mesmo repositório público, só sem o wrapper
de UI.

| # | URL | O que é | Status | Onde entra |
|---|---|---|---|---|
| 1 | <https://github.com/github/spec-kit> | Repositório oficial do Spec Kit (GitHub) — README com instalação (`uv tool install specify-cli`), lista de slash-commands e link pros docs | ✅ Verificado — conteúdo completo | README.md, GUIA-DO-ALUNO.md, base da Demo ao vivo |
| 2 | <https://github.github.com/spec-kit/> | Site de documentação oficial do Spec Kit — visão geral, presets, extensions, bundles | ✅ Verificado — carregou a home, confirmando estrutura `.specify/` (templates/extensions/presets) | PACOTE.md (decisão de caminho tecnológico), slide de panorama dos 4 frameworks |
| 3 | <https://github.github.com/spec-kit/quickstart> | Guia oficial de quickstart — os 9 comandos na ordem (`constitution → specify → clarify → plan → checklist → tasks → analyze → implement → converge`), com exemplos literais de prompt (projeto "Taskify") | ✅ Verificado — passo a passo completo lido | ROTEIRO-FACILITADORA.md (script da Demo 1), GUIA-DO-ALUNO.md (Lab 1) |
| 4 | <https://raw.githubusercontent.com/github/spec-kit/main/templates/tasks-template.md> | Template real de `tasks.md` gerado por `/speckit.tasks`: tasks numeradas `T001, T002...`, checkbox `[ ]`, marcação `[P]` para paralelo, mas **critério de "pronto" só no Checkpoint por user story, não por task individual** | ✅ Verificado — arquivo lido por completo | Base da crítica central da semana ("Spec Kit te dá task numerada, não te dá gate por task") — ROTEIRO-FACILITADORA.md, SLIDES-OUTLINE.md |
| 5 | <https://github.com/Fission-AI/OpenSpec> (README: <https://raw.githubusercontent.com/Fission-AI/OpenSpec/main/README.md>) | OpenSpec — framework de spec-driven development mais leve que o Spec Kit: `npm install -g @fission-ai/openspec@latest`, comandos `/opsx:explore`, `/opsx:propose`, `/opsx:apply`, `/opsx:archive` | ✅ Verificado — README completo | Slide de panorama (menção com link, 1 linha) |
| 6 | <https://github.com/obra/superpowers> | Superpowers — metodologia de Jesse Vincent (Prime Radiant) empacotada como skills obrigatórias do Claude Code: brainstorming → design review → planejamento em tasks de 2–5 min → execução com subagentes → TDD (RED-GREEN-REFACTOR) → finalização | ✅ Verificado — README completo | Slide de panorama (menção com link, 1 linha) |
| 7 | <https://github.com/tech-leads-club/agent-skills/blob/main/packages/skills-catalog/skills/(development)/tlc-spec-driven/SKILL.md> (lido via raw: `.../main/packages/skills-catalog/skills/(development)/tlc-spec-driven/SKILL.md`) | **TLC** = Tech Leads Club — skill `tlc-spec-driven` (Felipe Rodrigues, CC-BY-4.0): 4 fases adaptativas (Specify em notação EARS → Design opcional → Tasks opcional → Execute), gera `.specs/features/<feature>/{spec.md,tasks.md,validation.md}` | ✅ Verificado — SKILL.md completo | Slide de panorama + gancho explícito pra semana 6 (a mesma notação EARS que o RPI já usa) |
| 8 | <https://www.alura.com.br/curso-online-spec-driven-development-desenvolvimento-assistido-por-agentes> | Curso Alura "Spec-Driven Development: desenvolvimento assistido por agentes" (8h) — SDD na era da IA, definição de escopo, engenharia de contexto, implementação, testes | ✅ Verificado — ementa confirmada | Pré-requisito de entrada no lab (PACOTE.md, GUIA-DO-ALUNO.md, ENTREGAVEL.md) |
| 9 | <https://cucumber.io/docs/gherkin/reference/> | Referência oficial do Gherkin — sintaxe Given/When/Then usada nos cenários BDD | ✅ Verificado | Retomada dos 3 cenários BDD da semana 6 como insumo de gate (GUIA-DO-ALUNO.md, starter/) |
| 10 | <https://alistairmavin.com/ears/> | Guia oficial da notação EARS (Alistair Mavin, Rolls-Royce PLC) — os 5 padrões: Ubiquitous, Event-Driven, State-Driven, Optional Feature, Unwanted Behaviour | ✅ Verificado — os 5 padrões com exemplo cada, lidos por completo | Recap ativo (retoma os 5 critérios EARS da semana 6), critério de escrita de gate |
| 11 | <https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents> | Post de engenharia da Anthropic: agentes de execução longa precisam de critério binário de conclusão por tarefa (`passes: true/false`) — sem isso, "declaram vitória" cedo demais ou abandonam trabalho incompleto | ✅ Verificado — citação literal confirmada: *"It is unacceptable to remove or edit tests because this could lead to missing or buggy functionality."* | Fundamenta a definição central da semana ("task atômica = tem gate") com fonte primária da própria Anthropic — slide-âncora, ROTEIRO-FACILITADORA.md |

| 12 | <https://github.github.com/spec-kit/installation> | Doc oficial de instalação do Spec Kit — pré-requisitos (Python 3.11+, `uv`, git opcional, um agente de codificação IA), comando `uv tool install specify-cli`, `specify version` | ✅ Verificado | GUIA-DO-ALUNO.md (setup), troubleshooting |
| 13 | <https://docs.astral.sh/uv/getting-started/installation/> | Doc oficial do `uv` (gerenciador de pacotes Python da Astral) — comando de instalação exato para macOS/Linux (`curl -LsSf https://astral.sh/uv/install.sh \| sh`) e Windows PowerShell | ✅ Verificado | GUIA-DO-ALUNO.md (pré-requisito antes de instalar o Spec Kit — é runtime novo pra turma, que só usou Node até aqui) |

**Total: 13 referências, todas verificadas via WebFetch nesta sessão. Mínimo exigido: 8.**

## Descartadas na pesquisa (não incluídas, registradas por transparência)

- `https://github.github.com/spec-kit/reference/commands` — retornou 404. A estrutura de
  referência do site mudou de URL; não usei a versão que não consegui abrir.
- Diversos posts de comparação de terceiros ("OpenSpec vs Spec Kit", Medium, blogs de
  agência) apareceram nas buscas — preteridos em favor das fontes primárias (repositórios
  oficiais e o post da própria Anthropic) por serem conteúdo agregado/opinativo, não
  original.
- `TLC` do catálogo de 4 frameworks do brief é a skill `tlc-spec-driven` do **Tech Leads
  Club** (comunidade brasileira, github.com/tech-leads-club) — não confundir com a
  ferramenta de model checking TLA+/TLC. Confirmado por leitura direta do `SKILL.md`
  (referência #7): o texto se autodescreve como parte da "Tech Leads Club" e cita EARS,
  não lógica temporal.
