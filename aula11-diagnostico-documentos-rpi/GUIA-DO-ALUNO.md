# Guia do aluno — Semana 6: Diagnóstico, documentos e RPI

Este guia acompanha os slides da aula 1. Quando aparecer **MÃO NA MASSA** na tela, é a
sua vez: abra a seção correspondente aqui e faça junto.

Regra: terminal aberto do lado. Travou? Manda o erro no chat, segue em dupla.

---

## Antes da aula (5 min)

```bash
cd pda-especializacao-ia/aula11-diagnostico-documentos-rpi
```

Tenha à mão:

- O **parágrafo pro dono do negócio** que você escreveu na semana 2.
- O **bounded context e a linguagem ubíqua** do seu projeto, da semana 5 (se você não
  lembra o nome que deu, abra `board-bounded-contexts.excalidraw` da semana 5 antes de
  começar — a facilitadora não vai reexplicar o que é bounded context).
- O bloco da Alura desta semana concluído (ver `README.md` → pré-requisitos).

---

## LAB 1 — Sessão de Research (15 min)

Você vai transformar o parágrafo pro dono do negócio em um diagnóstico mais afiado, com
um agente que só pesquisa — não propõe nada.

### 1. Abra uma sessão nova, só pra isto

```bash
claude
```

Se você já tem uma sessão aberta desta aula, `/clear` antes — contexto de outra tarefa
polui a pesquisa.

### 2. Cole o prompt de Research

Copie o bloco "Sessão 1 — Research" de `starter/prompts-rpi.md`, preenchendo com o seu
domínio e o seu parágrafo da semana 2.

### 3. Deixe o agente te entrevistar

Ele vai perguntar: quem sente, quando aparece, o que a pessoa diria, quanto custa hoje.
Responda com o que você sabe de verdade — "não sei" é uma resposta válida (e vira um item
de "o que descobrir antes de decidir").

### 4. Trave a saída

Peça pra ele escrever o resultado em `RESEARCH.md`, a partir de
`starter/RESEARCH-template.md`. Antes de fechar a sessão, rode o **checklist de saída**
que está no final do template. Se alguma palavra de solução técnica escapou pro
documento, apague.

**Onde o seu julgamento entra:** o agente vai tender a "resolver" a entrevista rápido
demais, com respostas genéricas. Se uma resposta dele soar como qualquer negócio
("aumentar eficiência", "melhorar a experiência"), rejeite e peça o dado concreto — nome,
número, frase real. Isso não é o agente errando; é você não ter aceitado a versão fácil.

---

## Sessão de Plan é DEMO — não é lab (fica no bloco de teoria 2)

Você vai ver a facilitadora rodar a sessão de Plan ao vivo, com o `RESEARCH.md` dela, e
depois fazer a sua no Lab 2 — não é redundante fazer duas vezes: a demo mostra o padrão
(inclusive o erro proposital de "esquecer" de colar o Research), o lab é você aplicando no
seu próprio problema.

---

## LAB 2 — Sessão de Plan (25 min)

Agora você faz a sua. Esta é a sessão que produz o entregável principal da semana.

### 1. Sessão nova (de novo)

```bash
claude
```

Se você reaproveitar a sessão do Lab 1, rode `/clear` primeiro — o objetivo é simular
duas sessões reais, mesmo que seja o mesmo terminal.

### 2. Cole o prompt de Plan

Bloco "Sessão 2 — Plan" de `starter/prompts-rpi.md`. Cole o **conteúdo do `RESEARCH.md`**,
não a conversa da sessão 1. Inclua o nome do seu bounded context e os termos da linguagem
ubíqua da semana 5.

### 3. Peça a ADR e o documento enxuto

O prompt já pede os dois: `docs/adr/0001-<slug>.md` (a partir de `starter/ADR-template.md`)
e o documento único (a partir de `starter/SPEC-ENXUTA-template.md`), com 5 critérios EARS
e 3 cenários BDD.

### 4. Revise cada EARS contra o Research — este é o passo que ninguém pode terceirizar

Para cada um dos 5 critérios, pergunte: **"isso aqui resolve a frase que a pessoa que
sente a dor diria?"** Se você não consegue apontar em qual frase do `RESEARCH.md` aquele
critério se apoia, ele não entra — reescreva ou apague.

Confira também:

- [ ] Os 5 padrões EARS aparecem com o gabarito de frase certo (não é "o sistema deve
      funcionar bem" disfarçado de EARS).
- [ ] Pelo menos 1 dos 3 cenários BDD cobre um caso de erro/limite, não só o caminho feliz.
- [ ] A ADR tem uma frase de Contexto que cita a dor real, não "melhorar o sistema".
- [ ] O tamanho do documento bate com a régua "escala do documento vs escala do problema"
      do `README.md` — se você escreveu 3 páginas pra um CRUD, corte.

### 5. Commit

No repositório do **seu projeto** (o próprio, criado na semana 2):

```bash
mkdir -p docs/adr
# salve a ADR em docs/adr/0001-<slug>.md e o documento enxuto em docs/<slug>-spec.md
git add docs/
git commit -m "docs: ADR e spec de <slug>, com EARS e BDD"
git push
```

---

## Ambiente pronto quando

- [ ] `RESEARCH.md` existe, sem palavra de solução técnica, e alguém de fora entenderia o
      problema lendo só ele.
- [ ] `docs/adr/0001-<slug>.md` existe, com Contexto citando a dor real.
- [ ] O documento enxuto tem 5 EARS e 3 BDD, cada um revisado por você (não colado cru do
      agente).
- [ ] Você participou da aula 2 (Excalidraw coletivo) e preencheu pelo menos uma zona do
      quadro de um colega.

A entrega completa está em [`ENTREGAVEL.md`](./ENTREGAVEL.md).

---

## Se algo deu errado

| sintoma | tenta isso |
|---|---|
| o agente já quer propor solução na sessão de Research | interrompa: "ainda não, estamos só entendendo o problema" — se ele insistir, isso é sinal de que o prompt ficou vago demais, reforce a instrução |
| os 5 EARS saíram todos parecidos ("o sistema deve funcionar corretamente") | isso não são critérios EARS, são frases genéricas com o nome EARS em cima — volte ao `RESEARCH.md` e busque uma frase concreta de dor por critério |
| não lembro o bounded context da semana 5 | abra o `board-bounded-contexts.excalidraw` dela antes de continuar — não invente um nome novo agora |
| esqueci de limpar o contexto entre sessões | rode `/clear` agora, mesmo atrasado, e cole só o artefato (não a conversa) do passo anterior — o objetivo é a separação, não o número de janelas abertas |
| o cenário BDD saiu em prosa, não em Gherkin | reescreva como 3 linhas: `Dado` / `Quando` / `Então` — se não cabe em 3 linhas, o cenário está grande demais, quebre em dois |
| o documento ficou enorme (mais de 1 página pra um problema pequeno) | volte na régua "escala do documento vs escala do problema" do `README.md` — provavelmente seu problema é P ou M, não G |
