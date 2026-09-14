# 🤖 Semana 3 — AGENTS.md e skills: Atividade Prática (Entregável)

**Módulo 2 — AI Orchestrator / Contexto**

|  |  |
| :---- | :---- |
| **Material da aula** | `aula5-agents-md-skills/` no seu fork de pda-especializacao-ia |
| **Repositório do projeto** | seu repositório próprio (criado na semana 2) |
| **Formulário de entrega** | https://forms.gle/PSd6i65g44GwBMgq6 |
| **Prazo de entrega** | Antes da aula 1 da semana 4 |

O trabalho de verdade acontece no repositório do **seu projeto próprio** (o da semana
2). Aqui, dentro do seu fork do curso, você entrega os artefatos e as evidências:
copie o `CLAUDE.md`, a pasta da skill e o relatório de validação pra dentro de
`aula5-agents-md-skills/entrega/` e cole o link do repositório do projeto na entrega.

Duas faixas, como sempre: a **mínima** você fecha ainda no dia da aula 6. A **completa**
é a que prova progressive disclosure de verdade e fecha a validação cruzada.

---

## O que você vai entregar

**Mínima:**
1. Uma regra nova no `CLAUDE.md` do seu projeto, nascida de um erro real observado —
   com a prova do teste antes/depois (o que o agente fez sem a regra, o que fez com ela).
2. Uma skill própria (`SKILL.md` com `name`, `description` e `allowed-tools`
   preenchidos, nada de `TODO`).
3. O parágrafo pro dono do negócio (ver modelo abaixo).

**Completa (tudo da mínima +):**
4. A mesma skill com progressive disclosure de verdade: um `reference.md` (ou mais de
   um arquivo) separado do `SKILL.md`, e a prova em número — `/context` antes e depois
   de invocar a skill, mostrando a diferença.
5. `RELATORIO-VALIDACAO.md` da skill do **seu colega de dupla**, cobrindo os três
   cenários (ver `starter/relatorio-validacao/TEMPLATE.md`):
   - dispara quando deve
   - não dispara quando não deve
   - falso positivo (um cenário parecido, mas que não deveria disparar)

---

## Por que essa atividade existe

Ela comprova uma capacidade específica: **decidir o que merece virar regra permanente,
o que merece virar skill sob demanda, e o que não merece nada — e provar a decisão com
um teste, não com uma opinião.**

Se essa capacidade estivesse ausente, você teria um `CLAUDE.md` que cresce sem parar
(porque tudo parece merecer estar lá) ou uma skill que nunca dispara, ou dispara sempre
(porque a `description` foi escrita sem pensar em gatilho). O teste antes/depois na
regra e os três cenários na skill do colega são justamente o que separa "eu acho que
isso ajuda" de "eu testei e mudou o comportamento".

## Pré-requisitos

- Bloco da Alura desta semana concluído (Context Engineering — ver `README.md`).
- `CLAUDE.md` funcional no repositório do seu projeto próprio, sem `TODO`, commitado.
- Ter feito o Lab 1 e o Lab 2 da aula 5, e os checkpoints da aula 6.

## Passo a passo

1. No repositório do seu projeto, confirme a regra e o teste antes/depois do Lab 1
   (aula 5). Se ainda não fez, faça agora seguindo o `GUIA-DO-ALUNO.md`.
2. Confirme a skill do Lab 2, com `reference.md` separado e os números de `/context`
   antes/depois da invocação.
3. Rode a skill do seu colega de dupla (ou trio, se for o caso — ver pareamento no
   `GUIA-DO-ALUNO.md`) contra os três cenários do template. Cole comando + resultado
   bruto pra cada um, não só a conclusão.
4. Escreva o parágrafo pro dono do negócio.
5. Copie os artefatos pra `aula5-agents-md-skills/entrega/` no seu fork:
   ```
   entrega/
   |-- CLAUDE-md-diff.md        # a regra nova + o teste antes/depois
   |-- skill/                   # cópia de .claude/skills/<nome>/ do seu projeto
   |-- RELATORIO-VALIDACAO.md   # a validação da skill do colega
   `-- paragrafo-dono-negocio.md
   ```
6. Commit, push, cole o link do repositório do seu projeto próprio no formulário.

## O parágrafo para o dono do negócio

Enunciado: em 3 a 5 frases, sem jargão técnico, explique pra alguém que não programa
por que um agente de IA "com regras próprias" e "habilidades sob demanda" é diferente
de simplesmente usar um chatbot genérico — e o que isso evita de errado.

**Exemplo modelo (domínio 1 do catálogo — Listagem de perfis de alunos da PDA):**

> Quando a gente pede pra uma IA genérica montar o perfil de um aluno, ela às vezes
> inventa informação que não foi dada — um curso que a pessoa não fez, uma habilidade
> que ela não tem. Isso já aconteceu aqui. A correção não foi "pedir com mais cuidado"
> toda vez: foi ensinar pro sistema, de forma permanente, a regra "nunca preencha um
> campo do perfil que não veio no briefing — deixe em branco e avise". Agora, toda vez
> que alguém gera um perfil, essa regra vale, sem precisar lembrar de repetir o pedido.
> E quando a tarefa é mais específica — gerar o perfil num formato exato pro site —
> o sistema só carrega essas instruções detalhadas na hora de usar, não o tempo todo.
> Isso significa respostas mais confiáveis e um sistema mais barato de rodar.

## Checklist antes de entregar

- [ ] A regra nova está no `CLAUDE.md` do projeto, não só numa mensagem de chat.
- [ ] O teste antes/depois mostra uma diferença real de comportamento, não uma opinião.
- [ ] O `SKILL.md` não tem `TODO`, tem `allowed-tools` restrito (não liberou tudo).
- [ ] (Completa) Existe `reference.md` separado, ou a decisão de não ter um está
      justificada por escrito.
- [ ] (Completa) Os três cenários do relatório de validação têm comando + resultado
      bruto colado, não só "funcionou" / "não funcionou".
- [ ] O parágrafo pro dono do negócio não usa nenhum termo técnico sem explicar.

---

## Rubrica

| critério | peso | o que eu olho |
|---|---|---|
| Regra testada, não opinada | 25% | nasceu de um erro real e nomeado; tem teste antes/depois com resultado diferente |
| Skill própria válida | 20% | frontmatter completo, `allowed-tools` restrito, dispara pelo menos uma vez de verdade |
| Progressive disclosure | 15% | `reference.md` separado com uso real, ou justificativa honesta de por que não precisa |
| Validação cruzada nos 3 cenários | 25% | dispara quando deve / não dispara quando não deve / falso positivo — cada um com evidência bruta |
| Parágrafo pro dono do negócio | 15% | sem jargão, nomeia o problema resolvido e o que evita de errado |

O que **não** pontua: uma regra que soa bem mas não muda nada no comportamento do
agente; uma skill com `description` copiada de exemplo sem adaptar ao seu domínio;
"funcionou" sem mostrar o comando que você rodou.

## Bônus (sem peso na nota, com peso na vida)

- Depois de validar a skill do colega, tente um **quarto cenário** — um jeito de
  quebrá-la que nenhum dos três padrão cobre. Cole no relatório, mesmo que não tenha
  quebrado nada.
- Crie o `AGENTS.md` do seu projeto (o formato aberto) e aponte seu `CLAUDE.md` pra
  ele com `@AGENTS.md`. Teste se outro agente (Cursor, Codex, o que você tiver à mão)
  consegue ler o mesmo arquivo sem duplicar regra nenhuma.
