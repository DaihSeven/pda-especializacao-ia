# Referências verificadas — Semana 4: MCP na prática

Todas abertas com WebFetch nesta sessão. Nenhum link foi composto por analogia.

| # | URL | O que é | Status | Onde entra |
|---|---|---|---|---|
| 1 | <https://modelcontextprotocol.io/introduction> | Página oficial "o que é MCP", visão geral do protocolo e do ecossistema | ✅ Verificado — carregou o conteúdo completo | Slide 5 (`</O QUE É MCP>`), README.md |
| 2 | <https://modelcontextprotocol.io/docs/2026-07-28/learn/architecture> | Doc oficial de arquitetura: host/client/server, data layer vs. transport layer, primitivas (tools/resources/prompts) | ✅ Verificado — conteúdo completo, inclusive diagrama mermaid | Slide 5, teoria da aula 1 (roteiro), PACOTE.md |
| 3 | <https://modelcontextprotocol.io/specification/2026-07-28/basic/transports> | Especificação oficial dos transportes: stdio e Streamable HTTP são os dois bindings padrão hoje | ✅ Verificado — texto normativo completo | Slide 6 (`</STDIO OU HTTP>`), justificativa da escolha tecnológica em PACOTE.md |
| 4 | <https://modelcontextprotocol.io/docs/2026-07-28/develop/build-server> | Tutorial oficial de como construir um MCP server, com exemplo completo em TypeScript usando `@modelcontextprotocol/server`, `McpServer`, `registerTool`, `StdioServerTransport` | ✅ Verificado — código-fonte do exemplo lido linha a linha | Base do `starter/mcp-server-template/src/index.ts` e da escolha do SDK |
| 5 | <https://code.claude.com/docs/en/mcp> | Doc oficial do Claude Code: sintaxe de `claude mcp add`, transportes suportados (stdio recomendado pra server local custom, SSE já deprecated), formato do `.mcp.json` | ✅ Verificado — conteúdo completo | GUIA-DO-ALUNO.md (comandos de conexão), ROTEIRO-FACILITADORA.md |
| 6 | <https://github.com/modelcontextprotocol/inspector> | MCP Inspector — ferramenta oficial de teste visual/CLI/TUI pra servers MCP locais, `npx @modelcontextprotocol/inspector` | ✅ Verificado | Lab 1 e Lab 2 do GUIA-DO-ALUNO.md, aula 2 (sondagem black-box) |
| 7 | <https://owasp.org/www-project-top-10-for-large-language-model-applications/assets/PDF/OWASP-Top-10-for-LLMs-v2025.pdf> | OWASP Top 10 for LLM Applications (2025) — PDF oficial com as 10 categorias de risco, incluindo LLM01 Prompt Injection, LLM03 Supply Chain, LLM05 Improper Output Handling | ✅ Verificado — PDF aberto, categorias e descrições confirmadas literalmente | Âncora dos três riscos da semana; slide 9, 11, 15; PACOTE.md |
| 8 | <https://www.anthropic.com/engineering/how-we-contain-claude> | Post de engenharia da Anthropic sobre as camadas de contenção de um agente (isolamento de ambiente, salvaguardas de modelo, gestão de conteúdo externo) — cita explicitamente que "tool output é superfície de ataque mesmo quando a tool é confiável" | ✅ Verificado | Fundamenta a Demo 2 (output handling) e a moldura geral de segurança do roteiro |
| 9 | <https://www.infosecurity-magazine.com/news/prompt-injection-bugs-anthropic/> | Cobertura do incidente real: três CVEs de prompt injection no `mcp-server-git` oficial da Anthropic (descoberto pela Cyata, corrigido em dezembro de 2025), explorável via README ou issue maliciosos | ✅ Verificado | Ancora a Demo 1 num caso real, não hipotético — citado no roteiro e no slide 9 |
| 10 | <https://invariantlabs.ai/blog/mcp-security-notification-tool-poisoning-attacks> | Pesquisa da Invariant Labs que nomeia e demonstra "tool poisoning"/"shadowing": uma tool com descrição maliciosa manipula o uso de outra tool legítima sem o usuário perceber | ✅ Verificado — exemplo do ataque de e-mail lido por completo | Base de desenho da Demo 3 (supply chain simulado); slide 15 |
| 11 | <https://www.alura.com.br/curso-online-owasp-top-10-para-llms> | Curso Alura "OWASP IA Top 10 para LLMs: protegendo aplicações e agentes inteligentes" (5h) — cobre as 10 categorias, incluindo os três módulos usados nesta semana | ✅ Verificado — ementa confirmada, módulos de Prompt Injection, riscos de saída e supply chain existem no curso | Pré-requisito de entrada no lab (PACOTE.md, GUIA-DO-ALUNO.md, ENTREGAVEL.md) |
| 12 | <https://www.alura.com.br/conteudo/prompt-injection-jailbreak> | Curso Alura "Modelos de linguagem: identificar e mitigar prompt injection e jail break" (103 min) — injeção direta vs. indireta, caso Bing Chat 2023, técnicas de jailbreak | ✅ Verificado | Aprofundamento assíncrono complementar à Demo 1 (PACOTE.md) |
| 13 | <https://www.alura.com.br/curso-online-model-context-protocol> | Curso Alura "Model Context Protocol (MCP): integração e otimização em agentes de IA" (15h) — arquitetura MCP, construção de servers, segurança e governança | ✅ Verificado — ementa confirmada | Cobertura conceitual adicional de arquitetura MCP que sustenta o corte de profundidade no síncrono (PACOTE.md) |

**Total: 13 referências, todas verificadas via WebFetch nesta sessão. Mínimo exigido: 8.**

## Descartadas na pesquisa (não incluídas, registradas por transparência)

- Diversos posts de blog de terceiros sobre "MCP security 2026" (glasp.co, aithinkerlab,
  mintmcp, etc.) apareceram nas buscas mas foram preteridos em favor das fontes primárias
  acima (Anthropic, OWASP, Invariant Labs, spec oficial) — conteúdo agregado, não
  original.
- `https://cursos.alura.com.br/formacao-seguranca-de-aplicacoes` — não verificável sem
  login (retornou só a tela de login), por isso não citado como fonte da trilha; os cursos
  individuais (#11, #12) foram verificados diretamente em suas páginas públicas.
