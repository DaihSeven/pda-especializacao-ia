# Outline de slides — Semana 7: Spec-Driven Development

**Total: 37 slides — 34 na aula 1 (S1–S34) + 3 na aula 2 (S35–S37).**
A aula 2 é clínica rotativa: só regras do jogo, teto de 3 slides, sem conteúdo novo — não
expandida (ver nota no início da seção AULA 2).

Gramática PDA: roxo escuro + amarelo, Dela Gothic One (títulos) / IBM Plex Sans (corpo).
Kicker no topo, título em tag `</ASSUNTO>`, frase-âncora curta em caixa alta, pontos
numerados, linha `ref:` com fonte real, `MÃO NA MASSA` onde a facilitadora para de falar,
blocos de terminal reais, notas do apresentador com timestamp.

Regra desta semana: **no máximo 3 slides consecutivos sem imagem, diagrama ou GIF**
(teto apertado — cada slide abaixo tem uma linha `Visual:` descrevendo o recurso real; a
estrela do template não conta).

**Fio condutor (repetido nas transições):** *"Terminar não é um fato. É uma alegação."*
Aparece na capa (S1), no gancho do recap (S4), ecoa na crítica central (S28) e fecha o
recap de uma frase no `</PRÓXIMOS PASSOS>` (S33).

Só a **aula 1** tem slide de apoio (aula 2 é clínica rotativa — no máximo 3 slides de
regras do jogo, sem conteúdo novo).

Os timestamps das notas somam os 120 minutos de cada aula, bloco por bloco, exatamente
como o `ROTEIRO-FACILITADORA.md` define — mais slides não significa mais minutos, significa
slide mais leve e transição mais rápida.

---

## AULA 1 (S1–S34)

### BLOCO 1 · Abertura (0:00–0:10 · 10 min)

## S1 — Capa

`SEMANA 7 · SPEC-DRIVEN DEVELOPMENT` — subtítulo: "Terminar não é um fato. É uma
alegação."

**Visual:** um documento com um cadeado/checkmark estilizado — remete a "contrato
verificável".

**Notas [00:00–00:03]:** abertura do giro das IAs acontece aqui, verbal, sem slide
dedicado — retome a frase de subtítulo ao emendar pro `</HOJE>`.

---

## S2 — `</HOJE>`

Linha do tempo minuto a minuto, espelhando os 7 blocos do `ROTEIRO-FACILITADORA.md`
(giro, recap, teoria+demo1, lab1, teoria+demo2, lab2, fechamento).

**Visual:** barra de tempo horizontal colorida, 7 segmentos proporcionais aos minutos.

**Notas [00:03–00:06]:** "hoje a gente sai do documento e chega na tarefa executável —
sete blocos, duas demos ao vivo, dois laboratórios."

---

## S3 — `</COMO ACOMPANHAR>`

Regras do jogo: terminal aberto, documento RPI da semana 6 aberto, `uv` já instalado
antes da aula (checklist de pré-requisito — ver `GUIA-DO-ALUNO.md`).

**Visual:** ícone de checklist com 3 itens (terminal, RPI, `uv`) e ícone de terminal ao
lado.

**Notas [00:06–00:10]:** confirme em voz alta quem não instalou o `uv` — vamos revisitar
o comando de instalação mais adiante (S8), então não trava ninguém agora.

---

### BLOCO 2 · Recap ativo — semana 6 (0:10–0:25 · 15 min)

## S4 — `</SEMANA PASSADA>`

Frase-âncora: **"VOCÊS JÁ TÊM O CRITÉRIO.\nFALTA A EXECUÇÃO VERIFICADA."**

1. Sorteio de 3 alunos conduz o recap — você só corrige (perguntas exatas no
   `ROTEIRO-FACILITADORA.md`: ler 1 critério EARS e nomear o padrão, ler 1 cenário BDD e
   separar Given/When/Then, quiz relâmpago sobre o que o ADR registra).
2. Gancho explícito: "vocês já têm o documento, e ele já tem critério verificável — os 5
   EARS e os 3 BDD são exatamente isso. O que falta é transformar esse documento em
   tarefa que o agente executa, e ter certeza — não achismo — de que ele executou certo."

**Visual:** GIF de alguém carimbando "APROVADO" num documento sem ler — humor sobre
"terminei" sem prova, ecoa o fio condutor da semana.

**Notas [00:10–00:25]:** conduza os 3 sorteios (rotina fixa, ~2 min cada) e feche com o
gancho no minuto final do bloco.

---

### BLOCO 3 · Teoria + Demo 1 (0:25–0:55 · 30 min)

## S5 — `</QUATRO JEITOS DE FAZER SDD>`

Frase-âncora: **"MESMA IDEIA.\nPESOS DIFERENTES."**

Tabela com os 4 frameworks (Spec Kit, OpenSpec, TLC, Superpowers), replicando a tabela do
`README.md`. Spec Kit destacado — é o que a turma usa hoje.

`ref: github.com/github/spec-kit`

**Visual:** tabela com o cartão do Spec Kit em amarelo/destaque, os outros 3 em roxo
neutro, sem detalhe — só nome e peso.

**Notas [00:25–00:29]:** "existem hoje pelo menos 4 ferramentas nomeadas que fazem a
mesma aposta: spec formal antes de código. Pesos diferentes, mesma ideia central."

---

## S6 — `</OS OUTROS TRÊS>`

Frase-âncora: **"NOME + LINK.\nPRÁTICA FICA PRO SPEC KIT."**

1. **OpenSpec** — leve, markdown puro, 4 comandos (`explore/propose/apply/archive`),
   pensado pra iterar rápido em vez de seguir fase rígida.
2. **Superpowers** (Jesse Vincent) — pesado e disciplinado, metodologia inteira de
   skills obrigatórias, TDD RED-GREEN-REFACTOR incluído, não é opcional.
3. **TLC** — adaptativo, especifica em notação **EARS** (a mesma do seu RPI da semana
   6), pula fases quando a mudança é pequena.

Caixa de alerta: **TLC = Tech Leads Club, comunidade brasileira. NÃO é o model checker
do TLA+** — confusão comum, mas é outra coisa; confirmado por leitura direta do SKILL.md
do framework.

`ref: github.com/Fission-AI/OpenSpec` · `ref: github.com/obra/superpowers` ·
`ref: github.com/tech-leads-club/agent-skills` (skill `tlc-spec-driven`)

**Visual:** 3 cartões lado a lado, um ícone de peso por framework (pena = leve, tijolo =
pesado, engrenagem = adaptativo) + link; abaixo, caixa separada em vermelho/amarelo com a
clarificação do TLC.

**Notas [00:29–00:33]:** não aprofunde os 3 além de uma frase cada. Nomeie o detalhe do
TLC devagar: "não é coincidência — é o mesmo formalismo aparecendo em ferramentas
diferentes porque resolve o mesmo problema: ambiguidade de requisito."

---

## S7 — `</O QUE VOCÊ NÃO VAI FAZER HOJE>`

Frase-âncora: **"NÃO VAMOS COMPARAR\nOS 4 A FUNDO."**

1. Profundidade em 1, não superfície em 4 — os outros 3 (slide anterior) já são
   vocabulário de reconhecimento; a prática de hoje é só com Spec Kit.

`ref: anthropic.com/engineering/effective-harnesses-for-long-running-agents`

**Visual:** ícone de lupa apontando só pro cartão do Spec Kit; os outros 3 cartões do
slide anterior aparecem esmaecidos ao fundo.

**Notas [00:33–00:37]:** cite a fonte da ideia central antes da demo: "a Anthropic
descreve exatamente o problema de hoje — agentes de execução longa declaram vitória cedo
quando não existe critério binário por tarefa. A ferramenta que vocês vão usar não dá
isso de graça — é isso que a Demo 1 e a Demo 2 mostram."

---

## S8 — `</SETUP NOVO: UV>`

Frase-âncora: **"PRIMEIRA VEZ QUE O CURSO\nSAI DO NODE."**

```bash
# macOS, Linux, Git Bash ou WSL
curl -LsSf https://astral.sh/uv/install.sh | sh
```

1. É um binário — ninguém escreve Python hoje, só usa o CLI.
2. Confirme com `uv --version`; se der `command not found`, feche e reabra o terminal.
3. **Falhou no Windows fora do Git Bash/WSL?** Use o PowerShell:
   `powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"`.

`ref: docs.astral.sh/uv/getting-started/installation`

**Visual:** bloco de terminal com o comando + selo "1ª saída do Node" carimbado no
canto.

**Notas [00:37–00:39]:** "quem já rodou isso em casa, adianta — quem não rodou, roda
agora enquanto eu sigo, e a gente confirma nos próximos 2 minutos."

---

## S9 — Terminal 1/4 · instalação do Spec Kit

```bash
$ uv tool install specify-cli --from git+https://github.com/github/spec-kit.git
Resolved 12 packages in 1.84s
Installed 12 packages in 340ms
Installed 1 executable: specify

$ specify version
specify-cli, version 0.x (spec-kit)
```

**O que reparar:** `specify version` responde de qualquer pasta — é instalação global do
binário, não algo por projeto. Se der `command not found`, o `uv tool install` não
terminou ou o PATH não foi recarregado.

`ref: github.github.com/spec-kit/installation`

**Visual:** bloco de terminal real com as duas saídas, seta apontando pro nome do
executável instalado.

**Notas [00:39–00:41]:** "isso vocês já fizeram antes da aula — é o mesmo comando do
`GUIA-DO-ALUNO.md`. Hoje eu só reforço porque o resto da aula depende disso funcionar."

---

## S10 — Terminal 2/4 · o comando que gera a spec

```bash
$ claude   # dentro da pasta do projeto de demonstração

> /speckit.specify Busca por habilidade: dado um termo, retornar perfis cujo campo
  skills contém esse termo, comparação sem diferenciar acento ou maiúscula. Termo sem
  correspondência retorna lista vazia.

✓ spec.md gerado em specs/003-busca-habilidade/spec.md
```

**O que reparar:** compare o texto colado com o `spec.md` gerado, linha a linha —
"case-insensitive e sem diferenciar acento" pode ter sido resumido ou perder precisão no
caminho. É o mesmo cuidado que a Demo 1 (S13) vai mostrar ao vivo.

`ref: github.github.com/spec-kit/quickstart`

**Visual:** bloco de terminal com o comando + a saída, seta destacando a linha
`✓ spec.md gerado`.

**Notas [00:41–00:44]:** "`/speckit.specify` traduz sua entrada pro formato dele — isso
é conveniência, mas também é risco. Guardem essa dúvida, a Demo 1 mostra o caso real."

---

## S11 — Terminal 3/4 · a estrutura de arquivos criada

```
.
├── memory/constitution.md
├── specs/003-busca-habilidade/
│   ├── spec.md
│   ├── plan.md
│   └── tasks.md
└── .claude/commands/speckit.*.md
```

**O que reparar:** abra `tasks.md` — as tasks vêm numeradas `T001, T002...`, com
checkbox `[ ]` e marcação `[P]` pra paralelo. Guarde esse formato: é exatamente o que a
Demo 2 (S27) vai colocar em teste.

`ref: github.github.com/spec-kit/`

**Visual:** diagrama de árvore de pastas com ícones (cadeado pro `constitution.md`,
documento pro `spec.md`/`plan.md`, checklist pro `tasks.md`).

**Notas [00:44–00:46]:** "quatro arquivos, quatro fases. Nenhuma linha de código ainda —
isso é o ponto do Spec-Driven Development."

---

## S12 — Terminal 4/4 · o comando de execução

```bash
> /speckit.implement T004

✓ T004 concluído — 3 arquivos alterados
```

**O que reparar:** o agente reporta "concluído" — mas quem roda o teste é você, não ele.
Nenhuma dessas 3 palavras prova nada por si só. Fica a pergunta pra Demo 2: como você
sabe que "concluído" é verdade?

`ref: github.github.com/spec-kit/quickstart`

**Visual:** bloco de terminal com a saída, ícone de "?" grande sobre a palavra
"concluído".

**Notas [00:46–00:48]:** não responda a pergunta ainda — deixe ela em aberto, é o gancho
pra Demo 2, duas horas de aula adiante.

---

## S13 — `MÃO NA MASSA` · Demo 1 ao vivo: Spec Kit do zero ao plano

Kicker `DEMO 1 · AO VIVO`. Comandos: `/speckit.constitution` → `/speckit.specify` →
`/speckit.plan`, no projeto de demonstração (fixture "vitrine de perfis", domínio 1).

**Visual:** os 3 comandos em sequência, como passos de um checklist visual (1→2→3), sem
mais texto na tela.

**Notas [00:48–00:53]:** roteiro completo em `ROTEIRO-FACILITADORA.md` (Demo 1),
incluindo o erro proposital: deixe `/speckit.specify` rodar sobre o recorte colado **sem
revisar** antes de seguir pro `/speckit.plan` — só aponte a degradação depois.

---

## S14 — `</O QUE ACABOU DE ACONTECER>` (pós-demo 1)

Frase-âncora: **"REVISAR O SPEC.MD\nNÃO É OPCIONAL."**

1. `specify` traduz sua entrada pro formato dele — pode perder precisão no caminho.
2. `plan` decide a stack **em cima** do que `specify` gerou, não do que você colou.
3. Nenhuma linha de código existiu até aqui — e é assim que deveria ser.

`ref: github.github.com/spec-kit/quickstart`

**Visual:** comparação lado a lado (texto colado × `spec.md` gerado), com a diferença
destacada em vermelho.

**Notas [00:53–00:55]:** "isso não é bug do Spec Kit, é o preço de qualquer ferramenta
que reformata sua spec. Revisar o `spec.md` gerado é parte do fluxo, não um extra."

---

### BLOCO 4 · Lab 1 (0:55–1:10 · 15 min)

## S15 — `</A TAXA DE ACERTO DE PRIMEIRA TENTATIVA>`

Frase-âncora: **"TERMINOU NA PRIMEIRA?\nISSO TAMBÉM É UM DADO."**

1. Só conta como acerto de primeira: `tentativa_numero = 1` **e** `resultado = passou`
   **e** nenhuma edição na task ou no gate antes de rodar.
2. Toda reescrita conta como um `task_id` **novo** no denominador — reescrever não é de
   graça na conta.
3. Editar a task ou o gate depois de ver uma tentativa falhar encerra aquela linha; não
   existe "tentativa 2 que conserta a 1".

`ref: starter/REGISTRO-TAXA-DE-ACERTO.md (material da aula)`

**Visual:** diagrama pequeno de fração — numerador "task_ids que passaram na tentativa
1" sobre denominador "task_ids distintos tentados".

**Notas [00:55–00:57]:** "antes de vocês abrirem o Lab 1, um número — pra vocês verem
que essa métrica também vale pra quem preparou a aula de hoje."

---

## S16 — `</COMO REGISTRAR>`

Frase-âncora: **"8 COLUNAS.\nNENHUMA É OPCIONAL."**

1. `task_id`, `titulo`, `gate_comando` — o quê, e o comando exato, copiado, não
   parafraseado.
2. `tentativa_numero`, `resultado` — 1, 2, 3... e `passou`/`falhou`, sem pular número.
3. `causa_se_falhou` — uma de 4: `spec_ambigua`, `task_nao_atomica`, `gate_mal_escrito`,
   `erro_agente`.

`ref: starter/REGISTRO-TAXA-DE-ACERTO.md (material da aula)`

**Visual:** tabela estilizada mostrando as 8 colunas do CSV com uma linha de exemplo
preenchida (`T004`, falhou, `spec_ambigua`).

**Notas [00:57–00:59]:** "isso é a planilha que vocês vão abrir no Lab 2 — hoje é só
reconhecimento do formato."

---

## S17 — `</A TAXA DA FACILITADORA>`

Frase-âncora: **"55,6%.\nPREPARANDO A AULA DE HOJE."**

1. 5 de 9 `task_ids` distintos passaram de primeira — inclusive uma que precisou de duas
   reescritas antes de passar.
2. `T004` (busca por habilidade) falhou duas vezes por spec ambígua — acento e
   maiúscula não especificados — até virar `T004b` e passar.
3. "Se fosse 100%, ou eu não testei de verdade, ou a task era fácil demais pra ensinar
   alguma coisa."

`ref: starter/exemplo-taxa-facilitadora.csv (material da aula)`

**Visual:** gráfico de barras simples: 5 passou / 4 falhou entre os 9 tentados, com
`T004 → T004b` destacado numa cor diferente.

**Notas [00:59–01:03]:** mostre o CSV real projetado — "esse número não é vergonha, é o
dado. Vocês vão fechar o dele de vocês no fim do Lab 2, e de novo na aula 2."

---

## S18 — `MÃO NA MASSA` · Lab 1 (15 min)

Frase-âncora: **"SEU RPI VIRA SPEC.MD."**

Checklist visível: `specify init --here --ai claude` → `/speckit.constitution` →
`/speckit.specify` (cole o RPI) → `/speckit.plan` (em andamento).

**Visual:** checklist de 4 passos com caixas de marcação, a última em aberto ("em
andamento" — não precisa terminar no bloco).

**Notas [01:03–01:10]:** circule perguntando "o `spec.md` que saiu bate com o que você
colou, ou alguma coisa ficou mais vaga?" — reforça o erro proposital da Demo 1 como
hábito, não como exceção.

---

### BLOCO 5 · Teoria + Demo 2 (1:10–1:30 · 20 min)

## S19 — `</TASK ATÔMICA COM GATE>`

Frase-âncora: **"SEM COMANDO QUE RESPONDE\nSIM OU NÃO, NÃO É TASK. É DESEJO."**

1. Atômica não é sobre tamanho — é sobre ter um critério objetivo de "pronto".
2. Gate = comando. Não é "parece bom", não é o agente dizendo que terminou.
3. A própria Anthropic documentou o problema: sem critério binário, agentes de execução
   longa declaram vitória cedo ou abandonam trabalho pela metade.

`ref: anthropic.com/engineering/effective-harnesses-for-long-running-agents`

**Visual:** ícone de semáforo ou portão (gate) com "PASSA / NÃO PASSA" — nada ambíguo.

**Notas [01:10–01:12]:** defina em voz alta e devagar — é a frase-âncora do curso hoje.

---

## S20 — Diagrama: task → comando → o que acontece sem ele

Frase-âncora: **"O COMANDO É O GATE.\nSEM ELE, ALGUÉM TEM QUE ADIVINHAR."**

Boxes do diagrama: **[TASK]** → seta "existe um comando que roda contra ela?" → dois
caminhos. **SIM** leva ao box **[GATE — ex.: `npm test -- x.test.js`]**, que confirma
pronto sem opinião de ninguém. **NÃO** leva ao box **[DESEJO]** — alguém abre o código e
decide "parece bom", que é opinião, não verificação. Rodapé: "gate técnico passou ≠
pronto — falta o checklist de código ruim gerado por IA da semana 5 (duplicação, código
morto, `try/catch` vazio)."

**Visual:** o diagrama descrito acima — fluxograma de 2 caminhos com ícone de check
verde no ramo do gate e ícone de ponto de interrogação vermelho no ramo do desejo.

**Notas [01:12–01:14]:** "gate técnico não basta sozinho — a segunda metade do 'pronto'
é o checklist da semana 5, e ele não aparece em nenhum `npm test`."

---

## S21 — Task fraca × forte · 1/3 — a fraca (domínio 1)

Kicker `TASK FRACA × FORTE · 1/3`. `</TASK FRACA — BUSCA POR HABILIDADE>`

Frase-âncora: **"\"ADICIONAR UM FILTRO DE BUSCA.\"\nNINGUÉM SABE SE PASSOU."**

1. "Filtro" pode ser match exato, parcial, com ou sem acento, com ou sem maiúscula — a
   frase não decide.
2. "Adicionar" não diz onde nem como se conecta ao resto do sistema.
3. Não existe comando que confirme — só "abrir e olhar se parece certo".

`ref: starter/TASK-FRACA-VS-FORTE.md (material da aula)`

**Visual:** cartão vermelho com ícone de "?" grande sobre a frase da task.

**Notas [01:14–01:14:40]:** "essa é a task tal como alguém pediria no dia a dia — soa
razoável até você tentar confirmar se ela terminou."

---

## S22 — Task fraca × forte · 1/3 — a forte (domínio 1)

`</TASK FORTE — BUSCA POR HABILIDADE>`

Frase-âncora: **"MESMA IDEIA.\nAGORA TEM GATE."**

1. Contrato explícito: `GET /perfis?habilidade=<termo>` retorna só perfis com `skills`
   contendo o termo, case-insensitive e sem diferenciar acento.
2. Casos de borda decididos na escrita, não no bug: termo sem correspondência → `[]`;
   parâmetro ausente → todos os perfis.
3. Gate: `npm test -- perfis.filtro.test.js` — 4 casos fixos.

`ref: starter/TASK-FRACA-VS-FORTE.md (material da aula)`

**Visual:** cartão verde com terminal mostrando `npm test -- perfis.filtro.test.js` e
`4 passing`.

**Notas [01:14:40–01:15:20]:** "mesma ideia do slide anterior — a diferença inteira é
que agora existe um comando pra rodar."

---

## S23 — Task fraca × forte · 2/3 — a fraca (domínio 2)

`</TASK FRACA — PROPOSTA COMERCIAL>`

Frase-âncora: **"\"MELHORAR A PROPOSTA.\"\nMELHORAR SEGUNDO QUEM?"**

1. "Melhorar" não diz o que muda no texto gerado.
2. Sem gate, decidir se uma versão é melhor que outra é opinião de quem está lendo.
3. Nenhum comando responde "essa versão está pronta" — só alguém lendo e achando.

`ref: starter/TASK-FRACA-VS-FORTE.md (material da aula)`

**Visual:** cartão vermelho com dois textos de proposta lado a lado e um "?" entre eles.

**Notas [01:15:20–01:16:00]:** "domínio diferente, mesmo problema: 'melhorar' é o
'adicionar um filtro' de novo, com roupa nova."

---

## S24 — Task fraca × forte · 2/3 — a forte (domínio 2)

`</TASK FORTE — PROPOSTA COMERCIAL>`

Frase-âncora: **"MESMA IDEIA.\nAGORA TEM GATE."**

1. `gerarProposta(cliente, servico, valorBase)` retorna rascunho com as seções "Escopo",
   "Prazo" e "Valor" (com disclaimer fixo de variação de preço).
2. Restrição de segurança escrita na task: a função nunca chama a rotina de envio — só
   retorna string.
3. Gate: `npm test -- proposta.geracao.test.js` — 3 combinações fixas + mock de envio
   com 0 chamadas.

`ref: starter/TASK-FRACA-VS-FORTE.md (material da aula)`

**Visual:** terminal com `npm test -- proposta.geracao.test.js` e `3 passing`, selo
verde "0 chamadas de envio".

**Notas [01:16:00–01:16:40]:** repare no ponto 2 — o gate também vira guarda-corpo de
segurança, não só de funcionalidade.

---

## S25 — Task fraca × forte · 3/3 — a fraca (domínio 3)

`</TASK FRACA — QUIZ COM IA>`

Frase-âncora: **"\"PERGUNTAS MELHORES COM IA.\"\nMELHORES PARA QUEM AVALIA?"**

1. "Melhores" não tem régua — precisa de alguém lendo e julgando.
2. Não diz o que fazer quando a resposta da API sai fora do formato esperado.
3. Sem gate, "melhor" e "pior" são a mesma opinião com nomes diferentes.

`ref: starter/TASK-FRACA-VS-FORTE.md (material da aula)`

**Visual:** cartão vermelho com balão de fala "isso parece bom?" e ponto de
interrogação.

**Notas [01:16:40–01:17:20]:** terceiro domínio, terceiro disfarce da mesma falha —
padrão se repetindo é o ponto.

---

## S26 — Task fraca × forte · 3/3 — a forte (domínio 3)

`</TASK FORTE — QUIZ COM IA>`

Frase-âncora: **"MESMA IDEIA.\nAGORA TEM GATE."**

1. `gerarPergunta(tema, dificuldade)` retorna
   `{pergunta, alternativas: string[4], respostaCorreta: 0|1|2|3}`.
2. Resposta malformada da API não propaga erro — cai num fallback fixo.
3. Gate: `npm test -- quiz.gerador.test.js` — valida o schema em 3 temas fixos e força
   uma resposta malformada simulada.

`ref: starter/TASK-FRACA-VS-FORTE.md (material da aula)`

**Visual:** terminal com o teste passando + diagrama pequeno "schema válido → OK /
schema inválido → fallback".

**Notas [01:17:20–01:18:00]:** "3 domínios, 3 pares, mesmo teste: existe um comando? Se
sim, é task. Se não, ainda é desejo."

---

## S27 — `MÃO NA MASSA` · Demo 2 ao vivo: o buraco do tasks.md

Kicker `DEMO 2 · AO VIVO`. Comando: `/speckit.tasks`. Pergunta em destaque: "ONDE ESTÁ
ESCRITO COMO EU SEI QUE T004 TERMINOU?"

O que vai quebrar: rodar a task de busca por habilidade sem gate específico, deixar o
agente reportar sucesso, e então testar manualmente com um termo acentuado (`"reáct"`)
**na frente da turma** — quebra.

**Visual:** GIF/meme de expectativa × realidade — de um lado a saída do agente dizendo
"concluído", do outro o teste vermelho quebrando com o termo acentuado.

**Notas [01:18–01:25]:** roteiro completo em `ROTEIRO-FACILITADORA.md` (Demo 2): rodar a
task sem gate, deixar "passar", provar que quebra com acento, reescrever com gate usando
`starter/TASKS-TEMPLATE.md`, rodar de novo. Feche citando `T004`/`T004b` do seu próprio
`exemplo-taxa-facilitadora.csv` — o mesmo caso, registrado.

---

## S28 — `</A CRÍTICA CENTRAL: CHECKPOINT × TASK>`

Frase-âncora: **"SPEC KIT TE DÁ TASK NUMERADA.\nNÃO TE DÁ GATE POR TASK."**

Diagrama: à esquerda, o `tasks.md` gerado pelo Spec Kit — caixas `T001 [ ]`, `T002 [ ]`,
`T003 [P] [ ]` ... até `T00N [ ]`, todas sem gate individual, todas apontando pra **uma
única caixa** no final: `CHECKPOINT — user story completa` (o único ponto com critério
testável). À direita, a mesma lista depois de reescrita à mão — cada task com **sua
própria** caixa de gate anexada diretamente.

`ref: raw.githubusercontent.com/github/spec-kit/main/templates/tasks-template.md`

**Visual:** o diagrama de duas colunas descrito acima, com um "✗" grande entre as tasks
individuais e o checkpoint na coluna da esquerda, e um "✓" em cada task na coluna da
direita.

**Notas [01:25–01:27]:** "o agente não mentiu. A ambiguidade estava na task, não na
execução — e isso não é bug do Spec Kit, é o preço de uma ferramenta pesada que garante
rastreio, não verificação por task."

---

## S29 — `</O QUE VOCÊ FAZ PRA SUPRIR ISSO>`

Frase-âncora: **"VOCÊ ESCREVE O GATE\nQUE O SPEC KIT NÃO ESCREVEU."**

1. Use `starter/TASKS-TEMPLATE.md` pra cada task que vai executar de fato hoje — não
   pras 20 que ficaram no `tasks.md`.
2. Responda as 3 perguntas do método antes de rodar o agente: o que muda (sem verbo de
   opinião), como eu confirmo sem abrir o código, o que a saída nunca pode conter.
3. Se você não consegue responder a pergunta do gate, a task ainda não está pronta pro
   agente — volte e corte ela menor.

`ref: starter/TASKS-TEMPLATE.md (material da aula)`

**Visual:** o molde do `TASKS-TEMPLATE.md` projetado com as 5 perguntas, a pergunta 3
(gate) circulada em amarelo.

**Notas [01:27–01:29]:** "isso é literalmente o Lab 2 que vocês fazem a seguir — pegar 3
tasks do `tasks.md` de vocês e passar por esse molde antes de rodar o agente."

---

## S30 — Respiro

**"QUANDO A MESMA TAREFA FALHA TRÊS VEZES,\nO PROBLEMA GERALMENTE NÃO É O AGENTE.\nÉ A
SPEC."**

**Visual:** fundo roxo escuro cheio, símbolo grande "3×" riscado em amarelo, sem texto
adicional além da frase-âncora.

**Notas [01:29–01:30]:** pausa de 1 minuto, sem falar por cima do slide — deixe a frase
assentar antes de abrir o Lab 2.

---

### BLOCO 6 · Lab 2 (1:30–1:55 · 25 min)

## S31 — `MÃO NA MASSA` · Lab 2 (25 min)

Frase-âncora: **"TRÊS TASKS. GATE ANTES DO AGENTE."**

Checklist: `/speckit.tasks` → 3 tasks reescritas em `TASKS-TEMPLATE.md` → 1ª execução →
registro em `REGISTRO-TAXA-DE-ACERTO.csv`.

**Visual:** checklist de 4 passos, os 2 primeiros marcados como exemplo, os 2 últimos em
branco.

**Notas [01:30–01:55]:** circule perguntando "seu gate responde sim/não sozinho, ou
alguém ainda precisa olhar e decidir?" — teste rápido pra saber se a task ficou atômica
de verdade.

---

### BLOCO 7 · Fechamento (1:55–2:00 · 5 min)

## S32 — `</ATIVIDADE DE FIXAÇÃO>`

Entregável: 3 specs executadas + registro de taxa de acerto de primeira tentativa. Link
do `ENTREGAVEL.md` e do formulário único.

**Visual:** ícone de checklist + selo "prazo: antes da aula 1 da semana 8".

**Notas [01:55–01:57]:** aponte o parágrafo pro dono do negócio no `ENTREGAVEL.md` — é o
critério de "pronto" também pra entrega, não só pra task.

---

## S33 — `</PRÓXIMOS PASSOS>`

Frase-âncora: **"TASK ATÔMICA = TEM GATE.\nGATE = COMANDO, NÃO OPINIÃO."**

1. Leve o RPI + as specs de hoje pra próxima aula — a aula 2 parte de onde o Lab 2
   parou.
2. O entregável (specs executadas + registro de taxa) vale antes da aula 1 da semana 8.
3. Dúvida entre agora e a aula 2? Sinalize no canal da turma, não espere a clínica.

**Visual:** a frase-âncora em destaque com ícone de portão (gate) repetido do S19, pra
fechar o fio do conceito central da aula.

**Notas [01:57–01:58]:** recapitule em uma frase, devagar — é o resumo que fica.

---

## S34 — `</AULA 2 — CLÍNICA ROTATIVA>` (anúncio)

Kicker `PRÓXIMA AULA`.

Frase-âncora: **"AULA 2: VOCÊ CONSTRÓI.\nEU DEPURO."**

1. Formato: clínica rotativa — 6 ciclos de 15 min, a facilitadora não escreve código,
   só faz perguntas de diagnóstico.
2. O que trazer pronto: as tasks reescritas do Lab 2 + o `tasks.md` do seu projeto.
3. Como funciona: fila de sinalização (nome + sintoma) quando travar 2+ vezes sem
   entender por quê; tarefa da plateia (aposta de causa + auto-auditoria) em toda
   rodada; a regra dos 3 strikes já vale desde o primeiro ciclo.

**Visual:** GIF de alguém arregaçando as mangas — troca de bastão facilitadora → aluno.

**Notas [01:58–02:00]:** "quem travar de verdade, sinaliza no board. Ninguém vai
construir por vocês — vocês constroem, eu ajudo a ver o que não está deixando vocês
verem sozinhos."

---

## AULA 2 (S35–S37) — só regras do jogo, sem conteúdo novo

Nota: a aula 2 **não** entra na expansão de 26–34 slides — é clínica rotativa, e o
`ROTEIRO-FACILITADORA.md`/`_BRIEF.md` limitam esse formato a no máximo 3 slides de
regras do jogo. O resto da aula é a facilitadora circulando e projetando telas de
alunos, não conteúdo preparado. Conteúdo idêntico ao pacote original, só renumerado.

## S35 — Capa

`SEMANA 7 · AULA 2 — CLÍNICA ROTATIVA`.

**Visual:** um consultório/mesa de exame estilizado, com um "paciente" = tela de
terminal — humor leve.

---

## S36 — `</A TAXA DA FACILITADORA>`

Mostrado ANTES de qualquer aluno construir hoje. A tabela de
`exemplo-taxa-facilitadora.csv` projetada, com o número final em destaque (55,6%).

Frase-âncora: **"SE FOSSE 100%, OU EU NÃO TESTEI DE VERDADE,\nOU A TASK ERA FÁCIL
DEMAIS."**

**Visual:** a mesma tabela/gráfico do S17, agora reapresentada como abertura da aula 2 —
reforço, não conteúdo novo.

---

## S37 — `</REGRAS DA CLÍNICA>`

Fila de sinalização (nome + sintoma no board), o que a plateia faz em toda rodada
(aposta de causa antes / auto-auditoria depois), a regra dos 3 strikes, cadência de
15 minutos.

**Visual:** relógio/ciclo com 6 marcações.

Nenhum outro slide — o resto da aula é a facilitadora circulando e projetando telas de
alunos, não conteúdo preparado.
