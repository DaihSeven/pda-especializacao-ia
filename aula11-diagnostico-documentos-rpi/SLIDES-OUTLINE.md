# Outline de slides — Semana 6: Diagnóstico, documentos e RPI

**Total: 34 slides na aula 1** (mais os 3 slides de regras do jogo da aula 2 — `A1`–`A3` —
que continuam inalterados: aula 2 é Excalidraw coletivo, o board projetado é o material
visual da aula inteira, não slide).

Gramática PDA: roxo escuro + amarelo, Dela Gothic One (títulos) / IBM Plex Sans (corpo).
Kicker no topo, título em tag `</ASSUNTO>`, frase-âncora curta em caixa alta com quebra
de linha intencional, pontos numerados com uma frase de explicação cada, linha `ref:`
com fonte real quando houver, marcador `MÃO NA MASSA` onde a facilitadora para de falar,
blocos de terminal/código reais, **notas da apresentadora com timestamp** `[mm:ss–mm:ss]`.

Regra de imagem desta semana (teto revisado — `_BRIEF.md`, ADENDO): **no máximo 3 slides
consecutivos sem imagem, diagrama ou GIF** — a estrela do template não conta. Cada slide
abaixo tem uma linha **Visual:** dizendo o recurso. Maior sequência sem recurso visual
neste deck: **2 slides** (S17–S18, o debrief "o porquê" da Demo 1 seguido do contraste ao
vivo — a tela compartilhada é o recurso da sala nos dois, mas os slides vizinhos, S16 e
S19, já trazem imagem/ícone pra não deixar a sequência passar de 2). O mesmo padrão na
Demo 2 (S27, S29) nunca chega a 2 seguidos, porque S28 traz imagem entre eles.

**Fio condutor da semana** (não estava declarado no `ROTEIRO-FACILITADORA.md` — declaro
aqui): **"TRÊS PERGUNTAS. NUNCA NA MESMA RESPIRAÇÃO."** Abre no subtítulo da capa (S1),
sustenta a virada pro bloco de RPI (S10) e fecha o deck (S34).

Só a **aula 1** tem slide de apoio (aula 2 é Excalidraw coletivo — no máximo 3 slides de
regras do jogo, sem conteúdo novo; o board projetado é o material visual da aula inteira).

---

## AULA 1

## S1 — Capa

**Visual:** imagem — três janelas de terminal em sequência, com setas finas entre elas
(research → plan → implement), sem código visível ainda — só a forma.

`SEMANA 6`
`</DIAGNÓSTICO, DOCUMENTOS E RPI>`

Subtítulo: "Três perguntas. Três sessões. Nunca na mesma respiração."

Notas: `[00:00–00:02] Hoje vocês param de deixar o agente decidir sozinho o que
construir. Três perguntas, três sessões, nunca na mesma respiração — essa frase volta
duas vezes ainda hoje.`

---

## S2 — `</HOJE>`

**Visual:** diagrama — barra de tempo horizontal com os 7 blocos coloridos da tabela do
`ROTEIRO-FACILITADORA.md`, destacando os dois blocos de Lab em amarelo.

Kicker: `> LINHA DO TEMPO — AULA 1`

1. Giro das IAs — 10 min
2. Recap ativo (semana 5: DDD, linguagem ubíqua, Abstraction Bloat) — 15 min
3. Teoria + Demo 1: RPI em três sessões, escala do documento, ADR — 30 min
4. Lab 1 — Sessão de Research — 15 min
5. Teoria + Demo 2: EARS + BDD — 20 min
6. Lab 2 — Sessão de Plan — 25 min
7. Fechamento — 5 min

ref: roteiro completo em `ROTEIRO-FACILITADORA.md`

Notas: `[00:02–00:06] Duas perguntas resolvidas hoje: qual é o problema, o que fazer
sobre ele. A terceira — como construir — é opcional esta semana.`

---

## S3 — `</COMO ACOMPANHAR>`

**Visual:** ícone leve — checklist com 2 itens marcáveis (parágrafo pro dono do negócio /
bounded context da semana 5 prontos).

1. Terminal aberto, `RESEARCH-template.md` e `prompts-rpi.md` à mão.
2. Seu **parágrafo pro dono do negócio** (semana 2) e seu **bounded context** (semana 5)
   prontos antes de começar — hoje não reexplico DDD do zero.
3. Hoje você abre e fecha sessão de agente várias vezes de propósito — isso não é
   desperdício, é o exercício.

ref: `GUIA-DO-ALUNO.md`

Notas: `[00:06–00:10] Quem não lembra o nome do próprio bounded context, o board da
semana 5 fica projetado — não vamos parar a aula pra reconstruir isso agora.`

---

## S4 — Recap — `</SEMANA PASSADA>`

**Visual:** GIF descrito — alguém organizando caixas rotuladas rápido demais e derrubando
a pilha (humor leve, tema "estrutura antes da hora").

Kicker: `BLOCO 2 · RECAP ATIVO`

1. Sorteio de 3 alunos (ver roteiro): explicar o próprio bounded context, dar um exemplo
   de linguagem ubíqua, quiz relâmpago de Abstraction Bloat (`LeadHandler` que só repassa
   pra `leadService.process()` — resposta: Camada de Passagem).
2. Gancho pra hoje: "vocês nomearam a fronteira certa do código. Hoje a pergunta muda de
   figura: antes de qualquer fronteira existir, alguém decidiu que aquele problema
   merecia ser resolvido, e decidiu o quê. Hoje vocês são essa pessoa — três perguntas,
   nunca na mesma respiração."

Notas: `[00:10–00:25] Sorteie os 3 alunos do roteiro. Cite o nome exato do sinal no quiz
(Camada de Passagem) — a turma já conhece esse vocabulário, não parafraseie.`

---

## S5 — `</ESCALA DO DOCUMENTO>` — a régua

**Visual:** diagrama novo — régua horizontal com três degraus de tamanho crescente
(P → M → G), cada degrau rotulado só com o tamanho do documento que ele pede (ADR curta ·
ADR + spec enxuta · ADR + spec + Research mais longo), ainda sem os exemplos do catálogo
(vêm no próximo slide).

Frase-âncora:
> PRD DE 12 PÁGINAS
> PRA UM CRUD
> É MEDO DISFARÇADO DE PROCESSO.

1. Documento não é bom por ser longo nem por ser curto — é bom por resolver o problema
   certo, no tamanho certo.
2. **Escala P** (1 tela, reversível num commit): ADR de ~15 linhas basta.
3. **Escala M** (cruza confiança entre pessoas/times, ou muda contrato de dado): ADR +
   1 documento enxuto de 1 página.
4. **Escala G** (dado sensível/dinheiro, caro de reverter): os dois, mais uma sessão de
   Research mais longa, com mais de uma pessoa ouvida.

Notas: `[25:00–26:00] Pergunte à turma: "quem aqui já recebeu um documento de
especificação que ninguém leu até o fim?" Deixe 2-3 respostas antes de mostrar a régua.
O tamanho do documento segue o tamanho da decisão, não o tamanho do seu medo de estar
errado.`

---

## S6 — `</ESCALA DO DOCUMENTO>` — três exemplos do catálogo

**Visual:** diagrama novo — a mesma régua P/M/G do slide anterior, agora com uma caixa de
exemplo real encaixada em cada degrau (alinhadas por tamanho de caixa, não por texto):
domínio 1 no degrau P, domínio 4 no degrau M, domínio 2 no degrau G.

1. **P** — domínio 1: adicionar filtro de busca por habilidade na vitrine de perfis.
2. **M** — domínio 4: mudar o peso do checklist de correção pra valorizar teste
   automatizado.
3. **G** — domínio 2: trocar guardar lead de cliente de planilha por banco de dados.

Notas: `[26:00–27:00] Não é o tipo de sistema que decide a escala — é o quanto a decisão
é cara de reverter. Os três exemplos são do mesmo catálogo que vocês já conhecem.`

---

## S7 — `</PRD + DESIGN DOC, CORTADOS>`

**Visual:** diagrama novo — dois ícones de documento (rotulados "PRD" e "Design Doc")
com uma seta convergindo pra um terceiro ícone único, maior, rotulado "spec enxuta".

Frase-âncora:
> DOIS ARQUIVOS SEPARADOS
> É A ESTRUTURA QUE MAIS GERA
> DESSINCRONIA.

1. Esta semana vocês não escrevem PRD e Design Doc como dois arquivos. Corta: os dois
   viram **um documento só, enxuto** — `starter/SPEC-ENXUTA-template.md`.
2. Dois documentos separados é o jeito mais comum de o PRD dizer uma coisa e o Design
   Doc já ter mudado, sem ninguém atualizar o outro.
3. Um documento, curto, que qualquer pessoa do time lê em menos de 5 minutos.

Notas: `[27:00–28:00] Anuncie o corte direto: "PRD e Design Doc virão um arquivo só a
partir de hoje." Não é economia de trabalho — é eliminar o lugar onde os dois documentos
discordam sem ninguém notar.`

---

## S8 — `</A ADR — ANATOMIA>`

**Visual:** diagrama novo — 5 blocos empilhados, um por campo (Título, Status, Contexto,
Decisão, Consequências), cada bloco com uma frase de 1 linha dizendo o que entra nele.

Frase-âncora:
> 5 CAMPOS.
> NÃO PRECISA DE MAIS.

1. Título, Status, Contexto, Decisão, Consequências — formato de Michael Nygard, 2011.
2. Uma ADR por decisão. Decisão mudou → ADR nova, que substitui a antiga (Status:
   Superseded by ADR-000X).
3. Documenta o **PORQUÊ**, não o como — o código já documenta o como.

`ref: adr.github.io` (Nygard, "Documenting Architecture Decisions", 2011)

Notas: `[28:00–29:00] Não é lista de opções no campo Decisão — é a escolha, já feita, em
1 a 3 frases. Se cabe em uma frase, é uma frase.`

---

## S9 — `</A ADR — EXEMPLO REAL>`

**Visual:** bloco de código real — a ADR do exemplo de escala P (domínio 1), inteira, em
~15 linhas, mostrando que ela cabe na tela sem rolar.

```md
# ADR-0001: Adicionar filtro de busca por habilidade na vitrine de perfis

## Status
Aceita

## Contexto
Quem monta indicação de aluno pra vaga, na equipe da PDA, hoje abre a planilha inteira
e lê perfil por perfil — não existe filtro por habilidade. Isso custa ~40 min por
indicação, e já fez esquecer aluno que serviria pra vaga.

## Decisão
Vamos adicionar um campo de busca por habilidade na vitrine pública de perfis.

## Consequências
**Positivas:**
- Indicação cai de ~40 min pra segundos.

**Negativas / trade-offs:**
- Exige que todo aluno preencha habilidade no cadastro pra aparecer na busca.
```

1. Sem "Alternativas consideradas" — escala P não precisa.
2. Leia em voz alta: leva 20 segundos. **Decisão registrada não precisa ser lenta de
   ler.**

Notas: `[29:00–30:00] Leia a ADR em voz alta, do início ao fim. Cronometre — são 20
segundos. É esse o ponto: decisão registrada não é burocracia.`

---

## S10 — `</RPI — TRÊS SESSÕES, NÃO UMA>`

**Visual:** diagrama novo — três caixas separadas lado a lado (Research, Plan,
Implement), com o artefato escrito na seta entre elas (`RESEARCH.md` → ADR + spec →
código).

Frase-âncora:
> RESEARCH. PLAN. IMPLEMENT.
> NUNCA NA MESMA JANELA.

1. **Research:** qual é a dor, de quem, por quê — sem código, sem solução.
2. **Plan:** o que construir, o que fica de fora — sem editor aberto.
3. **Implement:** como isso vira código — a pergunta "é o problema certo" já foi
   respondida.
4. Cada sessão recebe só o **artefato** da anterior, nunca a conversa inteira.

`ref: humanlayer.dev/blog/advanced-context-engineering` (Dex Horthy, ago/2025) ·
`ref: code.claude.com/docs/en/best-practices` (mesma recomendação, doc oficial)

Notas: `[30:00–31:30] Nomeie o RPI. Cite Dex Horthy e mostre que a própria documentação
oficial do Claude Code recomenda sessão nova pra executar um spec. Três perguntas, nunca
na mesma respiração — é isso, em três sessões.`

---

## S11 — `</RPI>` — contraste: uma sessão só

**Visual:** diagrama novo — uma caixa única rotulada "RESEARCH + IMPLEMENT, MESMA
SESSÃO", com uma seta curva voltando pra dentro dela mesma (em vez de seguir pra frente),
e um X vermelho por cima.

Frase-âncora:
> O PLANO JÁ ERA O CÓDIGO,
> ESCONDIDO.

1. A exploração da fase de "pesquisa" já deixa ideia de solução na janela de contexto —
   sem ninguém aprovar.
2. Pedir "implementar direto" não pede decisão nova, só formaliza o que já estava lá.
3. Isso não dá erro visível — o texto continua parecendo um plano de verdade.

Notas: `[31:30–32:30] Amarre no vocabulário da semana 2: Smart Zone e Dumb Zone não é só
sobre a janela encher — é sobre o quê entra nela. Pesquisa exploratória no meio do
caminho **polui** o plano que vem depois, mesmo com contexto sobrando.`

---

## S12 — `</RPI>` — contraste: três sessões

**Visual:** diagrama novo — as mesmas três caixas do S10 (Research/Plan/Implement), agora
com um selo verde de "contexto limpo" em cada uma, e ao lado um ícone pequeno de balança
representando a hierarquia de alavancagem.

Frase-âncora:
> PESQUISA ERRADA: MILHARES DE LINHAS ERRADAS.
> PLANO ERRADO: CENTENAS.
> CÓDIGO ERRADO: SÓ CÓDIGO ERRADO.

1. Três sessões separadas: cada uma decide com base no problema, não no que a sessão
   anterior já esboçou sem ninguém aprovar.
2. É por isso que hoje o cuidado vai pra pesquisa e plano, não pro código — o código nem
   existe ainda.
3. A separação em sessões é a mesma distinção de Smart Zone/Dumb Zone da semana 2,
   aplicada à qualidade da decisão, não só à velocidade da resposta.

`ref: humanlayer.dev/blog/advanced-context-engineering` ·
`ref: devinterrupted.substack.com/p/dex-horthy-on-ralph-rpi-and-escaping` (Dex Horthy
liga o RPI ao vocabulário de Dumb Zone)

Notas: `[32:30–34:00] Feche a teoria com a hierarquia de alavancagem, no quadro: pesquisa
errada gera milhares de linhas erradas, plano errado gera centenas, código errado é só
código errado.`

---

## S13 — `</A DOR EM LINGUAGEM DE FEATURE>` (errado)

**Visual:** imagem — print (ou recriação) de um trecho de `RESEARCH.md` malfeito,
estilizado como card de "documento rejeitado".

Frase-âncora:
> "PRECISA DE UMA FUNCIONALIDADE
> DE BUSCA AVANÇADA COM FILTROS,
> PRA MELHORAR A EXPERIÊNCIA."

1. Nenhuma pessoa nomeada. Nenhum momento do processo. Nenhum número.
2. Isso é pedido de feature, não diagnóstico — poderia estar em qualquer sistema, de
   qualquer negócio.
3. Um agente aceita esse texto sem reclamar, e constrói exatamente a funcionalidade
   descrita — o problema é que ninguém verificou se é a dor certa.

Notas: `[34:00–34:30] Leia esse texto em voz alta, sem contexto. Pergunte: "alguém
consegue dizer de quem é essa dor?" Ninguém consegue — é esse o defeito.`

---

## S14 — `</A DOR EM LINGUAGEM DE QUEM SENTE>` (certo)

**Visual:** imagem — print (ou recriação) do mesmo card, agora estilizado como
"documento aceito", lado a lado com o card errado do slide anterior.

Frase-âncora:
> "QUEM MONTA INDICAÇÃO DE ALUNO PRA VAGA
> ABRE A PLANILHA INTEIRA E LÊ PERFIL POR PERFIL —
> ~40 MIN POR INDICAÇÃO."

1. Pessoa/papel nomeado, momento exato do processo, custo em número — os três elementos
   que o slide anterior não tinha.
2. Você conseguiria mostrar esse texto pra quem sente a dor, e ela diria "é isso mesmo" —
   não "não é bem assim".
3. Esse é o checklist de saída da sessão de Research (`starter/RESEARCH-template.md`):
   se não tem nome, momento e número, ainda não terminou.

Notas: `[34:30–35:00] Compare os dois cards lado a lado. A diferença não é o tamanho do
texto — é se alguém de fora consegue apontar de quem é a dor.`

---

## S15 — `MÃO NA MASSA` — Demo 1, ao vivo: uma sessão só

**Visual:** nenhum — duas janelas de terminal lado a lado, a da esquerda em foco; a tela
compartilhada ao vivo é o recurso visual deste slide.

Kicker: `DEMO 1 · PASSO 1`

> COLO O RESEARCH.
> PEÇO PRA IMPLEMENTAR
> NA MESMA JANELA.

Setup: `RESEARCH.md` de exemplo do domínio 1 ("listagem de perfis"), já escrito. Cole
numa sessão, deixe o agente "entender o problema" e, sem abrir sessão nova, cole o prompt
da demo em `starter/prompts-rpi.md` ("já que você entendeu, pode implementar direto").
Deixe rodar. **Não interrompa.**

Notas: `[35:00–44:00] Pare no momento em que o agente começa a mostrar código ou
estrutura de arquivo antes de qualquer documento de decisão existir. Pergunte: "alguém
decidiu que era assim que ia ser resolvido? Ou o código já é a decisão, escondida?"`

---

## S16 — `</O QUE ACABOU DE ACONTECER>` — o que quebrou

**Visual:** imagem — print (ou recriação) do "plano" que saiu da sessão contaminada:
texto genérico que já assume a solução como dada, sem nomear decisão nenhuma.

Frase-âncora:
> O PLANO QUE SAIRIA DALI
> SERIA UMA DESCRIÇÃO
> DO QUE ELE JÁ FEZ.

1. A exploração da fase de "pesquisa" deixou ideia de solução na janela de contexto —
   sem ninguém aprovar.
2. "Implementar direto" não pediu decisão nova, só formalizou o que já estava lá.
3. O texto continua parecendo um plano de verdade — isso não dá erro visível.

Notas: `[44:00–45:30] Nomeie o mecanismo: o modelo não está decidindo com base no
problema, está decidindo com base no que ele mesmo já esboçou sem ninguém aprovar.`

---

## S17 — `</O QUE ACABOU DE ACONTECER>` — o porquê

**Visual:** nenhum — slide de debrief, ainda com a tela do agente visível ao fundo.

Frase-âncora:
> CONTAMINAÇÃO DE CONTEXTO
> NÃO DÁ ERRO.
> NÃO APARECE EM VERMELHO.

1. É o erro mais difícil de perceber sozinho — o texto que sai continua parecendo um
   plano de verdade.
2. É exatamente por isso que a separação em sessões existe como regra, não como
   sugestão.
3. Ponte pro contraste: agora, a mesma pergunta, em sessão nova.

Notas: `[45:30–47:00] A diferença que vocês vão ver a seguir não vai ser "o agente ficou
melhor". Vai ser vocês não deixarem uma pergunta ainda não respondida se misturar com uma
pergunta já em execução.`

---

## S18 — `MÃO NA MASSA` — Demo 1, ao vivo: três sessões

**Visual:** nenhum — janela da direita em foco; a tela compartilhada ao vivo é o recurso
visual deste slide.

Kicker: `DEMO 1 · PASSO 2 · CONTRASTE`

> SESSÃO NOVA.
> SÓ O RESEARCH.MD ENTRA.

Sessão nova (`/clear` ou `claude` de novo), cole só o `RESEARCH.md`, peça a ADR + o
documento enxuto (prompt "Sessão 2 — Plan" de `starter/prompts-rpi.md`). Mostre que o
resultado nomeia a decisão explicitamente, em vez de implicá-la em código.

**Plano B se o tempo apertar:** pule direto pro contraste e nomeie a diferença
verbalmente, sem rodar o erro proposital completo de novo.

Notas: `[47:00–55:00] Feche: "a diferença não foi o agente ser melhor na segunda vez. Foi
vocês não deixarem uma pergunta ainda não respondida se misturar com uma pergunta já em
execução." Três perguntas, nunca na mesma respiração.`

---

## S19 — `MÃO NA MASSA` — Lab 1 (15 min)

**Visual:** ícone — lupa sobre um cronômetro de 15 min (card de lab).

Kicker: `> LAB 1 — 15 MIN`
`</SESSÃO DE RESEARCH>`

Frase-âncora:
> SESSÃO NOVA.
> SÓ PESQUISA.

1. Sessão nova → cola prompt de Research (`starter/prompts-rpi.md`) → agente entrevista.
2. Sai um `RESEARCH.md` → checklist de saída (sem palavra de solução técnica).
3. Se o agente já quer dar solução, interrompa e diga que ainda não.

ref: `GUIA-DO-ALUNO.md`

Notas: `[55:00–70:00] Circule, não construa. Se alguém disser "o agente já quer me dar
solução", responda: interrompa e diga que ainda não — se ele insistir de novo, é sinal
de que faltou reforçar no prompt. Ao fim, peça 2 alunos pra ler uma frase do próprio
RESEARCH.md em voz alta — a turma vota se parece dor real ou feature genérica.`

---

## S20 — `</EARS — PADRÃO 1 DE 5 · UBÍQUA>`

**Visual:** diagrama novo — linha do tempo curta: ícone de motor a jato → "requisito sem
ambiguidade, 2009" → ícone de terminal, "specs de agente de IA hoje" — mostrando que a
notação atravessou 15+ anos e trocou de domínio sem trocar de forma.

Kicker: `BLOCO 5 · TEORIA + DEMO 2`

Frase-âncora:
> CINCO GABARITOS DE FRASE.
> NENHUM ESPAÇO PRA
> "FUNCIONAR BEM."

**Ubíqua** (sempre verdade, sem gatilho) — gabarito: "O `<sistema>` deve `<resposta>`."

Exemplo do domínio (avaliação automatizada de projetos): "O verificador de entrega deve
registrar se `npm test` passou antes da submissão."

`ref: alistairmavin.com/ears` (Alistair Mavin e equipe, Rolls-Royce, 2009) ·
`ref: kiro.dev/docs/specs/feature-specs` (o mesmo formato aparece hoje no Kiro, AWS — não
é invenção de curso, é prática de mercado)

Notas: `[70:00–71:30] EARS nasceu de escrever requisito de sistema crítico de motor a
jato sem ambiguidade, na Rolls-Royce. Hoje aparece em ferramenta comercial de spec
assistida por IA — mesma forma, domínio diferente.`

---

## S21 — `</EARS — PADRÃO 2 DE 5 · ORIENTADA A EVENTO>`

**Visual:** diagrama novo — cartão do padrão, mesmo estilo visual do S20: gabarito de
frase em destaque, exemplo do domínio abaixo.

Frase-âncora:
> REAGE A ALGO
> QUE ACONTECE.

Gabarito: "Quando `<gatilho>`, o `<sistema>` deve `<resposta>`."

Exemplo do domínio: "Quando o aluno submete o link do repositório, o verificador deve
rodar a suíte de testes do projeto e salvar o resultado."

Notas: `[71:30–72:30] Peça pra turma identificar o gatilho nesse exemplo antes de você
apontar — "submete o link" é o evento.`

---

## S22 — `</EARS — PADRÃO 3 DE 5 · ORIENTADA A ESTADO>`

**Visual:** diagrama novo — cartão do padrão, mesmo estilo visual.

Frase-âncora:
> VALE ENQUANTO
> UMA CONDIÇÃO SE MANTÉM.

Gabarito: "Enquanto `<precondição>`, o `<sistema>` deve `<resposta>`."

Exemplo do domínio: "Enquanto a suíte de testes não roda (erro de ambiente, faltou
dependência), o verificador deve marcar a entrega como 'não verificável' em vez de
'reprovada'."

Notas: `[72:30–73:30] Esse padrão evita um erro comum: confundir "não consigo verificar"
com "reprovado". São coisas diferentes, e o padrão orientado a estado nomeia isso.`

---

## S23 — `</EARS — PADRÃO 4 DE 5 · FEATURE OPCIONAL>`

**Visual:** diagrama novo — cartão do padrão, mesmo estilo visual.

Frase-âncora:
> SÓ SE AQUELE RECURSO
> EXISTIR.

Gabarito: "Onde `<feature/variação está presente>`, o `<sistema>` deve `<resposta>`."

Exemplo do domínio: "Onde o repositório tiver um `REVIEW.md`, o verificador deve incluir
um resumo dele no relatório pra facilitadora."

Notas: `[73:30–74:30] Esse padrão é o mais esquecido pelos alunos — reforce: é pra
comportamento que só existe QUANDO uma variação está presente, não pra todo mundo.`

---

## S24 — `</EARS — PADRÃO 5 DE 5 · COMPORTAMENTO INDESEJADO>`

**Visual:** diagrama novo — cartão do padrão, mesmo estilo visual, com os 5 cartões dos
padrões 1–5 aparecendo em miniatura no rodapé, todos juntos, marcando o fim da sequência.

Frase-âncora:
> O QUE FAZER
> QUANDO ALGO DÁ ERRADO.

Gabarito: "Se `<gatilho de erro/exceção>`, então o `<sistema>` deve `<resposta>`."

Exemplo do domínio: "Se os testes não rodarem em 2 minutos, então o verificador deve
interromper e marcar como 'timeout', não travar a fila de correção."

Notas: `[74:30–75:30] Cinco padrões, cinco slides, nenhum "deve funcionar bem" disfarçado
de EARS. É esse gabarito que o Lab 2 vai cobrar critério por critério.`

---

## S25 — `</BDD — ANATOMIA>`

**Visual:** diagrama novo — três blocos empilhados (Dado / Quando / Então), cada um com
uma seta apontando pro próximo, formando uma linha de 3 passos.

Frase-âncora:
> DADO. QUANDO. ENTÃO.
> ISSO RODA NA SEMANA 8.

1. Dan North, "Introducing BDD", 2006 — nasceu pra tirar a ambiguidade de "o que testar".
2. Formato Gherkin: 3 linhas por cenário, sem prosa disfarçada.
3. Os 3 cenários de hoje viram teste automatizado literal na semana 8, sem reescrever.

`ref: dannorth.net/blog/introducing-bdd` (Dan North, 2006)

Notas: `[75:30–77:30] Diga explicitamente: "o formato Gherkin não é estilo, é contrato" —
é o mesmo arquivo que a semana 8 vai rodar com um runner de BDD.`

---

## S26 — `</BDD — CENÁRIO REAL>`

**Visual:** bloco de código real — o cenário 1 do exemplo preenchido de
`starter/EARS-BDD-template.md`, em Gherkin.

```gherkin
Cenário: entrega com testes passando
Dado um repositório com "npm test" configurado e todos os testes verdes
Quando o aluno submete o link do repositório
Então o verificador registra "testes: passou" no relatório da facilitadora
```

1. Três linhas. Nenhuma prosa disfarçada de Gherkin.
2. O template tem outros 2 cenários — um deles cobre caso de erro/limite, não só o
   caminho feliz.
3. Este EARS e este BDD usam a mesma linguagem ubíqua do bounded context que a turma
   nomeou na semana 5 — não é vocabulário novo, é o que já existe.

Notas: `[77:30–80:00] Leia o cenário em voz alta. Reparem: "testes: passou" é
verificável, não é opinião — é isso que faz o cenário virar teste de verdade depois.`

---

## S27 — `MÃO NA MASSA` — Demo 2, ao vivo: EARS bonito sobre nada

**Visual:** nenhum — sessão limpa, sem `RESEARCH.md` colado; a tela compartilhada ao vivo
é o recurso visual deste slide.

Kicker: `DEMO 2 · PASSO 1`

> 5 CRITÉRIOS EARS
> PRA MELHORAR O CADASTRO DE LEADS.
> SEM NENHUM DADO REAL.

Peça ao agente, numa sessão limpa, **sem** o `RESEARCH.md`: "me dê 5 critérios EARS pra
melhorar o cadastro de leads." Deixe ele gerar. Leia os 5 em voz alta.

Notas: `[80:00–84:00] Os 5 vão soar corretos, bem formatados, plausíveis. Não corrija
ainda — deixe a turma reagir primeiro.`

---

## S28 — `</O QUE QUEBROU>` — bonito, mas sobre nada

**Visual:** imagem — print (ou recriação) dos 5 critérios EARS gerados sem Research,
formatados perfeitamente.

Frase-âncora:
> NENHUM DESSES
> VEIO DE UMA DOR REAL
> QUE ALGUÉM CONTOU.

1. Os 5 critérios seguem o gabarito de frase certo — a forma está impecável.
2. Pergunte à turma: "algum veio de dado real, ou foi o agente imaginando o que um
   sistema de cadastro de leads 'deveria' fazer?"
3. Resposta: nenhum veio de dado real.

Notas: `[84:00–85:30] Deixe a turma perceber sozinha antes de você nomear — pergunte,
não conte.`

---

## S29 — `</O PORQUÊ>` — o agente preenche com o comum

**Visual:** nenhum — slide de debrief.

Frase-âncora:
> O AGENTE ESCREVE EARS BONITO
> SOBRE QUALQUER COISA.
> SÓ VOCÊ SABE SE BATE
> COM A DOR REAL.

1. O agente preencheu com o que é estatisticamente comum em specs de CRUD — não com o
   que aconteceu no seu negócio.
2. Isso não é o agente errando — é tarefa mecânica de formatação, e ele faz isso até
   sem nenhuma informação real.
3. Antes de aceitar um critério, aponte a frase do `RESEARCH.md` que ele responde. Se
   não existe frase, o critério não entra.

Notas: `[85:30–87:00] Essa é a segunda frase-âncora forte da aula. Repita: "o agente
escreve EARS bonito sobre qualquer coisa. Só quem ouviu a dor real sabe se aquele
critério corresponde a ela."`

---

## S30 — `</SÓ VOCÊ SABE SE BATE>` — com Research vs. sem Research

**Visual:** imagem — os 5 EARS "sem research" ao lado dos 5 EARS "com research", lado a
lado, com a mesma pergunta ("melhorar cadastro de leads") gerando resultado genérico de
um lado e específico do outro.

1. Rode o mesmo pedido colando um `RESEARCH.md` de verdade antes.
2. Compare: os critérios mudam de "melhorar X" genérico pra algo rastreável até uma
   frase específica do documento.
3. A diferença não foi o agente ficar mais inteligente — foi a informação de entrada.

Notas: `[87:00–90:00] Rode ao vivo com o RESEARCH.md colado. Compare linha por linha com
os 5 do slide anterior — a mudança de "melhorar X" pra algo específico é o ponto.`

---

## S31 — `MÃO NA MASSA` — Lab 2 (25 min)

**Visual:** ícone — lupa sobre um cronômetro de 25 min (card de lab).

Kicker: `> LAB 2 — 25 MIN`
`</SESSÃO DE PLAN>`

Frase-âncora:
> SESSÃO NOVA DE NOVO.
> SÓ O RESEARCH ENTRA.

1. Sessão nova → cola só o `RESEARCH.md` → pede ADR + documento enxuto com 5 EARS e 3
   BDD.
2. **O passo que ninguém terceiriza:** aponte, para a facilitadora circulando, em qual
   frase do `RESEARCH.md` cada EARS se apoia.
3. Commit em `docs/` do projeto (`docs/adr/0001-<slug>.md` e o documento enxuto).

ref: `GUIA-DO-ALUNO.md`

Notas: `[90:00–115:00] Circule cobrando ativamente: peça pra cada aluno apontar em qual
frase do Research um dos 5 EARS se apoia. Se ele não conseguir, é sua deixa pra
intervir. Faltando 5 min, avise: "guardem esse documento — a aula 2 inteira é vocês
enriquecendo o diagnóstico por trás dele."`

---

## S32 — `</ATIVIDADE DE FIXAÇÃO>`

**Visual:** ícone — checklist com o entregável marcado.

1. `RESEARCH.md` sem palavra de solução técnica, legível por quem não conhece o
   projeto.
2. `docs/adr/0001-<slug>.md` com Contexto citando a dor real.
3. O documento enxuto com 5 EARS e 3 BDD, cada um revisado por você.

ref: `ENTREGAVEL.md`

Notas: `[115:00–116:30] Quem terminou os dois labs já tem o material bruto do
entregável — falta só organizar e comitar.`

---

## S33 — `</PRÓXIMA AULA — RODÍZIO DO DIAGNÓSTICO>`

**Visual:** imagem — screenshot real do `excalidraw/mapa-da-dor.excalidraw`, as 4 zonas
("quem sente", "onde dói", "custo hoje", "o que o artefato muda") ainda tracejadas
(vazias), antes de qualquer aluno preencher.

Frase-âncora:
> O ANDAIME É NOSSO.
> O QUADRO É SEU.

1. **Tema:** Rodízio do diagnóstico — o quadro muda de dono no meio da aula.
2. **Formato:** cada aluno preenche uma zona do quadro de um colega, só lendo o que já
   está escrito, sem perguntar nada.
3. **O que trazer pronto:** o `RESEARCH.md` da sessão de hoje, escrito.
4. **Como as duplas/trios se formam:** sorteio cruzado por domínio, mesma mecânica
   conhecida desde a semana 3.

ref: `excalidraw/mapa-da-dor.excalidraw`

Notas: `[116:30–118:00] Isso é o andaime vazio que a turma vai preencher na aula 2. Você
não abre esse arquivo pra desenhar nada — quem preenche é sempre a turma.`

---

## S34 — `</PRÓXIMOS PASSOS>`

**Visual:** nenhum.

1. Aula 2 é laboratório coletivo — vocês só resolveram duas das três perguntas hoje
   (qual é o problema, o que fazer sobre ele); a terceira (como construir) é opcional
   esta semana.
2. Entregável final: ver `ENTREGAVEL.md`, prazo antes da aula 1 da semana 7.
3. Três perguntas, nunca na mesma respiração — vocês vão usar esse vocabulário de novo,
   sem reexplicação, a partir da semana 7.

Notas: `[118:00–120:00] Recap sem slide novo, por pergunta: "hoje vocês separaram três
perguntas que a maioria resolve junto, mal — qual é o problema, o que fazer sobre ele,
como construir." Anuncie a aula 2 e o entregável.`

---

## AULA 2 — apenas regras do jogo (sem conteúdo novo)

### A1. Capa da aula 2

`SEMANA 6 · AULA 2 · RODÍZIO DO DIAGNÓSTICO` — subtítulo: "Você preenche o quadro de um
colega antes de voltar pro seu."

### A2. `</COMO FUNCIONA O RODÍZIO>`

Mostra o diagrama de rotação que já está dentro do `mapa-da-dor.excalidraw` ("COMO O
RODÍZIO FUNCIONA"), projetado direto do arquivo — não recriar em slide separado. Regra
de ouro: quem preenche a zona de um colega só usa o que já está escrito ali.

### A3. `</A TABELA DO DIA>`

Espelha a tabela de tempo do `ROTEIRO-FACILITADORA.md` (aula 2, 8 blocos, 120 min).
