# Referências verificadas — Semana 10: Orquestração, paralelismo e o MCP client próprio

Todas abertas com WebFetch (ou confirmadas via `registry.npmjs.org` quando a página
pública do npm bloqueou o fetch com 403) nesta sessão. Nenhum link foi composto por
analogia. Duas são reuso de link já citado em semana anterior — marcado explicitamente.

| # | URL | O que é | Status | Onde entra |
|---|---|---|---|---|
| 1 | <https://code.claude.com/docs/en/worktrees> | Doc oficial do Claude Code: "Run parallel sessions with worktrees" — a frase-fonte da distinção worktree × subagente ("Worktrees isolate file edits. Subagents split work up inside one session"), comandos `--worktree`, `git worktree add/remove`, isolamento de arquivo | ✅ Verificado — página completa lida | Slide 14 (`</WORKTREE ≠ SUBAGENTE>`), GUIA-DO-ALUNO.md Lab 1, ROTEIRO-FACILITADORA.md |
| 2 | <https://git-scm.com/docs/git-worktree> | Manual oficial do git: o que `git worktree` faz (working tree separado, não repositório separado), comandos `add`/`list`/`remove`, e a regra de que uma branch não pode estar checked out em dois worktrees ao mesmo tempo | ✅ Verificado — texto normativo completo | Slide 9, GUIA-DO-ALUNO.md Lab 1, `starter/speedrun-repo/README.md` |
| 3 | <https://modelcontextprotocol.io/docs/2026-07-28/develop/build-client> | Tutorial oficial "Build an MCP client" — exemplos completos em Python, TypeScript, Java, Kotlin, C# e Ruby. Usamos a estrutura de conexão/listTools/callTool da aba TypeScript; a parte de chamada ao Claude foi removida de propósito (semana sem LLM) | ✅ Verificado — conteúdo completo lido, inclusive todas as abas de linguagem | Slide 22 (`</OS 5 TODOS>`), base do `starter/mcp-client-starter/src/index.ts` |
| 4 | <https://github.com/modelcontextprotocol/typescript-sdk/blob/main/docs/client.md> | Doc do repositório oficial do SDK TypeScript: exemplo mínimo de `Client` + `StdioClientTransport`, confirma os imports exatos (`@modelcontextprotocol/client` e `@modelcontextprotocol/client/stdio`) | ✅ Verificado — exemplo de código lido linha a linha, e testado nesta sessão contra um server real (ver nota técnica abaixo) | Slide 20, `starter/mcp-client-starter/src/index.ts` |
| 5 | <https://registry.npmjs.org/@modelcontextprotocol/client> | Metadados oficiais do pacote no npm: existe, versão mais recente 2.0.0, "Model Context Protocol implementation for TypeScript - Client package", autor Anthropic, exige Node ≥20 | ✅ Verificado (a página bonita `npmjs.com/package/...` devolveu 403 ao fetch; o endpoint de registro respondeu normalmente) | GUIA-DO-ALUNO.md ("pacote certo"), `starter/mcp-client-starter/README.md`, PACOTE.md |
| 6 | <https://registry.npmjs.org/@modelcontextprotocol/server> | Idem, para o pacote do lado servidor: existe, também 2.0.0, "Server package" — confirma que client e server são pacotes IRMÃOS separados no mesmo SDK, não o mesmo pacote com nomes diferentes | ✅ Verificado | GUIA-DO-ALUNO.md, PACOTE.md (resolve a instrução da orquestradora sobre qual pacote usar) |
| 7 | <https://github.com/modelcontextprotocol/inspector> | MCP Inspector — ferramenta oficial de teste visual/CLI/TUI, `npx @modelcontextprotocol/inspector`. **Reuso** — já citado na semana 4 (`aula7-mcp-server/REFERENCIAS.md`, referência #6); reaberto e reconfirmado nesta sessão, ainda no ar e com o mesmo comando | ✅ Verificado de novo nesta sessão | Troubleshooting do GUIA-DO-ALUNO.md, ROTEIRO-FACILITADORA.md (checklist pré-aula) |
| 8 | <https://www.anthropic.com/engineering/multi-agent-research-system> | Engenharia da Anthropic sobre o sistema multiagente de pesquisa: padrão orquestrador-workers, multiplicador de tokens (~4x agente, ~15x multiagente vs. chat), e a afirmação explícita de que tarefas de código são um mau encaixe pra multiagente hoje por causa de dependência entre partes | ✅ Verificado — conteúdo lido, números e citações conferidos | Slide 25 (`</OS NÚMEROS DA ANTHROPIC>`), ROTEIRO-FACILITADORA.md (Armadilha 2) |
| 9 | <https://www.anthropic.com/research/multiagent-systems> | Pesquisa da Anthropic sobre problemas e modos de falha em sistemas multiagente: falhas de coordenação, conformidade perigosa (18 de 30 agentes usando o mesmo nome de branch), swarms testados em cenários reais com resultado misto | ✅ Verificado — conteúdo completo lido | PACOTE.md (fundamentação da Armadilha 2), menção de swarms no roteiro |
| 10 | <https://github.com/openai/swarm> | Repositório oficial do OpenAI Swarm — o próprio README diz que foi "substituído pelo OpenAI Agents SDK" e recomenda migrar para uso em produção; descrito como framework educacional | ✅ Verificado — aviso de descontinuação lido no próprio README | Slide 26 (`</SWARMS>`) — menção com link, não bloco, como o brief pede |
| 11 | <https://en.wikipedia.org/wiki/Brooks%27s_law> | Verbete sobre a Lei de Brooks: origem em "The Mythical Man-Month" (Fred Brooks, 1975), o enunciado ("adicionar gente a um projeto atrasado atrasa mais"), e a analogia "9 mulheres não fazem um bebê em 1 mês" | ✅ Verificado — usado como fonte secundária confiável de um livro sem versão oficial gratuita online; a atribuição ao livro e ao autor está correta e é o que importa para a citação | Slide 24 (`</CUSTO DE COORDENAÇÃO>`), ROTEIRO-FACILITADORA.md |
| 12 | <https://www.alura.com.br/curso-online-protocolos-agentes-inteligentes> | Curso Alura "Protocolos e arquitetura para construção de agentes: MCP, A2A, AG-UI e Backend for Agents (BFA)" (12h) — módulo dedicado a "Orquestração dos agentes com o padrão Supervisor" e "Construindo sistemas multiagente" | ✅ Verificado — ementa e módulos confirmados na página do curso | Slide 12 (`</SUPERVISOR>`), PACOTE.md (mapeamento Alura — cobre a profundidade de implementação que o síncrono corta) |
| 13 | <https://www.alura.com.br/formacao-topicos-avancados-node-js> | Formação Alura "Tópicos Avançados com Node.js" (28h, 3 cursos) — inclui "Paralelizando operações com Child Process e Worker Threads", que explica o mecanismo por baixo do `StdioClientTransport` (spawn de processo filho) | ✅ Verificado — ementa confirmada, curso de child process listado explicitamente | PACOTE.md (mapeamento Alura, complementar — explica o "como" por trás do transporte stdio) |

**Total: 13 referências, todas verificadas nesta sessão (via WebFetch, ou via
`registry.npmjs.org` quando a página pública do npm recusou o fetch direto). Mínimo
exigido: 8.**

## Nota técnica de verificação (não é referência, é registro)

Nesta sessão de montagem, além de abrir os links, testamos de ponta a ponta:

- **O pacote `@modelcontextprotocol/client` 2.0.0** — instalado de verdade
  (`npm install`), confirmado que expõe os subcaminhos `.` e `./stdio` exatamente como a
  referência #4 documenta.
- **O cliente do `starter/mcp-client-starter`, preenchido, contra um MCP server real**
  construído com `@modelcontextprotocol/server` 2.0.0 — handshake, `listTools()` e
  `callTool()` funcionaram sem ajuste.
- **O conflito de merge do speedrun e da Demo 1** — reproduzido com `git worktree`/branches
  reais: duas branches que mexem em funções diferentes de `validators.js`, mas na mesma
  linha de `module.exports`, geram `CONFLICT (content)` de verdade ao segundo merge.

## Descartadas na pesquisa (não incluídas, registradas por transparência)

- Diversos blogs de terceiros sobre "git worktree + Claude Code" (MindStudio, Medium,
  claudefa.st, dandoescode.com) apareceram nas buscas — preteridos em favor da doc
  oficial (#1) e do manual oficial do git (#2), que são a fonte primária do comando e da
  distinção conceitual.
- `https://www.npmjs.com/package/@modelcontextprotocol/client` e
  `.../server` — a página pública do npmjs.com devolveu 403 ao WebFetch nesta sessão
  (bloqueio de bot, não conteúdo indisponível). Usamos o endpoint `registry.npmjs.org`
  (#5, #6), que devolve os mesmos metadados e respondeu normalmente.
- Posts de terceiros sobre "OpenAI Agents SDK vs Swarm" (Respan, Medium) — preteridos em
  favor do próprio README do repositório (#10), que já contém o aviso de descontinuação
  em primeira mão.
