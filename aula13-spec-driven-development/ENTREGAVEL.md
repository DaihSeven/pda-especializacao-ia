# 🤖 Semana 7 — Spec-Driven Development: Atividade Prática (Entregável)

**Módulo 2 — AI Orchestrator / Contexto**

|  |  |
| :---- | :---- |
| **Material da aula** | `aula13-spec-driven-development/` no seu fork de pda-especializacao-ia |
| **Repositório do projeto** | seu repositório próprio (criado na semana 2) |
| **Formulário de entrega** | https://forms.gle/PSd6i65g44GwBMgq6 |
| **Prazo de entrega** | Antes da aula 1 da semana 8 |

## O que você vai entregar

1. **3 specs executadas** — 3 tasks atômicas derivadas do seu documento RPI da semana 6,
   cada uma com gate escrito **antes** de rodar o agente, e o gate verde ao final (não
   precisa ser na primeira tentativa — precisa estar verde na entrega).
2. **O registro completo de taxa de acerto de primeira tentativa** dessas 3 tasks, no
   formato de `starter/REGISTRO-TAXA-DE-ACERTO.csv`, incluindo as tentativas que
   falharam.
3. **`constitution.md` e `tasks.md`** gerados pelo Spec Kit, commitados.

## Por que essa atividade existe

Ela comprova uma capacidade específica: **transformar uma spec em algo que você pode
verificar sem confiar na palavra do agente**. Instalar o Spec Kit e gerar `tasks.md` é
mecânico — o agente faz isso sozinho se você pedir, e não é o que estamos medindo. O que
só você decide é **o que conta como prova de que a task terminou**, e é o registro de
tentativas que prova se essa decisão aconteceu de verdade ou só na sua cabeça. Se essa
entrega estivesse errada, ela mostraria uma de duas coisas: as tasks não tinham gate
real (você escreveu o gate depois de ver o resultado, pra bater com o que já tinha
acontecido), ou o registro esconde tentativas que falharam pra parecer mais competente.

## Pré-requisitos

- Bloco "Spec-Driven Development" da Alura concluído.
- Documento RPI da semana 6 (`aula11-diagnostico-documentos-rpi`) pronto e revisado —
  sem ele você não tem entrada válida pro `/speckit.specify`.
- `uv` e Specify CLI instalados (ver `GUIA-DO-ALUNO.md`).

## Passo a passo

1. `specify init --here --ai claude` na pasta do seu projeto.
2. `/speckit.constitution` com 2-3 regras não-negociáveis do seu domínio.
3. `/speckit.specify` colando o conteúdo do seu documento RPI da semana 6.
4. `/speckit.plan` com a stack do seu projeto.
5. `/speckit.tasks` — gera `tasks.md`.
6. Escolha 3 tasks. Para cada uma, preencha `starter/TASKS-TEMPLATE.md`: o quê, gate
   (comando exato), critério de aceite extra (checklist de código ruim gerado por IA da
   semana 5).
7. Para cada task: rode o agente (`/speckit.implement` ou pedido direto), depois **você**
   roda o gate — nunca aceite o relato do agente como prova.
8. Registre cada tentativa em `starter/REGISTRO-TAXA-DE-ACERTO.csv`, seguindo a regra
   anti-trapaça de `starter/REGISTRO-TAXA-DE-ACERTO.md`.
9. Se uma task falhar 3 vezes seguidas sem mudar, pare, reescreva a task (isso vira uma
   linha nova na planilha, não uma edição da antiga), e registre por quê.
10. Calcule sua taxa de acerto de primeira tentativa (tasks que passaram na tentativa 1
    ÷ total de tasks tentadas) e escreva-a no topo do CSV.
11. Commit, push, PR se for fazer a entrega completa.

## O parágrafo para o dono do negócio

**Enunciado:** escreva de 3 a 5 frases, sem jargão técnico, explicando pra alguém que não
programa: o que você pediu pro assistente de IA construir, como você soube que ele
realmente construiu (não só que ele *disse* que construiu), e o que aconteceu quando ele
errou.

**Exemplo modelo** (domínio 1 do catálogo — Listagem de perfis de alunos da PDA):

> "Pedimos ao assistente de IA para adicionar um filtro de busca por habilidade na
> vitrine de perfis dos alunos. Antes de pedir, definimos exatamente como saberíamos se
> ele tinha feito certo: buscar por 'React' deveria trazer só quem tem React no perfil, e
> buscar por uma habilidade que ninguém tem deveria trazer uma lista vazia, não um erro.
> Na primeira tentativa, o filtro funcionou pra habilidades existentes mas quebrou quando
> a busca vinha vazia — ele mostrou todos os perfis errados. Como já tínhamos esse teste
> pronto antes de pedir, percebemos o erro na hora, sem precisar confiar na palavra do
> assistente de que 'está pronto'. Ele corrigiu na segunda tentativa, e dessa vez o teste
> confirmou."

## Checklist antes de entregar

- [ ] `constitution.md` e `tasks.md` gerados pelo Spec Kit, commitados
- [ ] 3 tasks com gate escrito em `TASKS-TEMPLATE.md`, **antes** de qualquer execução
- [ ] As 3 tasks com gate verde na entrega (retentativas registradas, não escondidas)
- [ ] `REGISTRO-TAXA-DE-ACERTO.csv` preenchido, com a taxa calculada no topo
- [ ] Pelo menos uma linha do registro cita o checklist de código ruim gerado por IA da
      semana 5 como parte do critério de aceite (não só o gate técnico)
- [ ] O parágrafo pro dono do negócio, sem jargão
- [ ] Link do fork/projeto (ou PR, na entrega completa) no formulário

---

## Entrega mínima (~30 min além do que já foi feito em aula)

Itens 1 a 10 do passo a passo, com pelo menos **1 das 3 tasks** tendo passado por uma
falha real e uma correção registrada (se as 3 passaram de primeira, ótimo pra você, mas
registre isso — não precisa forçar um erro que não aconteceu).

## Entrega completa (tudo da mínima +)

- PR aberto no seu repo próprio, do seu branch pra `main`, com `constitution.md`,
  `tasks.md`, `TASKS-TEMPLATE.md` preenchido, `REGISTRO-TAXA-DE-ACERTO.csv`.
- Um parágrafo extra: reescreva a spec (ou task) que mais te deu trabalho, do jeito que
  você escreveria **hoje**, sabendo o que sabe agora. Compare em uma frase com a versão
  original.

---

## Rubrica

| critério | peso | o que a facilitadora olha |
|---|---|---|
| Gate é real e verificável | 30% | o comando do gate roda de fato e responde objetivamente sim/não — não é "parece certo" ou "o agente disse que passou" |
| Registro de tentativas é honesto | 30% | tentativas que falharam aparecem; task reescrita depois de 3 falhas vira linha nova, não edição da antiga; a taxa bate com as linhas |
| As 3 tasks vêm do RPI de verdade | 20% | rastreável até um critério EARS ou cenário BDD específico do documento da semana 6 — não é tarefa genérica desconectada da spec |
| Critério de aceite além do gate técnico | 15% | pelo menos uma task cita o checklist de código ruim gerado por IA da semana 5 como parte do "pronto" |
| O parágrafo pro dono do negócio | 5% | sem jargão, mostra como o erro foi pego — não só que "deu certo" |

O que **não** pontua: 3 tasks que passaram de primeira sem nenhuma tentativa registrada
com detalhe (mesmo que verdade, "passou de primeira" sem o comando exato do gate não
prova nada). O que pontua: um gate que você consegue rodar de novo na frente da
facilitadora e ver o mesmo resultado.

## Bônus (sem peso na nota, com peso na vida)

- Pegue uma task que **falhou** e rode ela numa sessão nova do zero, sem nenhuma dica
  extra pro agente. Ela falha do mesmo jeito? Se sim, é spec. Se não, é sorte — e sorte
  não é gate.
- Compare a taxa de acerto de primeira tentativa da sua dupla da aula 2 com a sua. Quem
  tem maior, tem spec mais específica ou tarefa mais sortuda? Escreva uma frase sobre
  qual das duas é e por quê você acha isso.
