# Slides — Semana 3: AGENTS.md e skills

**Total: 34 slides (aula 5).** Aula 6 continua com os 2 slides mínimos do lab guiado
(ver final deste arquivo) — não expandida, por desenho: é lab, não teoria.

Template PDA: roxo escuro + amarelo, Dela Gothic One (títulos) / IBM Plex Sans (corpo).

Regra de imagem: **no máximo 3 slides consecutivos** sem imagem, diagrama ou GIF.
Marcado como **Visual:** em cada slide que tiver um. A estrela do template não conta.

**Fio condutor da semana** (a aula ainda não tinha um declarado — este é o que se repete
nas transições, nos dois kickers de bloco, no slide de respiro e no fechamento):

> ATÉ VOCÊ CONTAR PRA ELA.

É o final da frase-âncora da capa ("A IA não sabe quais são os seus erros — até você
contar pra ela") e vale pros dois blocos: regra sem erro contado é regra que não existe
ainda; skill sem gatilho contado na `description` é skill que dispara errado.

---

## S1 — Capa

**Visual:** foto/ilustração de um terminal com um arquivo `CLAUDE.md` aberto ao lado de
um `AGENTS.md`, os dois com um símbolo de "=" tachado entre eles (não são a mesma
coisa).

`SEMANA 3`
`</AGENTS.MD E SKILLS>`

Frase-âncora:
> A IA NÃO SABE
> QUAIS SÃO OS SEUS ERROS
> ATÉ VOCÊ CONTAR PRA ELA

Notas: `[00:00–00:02] Bom dia. Semana 3. Vocês já têm um CLAUDE.md desde a semana
passada — hoje a gente descobre se ele serve pra alguma coisa.`

---

## S2 — `</HOJE>`

**Visual:** linha do tempo horizontal com os 7 blocos, ícones simples por bloco (relógio
pro giro, dado pro recap-sorteio, lupa pra demo, mão pro lab).

Kicker: `> LINHA DO TEMPO — AULA 5`

1. Giro das IAs — 10 min
2. Recap ativo — 15 min
3. Teoria + demo 1: por que a IA não escreve as próprias regras — 30 min
4. Lab 1: regra ou ruído — 15 min
5. Teoria + demo 2: progressive disclosure — 20 min
6. Lab 2: sua primeira skill — 25 min
7. Fechamento — 5 min

ref: roteiro completo em `ROTEIRO-FACILITADORA.md`

Notas: `[00:02–00:03] Duas coisas hoje: regra que fica sempre ligada, e skill que só
liga quando você chama. A aula toda é sobre saber diferenciar as duas.`

---

## S3 — `</COMO ACOMPANHAR>`

**Visual:** ícone de check-list com os 2 pré-requisitos marcados.

1. Bloco assíncrono desta semana concluído — sem isso você não entra no lab da
   aula 6.
2. `CLAUDE.md` do seu projeto próprio, sem `TODO`, commitado.
3. Terminal aberto o tempo todo — travou, chama no chat.
4. `MÃO NA MASSA` é quando eu paro de falar e você faz.

ref: `GUIA-DO-ALUNO.md`

---

## S4 — Kicker de bloco: `BLOCO 1`

`> TEORIA + DEMO 1`
`</POR QUE A IA NÃO ESCREVE AS PRÓPRIAS REGRAS>`

Frase-âncora:
> ELE LÊ SEU CÓDIGO.
> ELE NUNCA VIU
> VOCÊ ERRANDO NELE.

Notas: `[00:25–00:26] Vou pedir pro agente gerar um arquivo de regras do zero, na
frente de vocês. Reparem no que ele acerta e no que ele não tem como saber.`

---

## S5 — O pedido

1. Abro um projeto que a turma não viu (ou o `aula1-fundamentos`, se for mais simples).
2. Rodo `/init` dentro do Claude Code, ao vivo, sem preparar nada antes.
3. Antes de mostrar o resultado, pergunto à turma: "o que esse arquivo pode saber só
   lendo o código? O que ele não pode saber?"
4. Guardo as respostas — o slide seguinte é o resultado real.

ref: <https://code.claude.com/docs/en/memory> — seção "Set up a project CLAUDE.md"

Notas: `[00:26–00:28] Não respondam ainda em voz alta pra mim — decide com quem está do
seu lado. Eu quero ver se a turma já chuta certo antes de eu mostrar.`

---

## S6 — O `CLAUDE.md` genérico que voltou

**Visual:** screenshot real do terminal rodando `/init` (capturar durante o ensaio) —
mostrando o `CLAUDE.md` gerado: stack, comandos, estrutura de pastas.

1. Ele leu o `package.json` — acertou a stack.
2. Ele leu os scripts — acertou o comando de teste.
3. Ele leu a árvore de pastas — descreveu a estrutura.
4. Ele **não** escreveu nenhuma regra sobre um erro que ainda não aconteceu.

ref: <https://code.claude.com/docs/en/memory> — seção "Set up a project CLAUDE.md"

Notas: `[00:28–00:30] Reparem que ele acertou tudo que estava no código. O que ele não
leu foi a nossa história de erro. Ele nunca viu vocês brigando com esse projeto.`

---

## S7 — Erro proposital: o que vai quebrar

**Visual:** diagrama simples de duas colunas — "SEM a regra" (seta vermelha pro agente
editando `tests/`) vs. "COM a regra" (seta verde, agente não toca em `tests/`), a coluna
da direita ainda apagada (o slide seguinte é que explica o porquê).

`MÃO NA MASSA — NÃO. AINDA NÃO. SÓ ASSISTE ESSA PARTE.`

1. Mesmo projeto, só com o `CLAUDE.md` genérico do `/init` — nenhuma regra escrita
   ainda.
2. Peço: *"adiciona um teste pra essa função"*, numa função cujo teste real está em
   `tests/`.
3. A regra "não edite `tests/`" não existe em lugar nenhum. Ele não tem como adivinhar.
4. Deixo o agente editar (ou tentar editar) o arquivo de teste pra fazer passar. **Isso é
   o erro proposital.**

ref: `code.claude.com/docs/en/best-practices#write-an-effective-claude-md`

Notas: `[00:30–00:33] Não escondam a reação de vocês. Ele editou o teste. Isso é
exatamente o tipo de coisa que só vira regra depois que já doeu uma vez.`

---

## S8 — Erro proposital: o porquê

1. A regra não existia porque ninguém sabia que precisava dela — nem eu, até agora.
2. Ninguém sabe, antes do erro acontecer. Nem você, na primeira vez que usa um projeto.
3. É por isso que a IA não escreve essa regra sozinha: ela não tem acesso ao que ainda
   vai dar errado com **você**, nesse projeto.
4. Fio condutor: ela não sabe — até você contar pra ela.

ref: `code.claude.com/docs/en/best-practices#write-an-effective-claude-md`

Notas: `[00:33–00:35] Esse é o argumento inteiro da aula de hoje, resumido num slide.
Guarda essa frase, ela volta lá no bloco de skills também.`

---

## S9 — O escrito à mão, a partir de erro real

**Visual:** screenshot/trecho real de um `CLAUDE.md` com uma regra comentada citando a
origem ("essa regra existe porque, na sessão de tal dia, o agente fez X").

1. Abro um `CLAUDE.md` meu (ou da referência da aula 1) com regras nomeadas por origem.
2. Cada regra cita a sessão e o erro que a gerou — não é regra genérica de boas
   práticas, é memória de um erro específico.
3. A regra "os arquivos em `tests/` são a especificação, nunca edite" nasceu de um erro
   igual ao que a turma acabou de ver.
4. Regra escrita é memória de erro, não teoria abstrata.

Notas: `[00:35–00:38] Não é acaso que essa regra parece exatamente com o que aconteceu
há dois slides. É assim que toda regra boa nasce.`

---

## S10 — Contraste lado a lado

**Visual:** diagrama de duas colunas lado a lado — esquerda "GENÉRICO (`/init`)":
caixas com "stack", "comandos", "estrutura de pastas", "zero histórico de erro";
direita "ESCRITO A PARTIR DE ERRO": caixas com "regra nomeada", "origem no commit ou na
sessão", "previne a recorrência". Uma seta horizontal no meio rotulada "mesma
ferramenta, histórico diferente".

1. As duas colunas usam o mesmo `CLAUDE.md`, o mesmo formato de arquivo.
2. A diferença inteira está em quem viu o erro acontecer: o agente, nunca; você, sempre.
3. Um `CLAUDE.md` só genérico não é errado — é incompleto. Falta a segunda coluna.
4. O seu trabalho depois do `/init` é essa segunda coluna, uma regra por vez.

Notas: `[00:38–00:40] Ninguém espera que vocês cheguem no /init com a coluna da direita
pronta. Ela se escreve com o tempo, um erro de cada vez.`

---

## S11 — Correção e repetição

```
$ /clear
$ # CLAUDE.md agora tem: "os arquivos em tests/ são a especificação, nunca edite."
$ # peço de novo: "adiciona um teste pra essa função"
```

1. Adiciono a regra "os arquivos em `tests/` são a especificação, nunca edite" ao
   `CLAUDE.md`.
2. `/clear` — preciso tirar a memória da sessão anterior da janela, senão não é um
   teste limpo.
3. Repito exatamente o mesmo pedido de antes.
4. **O que reparar na saída:** ele não tocou em `tests/` dessa vez. É isso que muda
   quando a regra existe — nada mais no código mudou, só o `CLAUDE.md`.

ref: `code.claude.com/docs/en/best-practices#write-an-effective-claude-md`

Notas: `[00:40–00:43] A regra não existia porque eu não sabia que precisava dela.
Agora existe porque vocês viram o erro comigo. É o mesmo caminho que vocês vão fazer no
Lab 1, com o erro de vocês.`

---

## S12 — Hierarquia: managed, usuário, projeto, local

**Visual:** diagrama de 4 caixas empilhadas (managed policy no topo, depois usuário,
depois projeto, depois local), seta lateral indicando "mais específico = lido por
último = ganha o conflito".

1. **Managed policy** (org) — `/etc/claude-code/CLAUDE.md` ou equivalente. Time de TI,
   não é você quem edita.
2. **Usuário** — `~/.claude/CLAUDE.md`. Suas preferências, em todo projeto seu, nesta
   máquina.
3. **Projeto** — `./CLAUDE.md`, na raiz do repositório. Time inteiro, versionado via
   git.
4. **Local** — `./CLAUDE.local.md`, no `.gitignore`. Só você, só nesse projeto, nesse
   checkout.
5. `.claude/rules/<arquivo>.md` com escopo por `paths` — regra que só vale pra uma parte
   do código (ex.: só pra `src/api/`), pra quem tem um `CLAUDE.md` crescendo demais.

ref: <https://code.claude.com/docs/en/memory#choose-where-to-put-claude-md-files>

Notas: `[00:43–00:47] Pra vocês hoje só importam projeto e local. Mas o time de vocês
daqui a um ano pode ter os quatro, mais regras escopadas. Guarda o nome, não precisa
usar ainda.`

---

## S13 — Caso prático: conflito entre camadas

**Visual:** diagrama de duas caixas colidindo com um "X" no meio virando um "✓" — caixa
"PROJETO (`CLAUDE.md`)" dizendo "nunca edite `tests/`" contra caixa "LOCAL
(`CLAUDE.local.md`)" dizendo "pode editar `tests/` nesta branch de refatoração", com a
seta final apontando pra "LOCAL" como vencedor.

1. Você está numa branch de refatoração dos próprios testes — só nessa branch, só na
   sua máquina, quer que o agente possa tocar em `tests/`.
2. Você não edita o `CLAUDE.md` do projeto (isso mudaria a regra pra todo o time).
3. Você escreve a exceção no seu `CLAUDE.local.md`, que não vai pro git.
4. Local é lido depois de projeto — mais específico ganha. A regra do time continua
   valendo pra todo mundo, menos pra você, nessa branch, hoje.

ref: <https://code.claude.com/docs/en/memory#choose-where-to-put-claude-md-files>

Notas: `[00:47–00:50] Esse é o tipo de situação em que vocês vão precisar da hierarquia
de verdade — não pra decorar a tabela, pra saber em qual arquivo escrever a exceção sem
quebrar a regra de todo mundo.`

---

## S14 — `AGENTS.md` não é `CLAUDE.md`

**Visual:** diagrama de ponte — caixa "AGENTS.md" (padrão aberto, ícone de vários
logos de agente) conectada por uma seta rotulada "@import ou symlink" a uma caixa
"CLAUDE.md" (ícone do Claude Code).

1. `AGENTS.md` — formato aberto, mantido pela Agentic AI Foundation. Funciona em
   Codex, Cursor, Copilot e outros.
2. **O Claude Code não lê `AGENTS.md` direto.** Ele lê `CLAUDE.md`.
3. Ponte: `@AGENTS.md` na primeira linha do `CLAUDE.md`, ou `ln -s AGENTS.md CLAUDE.md`.
4. Uma regra, escrita uma vez, funcionando nos dois ecossistemas — e no Windows sem
   privilégio de administrador, o import é mais simples que o symlink.

ref: <https://agents.md/> · <https://code.claude.com/docs/en/memory#agentsmd>

Notas: `[00:50–00:55] Isso não é detalhe de rodapé. Se o time de vocês usa mais de um
agente de código — e vai usar — essa ponte é o que evita escrever a mesma regra duas
vezes e ela divergir com o tempo. Mostro ao vivo: crio o AGENTS.md, aponto o CLAUDE.md
pra ele com @import, e rodo /context pra provar que os dois carregaram.`

---

## S15 — `MÃO NA MASSA` — Lab 1

**Visual:** ícone de balança — "erro real" de um lado, "regra candidata" do outro,
equilibrando.

`> LAB 1 — 15 MIN`
`</REGRA OU RUÍDO?>`

1. Escolha um erro real do Mural da Alucinação (ou seu).
2. Escreva a regra candidata.
3. Teste antes/depois — sem a regra, com a regra.
4. Só commita se o comportamento mudou de verdade.

ref: `GUIA-DO-ALUNO.md`

---

## S16 — Kicker de bloco: `BLOCO 2`

`> TEORIA + DEMO 2`
`</PROGRESSIVE DISCLOSURE>`

Frase-âncora:
> CLAUDE.MD CUSTA TOKEN
> EM TODA SESSÃO.
> SKILL SÓ CUSTA
> QUANDO VOCÊ CHAMA.

Notas: `[01:10–01:11] Regra é o que precisa estar sempre lá. Skill é o que só precisa
estar lá quando você for usar. Vou provar isso com número, não com opinião.`

---

## S17 — Regra sempre carregada × skill sob demanda

**Visual:** diagrama de duas barras horizontais — "CLAUDE.md / regras": barra cheia do
início ao fim da sessão, rótulo "carrega em toda mensagem, use ou não"; "Skill": barra
vazia até uma seta "invocação" no meio, só depois enche, rótulo "zero custo até você
chamar — some de novo quando não está em uso".

1. Todo `CLAUDE.md` que se aplica ao projeto entra na janela de contexto assim que a
   sessão começa. Sempre. Mesmo se você não usar nada dele naquela conversa.
2. Uma skill só entra quando é invocada — antes disso, o que o agente vê é só o nome e a
   `description`, algumas linhas.
3. Isso não é limitação técnica, é economia deliberada: nem todo conhecimento precisa
   estar sempre presente.
4. A pergunta certa não é "isso é importante?" — é "isso precisa estar sempre aqui, ou
   só quando eu for usar?"

ref: <https://code.claude.com/docs/en/skills>

Notas: `[01:11–01:12] Guarda essa pergunta. Ela decide se uma coisa vira regra no
CLAUDE.md ou vira skill.`

---

## S18 — A analogia do manual

**Visual:** ilustração de um manual técnico aberto — capa/índice em destaque, capítulos
ao lado, apêndices ao fundo, meio apagados (não carregados ainda).

1. Índice — sempre visível (a `description` da skill, sempre no contexto).
2. Capítulos — abertos só quando você precisa (o corpo do `SKILL.md`).
3. Apêndices — consultados raramente, ficam à parte (o `reference.md`).
4. Ninguém lê o apêndice inteiro pra saber se o livro serve pra ele.

ref: <https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills>

Notas: `[01:12–01:13] É a mesma lógica de qualquer manual bom: você não lê o apêndice
técnico pra decidir se abre o livro.`

---

## S19 — Meça antes

```
$ /context
```

1. `/context` limpo, sem nenhuma skill customizada ainda.
2. Anoto o número na tela — vai ser o "antes" do contraste que fecha esse bloco.
3. Essa é a linha de base: é isso que toda sessão já custa, sem skill nenhuma.
4. Guardem esse número — o slide de comparação, mais pra frente, usa ele de novo.

Notas: `[01:13–01:14] Não decorem o número exato, só a ordem de grandeza. É o "antes"
que importa.`

---

## S20 — A skill gorda, ao vivo

```yaml
---
name: ajuda-geral
description: ajuda com várias coisas do projeto
---
```

`MÃO NA MASSA — SÓ ASSISTE. TESTA NA SUA VEZ.`

1. Crio uma skill nova com esse frontmatter — nome vago, `description` vaga de
   propósito.
2. Cola no corpo do `SKILL.md` umas 150–200 linhas de convenções, exemplos e checklists
   direto — nada em arquivo separado.
3. Nenhum gatilho específico em lugar nenhum. É o mesmo erro do `CLAUDE.md` genérico do
   começo da aula, só que em forma de skill.
4. Próximo slide: o que acontece quando eu peço uma tarefa qualquer.

ref: <https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices>

Notas: `[01:14–01:16] Reparem que estou escrevendo ela errado de propósito, do mesmo
jeito que fiz o CLAUDE.md errado lá no começo. É o mesmo erro, roupa diferente.`

---

## S21 — Falso positivo: o que quebra

**Visual:** screenshot/print descrito do chat — peço uma tarefa qualquer, sem nenhuma
relação com o que a skill `ajuda-geral` faz, e ela dispara mesmo assim.

1. Peço uma tarefa qualquer no projeto, sem nenhuma palavra que devesse acionar a
   skill.
2. Ela dispara. **Falso positivo** — invocou quando não devia.
3. Isso não é bug do Claude Code. É a `description` sem gatilho fazendo exatamente o
   que ela permite: qualquer coisa parece "várias coisas do projeto".
4. Próximo slide: o porquê, com o dedo no que falta escrever.

Notas: `[01:16–01:17] Não é sorte ruim. Eu escrevi a description pra isso acontecer.`

---

## S22 — Falso positivo: o porquê

**Visual:** zoom na linha `description: ajuda com várias coisas do projeto` com um X
vermelho onde deveria estar o gatilho ("Use quando...").

1. A `description` é o que decide se o Claude invoca a skill sozinho — não o corpo, não
   o `name`.
2. "Ajuda com várias coisas" não é gatilho, é ausência de gatilho.
3. Mesmo erro do `CLAUDE.md` genérico: tentar cobrir tudo em vez de nomear quando usar.
4. Fio condutor: a skill não sabe quando servir — até você contar pra ela, na
   `description`.

ref: <https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices>

Notas: `[01:17–01:18] Essa frase volta uma terceira vez ainda hoje. Ela não é força de
expressão, é o mecanismo real dos dois casos.`

---

## S23 — Meça depois — o salto de tokens

**Visual:** GIF descrito — barra de contexto (`/context`) enchendo rápido, como um
medidor de combustível indo de vazio pra cheio em poucos segundos, no momento em que a
skill ruim é invocada. (Produzir com captura de tela real do `/context` antes/depois,
não GIF de banco de imagem.)

```
$ /context
```

1. Rodo `/context` de novo, depois da skill `ajuda-geral` ter disparado.
2. O corpo inteiro — as 150–200 linhas — entrou na janela.
3. Contraste com o número que anotamos duas telas atrás: o salto é grande, e não
   precisava ser.
4. Isso custou token numa tarefa que nem tinha a ver com a skill.

Notas: `[01:18–01:19] Olhem a diferença dos dois números na tela. Essa é a conta que a
gente paga quando a skill é gorda e dispara errado.`

---

## S24 — Refatoração ao vivo: a skill enxuta

**Visual:** diagrama — caixa "SKILL.md" encolhendo (150 linhas → 20 linhas), uma seta
saindo dela carregando o excesso pra uma caixa nova "reference.md" ao lado.

1. Corto o `SKILL.md` pra "o que faz + quando usar + passos de alto nível" — o resto sai
   do corpo.
2. O material cortado (convenções, exemplos, checklists) vai pro `reference.md`, arquivo
   separado.
3. Reescrevo a `description` com gatilho específico: padrão "faz X. Use quando Y."
4. Reinvoco só quando o gatilho for real — e só então o `reference.md` é lido, se
   precisar.

ref: <https://code.claude.com/docs/en/skills>

Notas: `[01:19–01:21] Reparem que o conteúdo não mudou — ele só saiu do corpo e foi pra
um arquivo que só é lido quando é preciso.`

---

## S25 — Comparação: contexto consumido nos dois casos

**Visual:** gráfico de barras simples com dois pares de colunas — "skill gorda: antes /
depois de disparar" ao lado de "skill enxuta: antes / depois de disparar", usando os
números reais anotados nos slides de medição anteriores.

1. Skill gorda: o salto de tokens acontece **toda vez** que ela dispara — inclusive nos
   falsos positivos.
2. Skill enxuta: o corpo curto quase não pesa; o `reference.md` só entra se o passo a
   passo pedir.
3. O ganho não está em "ter menos conteúdo" — está em decidir o que precisa estar
   sempre visível e o que só entra quando o trabalho exige.
4. Mesma pergunta do slide da barra: sempre aqui, ou só quando eu for usar?

Notas: `[01:21–01:22] Não é teoria — são os números que a gente mesmo acabou de gerar,
nesta sala, com a skill errada e depois com a certa.`

---

## S26 — Fecha o conceito

Frase-âncora:
> A PERGUNTA CERTA
> NÃO É "ISSO É IMPORTANTE?"
> É "ISSO PRECISA ESTAR
> SEMPRE AQUI?"

Notas: `[01:22–01:23] CLAUDE.md custa token em toda sessão. O corpo de uma skill só
custa quando ela é invocada. Guardem essa pergunta pro Lab 2 — vocês vão precisar dela
pra decidir o que vai no corpo e o que vai pro reference.md de vocês.`

---

## S27 — Anatomia do `SKILL.md`

**Visual:** bloco de código real (terminal), com cada campo do frontmatter numerado e
uma seta apontando pro efeito dele.

```yaml
---
name: revisar-pr-pda
description: Comenta um PR no tom e nas regras da PDA. Use quando o aluno pedir revisão de um PR ou pull request.
allowed-tools: Read, Grep, Bash(git diff *)
---
```

1. `name` — nome de exibição, também vira `/nome`.
2. `description` — o que decide se o Claude invoca sozinho. Próximo slide é só sobre
   esse campo.
3. `allowed-tools` — o que a skill pode rodar sem pedir aprovação. Restrinja.
4. Corpo — só o "o quê" e o "quando". Detalhe longo vai pro `reference.md`.

ref: <https://code.claude.com/docs/en/skills>

Notas: `[01:23–01:25] Cada campo aqui é uma decisão, não preenchimento de formulário.`

---

## S28 — A `description` é o que decide

**Visual:** zoom na linha `description:` do slide anterior, com lupa e a fórmula "faz X.
Use quando Y." destacada em amarelo, seta apontando pra "decide se dispara sozinho".

1. É o único campo que o Claude lê **antes** de abrir o resto da skill — é a vitrine.
2. Padrão que funciona: "faz X. Use quando Y" — a parte "use quando" é o gatilho.
3. Vaga demais ("ajuda com várias coisas") = falso positivo, como vimos há pouco.
4. Restrita demais, sem sinônimo que o aluno realmente usaria = falso negativo — a
   skill existe e nunca dispara.

ref: <https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices>

Notas: `[01:25–01:26] Vocês vão escrever e reescrever essa linha mais do que qualquer
outra parte da skill de vocês hoje.`

---

## S29 — Cenário 1: dispara quando deve

**Visual:** print/terminal descrito — no chat, alguém pede "revisa esse PR pra mim" e a
skill `revisar-pr-pda` aparece invocada.

1. Pedido real: "revisa esse PR pra mim" ou "dá uma olhada nesse pull request".
2. A `description` tem o gatilho exato: "Use quando o aluno pedir revisão de um PR ou
   pull request."
3. A skill dispara. Isso é o resultado esperado — o mínimo que qualquer skill precisa
   provar.
4. Sem esse teste, você não sabe se a skill funciona — só sabe que ela existe.

ref: <https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices>

Notas: `[01:26–01:27] Esse é o teste mais fácil dos três, e o mais esquecido — todo
mundo testa se funciona, quase ninguém testa se ela erra.`

---

## S30 — Cenário 2: não dispara quando não deve

**Visual:** print/terminal descrito — no chat, alguém pede "me ajuda a escrever um
e-mail pro cliente" e a skill `revisar-pr-pda` não aparece.

1. Pedido sem relação: "me ajuda a escrever um e-mail pro cliente".
2. Nenhuma palavra do pedido bate com o gatilho da `description`.
3. A skill **não** dispara — e isso é o resultado certo, não uma falha.
4. Testar isso é a única forma de saber se a `description` está restrita o suficiente.

ref: <https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices>

Notas: `[01:27–01:28] Se a skill de vocês disparasse aqui, o problema não seria o
pedido — seria a description, de novo.`

---

## S31 — Cenário 3: falso positivo

**Visual:** callback ao mesmo print do slide 21 — a skill `ajuda-geral` disparando numa
tarefa sem relação nenhuma.

1. É o cenário que a turma já viu ao vivo: a skill `ajuda-geral` disparando numa tarefa
   qualquer.
2. Diferença dos outros dois: aqui a skill dispara, mas não deveria — o gatilho está
   ausente ou genérico demais.
3. É o cenário mais fácil de não testar, porque "funcionou" (a skill rodou) parece
   sucesso — mas rodou no lugar errado.
4. Os três cenários juntos — dispara quando deve, não dispara quando não deve, falso
   positivo — são a validação cruzada que a dupla de vocês vai fazer na aula 6.

ref: <https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices>

Notas: `[01:28–01:30] Guardem os três nomes. Vocês vão rodar exatamente esses três
cenários contra a skill do colega, não a skill de vocês mesmos — é mais fácil ver o
furo na skill de quem não escreveu ela.`

---

## S32 — `MÃO NA MASSA` — Lab 2

**Visual:** ícone de arquivo se dividindo em dois — "corpo" e "reference.md".

`> LAB 2 — 25 MIN`
`</SUA PRIMEIRA SKILL COM PROGRESSIVE DISCLOSURE>`

1. Escolha algo que você repete de verdade (2+ vezes, mesmo jeito).
2. Copie o esqueleto de `starter/skill-skeleton/`.
3. Decida o que vai pro corpo e o que vai pro `reference.md`.
4. Meça `/context` antes e depois de invocar. Anote os dois números.

ref: `GUIA-DO-ALUNO.md`

---

## S33 — `</ATIVIDADE DE FIXAÇÃO>`

**Visual:** ícone de checklist com as duas faixas (mínima/completa) em cores diferentes.

1. Mínima: regra testada + skill válida + parágrafo pro dono do negócio.
2. Completa: progressive disclosure provada em número + validação cruzada nos 3
   cenários (dispara quando deve / não dispara quando não deve / falso positivo).
3. Prazo: antes da aula 1 da semana 4.
4. Formulário: link fixo, sempre o mesmo.

ref: `ENTREGAVEL.md`

---

## S34 — `</PRÓXIMOS PASSOS>`

**Visual:** preview visual do repo "quebrado de propósito" da semana 4 (pasta com um
ícone de alerta), gerando curiosidade.

1. Aula 6 desta semana: lab guiado paralelo, eu construo, vocês constroem junto.
2. No último checkpoint da aula 6: validação cruzada com a dupla sorteada.
3. Semana 4: MCP na prática — vocês constroem um server próprio, e aí sim, red team:
   quebrar o que o colega construiu.
4. Leva pro Mural da Alucinação: a skill que foi mais fácil de quebrar essa semana.

Notas: `[01:55–02:00] Semana que vem a régua muda: em vez de escrever, vocês vão tentar
quebrar. Hoje foi o ensaio — vocês já treinaram achar falha na skill do colega no
checkpoint final. E, se ficou alguma dúvida: ela não sabia de nada disso até vocês
contarem pra ela.`

---

## Aula 6 — slides mínimos (é lab, não teoria)

### A1 — Abertura

`> AULA 6 — LAB GUIADO PARALELO`
`</EU CONSTRUO, VOCÊ CONSTRÓI JUNTO>`

1. Eu escrevo a skill ao vivo. Vocês replicam a estrutura, não o conteúdo.
2. Checkpoint a cada 20 min — a aula só avança quando a maioria confirmar.
3. Sorteio de duplas agora, em voz alta.
4. Último checkpoint: validação cruzada — vocês tentam quebrar a skill do colega.

**Visual:** grade dos 5 checkpoints com os minutos, estilo linha do tempo (mesma
gramática do slide `</HOJE>` da aula 5).

### A2 — Fechamento

`</O QUE FICA PENDENTE PRO ENTREGÁVEL>`

1. Fechar os 3 cenários formais da validação cruzada.
2. Escrever o parágrafo pro dono do negócio.
3. Copiar os artefatos pra `entrega/` no seu fork.
4. Prazo: antes da aula 1 da semana 4. Formulário de sempre.
