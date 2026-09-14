# Guia do aluno — Semana 12: Agentes e automação (n8n + Google ADK)

Este guia acompanha os slides das duas aulas. Quando aparecer **MÃO NA MASSA** na tela, é
a sua vez: abra a seção correspondente aqui e faça junto.

Regra: terminal aberto do lado. Travou? Manda o erro no chat, segue em dupla.

---

## ANTES DE TUDO — duas chaves, dois avisos de custo

Você já atravessou a fronteira de ferramenta na Semana 11: existe conta que pode ser
cobrada. Hoje isso não muda — só ganha uma segunda chave.

| Chave | De onde | Pra quê hoje | Grátis? |
|---|---|---|---|
| `ANTHROPIC_API_KEY` | A mesma da Semana 11 | O node HTTP Request do n8n chama a API da Anthropic | Custa por token — tabela abaixo |
| `GOOGLE_API_KEY` | <https://aistudio.google.com/apikey> (Google AI Studio) | O agente em Google ADK | Tem tier gratuito |

**Preço do Claude (Haiku 4.5, usado no workflow de hoje), confirmado na Semana 11**
(`aula21-software-com-llm-dentro/REFERENCIAS.md`, item 5): **US$1/MTok entrada, US$5/MTok
saída.** Uma execução do workflow de hoje (~180 tokens de entrada, ~90 de saída) custa
**menos de US$0,001**. Rodar 300 vezes no mês custa menos de US$0,20.

**Preço do Gemini (usado no ADK): não confirmamos nesta semana.** `[CONFIRMAR]` antes de
rodar em volume — veja <https://ai.google.dev/gemini-api/docs/pricing>. Pra hoje, o
volume de teste (algumas dezenas de chamadas na aula) fica dentro do tier gratuito do
Google AI Studio.

**Limite de gasto automático:** existe um mecanismo oficial da Anthropic
(`Spend Limits API`, confirmado nesta semana — ver `REFERENCIAS.md` item 13), mas ele é
recurso de **organização (Claude Enterprise)**, não de conta individual. Pra você, na
prática, o controle é: acompanhar o painel de uso em <https://platform.claude.com>, e usar
a `starter/CUSTO-POR-EXECUCAO.csv` desta semana pra saber, antes de escalar, quanto uma
automação vai custar rodando de verdade.

### Setup antes da aula 23

1. **Docker Desktop instalado e aberto.** Baixe em
   <https://www.docker.com/products/docker-desktop/> se ainda não tem. No Windows, isso
   já resolve — não precisa configurar WSL à parte pra hoje.
2. **Suba o n8n local:**

   ```bash
   docker volume create n8n_data
   docker run -d --name n8n -p 5678:5678 \
     -e GENERIC_TIMEZONE="America/Sao_Paulo" -e TZ="America/Sao_Paulo" \
     -v n8n_data:/home/node/.n8n n8nio/n8n
   ```

   Abra <http://localhost:5678> — a primeira tela pede pra você criar seu usuário local
   (fica só na sua máquina, não é conta na nuvem).
3. **Gere a chave do Google AI Studio** (<https://aistudio.google.com/apikey>), grátis,
   sem cartão.
4. **Python 3.10+** instalado (`python3 --version`). Se não tiver, veja
   <https://www.python.org/downloads/>.
5. **Crie a conta no Langfuse** (plano Hobby, grátis, sem cartão):
   <https://cloud.langfuse.com> → crie um projeto → copie as duas chaves
   (`pk-lf-...` e `sk-lf-...`).

Leia `starter/CHECKLIST-SEGREDOS.md` da Semana 11
(`aula21-software-com-llm-dentro/starter/CHECKLIST-SEGREDOS.md`) de novo antes de mexer em
qualquer credencial hoje — a regra é a mesma, só muda onde a chave mora (dentro do n8n
vira uma **credencial**, não uma linha de `.env`).

---

## Terminal: qual usar (retomado do guia da Aula 1)

| Opção | Já vem pronto no Windows? | Roda os comandos deste guia sem adaptar? |
|---|---|---|
| **Git Bash** — recomendado | Não — instala com o [Git para Windows](https://git-scm.com/download/win) | Sim |
| **WSL (Ubuntu)** | Não — `wsl --install`, reiniciar | Sim |
| **PowerShell** | Sim | Os comandos `curl` funcionam; adapte barra de continuação de linha (`` ` `` em vez de `\`) |
| **CMD** | Sim | Evite hoje — os comandos com `\` no fim da linha não funcionam |

O Docker Desktop no Windows funciona a partir de qualquer um desses terminais — ele roda
por trás, não depende de qual shell você abriu.

---

## LAB 1 — o workflow n8n ponta a ponta (15 min)

1. No n8n (`http://localhost:5678`), **Workflows → Import from File**, selecione
   `starter/n8n/workflow-classificador-leads.json`.
2. Crie a credencial: **Credentials → New → Header Auth**. Nome do header: `x-api-key`.
   Valor: sua `ANTHROPIC_API_KEY` (a mesma de sempre).
3. Abra o node **3. Classificar com Claude (HTTP Request)** e selecione a credencial que
   você criou.
4. **Ative o workflow** (toggle no topo direito da tela). Sem isso, a URL de produção não
   responde — é o erro proposital de hoje, ver abaixo.
5. Copie a URL de produção do node **1. Gatilho real (Webhook)** e dispare:

   ```bash
   curl -X POST http://localhost:5678/webhook/lead-pda \
     -H "Content-Type: application/json" \
     -d '{"nome":"Marcos","mensagem":"Preciso de um site pra minha oficina até sexta, quanto custa?","canal":"whatsapp"}'
   ```

**Critério de pronto:** a resposta traz `urgencia`, `categoria`, `resposta_sugerida` e
`custo_execucao_usd` preenchidos, sem erro.

**Se não respondeu nada (erro 404):** você provavelmente disparou a URL de **teste**
(a que aparece quando você clica em "Listen for test event"), que só escuta uma vez, ou o
workflow não está ativo. Use a URL de **produção** (`/webhook/...`, sem `/webhook-test/`)
e confirme que o toggle **Active** está ligado.

---

## LAB 2 — instrumentar seu projeto e decidir (25 min)

Este lab não é sobre o workflow de exemplo — é sobre **o seu projeto**, o mesmo desde a
Semana 2.

1. Abra `starter/PROJETO-FINAL.md` — leia a seção "O que você vai entregar" uma vez.
2. Responda, por escrito, num arquivo `DECISAO-AGENTE.md` no seu repo: seu projeto cai em
   qual dos 3 ramos (cron+if / prompt simples / agente de verdade)? Uma frase de
   justificativa de verdade, não genérica.
3. **Se a resposta envolve n8n ou ADK:**
   - n8n: adapte o `system` do node HTTP Request pro seu domínio e rode uma execução real.
   - ADK: siga `starter/adk/README-ADK.md` pra instalar, rodar, e instrumentar com
     Langfuse (`starter/GUIA-TRACING.md`).
4. Preencha uma linha da `starter/CUSTO-POR-EXECUCAO.csv` com números **do seu projeto**
   — não copie os números de exemplo.
5. **Se a resposta é "nenhum dos dois resolve"**, escreva no mesmo `DECISAO-AGENTE.md` o
   que um cron + um if fariam no lugar. Essa é uma entrega completa também.

**Critério de pronto:** `DECISAO-AGENTE.md` existe com justificativa real, e (se aplicável)
uma execução real mostrada — trace no Langfuse ou aba Executions do n8n com um caso
concreto.

---

## Troubleshooting

| Sintoma | Causa provável | O que fazer |
|---|---|---|
| n8n não abre em `localhost:5678` | Container não subiu, ou porta ocupada | `docker ps` pra ver se está rodando; troque `-p 5678:5678` por `-p 5679:5678` se a porta estiver ocupada |
| Webhook retorna 404 | URL de teste em vez de produção, ou workflow inativo | Use a URL sem `-test`, confirme o toggle **Active** |
| Node HTTP Request retorna `401` | Credencial errada ou não selecionada no node | Confira o valor colado no Header Auth, sem espaço nas pontas |
| `adk: command not found` | `pip install google-adk` não terminou, ou o ambiente virtual não está ativo | `pip show google-adk`; se vazio, reinstale |
| `adk run` trava em "model not found" | Nome de modelo errado (o bug proposital de hoje, ou digitado errado) | Confira contra `starter/adk/agente_minimo/agent.py` e a doc oficial (REFERENCIAS.md item 8) |
| Trace não aparece no Langfuse | Você chamou `runner.run()` em vez de `runner.run_async()` | Troque pra `run_async()` — a versão síncrona perde o contexto do OpenTelemetry (REFERENCIAS.md item 12) |
| `langfuse.auth_check()` falha | Chaves erradas no `.env`, ou `LANGFUSE_BASE_URL` errado | Confira `pk-lf-...`/`sk-lf-...` copiados sem espaço; `LANGFUSE_BASE_URL=https://cloud.langfuse.com` |

## O que continua de pé

O app da Semana 11 no Render **não muda hoje** — ele só ganha uma camada de custo e
tracing por cima. Se ele estiver dormindo (spin-down de 15 min sem tráfego), acesse a URL
2–3 minutos antes de precisar dele.
