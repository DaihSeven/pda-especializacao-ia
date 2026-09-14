# Slides — Semana 5: Engenharia de software para desenvolvimento com IA

**Total: 32 slides na aula 1** (mais os 3 slides de regras do jogo da aula 2, que
continuam inalterados — aula 2 é Excalidraw ao vivo, não slide).

Template PDA: roxo escuro + amarelo, Dela Gothic One (títulos) / IBM Plex Sans (corpo).
Kicker no topo, título em tag `</ASSUNTO>`, frase-âncora curta em caixa alta com quebra
de linha intencional, pontos numerados com uma frase de explicação cada, linha `ref:`
com a fonte real, marcador `MÃO NA MASSA` onde a facilitadora para de falar, blocos de
terminal/código reais, notas da apresentadora com timestamp.

**Fio condutor da semana** (já declarado no `ROTEIRO-FACILITADORA.md` e no `README.md`,
repetido aqui): **"A tool funciona. Ninguém perguntou se o código dela é bom."** Abre no
recap (S4), sustenta a virada de bloco (S17) e fecha no `</FECHAMENTO>` (S28).

Regra de imagem desta semana: **no máximo 3 slides consecutivos sem imagem, diagrama ou
GIF** — cada slide abaixo tem uma linha **Visual:** dizendo o recurso (a estrela do
template não conta como recurso). Maior sequência sem recurso visual neste deck: 2
slides (S14–S15, os dois "erro de propósito" da Demo 1, onde a tela compartilhada ao
vivo já é o recurso visual da sala, mas não conta pro teto porque não é imagem do deck).

Ordem pedagógica que não pode inverter: a turma olha código ruim e nomeia o que
incomoda **antes** de qualquer nome técnico aparecer (S5 → S6). Dentro do bloco de
Abstraction Bloat, o guarda-chuva também só vem depois do checklist já ter dado nome ao
que a turma apontou (S6 → S7).

Só a **aula 1** tem slide de apoio. A **aula 2** tem só 3 slides de regras do jogo — o
resto é o Excalidraw projetado ao vivo, board de aluno, não slide (ver seção final).

---

## AULA 1

## S1 — Capa

**Visual:** imagem — raio-x estilizado de um arquivo de código (referência a "abrir o
capô").

`SEMANA 5`
`</ENGENHARIA DE SOFTWARE PARA DESENVOLVIMENTO COM IA>`

Subtítulo: "Vocês vão criticar o próprio código antes de eu dar nome pra isso."

Notas: `[00:00–00:02] Hoje ninguém decora teoria de DDD. Hoje vocês diagnosticam o que o
agente fez de errado no código de vocês mesmos, e só depois eu dou nome pra isso.`

---

## S2 — `</HOJE>`

**Visual:** diagrama — barra horizontal com os 7 blocos coloridos da tabela do
`ROTEIRO-FACILITADORA.md`, destacando os dois blocos de Lab em amarelo.

Kicker: `> LINHA DO TEMPO — AULA 1`

1. Giro das IAs — 10 min
2. Recap ativo (semana 4: MCP server) — 15 min
3. Teoria + Demo 1: diagnosticar antes de nomear — 30 min
4. Lab 1 — diagnóstico com o checklist — 15 min
5. Teoria + Demo 2: DDD estratégico como resposta estrutural — 20 min
6. Lab 2 — linguagem ubíqua + candidatos a bounded context — 25 min
7. Fechamento — 5 min

ref: roteiro completo em `ROTEIRO-FACILITADORA.md`

Notas: `[00:02–00:06] Duas partes hoje: primeiro vocês apontam o que está ruim no
próprio código, depois eu dou o vocabulário pra decidir onde a fronteira deveria
estar.`

---

## S3 — `</COMO ACOMPANHAR>`

**Visual:** ícone leve — checklist com 2 itens marcáveis (MCP server aberto / bloco
assíncrono de qualidade de código concluído).

1. Traga seu MCP server da semana 4 aberto — ou o `starter/repo-plantado/`, se não
   tiver nada rodando.
2. O bloco assíncrono de qualidade de código concluído é pré-requisito do Lab 2.
3. `MÃO NA MASSA` é quando eu paro de falar e você faz.

ref: `GUIA-DO-ALUNO.md`

Notas: `[00:06–00:10] Quem não tem o MCP server rodando, sem problema — usa o repo
plantado. O que não dá é chegar no Lab 1 sem nenhum código pra abrir.`

---

## S4 — Recap — `</SEMANA PASSADA>`

**Visual:** GIF descrito — alguém sacudindo uma caixa fechada, tentando adivinhar o que
tem dentro pelo som (humor leve, tema "funciona mas não sei o que tem dentro").

Kicker: `BLOCO 2 · RECAP ATIVO`

Frase-âncora:
> A TOOL FUNCIONA.
> NINGUÉM PERGUNTOU
> SE O CÓDIGO DELA É BOM.

1. Sorteio de 3 alunos (ver roteiro): prompt injection direta vs. indireta, o
   `DECISAO-ESCOPO.md`, quiz relâmpago de supply chain de MCP.
2. Gancho pra hoje: semana passada vocês construíram uma tool que funciona — ninguém
   perguntou ainda se o código dela é bom.

Notas: `[00:10–00:25] Semana passada vocês construíram uma tool que funciona. Ninguém
perguntou ainda se o código dela é bom. Hoje, é essa a pergunta.`

---

## S5 — `MÃO NA MASSA` — Demo 1, Passo 1: código de um colega, sem nome técnico ainda

**Visual:** nenhum — a tela compartilhada em tempo real do `src/` de um colega é o
próprio recurso visual deste slide.

Kicker: `DEMO 1 · PASSO 1`

> O QUE TE INCOMODA AQUI,
> MESMO SEM SABER
> EXPLICAR POR QUÊ?

Deixe 2–3 respostas no chat. Não corrija, não complete — só colete.

Notas: `[00:25–00:33] Não dê nome nenhum ainda. Só pergunte: o que incomoda? Colete
2 ou 3 respostas no chat sem corrigir e sem completar (ver ROTEIRO-FACILITADORA.md,
Demo 1, Passo 1).`

---

## S6 — `</O CHECKLIST>` — nomeando o que a turma já viu

**Visual:** imagem — print real do `starter/checklist-sinais-codigo-ia.md` projetado
(artefato do curso, não mockup).

Frase-âncora:
> A INTUIÇÃO DE VOCÊS
> JÁ ESTAVA CERTA.

1. **Abstraction Bloat** — o que a turma acabou de ver no código do colega. É o
   mergulho de hoje, começa no próximo slide.
2. Duplicação em vez de reuso.
3. Mascaramento de erro.
4. API ou biblioteca alucinada.
5. Defensividade sem necessidade.
6. Fronteira dissolvida.

ref: `starter/checklist-sinais-codigo-ia.md`

Notas: `[00:33–00:40] Passe pelas 6 categorias rapidamente, ligando cada uma ao que a
turma acabou de apontar no código do colega — "você disse 'parece que faz coisa
demais' — isso tem nome". O objetivo é o aluno perceber que a intuição dele já estava
certa; o checklist só dá vocabulário.`

---

## S7 — `</ABSTRACTION BLOAT>` — o guarda-chuva

**Visual:** diagrama novo — uma caixa grande rotulada "ABSTRACTION BLOAT" com 4 setas
saindo pra 4 caixinhas tracejadas, ainda sem nome (os 4 sinais que vêm nos próximos
slides).

Frase-âncora:
> ESTRUTURA PROPORCIONAL
> À INCERTEZA,
> NÃO AO PROBLEMA.

1. O modelo cria estrutura — classes, camadas, arquivos, interfaces — proporcional à
   sua incerteza sobre o problema, não à complexidade real dele.
2. Quanto menos claro o pedido, mais camada genérica aparece: camada genérica "parece"
   cobrir mais casos, e o modelo não paga o custo de manter aquilo depois.
3. Isso aparece de 4 jeitos concretos no código de vocês — os próximos 4 slides, um
   sinal por vez.

ref: `starter/checklist-sinais-codigo-ia.md` (Categoria 1)

Notas: `[00:40–00:41:30] O padrão que vocês acabaram de nomear em código de vocês tem
nome: Abstraction Bloat. Vou mostrar os 4 jeitos exatos que ele aparece.`

---

## S8 — `</SINAL 1 DE 4 · CLASSE DEUS>`

**Visual:** bloco de código real, estilo terminal/card — trecho do checklist, categoria
1.1.

Frase-âncora:
> UM ARQUIVO.
> CINCO RESPONSABILIDADES
> QUE NÃO TÊM NADA A VER.

```js
// sinal: um arquivo, cinco responsabilidades que não têm nada a ver entre si
class LeadManager {
  validate(lead) { /* ... */ }
  formatForDisplay(lead) { /* ... */ }
  saveToDatabase(lead) { /* ... */ }
  sendWelcomeEmail(lead) { /* ... */ }
  logActivity(lead) { /* ... */ }
  calculateLeadScore(lead) { /* ... */ }
}
```

**Por que o modelo produz isso:** o prompt raramente pede uma responsabilidade só —
pede a feature inteira ("crie o fluxo de cadastro de lead"). Sem alguém dizendo onde a
fronteira fica, um arquivo só é o caminho de menor resistência estatístico.

ref: `starter/checklist-sinais-codigo-ia.md` (1.1 — `God Class`)

Notas: `[00:41:30–00:43] Isso é o que alguém de vocês chamou de "faz coisa demais" no
Passo 1. Agora tem nome: Classe Deus.`

---

## S9 — `</SINAL 2 DE 4 · MIRAGEM MODULAR>`

**Visual:** bloco de código real — árvore de arquivos, trecho do checklist, categoria
1.2.

Frase-âncora:
> PARECE SEPARADO.
> É O MESMO CÓDIGO,
> CORTADO SEM CRITÉRIO.

```
src/
  leadService.js     // 40% do que devia estar em leadValidator.js
  leadValidator.js    // 30% do que devia estar em leadService.js
  leadHelper.js        // o resto, sem critério de onde ele deveria estar
```

**Por que o modelo produz isso:** quando você pede "separa isso em arquivos menores", o
modelo otimiza pra "arquivo menor" (uma métrica de linha de código), não pra "fronteira
que faz sentido pro domínio" — porque a segunda exige saber o domínio, e a primeira é
sintática.

ref: `starter/checklist-sinais-codigo-ia.md` (1.2 — `Modular Mirage`)

Notas: `[00:43–00:44:30] Arquivo separado não é sinônimo de responsabilidade separada.
É o mesmo bloat, só que fatiado.`

---

## S10 — `</SINAL 3 DE 4 · CAMADA DE PASSAGEM>`

**Visual:** bloco de código real — trecho do checklist, categoria 1.3.

Frase-âncora:
> ZERO LÓGICA PRÓPRIA.
> É UM ALIAS CARO.

```js
// sinal: zero lógica própria — é um alias caro
class LeadHandler {
  handle(lead) {
    return this.leadService.process(lead);
  }
}
```

**Por que o modelo produz isso:** padrões de arquitetura enterprise (service, handler,
repository) aparecem muito no material de treino como "boa prática" — o modelo replica
a forma do padrão mesmo quando o problema não tem escala pra justificar a camada.

ref: `starter/checklist-sinais-codigo-ia.md` (1.3 — Camada de Passagem)

Notas: `[00:44:30–00:46] Pergunte: o que essa classe faz que a de baixo não fazia? Se a
resposta for "nada", é isso.`

---

## S11 — `</SINAL 4 DE 4 · NOMEAÇÃO GENÉRICA>`

**Visual:** diagrama novo — a lista de nomes genéricos do checklist, cada palavra
riscada uma a uma, com seta apontando pra frase final.

Frase-âncora:
> NOME GENÉRICO =
> NINGUÉM DECIDIU
> DE QUEM É AQUELE CÓDIGO.

`Manager` · `Handler` · `Processor` · `Util` · `Helper` · `Service` · `Data`

1. Nenhum desses nomes vem do vocabulário do seu domínio — vêm do vocabulário de "como
   construir software em geral".
2. **Por que o modelo produz isso:** esses nomes são o denominador comum estatístico de
   qualquer sistema, então são o palpite mais seguro quando o modelo não sabe o domínio
   de verdade.
3. Ponte direta: é aqui que este checklist se conecta com DDD estratégico — linguagem
   ubíqua é o antídoto pra este sinal específico.

ref: `starter/checklist-sinais-codigo-ia.md` (1.4)

Notas: `[00:46–00:47] Contem no código de vocês mesmos: quantos arquivos do seu src/
têm uma dessas palavras no nome? Guardem o número — ele volta no Lab 1.`

---

## S12 — `</ABSTRACTION BLOAT>` — o nome, com dado

**Visual:** gráfico de barras simples — duplicação vs. refatoração, 2022 → hoje.

Frase-âncora:
> NÃO É IMPRESSÃO DE VOCÊS.
> É PADRÃO MEDIDO
> EM MILHÕES DE LINHAS.

1. Duplicação de código subiu de 8,3% (2020) pra 12,3% (2024) em 211 milhões de linhas
   analisadas.
2. Entre 2023–2026: duplicação +81%, refatoração -70%, a proporção
   duplicação:refatoração virou de 1:2 pra 5:1.
3. Um paper acadêmico já nomeou os padrões que vocês acabaram de ver: "God Class
   Syndrome", "Modular Mirage".
4. **Não existe métrica única oficial de "Abstraction Bloat"** — esse nome é do curso;
   os dados são sinal indireto forte, não prova fechada. Se alguém te vender uma
   ferramenta que mede isso com precisão, desconfie.

ref: `gitclear.com/ai_assistant_code_quality_2025_research` ·
`gitclear.com/the_ai_code_quality_maintainability_gap` · `arxiv.org/html/2605.02741v1`

Notas: `[00:47–00:48:30] Digam o limite do dado na cara: o nome é nosso, os números são
sinal indireto publicado por quem audita código em escala.`

---

## S13 — `</ABSTRACTION BLOAT>` — o sinal observável

**Visual:** diagrama novo — 3 mini-cards lado a lado, um por item da lista abaixo.

Frase-âncora:
> SEM MÉTRICA OFICIAL,
> MAS COM 3 SINAIS
> QUE VOCÊ OBSERVA SOZINHO.

1. **Razão duplicação : refatoração** no seu histórico de commits — duplicar mais do
   que extrai é acumular bloat sem perceber.
2. **Linhas por método/arquivo crescendo sem o domínio ter crescido** — se a feature é
   a mesma de duas semanas atrás mas o arquivo dobrou, pergunte por quê.
3. **Nomes genéricos por arquivo** — conte quantos arquivos do seu `src/` têm os nomes
   do slide anterior. Não é proibido — é um contador de atenção.

ref: `starter/checklist-sinais-codigo-ia.md` (seção final)

Notas: `[00:48:30–00:50] Isso é o que vocês vão aplicar no Lab 1, daqui a pouco: não
tem ferramenta que faça essa leitura por vocês — é observação disciplinada, toda vez
que vocês revisam um diff.`

---

## S14 — `</O ERRO DE PROPÓSITO>` — o que quebra

**Visual:** nenhum — demo ao vivo pedindo pro agente "adicionar um campo" num arquivo
já bloated de um aluno voluntário (ou no `repo-plantado`).

Kicker: `DEMO 1 · O AGENTE NÃO VAI SE RECUSAR A PIORAR`

> PEDIMOS "ADICIONA UM CAMPO."
> VEJAM O QUE ELE EMPILHA.

Notas: `[00:50–00:52:30] Peça, ao vivo, pro Claude Code "adicionar um campo novo" num
arquivo já bloated. Deixe o agente responder. Na maioria dos casos ele vai adicionar
mais uma camada em vez de perguntar se aquilo deveria estar ali.`

---

## S15 — `</O ERRO DE PROPÓSITO>` — o porquê

**Visual:** nenhum — slide de debrief, ainda com a tela do agente visível ao fundo.

Frase-âncora:
> ELE NÃO VAI SE RECUSAR
> A PIORAR SEU CÓDIGO.
> SÓ VOCÊ DECIDE ISSO.

1. Ele fez o bloat crescer porque foi isso que pedimos, sem restrição nenhuma.
2. Ele não pondera se aquela camada deveria existir — só executa o pedido do jeito
   mais direto.
3. Isso prepara o Lab 1: marcar o sinal é decisão de vocês, não do agente.
4. Ponte pro Bloco 2: a fronteira que falta é exatamente o que a linguagem de DDD
   estratégico nomeia.

Notas: `[00:52:30–00:55] Ele fez o bloat crescer porque foi isso que pedimos, sem
restrição. Ele não vai se recusar a piorar seu código — só vocês decidem isso.`

---

## S16 — `MÃO NA MASSA` — LAB 1

**Visual:** ícone — lupa sobre um cronômetro de 15 min (card de lab).

Kicker: `> LAB 1 — 15 MIN`
`</DIAGNÓSTICO>`

1. Abram o próprio MCP server da semana 4 (ou `starter/repo-plantado/`, se não
   tiverem nada rodando).
2. Marquem, no chat ou num arquivo `DIAGNOSTICO.md`, quantos dos 6 sinais do
   checklist aparecem, com número de linha.
3. **Não conserta nada.** O objetivo é só apontar.
4. Ponto de julgamento: decidir se um sinal encontrado é grave o suficiente pra anotar,
   ou é ruído — o checklist não pontua sozinho, quem lê o código decide.

ref: `GUIA-DO-ALUNO.md`

Notas: `[00:55–01:10] Instrução única: marquem os sinais, não consertem nada.`

---

## S17 — Virada de bloco

**Visual:** nenhum — frase-âncora sozinha, marcador de virada de bloco.

> VOCÊS JÁ SABEM
> DIAGNOSTICAR.
> FALTA O VOCABULÁRIO
> PRA CORTAR A FRONTEIRA.

Notas: `[01:10–01:10:30] Não é curso de DDD. É a ferramenta específica pra um problema
específico que acabou de aparecer no Lab 1: código sem fronteira clara.`

---

## S18 — `</LINGUAGEM UBÍQUA>` — cinco nomes, uma pessoa só

**Visual:** diagrama novo — 5 cards com os 5 nomes abaixo, cada um com uma seta
convergindo pra um ícone de pessoa só, no centro.

Kicker: `BLOCO 3 · TEORIA + DEMO 2`

Frase-âncora:
> A MESMA PESSOA.
> CINCO NOMES DIFERENTES.
> NENHUM COMBINADO
> COM O NEGÓCIO.

```
src/leadService.js     → function scoreLead(lead)
src/contactForm.js     → function saveContact(contact)
src/salesPipeline.js   → function moveProspect(prospect)
src/crmSync.js         → function syncCliente(cliente)
src/emailCampaign.js   → function notifyInteressado(interessado)
```

1. `lead`, `contact`, `prospect`, `cliente`, `interessado` — cinco arquivos, cinco
   nomes, a mesma pessoa que preencheu um formulário uma vez.
2. Cada sessão com o agente escolheu o nome que "soava certo" naquele momento — sem
   ninguém perguntar ao dono do negócio qual é a palavra dele.

Notas: `[01:10:30–01:13] Isso não é o sinal 1.4 de novo — 1.4 é sufixo técnico genérico
(Manager, Handler). Isso aqui é o negócio inteiro sem uma palavra combinada.`

---

## S19 — `</LINGUAGEM UBÍQUA>` — o glossário que resolve

**Visual:** diagrama novo — tabela/glossário resolvendo os 5 nomes do slide anterior
numa palavra só.

Frase-âncora:
> SE O DONO DO NEGÓCIO
> NÃO ENTENDE A PALAVRA,
> ELA NÃO É DO DOMÍNIO.

| nome encontrado no código | decisão |
|---|---|
| `lead`, `contact`, `prospect`, `cliente`, `interessado` | vira **`lead`** — é a palavra que o time comercial já usa fora do código |

1. Termo cunhado por Eric Evans, popularizado por Fowler: linguagem ubíqua é a mesma
   palavra que o dono do negócio usa, dentro do código.
2. A linguagem evolui junto com o entendimento da equipe sobre o negócio — o glossário
   não é definitivo, é o acordo de hoje.
3. Conecta direto com o sinal 1.4: nome genérico geralmente significa que ninguém
   decidiu de quem é aquele código; nome duplicado significa que ninguém combinou a
   palavra certa.

ref: `martinfowler.com/bliki/UbiquitousLanguage.html`

Notas: `[01:13–01:15] Manager, Handler, Service — nenhuma dessas palavras existe no
domínio de vocês. Existe no vocabulário de "como se constrói software em geral".`

---

## S20 — `</BOUNDED CONTEXT>` — o nome

**Visual:** diagrama novo, pequeno — um ícone de medidor (`meter`) com duas etiquetas
diferentes coladas nele, uma pro time de faturamento, outra pro time de manutenção de
rede.

Frase-âncora:
> ONDE UMA PALAVRA
> PARA DE SIGNIFICAR
> UMA COISA.

1. Sistema grande não tem um modelo único viável — Fowler é explícito sobre isso.
2. Exemplo clássico do próprio Fowler: "meter" (medidor) significa coisas diferentes em
   dois times de uma companhia elétrica.
3. Cada bounded context tem sua própria linguagem ubíqua, internamente consistente.

ref: `martinfowler.com/bliki/BoundedContext.html`

Notas: `[01:15–01:18:30] Bounded context é onde uma palavra para de significar uma
coisa e passa a significar outra.`

---

## S21 — `</BOUNDED CONTEXT>` — o diagrama

**Visual:** imagem — print real do `excalidraw/board-bounded-contexts.excalidraw`, o
exemplo já preenchido (Domínio 1 do catálogo: Listagem de Perfis da PDA).

1. **Contexto PERFIS** (dentro): termos `Aluno`, `Habilidade`, `Portfólio`,
   `Depoimento` — cadastro, edição, dados privados do aluno.
2. **Contexto VITRINE PÚBLICA** (dentro): termos `Visitante`, `Filtro`, `Card de
   Perfil` — busca e exibição pública.
3. **O que fica de fora de cada um:** PERFIS não faz busca pública; VITRINE PÚBLICA não
   edita dado de aluno. A seta entre os dois é rotulada com o verbo da relação
   (`consulta`).
4. A mesma fronteira funciona pra outro domínio do catálogo (ex.: domínio 5, agente de
   revisão de código) — troca-se o nome das caixas, a relação continua a mesma.
5. Hoje vocês nomeiam 2 candidatos no próprio projeto (Lab 2). Vão desenhar isso de
   verdade na aula 2 — não adianta o desenho aqui.

ref: `excalidraw/board-bounded-contexts.excalidraw`

Notas: `[01:18:30–01:22] Mostre o exemplo já preenchido do board. O que está dentro de
cada caixa, e o que cruzar a fronteira quebraria.`

---

## S22 — `</O QUE FICA DE FORA HOJE>` — DDD tático

**Visual:** ícone leve — uma seta saindo do quadro apontando pra um card de link
externo, sinalizando "fora do escopo hoje".

Frase-âncora:
> EXISTE.
> NÃO É O QUE RESOLVE
> O SEU PROBLEMA HOJE.

Entidade, objeto de valor, agregado, repositório — isso é sobre como implementar
**dentro** de um contexto que já existe. O problema de vocês hoje é que a fronteira nem
existe ainda. Link pra quem quiser adiantar.

ref: o material de DDD tático indicado no bloco assíncrono desta semana

Notas: `[01:22–01:24] Existe uma segunda metade do DDD — isso é DDD tático. Não é isso
que resolve o problema de vocês hoje.`

---

## S23 — `MÃO NA MASSA` — Demo 2 ao vivo: separar por domínio, não por camada

**Visual:** nenhum — kicker e demo ao vivo.

Kicker: `DEMO 2 · AO VIVO`

> SEPARA POR BOUNDED CONTEXT.
> SEM ME DIZER
> QUAL É A FRONTEIRA.

Notas: `[01:24–01:25:30] Pegue o LeadManager do repo-plantado (ou o código do aluno da
Demo 1) e pergunte ao Claude Code, ao vivo: "esse arquivo mistura mais de um domínio.
Me ajuda a separar por bounded context, sem me dizer você mesmo qual é a fronteira —
faça perguntas" (ver ROTEIRO-FACILITADORA.md, Demo 2, item 4).`

---

## S24 — `</O ERRO DE PROPÓSITO 2>` — o que quebra

**Visual:** GIF descrito — alguém organizando caixas por cor quando devia organizar por
conteúdo (humor, tema "organização enganosa").

Frase-âncora:
> SEPARAR POR TIPO DE OPERAÇÃO
> NÃO É SEPARAR
> POR DOMÍNIO.

O agente propôs: validação / persistência / notificação — uma fronteira técnica, não
uma fronteira de domínio.

Notas: `[01:25:30–01:27] Pare e nomeie: essa é uma fronteira técnica, não de domínio —
ele separou por tipo de operação, não por significado de negócio.`

---

## S25 — `</O ERRO DE PROPÓSITO 2>` — o porquê

**Visual:** nenhum — slide de debrief.

1. Isso não resolve o problema: `saveToDatabase` decidindo quando notificar continua lá
   dentro, só mudou de arquivo.
2. Só quem conhece o negócio decide se "quando notificar" é regra de outro domínio —
   isso um agente não tem como saber.
3. **Este é o ponto de julgamento indispensável da semana** — nomeado assim, sem
   meio-termo.

Notas: `[01:27–01:29] O domínio de "engajamento" vazando pra dentro do domínio de
"cadastro de lead" — isso só um humano que conhece o negócio decide.`

---

## S26 — `</BÔNUS · .claude/rules/>` (opcional, se sobrar tempo)

**Visual:** bloco de código real — frontmatter `paths`.

Frase-âncora:
> REGRA POR PASTA,
> AGORA QUE A PASTA
> SIGNIFICA ALGO.

```yaml
---
paths: ["src/vitrine/**"]
---
```

Frontmatter `paths` escopa uma regra a um bounded context — visto em slide na semana 3,
praticado pela primeira vez aqui, porque só agora existe fronteira pra escopar.

ref: `code.claude.com/docs/en/memory`

Notas: `[01:29–01:30] Só se couber, sem forçar: dá pra ter uma regra por bounded
context, tipo rules/vitrine.md com paths escopando pra aquela pasta.`

---

## S27 — `MÃO NA MASSA` — LAB 2

**Visual:** ícone — lupa sobre um cronômetro de 25 min (card de lab).

Kicker: `> LAB 2 — 25 MIN`
`</LINGUAGEM + FRONTEIRA>`

1. Liste 5 termos do próprio domínio que um cliente leigo entenderia — sem `Manager`,
   `Handler`, `Service` na lista.
2. Aponte 2 candidatos a bounded context no próprio código — nem que seja um esboço.
3. Escreva 1 frase: "hoje esses dois contextos estão misturados em
   `<arquivo/função>`."

ref: `GUIA-DO-ALUNO.md`

Notas: `[01:30–01:55] Isso é o material bruto que a aula 2 vai desenhar — não
adiantem o desenho aqui, isso é da aula 2.`

---

## S28 — `</FECHAMENTO>`

**Visual:** nenhum.

Recap por pergunta, não por exposição:

1. "O que é Abstraction Bloat?"
2. "O que é bounded context?"

Vocês entraram hoje sabendo só que a tool funciona. Saem sabendo se o código dela é
bom — e com o vocabulário pra decidir onde ele deveria terminar.

Notas: `[01:55–01:56] Pergunte, não conte. A resposta certa é a deles, com as palavras
deles.`

---

## S29 — `</ATIVIDADE DE FIXAÇÃO>`

**Visual:** ícone — checklist com o entregável marcado.

A atividade de fixação da semana está em `ENTREGAVEL.md` — diagnóstico do próprio
código + material de linguagem ubíqua e bounded context deste Lab 2.

ref: `ENTREGAVEL.md`

Notas: `[01:56–01:57] Quem terminou os dois labs já tem o material bruto do
entregável — falta só organizar.`

---

## S30 — `</AULA 2 · MODELAGEM COLETIVA>`

**Visual:** diagrama novo — 3 bonequinhos de cores diferentes lado a lado, cada cor
representando um domínio do catálogo (trio cruzado).

Kicker: `> PRÓXIMA AULA`

1. **Tema:** modelagem coletiva — vocês desenham, a facilitadora não desenha.
2. **Formato:** trios cruzados por domínio diferente do catálogo (mecânica já
   conhecida desde a semana 3); cada aluno duplica o próprio board Excalidraw.
3. **O que trazer pronto:** os 2 candidatos a bounded context e os 5 termos de
   linguagem ubíqua do Lab 2 de hoje, escritos.
4. **Como os trios se formam:** sorteio cruzado — um colega de domínio diferente
   enxerga fronteira que você, preso no seu próprio vocabulário, não vê.

Notas: `[01:57–01:58] Aula 2 é só desenho — tragam os 2 candidatos prontos, escritos,
porque hoje vocês vão defender essa fronteira pros colegas.`

---

## S31 — `</O BOARD VAZIO>`

**Visual:** imagem — screenshot real do `excalidraw/board-bounded-contexts.excalidraw`,
as zonas ainda tracejadas (vazias), antes de qualquer aluno preencher.

Frase-âncora:
> O ANDAIME É NOSSO.
> O PRÉDIO É SEU.

1. Legenda + o exemplo do Domínio 1 já vêm preenchidos — é o único desenho que a
   facilitadora entrega pronto.
2. `MEU BOUNDED CONTEXT 1` e `2` (caixas tracejadas) + `linguagem ubíqua deste
   contexto` sob cada uma — a turma preenche na Rodada de trios 1.
3. Uma seta tracejada entre os dois contextos, com o verbo da relação — ajustada ao
   vivo pelo dono do board durante as plenárias.
4. `MEU BOUNDED CONTEXT 3` (opcional) e o bônus `.claude/rules/` — só no ajuste final,
   se sobrar tempo.

ref: `excalidraw/board-bounded-contexts.excalidraw`

Notas: `[01:58–01:59] Isso é o andaime vazio que vocês vão preencher na aula 2. Eu não
abro esse arquivo pra desenhar nada — quem arrasta caixa é sempre o dono do projeto.`

---

## S32 — `</PRÓXIMOS PASSOS>`

**Visual:** nenhum.

1. Aula 2 é laboratório puro — sem slide de apoio além dos 3 de regras do jogo.
2. Entregável final: ver `ENTREGAVEL.md`.
3. Vocês saem de hoje com o diagnóstico. Saem da aula 2 com o mapa — e vão usar esse
   vocabulário de novo, sem reexplicação, a partir da semana 6.

Notas: `[01:59–02:00] Aula 2 é só desenho — tragam os 2 candidatos prontos. Hoje vocês
pararam de só perguntar se a tool funciona e começaram a perguntar se o código dela é
bom.`

---

## AULA 2 (laboratório puro — só regras do jogo, inalterado)

### A1. Capa

`SEMANA 5 · AULA 2 · MODELAGEM COLETIVA` — subtítulo: "Vocês desenham. Eu não desenho."

### A2. `</COMO FUNCIONA HOJE>`

Trios cruzados por domínio · cada um duplica o próprio board · 25 min de trio, 15 min de
plenária sorteada, repete · ninguém sai sem 2 bounded contexts nomeados. Imagem: o board
Excalidraw vazio (as zonas tracejadas), pra todo mundo ver o que vai preencher.

### A3. `</ROTEIRO DE PERGUNTAS DE FRONTEIRA>`

As 4 perguntas do `ROTEIRO-FACILITADORA.md` (seção "Roteiro de perguntas de fronteira"),
projetadas fixas na tela durante as rodadas de trio, pra quem esquecer.

(Sem mais slides — o resto da aula é o Excalidraw de cada aluno, projetado ao vivo nas
plenárias.)
