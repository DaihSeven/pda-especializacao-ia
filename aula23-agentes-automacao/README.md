# aula23-agentes-automacao

Semana 12 — **Agentes e automação** (n8n + Google ADK) + AIOps 2 (custo por execução,
tracing, observabilidade) + abertura do Projeto Final
Especialização em Desenvolvimento com IA · Programadores do Amanhã · Turma 2

> **O deploy da Semana 11 continua de pé.** Ninguém recria o app do Render — esta semana
> instrumenta ele: custo por execução e tracing. Se o seu app não está mais respondendo,
> resolva isso antes de mais nada (ver `GUIA-DO-ALUNO.md`).

Vocês já colocaram um modelo dentro de um loop escrito à mão. Esta semana o loop ganha
duas formas novas: visual, no n8n — a ferramenta que a maioria de vocês vai usar pra
cobrar a primeira automação de verdade — e em código, no Google ADK, pra quando essa
automação precisa ser versionada, testada e reimplantada sem sustos. O julgamento que
decide tudo: **"O agente mais caro é o que não precisava existir."**

## Como usar

1. Você já tem um repositório próprio do projeto, criado na Semana 2 — é lá que o
   trabalho desta semana entra, não neste fork.
2. Instale o Docker Desktop e suba o n8n local (`GUIA-DO-ALUNO.md`, primeira seção) **antes**
   da aula 23 — a primeira baixada da imagem é lenta.
3. Gere sua chave do Google AI Studio (grátis) e crie sua conta Langfuse (Hobby, grátis)
   antes da aula também — os dois passos levam menos de 5 minutos, mas travam a clínica
   se deixados pra última hora.
4. Durante a aula 23, siga o [`GUIA-DO-ALUNO.md`](./GUIA-DO-ALUNO.md) lab por lab.
5. Na aula 24 (clínica rotativa + demo relâmpago), você constrói em cima do que já fez —
   sem conteúdo novo, é laboratório e debug ao vivo.
6. Depois das duas aulas, entregue conforme [`ENTREGAVEL.md`](./ENTREGAVEL.md) — e abra
   [`starter/PROJETO-FINAL.md`](./starter/PROJETO-FINAL.md), porque o Gate 1 fecha no fim
   desta semana.

## O que tem aqui

```
.
|-- README.md                     <- este arquivo
|-- GUIA-DO-ALUNO.md               <- setup das duas chaves, passo a passo dos labs, troubleshooting
|-- ENTREGAVEL.md                  <- a atividade (mínima + completa) e a rubrica
|-- REFERENCIAS.md                 <- os 16 links verificados desta semana
`-- starter/
    |-- n8n/
    |   |-- workflow-classificador-leads.json  <- importe direto no n8n
    |   `-- README-WORKFLOW.md                  <- o que cada node faz, como importar e disparar
    |-- adk/
    |   |-- requirements.txt                    <- google-adk + langfuse + instrumentação
    |   |-- .env.example                        <- GOOGLE_API_KEY + chaves do Langfuse
    |   |-- README-ADK.md                       <- o que se ganha/perde trocando n8n por código
    |   `-- agente_minimo/
    |       |-- agent.py                        <- a mesma automação, em Python
    |       |-- __init__.py
    |       `-- casos.test.json                 <- eval ilustrativo (formato a confirmar antes de escalar)
    |-- CUSTO-POR-EXECUCAO.csv                  <- a planilha: tokens x preço x volume x margem
    |-- GUIA-TRACING.md                         <- Langfuse passo a passo, com a pegadinha do run_async
    `-- PROJETO-FINAL.md                        <- enunciado, critérios, gates e prazo
```

## Pré-requisitos

- Tudo que a Semana 11 já exigia (Node 20+, chave da Anthropic configurada, app no Render
  respondendo)
- **Docker Desktop instalado e rodando** — específico desta semana, pra subir o n8n local
- **Python 3.10+** — específico desta semana, pro Google ADK
- **Chave do Google AI Studio** (grátis, sem cartão) — <https://aistudio.google.com/apikey>
- **Conta Langfuse (plano Hobby, grátis, sem cartão)** — <https://cloud.langfuse.com>
- Bloco do curso Alura **Automação de processos com n8n: integração de APIs REST**
  concluído (ver `PACOTE.md` — pré-requisito de entrada no lab da aula 24, não é opcional)

## Regra da casa (retomada da Aula 1)

> **Você é responsável por cada linha que commita — e agora também por cada workflow que
> ativa.** Um node de automação que decide sozinho, sem você ter revisado a lógica, é o
> mesmo problema de um agente sem supervisão: só muda a interface.

## Fio condutor da semana

**"O agente mais caro é o que não precisava existir."** — repetido nas transições dos
slides e no roteiro. É a mesma disciplina de "especifique → leia o que voltou → rejeite o
que não serve" (Semana 2), aplicada agora à decisão de **usar ou não usar** uma ferramenta
de automação, não só a como usá-la.
