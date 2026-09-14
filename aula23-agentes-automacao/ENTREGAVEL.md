# 🤖 Semana 12 — Agentes e automação: Atividade Prática (Entregável)

**Módulo 3 — AI Orchestrator / Agentes**

|  |  |
| :---- | :---- |
| **Material da aula** | `aula23-agentes-automacao/` no seu fork de pda-especializacao-ia |
| **Repositório do projeto** | seu repo próprio (criado na Semana 2) |
| **Formulário de entrega** | https://forms.gle/PSd6i65g44GwBMgq6 |
| **Prazo de entrega** | Antes da aula 1 da semana 13 |

Duas entregas. A **mínima** todo mundo consegue no fim da aula 24. A **completa** cumpre o
Gate 1 do Projeto Final por inteiro.

---

## O que você vai entregar

Uma automação real conectada ao **seu** projeto (qualquer domínio do catálogo), com um
gatilho de verdade — em n8n, em Google ADK, ou a decisão documentada de que **nenhum dos
dois** resolve o seu caso e um cron + um if bastam. Junto: quanto custa uma execução, em
dólar, e pelo menos um jeito real de observar o que aconteceu (trace no Langfuse, ou um
caso concreto da aba Executions do n8n).

## Por que essa atividade existe

Prova que você sabe fazer a distinção que a semana inteira treinou: **quando um problema
merece um agente, e quando ele só merece uma regra fixa.** Um aluno que enfia n8n ou ADK
em tudo, sem pensar, não prova essa capacidade — prova só que sabe copiar um workflow.
O que esta entrega comprova especificamente é que você sabe **nomear o critério que te
fez escolher** (repetição + regra clara → cron; decisão pontual → prompt simples; decide e
age em vários passos → agente) e **quanto isso custa rodando de verdade**, não só uma vez
na demo. Se esta entrega estivesse errada, o sintoma seria: uma automação bonita que
ninguém sabe dizer quanto custaria rodar 1000 vezes, ou um `DECISAO-AGENTE.md` que
poderia ter sido copiado e colado pra qualquer projeto da turma.

## Pré-requisitos

- Bloco do curso Alura **Automação de processos com n8n: integração de APIs REST** (4h)
  concluído (ver `PACOTE.md`) — sem isso você chega na aula sem saber ler o payload de uma
  chamada HTTP dentro do n8n, e trava a própria dupla.
- `CHECKLIST-SEGREDOS.md` da Semana 11 (`aula21-software-com-llm-dentro/starter/
  CHECKLIST-SEGREDOS.md`) revisado — a regra vale de novo, com uma credencial a mais.
- Docker Desktop instalado e rodando.
- App da Semana 11 ainda respondendo no Render (não recrie — instrumente o que já existe).

## Passo a passo

1. Suba o n8n local (`docker run`, ver `GUIA-DO-ALUNO.md`) e importe
   `starter/n8n/workflow-classificador-leads.json`.
2. Adapte o `system` e a tool do node HTTP Request pro **seu** domínio (troque
   `classificar_mensagem` pela decisão que faz sentido pro seu projeto).
3. Crie a credencial Header Auth com sua `ANTHROPIC_API_KEY`, ative o workflow, dispare
   com um `curl` real e confira a resposta.
4. Escreva `DECISAO-AGENTE.md` no seu repo: qual dos 3 ramos (cron+if / prompt simples /
   agente) seu projeto precisa, com justificativa real — isso é o Gate 1 do Projeto Final
   (`starter/PROJETO-FINAL.md`).
5. **Se sua decisão envolve ADK:** siga `starter/adk/README-ADK.md`, rode o agente local,
   e instrumente com Langfuse seguindo `starter/GUIA-TRACING.md`.
6. Preencha uma linha da `starter/CUSTO-POR-EXECUCAO.csv` com números reais do seu
   projeto — tokens de uma execução de verdade, não o exemplo.
7. Mostre uma observação real: um trace no Langfuse, ou um caso concreto (com print ou
   tela ao vivo) da aba **Executions** do n8n.
8. Preencha o parágrafo pro dono do negócio (veja o exemplo modelo abaixo antes de
   escrever o seu).

---

## O parágrafo para o dono do negócio

**Enunciado da tarefa:** escreva de 3 a 5 frases, sem jargão técnico, explicando pra
alguém que não programa **o que a automação faz** e **por que ela custa o que custa** —
o suficiente pra essa pessoa entender se vale a pena pagar por ela.

**Exemplo modelo — domínio 2 (Captação de clientes e automações para freelancers da PDA):**

> Hoje, quando alguém manda mensagem perguntando sobre um serviço, alguém do time precisa
> ler, decidir se é urgente, e responder — e isso demora, principalmente fora do horário
> comercial. Esta automação lê a mensagem assim que ela chega, decide sozinha se é
> orçamento, dúvida ou reclamação, sugere uma resposta, e só chama uma pessoa de verdade
> quando o caso é urgente. Cada mensagem processada custa menos de um centavo de real —
> mesmo respondendo centenas por mês, o custo da automação é uma fração do tempo que um
> humano gastaria lendo e decidindo cada uma. A diferença entre isso e "só usar o
> ChatGPT" é que aqui existe um histórico de cada execução: se um cliente reclamar que a
> resposta automática saiu errada, dá pra abrir o registro daquela execução específica e
> ver exatamente o que aconteceu.

## Checklist antes de entregar

- [ ] O workflow n8n roda de ponta a ponta (URL de produção, workflow ativo)
- [ ] Nenhuma chave aparece hardcoded em nenhum node — sempre credencial
- [ ] `DECISAO-AGENTE.md` existe, com justificativa específica do **seu** projeto
- [ ] `CUSTO-POR-EXECUCAO.csv` tem uma linha preenchida com números reais, não copiados
- [ ] Existe um trace real no Langfuse **ou** um caso concreto da aba Executions do n8n
      (não vale "funcionou, confia")
- [ ] O parágrafo pro dono do negócio está no README do seu projeto
- [ ] Você sabe explicar, sem olhar o material, por que escolheu o ramo que escolheu

---

## Entrega mínima (o que todo mundo consegue até o fim da aula 24)

- Workflow n8n importado, rodando localmente, disparado pelo menos uma vez com sucesso
- `DECISAO-AGENTE.md` com uma frase de justificativa (mesmo que curta)
- Uma linha da `CUSTO-POR-EXECUCAO.csv` preenchida, mesmo que com números aproximados

## Entrega completa (tudo da mínima, mais)

- Workflow adaptado pro **seu** domínio, não o exemplo genérico
- Se aplicável, agente ADK rodando e instrumentado com Langfuse, com trace real mostrado
- O parágrafo pro dono do negócio no README do projeto

---

## Rubrica

| Critério | Peso | O que a facilitadora olha |
|---|---|---|
| Automação (ou decisão) funcional | 30% | Workflow roda de ponta a ponta, ou `DECISAO-AGENTE.md` justifica bem a ausência de automação |
| Decisão de arquitetura justificada | 25% | A frase de justificativa é específica do projeto, não genérica; usa a árvore cron+if/prompt/agente corretamente |
| Custo por execução coerente | 20% | Número calculado a partir de tokens reais e preço confirmado, não chutado |
| Observabilidade real mostrada | 15% | Trace real ou caso concreto do histórico de execuções, nunca inventado |
| Parágrafo pro dono do negócio | 10% | Sem jargão; explica valor e custo juntos |

O que **não** pontua: um workflow ou agente bonito sem ninguém saber quanto custa rodar
ele. O que pontua mais: uma decisão de **não** automatizar, bem argumentada com números.

---

## Bônus (sem peso na nota, com peso na vida)

- Calcule o custo da mesma automação trocando Haiku 4.5 por Sonnet 5 — quanto a conta
  muda no fim do mês, no seu volume estimado de execuções?
- Force o erro proposital da aula (URL de teste do webhook, ou nome de modelo errado no
  ADK) no seu próprio projeto e documente, em uma frase, o que a mensagem de erro disse —
  te prepara pra quando acontecer sem plateia.
