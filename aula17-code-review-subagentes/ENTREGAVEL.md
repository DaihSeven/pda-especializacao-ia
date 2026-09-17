# 🤖 Semana 9 — Code review e subagentes de revisão: Atividade Prática (Entregável)

**Módulo 3 — AI Orchestrator / Agentes**

|  |  |
| :---- | :---- |
| **Material da aula** | `aula17-code-review-subagentes/` no seu fork de pda-especializacao-ia |
| **Repositório do projeto** | seu repositório próprio (criado na semana 2) |
| **Formulário de entrega** | https://forms.gle/PSd6i65g44GwBMgq6 |
| **Prazo de entrega** | Antes da aula 1 da semana 10 |

## O que você vai entregar

1. **Os dois subagentes configurados no seu projeto:**
   `.claude/agents/revisor-sinais-ia.md` e
   `.claude/agents/revisor-seguranca-ia.md`, copiados de
   `starter/agentes-revisao/` e commitados no seu repositório.
2. **Uma revisão completa de um PR real do seu próprio repositório**
   (pode ser o PR trocado no red team da aula 2, ou outro seu), com:
   - `REGISTRO-REVISAO-HUMANA.md` preenchido e commitado **antes** de
     qualquer subagente ter rodado naquele PR.
   - `REGISTRO-SUBAGENTE.md` com a saída dos dois subagentes, commitado
     **depois**.
   - `git log --oneline` mostrando os dois commits na ordem certa —
     cole a saída no `REGISTRO-COMPARACAO.csv` ou anexe print como
     complemento (nunca como única prova).
3. **`REGISTRO-COMPARACAO.csv`** preenchido: pelo menos 1 achado que só
   você encontrou, 1 achado que só um dos subagentes encontrou, e a
   `prioridade_final` de cada um com justificativa quando for
   "não bloqueia".
4. **O parágrafo para o dono do negócio.**

## Por que essa atividade existe

Ela comprova uma capacidade específica: **você sabe configurar um
subagente de revisão com escopo restrito, e sabe onde ele para de servir
— sem parar de revisar você mesmo por causa disso.** Configurar um
subagente é mecânico (o frontmatter tem 5 campos, a doc oficial mostra o
exemplo). O que só você decide é **quando confiar no achado dele, quando
discordar, e o que fazer com o que ele nunca vai achar** porque não é da
categoria que você escreveu na `description`. Se essa entrega estivesse
errada, ela mostraria uma de duas coisas: você não tem nenhum registro
independente da sua própria revisão (só copiou o output do subagente e
chamou de análise sua), ou você tem os dois registros mas nenhuma linha do
CSV mostra uma divergência real entre eles — sinal de que um dos dois não
foi feito com atenção de verdade.

## Pré-requisitos

- Bloco "Code Review Profissional" (curso Alura "Qualidade de código:
  estratégia de Code Review, métricas e governança") concluído — ver
  `PACOTE.md` da facilitadora para o mapeamento completo.
- Ambiente da aula 1 (Node, Claude Code, GitHub) funcional.
- Projeto próprio (semana 2) com pelo menos um PR aberto — não precisa
  estar pronto pra mergear.
- CI da Semana 8 (`aula15-verificadores`) rodando no seu repositório —
  esta atividade assume que lint/typecheck/build/test/dependency-check já
  passaram; o foco aqui é o que sensor nenhum cobre.

## Passo a passo

1. Copie os dois arquivos de `starter/agentes-revisao/` pra
   `.claude/agents/` do seu repositório de projeto. Copie também
   `checklist-sinais-codigo-ia.md` (da Semana 5) pra raiz do seu projeto,
   se ainda não estiver lá — o `revisor-sinais-ia` depende dele.
2. Escolha o PR que você vai revisar (o do red team, ou outro seu).
3. Aplique as 4 camadas de leitura (Lab 1 do `GUIA-DO-ALUNO.md`) nesse PR
   de verdade. Preencha `REGISTRO-REVISAO-HUMANA.md`. Commit.
4. Rode os dois subagentes contra o mesmo PR (`@agent-revisor-sinais-ia`,
   `@agent-revisor-seguranca-ia`). Preencha `REGISTRO-SUBAGENTE.md`.
   Commit.
5. Confirme a ordem: `git log --oneline` tem que mostrar o commit humano
   antes do commit do subagente.
6. Preencha `REGISTRO-COMPARACAO.csv` com todos os achados combinados,
   priorizando.
7. Escreva o parágrafo pro dono do negócio.
8. Push. Formulário preenchido com o link do PR revisado e dos três
   arquivos de registro.

## O parágrafo para o dono do negócio

**Enunciado:** escreva de 3 a 5 frases, sem jargão técnico, explicando pra
alguém que não programa: por que ter um "assistente que já revisa parte do
código antes de um humano olhar" não substitui o humano — e o que
especificamente esse assistente NÃO sabe ver.

**Exemplo modelo** (domínio 1 do catálogo — Listagem de perfis de alunos da PDA):

> "Antes de qualquer mudança no site de perfis entrar no ar, agora dois
> assistentes automáticos já olham o código: um procura por más práticas
> conhecidas de programação, outro procura especificamente por brechas de
> segurança já catalogadas. Isso é bom — eles não cansam e não esquecem de
> olhar. Mas nenhum dos dois sabe, sozinho, uma coisa óbvia pra qualquer
> pessoa da equipe: que aquela página é pública, e por isso um e-mail de
> aluno não pode aparecer nela. Essa informação não está escrita em
> nenhuma regra que um assistente automático leia — está na cabeça de
> quem conhece o produto. Por isso continuamos com uma pessoa revisando
> antes de publicar, mesmo com os assistentes ligados."

## Checklist antes de entregar

- [ ] `.claude/agents/revisor-sinais-ia.md` e
      `.claude/agents/revisor-seguranca-ia.md` commitados no seu repositório
- [ ] `checklist-sinais-codigo-ia.md` presente no seu projeto (copiado da
      Semana 5, se ainda não estava lá)
- [ ] `REGISTRO-REVISAO-HUMANA.md` commitado, com achado registrado por pelo
      menos 2 das 4 camadas
- [ ] `REGISTRO-SUBAGENTE.md` commitado DEPOIS do registro humano
      (confirmado por `git log --oneline`, print ou trecho colado)
- [ ] `REGISTRO-COMPARACAO.csv` com pelo menos 1 achado "só humano" e 1
      achado "só subagente", cada um com `prioridade_final` preenchida
- [ ] Todo achado marcado "não bloqueia" tem justificativa escrita — campo
      vazio não é aceito
- [ ] O parágrafo pro dono do negócio, sem jargão
- [ ] Link do PR revisado (ou do repositório) no formulário

---

## Entrega mínima (~45 min além do que já foi feito em aula)

Itens 1, 3 e 4 do passo a passo (subagentes configurados, registro humano
completo, registro do subagente completo), mais `REGISTRO-COMPARACAO.csv`
com no mínimo 2 linhas preenchidas.

## Entrega completa (tudo da mínima +)

- `REGISTRO-COMPARACAO.csv` com todos os achados de ambos os registros,
  sem cortar nenhum.
- Um parágrafo extra: qual dos dois subagentes você acha que vai te
  poupar mais tempo no resto do curso, no seu domínio específico de
  projeto, e por quê — e o que você mudaria na `description` dele pra
  ficar mais afiado pro seu caso.
- PR aberto (de verdade, no seu repo) incorporando as correções dos
  achados que você marcou como "bloqueia".

---

## Rubrica

| critério | peso | o que a facilitadora olha |
|---|---|---|
| Ordem provada por commit (humano antes do subagente) | 25% | `git log --oneline` (ou trecho colado) mostrando os dois commits na ordem certa — sem isso, a atividade não vale, mesmo que o conteúdo dos registros esteja bom |
| Revisão humana tem achado real, não decorativo | 25% | pelo menos 1 achado no `REGISTRO-REVISAO-HUMANA.md` que os subagentes não cobrem por escopo (ex.: julgamento de domínio) — reforça que a leitura em camadas foi de verdade, não só formalidade |
| Os dois subagentes rodaram e acharam algo específico do escopo deles | 20% | saída do `revisor-sinais-ia` cita um sinal nomeado do checklist da Semana 5; saída do `revisor-seguranca-ia` cita um dos 4 riscos nomeados — não genérico |
| Priorização com justificativa | 25% | todo achado "não bloqueia" no CSV tem 1 frase de justificativa real, não "sem importância" |
| O parágrafo pro dono do negócio | 5% | sem jargão, nomeia especificamente o que o(s) subagente(s) não veem |

O que **não** pontua: colar o output do subagente no `REGISTRO-REVISAO-
HUMANA.md` (isso inverte a ordem que a atividade inteira existe pra
provar), ou um CSV onde todo achado é "bloqueia" (sinal de que ninguém
praticou o julgamento de priorizar).

## Bônus (sem peso na nota, com peso na vida)

- Ajuste a `description` de um dos dois subagentes pra ficar mais
  específica pro SEU domínio de projeto (ex.: "sempre que o diff tocar o
  módulo de pagamento" em vez do texto genérico) e registre no Mural da
  Alucinação se ele passou a disparar automaticamente sem você precisar
  chamar com `@agent-...`.
- Peça pro `revisor-sinais-ia` "ignorar prioridade e listar tudo que
  encontrar, por menor que seja" — compare o tamanho da lista com a
  listagem original. Isso é uma demonstração ao vivo de por que "achar
  tudo" não é a régua certa pra um revisor.
