# Referências — Semana 12 (aulas 23 e 24)

Todo link abaixo foi aberto com WebFetch nesta sessão antes de entrar aqui. Nenhum link
composto por analogia. Data da verificação: hoje (sessão de escrita do pacote).

| # | Link | O que é | Verificação | Onde entra |
|---|---|---|---|---|
| 1 | [Host n8n — n8n Docs](https://docs.n8n.io/deploy/host-n8n) | Doc oficial: opções de hospedagem (one-line setup, Docker Compose, provedores de nuvem). Community edition roda sem license key | Aberto via WebFetch — confirma que o one-line setup pede Linux/macOS ou WSL no Windows, e que sem license key o n8n já roda como Community edition completo | Slide 10 (`</N8N>` — o que é); `GUIA-DO-ALUNO.md`, bloco de instalação |
| 2 | [Install with Docker — n8n Docs](https://docs.n8n.io/deploy/host-n8n/install-options/install-with-docker) | Doc oficial com o comando `docker run` exato pra subir o n8n local | Aberto via WebFetch — confirma o comando completo, a porta `5678`, e que Docker Desktop cobre Windows/Mac/Linux | Slide 11 (bloco de terminal real da instalação) |
| 3 | [Choose how to use n8n — n8n Docs](https://docs.n8n.io/choose-how-to-use-n8n) | Doc oficial comparando self-hosted Community (grátis) vs n8n Cloud (pago) e o que fica só no Enterprise | Aberto via WebFetch — confirma "Free Community edition with most features", sem cartão de crédito exigido | Slide 12 (custo/limite honesto do n8n) |
| 4 | [Webhook node — n8n Docs](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.webhook/) | Doc oficial do node de gatilho por HTTP: métodos suportados, URL de teste separada da URL de produção | Aberto via WebFetch — confirma DELETE/GET/HEAD/PATCH/POST/PUT, payload máx. 16MB, e a separação teste/produção que vira o erro proposital da demo | Slide 14 (gatilho real); Slide 16 (erro proposital); `starter/n8n/README-WORKFLOW.md` |
| 5 | [Anthropic node — n8n Docs](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-langchain.anthropic/) | Doc oficial do node nativo da Anthropic no n8n (upload de arquivo, análise de imagem/documento, "Message a Model") | Aberto via WebFetch — confirma que o node nativo existe, mas não documenta retorno de uso de tokens — por isso o workflow de hoje usa HTTP Request puro, que dá acesso ao `usage` da resposta | Slide 13 (por que HTTP Request e não o node nativo); `starter/n8n/workflow-classificador-leads.json` |
| 6 | [google-adk — PyPI](https://pypi.org/project/google-adk/) | Página oficial do pacote Python do Google Agent Development Kit | Aberto via WebFetch — confirma nome exato `google-adk`, `pip install google-adk`, Python 3.10+, versão 2.9.0 (10/set/2026) | Slide 21 (instalação do ADK); `starter/adk/requirements.txt` |
| 7 | [google/adk-python — GitHub](https://github.com/google/adk-python) | Repositório oficial do ADK em Python | Aberto via WebFetch — confirma o hello-world de código (`from google.adk import Agent`) e que só Python é documentado como linguagem suportada no README | Slide 21; base do `starter/adk/agente_minimo/agent.py` |
| 8 | [Get started (Python) — Agent Development Kit](https://adk.dev/get-started/python/) | Doc oficial de quickstart do ADK (redireciona de `google.github.io/adk-docs/get-started/python/`) | Aberto via WebFetch — confirma `adk create`, a estrutura de pastas gerada (`agent.py`, `.env`, `__init__.py`) e os comandos `adk run` / `adk web --port 8000` | Slide 21 (bloco de terminal real) |
| 9 | [Why evaluate agents — Agent Development Kit](https://adk.dev/evaluate/) | Doc oficial de avaliação de agentes no ADK (redireciona de `google.github.io/adk-docs/evaluate/`) | Aberto via WebFetch — confirma o comando `adk eval`, os formatos `.test.json` (sessão única) e `.evalset.json` (multi-turno), e o `test_config.json` opcional com thresholds | Slide 22 (o que se ganha versionando/testando); `starter/adk/agente_minimo/casos.test.json` (marcado `[CONFIRMAR]` pro schema completo) |
| 10 | [Self-host Langfuse](https://langfuse.com/self-hosting) | Doc oficial: Langfuse é open source, self-hostável via Docker/Kubernetes/nuvem | Aberto via WebFetch — confirma que dá pra rodar de graça na sua própria infra, não só na nuvem deles | Slide 29 (por que Langfuse) |
| 11 | [Pricing — Langfuse](https://langfuse.com/pricing) | Página oficial de preços do Langfuse Cloud | Aberto via WebFetch — confirma plano **Hobby**: grátis, sem cartão de crédito, 50.000 unidades/mês, 30 dias de retenção, 2 usuários | Slide 29 (plano gratuito verificado); `starter/GUIA-TRACING.md` |
| 12 | [Observability for Google ADK with Langfuse](https://langfuse.com/integrations/frameworks/google-adk) | Doc oficial de integração Langfuse + ADK via OpenTelemetry | Aberto via WebFetch — confirma os pacotes (`langfuse`, `openinference-instrumentation-google-adk`), as variáveis de ambiente (`LANGFUSE_PUBLIC_KEY`, `LANGFUSE_SECRET_KEY`, `LANGFUSE_BASE_URL`), e a pegadinha real: `runner.run_async()` preserva o contexto do OpenTelemetry, `runner.run()` não | Slide 29 e Lab 2; `starter/GUIA-TRACING.md`, `starter/adk/requirements.txt` |
| 13 | [Spend Limits API — Claude Platform Docs](https://platform.claude.com/docs/en/manage-claude/spend-limits-api) | Doc oficial do mecanismo de limite de gasto por usuário/organização da Anthropic | Aberto via WebFetch — confirma que existe (`POST /v1/organizations/spend_limits`), mas é recurso de **Claude Enterprise** (organização), sem alerta automático nativo documentado — resolve a pendência aberta no `PACOTE.md` da Semana 11, com a ressalva honesta de que não cobre conta individual | Slide 25 (aviso de custo); `GUIA-DO-ALUNO.md` |
| 14 | [Automação de processos com n8n: integração de APIs REST — Alura](https://www.alura.com.br/curso-online-automacao-n8n-integracao-apis-rest) | Curso Alura (4h): mapear/gerenciar dados de APIs REST no n8n, configurar HTTP Request, variáveis de ambiente | Aberto via WebFetch — confirma título exato, carga (4h) e ementa | `PACOTE.md`, mapeamento Alura |
| 15 | [Automação de processos com n8n: integração de bases de conhecimento — Alura](https://www.alura.com.br/curso-online-automacao-n8n-integracao-bases-de-conhecimento) | Curso Alura (12h): vetorização, recuperação de dados, módulo "Criando nosso agente de IA" dentro do n8n | Aberto via WebFetch — confirma título exato, carga (12h) e que cobre agente de IA dentro do n8n | `PACOTE.md`, mapeamento Alura |
| 16 | [LangChain: desenvolva agentes de inteligência artificial — Alura](https://www.alura.com.br/curso-online-langchain-desenvolva-agentes-inteligencia-artificial) | Curso Alura (8h) já citado no `_BRIEF.md` como um dos "dois cursos de LangChain" do curso | Reaberto e reverificado nesta sessão via WebFetch — confirma título exato, carga (8h) e ementa (agentes com Python) | `PACOTE.md` — contraste de framework de agente, não reensinado |

## Pendência que não foi possível fechar

**Preço do Gemini (modelo usado pelo Google ADK) por token não foi verificado nesta
sessão.** A pesquisa desta semana focou em confirmar o próprio ADK (pacote, comandos,
eval) e o Langfuse; o preço do Gemini fica `[CONFIRMAR]` em
`starter/adk/README-ADK.md` e a coluna correspondente da `starter/CUSTO-POR-EXECUCAO.csv`
está em branco de propósito. Fonte a checar antes de preencher:
<https://ai.google.dev/gemini-api/docs/pricing>.

## Reaproveitadas de semanas anteriores (citadas, não reabertas)

- Preço de Claude Haiku 4.5 / Sonnet 5 por milhão de tokens — verificado na Semana 11
  (`aula21-software-com-llm-dentro/REFERENCIAS.md`, item 5). Usado sem reverificar na
  fórmula de custo por execução desta semana.
- Lei de Brooks + números de custo de coordenação da Anthropic (~4x tokens/agente, ~15x
  multiagente) — verificados na Semana 10 (`aula19-orquestracao-mcp-client`). Citados sem
  reabrir no slide de "quando um agente não compensa".
