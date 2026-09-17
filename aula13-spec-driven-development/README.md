# aula13-spec-driven-development

Semana 7 — **Spec-Driven Development: da spec pra tarefa executável**
Especialização em Desenvolvimento com IA · Programadores do Amanhã · Turma 2

Na semana 5 vocês fatiaram o domínio do projeto em bounded contexts. Na semana 6 vocês
transformaram a dor real do negócio num documento único enxuto — requisitos em EARS,
3 cenários em BDD, decisão registrada em ADR. Essa semana pega esse documento e faz a
pergunta que ele ainda não responde: **quem executa isso, e como eu sei que executou
certo?** Spec-Driven Development é o nome do conjunto de práticas que transforma spec em
tarefa, e tarefa em código verificado — não "IA escreve o que acha que você quis dizer".

> Faz parte do repo do curso: [`pda-especializacao-ia`](../). Cada pasta na raiz é uma aula.

## Como usar

1. **Fork** o repositório `pda-especializacao-ia` inteiro na sua conta (se ainda não fez).
2. Clone o seu fork e entre nesta pasta:

   ```bash
   git clone https://github.com/<seu-usuario>/pda-especializacao-ia.git
   cd pda-especializacao-ia/aula13-spec-driven-development
   ```

3. Durante a aula, siga o [`GUIA-DO-ALUNO.md`](./GUIA-DO-ALUNO.md) — ele acompanha os
   slides, lab por lab, e tem o passo a passo de instalação do Spec Kit.
4. Depois da aula, faça a [`ENTREGAVEL.md`](./ENTREGAVEL.md) (entrega mínima ou completa).

## O que tem aqui

```
.
|-- README.md                          <- este arquivo
|-- GUIA-DO-ALUNO.md                   <- passo a passo dos labs + setup do Spec Kit + troubleshooting
|-- ENTREGAVEL.md                      <- a atividade de fixação + rubrica
|-- starter/
|   |-- TASKS-TEMPLATE.md              <- o molde de task atômica com gate que você preenche
|   |-- TASK-FRACA-VS-FORTE.md         <- exemplos lado a lado, por domínio do catálogo
|   |-- REGISTRO-TAXA-DE-ACERTO.csv    <- a planilha onde você registra cada tentativa
|   |-- REGISTRO-TAXA-DE-ACERTO.md     <- como preencher a planilha sem trapacear
|   `-- exemplo-taxa-facilitadora.csv  <- a taxa da facilitadora, preenchida, mostrada em aula
```

## Por que esta semana existe

Você já sabe pedir pro agente construir alguma coisa — isso desde a aula 1. O que falta é
saber **quando parar de confiar na palavra dele**. "Terminei" não é um fato, é uma
alegação. Esta semana instala um hábito: toda tarefa que você dá pro agente carrega junto
um comando que responde sim ou não sobre ela ter sido feita — sem esse comando, não é
tarefa, é desejo. E quando o comando falha três vezes seguidas com a mesma tarefa, você
aprende a desconfiar da spec antes de desconfiar do agente.

## Pré-requisitos

- Ambiente das semanas anteriores funcional (Node, git, Claude Code).
- **O documento RPI da semana 6** (`aula11-diagnostico-documentos-rpi`) do seu projeto:
  o documento único enxuto com os 5 critérios em EARS e os 3 cenários em BDD. Esta semana
  não recria esse documento — ela o **consome**. Se você não tem esse documento pronto e
  revisado, resolva isso antes da aula 1 (fale com a facilitadora).
- **Bloco "Spec-Driven Development" da Alura concluído** — é pré-requisito de entrada no
  lab da aula 2 (ver `PACOTE.md` para o mapeamento completo).
- **`uv` instalado** (gerenciador de pacotes Python da Astral) — é dependência nova, único
  jeito de instalar o Spec Kit hoje. Não precisa saber Python: é um binário, um comando.
  Passo a passo completo no `GUIA-DO-ALUNO.md`.

## O panorama: quatro jeitos de fazer Spec-Driven Development

Existem hoje pelo menos quatro ferramentas/frameworks nomeados que implementam a mesma
ideia — spec formal antes de código, tarefas derivadas da spec, verificação antes de
seguir em frente — com pesos diferentes de processo. Hoje você **usa um de verdade**
(Spec Kit) e conhece os outros três de nome, pra reconhecer quando alguém citar:

| Framework | Peso | Uma linha |
|---|---|---|
| **[Spec Kit](https://github.com/github/spec-kit)** (GitHub) | Pesado, opinativo | O que você usa hoje: `constitution → specify → clarify → plan → tasks → implement → converge`, um comando por fase. |
| **[OpenSpec](https://github.com/Fission-AI/OpenSpec)** | Leve | Markdown puro, 4 comandos (`explore/propose/apply/archive`), pensado pra iterar rápido em vez de seguir fase rígida. |
| **[TLC — tlc-spec-driven](https://github.com/tech-leads-club/agent-skills)** (Tech Leads Club) | Adaptativo | Especifica em **EARS** (a mesma notação do seu RPI da semana 6) e pula fases quando a mudança é pequena. |
| **[Superpowers](https://github.com/obra/superpowers)** (Jesse Vincent) | Pesado, disciplinado | Metodologia inteira de skills obrigatórias — TDD RED-GREEN-REFACTOR incluído, não é opcional. |

Nenhum dos quatro é "o certo". São pesos diferentes pra times diferentes. O que os quatro
têm em comum — e é o que fica com você depois de hoje mesmo se nunca mais abrir o Spec
Kit — é o conceito central da aula:

## Task atômica com gate

> **Uma tarefa é atômica quando o agente termina e existe um comando que responde sim ou
> não sobre ela ter sido feita.** Sem esse comando, não é tarefa — é desejo.

Não é sobre o tamanho da tarefa. É sobre existir, ou não, um jeito objetivo — que não seja
"deixa eu ler o código e sentir se está bom" — de saber se ela passou. `npm test -- x.test.js`
é um gate. "Deixar a busca mais rápida" não é.

## Regra da casa (continua valendo)

> **Você é responsável por cada linha que commita.**
> O agente executa. Você especifica, lê o diff, roda os testes e decide.

Esta semana ganha um adendo:

> **Quando a mesma tarefa falha três vezes seguidas, o problema geralmente não é o
> agente — é a spec.** Reescrever a tarefa é trabalho de engenharia. Rodar a quarta vez
> idêntica esperando um resultado diferente não é.

## Referências

Lista completa e verificada em [`REFERENCIAS.md`](./REFERENCIAS.md). As três centrais:

- Spec Kit — instalação e comandos: <https://github.github.com/spec-kit/installation>
- Quickstart oficial (fluxo completo de 9 comandos): <https://github.github.com/spec-kit/quickstart>
- Anthropic, sobre critério binário de conclusão em agentes de execução longa:
  <https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents>
