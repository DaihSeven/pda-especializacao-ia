# Slides — Semana 11 (aulas 21 e 22)

Template PDA: roxo escuro + amarelo, Dela Gothic One (títulos) / IBM Plex Sans (corpo).
Teto visual: **no máximo 3 slides seguidos sem imagem/diagrama/GIF** (regra do ADENDO).
Nenhum slide menciona Alura. Fio condutor repetido nas transições:

> **"O MODELO PREENCHE O MEIO. O LOOP É SEU."**

Contador de "slides sem visual" está marcado em cada slide (`[sem visual: N]`) pra
facilitar a checagem do teto de 3.

---

## AULA 21

### S1 — Capa
- Título: **Semana 11 — Software com LLM dentro**
- Subtítulo: AIOps 1 · Módulo 3 — AI Orchestrator / Agentes
- Visual: fundo roxo padrão do template + ícone grande de um "loop" (seta circular) com
  um pequeno "?" dentro representando o modelo — a primeira aparição visual da metáfora
  da semana.
- `[sem visual: 0]`

### S2 — `</HOJE>`
- Kicker: `> ROTEIRO`
- Linha do tempo minuto a minuto espelhando exatamente os 7 blocos da aula 21 (Giro 10 ·
  Recap 15 · Teoria+demo 30 · Lab 1 15 · Teoria+demo 20 · Lab 2 25 · Fechamento 5).
- Visual: barra horizontal proporcional aos minutos de cada bloco, colorida por tipo
  (teoria = roxo, lab = amarelo).
- `[sem visual: 0]`

### S3 — `</COMO ACOMPANHAR>`
- Regras do jogo: terminal aberto, `.env` configurado ANTES de chegar, dupla formada.
- Kicker: `> REGRAS DA CASA`
- Pontos numerados:
  1. **Chave de API pronta.** Sem isso você não acompanha os labs de hoje.
  2. **Node 20+.** Confira agora, não durante o Lab 1.
  3. **Terminal do lado.** Erro vai acontecer — é conteúdo, não acidente.
  4. **Custo é seu.** Você decide quando roda `npm run evals`.
- ref: `GUIA-DO-ALUNO.md`, seção de setup
- `[sem visual: 1]`

### S4 — `</A FRONTEIRA>`
- Kicker: `BLOCO 1 · GIRO DAS IAS`
- Frase-âncora: **ATÉ ONTEM, GRÁTIS.\nA PARTIR DE HOJE, ALGUÉM PAGA A CONTA.**
- Visual: **GIF** — uma mão colocando um cartão de crédito na mesa, tom de humor seco
  (não pânico) — a emoção é "ok, hora de ser adulto sobre isso", não medo.
- Notas do apresentador: `[00:00–00:10] Giro das IAs — puxe: alguém aqui já pagou por
  alguma IA antes deste curso? Use como ponte pra "a conta muda de mão hoje".`
- `[sem visual: 0]`

### S5 — `</RECAP: O QUE VOCÊS JÁ CONSTRUÍRAM>`
- Kicker: `BLOCO 2 · RECAP ATIVO`
- Frase-âncora: **VOCÊS JÁ TÊM O LOOP.\nHOJE ELE GANHA UM MOTOR.**
- Mecânica: sorteio de 3 pessoas — cada uma explica um pedaço do MCP client da semana 10.
  A facilitadora só corrige.
- ref: `aula19-orquestracao-mcp-client` (semana 10)
- Notas: `[00:10–00:25] Recap por sorteio — nunca vira exposição sua.`
- `[sem visual: 1]`

### S6 — `</O QUE ENTRA HOJE>`
- Kicker: `BLOCO 3 · TEORIA + DEMO (1/2)`
- Frase-âncora: **STREAMING. SYSTEM PROMPT.\nTOOL CALLING. STRUCTURED OUTPUT.**
- Pontos numerados: as 4 peças que entram no meio do loop, uma frase cada.
- Visual: diagrama simples — uma caixa "LOOP (seu código)" com uma caixa menor dentro
  escrito "MODELO", e as 4 peças como setas entrando na caixa menor.
- `[sem visual: 0]`

### S7 — `</SETUP DE CHAVE>`
- Kicker: `> SETUP OBRIGATÓRIO`
- Frase-âncora: **A CHAVE NÃO É SEU LOGIN DO CLAUDE CODE.**
- Pontos:
  1. **Gere a chave** no console da Anthropic (link no slide).
  2. **Copie pro `.env`**, nunca pro código.
  3. **Confira o `.gitignore`** antes de qualquer commit.
- ref: [platform.claude.com — Python SDK](https://platform.claude.com/docs/en/cli-sdks-libraries/sdks/python)
- Visual: **[PRINT: tela do console da Anthropic gerando uma chave, com a chave borrada]**
- Notas: `[00:25–00:30] Não resuma este bloco. Mostre o .env.example na tela.`
- `[sem visual: 0]`

### S8 — `</QUANTO ISSO CUSTA>`
- Kicker: `> AVISO DE CUSTO`
- Frase-âncora: **FRAÇÕES DE CENTAVO, SE VOCÊ FOR RAZOÁVEL.**
- Tabela: Haiku 4.5 (US$1/US$5 por MTok) vs Sonnet 5 (US$2/US$10 por MTok).
- ref: [Pricing — Claude Platform Docs](https://platform.claude.com/docs/en/about-claude/pricing)
- Visual: a própria tabela de preço, estilizada, conta como elemento visual (barra
  comparativa lado a lado dos dois modelos).
- `[sem visual: 0]`

### S9 — `</STREAMING>`
- Kicker: `> PEÇA 1`
- Frase-âncora: **O TEXTO APARECE ENQUANTO O MODELO AINDA ESTÁ PENSANDO.**
- Visual: **GIF** — texto sendo digitado palavra por palavra num terminal, ritmo
  constante, emoção neutra/curiosa (é o próprio fenômeno sendo mostrado).
- ref: [Streaming Messages](https://platform.claude.com/docs/en/build-with-claude/streaming)
- `[sem visual: 0]`

### S10 — `</STREAMING: O CÓDIGO>`
- Kicker: `> PEÇA 1 (código)`
- Bloco de terminal real:
  ```js
  client.messages.stream({ model, max_tokens, messages }).on("text", (t) => process.stdout.write(t));
  ```
- Notas: `[00:30–00:37] Rode ao vivo. Não explique SSE por trás — mostre funcionando.`
- `[sem visual: 1]`

### S11 — `</SYSTEM PROMPT>`
- Kicker: `> PEÇA 2`
- Frase-âncora: **A REGRA QUE VALE PRA CONVERSA INTEIRA, NÃO SÓ PRA UMA PERGUNTA.**
- Visual: diagrama antes/depois — mesma pergunta do usuário, duas respostas diferentes
  lado a lado, uma com system prompt "tom PDA" e outra sem.
- MÃO NA MASSA: troque o system prompt ao vivo e rode de novo.
- `[sem visual: 0]`

### S12 — `</TOOL CALLING: O CICLO>`
- Kicker: `> PEÇA 3`
- Frase-âncora: **O MODELO NÃO EXECUTA NADA. ELE SÓ PEDE.**
- Visual: **[DIAGRAMA]** ciclo de 5 caixas: Usuário → Modelo decide chamar tool →
  `tool_use` (JSON) → seu código executa → `tool_result` volta → Modelo responde. Setas
  numeradas 1–5.
- ref: [Tool use with Claude — overview](https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview)
- `[sem visual: 0]`

### S13 — `</TOOL CALLING: O CÓDIGO>`
- Kicker: `> PEÇA 3 (código)`
- Bloco de terminal com o shape de `tools`, `tool_use`, `tool_result` (retirado do
  `cliente.js`).
- `[sem visual: 1]`

### S14 — `</STRUCTURED OUTPUT>`
- Kicker: `> PEÇA 4`
- Frase-âncora: **UM SCHEMA, NÃO UMA GRAMÁTICA INTEIRA.**
- Bloco de código: o `schema-avaliacao.json` completo (é curto — cabe no slide).
- ref: [Structured Outputs](https://platform.claude.com/docs/en/build-with-claude/structured-outputs)
- `[sem visual: 2]`

### S15 — `</FORMATO NÃO É SENTIDO>`
- Kicker: `> O LIMITE DO STRUCTURED OUTPUT`
- Frase-âncora: **O SCHEMA GARANTE O FORMATO.\nVOCÊ GARANTE O SENTIDO.**
- Visual: **[DIAGRAMA]** duas caixas lado a lado: "válido contra o schema" (JSON com
  `aprovado: true, nota: 3`) marcado com ✓ verde, e "faz sentido pro negócio" marcado com
  ✗ vermelho — mesmo JSON, dois vereditos diferentes.
- `[sem visual: 0]`

### S16 — `MÃO NA MASSA — algo vai quebrar`
- Kicker: `> ERRO PROPOSITAL`
- Frase-âncora: **ISSO AQUI VAI DAR ERRO. DE PROPÓSITO.**
- Visual: **GIF** — alguém olhando pra tela com uma sobrancelha levantada, tom de "ué,
  quebrou" sem drama.
- `[sem visual: 0]`

### S17 — `</O QUE O ERRO ENSINA>`
- Kicker: `> DEPOIS DO ERRO`
- Frase-âncora: **O MODELO NUNCA AVISA QUE O NOME DO MODELO ESTÁ ERRADO.**
- Pontos:
  1. **`claude-sonnet-5-latest` não existe** — parece plausível, não é real.
  2. Isso não é o modelo "alucinando" — é **metadado da chamada**, nem chega a ser
     processado por ele.
  3. Confira sempre contra a doc, nunca de memória.
- ref: [Models overview](https://platform.claude.com/docs/en/about-claude/models/overview)
- `[sem visual: 1]`

### S18 — `LAB 1`
- Kicker: `MÃO NA MASSA · 15 MIN`
- Frase-âncora: **CONSERTE O CLIENTE. DECIDA A NOTA DE CORTE.**
- Objetivos numerados (streaming rodando, tool calling funcionando, `validar-avaliacao.js`
  com a regra de negócio decidida por você).
- Visual: barra de progresso "15 min" estilizada, com o logo do template.
- `[sem visual: 0]`

### S19 — `</O QUE ISSO VIROU>`
- Kicker: `BLOCO 5 · TEORIA + DEMO (2/2)`
- Frase-âncora grande, tela cheia: **O MODELO PREENCHE O MEIO.\nO LOOP É SEU.**
- Visual: o mesmo diagrama do S6, agora com as 4 peças já dentro da caixa "modelo",
  reforçando visualmente que o que era abstrato no S6 agora está concreto.
- `[sem visual: 0]`

### S20 — `</O LOOP DETERMINÍSTICO>`
- Kicker: `> A PEÇA CENTRAL`
- Visual: **[DIAGRAMA]** — Especifica (prompt+schema) → Chama modelo (caixa tracejada,
  "não-determinístico") → Valida em código → ramifica: ✓ aceita / ✗ tenta de novo (até N)
  → desiste com motivo claro.
- ref: `starter/src/loop.js`
- `[sem visual: 0]`

### S21 — `</NÃO SOMOS OS PRIMEIROS A DIZER ISSO>`
- Kicker: `> CITAÇÃO`
- Bloco de citação: *"They are typically just LLMs using tools based on environmental
  feedback in a loop."*
- ref: [Building Effective AI Agents — Anthropic Engineering](https://www.anthropic.com/engineering/building-effective-agents)
- `[sem visual: 1]`

### S22 — `</"FUNCIONOU QUANDO EU TESTEI" NÃO É EVAL>`
- Kicker: `> EVALS`
- Frase-âncora: **EVAL É O SEXTO SENSOR.**
- Visual: **[DIAGRAMA]** — retoma os "5 sensores" da Semana 8 (lint, type check, build,
  teste, dependency check) numa fileira, e acrescenta um 6º ícone diferente (um dado/
  cara de interrogação) rotulado "eval — pro comportamento não-determinístico".
- ref: `aula15-verificadores` (Semana 8)
- `[sem visual: 0]`

### S23 — `</OS 5 CASOS MÍNIMOS>`
- Kicker: `> FORMATO DO EVAL`
- Pontos numerados: caminho feliz · entrada ambígua · quebra de regra de negócio ·
  entrada hostil · o caso que só você desconfia.
- ref: [Define success criteria and build evaluations](https://platform.claude.com/docs/en/test-and-evaluate/develop-tests)
- `[sem visual: 1]`

### S24 — `</AIOPS 1: SEU CÓDIGO SAI DO SEU COMPUTADOR>`
- Kicker: `BLOCO 5 · AIOPS 1`
- Visual: **[DIAGRAMA]** — laptop → `git push` → Render (ícone de nuvem) → URL pública
  com um usuário acessando de outro dispositivo.
- `[sem visual: 0]`

### S25 — `</POR QUE RENDER>`
- Kicker: `> A ESCOLHA DO CURSO`
- Frase-âncora: **UM HOST. SEM CARTÃO. FUNCIONA NO WINDOWS.**
- Pontos: 750h grátis/mês · dorme em 15 min sem tráfego, acorda em ~1 min · variável de
  ambiente nativa · sem exigir cartão.
- ref: [Deploy for Free — Render Docs](https://render.com/docs/free)
- `[sem visual: 1]`

### S26 — `</O SEGREDO NUNCA ENTRA NO CÓDIGO>`
- Kicker: `> GESTÃO DE SEGREDOS`
- Visual: **[DIAGRAMA]** fluxo: `.env` local (cadeado) → `.gitignore` (barreira) → nunca
  chega no GitHub → variável configurada direto no Render (cadeado igual, lugar
  diferente).
- `[sem visual: 0]`

### S27 — `MÃO NA MASSA — a chave vai vazar ao vivo`
- Kicker: `> ERRO PROPOSITAL 2`
- Frase-âncora: **ISSO VAI ACONTECER COM ALGUÉM DA TURMA. MELHOR VER AGORA.**
- Visual: **GIF** — alarme piscando, tom de humor exagerado tipo desenho animado (não
  medo real — o objetivo é grudar na memória, não assustar).
- `[sem visual: 0]`

### S28 — `</O QUE É AUTOMÁTICO E O QUE NÃO É>`
- Kicker: `> DEPOIS DO VAZAMENTO`
- Pontos:
  1. **Push protection** pode bloquear o push, se reconhecer o padrão.
  2. **Secret scanning** cria um alerta depois que já está no histórico.
  3. **Revogação automática** só é garantida pra PAT do próprio GitHub e parceiros
     cadastrados — **não presuma que sua chave está nessa lista.**
  4. **Revogar manualmente é sempre o passo 1**, proteção automática ou não.
- ref: [Remediating a leaked secret — GitHub Docs](https://docs.github.com/en/code-security/secret-scanning/working-with-secret-scanning-and-push-protection/remediating-a-leaked-secret)
- `[sem visual: 1]`

### S29 — `LAB 2`
- Kicker: `MÃO NA MASSA · 25 MIN`
- Frase-âncora: **QUANTAS TENTATIVAS ATÉ DESISTIR? A RESPOSTA É SUA.**
- Objetivos: `desistir()` implementado · 2 casos de eval escritos · primeiro push pro
  Render com secret configurado.
- Visual: mesma barra de progresso do S18, agora "25 min".
- `[sem visual: 0]`

### S30 — `</O QUE VOCÊS FIZERAM HOJE>`
- Kicker: `BLOCO 7 · FECHAMENTO`
- Recap em 4 bullets curtos (streaming, tool calling, structured output, loop+evals+deploy).
- `[sem visual: 1]`

### S31 — `</ATIVIDADE DE FIXAÇÃO>`
- Kicker: `> ENTREGÁVEL`
- Frase-âncora: **APP EM PRODUÇÃO. EVALS DE VERDADE. VOCÊ VALIDANDO O MODELO.**
- Aponta pro `ENTREGAVEL.md`, prazo: antes da aula 1 da semana 12.
- Visual: mockup simples do checklist do `ENTREGAVEL.md` como lista de caixinhas.
- `[sem visual: 0]`

### S32 — `</PRÓXIMA AULA: CLÍNICA + DEMO RELÂMPAGO>`
- Kicker: `> PRÓXIMOS PASSOS (penúltimo slide)`
- Formato: clínica rotativa (já conhecida) + **últimos 30 min = demo relâmpago**, 6
  pessoas sorteadas, 3 min cada.
- O que trazer pronto: app rodando local, de preferência já no Render.
- Como as duplas/sorteio funcionam: sinaliza "pronto" durante a clínica, sorteio
  prioriza variedade de domínio.
- Visual: **[DIAGRAMA]** roleta simples com os 7 domínios do catálogo ao redor.
- `[sem visual: 0]`

### S33 — `</PRÓXIMOS PASSOS>`
- Kicker: `> GANCHO PRA SEMANA 12`
- Frase-âncora: **ESTE DEPLOY NÃO MORRE HOJE. ELE VAI PRA SEMANA 12.**
- Pontos: AIOps 2 mede custo por execução e tracing **deste mesmo serviço**; agentes com
  n8n e Google ADK entram como próximo nível de orquestração.
- `[sem visual: 1]`

---

## AULA 22 (mini-deck de apoio — a aula é lab, quase sem slide)

### S34 — Capa aula 22
- Título: **Clínica rotativa + demo relâmpago**
- Visual: mesmo ícone de loop do S1, agora com um cronômetro sobreposto.
- `[sem visual: 0]`

### S35 — `</REGRAS DA CLÍNICA>` (retomada)
- Kicker: `> JÁ CONHECIDO (Semanas 7 e 8)`
- Pontos: fila de sinalização · direito de pular fila por variedade · tarefa fixa da
  plateia.
- `[sem visual: 1]`

### S36 — `</COMO O SORTEIO FUNCIONA>`
- Kicker: `> DEMO RELÂMPAGO`
- Visual: **[DIAGRAMA]** funil: "sinalizou pronto" → sorteio com prioridade de variedade
  de domínio → 6 nomes.
- `[sem visual: 0]`

### S37 — `</A RUBRICA>`
- Kicker: `> CRITÉRIOS`
- A tabela de `starter/RUBRICA-DEMO-RELAMPAGO.md` projetada inteira (é a tarefa fixa da
  plateia — precisa estar visível o tempo todo).
- `[sem visual: 1]`

### S38 — `</3 MINUTOS NO RELÓGIO>`
- Kicker: `> ANTES DE COMEÇAR`
- Visual: **GIF** — cronômetro contando regressivo, tom de suspense leve/divertido.
- Frase-âncora: **O MODELO PREENCHE O MEIO. O LOOP É SEU. AGORA MOSTRA.**
- `[sem visual: 0]`

---

**Checagem do teto de 3:** nenhuma sequência acima chega a 3 seguidos sem visual — a
maior é S13→S14 (2 seguidos, `[sem visual: 2]` no S14), quebrada pelo diagrama do S15.
Todas as outras sequências sem visual têm no máximo 1 slide antes do próximo visual.
Confirmado manualmente slide a slide.
