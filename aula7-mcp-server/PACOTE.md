# PACOTE.md — Semana 4: MCP na prática (aula7-mcp-server)

Documento interno pra Iasmim e para a orquestradora. Não vai pro aluno.

---

## 0. Caminho tecnológico — decisão e justificativa

**Escolha: TypeScript, SDK oficial `@modelcontextprotocol/server`, transporte stdio.**
Uma linguagem só, sem opção alternativa oferecida ao aluno.

Por quê, e não Python:

1. **Continuidade de ambiente.** A turma já tem Node 18+, npm e Git Bash configurados
   desde a aula 1 (`aula1-fundamentos` é um projeto Node). Introduzir Python nesta semana
   significaria configurar um segundo runtime, um segundo gerenciador de pacotes (pip/uv),
   e um segundo conjunto de erros de PATH no Windows — exatamente o tipo de atrito que a
   aula 1 já identificou como o que trava essa turma. TypeScript reaproveita 100% do setup
   que já funciona.
2. **Paridade de terminal no Windows.** `npm install`, `npm run build`, `npx` já são
   comandos que rodam idênticos em Git Bash, WSL e PowerShell — a tabela de terminal do
   `GUIA-DO-ALUNO.md` desta semana é a mesma da aula 1, sem adaptação. Um segundo runtime
   (Python) multiplicaria a superfície de "não funciona no meu Windows" por dois.
3. **O SDK oficial documenta TypeScript e Python com paridade de features** (confirmado
   em `modelcontextprotocol.io/docs/2026-07-28/develop/build-server`, que oferece as duas
   abas) — não há perda de cobertura de conceito ao escolher TS.
4. **`claude mcp add ... -- node build/index.js`** é a forma mais direta de conectar um
   server local ao Claude Code, e o próprio doc do Claude Code descreve stdio como "o
   transporte recomendado pra server local custom" (`code.claude.com/docs/en/mcp`).

Transporte: **stdio**, não Streamable HTTP. Justificativa: stdio não abre porta, não
precisa de autenticação (OAuth é a recomendação do MCP pra HTTP — ver
`modelcontextprotocol.io/docs/2026-07-28/learn/architecture`), não depende de rede de sala
de aula, e é o que 1 client (o Claude Code de cada aluno) precisa — exatamente o caso de
uso da semana. HTTP fica implícito pra semana 10, quando existir um client de verdade que
precise falar com vários servers remotos.

---

## 1. Mapeamento Alura

| Curso/módulo Alura | Carga | O que cobre | O que isso tira do síncrono |
|---|---|---|---|
| **OWASP IA Top 10 para LLMs: protegendo aplicações e agentes inteligentes** (`alura.com.br/curso-online-owasp-top-10-para-llms`, 5h) | módulos: LLM01 Prompt Injection, "Riscos de saída, vetores e privacidade" (LLM05), "Integridade de dados e supply chain" (LLM03), + os outros 7 itens | O aluno chega à aula 1 já sabendo nomear os 10 riscos do OWASP Top 10 for LLM Applications. **É por isso que a aula não faz a varredura dos 10** — só aprofunda 3 com demo ao vivo. Os outros 7 (sensitive info disclosure, data/model poisoning, excessive agency, system prompt leakage, vector/embedding weaknesses, misinformation, unbounded consumption) viram slide de referência (slide 16), não bloco de aula. |
| **Modelos de linguagem: identificar e mitigar prompt injection e jail break** (`alura.com.br/conteudo/prompt-injection-jailbreak`, 103min) | injeção direta vs. indireta, caso Bing Chat 2023, técnicas de jailbreak, defesas | A distinção "direta vs. indireta" **não é explicada do zero na Demo 1** — a aula assume que o aluno já ouviu essa distinção e vai direto pra ela acontecendo ao vivo com uma tool MCP real. |
| **Model Context Protocol (MCP): integração e otimização em agentes de IA** (`alura.com.br/curso-online-model-context-protocol`, 15h) | arquitetura MCP, MCP Server vs. MCP Client, construção low-code (n8n), comparação com A2A, segurança e governança | A explicação de arquitetura (host/client/server, data layer vs. transport layer) **fica curta em sala** (12 min de teoria, slide 5-7) porque a cobertura conceitual profunda já está na Alura. O síncrono foca no que a Alura não tem: código TypeScript real rodando e sendo atacado ao vivo. |

**Pré-requisito de entrada no lab da aula 2 (contrato, não punição):** bloco "OWASP IA Top
10 para LLMs" concluído antes da aula 2 — sem isso o aluno não tem vocabulário pra nomear
o que o colega vai explorar nele, e atrapalha a dupla.

---

## 2. O que foi cortado

| Corte | Onde foi (antes → agora) |
|---|---|
| Varredura completa dos 10 itens do OWASP Top 10 for LLM Applications | 3 ficam com demo ao vivo (LLM01, LLM03, LLM05); os outros 7 viram slide de referência (slide 16) + curso "OWASP IA Top 10 para LLMs" da Alura |
| MCP client próprio (construir um client que fala o protocolo) | Não estava nesta semana desde a decisão da Iasmim — foi pra semana 10 (`aula19-orquestracao-mcp-client`). Não tocamos nisso aqui. |
| Explicação de arquitetura MCP em profundidade de aula (data layer, JSON-RPC, discovery, notifications) | Fica em 12 min de teoria + 1 diagrama; profundidade real é o curso de 15h "Model Context Protocol" da Alura |
| Transporte Streamable HTTP, OAuth, servers remotos | Mencionado em 1 slide (comparação stdio × HTTP), sem lab — fica pra quando existir necessidade real de multi-client (semana 10) |
| Resources e Prompts como primitivas MCP (só Tools é ensinado) | Citados de passagem na teoria ("MCP também tem Resources e Prompts, hoje só Tools"), sem lab — não é o corte de 20-30%, é escopo deliberado: uma tool bem desenhada e atacada vale mais que três primitivas rasas |

---

## 3. Ganchos para frente

- **Semana 5 (`aula9-engenharia-para-ia`)** pode assumir que todo aluno tem um MCP server
  próprio rodando com pelo menos uma tool — se a semana 5 tocar em testes/CI, o MCP server
  é candidato natural de "coisa que agora tem código pra testar".
- **Semana 9 (`aula17-code-review-subagentes`)** repete o formato "red team em duplas" —
  pode reusar literalmente a mecânica de sorteio cruzado de domínio desta semana (seção
  "Aula 2" do `ROTEIRO-FACILITADORA.md`) em vez de reinventar.
- **Semana 10 (`aula19-orquestracao-mcp-client`)** constrói o MCP client próprio — pode
  citar o MCP server do aluno (desta semana) como o primeiro server real que o client dele
  vai conectar, fechando o ciclo host/client/server que ficou incompleto aqui de propósito.
- O `DECISAO-ESCOPO.md` (o que a tool NÃO pode fazer) é um artefato reusável — qualquer
  semana futura que adicione uma tool nova ao projeto do aluno deveria pedir a mesma folha
  preenchida antes de codar. Vale declarar isso como convenção do curso, não só desta
  semana.
- O trio de riscos (prompt injection / improper output handling / supply chain) é o
  vocabulário mínimo que qualquer semana futura que toque em segurança de agente pode
  citar sem reexplicar — inclusive semana 11 (AIOps) e semana 12 (agentes e automação),
  onde agentes ganham ainda mais autonomia.

## 4. Ganchos para trás

`_GANCHOS.md` chegou vazio (lote 1) — não havia ganchos declarados por semanas anteriores
pra retomar literalmente. Mesmo assim, esta semana se apoia em duas dependências
explícitas do enunciado, que ficam registradas aqui pra quando as semanas 2 e 3 forem
escritas (ou revisadas) por outro lote:

- **Semana 3 (`aula5-agents-md-skills`):** o recap ativo da aula 1 desta semana (bloco de
  15 min) assume que todo aluno chega com um `AGENTS.md`/`CLAUDE.md` de projeto e pelo
  menos uma skill escrita. Se a semana 3, quando escrita, não entregar isso como
  artefato persistente do aluno, o recap desta semana precisa de ajuste.
- **Semana 2 (`aula3-prompts-contexto-projeto`):** o catálogo de 7 domínios (seção 6 do
  `_BRIEF.md`) é assumido como já escolhido por cada aluno antes desta semana — a tool que
  ele constrói aqui *tem* que servir esse projeto. Se a semana 2, quando escrita, mudar o
  mecanismo de escolha de domínio, a tabela da seção 5 deste documento precisa revisão.

---

## 5. Cobertura dos 7 domínios do catálogo

| # | Domínio | Funciona? | Como |
|---|---|---|---|
| 1 | Listagem de perfis de alunos da PDA | ✅ | Tool de busca/consulta sobre a lista de perfis (ex.: `buscar_perfil_por_habilidade`) — lê um dado real do projeto, não escreve. É o exemplo usado no `ENTREGAVEL.md`. |
| 2 | Captação de clientes e automações para freelancers | ✅ | Tool que recebe um lead bruto (texto colado) e devolve um resumo estruturado ou registra numa lista — toca o dado mais valioso do domínio (leads), o que torna a pergunta "o que ela NÃO pode fazer" (ex.: não pode apagar um lead existente) especialmente concreta. |
| 3 | Quiz conectado ao Claude | ✅ | Tool de exportação/agregação de resultados de um quiz já existente (ex.: `exportar_resultados_quiz`) — read-only por natureza, bom caso pra "decisão de escopo" simples de justificar. |
| 4 | Avaliação automatizada de projetos por IA | ✅ | Tool que roda um checklist de entrega contra um repositório (ex.: `checar_estrutura_entrega`) — espelha o que a própria facilitadora precisa fazer em escala com 75 alunos; risco real de "excessive agency" se a tool puder rodar código arbitrário do repo do aluno, o que força uma decisão de escopo genuína (só leitura de arquivos, nunca `npm install`/execução). |
| 5 | Agente de revisão de código com a voz da PDA | ✅ | Tool que expõe o guia de estilo/padrões da PDA como consulta (ex.: `buscar_padrao_de_estilo`) pro agente revisor consultar antes de comentar um PR — é literalmente uma tool que o domínio 5 precisa pra funcionar. |
| 6 | Problema real da ONG ou das aulas | ✅ | Depende do problema trazido pela facilitadora naquele momento; o padrão se repete (uma tool de consulta sobre um dado operacional real — planilha de doações, cadastro de voluntários). Facilitadora declara o caso concreto na hora. |
| 7 | Domínio próprio do aluno | ✅ | Por definição, a tool espelha o que o negócio real do aluno precisa (ex.: `consultar_estoque`, `gerar_orcamento`) — é o domínio mais fácil de cumprir a régua "serve o projeto de verdade", porque o aluno é quem melhor sabe o que sua tool não pode fazer. |

**Cobertura: 7 de 7.** Nenhum domínio ficou sem verificação — em todos os sete, a tool tem
uma ação de leitura/consulta óbvia e genuinamente útil, o que também facilita a régua de
"decisão de escopo" (a maioria dos exemplos naturais aqui é read-only, o que torna "o que
ela não pode fazer" == "escrever, apagar, ou expor dado sensível" — um padrão claro de
ensinar).

---

## 6. Soma dos minutos

**Aula 1:** 10 (Giro) + 15 (Recap) + 30 (Teoria+Demo1) + 15 (Lab1) + 20 (Teoria+Demo2/3) +
25 (Lab2) + 5 (Fechamento) = **120 min.**

**Aula 2:** 10 (Abertura+sorteio) + 5 (Setup) + 40 (Rodada 1) + 5 (Troca) + 40 (Rodada 2) +
15 (Consolidação/log) + 5 (Fechamento) = **120 min.**

(Tabelas completas, bloco a bloco, com o que se diz e o que se faz em cada um: ver
`ROTEIRO-FACILITADORA.md`.)

---

## 7. Onde o julgamento do aluno é indispensável

**O ponto exato:** decidir e implementar **o que a tool NÃO deve poder fazer**, antes de
escrever a tool.

Por que o agente não resolve isso sozinho: peça ao Claude Code "cria um MCP server com uma
tool que faz X" e ele entrega um server funcional, com schema de input razoável e até
alguma validação de tipo — tudo isso é tarefa mecânica que um agente resolve bem. O que
ele não pode decidir por você é **qual é o raio de dano aceitável se essa tool for
enganada** — isso depende do domínio, do dado real por trás, e de quanto risco o dono do
projeto tolera. Um agente não tem essa informação e, sem uma restrição explícita no
código, tende a implementar a versão mais capaz e mais genérica da tool (mais parâmetros,
mais permissões, "pra ser mais útil") — exatamente o oposto do que reduz superfície de
ataque.

**Como o lab força essa decisão a acontecer antes do código:** `starter/decisao-escopo-template.md`
é copiado e preenchido no passo 1 do Lab 1, antes do `npm install`. A aula 2 (red team em
duplas) usa esse documento como o alvo explícito do ataque — o atacante recebe o
`DECISAO-ESCOPO.md` do colega e tenta provar que a lista de "não pode" é falsa na prática.
Isso fecha o ciclo: decisão declarada → decisão testada por um adversário real → decisão
corrigida ou confirmada no log final.

---

## 8. Excalidraw

Esta semana **não usa Excalidraw**. Motivo: o formato fixo da aula 2 é red team em duplas
(seção 5.1 do `_BRIEF.md`), não modelagem coletiva — o quadro nesta semana é o placar de
injections encontradas (ver `SLIDES-OUTLINE.md`, slide A3), que é intencionalmente simples
(texto/números, sem diagrama de arquitetura) porque o conteúdo da aula 2 é ataque prático,
não desenho de sistema. As semanas com Excalidraw obrigatório são S5 e S6.
