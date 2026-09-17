# Outline de slides — Semana 8: Verificadores

**Total: 34 slides na aula 1 (S1–S34) + 3 na aula 2 (A1–A3, inalterados — aula 2 é
laboratório puro, sem conteúdo novo, decisão já tomada para esta semana).**

Gramática PDA: roxo escuro + amarelo, Dela Gothic One (títulos) / IBM Plex Sans (corpo).
Kicker no topo, título em tag `</ASSUNTO>`, frase-âncora curta em caixa alta,
pontos numerados, linha `ref:` com fonte real, `MÃO NA MASSA` onde a
facilitadora para de falar, blocos de terminal reais, notas do apresentador
com timestamp, linha `**Visual:**` em todo slide de conteúdo.

Regra desta semana: **teto de 3 slides consecutivos sem imagem, diagrama ou
GIF** (regra geral da expansão, substitui o teto de 6 da versão anterior
deste arquivo — com 34 slides ele fica mais fácil de cumprir, não mais
difícil). A estrela do template não conta como recurso visual.

**Fio condutor da semana** (já declarado como a frase-âncora oficial em
`README.md` e no `ROTEIRO-FACILITADORA.md`): **"O verificador existe para o
agente, não para você."** Ele nomeia o conceito no S8, ganha slide de
respiro sozinho no S9, é retomado no recap dos 5 sensores (S27) e no
fechamento (S34).

Só a **aula 1** tem slide de apoio (aula 2 é laboratório puro — no máximo
3 slides de regras do jogo, sem conteúdo novo).

---

## AULA 1 (120 min — mesmos 7 blocos do `ROTEIRO-FACILITADORA.md`)

### 1. Capa
`SEMANA 8 · VERIFICADORES` — subtítulo: "Ele disse que terminou. Como você
sabe?"
**Visual:** um semáforo estilizado (vermelho/amarelo/verde) — reaparece como
motivo visual do deck inteiro (cada sensor "acende" ao ser nomeado).
Nota: `[00:00–00:02] Hoje a aula é sobre não acreditar na palavra do
agente.`

### 2. `</HOJE>` — linha do tempo minuto a minuto
Espelha a tabela do `ROTEIRO-FACILITADORA.md` (7 blocos, 120 min).
**Visual:** barra de tempo horizontal com os 7 blocos coloridos, semáforo
apagado ao lado (vai "acender" a cada sensor nomeado ao longo da aula).
Nota: `[00:02–00:06] Sete blocos, sempre os mesmos horários — hoje é mais
denso, não mais longo.`

### 3. `</COMO ACOMPANHAR>`
Regras do jogo: terminal aberto, seu repositório de projeto do lado,
bloco assíncrono desta semana concluído.
**Visual:** três ícones em fileira — terminal aberto, repositório do
projeto, selo de check do bloco assíncrono concluído.
Nota: `[00:06–00:10] Vocês vão precisar de push/pull funcionando — se seu
git trava, resolve isso ANTES do Lab 2.`

### 4. Recap — `</SEMANA PASSADA>`
Sorteio de 3 alunos (mecânica da Semana 3): explicar task atômica com gate,
mostrar taxa de acerto de primeira tentativa, quiz relâmpago sobre o que é
um gate (resposta: condição automática que a task precisa satisfazer antes
de ser considerada concluída). Frase-âncora: "VOCÊS DEFINIRAM O GATE.
HOJE, VOCÊS CONSTROEM O QUE CHECA ELE."
**Visual:** GIF sugerido — um cadeado abrindo sozinho sem chave (humor leve
— tema "coisa que devia travar e não trava").
Nota: `[00:10–00:25] Semana passada vocês definiram o que uma task precisa
satisfazer pra estar pronta — o gate. Hoje vocês constroem o que checa esse
gate sozinho, sem vocês perguntarem.`

### 5. `MÃO NA MASSA` — Demo 1 ao vivo: "adicione essa função"
Kicker `DEMO 1 · AO VIVO`. Sem conteúdo teórico ainda. Slide com o nome do
repo (`demo-sem-verificador`) e o prompt que vai ser digitado: **"adicione
uma função `subtrai(a, b)` em `src/soma.ts` e exporte ela"**. O `CLAUDE.md`
desse repo não fala nada sobre verificar — de propósito.
**Visual:** captura de tela do terminal/editor com o prompt digitado.
Nota: `[00:25–00:31] Deixem ele responder "pronto" e não rodem nada ainda.
Quando ele terminar, pergunte à turma: "alguém aqui tem alguma razão pra
duvidar dele?" Deixe o silêncio pesar 15-20 segundos de verdade — a maioria
não vai ter motivo concreto, só o código parece razoável na tela. Não troque
de slide durante a pausa.`

### 6. `MÃO NA MASSA` — Demo 1 ao vivo: `npm run build` (o que quebra)
Kicker `DEMO 1 · AO VIVO`. Terminal real rodando na tela — sem slide de
conteúdo preparado, é a tela do editor/terminal. Se o agente cometeu um erro
de tipo sozinho, deixe a turma ver o erro do TypeScript. Se compilar de
primeira, insira você mesma um erro (`return a - b + "";`) e rode de novo.
**Visual:** terminal real, saída do `npm run build` quebrando.
Nota: `[00:31–00:35] A demo não depende de o agente errar sozinho — depende
de vocês verem que nada detectaria isso se vocês não rodassem o build.`

### 7. `</POR QUE ISSO QUEBROU>`
Frase-âncora: "ELE DISSE QUE TERMINOU.\nQUEM VERIFICOU ANTES DE ACREDITAR?"
Ainda sem nomear o conceito — é a pergunta central, antes de qualquer nome.
1. Nada no `CLAUDE.md` desta demo pede pra verificar nada — de propósito.
2. Não é falha do modelo: é ausência de sensor. Um agente com hook de
   pós-edição rodando o build teria pego isso sozinho.
3. E se isso fosse direto pro PR, sem ninguém rodar `npm run build` antes?
Nota: `[00:35–00:38] Deixe a pergunta no ar antes de responder — é o
momento de maior atenção da aula.`

### 8. `</O QUE É UM VERIFICADOR>`
Frase-âncora: "UMA CHECAGEM DETERMINÍSTICA.\nSEM OPINIÃO."
1. Verificador = saída binária (passa/falha), sem opinião — não depende de
   "achar que está bom."
2. Pedir pro agente "revisar o próprio código" não é verificador — é uma
   segunda opinião do mesmo tipo de coisa que errou.
3. A partir de agora, vocês dão 5 sentidos ao agente: lint, type check,
   build, teste, dependency check (o quinto ainda vem, adiante na aula).
**Visual:** ícone binário ✓/✗ grande, representando saída determinística.
Nota: `[00:38–00:41] Isso que a gente acabou de fazer — rodar o build antes
de aceitar a palavra dele — é um verificador. Ele não existe pra dar
trabalho. Ele existe porque o agente não tem sentido nenhum próprio pra
saber se terminou.`

### 9. Respiro — a frase-âncora da semana
Tela quase vazia, sem pontos numerados: "O VERIFICADOR EXISTE\nPARA O
AGENTE,\nNÃO PARA VOCÊ." Marcador de virada de bloco — pausa proposital.
**Visual:** o semáforo do slide 1, luz amarela piscando lentamente, fundo
escuro, só a frase.
Nota: `[00:41–00:43] Deixe esse slide no ar uns segundos antes de seguir
pros 5 sentidos.`

### 10. `</LINT>` — sensor 1 de 5
Frase-âncora: "PADRÃO QUEBRADO,\nMAS QUE AINDA RODA."
1. O que vê: código que roda mas quebra um padrão — variável não usada,
   import solto, estilo inconsistente.
2. O que não vê: se o programa faz o que devia fazer — lint não sabe nada
   sobre comportamento.
3. O comando: `npm run lint` (ESLint, ou o linter que seu projeto já usa).
**Visual:** ícone de régua.
Nota: `[00:43–00:44] Primeiro sensor: o mais barato de rodar, o mais raso.`

### 11. `</TYPE CHECK>` — sensor 2 de 5
Frase-âncora: "TIPO ERRADO,\nMAS QUE AINDA 'PARECE' CERTO."
1. O que vê: um valor do tipo errado passando onde não devia.
2. O que não vê: se o tipo certo, no lugar certo, produz o resultado
   certo — type check não roda o código, só confere a forma.
3. O comando: `tsc --noEmit`.
**Visual:** ícone com a letra "T".
Nota: `[00:44–00:45] Muita gente escreve TS sem nunca ter rodado isso
isolado — vocês vão ver isso de novo no Lab 1.`

### 12. `</BUILD>` — sensor 3 de 5
Frase-âncora: "NÃO COMPILA,\nNÃO EMPACOTA DE VERDADE."
1. O que vê: erro de sintaxe, de tipo ou de import que impede o código de
   virar um artefato executável — é o sensor da Demo 1.
2. O que não vê: se o artefato compilado faz a coisa certa — build só
   garante que existe, não que funciona.
3. O comando: `npm run build` (`tsc` ou o bundler do seu projeto).
**Visual:** ícone de engrenagem.
Nota: `[00:45–00:46] Esse foi o sensor que a Demo 1 usou.`

### 13. `</TESTE>` — sensor 4 de 5
Frase-âncora: "COMPORTAMENTO ERRADO,\nMESMO COMPILANDO."
1. O que vê: se o código faz o que o cenário Given/When/Then descreve — o
   único dos quatro que checa comportamento.
2. O que não vê: se o teste em si prova alguma coisa — um teste mal
   escrito passa igual com código quebrado (é o próximo bloco).
3. O comando: `node --test` (ou o runner do seu projeto). Reuso explícito
   da Semana 3: o formato de validação em 3 cenários (dispara quando deve /
   não dispara quando não deve / falso positivo) vale pra teste e pra
   linter — um verificador que nunca dispara é decoração.
**Visual:** ícone de check verde.
`ref: cucumber.io/docs/gherkin/reference` (formato Given/When/Then, reusado
da Semana 3)
Nota: `[00:46–00:47] Vocês já usaram esse formato pra validar skill. Hoje
ele se aplica a teste e a linter.`

### 14. `</O TESTE TESTA O MOCK, NÃO O CÓDIGO>`
Kicker `TEORIA · TESTE QUE NÃO PROVA NADA`. Frase-âncora: "VOCÊ PODE APAGAR
A IMPLEMENTAÇÃO.\nO TESTE CONTINUA VERDE."
1. O padrão: o teste chama um objeto fake e verifica o fake — a função real
   do `src/` nunca é importada, nunca é executada.
2. Código real (`teste-que-nao-prova-nada-exemplos.md`):
   ```ts
   test("busca usuário por id", async () => {
     const fakeApi = { buscarUsuario: async () => ({ id: 1, nome: "Ana" }) };
     const resultado = await fakeApi.buscarUsuario(1);
     assert.equal(resultado.nome, "Ana");
   });
   ```
3. Como confirmar: apague ou quebre a função real que o teste deveria
   cobrir. Se continuar verde, é este padrão.
**Visual:** o bloco de código acima como print de editor, com a linha do
`fakeApi` destacada.
Nota: `[00:47–00:48] Vocês vão caçar um desses três padrões no próprio repo
ainda hoje — é parte do entregável.`

### 15. `</O ASSERT QUE SEMPRE PASSA>`
Kicker `TEORIA · TESTE QUE NÃO PROVA NADA`. Frase-âncora: "UM ASSERT QUE
ACEITA QUALQUER VALOR\nNÃO TESTA NADA."
1. Versão óbvia: `assert.ok(resultado || !resultado)` — verdadeiro pra
   qualquer coisa.
2. Versão sutil, mais comum em código de agente: o assert está dentro de
   um callback de erro que nunca roda porque o teste termina antes,
   síncrono, sem esperar.
3. Como confirmar: leia o assert isolado do resto do teste — ele consegue
   falhar com ALGUM valor de entrada?
**Visual:** o snippet do assert tautológico com um selo vermelho "✗ nunca
falha" sobreposto.
Nota: `[00:48–00:49] É o padrão mais fácil de esconder — o teste parece
normal até você tentar quebrá-lo.`

### 16. `</COBERTURA ALTA, ZERO VERIFICAÇÃO>`
Kicker `TEORIA · TESTE QUE NÃO PROVA NADA`. Frase-âncora: "TODA LINHA
RODOU.\nNENHUM VALOR FOI CONFERIDO."
1. 100% de cobertura de linha não é o mesmo que verificação — cobertura
   mede execução, não resultado.
2. `assert.ok(resultado)` aceita `"R$ 19,90"`, `"batata"` ou `true` como
   igualmente válidos.
3. Como confirmar: troque o `return` da função por um valor errado de
   propósito. Se a cobertura continua 100% e o teste continua verde, a
   cobertura estava medindo a coisa errada.
**Visual:** badge "100% coverage" riscado com um X vermelho ao lado do
snippet.
Nota: `[00:49–00:50] Reforce: isso é julgamento, não é regra que um linter
aplica sozinho.`

### 17. `</RED>`
Kicker `TEORIA · RED-GREEN-REFACTOR COM AGENTE`. Frase-âncora: "O TESTE
COMMITADO\nANTES DE QUALQUER LINHA DE `SRC/`."
1. Peça ao agente o teste primeiro, a partir do cenário Given/When/Then —
   não a implementação.
2. Rode `npm test`. Ele falha — `is not a function`, ou o assert quebra.
   Isso é esperado.
3. Commit **só o teste**, nada de `src/`, com mensagem clara (`test: red —
   ...`).
**Visual:** terminal, saída de `npm test` falhando (vermelho).
`ref: martinfowler.com/bliki/TestDrivenDevelopment.html`
Nota: `[00:50–00:51] O log completo do template está no starter — eles vão
usar isso no lab e no entregável.`

### 18. `</GREEN>`
Kicker `TEORIA · RED-GREEN-REFACTOR COM AGENTE`. Frase-âncora: "O MENOR
CÓDIGO\nQUE FAZ O TESTE PASSAR."
1. Peça ao agente só o suficiente pra esse teste passar — resista a
   generalizar além do que o teste pede.
2. Rode `npm test` de novo. Passa.
3. Commit a implementação (`feat: green — ...`), separado do commit do
   teste.
**Visual:** terminal, `npm test` passando (verde), lado a lado com o
anterior (vermelho → verde).
Nota: `[00:51–00:52] "Menor código" é a régua — não é "código bonito", é
"código que só resolve o que o teste pediu."`

### 19. `</REFACTOR>`
Kicker `TEORIA · RED-GREEN-REFACTOR COM AGENTE`. Frase-âncora: "MESMO
COMPORTAMENTO,\nCÓDIGO MAIS LIMPO."
1. Limpe a implementação sem mudar o que ela faz — nomes, duplicação,
   estrutura.
2. Rode `npm test` de novo a cada mudança — se ficar vermelho, o refactor
   quebrou algo, desfaça.
3. Pular esse passo é, segundo Martin Fowler, "a forma mais comum de
   estragar TDD."
**Visual:** diagrama simples "antes → depois" do código, mesma saída,
forma mais limpa.
`ref: martinfowler.com/bliki/TestDrivenDevelopment.html`
Nota: `[00:52–00:53] Refactor é opcional se o tempo apertar — red e green
não são.`

### 20. `</A PROVA ESTÁ NO COMMIT>`
Kicker `TEORIA · RED-GREEN-REFACTOR COM AGENTE`. Frase-âncora: "SE NÃO DÁ
PRA VER NO GIT LOG,\nO CICLO NÃO ACONTECEU."
1. A régua da semana: o commit do teste falhando aparece **antes** (mais
   antigo) do commit da implementação.
2. `git log --oneline -- <teste> <implementação>` — se os dois commits têm
   o mesmo timestamp, ou vêm em segundos um do outro com o teste já verde,
   é cola.
3. É isso que impede escrever teste e código juntos e "reconstituir" a
   ordem depois.
**Visual:** terminal, saída de `git log --oneline`, com o commit vermelho
circulado antes do commit verde.
Nota: `[00:53–00:55] Essa é a checagem que a facilitadora vai cobrar na
Aula 2 e no entregável — "me mostra o commit do teste antes do código."`

### 21. `MÃO NA MASSA` — Lab 1 (15 min)
Kicker `MÃO NA MASSA · LAB 1`. Frase-âncora: "OS 4 SENSORES, LOCAL, ANTES
DA NUVEM."
**Visual:** checklist visível: `lint` → `typecheck` → `build` → `test` →
`npm run verify`.
Nota: `[00:55–01:10] Circule perguntando "qual dos 4 você não tinha antes
de hoje?" — normalmente é typecheck ou lint.`

### 22. `</DEPENDENCY CHECK>` — sensor 5 de 5
Kicker `TEORIA · SENSOR 5/5`. Frase-âncora: "O QUE VOCÊ NÃO ESCREVEU\nTAMBÉM
PODE TE QUEBRAR."
1. O que vê: dependência com vulnerabilidade catalogada, ou pacote que não
   existe — alucinado pelo próprio agente.
2. O que não vê: nada do seu código — os outros 4 sensores já cobrem isso;
   este só olha pra fora.
3. O comando: `npm audit --audit-level=high` (mais `dependency-review-
   action` no PR).
**Visual:** ícone de caixa de pacote com um ponto de interrogação e um
cadeado aberto ao lado.
`ref: docs.npmjs.com/cli/v10/commands/npm-audit`
Nota: `[01:10–01:12] É o acréscimo desta semana em relação à grade
anterior — o quinto sentido.`

### 23. `MÃO NA MASSA` — Demo 2 ao vivo: vulnerabilidade conhecida
Kicker `DEMO 2 · AO VIVO`. Terminal: `npm install` e `npm audit` rodando
contra `lodash@4.17.15`.
**Visual:** terminal real, saída do `npm audit`.
Nota: `[01:12–01:18] Aponte a severidade high, CVE-2020-8203, prototype
pollution, corrigido na 4.17.19 — real, público, catalogado. Rode
`npm audit --audit-level=high` e mostre `echo $?` = 1: "isso é o job
dependency-audit do CI falhando, exatamente assim." Pergunta pra turma: "o
agente que só edita código teria achado isso sozinho, sem rodar npm audit?"
Resposta: não — a vulnerabilidade não está no código dele, está numa
dependência que já existia.`

### 24. `</O AGENTE PODE INVENTAR UM PACOTE>`
Kicker `TEORIA · DEPENDENCY CHECK`. Frase-âncora: "O AGENTE PODE SUGERIR\nUM
PACOTE QUE NÃO EXISTE."
1. Pesquisa com 16 LLMs, 576 mil amostras de código: 205.474 nomes de
   pacote alucinados — inventados, que não existem em nenhum registro.
2. Modelos comerciais: pelo menos 5,2% dos pacotes sugeridos não existem.
   Open-source: 21,7% em média.
3. Quando o mesmo prompt roda 10 vezes, 43% dos nomes inventados se
   repetem em todas as 10 — não é ruído, é um alvo estável.
**Visual:** números gigantes estilizados (205.474 / 5,2% / 21,7% / 43%) em
formato de cartão de estatística.
`ref: arxiv.org/abs/2406.10279`
Nota: `[01:18–01:20] Cite o dado antes de rodar a demo — o número prepara
o porquê do próximo slide.`

### 25. `</SLOPSQUATTING>`
Kicker `TEORIA · DEPENDENCY CHECK`. Frase-âncora: "ALGUÉM REGISTRA O NOME
INVENTADO\nDE PROPÓSITO. E ESPERA VOCÊ."
1. O termo foi cunhado por Seth Larson, da Python Software Foundation.
2. Como funciona: como o nome alucinado se repete de forma estável, um
   atacante registra esse nome no npm antes de alguém pedir.
3. Diferença do typosquatting clássico: não depende de erro de digitação
   humano — depende de alucinação de modelo.
**Visual:** print (recriado) de um terminal mostrando `npm error 404` — o
"rosto" do problema quando o pacote nem existe ainda.
`ref: socket.dev/blog/slopsquatting-how-ai-hallucinations-are-fueling-a-new-class-of-supply-chain-attacks`
Nota: `[01:20–01:22] Isso tem nome. E o nome existe porque o ataque já é
catalogado, não hipotético.`

### 26. `MÃO NA MASSA` — Demo 3 ao vivo: pacote inventado
Kicker `DEMO 3 · AO VIVO`. Terminal: pedindo lib de nicho ao agente
("preciso validar CPF... prefiro algo mais específico pra formulários do
governo"), depois `npm install <nome sugerido>`.
**Visual:** terminal real, o prompt e o resultado do `npm install`.
Nota: `[01:22–01:28] Dois desfechos possíveis, ambos ensinam: (1) 404 — "isso
é o dependency check funcionando no caso mais simples: o pacote nem
existe." (2) instala, mas é algo que ninguém no time pediu — rode `npm view
<pacote>` e mostre downloads semanais/data de publicação: "isso nenhum
sensor automático pega sozinho. A régua aqui é ler antes de instalar o que
o agente sugeriu."`

### 27. `</OS 5 SENSORES, COMPLETOS>`
Kicker `RECAP`. Frase-âncora: "5 SENTIDOS.\nNENHUM É OPCIONAL." Retomada do
fio condutor: "o verificador existe para o agente, não para você" — os 5
juntos são o que faz "pronto" significar alguma coisa.
**Visual:** diagrama — um "agente" no centro, 5 setas saindo pra 5
caixinhas nomeadas (lint, type check, build, teste, dependency check), cada
uma com seu ícone, todas "acesas" (o semáforo do slide 1, agora completo).
Nota: `[01:28–01:30] Recap rápido: uma frase por sensor, na tabela do
README, antes de entrar no Lab 2.`

### 28. `MÃO NA MASSA` — Lab 2 (25 min): `</O ARQUIVO CI.YML>`
Kicker `MÃO NA MASSA · LAB 2`. Frase-âncora: "CI QUE BLOQUEIA.\nNÃO CI QUE SÓ
AVISA."
1. Copie `starter/ci-workflow/ci.yml` pra `.github/workflows/ci.yml` na
   raiz do seu repositório de projeto.
2. 5 jobs, um por sensor: `lint`, `typecheck`, `build`, `test`,
   `dependency-audit` (+ `dependency-review` em Pull Request).
3. Confira que seu `package.json` tem os 4 scripts que o workflow chama —
   se faltar algum, veja `package.json.exemplo`.
**Visual:** bloco de código real — o `ci.yml`, com os nomes dos 5 jobs
destacados.
Nota: `[01:30–01:35] Checklist visível: ci.yml copiado → push → Actions
verde → branch protection → PR quebrado de propósito → merge bloqueado
(print).`

### 29. `</O QUE CADA STEP FAZ>`
Frase-âncora: "CADA JOB É UM STATUS CHECK\nSEPARADO NO GITHUB."
1. `lint`/`typecheck` rodam primeiro e sozinhos; `build`/`test` só rodam
   depois (`needs: [lint, typecheck]`) — não gasta minuto de runner
   buildando código que já sabemos que tem problema.
2. `dependency-audit` roda `npm audit --audit-level=high` em todo push e
   PR.
3. `dependency-review` roda só em PR, comparando o que está sendo
   adicionado contra a base — exige GitHub Advanced Security em repo
   privado.
**Visual:** diagrama — os 5 ícones dos sensores, cada um alimentando uma
caixa "status check no PR".
`ref: github.com/actions/dependency-review-action`
Nota: `[01:35–01:38] Por que 5 jobs separados e não 1: cada verificador
vira um status check independente — é isso que permite escolher, na branch
protection, exatamente quais têm que estar verdes.`

### 30. `</O PR BLOQUEADO>`
Frase-âncora: "O BOTÃO DE MERGE\nNÃO APARECE CLICÁVEL."
1. Quebre um teste de propósito, abra um PR — o botão de merge fica
   desabilitado.
2. Mensagem do GitHub: "Required statuses must pass before merging."
3. Isso só existe depois de branch protection configurada (próximo slide)
   — sem ela, o CI roda e mostra X vermelho, mas nada impede o merge.
**Visual:** print (recriado) da tela de PR do GitHub com o botão de merge
desabilitado e a mensagem de status obrigatório.
Nota: `[01:38–01:41] Esse é o "prova visual" que eles vão anexar no
entregável.`

### 31. `</BRANCH PROTECTION, CLIQUE A CLIQUE>`
Frase-âncora: "SETTINGS → BRANCHES →\nREQUIRE STATUS CHECKS."
1. Rode o workflow pelo menos uma vez antes — sem isso, a lista de checks
   pra marcar aparece vazia.
2. Settings → Branches → Add branch ruleset → Target: default branch.
3. Marque "Require a pull request before merging" e "Require status
   checks to pass before merging" — adicione os 5 nomes dos jobs um por
   um.
**Visual:** sequência de 2-3 prints (recriados) da tela de configuração do
GitHub, numerados 1→2→3 seguindo os cliques.
Nota: `[01:41–01:44] Pergunta mais comum: "não aparece nenhum check pra
marcar" → 90% das vezes é porque o workflow ainda não rodou nessa branch.`

### 32. `</SE SEU REPO É PRIVADO>`
Frase-âncora: "BRANCH PROTECTION NÃO É GRÁTIS\nEM REPOSITÓRIO PRIVADO."
Caixa de destaque (amarela): "Verificado na doc oficial do GitHub — só é
grátis em repositório público, ou com GitHub Pro/Team/Enterprise." As 3
saídas:
1. Repo privado + conta de estudante verificada → GitHub Student
   Developer Pack (Pro grátis enquanto for estudante).
2. Repo privado, sem Student Pack, conteúdo pode ser público → tornar o
   repositório público (Settings → General → Danger Zone).
3. Repo privado, precisa continuar privado, sem Student Pack → documentar
   a limitação no `ENTREGAVEL.md` com print da tela — avaliado como
   entendimento correto do limite, não como entrega incompleta.
**Visual:** ícone de cadeado (repo privado) com 3 setas saindo pras 3
saídas, cada uma com um ícone (chapéu de estudante / globo público /
documento).
`ref: docs.github.com (about-protected-branches)` ·
`ref: education.github.com/pack`
Nota: `[01:44–01:55] Circule — esta é a trava mais comum do lab. Reste o
tempo do bloco pra hands-on: push, Actions verde, PR quebrado de propósito,
merge bloqueado.`

### 33. `</ATIVIDADE DE FIXAÇÃO>`
Entregável: CI bloqueando merge + 3 testes BDD + 3 logs red/green/refactor
+ 1 teste que não prova nada. Link do `ENTREGAVEL.md` e do formulário
único.
**Visual:** ícone de checklist/formulário, com os 4 itens do entregável
marcados um a um.
Nota: `[01:55–01:58] Lembre: o log só vale se prova a ordem no commit, não
se narra a ordem.`

### 34. `</PRÓXIMOS PASSOS>`
Frase-âncora: "AULA 2: A CLÍNICA É SOBRE O SEU CI." Pontos: fila do CI
vermelho decide quem é projetado (não quem levanta a mão), diagnóstico às
cegas antes do código aparecer, continua construindo o tempo todo. Callback
do fio condutor: "o verificador que vocês construíram hoje é o que vai
decidir, sem vocês, quem entra na fila da Aula 2."
**Visual:** ícone de fila (pessoas em fila indiana estilizadas), mesmo
motivo visual da capa da Aula 2.
Nota: `[01:58–02:00] Feche recapitulando uma frase por sensor antes de
liberar a sala.`

---

## AULA 2 (só regras do jogo, sem conteúdo novo)

### A1. Capa
`SEMANA 8 · AULA 2 — CLÍNICA ROTATIVA`. Imagem: o semáforo do deck da aula
1, junto de um ícone de fila (pessoas em fila indiana estilizadas).

### A2. `</REGRAS DO JOGO>`
Fila do CI vermelho (quem está mais recentemente quebrado entra primeiro,
empate por sorteio), checkpoint a cada 15 min, 60 segundos de diagnóstico
às cegas pela plateia antes do código aparecer, resto do tempo é construção
contínua.

### A3. `</FILA DO CI>`
Elemento visual: o quadro/planilha da fila, em branco pra ir preenchendo ao
vivo (ferramenta de facilitação, não slide de conteúdo — deixe projetado a
aula toda, atualizando).

Nenhum outro slide — o resto da aula é o roteiro da facilitadora
projetando e depurando, não conteúdo preparado.
