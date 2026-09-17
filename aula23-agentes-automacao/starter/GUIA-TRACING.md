# Guia de tracing — Langfuse (Lab 2)

## Por que isto e não um slide

"Funcionou quando eu testei" não prova nada — a Semana 8 já instalou essa frase pra
código determinístico, e a Semana 11 estendeu ela pra eval (comportamento
não-determinístico). Tracing é o terceiro degrau: prova **o que aconteceu numa execução
específica**, em produção, sem você ter que reproduzir o bug. Sem trace, quando um cliente
disser "sua automação respondeu bobagem ontem às 15h", você não tem como saber por quê.

## Ferramenta escolhida: Langfuse

Plano **Hobby** do Langfuse Cloud: grátis, **sem cartão de crédito**, 50.000
unidades/mês, 30 dias de retenção (confirmado hoje, REFERENCIAS.md item 11). Também dá
pra rodar self-hosted via Docker se preferir não depender da nuvem deles (item 10) — não
é o caminho de hoje porque exige mais uma peça de infra numa aula que já tem n8n + ADK.

## Passo a passo (ADK)

Pacotes (já estão em `starter/adk/requirements.txt`):

```bash
pip install langfuse "google-adk>=2" openinference-instrumentation-google-adk
```

Crie conta em <https://cloud.langfuse.com> (Hobby, sem cartão), crie um projeto, copie as
duas chaves (`pk-lf-...` e `sk-lf-...`) pro seu `.env` (ver `starter/adk/.env.example`).

No topo do seu `agent.py` (ou num arquivo de bootstrap separado), antes de rodar o agente:

```python
from langfuse import get_client
from openinference.instrumentation.google_adk import GoogleADKInstrumentor

langfuse = get_client()
langfuse.auth_check()          # falha rápido e claro se a chave estiver errada
GoogleADKInstrumentor().instrument()
```

**Importante, e é pegadinha real (confirmado na doc oficial, REFERENCIAS.md item 12):**
use `runner.run_async(...)`, não `runner.run(...)`. A versão síncrona roda numa thread de
fundo e o rastro do OpenTelemetry se perde — seu trace não aparece, e você vai jurar que o
Langfuse "não funciona" quando na verdade a chamada é que está errada.

```python
async for evento in runner.run_async(
    user_id=USER_ID, session_id=SESSION_ID, new_message=mensagem_usuario
):
    ...
```

## O que você tem que mostrar na tela (critério do Lab 2 e da clínica)

1. Rode o agente pelo menos uma vez.
2. Abra o projeto no Langfuse Cloud, aba **Traces**.
3. Ache o trace daquela execução — ele mostra a chamada ao modelo, o tempo de resposta, os
   tokens usados e (se você configurou preço) o custo estimado da própria plataforma.
4. **Print ou tela ao vivo, não invenção.** Trace inventado invalida a entrega, mesma regra
   de referência inventada.

## Onde isso conecta com o n8n de hoje

O n8n tem o próprio histórico (**aba Executions**) — grátis, já vem, mostra o payload de
cada node de cada execução. Isso já é uma forma honesta de observabilidade, e pra maioria
dos 75 alunos vai ser o suficiente. A diferença: **Executions do n8n mostra o que
aconteceu; um trace do Langfuse mostra o que aconteceu, quanto custou e quanto demorou,
lado a lado, com histórico buscável.** Se sua automação nunca precisou de mais que "abrir a
aba Executions e olhar", não force o Langfuse nela — ferramenta a mais sem necessidade é o
mesmo erro que forçar agente onde bastava cron e if.

## `[CONFIRMAR]`

Trazer o workflow do n8n pra dentro do mesmo projeto Langfuse (via API pública de
ingestion do Langfuse, chamada por um node HTTP Request do n8n) é possível em teoria mas
**não foi testado nesta sessão** — fica de exercício bônus, não de exigência do lab.
