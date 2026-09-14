# Slides outline — Semana 2

**Total: 36 slides** — Aula 3: 30 slides (`S1`–`S30`) · Aula 4: 6 slides (`A1`–`A6`).
A contagem-alvo da expansão (16 → 26–34, média 30) é a da Aula 3: era 16, agora 30.
A Aula 4 segue curta por design (lab guiado, sem conteúdo novo) — só ganhou 1 slide,
pelo pedido específico de separar catálogo de domínios e critério de decisão.

Template PDA: roxo escuro + amarelo, Dela Gothic One (títulos), IBM Plex Sans (corpo).
Nenhum bloco conceitual sem imagem/diagrama/GIF — marcado em cada slide abaixo com uma
linha `**Visual:**`. Teto: no máximo 3 slides consecutivos sem recurso visual (a estrela
do template não conta) — nesta versão, o maior trecho sem recurso visual é 1 slide.

**Fio condutor da semana** (ainda não estava declarado como tal — escrevo aqui):
`VOCÊ ESPECIFICA. O AGENTE EXECUTA. VOCÊ DECIDE.` Já existia implícito na frase-âncora do
Lab 1 e na "regra da casa" do `README.md` ("o agente executa, você especifica, lê o diff,
roda os testes e decide"). Uso essa frase reduzida nas transições entre blocos desta
versão do deck — ela é o mesmo compromisso repetido em três lugares diferentes: no
prompt (bloco 3), no contexto (bloco 5) e no nascimento do projeto (aula 4).

---

## AULA 3 — Conceito + demo (30 slides · 120 min)

### S1 — Capa

`Semana 2 — Prompt, contexto e o nascimento do projeto`
Subtítulo: `Especialização em Desenvolvimento com IA · PDA · Turma 2`
**Visual:** foto/ilustração de uma janela (literal) meio embaçada — prenúncio visual do
tema "janela de contexto" sem entregar o conceito ainda.

### S2 — `</HOJE>`

Kicker: `> PLANO DA AULA`
Linha do tempo minuto a minuto, espelhando a seção 5 do roteiro:
10' Giro das IAs · 15' Recap ativo · 30' Teoria+demo · 15' Lab 1 · 20' Teoria+demo ·
25' Lab 2 · 5' Fechamento.
**Visual:** barra de progresso horizontal com os 7 blocos coloridos.

### S3 — `</COMO ACOMPANHAR>`

Kicker: `> REGRAS DO JOGO`
1. **Terminal aberto o tempo todo** — você vai copiar comando, não só olhar
2. **Travou?** Chat + segue em dupla — ninguém espera o vizinho travar também
3. **Pré-requisito:** ambiente da aula 1 funcionando (`claude --version` sem erro)
4. **Bloco assíncrono desta semana é pré-requisito de entrada na aula 4** — não desta aula
**Visual:** grade pequena de 4 ícones (terminal, chat, check, alerta), um por ponto.

### S4 — Giro das IAs

Kicker: `BLOCO 1`
Espaço em branco pra notícias do dia (preenchido no dia, não fixo).
**Visual:** GIF de "breaking news" cômico/exagerado — segura atenção de abertura.

### S5 — Recap por sorteio

Kicker: `BLOCO 2 · RECAP ATIVO`
Título tag: `</O QUE FICOU DA SEMANA 1>`
**Visual:** roleta ou chapéu de sorteio (ilustração simples).
Notas: `[00:10–00:11] Sorteio de 4-5 perguntas do banco no roteiro. Vocês respondem, eu
só corrijo.`

### S6 — Frase-âncora do Bloco 3

Kicker: `BLOCO 3 · TEORIA + DEMO`
Título tag: `</POR QUE "FAZ UM SISTEMA DE LOGIN" FALHA>`
Frase-âncora (caixa alta, quebra intencional):
```
O MODELO NÃO ERRA
O VAGO —
ELE RESOLVE O VAGO
COM A OPÇÃO MAIS COMUM
```
**Visual:** nenhum recurso novo — este é o slide de respiro que abre o bloco (a marca
visual do bloco anterior ainda sustenta a transição). Prepare um print de fallback do
terminal para o slide seguinte, caso a demo falhe no dia.
Notas: `[00:25–00:26] Sem preâmbulo. "Vou pedir uma coisa que todo mundo já pediu assim
pelo menos uma vez." Abre o terminal.`

### S7 — O prompt ruim

Kicker: `BLOCO 3`
Título tag: `</O PROMPT>`
```
> faz um sistema de login
```
Uma linha, sem contexto, sem stack, sem exemplo, sem formato — de propósito.
**Visual:** captura do terminal com o comando sendo digitado (capturar no ensaio).
Notas: `[00:26–00:28] Digita ao vivo, sem narrar antes. Deixa rodar até ele produzir algo
— não interrompe.`

### S8 — O que voltou

Kicker: `BLOCO 3`
Título tag: `</O QUE ACABOU DE ACONTECER>`
1. **Assumiu stack sem perguntar** — Node/Express com JWT, ou equivalente
2. **Não escreveu teste** — nada garante que aquilo funciona
3. **(se aparecer) inventou uma API ou lib que não existe**
**Visual:** print real da resposta gerada na demo, com as 3 falhas circuladas em
vermelho (capturar durante o ensaio, não improvisar no dia — mas manter a demo ao vivo
também). Meme sugerido no rodapé: reação de "não foi bem isso que eu pedi" — tom de humor
sobre a falha do modelo, não do aluno.
`ref:` https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices
Notas: `[00:28–00:33] "Ele não chutou porque é ruim. Ele chutou porque eu não dei
informação suficiente pra ele fazer diferente — e quando falta informação, o modelo
completa com o que é mais comum nos dados dele, não com o que EU quero." Nomeia cada
falha em voz alta.`

### S9 — Os três controles

Kicker: `BLOCO 3`
Título tag: `</ESPECIFICIDADE, EXEMPLO, FORMATO>`
1. **Especificidade** — diga o que NÃO fazer, não só o que fazer
2. **Exemplo** — um caso de entrada/saída vale mais que um parágrafo de explicação
3. **Formato de saída** — diga a forma exata do que volta (plano antes de código, por
   exemplo)
**Visual:** diagrama de 3 caixas lado a lado, mesma largura, ligadas por uma seta comum
saindo de uma caixa "PROMPT VAGO" à esquerda — cada caixa tem um ícone (uma lupa para
Especificidade, um par de setas entrada→saída para Exemplo, uma moldura vazia para
Formato) e o nome do controle abaixo do ícone. Nenhuma seta entre as três caixas: elas
são independentes, o aluno precisa ver isso.
`ref:` https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices
Notas: `[00:33–00:36] Rápido — o objetivo aqui é nomear os três controles, não esgotar
cada um.`

### S10 — Controle 1: Especificidade

Kicker: `BLOCO 3`
Título tag: `</ESPECIFICIDADE>`
1. **Diga o que NÃO fazer**, não só o que fazer — "não escolhe framework sem perguntar"
   fecha uma porta que "faz um sistema de login" deixa aberta pro modelo chutar
2. **Fixe o que já está decidido** — stack, banco, convenção de nome — cada decisão que
   você não fixa, o modelo decide por você
**Visual:** dois blocos de texto lado a lado, mesmo prompt de base, um com a restrição
("stack: Node + Express. Não usa nenhuma lib nova sem perguntar primeiro.") e outro sem —
a diferença de uma frase, destacada em negrito.
Notas: `[00:36–00:37] Exemplo real: "stack fixada, sem escolher framework por conta
própria" — é a mesma restrição que aparece na reescrita, daqui a pouco.`

### S11 — Controle 2: Exemplo

Kicker: `BLOCO 3`
Título tag: `</EXEMPLO>`
1. **Um par entrada/saída vale mais que um parágrafo** — mostra a forma, não só descreve
2. **O modelo copia o padrão do exemplo**, não só o conteúdo — formato, nomes, nível de
   detalhe
**Visual:** bloco de código mostrando um exemplo real de payload:
```
entrada: { "email": "ana@x.com", "senha": "123456" }
saída esperada: 200 + token, ou 401 se a senha for errada
```
Notas: `[00:37–00:38] "Isso aqui eu vou usar de verdade na reescrita — é o exemplo de
login que fecha a ambiguidade de 'como é que entra o usuário'."`

### S12 — Controle 3: Formato de saída

Kicker: `BLOCO 3`
Título tag: `</FORMATO DE SAÍDA>`
1. **Diga a forma exata do que deve voltar** — texto corrido? lista? plano antes de
   código?
2. **"Me mostra o plano antes de criar arquivo"** é uma instrução de formato, não de
   conteúdo — e é a que vocês vão usar no Lab 1
**Visual:** print de um plano em lista numerada de arquivos ("vou criar: `routes/login.js`,
`tests/login.test.js`... confirma?") — a forma de saída que o formato pediu, sem nenhum
código ainda.
`ref:` https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices
Notas: `[00:38–00:40] Fecha a teoria aqui, no minuto 40 — os três controles ficam na tela
enquanto a gente reescreve o prompt de verdade.`

### S13 — O prompt bom

Kicker: `BLOCO 3`
Título tag: `</MESMO PEDIDO, PROMPT DIFERENTE>`
```
> Cria um endpoint de login em Node + Express.
> Não usa nenhuma lib nova sem perguntar primeiro.
> Exemplo: entrada { "email": "ana@x.com", "senha": "123456" },
> saída 200 + token ou 401 se a senha for errada.
> Me mostra o plano de arquivos antes de criar qualquer coisa.
```
Os três controles do S9 aplicados, um por linha — nenhum é novo, é o mesmo prompt vago do
S7 com as três lacunas fechadas.
**Visual:** captura do terminal com esse prompt sendo digitado.
Notas: `[00:40–00:42] Narra cada linha enquanto digita: "aqui eu fixei a stack... aqui eu
dei o exemplo... aqui eu pedi o formato." Roda.`

### S14 — O que voltou, dessa vez

Kicker: `BLOCO 3`
Título tag: `</A DIFERENÇA ACONTECENDO NA TELA>`
Lado a lado: print da resposta vaga (S8) vs print da resposta especificada — plano de
arquivos, sem lib nova, teste incluído.
**Visual:** os dois prints emparelhados, falha circulada em vermelho de um lado, os três
acertos marcados em verde do outro.
Notas: `[00:42–00:47] "Mesmo modelo, mesma pergunta de fundo — a diferença inteira está
no que eu dei de informação." Ponte pro fio condutor: você especifica, o agente executa.`

### S15 — Pra ir mais fundo (não entra hoje)

Kicker: `> PRA IR MAIS FUNDO`
Título tag: `</SELF-CONSISTENCY E PT/EN>`
1. **Self-Consistency** — rodar o mesmo raciocínio várias vezes e votar na resposta mais
   consistente — ganho real em tarefas de raciocínio (Wang et al., 2022)
2. **Português custa mais token que inglês** pra dizer a mesma coisa (vocês já viram isso
   na aula 1) — e a qualidade da resposta também pode variar entre idiomas
**Visual:** nenhum novo — mantenha o diagrama do S9 (três controles) esmaecido no fundo,
como lembrete de que isto é aprofundamento do mesmo tema, não um assunto novo.
`ref:` https://arxiv.org/abs/2203.11171
Este slide não é falado em detalhe — é apontado e a turma segue.
Notas: `[00:47–00:48] "Isso aqui eu não vou abrir agora — fica de referência." Aponta e
segue.`

### S16 — `MÃO NA MASSA` — Lab 1

Kicker: `LAB 1 · 15 MIN`
Título tag: `</REESCREVA O PROMPT>`
Frase-âncora:
```
VOCÊ ESPECIFICA.
O AGENTE EXECUTA.
VOCÊ DECIDE SE SERVE.
```
Marcador: `MÃO NA MASSA` — grande, centralizado.
**Visual:** ícone de teclado/terminal.
Notas: `[00:48–00:55] Ponte falada: "agora é a vez de vocês fazerem essa reescrita com o
prompt que vou soltar no chat." Distribui o prompt de uma linha. Lab roda 00:55–01:10 com
este slide na tela.`

### S17 — Frase-âncora do Bloco 5

Kicker: `BLOCO 5 · TEORIA + DEMO`
Título tag: `</SMART ZONE, DUMB ZONE>`
Frase-âncora:
```
A JANELA NÃO QUEBRA
DE REPENTE —
ELA VAI FICANDO
MAIS BURRA ANTES
DE FICAR CHEIA
```
**Visual:** nenhum recurso novo — slide de respiro que abre o bloco (o diagrama chega no
próximo slide).
Notas: `[01:10–01:11] Abre sessão NOVA do Claude Code num repo de teste. "Hoje eu vou
mostrar essa janela enchendo, e o que acontece com a qualidade da resposta enquanto
isso."`

### S18 — Diagrama: Smart Zone / Dumb Zone

Kicker: `BLOCO 5`
Título tag: `</A JANELA COMO BARRA>`
1. **A barra é a janela de contexto** — enche da esquerda pra direita conforme a sessão
   acumula mensagens, arquivos lidos e ferramentas chamadas
2. **Zona boa (verde), à esquerda** — sessão nova, poucas informações acumuladas, a
   resposta é confiável
3. **Zona de degradação (amarelo → vermelho), à direita** — não é um penhasco: é um
   gradiente. A confiabilidade cai *antes* da barra encher de verdade
**Visual:** diagrama horizontal de uma barra única com gradiente de cor verde → amarelo →
vermelho da esquerda pra direita, sem nenhuma marca de corte fixo (nenhum número exato
desenhado na barra — a barra de qualidade exige honestidade sobre não haver esse número
publicado). Acima da barra, uma segunda linha fina representando "qualidade da resposta"
que começa alta e cai suavemente antes do fim da barra colorida — a curva de qualidade
não acompanha a barra 1:1, ela cai primeiro.
`ref:` https://www.aihero.dev/ai-coding-dictionary/smart-zone
Notas: `[01:11–01:12] "Isso aqui é o que vamos ver na prática agora — sem spoiler do
número." Roda \`/context\`.`

### S19 — Terminal: `/context`

Kicker: `BLOCO 5`
Título tag: `</A JANELA AGORA>`
```
$ /context

Janela de contexto: 8% em uso
├─ system prompt        2%
├─ CLAUDE.md            1%
├─ ferramentas (MCP)    2%
└─ mensagens da sessão  3%
```
**Visual:** captura de terminal real (o número exato varia no dia — capturar no ensaio).
Notas: `[01:12–01:13] "Isso aqui é a janela de contexto. Baixa — sessão acabou de
abrir."`

### S20 — O que reparar nessa saída

Kicker: `BLOCO 5`
Título tag: `</LEIA O PERCENTUAL>`
1. **8% está bem dentro da zona verde** — é o que uma sessão nova parece
2. **A composição importa tanto quanto o total** — `CLAUDE.md` e ferramentas custam token
   antes mesmo de você digitar a primeira mensagem
**Visual:** o mesmo print do S19, agora com uma seta apontando pro número total e outra
apontando pra linha do `CLAUDE.md`.
`ref:` https://code.claude.com/docs/en/context-window
Notas: `[01:13] "Guarda esse número — a gente vai comparar com o de mais tarde."`

### S21 — Regra em chat, tarefa pequena

Kicker: `BLOCO 5`
Título tag: `</CONTEXTO BAIXO, REGRA SEGUIDA>`
1. Regra dada agora, só em chat, **não no `CLAUDE.md` ainda**: "toda função nova tem
   teste"
2. Pede uma função pequena (formatar telefone) — confirma: ele escreveu o teste
**Visual:** print do trecho de chat com a regra + o teste gerado, lado a lado.
Notas: `[01:13–01:16] Contexto ainda baixo, ele acerta. Isso é o baseline — o que vem
depois vai quebrar exatamente essa mesma regra.`

### S22 — O que vai quebrar

Kicker: `BLOCO 5`
Título tag: `</A APOSTA>`
1. **Sem fechar a sessão**, pede pra ele ler e resumir 3-4 arquivos grandes e irrelevantes
   — só pra encher a janela
2. **Aposta em voz alta, antes de rodar:** pede outra função pequena parecida, mesma
   regra, sem repetir em chat — "ele vai esquecer o teste, ou entregar algo mais raso"
**Visual:** ícone de arquivos grandes "entrando" numa barra de contexto que sobe — mesma
barra do S18, agora mostrada enchendo.
Notas: `[01:16–01:17] Nomeia a aposta antes de rodar — é isso que faz o erro valer como
demonstração, não como acidente.`

### S23 — Terminal: `/context` de novo

Kicker: `BLOCO 5`
Título tag: `</A JANELA MUDOU>`
```
$ /context

Janela de contexto: 68% em uso
├─ system prompt         2%
├─ CLAUDE.md             1%
├─ ferramentas (MCP)     2%
└─ mensagens da sessão  63%
```
**Visual:** captura de terminal real (número exato varia no dia — capturar no ensaio),
lado a lado com o print do S19 pra comparação direta de barra.
Notas: `[01:17–01:19] "De 8% pra 68%. Agora pede a mesma função de novo, mesma regra, sem
repetir nada em chat."`

### S24 — O que aconteceu

Kicker: `BLOCO 5`
Título tag: `</A REGRA SUMIU>`
1. **Contexto poluído → regra esquecida** — a nova função sai sem teste, ou com um teste
   mais raso que o anterior
2. **Se ele acertar mesmo assim:** segundo gatilho — pergunta algo específico só lá atrás
   na conversa ("qual foi o nome da função que eu pedi lá no começo?") e mostra ele
   hesitando ou errando
**Visual:** print do resultado da segunda função, sem teste ou com teste raso, ao lado do
teste completo do S21 — a queda visível. Meme sugerido: reação de "cadê o teste" — humor
sobre a falha do modelo, não do aluno.
Notas: `[01:19–01:21] Nomeia pra turma: "reparem — a regra não mudou, a sessão que
mudou."`

### S25 — O porquê

Kicker: `BLOCO 5`
Título tag: `</DEGRADAÇÃO, NÃO BUG>`
1. **Isso não é o modelo ficando "burro" de propósito** — é degradação de atenção sobre
   uma janela maior. Tem pesquisa publicada sobre isso, não é só opinião da facilitadora
2. **Não é um penhasco, é um gradiente** — em algum ponto (que varia, e **não tem número
   fixo publicado**) a confiabilidade cai antes da janela encher de verdade
3. **É isso que o nome Smart Zone / Dumb Zone descreve** — a zona confiável do começo da
   sessão, e a degradação gradual que vem depois
**Visual:** o mesmo diagrama de barra do S18, agora com uma marca aproximada em cima do
percentual que a turma acabou de ver na demo (68%) — não como número universal, como
referência prática *desta* demo.
`ref:` https://www.trychroma.com/research/context-rot · https://arxiv.org/abs/2307.03172
Notas: `[01:21–01:26] "Aponto os papers no slide — Chroma Context Rot e Lost in the
Middle. O percentual que vocês viram na demo é referência prática, não é lei."`

### S26 — CLAUDE.md — antes

Kicker: `BLOCO 5`
Título tag: `</O AGENTE ESQUECE>`
1. Cada sessão nova do Claude Code começa com **janela vazia** — nada do que aconteceu na
   sessão anterior atravessa
2. A regra que você deu só em chat (S21) morre junto com a sessão que ficou "suja"
**Visual:** diagrama de duas caixas em sequência: "Sessão 1 — regra dada em chat" →
seta → caixa cinza "fecha" → seta pontilhada e cortada (a informação NÃO passa) → caixa
"Sessão 2 — janela vazia, regra esquecida".
Notas: `[01:26] "O CLAUDE.md não evita que a janela encha — resolve um problema
diferente: o que atravessa entre sessões."`

### S27 — CLAUDE.md — depois

Kicker: `BLOCO 5`
Título tag: `</O AGENTE LEMBRA>`
1. Escreve a regra esquecida no `CLAUDE.md` do projeto
2. Fecha a sessão. Abre sessão nova. Pede a mesma tarefa, sem repetir a regra em chat
3. Ele acerta de cara — o teste volta
**Visual:** mesmo diagrama do S26, mas a seta entre as duas sessões agora é contínua e
passa por uma caixa central "`CLAUDE.md`" — a informação atravessa porque foi escrita lá,
não porque a sessão "lembrou" por conta própria.
`ref:` https://code.claude.com/docs/en/memory
Notas: `[01:26–01:30] Demo ao vivo: escreve a regra no CLAUDE.md, abre sessão nova,
mostra ele acertando sem repetir nada. "O CLAUDE.md não limpa a janela — garante que o
que importa está lá de novo em toda sessão nova, mesmo que a conversa anterior tenha
virado lixo."`

### S28 — CLAUDE.md — anatomia do arquivo

Kicker: `BLOCO 5`
Título tag: `</O QUE ENTRA NELE>`
1. **Stack e comandos** — o que roda, como testa, como builda
2. **Pelo menos uma regra concreta** — a que faltou hoje é candidata óbvia
3. **Curto funciona melhor que completo** — cada linha custa token em todo turno; a
   documentação oficial recomenda abaixo de 200 linhas
**Visual:** captura de um `CLAUDE.md` curto real, com as três seções (stack, comandos,
regras) marcadas por chaves coloridas na lateral.
`ref:` https://code.claude.com/docs/en/memory
Notas: `[01:30] Fica na tela sem tempo dedicado — referência rápida enquanto a turma abre
o editor pro Lab 2.`

### S29 — `MÃO NA MASSA` — Lab 2

Kicker: `LAB 2 · 25 MIN`
Título tag: `</CONTEXTO SUJO, CONTEXTO LIMPO>`
Marcador: `MÃO NA MASSA` — grande, centralizado.
**Visual:** GIF sugerido — algo tipo "antes e depois" cômico (ex.: cérebro nítido vs
cérebro "embaçado"), tom de humor sobre a própria falha do modelo, não do aluno.
Notas: `[01:30–01:55] Eles replicam a demo no próprio playground. Circula perguntando:
"em que ponto piorou pra você?"`

### S30 — Fechamento aula 3

Kicker: `> FECHAMENTO`
Título tag: `</O QUE FICA>`
Recap de 1 frase por bloco (deixe em branco — preenchido pelos 2 alunos que resumem ao
vivo).
`</PRÓXIMOS PASSOS>`: bloco assíncrono desta semana antes da aula 4 · pensar (não decidir)
o domínio do projeto.
`</A PRÓXIMA AULA>`: aula 4 — nasce o projeto. Sem conteúdo novo, lab guiado em paralelo
com a facilitadora, checkpoint a cada ~20 min. Traga pensado (não decidido) se você já
tem um problema real em mente. Duplas: mesma dupla da aula 3, mantida pro resto do
módulo.
**Visual:** GIF de fechamento — tom de "até a próxima", leve, sem novo conteúdo. Ícone de
checklist ao lado do recap.
Notas: `[01:55–02:00] Peça pra 2 alunos resumirem, não fale você.`

---

## AULA 4 — Lab guiado paralelo (6 slides — a aula é a tela do editor/terminal)

Esta aula não tem conteúdo novo, então o deck é curto: só o necessário pra ancorar os
checkpoints. A maior parte do tempo projetado é o terminal/editor da facilitadora, não
slide.

### A1 — Capa + regras do jogo

`Aula 4 — Nasce o seu projeto`
Pontos: sem conteúdo novo · checkpoint a cada 20 min · ninguém avança sozinho.
**Visual:** lista do contrato mínimo do esqueleto (mesma do A4) já visível ao fundo, num
canto — fica fixada ali o resto da aula.
Notas: `[00:00–00:05] Relembra o formato. Mostra onde a lista do contrato mínimo vai
ficar fixada.`

### A2 — Catálogo de domínios

Kicker: `> ESCOLHA DE DOMÍNIO`
Título tag: `</OS 7 DOMÍNIOS>`
1. Listagem de perfis de alunos da PDA
2. Captação de clientes e automações pra alunos freelancers da PDA
3. Quiz conectado ao Claude
4. Avaliação automatizada de projetos por IA
5. Agente de revisão de código com a voz da PDA
6. Problema real da ONG ou das próprias aulas (trazido pela facilitadora)
7. Domínio próprio do aluno
**Visual:** grade de 7 cartões pequenos, um por domínio, número grande + 1 ícone cada.
Notas: `[00:05] Mostra a lista rápido — a pergunta de corte (próximo slide) é o que
decide, não a leitura da lista.`

### A3 — O critério de decisão em 10 minutos

Kicker: `> ESCOLHA DE DOMÍNIO — 10 MIN`
Título tag: `</A PERGUNTA DE CORTE>`
Pergunta única, em destaque:
> **Você já tem um problema real — seu, de um cliente, ou da ONG — que consegue descrever
> em uma frase sem jargão técnico?**
1. **Sim, e é seu ou de alguém que você atende** → domínio 7
2. **Sim, mas é da ONG ou de outra turma** → provavelmente domínio 6, confirma no chat
3. **Não tenho um problema próprio claro** → escolhe entre 1–5 até o minuto 8. Critério de
   desempate: qual te daria mais raiva de continuar mal resolvido depois de 12 semanas?
4. **Ainda não decidiu no minuto 8** → default automático: domínio 3, Quiz
**Visual:** cronômetro grande, widget de contagem regressiva de 10 min, iniciado no
momento em que este slide sobe.
Notas: `[00:05–00:15] Cronometra visivelmente. No minuto 8, avisa em voz alta: "quem não
decidiu cai no default." No minuto 10, corta mesmo que alguém ainda esteja em dúvida.`

### A4 — O contrato mínimo do esqueleto

Kicker: `> O QUE TEM QUE EXISTIR NO FIM DE HOJE`
Checklist dos 7 itens (mesma lista do `GUIA-DO-ALUNO.md`), fixada/reaberta a cada
checkpoint como referência visual.
**Visual:** a checklist em si, com caixas de marcação grandes — funciona como o próprio
recurso visual do slide (lista estruturada, não bullet corrido).
Notas: `[00:15] Fica fixada — reabre nos checkpoints 1, 3 e 5.`

### A5 — Onde o julgamento entra

Kicker: `> O AGENTE NÃO RESOLVE ISSO SOZINHO`
Frase-âncora:
```
ELE SABE SE PARECE
UM PROJETO BEM FEITO.
SÓ VOCÊ SABE
SE RESOLVE O SEU PROBLEMA.
```
**Visual:** nenhum novo — slide de respiro, fixo e reaberto no checkpoint 2 (o contraste
com o A4, que é todo estrutura, é o próprio recurso).
Notas: `[00:15–00:35] Reaberto no checkpoint 2 (00:35–00:55): "o agente não sabe se o
plano que ele acabou de propor serve pro SEU problema — ele sabe se parece um projeto
bem-feito."`

### A6 — Fechamento aula 4

Checklist final (mesma do A4, agora com espaço pra marcar ✅ ao vivo por votação de mão).
Link do formulário de entrega e prazo.
**Visual:** a checklist com as marcações ao vivo — recurso visual estrutural, reforçado
por votação de mão levantada projetada em tempo real (contagem simples: "quantos têm os 7
itens?").
Notas: `[01:55–02:00] Revisão item por item, votação rápida. Lembra do prazo e do
formulário. Aponta pro Mural da Alucinação se algo esquisito rolou no lab.`
