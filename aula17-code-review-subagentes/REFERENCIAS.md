# Referências verificadas — Semana 9: Code review e subagentes de revisão

Todas as novas abertas com WebFetch nesta sessão. Nenhum link foi composto
por analogia. Itens marcados "reusado" já foram verificados por WebFetch em
sessões de semanas anteriores deste mesmo curso — não reabertos aqui, mas
citados porque sustentam vocabulário que esta semana usa sem reexplicar.

| # | URL | O que é | Status | Onde entra |
|---|---|---|---|---|
| 1 | <https://code.claude.com/docs/en/sub-agents> | Doc oficial do Claude Code sobre subagentes: local dos arquivos (`.claude/agents/`), frontmatter (`name`, `description`, `tools`, `model`, `permissionMode`), como invocar (delegação automática, `@agent-nome`, `claude --agent`) | ✅ Verificado — página completa lida nesta sessão | Base de `starter/agentes-revisao/*.md`, Demo 2 e Lab 2 do `GUIA-DO-ALUNO.md`, slide 22, 24–25 |
| 2 | <https://code.claude.com/docs/en/best-practices> | Doc oficial "Best practices for Claude Code" — seção "Add an adversarial review step": usar um subagente numa sessão nova pra revisar o diff, e o alerta explícito de que "um revisor instruído a achar problema vai achar, mesmo quando o trabalho está bom" (risco de over-engineering ao perseguir todo achado) | ✅ Verificado — página completa lida nesta sessão (redirecionada de anthropic.com/engineering/claude-code-best-practices) | Fundamenta a seção "julgamento indispensável" do `PACOTE.md`, slide 32 (`</O QUE NÃO BLOQUEIA>`), `ROTEIRO-FACILITADORA.md` |
| 3 | <https://aws.amazon.com/blogs/security/balancing-speed-and-safety-a-control-framework-for-ai-coding-agents/> | Post do blog de segurança da AWS: framework de controle pra agentes de codificação, nomeia **R007 — scope creep** ("dado um prompt de correção de bug, o agente também pode refatorar código ao redor, desabilitar um teste instável ou reorganizar imports") e recomenda verificação de escopo (arquivos fora do declarado) antes da aprovação humana | ✅ Verificado — conteúdo completo lido nesta sessão | Base de `LISTA-SINAIS-ALERTA-PR-AGENTE.md` (itens 1 e 5), slides 8–12 |
| 4 | <https://google.github.io/eng-practices/review/reviewer/standard.html> | Doc oficial de práticas de engenharia do Google: princípio central "favoreça aprovar um PR que definitivamente melhora a saúde do código, mesmo que não seja perfeito"; distinção entre observação obrigatória e "Nit:" (opcional, não bloqueia) | ✅ Verificado — conteúdo completo lido nesta sessão | Fundamenta "o que não vale bloquear" no `PACOTE.md` e no `ENTREGAVEL.md`, slide 32 |
| 5 | <https://google.github.io/eng-practices/review/reviewer/looking-for.html> | Doc oficial do Google: as categorias que um revisor humano olha — design, funcionalidade, complexidade, testes, nomeação, comentários, estilo, consistência, documentação | ✅ Verificado — conteúdo completo lido nesta sessão | Slides 13, 15 e 19 (`</O QUE UM HUMANO OLHA>`), contraste com o que os dois subagentes cobrem |
| 6 | <https://arxiv.org/html/2601.00753v1> | Paper "Early-Stage Prediction of Review Effort in AI-Generated Pull Requests" — 33.707 PRs autorados por agente analisados; PR sem plano explícito (`has_plan=False`) é o preditor mais forte de PR que trava; tamanho do patch e mudança multi-arquivo correlacionam com esforço de revisão | ✅ Verificado — conteúdo lido nesta sessão | `LISTA-SINAIS-ALERTA-PR-AGENTE.md` (item 5, fonte adicional), `PACOTE.md` |
| 7 | <https://owasp.org/www-project-top-10-for-large-language-model-applications/assets/PDF/OWASP-Top-10-for-LLMs-v2025.pdf> | OWASP Top 10 for LLM Applications (2025) — categorias LLM01 (Prompt Injection), LLM03 (Supply Chain), LLM05 (Improper Output Handling) | ✅ Reusado — verificado originalmente na Semana 4 (`aula7-mcp-server/REFERENCIAS.md` #7); não reaberto nesta sessão | Vocabulário do `revisor-seguranca-ia`, slide 25 |
| 8 | <https://arxiv.org/abs/2406.10279> | "We Have a Package for You! A Comprehensive Analysis of Package Hallucinations by Code Generating LLMs" — paper com os números de pacotes alucinados por LLM | ✅ Reusado — verificado originalmente na Semana 8 (`aula15-verificadores/REFERENCIAS.md` #1); não reaberto nesta sessão | Vocabulário do `revisor-seguranca-ia` (Risco 4), `LISTA-SINAIS-ALERTA-PR-AGENTE.md` item 3 |
| 9 | <https://socket.dev/blog/slopsquatting-how-ai-hallucinations-are-fueling-a-new-class-of-supply-chain-attacks> | Blog da Socket: origem do termo slopsquatting e dado de persistência (43% dos pacotes alucinados se repetem em execuções do mesmo prompt) | ✅ Reusado — verificado originalmente na Semana 8; não reaberto nesta sessão | `revisor-seguranca-ia` (Risco 4) |
| 10 | <https://invariantlabs.ai/blog/mcp-security-notification-tool-poisoning-attacks> | Pesquisa da Invariant Labs sobre tool poisoning/shadowing em MCP | ✅ Reusado — verificado originalmente na Semana 4; não reaberto nesta sessão | `revisor-seguranca-ia` (Risco 3 — supply chain de MCP) |

**Total: 10 referências. Mínimo exigido: 8.** 6 novas verificadas por
WebFetch nesta sessão (#1–#6), 4 reusadas de semanas anteriores já
verificadas (#7–#10), citadas porque o vocabulário que carregam é
pré-requisito direto desta semana e não é reexplicado.

## Descartadas na pesquisa (não incluídas, registradas por transparência)

- Vários posts de blog agregadores sobre "como revisar PR de agente de IA"
  (DEV Community: `dev.to/rivendesk`, `dev.to/suifeng023`,
  `dev.to/sahil_kat`, ShipWithAI) apareceram nas buscas e descrevem sinais
  parecidos aos do item 3 (AWS) — preteridos em favor da fonte primária
  (blog de engenharia da AWS) por ser mais específica, nomear uma
  categoria de risco com código (R007) e vir de um time de segurança, não
  de um blog pessoal.
- `https://www.anthropic.com/engineering/claude-code-best-practices`
  redireciona (302) para `https://code.claude.com/docs/en/best-practices`
  — citado pela URL final, que é a canônica atual.
