# Slides — Semana 14 (aulas 27 e 28)

**Total: 24 slides.** Isto foge da faixa de 26-34 do resto do curso, e é intencional:
o ADENDO 2 pede volume alto porque "profundidade, imagem, diagrama e exemplo só cabem
em muitos slides leves" — mas essa regra existe pra sustentar **conceito novo**, e
esta semana não tem nenhum. A aula 27 é plantão (a maior parte do tempo não usa slide
nenhum, é fila e telão ao vivo); a aula 28 é Demo Day (a maior parte do tempo é os
próprios alunos apresentando, não slide de facilitadora). O deck aqui serve pra
estruturar o que precisa ser dito uma vez com clareza — regras, checklist, rubrica,
autoavaliação, reposição, fechamento — não pra ensinar. Encher com slides de
transição só pra bater 26+ seria contra o próprio princípio do curso: uma ideia por
slide, nunca ideia nenhuma por slide.

Template PDA: roxo escuro + amarelo, Dela Gothic One (títulos) / IBM Plex Sans
(corpo). Teto visual: **no máximo 3 slides seguidos sem imagem/diagrama/GIF**
(contador `[sem visual: N]` em cada slide). Nenhum slide menciona Alura. Fio condutor
repetido nas transições:

> **"TERMINOU O CURSO. COMEÇA O TRABALHO."**

---

## AULA 27 — Plantão (slides 1–14)

### S1 — Capa
- Título: **Semana 14 — Buffer, Finalização e Demo Day**
- Subtítulo: Última semana · Módulo 4 — Harness & Loop Engineer
- Visual: fundo roxo padrão + ícone de checklist com um item sendo marcado, grande.
- `[sem visual: 0]`

### S2 — `</HOJE>`
- Kicker: `> ROTEIRO`
- Linha do tempo minuto a minuto da aula 27 (Giro 10 · Abertura do plantão 10 ·
  Plantão 60 · Checkpoint 10 · Plantão 25 · Fechamento 5) e uma segunda barra menor
  anunciando que a aula 28 é Demo Day.
- Visual: barra horizontal proporcional, cor única pro bloco "plantão" (não tem
  divisão teoria/lab hoje).
- `[sem visual: 0]`

### S3 — `</COMO ACOMPANHAR>`
- Kicker: `> REGRAS DA CASA`
- Pontos numerados:
  1. **Traga o checklist já auditado.** Sem isso, a fila não sabe te priorizar.
  2. **Não veio pra aprender coisa nova hoje.** Veio pra destravar o que já existe.
  3. **Sinalize o problema numa linha.** Não narre a história toda antes de pedir.
- ref: `starter/CHECKLIST-FINAL-QUALIDADE.md`
- `[sem visual: 1]`

### S4 — `</BLOCO 1 · GIRO DAS IAS>`
- Frase-âncora: **HOJE VOCÊ MOSTRA PRA ALGUÉM DE FORA\nO QUE VOCÊ CONSTRUIU AQUI DENTRO.**
- Visual: **GIF** — alguém arrumando a mesa/bagunça rapidamente antes de uma visita
  chegar, tom de humor (não pânico) — a emoção é "última arrumada antes da visita".
- Notas: `[00:00–00:10] Giro das IAs — puxe: quem já teve que explicar o projeto pra
  alguém de fora do curso essa semana? Como foi?`
- `[sem visual: 0]`

### S5 — `</ISTO NÃO É AULA>`
- Kicker: `BLOCO 2 · ABERTURA DO PLANTÃO`
- Frase-âncora: **NENHUM CONCEITO NOVO ENTRA HOJE.\nVOCÊ TRAZ O QUE ESTÁ QUEBRADO.**
- Visual: ícone grande de "plantão" (uma cruz de posto de atendimento, estilo
  simplificado) substituindo o ícone usual de "aula".
- Notas: `[00:10–00:20] Explique a lógica do dia antes de abrir a fila.`
- `[sem visual: 0]`

### S6 — `</AS 3 REGRAS DA FILA>`
- Kicker: `> COMO O PLANTÃO FUNCIONA`
- Pontos numerados:
  1. **Prioridade por bloqueio**, não por ordem de chegada.
  2. **Sinalize numa linha** no quadro compartilhado.
  3. **3 sinalizações iguais = vai pro telão.**
- Visual: diagrama de fluxo — três caixas em sequência (sinaliza → checa se ≥3 iguais
  → vai pro telão ou pra clínica individual).
- `[sem visual: 0]`

### S7 — `</SE NINGUÉM PEDIR AJUDA>`
- Kicker: `> A OUTRA METADE DO PLANTÃO`
- Frase-âncora: **QUEM NÃO PEDE AJUDA\nNEM SEMPRE É QUEM ESTÁ BEM.**
- Visual: ícone de uma pessoa circulando entre mesas com uma lupa — a facilitadora
  ativa, não passiva.
- ref: `GUIA-DO-ALUNO.md`, seção "Como funciona o plantão"
- `[sem visual: 0]`

### S8 — `</CHECKLIST: FUNDAMENTOS>`
- Kicker: `> O QUE VOCÊ AUDITA HOJE (1/5)`
- Conteúdo: os blocos 0-2 do checklist (repo/CLAUDE.md/parágrafo do dono do negócio,
  skill própria, MCP server e `DECISAO-ESCOPO.md`) — Semanas 2 a 4.
- Visual: os itens como cartões de checklist com ícone de check vazio/cheio,
  agrupados visualmente por semana.
- ref: `starter/CHECKLIST-FINAL-QUALIDADE.md`, blocos 0-2
- `[sem visual: 0]`

### S9 — `</CHECKLIST: FRONTEIRAS E SPEC>`
- Kicker: `> O QUE VOCÊ AUDITA HOJE (2/5)`
- Conteúdo: blocos 3-5 (bounded contexts, `RESEARCH.md`/ADR/EARS/BDD, 3 specs
  executadas com gate) — Semanas 5 a 7.
- Visual: mesmo formato de cartões da S8, cor de destaque diferente por semana.
- `[sem visual: 0]`

### S10 — `</CHECKLIST: VERIFICAÇÃO E REVISÃO>`
- Kicker: `> O QUE VOCÊ AUDITA HOJE (3/5)`
- Conteúdo: blocos 6-7 (CI bloqueando merge, os 5 sensores, os dois subagentes de
  revisão) — Semanas 8 e 9.
- Visual: cartões de checklist, mesmo padrão.
- `[sem visual: 0]`

### S11 — `</CHECKLIST: ORQUESTRAÇÃO E PRODUÇÃO>`
- Kicker: `> O QUE VOCÊ AUDITA HOJE (4/5)`
- Conteúdo: blocos 8-9 (MCP client próprio, app em produção com evals e segredos) —
  Semanas 10 e 11.
- Visual: cartões de checklist, mesmo padrão.
- `[sem visual: 0]`

### S12 — `</CHECKLIST: AGENTES, AUTOMAÇÃO E RAG>`
- Kicker: `> O QUE VOCÊ AUDITA HOJE (5/5)`
- Conteúdo: blocos 10-11 (automação n8n/ADK, AIOps 2, pipeline de RAG) — Semanas 12 e
  13.
- Visual: cartões de checklist, mesmo padrão.
- `[sem visual: 0]`

### S13 — `</ANTES DE ENTRAR NA FILA>`
- Kicker: `> RECAPITULANDO`
- Frase-âncora: **TERMINOU O CURSO.\nCOMEÇA O TRABALHO.** (primeira repetição do fio
  condutor)
- Sem visual dedicado — slide de transição verbal antes de reabrir a fila.
- `[sem visual: 1]`

### S14 — `</O QUE VEM NA AULA 28>`
- Kicker: `> PRÓXIMOS PASSOS`
- Pontos numerados:
  1. **Pitch de 5 a 8 minutos.** Sozinho, do seu projeto.
  2. **Formato anunciado hoje** — ao vivo ou vídeo, conforme sorteio (ver
     `ROTEIRO-FACILITADORA.md`).
  3. **Traga o roteiro cronometrado**, não decorado.
- Visual: ícone de microfone/palco, anunciando a virada de tom pra próxima aula.
- `[sem visual: 0]`

---

## AULA 28 — Demo Day (slides 15–24)

### S15 — Capa (Demo Day)
- Título: **Demo Day — Especialização em Desenvolvimento com IA**
- Subtítulo: Turma 2 · Programadores do Amanhã
- Visual: fundo roxo + ícone de troféu/microfone estilizado (celebração, não
  competição — evite qualquer visual de "pódio" ou ranking).
- `[sem visual: 0]`

### S16 — `</AS REGRAS DO PITCH>`
- Kicker: `> 5 A 8 MINUTOS`
- Pontos numerados:
  1. **Abra pelo parágrafo do dono do negócio.** É a sua abertura, não invenção nova.
  2. **Demo ao vivo, com plano B.** Vídeo curto pronto se travar.
  3. **Nomeie uma decisão sua** que o agente não tomou sozinho.
- Visual: ícone de cronômetro ao lado de um ícone de vídeo (o plano B).
- ref: [YC — A Guide to Demo Day Presentations](https://www.ycombinator.com/blog/guide-to-demo-day-pitches/); [Guy Kawasaki — 10/20/30 Rule](https://guykawasaki.com/the_102030_rule/)
- `[sem visual: 0]`

### S17 — `</A RUBRICA>`
- Kicker: `> COMO VOCÊ É AVALIADO`
- Conteúdo: a tabela de `RUBRICA-DEMO-DAY.md` (5 critérios, pesos 20/25/25/15/15%).
- Frase-âncora: **A MESMA RUBRICA DE SEMPRE.\nISSO NÃO É SURPRESA.**
- Visual: a própria tabela estilizada conta como elemento visual.
- ref: `starter/RUBRICA-DEMO-DAY.md` (evolução da `RUBRICA-DEMO-RELAMPAGO.md`,
  Semanas 11 e 12); [AAC&U Oral Communication VALUE Rubric](https://assessment.unc.edu/wp-content/uploads/sites/1284/2022/08/AACU_OC_ValueRubric.pdf)
- `[sem visual: 0]`

### S18 — `</O ROTEIRO MINUTO A MINUTO>`
- Kicker: `> COMO ESTRUTURAR SEU PITCH`
- Visual: diagrama de linha do tempo de 5 min (abertura 0:40 · dor 0:30 · demo 2:00 ·
  julgamento 1:10 · número 0:30 · fechamento 0:10), com a extensão pra 8 min marcada
  em outra cor.
- ref: [CASRAI — Lightning Talks for Academic Conferences](https://casrai.org/guides/how-to-write-and-time-a-lightning-talk-for-an-academic-conference) (estrutura hook/contexto/core/so-what/close adaptada)
- `[sem visual: 0]`

### S19 — `</COMO 75 CABEM EM 120 MIN>`
- Kicker: `> LOGÍSTICA DO DIA`
- Conteúdo: explica pra turma o formato escolhido (assumido Formato 2 —
  `[DECISÃO DA IASMIM]` no `ROTEIRO-FACILITADORA.md`): todo mundo grava vídeo
  completo, ~10 sorteados apresentam ao vivo, avaliação de todos os vídeos acontece
  nos 5 dias seguintes.
- Visual: diagrama de funil — 75 vídeos → 10 sorteados ao vivo → avaliação
  assíncrona pra todos.
- ref: [Scott Berkun — How to Give a Perfect Demo](https://scottberkun.com/2011/how-to-give-a-perfect-demo/) (vídeo de backup como prática padrão, não exceção)
- `[sem visual: 0]`

### S20 — `</AUTOAVALIAÇÃO FINAL>`
- Kicker: `> COMPARE COM A SEMANA 1`
- Visual: diagrama em escada dos 4 estágios (Assisted Developer → Context
  Orchestrator → Agentic Orchestrator → Harness/Loop Engineer), com uma seta
  perguntando "onde você estava" e "onde você está".
- ref: `starter/AUTOAVALIACAO-FINAL.md`
- `[sem visual: 0]`

### S21 — `</REPOSIÇÃO DE GATES>`
- Kicker: `> PRAZO DEFINITIVO`
- Conteúdo: a tabela de 3 situações (Concluiu / Concluiu com pendência recuperável /
  Não concluiu o núcleo) da `POLITICA-REPOSICAO-GATES.md`.
- Frase-âncora: **DEVENDO ALGO NÃO É VERGONHA.\nCHEGAR NO PRAZO SEM AVISAR, SIM.**
- Visual: a tabela estilizada com cor por situação.
- ref: `starter/POLITICA-REPOSICAO-GATES.md`
- `[sem visual: 0]`

### S22 — `</O QUE VOCÊ SABE FAZER AGORA>`
- Kicker: `> O QUE MUDOU DE VERDADE`
- Visual: **diagrama único** com os 8 itens nomeados no `ROTEIRO-FACILITADORA.md`
  (dor → spec, ambiente de agente, verificador, orquestração, loop com modelo,
  automação, RAG, julgamento) como uma escada ou trilha visual — não 8 slides
  separados: é o fechamento do curso, não conteúdo novo sendo ensinado, e o volume
  do deck já foi justificado no topo deste arquivo como menor que o normal.
- `[sem visual: 0]`

### S23 — `</SEGUNDA-FEIRA>`
- Kicker: `> O QUE FAZER DEPOIS DE HOJE`
- Visual: lista visual de 5 ações concretas (publicar portfólio, reescrever o
  parágrafo como proposta real, decidir o destino do app em produção, procurar a PDA,
  manter os evals rodando) como ícones numa trilha, não bullet de texto puro.
- `[sem visual: 0]`

### S24 — Fechamento
- Frase final, sozinha na tela, sem mais nada: **TERMINOU O CURSO.\nCOMEÇA O
  TRABALHO.**
- Visual: **GIF** — algo simples e caloroso (uma porta abrindo pra fora, luz do dia
  entrando), emoção de "saída", não de "fim" — sem hype, sem confete forçado.
- Notas: `[01:58–02:00] Fale devagar. Não tenha pressa nos últimos segundos.`
- `[sem visual: 0]`
