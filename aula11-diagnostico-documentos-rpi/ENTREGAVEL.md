# 🤖 Semana 6 — Diagnóstico, documentos e RPI: Atividade Prática (Entregável)

**Módulo 2 — AI Orchestrator / Contexto**

|  |  |
| :---- | :---- |
| **Material da aula** | `aula11-diagnostico-documentos-rpi/` no seu fork de pda-especializacao-ia |
| **Repositório do projeto** | seu repositório próprio (criado na semana 2) |
| **Formulário de entrega** | https://forms.gle/PSd6i65g44GwBMgq6 |
| **Prazo de entrega** | Antes da aula 1 da semana 7 |

O trabalho de verdade acontece no repositório do **seu projeto próprio** (o da semana 2):
é lá que a ADR e a spec vivem, em `docs/`. Aqui, dentro do seu fork do curso, você entrega
uma cópia dos artefatos e o link do repositório do projeto no formulário.

## O que você vai entregar

1. **`RESEARCH.md`** — o diagnóstico da dor real, feito na sessão de Research, na
   linguagem de quem sente o problema (não em linguagem de feature).
2. **Uma ADR** (`docs/adr/0001-<slug>.md`) registrando a decisão tomada na sessão de Plan.
3. **O documento único enxuto** (`docs/<slug>-spec.md`) com contexto, decisão, fora de
   escopo, **5 critérios EARS** (os 5 padrões da notação) e **3 cenários BDD** em Gherkin.
4. **O parágrafo para o dono do negócio**, atualizado com o que a sessão de Research
   revelou (pode ser o mesmo da semana 2, refinado, ou uma versão nova se o diagnóstico
   mudou o que você entendia do problema).

## Por que essa atividade existe

Ela comprova uma capacidade específica: **transformar uma reclamação em critério
verificável, sem perder o que a reclamação realmente dizia.** Pedir "escreva 5 EARS pra
X" é mecânico — qualquer agente devolve algo com a forma certa. O que só você decide é se
aquilo corresponde à dor de verdade. Se essa entrega estivesse errada, ela mostraria uma
de duas coisas: você não fez a sessão de Research de verdade (o diagnóstico é raso ou
genérico), ou você aceitou critérios do agente sem checar se batiam com o que descobriu.

## Pré-requisitos

- Bloco da Alura desta semana concluído (ver `PACOTE.md` para o mapeamento completo).
- Bounded context e linguagem ubíqua da semana 5 identificados — sem isso você não tem em
  que linguagem escrever o documento.
- As três sessões de agente (Research, Plan, Implement) rodadas **em sessões separadas**
  — não em uma conversa só. A facilitadora pode pedir pra ver o histórico de sessões.

## Passo a passo

1. Rode a **Sessão 1 — Research** (`starter/prompts-rpi.md`) e gere `RESEARCH.md`.
   Confira o checklist de saída do template antes de seguir.
2. Rode a **Sessão 2 — Plan**, colando só o conteúdo do `RESEARCH.md`. Gere a ADR e o
   documento enxuto.
3. **Revise cada um dos 5 EARS contra o `RESEARCH.md`** — apague ou reescreva qualquer
   critério que você não consiga apontar de onde veio.
4. Participe da aula 2 (Excalidraw coletivo) — preencha pelo menos uma zona do quadro de
   um colega, além do seu.
5. (Opcional, entrega completa) Rode a **Sessão 3 — Implement** e tenha os 3 cenários BDD
   passando como teste automatizado.
6. Copie `RESEARCH.md`, a ADR e o documento enxuto pra dentro de
   `aula11-diagnostico-documentos-rpi/entrega/` no seu fork do curso. Commit e push nos
   dois repositórios (projeto e fork do curso).

## O parágrafo para o dono do negócio

**Enunciado:** escreva de 3 a 5 frases, sem jargão técnico, explicando pra quem não
programa: qual é o problema real que você identificou (com quem, onde, quanto custa hoje),
e o que muda quando o que você especificou estiver pronto. Se a sessão de Research mudou o
que você pensava saber sobre o problema, diga o que mudou.

**Exemplo modelo** (domínio 4 do catálogo — Avaliação automatizada de projetos por IA):

> "Hoje a facilitadora corrige entrega de 75 alunos por semana lendo cada repositório à
> mão, e não tem como saber, antes de abrir o código, se os testes passam ou se o aluno
> nem chegou a rodar `npm test`. Isso significa que o tempo dela vai todo pra descobrir o
> óbvio, em vez de dar feedback sobre o que importa. A gente definiu que o verificador
> automático vai rodar os testes de cada entrega e avisar antes de qualquer correção manual
> se aquele repositório sequer está em condição de ser avaliado — separando 'não está
> pronto' de 'está pronto mas tem erro'. Isso não substitui o julgamento da facilitadora
> sobre a qualidade do código: só tira da frente dela o trabalho mecânico de descobrir se
> o básico funciona."

## Checklist antes de entregar

- [ ] `RESEARCH.md` sem palavra de solução técnica, com quem/quando/custo concretos
- [ ] ADR com Contexto citando a dor real (não "melhorar o sistema")
- [ ] Documento enxuto com os 5 padrões EARS presentes e cada um revisado por você
- [ ] 3 cenários BDD em Gherkin (Dado/Quando/Então), pelo menos 1 cobrindo erro/limite
- [ ] Linguagem ubíqua da semana 5 usada nos documentos, sem termo novo inventado
- [ ] Você participou da aula 2 e preencheu pelo menos uma zona do quadro de um colega
- [ ] O parágrafo pro dono do negócio, sem jargão
- [ ] Link do fork (ou PR, na entrega completa) e do repositório do projeto no formulário

---

## Entrega mínima (~25 min além do que já foi feito em aula)

Itens 1 a 4 do passo a passo. Se a sessão de Plan não rodou completa em aula, termine
sozinho — mas mantenha as sessões separadas, mesmo fazendo em casa.

## Entrega completa (tudo da mínima +)

- Sessão 3 (Implement) rodada, com o código e os 3 testes dos cenários BDD passando.
- PR aberto no repositório do **seu projeto**, com `docs/adr/`, o documento enxuto e o
  código implementado.
- Um `REVIEW.md` curto (reusando o formato da aula 1): o que você pediu na sessão de Plan,
  o que o agente devolveu, o que você rejeitou ou reescreveu nos EARS/BDD e por quê.

---

## Rubrica

| critério | peso | o que a facilitadora olha |
|---|---|---|
| `RESEARCH.md` é diagnóstico real, não feature disfarçada | 30% | nomeia quem sente, quando, com que frase, e quanto custa hoje — com concretude, não genérico |
| ADR e documento enxuto no tamanho certo | 15% | o tamanho bate com a régua de escala do problema; não é PRD de 12 páginas nem 3 linhas vazias |
| Os 5 critérios EARS correspondem à dor do Research | 30% | cada critério é rastreável até uma frase do `RESEARCH.md`; os 5 padrões aparecem com o gabarito certo |
| Os 3 cenários BDD são verificáveis | 15% | formato Gherkin de verdade (Dado/Quando/Então), pelo menos 1 cobre erro/limite, escrito de um jeito que dá pra virar teste sem reescrever |
| O parágrafo pro dono do negócio | 10% | sem jargão, nomeia o problema real e o que muda — não "vamos melhorar o sistema" |

O que **não** pontua: EARS e BDD bem formatados que não correspondem a nada que alguém
realmente falou. O que pontua: um critério que você rejeitou do agente porque não batia
com a dor real — e por quê.

## Bônus (sem peso na nota, com peso na vida)

- Rode a sessão de Plan **duas vezes**, com o mesmo `RESEARCH.md`: uma numa sessão nova de
  verdade, outra colando o `RESEARCH.md` na MESMA sessão que fez a pesquisa (contaminada).
  Compare os dois documentos gerados e escreva 3 frases sobre a diferença.
- Mostre o `RESEARCH.md` pra pessoa real que sente a dor (colega de turma cujo domínio é
  próximo, ou alguém do seu negócio de verdade). Pergunte: "é isso mesmo?". Registre a
  resposta.
