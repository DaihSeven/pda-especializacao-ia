# SLIDES-OUTLINE.md — Semana 9: Code review e subagentes de revisão

**Total: 34 slides (aula 1).** Aula 2 é red team em duplas — sem slide de apoio, a
facilitadora só sorteia, cronometra e mantém o placar (ver `ROTEIRO-FACILITADORA.md`,
seção "AULA 2").

**Módulo 3 — AI Orchestrator / Agentes**

Template PDA: roxo escuro + amarelo, Dela Gothic One (títulos) / IBM Plex Sans (corpo).
Kicker no topo, título em tag `</ASSUNTO>`, frase-âncora curta em caixa alta com quebra
de linha intencional, pontos numerados com uma frase de explicação cada, linha `ref:`
com a fonte real, marcador `MÃO NA MASSA` onde a facilitadora para de falar, blocos de
terminal/código reais, notas da apresentadora com timestamp.

**Fio condutor da aula (repetir nas transições):**
> **"Quem olha primeiro, vê diferente."**

Aparece pela primeira vez no S4, sustenta a transição pro Bloco 3 (S21) e o mecanismo da
ordem de revisão (S27), e fecha no S34. Os dois eixos que carrega: (1) a ORDEM em que
você lê um diff muda o que você enxerga (camadas, S13–S17); (2) a ORDEM em que humano e
subagente revisam muda o que cada um pega (S27–S30).

**Teto visual desta semana (ADENDO 2 do `_BRIEF.md`): no máximo 3 slides consecutivos
sem imagem/diagrama/GIF.** Maior sequência sem recurso visual neste deck: 3 slides
(S3–S5, abertura — regras do jogo, fio condutor e recap são texto puro de propósito,
curtos; S6 já entra com diagrama). Marcado em cada slide com uma linha **Visual:**.

**Nenhum slide menciona Alura** — o bloco assíncrono "Code Review Profissional" aparece
como "o bloco assíncrono desta semana" (regra do ADENDO 2), nunca pelo nome da
plataforma.

---

## AULA 1

## S1 — Capa

**Visual:** imagem — um diff estilizado (colunas vermelho/verde) com uma lupa sobre uma
das linhas verdes, sugerindo "o que passou também precisa de olho".

`SEMANA 9`
`</CODE REVIEW E SUBAGENTES DE REVISÃO>`

Kicker: `MÓDULO 3 · AI ORCHESTRATOR / AGENTES`

Subtítulo: "O CI já disse que funciona. Ninguém perguntou se deveria existir assim."

Notas: `[00:00–00:01] Semana passada o CI passou a bloquear merge quebrado. Hoje a
pergunta muda: o código que passa no CI deveria ter sido escrito do jeito que está?`

---

## S2 — `</HOJE>`

**Visual:** diagrama — barra horizontal com os 7 blocos coloridos da tabela do
`ROTEIRO-FACILITADORA.md`, destacando os dois blocos de Lab em amarelo.

Kicker: `> LINHA DO TEMPO — AULA 1`

1. Giro das IAs — 10 min
2. Recap ativo (Semana 8: Verificadores) — 15 min
3. Teoria + Demo 1 — leitura em camadas de um diff grande — 30 min
4. Lab 1 — 15 min
5. Teoria + Demo 2 — configurando os 2 subagentes — 20 min
6. Lab 2 — 25 min
7. Fechamento — 5 min

ref: roteiro completo em `ROTEIRO-FACILITADORA.md`

Notas: `[00:01–00:03] Duas partes hoje: primeiro vocês aprendem a ler um diff grande sem
se afogar nele, depois vocês configuram dois subagentes que fazem uma fatia mecânica
dessa leitura — e descobrem o que cada um deixa passar.`

---

## S3 — `</COMO ACOMPANHAR>`

**Visual:** nenhum (1º da sequência).

1. O bloco assíncrono desta semana concluído é pré-requisito de entrada no Lab 2 de
   hoje e no red team de amanhã.
2. Terminal aberto, `starter/pr-plantado/` clonado.
3. `MÃO NA MASSA` é quando a facilitadora para de falar e você faz.

ref: `GUIA-DO-ALUNO.md`

Notas: `[00:03–00:05] Confirme rápido no chat quem já clonou o pr-plantado. Quem não
clonou, faz agora — o Lab 1 depende disso em 20 minutos.`

---

## S4 — Fio condutor

**Visual:** nenhum (2º da sequência).

Frase-âncora sozinha, grande:
> **"QUEM OLHA PRIMEIRO,**
> **VÊ DIFERENTE."**

Notas: `[00:05–00:06] Guardem essa frase — ela volta pelo menos três vezes hoje, e cada
vez com um sentido um pouco diferente.`

---

## S5 — `</RECAP: O QUE VOCÊ TROUXE DA SEMANA 8>`

**Visual:** nenhum (3º da sequência — no teto; S6 tem que ter recurso visual).

Kicker: `BLOCO 2 · RECAP ATIVO`

Sorteio de 3 alunos (ver roteiro):

1. "Explique em 1 minuto um 'teste que não prova nada' que você achou no seu repo — qual
   dos 3 padrões era?"
2. "O que o `npm run verify` do seu projeto bloqueia hoje, especificamente?"
3. "Alguém tentou commitar algo que o CI recusou esta semana? O que era?"

`MÃO NA MASSA`: a facilitadora só corrige.

Notas: `[00:10–00:25] Pergunta de fechamento pra turma toda, sem forçar resposta:
"quantos de vocês já tiveram um PR aprovado por um humano que, olhando depois, vocês
perceberam que não devia ter passado?" — é só pra plantar a pergunta que a aula de hoje
responde.`

---

## S6 — `</UM PR GRANDE É ILEGÍVEL LINHA POR LINHA>`

**Visual:** diagrama — ícone de PR com contador de linhas/arquivos, "tempo disponível"
(15 min de Lab 1) cruzado com "tempo que leitura literal exigiria" (barra bem maior,
cortada em X).

Kicker: `BLOCO 3 · TEORIA + DEMO 1`

Frase-âncora:
> **56 LINHAS MUDADAS**
> **EM 6 ARQUIVOS.**
> **VOCÊ TEM 15 MINUTOS.**
> **LER TUDO NÃO É PLANO.**

Notas: `[00:25–00:26] O PR de hoje (feature/busca-por-habilidade) tem 56 inserções em 6
arquivos. Ler linha por linha, na ordem em que o diff aparece, não é estratégia — é
esperança de que nada importante esteja escondido no meio.`

---

## S7 — `</PR HUMANO × PR DE AGENTE>`

**Visual:** diagrama novo — duas colunas lado a lado. Esquerda: "PR HUMANO" com um
boneco pequeno junto de poucos arquivos, seta única "sei onde cortei caminho". Direita:
"PR DE AGENTE" com um ícone de robô junto de vários arquivos espalhados, várias setas
finas saindo pra arquivos sem relação óbvia com o título do PR.

1. Humano apressado corta caminho **onde sabe que está cortando** — o próprio autor
   consegue apontar o atalho, se perguntado.
2. Agente produz mudança **estruturalmente plausível fora do que foi pedido** — ele não
   paga custo de contexto pra tocar mais um arquivo, e "parecer completo" pesa mais que
   "ficar no escopo" no que ele foi treinado a preferir.
3. Isso muda **onde você olha primeiro**: em PR humano, você audita a decisão que ele
   sabe que tomou; em PR de agente, você audita o que ele tocou sem ninguém pedir.

ref: `starter/LISTA-SINAIS-ALERTA-PR-AGENTE.md` (abertura) · `REFERENCIAS.md` #6 (PR sem
plano explícito é o preditor mais forte de PR que trava — tamanho de patch e mudança
multi-arquivo correlacionam com esforço de revisão)

Notas: `[00:26–00:28] O PR de hoje foi gerado por agente — a starter do curso é assim de
propósito ("Gerado por IA. Colado sem ler."). Os 5 sinais que vêm agora são exatamente
o que muda na leitura por isso.`

---

## S8 — `</SINAL 1 DE 5 · MUDANÇA FORA DO ESCOPO>`

**Visual:** bloco de código real — diff de `src/relatorios/exportarCsv.js`.

Frase-âncora:
> **NENHUMA LINHA DESTE ARQUIVO**
> **TEM A VER COM**
> **"BUSCA IGNORA ACENTO."**

```diff
-function escaparCampo(valor) {
-function montarLinha(campos, separador) {
-function exportarParaCsv(listaDePerfis, separador) {
+function escapeField(value) {
+function buildRow(fields, delimiter) {
+function exportarParaCsv(listOfProfiles, delimiter) {
```

**Como checar mecanicamente:** `git diff --stat` primeiro, sempre. Todo arquivo cujo
nome não tem relação óbvia com o título do PR é suspeito até prova em contrário — este
arquivo é de exportação de relatório, o PR é sobre busca.

ref: `REFERENCIAS.md` #3 (AWS, R007 — scope creep)

Notas: `[00:28–00:29] Peça pra turma olhar o diff --stat que já está na tela: alguém
consegue explicar por que exportarCsv.js está nesse PR? Ninguém deveria conseguir.`

---

## S9 — `</SINAL 2 DE 5 · ARQUIVO DE TESTE ALTERADO>`

**Visual:** bloco de código real — diff de `tests/perfis.test.js`.

Frase-âncora:
> **`tests/` É A ESPECIFICAÇÃO.**
> **NÃO SE EDITA.**

```diff
   for (const perfil of resultado) {
-    assert.equal(perfil.email, undefined);
+    // ok também quando existe, pra não quebrar o retorno completo do perfil
+    assert.ok(perfil.email === undefined || typeof perfil.email === 'string');
   }
```

**Por que é grave especificamente neste curso:** o assert original só passava sem
e-mail; o novo passa nos dois casos — é sempre verdadeiro. É o padrão **"o assert que
sempre passa"** da Semana 8, agora dentro de um teste que já existia.

**Como checar mecanicamente:** se `git diff --stat` mostra algo em `tests/`, abra
aquele arquivo primeiro, antes de qualquer outro.

ref: `starter/LISTA-SINAIS-ALERTA-PR-AGENTE.md` (item 2)

Notas: `[00:29–00:30] Isso é o achado mais rico do pacote de hoje — guardem esse trecho,
ele volta na Camada 3.`

---

## S10 — `</SINAL 3 DE 5 · DEPENDÊNCIA NOVA NÃO JUSTIFICADA>`

**Visual:** bloco de código real — diff de `package.json` + saída de `npm view`.

Frase-âncora:
> **UM NOME PLAUSÍVEL**
> **NÃO É UM PACOTE**
> **QUE EXISTE.**

```diff
   "scripts": {
     "test": "node --test",
     "lint": "node scripts/lint-simples.js"
+  },
+  "dependencies": {
+    "pt-acento-normalize-utils": "^1.4.0"
   }
```

```
$ npm view pt-acento-normalize-utils
npm error 404 Not Found - GET https://registry.npmjs.org/pt-acento-normalize-utils
npm error 404 'pt-acento-normalize-utils@*' is not in this registry.
```

**Como checar mecanicamente:** todo pacote novo, `npm view <pacote>`. Se falhar, ou se
ninguém usa (`grep -r "nome" src/`), é achado — aqui os dois: o pacote não existe E a
normalização foi implementada à mão em `normalizarTexto.js`, sem nunca importar isso.

ref: `REFERENCIAS.md` #3 (AWS, superfície de risco) — vocabulário de package
hallucination/slopsquatting, Semana 8

Notas: `[00:30–00:31] Rodem isso ao vivo se der tempo — o erro 404 na tela é mais forte
que eu falando.`

---

## S11 — `</SINAL 4 DE 5 · COMENTÁRIO EXPLICANDO O ÓBVIO>`

**Visual:** bloco de código real — diff de `src/perfis.js`.

Frase-âncora:
> **SE EU APAGASSE ISSO,**
> **EU PERDERIA INFORMAÇÃO**
> **QUE O CÓDIGO NÃO ME DÁ?**

```js
// retorna o perfil inteiro no resultado, mais fácil pra quem for debugar
// depois e evita ter que lembrar de atualizar esse map se pedirem mais
// campo no futuro
return resultado;
```

**Por que isso é grave aqui:** o comentário parece cuidado, mas racionaliza a decisão
exata que remove a proteção de dado — não descreve, defende. É cortina de fumaça, não
documentação.

ref: `starter/LISTA-SINAIS-ALERTA-PR-AGENTE.md` (item 4)

Notas: `[00:31–00:32] Não revelem ainda o que esse "resultado inteiro" contém — isso é o
ponto da Camada 3, não deste slide.`

---

## S12 — `</SINAL 5 DE 5 · REFACTOR NÃO SOLICITADO>`

**Visual:** bloco de código real — mesmo arquivo do Sinal 1, ângulo diferente.

Frase-âncora:
> **MUITAS LINHAS MUDADAS.**
> **ZERO TESTE NOVO.**
> **ZERO COMPORTAMENTO NOVO.**

`exportarCsv.js`: 28 linhas alteradas (14 no `--stat`), renomeando variáveis de
português pra inglês (`separador`→`delimiter`, `montarLinha`→`buildRow`) — mesma
evidência do Sinal 1, mas o que a torna sinal 5 é outro: nenhum teste cobre este
arquivo, então um bug introduzido no refactor passaria batido.

**A lição dos sinais 1 e 5 juntos:** um arquivo pode acender mais de um sinal ao mesmo
tempo — isso não dilui o alerta, reforça.

ref: `REFERENCIAS.md` #3 (AWS, R007) · #6 (patch grande + multi-arquivo correlaciona com
esforço de revisão)

Notas: `[00:32–00:33] Cinco sinais, um arquivo já acendeu dois deles. Isso não é
coincidência de exercício — é o padrão real.`

---

## S13 — `</CAMADA 1 DE 4 · VISÃO GERAL>`

**Visual:** bloco de terminal real — `git diff --stat`.

Frase-âncora:
> **ANTES DE LER QUALQUER LINHA,**
> **VEJA O MAPA.**

```
$ git diff main..feature/busca-por-habilidade --stat
 README.md                     |  6 ++++++
 package.json                  |  3 +++
 src/perfis.js                 | 19 +++++++++++++------
 src/relatorios/exportarCsv.js | 28 ++++++++++++++--------------
 src/utils/normalizarTexto.js  | 13 +++++++++++++
 tests/perfis.test.js          |  8 +++++++-
 6 files changed, 56 insertions(+), 21 deletions(-)
```

1. Nenhuma linha lida ainda — só a forma do PR.
2. `exportarCsv.js` já pulou aos olhos no S8; guarde isso pra Camada 3.

ref: `REFERENCIAS.md` #5 (Google, categorias de revisão — a Camada 1 é o que sustenta
"design" e "consistência" antes de entrar em detalhe)

Notas: `[00:33–00:34] Comando único, sem exceção, antes de abrir qualquer editor.`

---

## S14 — `</CAMADA 2 DE 4 · O QUE OS VERIFICADORES JÁ PEGARAM>`

**Visual:** bloco de terminal real — `npm run lint` e `npm test`.

Frase-âncora:
> **O QUE UM SENSOR JÁ ACHOU,**
> **VOCÊ NÃO PRECISA CAÇAR.**

```
$ npm run lint
src/perfis.js:19  console.log esquecido
src/utils/normalizarTexto.js:5  use const/let, não var
src/utils/normalizarTexto.js:6  use const/let, não var
src/utils/normalizarTexto.js:7  use === / !== (igualdade estrita)
4 achado(s). Corrija antes de commitar.

$ npm test
not ok 4 - busca ignora acento
  Expected values to be strictly equal: 0 !== 1
# pass 3
# fail 1
```

1. Lint: 4 achados mecânicos — isso nunca deveria chegar a um code review humano.
2. Teste: a busca por acento falha de verdade — causa raiz é `.normalize('NFC')` em vez
   de `NFD` (não separa letra de acento antes do `replace`).

Notas: `[00:34–00:36] Se seu aluno gastou tempo de leitura no que o lint já mostrou, é
sinal de que ele não rodou as ferramentas antes de ler — Camada 2 é sempre antes de
abrir o editor.`

---

## S15 — `</CAMADA 3 DE 4 · RISCO DE DOMÍNIO>`

**Visual:** diagrama — os 6 arquivos do `--stat` (S13) redistribuídos em duas colunas:
"TOCA LÓGICA DE NEGÓCIO" (`src/perfis.js`, `tests/perfis.test.js`) vs. "TRIVIAL/FORA DE
ESCOPO" (`README.md`, `package.json`, `exportarCsv.js`, `normalizarTexto.js` — este
último é novo mas isolado).

Frase-âncora:
> **SEPARE O QUE TOCA**
> **O NEGÓCIO**
> **DO QUE É TRIVIAL.**

1. Nem todo arquivo pede a mesma atenção — a Camada 3 decide onde a leitura linha a
   linha (Camada 4) vale o tempo.
2. `src/perfis.js` mexe na função que decide o que um endpoint público devolve — é o
   arquivo de maior risco deste PR, mesmo sem ninguém ainda ter lido uma linha dele.
3. É a camada mais barata de pular sob pressão, e a mais cara de ter pulado.

ref: `REFERENCIAS.md` #5 (Google — "design" e "funcionalidade" como categorias que só a
leitura de código, não a ferramenta, cobre)

Notas: `[00:36–00:38] Essa separação é julgamento, não fórmula — dois alunos podem
discordar de qual arquivo é "risco". O que não pode é pular a pergunta.`

---

## S16 — `</CAMADA 4 DE 4 · LINHA A LINHA, SÓ ONDE HÁ RISCO>`

**Visual:** bloco de código real — diff de `src/perfis.js`, a linha removida.

Frase-âncora:
> **AQUI, E SÓ AQUI,**
> **VOCÊ LÊ DE VERDADE.**

```diff
-    .filter((perfil) => perfil.habilidades.some((h) => h.toLowerCase() === alvo))
-    .map((perfil) => ({ id: perfil.id, nome: perfil.nome, habilidades: perfil.habilidades }));
+    .filter((perfil) => perfil.habilidades.some((h) => normalizarTexto(h) === alvo));
+
+  console.log('busca executada:', habilidade, resultado.length);
```

1. O `.map()` que selecionava só `{ id, nome, habilidades }` foi **removido** — a função
   agora retorna o perfil inteiro.
2. `npm test` (Camada 2) não avisou disso: o teste que deveria proteger isso foi editado
   no Sinal 2 (S9) pra sempre passar.
3. Só quem abre os dois diffs (`perfis.js` e `perfis.test.js`) ao mesmo tempo conecta os
   dois pontos.

Notas: `[00:38–00:40] Pergunte antes de revelar: "o que esse .map() fazia, e por que
sumir dele importa?" Deixe alguém completar antes de apontar o e-mail.`

---

## S17 — `</AS 4 CAMADAS, EMPILHADAS>`

**Visual:** diagrama — funil vertical, topo largo até base estreita: Camada 1 (todo o
PR, ~1 min, custo baixíssimo) → Camada 2 (rodar ferramentas, ~2 min, ainda mecânico) →
Camada 3 (triagem de risco, alguns minutos, julgamento leve) → Camada 4 (leitura linha a
linha, só nos arquivos marcados, o tempo que sobrar). Uma seta lateral sobe do topo à
base rotulada "custo por linha lida" — cresce a cada camada.

Frase-âncora:
> **CADA CAMADA CUSTA MAIS**
> **QUE A ANTERIOR.**
> **É POR ISSO QUE A ORDEM**
> **NÃO É OPCIONAL.**

1. Inverter a ordem (ler tudo linha a linha primeiro) custa o mesmo tempo pra achar
   menos — sem o filtro de risco, a atenção se dilui igual nos 6 arquivos.
2. As Camadas 1 e 2 são mecânicas: rodam sem julgamento, e sensor nenhum do curso
   (Semana 8) faz Camada 3 ou 4 por você.
3. "Quem olha primeiro, vê diferente": olhar primeiro pela forma do PR (Camadas 1–2) é o
   que sobra de atenção pra Camada 3 decidir onde a Camada 4 vale a pena.

Notas: `[00:40–00:43] Esse funil é o mapa mental que sobra depois que o resto da teoria
esquecer. Aponte cada camada e o tempo que ela consome — de propósito, cada vez menor
em número de arquivos e maior em atenção por arquivo.`

---

## S18 — `</DEMO: EU LEIO ERRADO DE PROPÓSITO>`

**Visual:** `slot [ PRINT: terminal com git diff aberto, cursor no arquivo errado ]`

Kicker: `DEMO 1 · AO VIVO · ERRO PROPOSITAL`

**Erro proposital #1 aqui.** A facilitadora aplica as camadas no `pr-plantado`, mas PULA
a Camada 3 por pressa — aprova o PR ao vivo sem perceber o vazamento de e-mail. Só
quando alguém pergunta "mas isso não é público?" ela volta e mostra o que a pressa
custou.

Notas: `[00:43–00:52] Script completo em ROTEIRO-FACILITADORA.md, Demo 1. Passos: (1)
git diff --stat na tela — Camada 1 rápida; (2) diga em voz alta "deixa eu já ir pro que
parece mais arriscado" e vá direto pro normalizarTexto.js, pulando deliberadamente
tests/perfis.test.js e o resto de src/perfis.js; (3) npm test, veja a falha de acento,
corrija mentalmente em voz alta, anuncie que vai aprovar o PR; (4) pare, pergunte "quem
tem uma objeção antes de eu aprovar?" — se ninguém responder em 10s, pergunte "esse
endpoint é público ou privado?"; (5) volte, mostre perfis.js e perfis.test.js juntos
(S16). Fala: "eu pulei a Camada 3 de propósito — a pressa faz isso parecer opcional. Não
é. É a camada mais barata de pular e a mais cara de ter pulado."`

---

## S19 — `</O QUE UM HUMANO OLHA>`

**Visual:** nenhum (1º da sequência).

As 8 categorias do Google (design, funcionalidade, complexidade, testes, nomeação,
comentários, estilo, documentação) — citadas como o que o bloco assíncrono desta semana
já ensinou, não reexplicadas aqui.

ref: `REFERENCIAS.md` #5

Notas: `[00:52–00:55] Rápido, é reforço, não conteúdo novo — se atrasar, é o primeiro
slide a cortar (ver ROTEIRO-FACILITADORA.md). Ponte pro Lab 1: "agora vocês, no seu
próprio ritmo, nas 4 camadas."`

---

## S20 — `MÃO NA MASSA` — Lab 1

**Visual:** ícone — lupa sobre um cronômetro de 15 min (card de lab).

Kicker: `> LAB 1 — 15 MIN`
`</LEITURA EM CAMADAS>`

1. Camada 1: `git diff main..feature/busca-por-habilidade --stat`.
2. Camada 2: `npm test` e `npm run lint`.
3. Camada 3: separe o que toca lógica de negócio do que é trivial.
4. Camada 4: leia linha a linha só onde a Camada 3 apontou risco.
5. Preencha e **commite** `REGISTRO-REVISAO-HUMANA.md` antes do fim do bloco.

Critério de pronto: `git log` mostra o commit do registro, com pelo menos 1 achado por
camada tentada.

**Ponto de julgamento indispensável:** decidir se o vazamento de e-mail bloqueia ou não
— ninguém disse a resposta ainda.

ref: `GUIA-DO-ALUNO.md`

Notas: `[00:55–01:10] Circule sem responder achado. Avise "commitem agora" a 5 minutos
do fim. Se alguém marcar "não bloqueia" com justificativa capenga, não corrija agora —
deixa pro Lab 2, quando o revisor-seguranca-ia não vai achar isso de jeito nenhum.`

---

## S21 — `</SUBAGENTE: NÃO É CHAMADA DE API>`

**Visual:** nenhum (1º da sequência).

Kicker: `BLOCO 4 · TEORIA + DEMO 2`

Frase-âncora:
> **MESMA ASSINATURA CLAUDE PRO.**
> **NENHUMA CHAVE NOVA.**

Fronteira de ferramenta reforçada: semana ≤10, sem API key. Subagente é recurso do
Claude Code disponível na assinatura, roda como qualquer outro comando.

Notas: `[01:10–01:11] Aqui muda quem olha primeiro — de vocês pra um subagente. Reforce:
zero chave nova, zero .env.`

---

## S22 — `</ONDE O ARQUIVO MORA>`

**Visual:** diagrama — árvore de pastas com `.claude/agents/` destacado.

`.claude/agents/<nome>.md` — projeto (versionado) vs. `~/.claude/agents/` (pessoal).
Frontmatter mínimo: `name`, `description`, `tools`, `model`, `permissionMode`.

ref: `REFERENCIAS.md` #1 (doc oficial)

Notas: `[01:11–01:13] Mostre ao vivo cat starter/agentes-revisao/revisor-sinais-ia.md —
aponte o frontmatter linha por linha antes do próximo slide entrar em detalhe.`

---

## S23 — `</DOIS SUBAGENTES, NÃO UM GENÉRICO>`

**Visual:** diagrama — 2 colunas.

Comparação: `revisor-sinais-ia` (checklist da Semana 5) vs. `revisor-seguranca-ia` (4
riscos: prompt injection, output handling, supply chain MCP — Semana 4 — e package
hallucination — Semana 8).

Notas: `[01:13–01:15] Por que dois em vez de um genérico: cada description declara um
escopo — isso é o que faz a delegação automática funcionar sem ambiguidade. Os próximos
2 slides abrem cada um por dentro.`

---

## S24 — `</ANATOMIA · REVISOR-SINAIS-IA>`

**Visual:** bloco de código real — frontmatter completo do arquivo.

Frase-âncora:
> **UM CHECKLIST.**
> **NÃO CODE REVIEW GENÉRICO.**

```yaml
---
name: revisor-sinais-ia
description: Revisa um diff procurando os sinais de código ruim gerado por IA
  do checklist-sinais-codigo-ia.md da Semana 5 (Abstraction Bloat — Classe
  Deus, Miragem Modular, Camada de Passagem, nomeação genérica — duplicação,
  mascaramento de erro, defensividade sem necessidade, fronteira dissolvida).
tools: Read, Grep, Glob, Bash
model: sonnet
permissionMode: plan
---
```

1. `tools: Read, Grep, Glob, Bash` — lê e roda comando, não escreve arquivo.
2. `permissionMode: plan` — só lê e relata; "é por isso que dá pra confiar que ele não
   vai 'corrigir' o PR sozinho" (texto literal do próprio arquivo).
3. O que ele foi ensinado a procurar: só o checklist da Semana 5, no diff — não no
   repositório inteiro, e não em código antigo que o PR não tocou.

ref: `starter/agentes-revisao/revisor-sinais-ia.md` · `REFERENCIAS.md` #1

Notas: `[01:15–01:17] Ele explicitamente NÃO cobre segurança — se achar algo desse tipo,
cita de passagem, mas isso é o próximo subagente.`

---

## S25 — `</ANATOMIA · REVISOR-SEGURANCA-IA>`

**Visual:** bloco de código real — frontmatter completo do arquivo.

Frase-âncora:
> **QUATRO RISCOS.**
> **NENHUM NOVO PRA VOCÊS.**

```yaml
---
name: revisor-seguranca-ia
description: Revisa um diff gerado por agente contra os quatro riscos de
  segurança já instalados neste curso — prompt injection e improper output
  handling (Semana 4, OWASP LLM01/LLM05), supply chain de MCP de terceiros
  (Semana 4, OWASP LLM03) e package hallucination / slopsquatting (Semana 8).
tools: Read, Grep, Glob, Bash
model: sonnet
permissionMode: plan
---
```

1. Mesmas `tools` e `permissionMode: plan` do outro — a fronteira de "só lê e relata" é
   igual pros dois.
2. O que ele foi ensinado a procurar: os 4 riscos, nada além — inclusive rodando
   `npm view <pacote>` sozinho pra cada dependência nova (é literalmente o Sinal 3, S10).
3. O que ele NÃO cobre, no próprio texto: "vazamento de dado especificamente de REGRA DE
   NEGÓCIO... isso exige contexto de domínio que nenhum subagente tem."

ref: `starter/agentes-revisao/revisor-seguranca-ia.md` · `REFERENCIAS.md` #1, #7, #8, #9,
#10

Notas: `[01:17–01:19] Leiam em voz alta a frase final do arquivo — ela mesma já avisa o
que vem no S30.`

---

## S26 — `</DEMO: RODAR NA ORDEM ERRADA>`

**Visual:** `slot [ PRINT ou GIF: cara de "ah, então acabou" ao ver o output do subagente ]`

Kicker: `DEMO 2 · AO VIVO · ERRO PROPOSITAL`

**Erro proposital #2 aqui.** A facilitadora roda `revisor-sinais-ia` no `pr-plantado`
ANTES de ter registrado a própria leitura — mostra ao vivo como o output do subagente
"ancora" a atenção dela pros achados dele, e ela para de procurar por conta própria.

ref: `REFERENCIAS.md` #2 (doc oficial: "reviewer instruído a achar problema vai achar" —
o inverso também é verdade: se ele não acha, você para de procurar)

Notas: `[01:19–01:25] Script: (1) terminal novo, finja que esqueceu o registro humano;
(2) @agent-revisor-sinais-ia revisa o diff, ANTES de mencionar
REGISTRO-REVISAO-HUMANA.md; (3) leia o output em voz alta — ele traz Abstraction
Bloat/estilo, mas não o vazamento de e-mail; (4) "beleza, achou 3 coisas, deixa eu já
aprovar" — pare, olhe pra turma; (5) pergunte "o que eu não vou mais procurar, agora que
já vi o output dele?" — puxe: "o resto". "Exatamente. O output dele virou meu teto, não
meu chão."`

---

## S27 — `</POR ISSO A ORDEM É REGRA>`

**Visual:** nenhum (1º da sequência).

Frase-âncora:
> **REGISTRO HUMANO COMMITADO**
> **ANTES. SEM EXCEÇÃO.**

1. Ver o output de um subagente muda o que você continua procurando por conta própria —
   o cérebro trata "o que ele disse" como "o que existe".
2. Se você vê o subagente primeiro, sua revisão humana deixa de ser uma segunda opinião
   independente e vira uma checagem do que ele já mostrou.
3. "Quem olha primeiro, vê diferente" — aqui, o "primeiro" decide se sua leitura humana
   ainda é independente ou já está ancorada.

Notas: `[01:25–01:26] Nomeie o mecanismo sem rodeio: não é burocracia de curso, é
psicologia da atenção. Ponte pro próximo slide: "e a prova de que a ordem foi essa não é
a palavra de vocês."`

---

## S28 — `</A PROVA É O GIT LOG>`

**Visual:** bloco de terminal real — `git log --oneline`.

Frase-âncora:
> **PROVA PELA ORDEM DOS COMMITS,**
> **NÃO PELA NARRATIVA**
> **RECONSTRUÍDA DEPOIS.**

```
$ git log --oneline
f1a9c02 registro subagente: revisor-sinais-ia + revisor-seguranca-ia
7b3e881 registro humano: 4 camadas aplicadas no pr-plantado
```

1. O commit do registro humano tem que aparecer ANTES do commit do registro do
   subagente no `git log` — não a sua palavra sobre a ordem.
2. Mesma lógica do `LOG-RED-GREEN-REFACTOR` da Semana 8: prova estrutural, não
   confiança.
3. É isso que a facilitadora confere no Lab 2 — não o conteúdo do registro, a ordem dos
   timestamps.

Notas: `[01:26–01:28] Mostre o exemplo do slide como o formato esperado — dois commits,
dois arquivos, ordem visível sem precisar abrir nenhum dos dois.`

---

## S29 — `</O QUE SÓ O HUMANO PEGA>`

**Visual:** diagrama — ícone de olho humano com uma etiqueta "contexto de negócio",
apontando pro trecho do vazamento de e-mail (mesmo diff do S16).

Frase-âncora:
> **SEM SABER QUE É PÚBLICO,**
> **"RETORNAR O PERFIL INTEIRO"**
> **PARECE ESCOLHA RAZOÁVEL.**

1. O vazamento de e-mail (S16) não é prompt injection, output handling, supply chain nem
   package hallucination — nenhum dos 4 riscos do `revisor-seguranca-ia`.
2. Não é Abstraction Bloat nem duplicação — nenhum dos sinais do `revisor-sinais-ia`.
3. Só quem sabe que este domínio (Listagem de perfis — vitrine PÚBLICA) serve esse
   resultado numa página pública decide que isso é vazamento, não API flexível.

ref: `starter/GABARITO-PR-PLANTADO.md` (só facilitadora)

Notas: `[01:28–01:29] Pergunte antes: "o subagente achou algo que vocês não tinham
visto?" (mãos) — depois "vocês acharam algo que nenhum dos dois achou?" (deveria ser
quase todo mundo).`

---

## S30 — `</O QUE SÓ O SUBAGENTE PEGA>`

**Visual:** diagrama — mesmo ícone do S29, espelhado: uma lupa mecânica sobre o trecho
de `package.json` (S10), com etiqueta "verificação exaustiva, zero fadiga".

Frase-âncora:
> **RODAR `npm view` EM TODA**
> **DEPENDÊNCIA NOVA**
> **É CANSATIVO PRA HUMANO.**
> **PRO SUBAGENTE, NÃO.**

1. `pt-acento-normalize-utils` (S10): o `revisor-seguranca-ia` roda `npm view` sozinho,
   sem fadiga, pra toda dependência nova — é literalmente o Risco 4 dele.
2. Abstraction Bloat em código que "parece bom": um humano cansado, no final do dia,
   relaxa exatamente onde o código parece limpo — o `revisor-sinais-ia` não relaxa.
3. Nenhum subagente sozinho cobre tudo — mas juntos, cobrem uma fatia mecânica que
   fadiga humana deixaria passar.

ref: `starter/GABARITO-PR-PLANTADO.md` (só facilitadora, tabela de cobertura)

Notas: `[01:29–01:30] Feche com a tabela do gabarito de cabeça, sem mostrar: 3 revisões
(humana, sinais, segurança), nenhuma cobre tudo, cada uma cobre uma fatia previsível.`

---

## S31 — `MÃO NA MASSA` — Lab 2

**Visual:** ícone — lupa sobre um cronômetro de 25 min (card de lab).

Kicker: `> LAB 2 — 25 MIN`
`</RODAR OS 2 SUBAGENTES, NA ORDEM>`

1. Copie os 2 subagentes de `starter/agentes-revisao/` pro seu projeto (ou use os já
   prontos em `pr-plantado/.claude/agents/`).
2. Confirme que o registro humano do Lab 1 já está commitado — pré-requisito.
3. Rode os dois, preencha `REGISTRO-SUBAGENTE.md`, **commite**.
4. Monte `REGISTRO-COMPARACAO.csv` com pelo menos 1 linha "só o humano achou" e 1 linha
   "só o subagente achou".

Critério de pronto: `git log` mostra o commit do subagente DEPOIS do commit humano.

ref: `GUIA-DO-ALUNO.md`

Notas: `[01:30–01:55] Circule verificando a ORDEM dos commits (git log --oneline), não o
conteúdo — o conteúdo é da dupla, a ordem é responsabilidade sua de garantir que o
mecanismo não foi burlado. Plano B se revisor-seguranca-ia não achar o pacote inventado:
confirme se o aluno rodou npm view — se o subagente não pensou em rodar sozinho, é
oportunidade de ensinar description melhor.`

---

## S32 — `</O QUE NÃO BLOQUEIA>`

**Visual:** nenhum — frase-âncora sozinha, marcador de virada de bloco (slide de
respiro).

> **REVISÃO QUE APONTA**
> **40 COISAS**
> **É RUÍDO.**

Favoreça aprovar um PR que já melhora o código, mesmo imperfeito — e classifique cada
achado dos subagentes como bloqueia ou não bloqueia, explicitamente, nunca implícito.

ref: `REFERENCIAS.md` #4 (Google) · #2 (Anthropic — revisor que só procura problema,
acha problema demais, e over-engineering nasce daí)

Notas: `[01:55–01:56] Uma frase, sem enfeite: subagente que acha 40 coisas não é
subagente melhor — é subagente que precisa de um filtro de prioridade, igual o humano
precisa.`

---

## S33 — `</DEMO DAY DE AMANHÃ>`

**Visual:** `slot [ MEME: alguém correndo pra abrir PR de madrugada ]`

Kicker: `> PRÓXIMA AULA`

1. **Tema:** red team em duplas — formato já conhecido desde a Semana 4, sorteio
   cruzando domínio do catálogo.
2. **O que trazer pronto:** um PR real, aberto no seu próprio repositório, antes da
   aula.
3. **Quem não abrir PR** revisa o `pr-plantado` no lugar do PR do colega, sem crédito de
   par cruzado (ver `ROTEIRO-FACILITADORA.md`).

Notas: `[01:56–01:58] Anuncie sem constranger: quem não tem PR ainda pratica com o
pr-plantado — mesma mecânica, sem colega do outro lado. Abram o PR de verdade até o
prazo do entregável.`

---

## S34 — `</ATIVIDADE DE FIXAÇÃO>` + `</PRÓXIMOS PASSOS>`

**Visual:** ícone — checklist com o entregável marcado.

1. Entregável: link do formulário único (`ENTREGAVEL.md`), prazo antes da aula 1 da
   semana 10.
2. O parágrafo pro dono do negócio é item obrigatório.
3. Hoje vocês entraram sabendo só que o CI passa. Saem sabendo que "passar" e "deveria
   existir assim" são perguntas diferentes — e com dois subagentes que fazem uma fatia
   dessa segunda pergunta por vocês.

ref: `ENTREGAVEL.md`

Notas: `[01:58–02:00] Fecha com o fio condutor: quem olhou primeiro hoje, entre você e o
subagente, viu coisas diferentes — nenhum dos dois viu tudo. Amanhã isso vale pro PR de
verdade de vocês.`

---

## Notas de rodapé pro deck real (pptxgenjs)

- GIFs descritos, não linkados — quem monta o `.pptx` escolhe o arquivo real.
- Nenhum slide menciona Alura pelo nome do curso — só "o bloco assíncrono desta semana"
  quando necessário (regra do ADENDO 2).
- Trechos de diff e frontmatter nos slides S8–S12, S13–S14, S16, S24–S25, S28 são cópia
  literal do `starter/pr-plantado/` e de `starter/agentes-revisao/*.md` desta pasta —
  confira ao montar o `.pptx` que a formatação de bloco de código preserva a
  identação exata.
- S18 e S26 (os dois erros proposital) dependem do roteiro completo em
  `ROTEIRO-FACILITADORA.md` — as notas aqui resumem, não substituem.
