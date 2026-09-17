# PACOTE.md — Semana 12 (`aula23-agentes-automacao`)

Para a Iasmim. Leitura antes de aprovar o lote.

---

## 0. Decisões de framework — confirmadas, não renegociadas

- **n8n + Google ADK, nunca Claude SDK.** Decisão da Iasmim, `_BRIEF.md` seção 2. O ADK
  entra por contraste ("quando você precisa versionar, testar e fazer deploy disso"), não
  como tutorial — cada peça de código do ADK nesta semana existe pra comparar com o
  workflow n8n equivalente, nunca pra ensinar o framework a fundo.
- **n8n ganha mais tempo de aula que o ADK** (30+15 min de teoria/lab focados nele contra
  ~10 min de demo do ADK) — decisão deliberada, ligada à tese de geração de renda da PDA:
  pra 69 dos 75 alunos, a primeira automação que paga conta vai sair do n8n.

---

## 1. Mapeamento Alura

| Curso/módulo Alura | Carga | O que cobre | O que isso tira do síncrono |
|---|---|---|---|
| **Automação de processos com n8n: integração de APIs REST** (`alura.com.br/curso-online-automacao-n8n-integracao-apis-rest`, 4h) | Mapear/gerenciar dados de API REST dentro do n8n, configurar HTTP Request, ler resposta JSON, variáveis de ambiente | O aluno chega à aula já sabendo o que é um node HTTP Request e como ler um JSON de resposta. **A aula não reexplica "o que é o node HTTP Request" do zero** — vai direto pro node chamando a API da Anthropic com `usage.input_tokens`/`output_tokens`, que é o que este curso não cobre. |
| **Automação de processos com n8n: integração de bases de conhecimento** (`alura.com.br/curso-online-automacao-n8n-integracao-bases-de-conhecimento`, 12h) — **opcional, não pré-requisito** | Vetorização, recuperação de dados, módulo "Criando nosso agente de IA" dentro do n8n | Fica marcado como aprofundamento pra quem quiser ir além do workflow simples de hoje — antecipa parte do vocabulário de RAG da Semana 13 sem a aula precisar tocar nisso. |
| **LangChain: desenvolva agentes de inteligência artificial** (`alura.com.br/curso-online-langchain-desenvolva-agentes-inteligencia-artificial`, 8h) — já citado no `_BRIEF.md` como um dos "dois cursos de LangChain" do curso | Construir agentes com LangChain e Python, tools, decisão automatizada | Cobre o conceito genérico de "agente em código com framework" — o slide do ADK (`</GOOGLE ADK>`) não reexplica o que é um framework de agente do zero, só mostra a sintaxe específica do ADK. |

**Pré-requisito de entrada no lab da aula 24 (contrato, não punição):** ter feito pelo
menos o curso "Automação de processos com n8n: integração de APIs REST" antes da aula 23.
Quem não fez não sabe ler o payload de um node HTTP Request e trava a própria dupla.

---

## 2. O que foi cortado (e para onde foi)

| Cortado | Minutos devolvidos | Para onde foi |
|---|---|---|
| Tutorial completo de todos os tipos de node do n8n (Switch, Merge, Loop Over Items, etc.) | ~10 min | Só os 6 nodes do workflow de exemplo (Webhook, Set, HTTP Request, If, NoOp, Respond to Webhook) são ensinados. O resto vira link na doc oficial do n8n. |
| Passeio completo pela UI do Google AI Studio / criação de projeto GCP / Vertex AI | ~8 min | O ADK roda hoje só com `GOOGLE_API_KEY` do AI Studio (grátis, sem GCP). Vertex AI vira nota de rodapé em `starter/adk/.env.example`, marcado "fora do escopo de hoje". |
| Gramática completa de `adk eval` (todas as flags, `test_config.json` detalhado, `adk conformance test`) | ~5 min | Mostrado só o comando básico (`adk eval <agent> <eval_set>`) e o formato de arquivo por cima — suficiente pra entender "isso versiona e testa", não pra dominar o framework. |
| Explicação completa do protocolo OpenTelemetry por trás do tracing | ~5 min | Mostrado **funcionando** (instrumentar 3 linhas, ver o trace aparecer), igual ao tratamento que a Semana 11 deu ao protocolo SSE do streaming — mesmo padrão de corte, mesma semana que o instalou. |
| Segunda ferramenta de tracing pra comparação (ex.: Helicone, Arize) | 0 min extra (nunca esteve no escopo) | Uma ferramenta concreta rodando (Langfuse) é melhor que duas mencionadas em slide, seguindo a regra de qualidade do `_BRIEF.md` seção 3. |

**Total devolvido: ~28 minutos**, usados pro bloco de "quando não usar agente" (que não
existia na grade antiga) e pro bloco de custo por execução, que precisa de tempo de
verdade pra calcular ao vivo, não só mostrar fórmula.

**Regra seguida à risca:** nenhum corte tirou lab. Os dois labs da aula 23 e a clínica +
demo relâmpago da aula 24 têm o tempo cheio do formato oficial.

---

## 3. Ganchos para frente

- **`starter/PROJETO-FINAL.md` abre o Projeto Final com 3 gates** (fim da Semana 12, fim
  da Semana 13, Demo Day na Semana 14). **A Semana 13 (RAG) tem que resolver o Gate 2**
  (automação/agente rodando + custo medido + trace real) na abertura ou no fechamento da
  aula 25 — cite o arquivo pelo nome exato, não redefina os gates.
- **`DECISAO-AGENTE.md`** é o artefato novo desta semana (cada aluno escreve o seu, dentro
  do próprio repo) — qualquer semana futura que precise saber "esse aluno decidiu usar
  agente ou não" lê esse arquivo em vez de perguntar de novo.
- **A árvore de decisão "quando não usar agente"** (cron+if / prompt simples / agente) é
  vocabulário reusável — a Semana 13 (RAG) pode aplicar a mesma árvore pra "isso precisa
  de recuperação de contexto, ou um prompt direto já resolve".
- **Trava dura de sorteio da demo relâmpago** ("quem apresentou numa rodada anterior é
  excluído do pool, não só deprioritado") é uma decisão nova desta semana, mais forte que
  a regra original da `RUBRICA-DEMO-RELAMPAGO.md` da Semana 11. Se alguma semana futura
  reusar demo relâmpago, ela herda essa versão mais forte da regra.
- **Pendência resolvida parcialmente, need de acompanhamento:** o `Spend Limits API` da
  Anthropic (REFERENCIAS.md item 13) é recurso de organização/Enterprise, não de conta
  individual. Se o curso migrar pra uma conta institucional única no futuro, esse
  mecanismo passa a valer de verdade — até lá, o controle é manual (planilha + painel de
  uso).
- **Preço do Gemini por token não foi verificado** — pendência explícita pra quem tocar
  de novo em ADK/Gemini (Semana 13 ou 14): confirme em
  <https://ai.google.dev/gemini-api/docs/pricing> antes de montar qualquer cálculo de
  custo em cima dele.
- **Schema completo de `eval_cases` do ADK (`.test.json`/`.evalset.json`) não foi
  verificado campo a campo** — só a estrutura de alto nível. Fica `[CONFIRMAR]` em
  `starter/adk/agente_minimo/casos.test.json` pra quem for expandir isso a sério.

## 4. Ganchos para trás (retomados, citando o `_GANCHOS.md`)

- **`starter/CHECKLIST-SEGREDOS.md` da Semana 11** — citado por nome em `README.md`,
  `GUIA-DO-ALUNO.md`, `ENTREGAVEL.md` e `ROTEIRO-FACILITADORA.md`. Não foi reescrito; só
  ganhou uma nota de que a credencial do n8n é um mecanismo diferente do `.env`
  (Credentials store do n8n em vez de arquivo), mas a disciplina é a mesma.
- **`starter/RUBRICA-DEMO-RELAMPAGO.md` e a mecânica de clínica rotativa da Semana 11** —
  reusadas quase tal e qual na aula 24, com um critério ajustado ("decisão do workflow
  visível" aceito no lugar de "loop determinístico visível") e a trava de sorteio mais
  forte descrita na seção 3 acima.
- **Tabela de preço Haiku 4.5 / Sonnet 5 da Semana 11** — citada sem reabrir, usada
  diretamente na fórmula de custo por execução (`starter/CUSTO-POR-EXECUCAO.csv`) e no
  workflow n8n (que usa Haiku de propósito, não Sonnet, porque a tarefa é simples e roda
  em volume).
- **`evals/casos.json` + runner (Semana 11)** — citado como o formato mínimo de eval do
  curso; o `adk eval` desta semana é apresentado como "o mesmo conceito, nativo do
  framework", não como coisa nova.
- **Lei de Brooks + custo de coordenação (~4x/~15x tokens, Semana 10)** — citado sem
  reabrir no slide "quando não usar agente": multiagente custa mais tokens que agente
  único, que custa mais que um prompt direto, que custa mais que um cron sem modelo
  nenhum. É a mesma escada de custo, um degrau abaixo.
- **App em produção no Render (Semana 11)** — não recriado. Esta semana instrumenta o
  mesmo serviço, como o `_GANCHOS.md` (lote 3) já determinava.
- **"O modelo preenche o meio. O loop é seu." (Semana 11)** — citado explicitamente no
  Bloco 2 (Recap Ativo) da aula 23 como ponte pro fio condutor novo.
- **Placar 40/30/20/10 (Semana 10)** — mencionado como base histórica da régua de "não é
  só velocidade" que também rege a rubrica de demo relâmpago reusada aqui.

---

## 5. Cobertura dos 7 domínios do catálogo

| # | Domínio | Funciona? | Como |
|---|---|---|---|
| 1 | Listagem de perfis de alunos da PDA | Sim | O gatilho webhook recebe uma pergunta sobre um perfil; a tool `classificar_mensagem` vira `classificar_busca` (tipo de busca, urgência de responder); o restante do workflow (Set, If, NoOp) não muda de forma. |
| 2 | Captação de clientes / automações para freelancers | Sim — é o encaixe original | O workflow de exemplo (`workflow-classificador-leads.json`) já é este domínio: mensagem de cliente → classificação → roteamento humano/automático. |
| 3 | Quiz conectado ao Claude | Sim | A tool vira `gerar_proxima_pergunta(tema, historico)`; o gatilho passa a ser "aluno respondeu" em vez de "mensagem chegou"; o cálculo de custo por execução é o mesmo. |
| 4 | Avaliação automatizada de projetos por IA | Sim | O gatilho webhook vira o `git push` (webhook do GitHub); a tool vira `avaliar_criterio`; o Google ADK entra naturalmente aqui como "quero versionar e testar o avaliador" — é o encaixe mais forte pro contraste n8n×ADK. |
| 5 | Agente de revisão de código com a voz da PDA | Sim | Mesma estrutura do domínio 4, tool trocada por `revisar_trecho`; decisão de arquitetura (`DECISAO-AGENTE.md`) fica interessante aqui porque revisão de código tem passos múltiplos — pode justificar agente de verdade em vez de automação simples. |
| 6 | Problema real da ONG ou das próprias aulas | Sim | Qualquer mensagem recebida pela ONG que precise de triagem automática encaixa sem alterar a estrutura do workflow. |
| 7 | Domínio próprio do aluno | Sim | O esqueleto (webhook → normalizar → tool → custo → roteamento) é agnóstico de domínio por construção — só troca a tool e o `system`. |

**7 de 7 domínios cobertos** — acima do mínimo de 5 exigido pela barra de qualidade.

---

## 6. Soma dos minutos

### Aula 23 (conceito + demo)

| Bloco | Minutos | Conteúdo |
|---|---|---|
| Giro das IAs | 10 | Fixo |
| Recap ativo | 15 | Sorteio sobre a Semana 11 (loop determinístico, eval, chave no host) |
| Teoria + demo ao vivo (1) | 30 | Quando não usar agente (5) + o que é n8n / onde ganha-quebra (5) + instalação (5) + anatomia + gatilho real (7) + montar ao vivo (6) + erro proposital (2) |
| Lab 1 | 15 | Importar workflow, criar credencial, ativar, disparar via curl |
| Teoria + demo ao vivo (2) | 20 | ADK contraste (6) + o que se ganha/perde (4) + custo por execução (6) + tracing (2) + erro proposital (2) |
| Lab 2 | 25 | `DECISAO-AGENTE.md`, instrumentação (n8n ou ADK+Langfuse), linha da planilha de custo |
| Fechamento | 5 | Recap, entregável, gancho pra aula 24 |
| **Total** | **120** | Fecha exato |

### Aula 24 (clínica rotativa + demo relâmpago)

| Bloco | Minutos | Conteúdo |
|---|---|---|
| Abertura + regras | 5 | Retoma mecânica de clínica (Semanas 7/8/11) + anuncia a trava de sorteio mais forte |
| Clínica rotativa | 85 | Fila de sinalização; a cada ~15 min a facilitadora projeta o problema de um aluno e depura ao vivo |
| Demo relâmpago | 30 | 6 alunos × (3 min demo + 2 min crítica) = 30 min, com pool de sorteio filtrado (sem repetir quem apresentou na Semana 11) |
| **Total** | **120** | Fecha exato |

**Soma das duas aulas: 240 minutos, 120 + 120.**

---

## 7. Onde o julgamento do aluno é indispensável

1. **Na árvore de decisão (Bloco 3, Lab 2, `DECISAO-AGENTE.md`):** o aluno decide **em
   qual dos 3 ramos o próprio projeto cai** — cron+if, prompt simples, ou agente de
   verdade. Não existe fórmula que resolva isso por ele; é leitura do próprio domínio de
   negócio, a mesma competência do "parágrafo pro dono do negócio" desde a Semana 2.
   Um aluno que copia a resposta de outro (mesmo que ambos usem n8n) sem justificar o
   próprio caso não cumpre o critério — a rubrica do `ENTREGAVEL.md` cobra isso
   explicitamente ("a frase de justificativa é específica do projeto, não genérica").
2. **No roteamento do workflow (Lab 1 e Lab 2, nodes 6a/6b):** o modelo decide a
   *urgência* de uma mensagem; **o aluno decide o que "urgência alta" significa pro
   próprio negócio** e qual canal recebe o alerta. Isso é regra de negócio, não algo que
   o `tool_use` do Claude resolve sozinho — os nodes `NoOp` do workflow de exemplo ficam
   propositalmente vazios pra forçar essa decisão.
3. **Na escolha de modelo pro custo (Bloco 5, planilha):** o aluno decide se a tarefa
   justifica Haiku (mais barato) ou Sonnet (mais caro) — decisão de produto que muda
   diretamente quanto ele pode cobrar de um cliente. Não existe "modelo certo" universal;
   existe modelo certo pro volume e pra complexidade daquela automação específica.

---

## 8. Excalidraw

Esta semana **não usa Excalidraw**. Motivo: como na Semana 11, a aula 24 é clínica
rotativa + demo relâmpago (debug ao vivo em cima do que os alunos já construíram), não
modelagem coletiva de arquitetura. O quadro fica reservado pras semanas que o
`_GANCHOS.md` já marca como donas dele (5 e 6).

---

## 9. Pendências para a orquestradora decidir

1. **Preço do Gemini por token** — não verificado nesta sessão (ver seção 3 e
   `REFERENCIAS.md`). Não bloqueia a aula (o volume de teste cabe no tier gratuito), mas
   bloqueia qualquer cálculo de custo em produção com ADK/Gemini.
2. **Schema completo de eval do ADK** — só a estrutura de alto nível foi confirmada.
   `starter/adk/agente_minimo/casos.test.json` está marcado `[CONFIRMAR]` de propósito.
3. **O `Spend Limits API` da Anthropic é recurso de organização, não de conta individual**
   — a pendência da Semana 11 ("existe limite de gasto automático configurável?") fica
   respondida como "existe, mas não pra vocês do jeito que estão hoje". Vale uma frase de
   alinhamento se o curso migrar pra uma conta institucional única no futuro.
