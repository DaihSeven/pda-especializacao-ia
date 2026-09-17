# aula11-diagnostico-documentos-rpi

Semana 6 — **Diagnóstico, documentos e RPI**
Especialização em Desenvolvimento com IA · Programadores do Amanhã · Turma 2
**Módulo 2 — Diagnóstico, documentos e decisões de arquitetura** `[CONFIRMAR numeração/título do módulo com a coordenação — ver PACOTE.md, seção 8]`

Nas últimas semanas você deu memória ao agente (`CLAUDE.md`, skills), deu acesso a
sistemas externos (MCP) e aprendeu a nomear fronteira de domínio (DDD estratégico,
semana 5). Esta semana você para de deixar o agente decidir sozinho **o que construir**.
Você aprende a separar três perguntas que a maioria das pessoas resolve numa tacada só,
mal: *qual é o problema de verdade?*, *o que eu vou fazer sobre ele?*, *como eu construo
isso?* — e a **nunca deixar o agente responder as três na mesma respiração**.

> Faz parte do repo do curso: [`pda-especializacao-ia`](../). Cada pasta na raiz é uma aula.

## Como usar

1. **Fork** o repositório `pda-especializacao-ia` inteiro na sua conta (se ainda não fez).
2. Clone o seu fork e entre nesta pasta:

   ```bash
   git clone https://github.com/<seu-usuario>/pda-especializacao-ia.git
   cd pda-especializacao-ia/aula11-diagnostico-documentos-rpi
   ```

3. Durante a aula 1, siga o [`GUIA-DO-ALUNO.md`](./GUIA-DO-ALUNO.md) — ele acompanha os
   slides, sessão por sessão.
4. Na aula 2, você e a turma constroem em cima do board de Excalidraw
   (`excalidraw/mapa-da-dor.excalidraw`) — a facilitadora projeta, vocês preenchem.
5. Depois da aula, faça a [`ENTREGAVEL.md`](./ENTREGAVEL.md) (entrega mínima ou completa).

## O que tem aqui

```
.
|-- README.md                       <- este arquivo
|-- GUIA-DO-ALUNO.md                <- passo a passo das 3 sessões de agente + troubleshooting
|-- ENTREGAVEL.md                   <- a atividade de fixação + rubrica
|-- starter/
|   |-- ADR-template.md             <- template de Architecture Decision Record (Nygard)
|   |-- SPEC-ENXUTA-template.md     <- o documento único (substitui PRD + Design Doc)
|   |-- EARS-BDD-template.md        <- os 5 padrões EARS + 3 cenários BDD, com exemplo preenchido
|   |-- RESEARCH-template.md        <- o artefato da sessão de Research (a dor, nomeada)
|   `-- prompts-rpi.md              <- os 3 prompts prontos (Research / Plan / Implement), pra copiar e colar
`-- excalidraw/
    `-- mapa-da-dor.excalidraw      <- o board da aula 2 (abra em excalidraw.com ou no app)
```

## Por que esta semana existe

Documento ruim não é documento longo nem documento curto — é documento que resolve o
problema errado, escrito bonito. Um agente escreve ADR, spec e critério de aceite tão bem
quanto escreve código: rápido, plausível, e sem saber se aquilo corresponde à dor real do
seu negócio. Esta semana treina exatamente o ponto onde você é insubstituível: **transformar
reclamação em critério verificável**. O agente não sabe se "o cliente reclama que demora"
virou o critério certo. Só quem ouviu o cliente sabe.

## Pré-requisitos

- Ambiente das aulas anteriores funcional (Node, Claude Code, git).
- **Semana 5 concluída**: você precisa ter nomeado pelo menos um bounded context do seu
  projeto e ter a linguagem ubíqua dele escrita em algum lugar (o board da semana 5,
  `board-bounded-contexts.excalidraw`, ou o que você registrou a partir dele) — esta semana
  escreve documentos *nessa* linguagem, não inventa vocabulário novo.
- **Bloco da Alura desta semana concluído** (ver `PACOTE.md`, seção 1) — é pré-requisito
  de entrada na aula 2, como em todas as semanas.
- Seu parágrafo para o dono do negócio da semana 2, à mão — ele é o ponto de partida da
  sessão de Research.

## As três sessões que você não pode misturar

**Research → Plan → Implement, em três sessões de agente separadas**, cada uma
começando com contexto limpo e recebendo só o artefato da anterior — nunca a conversa
inteira. É o ponto mecânico da semana e o mais fácil de errar (a tentação de "já que o
agente já pesquisou, deixa ele já implementar" é exatamente o erro).

| Sessão | Pergunta que ela responde | Artefato que produz | O que ela NÃO faz |
|---|---|---|---|
| **1. Research** | Qual é a dor de verdade, de quem, e por quê? | `RESEARCH.md` (a dor, na linguagem de quem sente) | Não escreve código. Não propõe solução. |
| **2. Plan** | O que vamos construir, e o que fica de fora? | ADR + o documento único enxuto (contexto, decisão, 5 EARS, 3 BDD) | Não abre editor de código. Só lê o `RESEARCH.md`. |
| **3. Implement** | Como isso vira código que passa nos critérios? | O código + os testes dos cenários BDD | Não reabre a pergunta "isso é o problema certo?" — essa pergunta já foi respondida. |

Você vai ver ao vivo, na aula 1, o contraste entre fazer isso numa sessão só (o contexto
de pesquisa vaza pro plano, o plano vira uma descrição do código que o agente já
rascunhou sem querer) e fazer em três — a mesma distinção de **Smart Zone / Dumb Zone**
que você já viu na semana 2, aplicada à qualidade da decisão, não só à velocidade da
resposta.

Origem do fluxo, citada e não inventada: Dex Horthy (HumanLayer), *Advanced Context
Engineering for Coding Agents*, 29/ago/2025 — e a mesma recomendação (sessão nova pra
implementar depois de um spec escrito) está na documentação oficial do Claude Code. Ver
`REFERENCIAS.md` #1 e #2.

## Escala do documento vs. escala do problema

**PRD de 12 páginas pra um CRUD é medo disfarçado de processo.** Documento tem o
tamanho da decisão, não o tamanho do seu medo de errar. Régua:

| Escala do problema | Exemplo do catálogo | O que você escreve |
|---|---|---|
| **P** — 1 tela, reversível num commit | Domínio 1: adicionar filtro de busca por habilidade na vitrine de perfis | ADR curta (~15 linhas), sem spec separada |
| **M** — cruza confiança entre pessoas/times, ou muda um contrato de dado | Domínio 4: mudar o peso do checklist de correção pra valorizar teste automatizado | ADR completa + o documento único enxuto (1 página: contexto, decisão, 5 EARS, 3 BDD) |
| **G** — mexe em dado sensível/dinheiro, ou é caro de reverter | Domínio 2: trocar guardar lead de cliente de planilha por banco de dados | ADR completa + documento enxuto + sessão de Research mais longa, com mais de uma pessoa ouvida |

Esta semana você não escreve PRD e Design Doc como dois arquivos separados. **Corta**: os
dois viram **um documento só, enxuto** — `starter/SPEC-ENXUTA-template.md`.

## ADR: a decisão, registrada

Uma ADR (Architecture Decision Record) não documenta como o código funciona — documenta
**por que você escolheu X e não Y**, pra quem ler daqui a 6 meses não repetir a mesma
discussão. Formato: o de Michael Nygard (2011), o mais curto que existe: Título, Status,
Contexto, Decisão, Consequências. Template em `starter/ADR-template.md`.

## EARS: critério de aceite que não é vago

EARS (Easy Approach to Requirements Syntax) vem de aeronáutica — Alistair Mavin e equipe
na Rolls-Royce, publicado em 2009, criado pra escrever requisito de sistema crítico sem
ambiguidade. Cinco padrões, cada um com gabarito de frase fixo (ver
`starter/EARS-BDD-template.md`). O mesmo formato aparece hoje nas specs geradas por
ferramentas como o Kiro (AWS) — ver `REFERENCIAS.md` #9. A semana 7 (Spec-Driven
Development) parte do que você escrever aqui.

## BDD: o cenário que vira teste

Dado / Quando / Então — formato de Dan North, *Introducing BDD* (2006). Os 3 cenários que
você escreve nesta semana **viram teste de verdade na semana 8**. Escreva em Gherkin de
propósito (ver template) — é esse arquivo que a semana 8 vai rodar, não reescrever.

## O julgamento que só você tem

O agente escreve EARS e BDD bonitos sobre qualquer coisa — inclusive sobre um problema
que não existe. **Só você sabe se o critério corresponde à dor real** que apareceu na
sessão de Research. Esse é o ponto em que o lab te obriga a decidir, não o agente (ver
`PACOTE.md`, seção 7, pra como isso é forçado a acontecer).

## Regra da casa

> **Você é responsável por cada linha que commita.**
> O agente executa. Você especifica, lê o diff, roda os testes e decide.

Nesta semana, a linha que você é responsável por não deixar passar não é uma linha de
código — é uma linha de EARS que soa bem e não bate com nada que ninguém falou.
