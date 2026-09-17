# Referências verificadas — Semana 3

Todas abertas com WebFetch nesta sessão antes de entrar aqui. Nenhum link composto por
analogia. Status: ✅ verificado (conteúdo confirmado) · `[CONFIRMAR NA ALURA]` quando não
achei URL exata de um item citado no `_BRIEF.md`.

---

### 1. Skills — formato, frontmatter, progressive disclosure

**URL:** <https://code.claude.com/docs/en/skills>
**O que é:** documentação oficial de Skills no Claude Code — formato do `SKILL.md`,
campos do frontmatter (`name`, `description`, `allowed-tools`, `disable-model-invocation`,
`context`, `paths`), hierarquia de onde skills podem viver, e a recomendação de manter
`SKILL.md` sob 500 linhas movendo referência pra arquivos separados.
**Onde entra:** S13 (frontmatter), S8/S12 (referência geral), base de todo o Lab 2 e do
esqueleto em `starter/skill-skeleton/`.
**Status:** ✅ verificado — aberto e lido integralmente.

### 2. CLAUDE.md, hierarquia de memória e a ponte com AGENTS.md

**URL:** <https://code.claude.com/docs/en/memory>
**O que é:** documentação oficial de como o Claude Code carrega `CLAUDE.md` — tabela de
escopos (managed policy, usuário, projeto, local), ordem de carregamento, `@import`,
`.claude/rules/` com escopo por `paths`, e uma seção dedicada a `AGENTS.md` confirmando
que o Claude Code lê `CLAUDE.md`, não `AGENTS.md`, com o import (`@AGENTS.md`) ou o
symlink como ponte.
**Onde entra:** S5, S6, S7, S8 — é a base de todo o bloco 1 da demo (por que a IA não
escreve as próprias regras) e da hierarquia projeto/global/pessoal.
**Status:** ✅ verificado — aberto e lido integralmente.

### 3. AGENTS.md — o padrão aberto

**URL:** <https://agents.md/>
**O que é:** a especificação do formato `AGENTS.md` — "um README pra agentes",
mantido pela Agentic AI Foundation (Linux Foundation), sem campos obrigatórios (é
markdown puro), com regra de precedência "o arquivo mais próximo do que está sendo
editado vence" em monorepos.
**Onde entra:** S1, S8 — a divergência nomeada entre o que a grade chama ("AGENTS.md")
e o que o Claude Code de fato lê (`CLAUDE.md`). Ver `PACOTE.md`, seção de divergências.
**Status:** ✅ verificado — aberto e lido integralmente.

### 4. Agent Skills — a origem do conceito de progressive disclosure

**URL:** <https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills>
**O que é:** post de engenharia da Anthropic que introduz Agent Skills e explica
progressive disclosure com a analogia do manual (índice → capítulos → apêndices), e por
que um agente com sistema de arquivos não precisa carregar uma skill inteira pra saber
que ela existe.
**Onde entra:** S10, S11 — a analogia do manual, base da frase-âncora do bloco 2.
**Status:** ✅ verificado — aberto e lido integralmente.

### 5. Boas práticas do Claude Code — o que entra e o que não entra num CLAUDE.md

**URL:** <https://code.claude.com/docs/en/best-practices>
(redireciona de `anthropic.com/engineering/claude-code-best-practices` — a URL antiga
ainda existe, mas hoje aponta pra essa)
**O que é:** guia oficial com a tabela ✅ incluir / ❌ excluir pra CLAUDE.md, o teste
"seria eliminar isso causaria erro?", o `/doctor` que propõe cortes num CLAUDE.md
existente, e o padrão de falha "o CLAUDE.md over-specified" (regra demais faz o agente
ignorar metade).
**Onde entra:** S6 — é o critério exato que sustenta o Lab 1 (regra ou ruído) e a
rubrica do `ENTREGAVEL.md`.
**Status:** ✅ verificado — aberto e lido integralmente.

### 6. Boas práticas de autoria de skill — description e validação

**URL:** <https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices>
**O que é:** guia oficial de autoria de skills — como escrever `description` pra
disparar no momento certo (padrão "o que faz + quando usar"), exemplos de description
vaga (falso negativo) vs. genérica demais (falso positivo), e a recomendação de criar
**3+ cenários de avaliação antes de finalizar uma skill**: dispara quando deve, não
dispara quando não deve, e um caso-limite ambíguo.
**Onde entra:** S12, S13 — e é a fonte direta do formato de validação em três cenários
usado no `ENTREGAVEL.md` e em `starter/relatorio-validacao/TEMPLATE.md`.
**Status:** ✅ verificado — aberto e lido integralmente.

### 7. Skills no Claude Agent SDK — o mesmo mecanismo fora do CLI

**URL:** <https://code.claude.com/docs/en/agent-sdk/skills>
**O que é:** documentação de como skills funcionam no Claude Agent SDK (fora do Claude
Code interativo) — confirma que `allowed-tools` e a descoberta por `SKILL.md` valem
tanto pra quem usa o terminal quanto pra quem constrói um agente próprio com o SDK.
**Onde entra:** nota lateral na demo (S13) — reforça que skill não é truque de terminal,
é o mecanismo padrão de extensão de agente da Anthropic.
**Status:** ✅ verificado — aberto e lido integralmente.

### 8. Alura — Context Engineering (pré-requisito da semana)

**URL:** <https://www.alura.com.br/curso-online-context-engineering-otimizacao-da-janela-de-contexto-de-ias>
**O que é:** "Context Engineering: otimização da janela de contexto de IAs" — curso
sobre compressão, isolamento e gestão de memória de contexto.
**Onde entra:** pré-requisito da Alura desta semana (ver `README.md` e `PACOTE.md`) —
sustenta o "por que" de progressive disclosure sem o síncrono reexplicar do zero.
**Status:** ✅ verificado — página carregou, título confirmado.

### 9. Alura — segurança de aplicações com agentes e MCP

**URL:** <https://www.alura.com.br/formacao-ai-native-software-engineering>
**O que é:** formação "AI-Native Software Engineering", que inclui o curso "Engenharia
de software na era da IA: segurança de aplicações com agentes, MCPs e código gerado por
IA" — confirmado dentro da listagem da formação.
**Onde entra:** pré-requisito da Alura desta semana — sustenta a motivação de segurança
por trás de `allowed-tools` sem o síncrono reexplicar OWASP/ameaças do zero.
**Status:** ✅ verificado — página da formação carregou e lista o curso.
`[CONFIRMAR NA ALURA]` a URL do curso avulso (fora da formação) e a contagem exata de
aulas — o `_BRIEF.md` menciona "3 aulas", não consegui confirmar esse número
especificamente.

---

## O que eu procurei e decidi não usar

Os dois cursos de LangChain do catálogo geral da Alura (`curso-online-langchain-
desenvolva-agentes-inteligencia-artificial` e `curso-online-langchain-python-
ferramentas-llm-openai`) foram verificados e carregam normalmente, mas **não entram
nesta semana** — LangChain é framework de orquestração, tema de semanas futuras
(agentes e automação), não de regras/skills. Incluir aqui seria puxar referência por
obrigação, não por relevância. Ver `PACOTE.md`, mapeamento Alura.
