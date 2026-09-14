# PACOTE.md — Semana 10: Orquestração, paralelismo e o MCP client próprio (aula19-orquestracao-mcp-client)

**Módulo 3 — AI Orchestrator / Agentes.** (Nota: `_orquestracao/_ESTADO.md`, deixado por
uma sessão anterior, ainda lista "Módulo 3 = semanas 5–8" — isso é anterior ao ADENDO da
skill oficial, que redistribui os módulos e que este pacote segue. Sinalizo para quem
consolidar o material: `_ESTADO.md` está desatualizado nesse ponto, não é uma divergência
real.)

## 0. Ferramentas e decisões de escopo — o que resolvi e por quê

- **Pacote do MCP client confirmado:** `@modelcontextprotocol/client`, versão 2.0.0 — não
  `@modelcontextprotocol/sdk` (nome antigo) e não `@modelcontextprotocol/server` (esse é
  o pacote do LADO SERVIDOR, usado na semana 4). Verifiquei os dois pacotes direto no
  registro do npm nesta sessão: são pacotes irmãos, do mesmo monorepo
  `modelcontextprotocol/typescript-sdk`, ambos na 2.0.0. A instrução original do brief
  ("o pacote é `@modelcontextprotocol/server`, não `/sdk`") falava do contexto do SERVER
  da semana 4 — para o CLIENT desta semana o pacote certo é `@modelcontextprotocol/client`.
  Isso está documentado com destaque no `GUIA-DO-ALUNO.md` e no
  `starter/mcp-client-starter/README.md` justamente para não repetir a confusão.
- **O esqueleto do cliente foi testado ponta a ponta nesta sessão**, não só escrito: npm
  install real, build real com `tsc`, e execução real contra um MCP server construído com
  `@modelcontextprotocol/server` — handshake, `listTools()` e `callTool()` funcionaram
  exatamente como os TODOs do `src/index.ts` descrevem. Ver `REFERENCIAS.md`, nota
  técnica.
- **O conflito de merge do speedrun é real, não decorativo.** Simulei com `git`/branches
  de verdade: duas tarefas que mexem em funções diferentes de `validators.js`, mas na
  mesma linha final (`module.exports`), geram `CONFLICT (content)` no segundo merge.
  Verifiquei também que a tarefa B (`formatters.js`) faz merge limpo com qualquer uma das
  outras duas. Isso significa que o desenho do speedrun ensina exatamente o que devia:
  "tarefas que parecem independentes ainda podem colidir num ponto comum" — e nem toda
  combinação de 2 tarefas colide, então a decisão de paralelizar tem uma resposta certa a
  ser descoberta, não é aleatória.
- **Excalidraw: entreguei um board**, mesmo a semana não sendo obrigatória (S5/S6 são as
  obrigatórias). Justificativa: o brief pede explicitamente diagrama para os três padrões
  de orquestração, e a Armadilha 1 (worktree × subagente) se beneficia de comparação
  visual lado a lado. `excalidraw/padroes-orquestracao.excalidraw` — visualmente diferente
  dos boards das semanas 5 e 6 (que usam zonas de bounded context e mapa da dor,
  respectivamente): este usa três zonas horizontais lado a lado (sequencial/paralelo/
  supervisor) com uma zona de preenchimento ao vivo só no rodapé, não o board inteiro.
  Validado com `python3 -c "import json;json.load(...)"` — 49 elementos, JSON válido.

## 1. Mapeamento Alura

| Curso/trilha | O que cobre | O que isso tira do síncrono |
|---|---|---|
| **Protocolos e arquitetura para construção de agentes: MCP, A2A, AG-UI e Backend for Agents (BFA)** (12h) — <https://www.alura.com.br/curso-online-protocolos-agentes-inteligentes> | Módulo dedicado a "Orquestração dos agentes com o padrão Supervisor" e "Construindo sistemas multiagente", além de MCP na prática com FastMCP | O síncrono não implementa o padrão Supervisor de verdade — só reconhece o padrão e mostra o diagrama. A implementação fica pra Alura. |
| **Formação Tópicos Avançados com Node.js** (28h) — <https://www.alura.com.br/formacao-topicos-avancados-node-js>, especialmente "Paralelizando operações com Child Process e Worker Threads" | Como `child_process`/Worker Threads funcionam por baixo do capô no Node | O síncrono não explica o mecanismo interno do `StdioClientTransport` (que sobe um processo filho) — só usa a API de alto nível do SDK. Quem quiser entender "o que tem por trás" vai pra esse curso. |
| **Model Context Protocol (MCP): integração e otimização em agentes de IA** (já citado na semana 4) | Arquitetura MCP geral | Não recitei o link de novo (regra de não repetir a mesma fonte mais de 2x no curso) — quem precisar de refresh, "ver semana 4". |

**Pré-requisito de entrada no lab desta semana:** conclusão do curso "Protocolos e
arquitetura para construção de agentes" (ou pelo menos o módulo de orquestração/Supervisor,
se a Iasmim quiser dividir por módulo em vez de curso inteiro — decisão dela, sinalizada
como revertível).

## 2. O que foi cortado

- **Implementação de verdade do padrão Supervisor** com um framework (LangGraph, ADK,
  etc.) — cortado do síncrono, vira reconhecimento de padrão + diagrama. Motivo: a
  implementação de supervisor de verdade pede LLM chamando LLM decidindo delegação, e
  isso pertence à semana 11 (API) e à semana 12 (n8n/ADK), não a uma semana sem chave.
- **Mecanismo interno de `child_process`/subprocess** — cortado, vai pra Alura (Tópicos
  Avançados com Node.js). O síncrono usa a API do SDK (`StdioClientTransport`) sem abrir
  o que ela faz por dentro.
- **Implementação de swarm** — nunca esteve nos planos do síncrono desta semana; é menção
  com link (OpenAI Swarm, com o próprio aviso de descontinuação), não bloco. Motivo
  explícito no roteiro: "pro tamanho de problema de vocês agora, quase nunca faz
  sentido" — ensinar a ferramenta importaria menos que ensinar a desconfiança.
- **Aprofundamento em `git worktree`** além do que o Lab 1 usa (`add`/`list`/`remove`) —
  flags avançadas (`--lock`, `.worktreeinclude`, hooks de VCS não-git) ficam de fora do
  síncrono; quem quiser, a doc oficial (referência #1) cobre tudo.

## 3. Ganchos para frente

- **O `mcp-client-starter/src/index.ts` é literalmente o arquivo que a semana 11 volta a
  abrir.** O próximo TODO depois do TODO 5 é plugar um modelo decidindo qual tool chamar
  em vez de o aluno decidir na mão. Isso deixa a semana 11 com um ponto de partida
  concreto em vez de "comece do zero" — cite o arquivo pelo nome exato.
- **`@modelcontextprotocol/client` (2.0.0) e `@modelcontextprotocol/server` (2.0.0) são
  pacotes irmãos confirmados nesta sessão.** A semana 11 vai instalar `@anthropic-ai/sdk`
  ao lado do `@modelcontextprotocol/client` já presente — não precisa reexplicar o MCP,
  só a chamada ao modelo.
- **Vocabulário de custo de coordenação (Lei de Brooks + números da Anthropic: ~4x
  tokens/agente, ~15x/multiagente) fica instalado** e é citável sem reexplicar nas
  semanas 12 (n8n/ADK — decisão de quantos agentes num workflow) e 13 (RAG — se vale
  paralelizar indexação).
- **`LOG-SESSAO-PARALELA-TEMPLATE.md` e `DOC-AGENTE-UNICO-TEMPLATE.md` são convenções de
  curso reaproveitáveis** — qualquer semana futura que envolva decidir "quantos agentes
  pra essa tarefa" pode usar o mesmo par de documentos em vez de inventar formato novo.
- **A régua de placar não-só-velocidade (40% correção / 30% precisão de previsão / 20%
  pós-morte / 10% velocidade) é candidata a rubrica de demo relâmpago** nas semanas 11 e
  12, que já têm esse formato mapeado e vão precisar de critério de nota que não seja só
  "quem foi mais rápido/mais bonito".
- **Worktree × subagente, agora contrastados com nome e slide dedicado**, é pré-requisito
  citável para qualquer semana futura que combine os dois (por exemplo, subagente
  isolado em worktree — mencionado na doc oficial do Claude Code, mas fora de escopo
  desta semana).
- **O padrão de "task que parece independente mas colide num ponto comum de registro/
  exports/índice"** (o `module.exports` do speedrun) é reaproveitável como exemplo em
  qualquer discussão futura sobre modularização ou bounded contexts revisitados.

## 4. Ganchos para trás — o que retomei de `_GANCHOS.md`

- **Semana 4:** "A semana 10 (MCP client próprio) conecta no server desta semana,
  fechando host/client/server" — cumprido literalmente: o Lab 2 exige o server real da
  semana 4 buildado, não um server de exemplo.
- **Semana 4 (nome de pacote):** "`@modelcontextprotocol/server`, não `/sdk`" — retomado e
  **estendido**: para o client, o pacote irmão é `@modelcontextprotocol/client`, também
  não `/sdk`. Documentado com destaque para não virar confusão nova.
- **Semana 3/4 (mecânica de sorteio com prioridade a domínios diferentes):** reusada para
  formar os trios do speedrun, com uma adaptação sinalizada: como o repo do speedrun é
  genérico (não é o projeto de ninguém), o sorteio desta vez **não** tenta equilibrar por
  domínio — a lógica original (atacante que não conhece a lógica interna ataca melhor)
  não se aplica a um repo que ninguém construiu.
- **Semana 8:** "o verificador existe para o agente, não para você" — retomado no
  speedrun: `npm test` é o juiz de "pronto" tanto quanto o cronômetro, e isso é dito
  explicitamente no `GUIA-DO-ALUNO.md`.
- **Semana 9 (subagentes):** usado como o outro lado da Armadilha 1 — o recap ativo da
  aula 1 puxa deliberadamente uma pergunta sobre subagente antes de introduzir worktree,
  pra criar o contraste na hora certa.
- **Semana 2 (Smart Zone/Dumb Zone e `/context`):** mencionado de leve ao introduzir o
  multiplicador de tokens do multiagente (slide 25) — não reexplicado, só citado como
  vocabulário já instalado.

## 5. Cobertura dos 7 domínios do catálogo

| Domínio | Funciona? | Como |
|---|---|---|
| 1. Listagem de perfis de alunos da PDA | ✅ | O MCP client conecta no server da semana 4 do aluno, seja qual for a tool dele (buscar perfil, listar, etc.) — o cliente não sabe nem precisa saber o domínio. O speedrun é domínio-neutro por desenho. |
| 2. Captação de clientes/automações para freelancers | ✅ | Idem — a tool de automação de leads do aluno é a que o cliente chama no Lab 2. |
| 3. Quiz conectado ao Claude | ✅ | Idem. |
| 4. Avaliação automatizada de projetos por IA | ✅ | Idem. |
| 5. Agente de revisão de código com a voz da PDA | ✅ | Idem — inclusive um encaixe natural, já que este domínio já usa subagentes (semana 9); a Armadilha 1 fica mais concreta pra quem escolheu este domínio. |
| 6. Problema real da ONG/aulas | ✅ | Idem, qualquer tool serve. |
| 7. Domínio próprio do aluno | ✅ | Idem — o cliente é agnóstico ao domínio por construção; a única exigência é ter UM server MCP funcionando da semana 4, que todo aluno tem independente do domínio escolhido. |

**7 de 7.** O speedrun da aula 2 roda num repo à parte, deliberadamente sem domínio —
isso não é uma limitação, é o desenho: ninguém começa em vantagem por ter escolhido um
domínio "mais fácil de paralelizar" que outro.

## 6. Soma dos minutos

**Aula 1:** 10 (Giro) + 15 (Recap) + 30 (Teoria+Demo 1) + 15 (Lab 1) + 20 (Teoria+Demo 2)
+ 25 (Lab 2) + 5 (Fechamento) = **120 min.**

**Aula 2:** 10 (Abertura/regras/sorteio) + 10 (leitura das tarefas + aposta) + 40
(speedrun cronometrado) + 15 (integração final) + 25 (pós-morte coletivo) + 15 (placar
final por categoria) + 5 (Fechamento) = **120 min.**

## 7. Onde o julgamento do aluno é indispensável

1. **Lab 2, aula 1 — ler um erro de protocolo cru sem tradução de LLM.** Quando o
   `client.connect()` trava ou uma `callTool()` volta com `isError: true`, não existe
   nenhum modelo no meio explicando "o problema é X". O aluno lê a mensagem crua (do
   Node, do JSON-RPC, do TypeScript) e decide sozinho: caminho errado? Build
   desatualizado? Schema de argumento incompatível com o que a tool espera? Essa é
   exatamente a fronteira que a ausência de LLM esta semana torna visível — e ela some na
   semana 11, quando um modelo passa a interpretar esses erros por eles. Vale a pena
   nomear isso em voz alta na aula: "aproveitem, essa dor crua não vai durar."
2. **Speedrun, aula 2 — decidir ANTES do cronômetro se as 3 tarefas são seguras de
   paralelizar.** A resposta não é óbvia por inspeção superficial ("são 3 funções
   diferentes, deve dar pra rodar as 3 juntas") — está nos comentários `TODO` de
   `validators.js`, que avisam que duas tarefas mexem no mesmo arquivo. Um aluno que pula
   a leitura e parte direto pro paralelo total via a colisão na prática; um que lê antes
   evita, ou decide correr o risco de propósito, sabendo o custo. As duas escolhas
   pontuam no placar — o que não pontua é não ter pensado sobre isso antes de rodar.

## 8. Excalidraw

Entreguei `excalidraw/padroes-orquestracao.excalidraw`: três zonas horizontais lado a
lado (sequencial, paralelo, supervisor), cada uma com caixas de agente, a zona de
"paralelo" com um losango de "INTEGRAÇÃO" em laranja destacando onde o custo mora, uma
legenda, e uma zona tracejada de preenchimento ao vivo no rodapé ("SEU CASO — preencher
no Lab 1, ~min 50") com 3 sub-caixas tracejadas. 49 elementos, validado com
`python3 -c "import json;json.load(...)"`.

Diferença deliberada dos boards das semanas 5 e 6: `board-bounded-contexts.excalidraw`
(S5) organiza por zonas de contexto de domínio, e `mapa-da-dor.excalidraw` (S6) é uma
matriz "quem sente / onde dói"; este board é comparativo horizontal de 3 padrões lado a
lado com um único ponto de destaque colorido (o losango de integração) — leitura visual
diferente, não reaproveita layout de nenhum dos dois.

O board é projetado duas vezes: na aula 1 (slide 9, durante a teoria) e reaberto no
início da aula 2 (slide A1/A2) só pra reforço visual — o preenchimento ao vivo da zona
tracejada acontece na aula 1, durante o Lab 1 (~min 50), não durante o speedrun.

## Pendências para a Iasmim decidir

1. **Módulo 4/5/6, se ela quiser renomear** — este pacote usa "Módulo 3 — AI Orchestrator
   / Agentes" porque foi a instrução explícita recebida para o cabeçalho do
   `ENTREGAVEL.md`. O `_orquestracao/_ESTADO.md` de uma sessão anterior tem uma
   distribuição de módulos diferente e mais antiga — sinalizado na seção 0 deste
   documento, não é uma decisão minha a reconciliar, é dela.
2. **Se o curso Alura "Protocolos e arquitetura para construção de agentes" deve ser o
   curso inteiro (12h) como pré-requisito, ou só o módulo de Supervisor/multiagente** —
   deixei como pré-requisito o módulo relevante, sinalizado como revertível.
3. **Se vale reaproveitar o board do Excalidraw também como abertura da aula 2** (como
   fiz) ou se a Iasmim prefere um board totalmente novo pro pós-morte, com espaço pra
   colar os números reais dos times — não construí esse segundo board porque o brief não
   pede quadro coletivo pro speedrun (é cronometrado, não modelagem coletiva), mas é uma
   extensão barata se ela quiser.
