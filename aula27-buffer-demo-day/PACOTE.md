# PACOTE.md — Semana 14 (`aula27-buffer-demo-day`)

Para a Iasmim. Leitura antes de aprovar o lote. Última semana do curso — sem
conteúdo técnico novo, então este pacote é mais sobre logística, encerramento e
continuidade do que sobre ensino.

---

## 0. Dependência declarada das semanas 12 e 13

`aula23-agentes-automacao/PACOTE.md` e `aula25-rag/PACOTE.md` **não existiam** no
momento em que este pacote foi escrito — as pastas `aula23-agentes-automacao` e
`aula25-rag` sequer existem ainda no disco. Este pacote assume o combinado no
`_BRIEF.md` e no `_GANCHOS.md`:

- Semana 12 entrega automação n8n + Google ADK (versionar/testar/deploy) + AIOps 2.
- Semana 13 entrega RAG sobre os documentos do próprio projeto do aluno.

Os itens do `starter/CHECKLIST-FINAL-QUALIDADE.md` que dependem disso (Blocos 10 e
11) estão marcados `[CONFIRMAR COM SEMANA 12]` e `[CONFIRMAR COM SEMANA 13]` — os
nomes exatos de artefato/arquivo devem ser conferidos e ajustados quando esses
pacotes existirem. **Se essa dependência mudar**, os pontos que precisam de ajuste
são só esses dois blocos do checklist; o resto do pacote (plantão, rubrica do pitch,
autoavaliação, política de gates, logística do Demo Day) não depende do conteúdo
exato das Semanas 12 e 13.

---

## 1. Mapeamento Alura

**Não há bloco novo de Alura esta semana** — não há conteúdo síncrono novo, então não
há conceito pra sustentar com curso assíncrono. O `ENTREGAVEL.md` registra isso
explicitamente no campo de pré-requisito, e reorienta o tempo assíncrono: quem está
devendo Alura de semana anterior usa esta semana pra fechar, porque isso pode ser um
dos gates pendentes cobertos pela `POLITICA-REPOSICAO-GATES.md`.

Isso não quebra a convenção do curso — é a aplicação natural dela numa semana sem
conteúdo novo: o "corte pra Alura" desta semana é 100% do conteúdo, porque não
existe conteúdo a cortar.

---

## 2. O que foi cortado (e para onde foi)

Não há corte de conteúdo técnico — esta semana nunca teve conteúdo técnico na grade
(seção "O bloco da grade que é seu" do `_BRIEF.md`: plantão + Demo Day). O corte real
desta semana foi de **formato**, não de conteúdo:

| Cortado | Para onde foi |
|---|---|
| Formato de 7 blocos da aula 1 (Giro/Recap/Teoria/Lab/Teoria/Lab/Fechamento) | Aula 27 vira Giro das IAs (10 min, fixo) + plantão técnico puro. Justificado explicitamente no `_BRIEF.md` como exceção desta semana. |
| Deck de 26-34 slides | Reduzido pra 24 slides — justificado no topo do `SLIDES-OUTLINE.md`: sem conceito novo, o volume alto de slides do resto do curso (uma ideia nova por slide) não se aplica. |
| Formato "demo relâmpago" de 3 min por aluno (Semanas 11/12) | Substituído pelo pitch de 5-8 min do Demo Day — mais tempo porque é o projeto inteiro, não uma feature. |
| Excalidraw coletivo | Não usado — ver seção 8. |

---

## 3. Ganchos para frente

Esta é a última semana do curso — não há "semana seguinte" dentro do programa. Os
ganchos aqui são para **fora** do curso, não para outro pacote:

- **O prazo de 5 dias corridos após a aula 28** é o único prazo real que continua
  correndo depois que este pacote é entregue — qualquer acompanhamento pós-curso
  (bolsa de oportunidades, indicação pra freelance) deveria esperar esse prazo fechar
  antes de considerar a turma "encerrada" para fins de certificado.
- **A lista de projetos do domínio 1 do catálogo** (vitrine de perfis de alunos da
  PDA) é candidata natural a ganhar os próprios projetos desta turma como primeiro
  conteúdo real — se algum aluno construiu exatamente essa vitrine, ela pode virar a
  ferramenta de acompanhamento pós-curso da própria PDA. Vale conversa com a Iasmim.
- **O certificado condicional** (situação "Concluiu com pendência recuperável" da
  `POLITICA-REPOSICAO-GATES.md`) fica em aberto até ser fechado individualmente — não
  é um gancho de conteúdo, é um gancho operacional que precisa de dono depois que o
  curso formal acaba.
- **Decisão pendente de logística do Demo Day** (seção dedicada no
  `ROTEIRO-FACILITADORA.md`, `[DECISÃO DA IASMIM]`) precisa ser resolvida antes da
  aula 27, porque o sorteio dos ~10 apresentadores ao vivo (Formato 2, recomendado)
  precisa ser feito e comunicado com antecedência suficiente pra quem for sorteado se
  preparar.

---

## 4. Ganchos para trás (retomados, citando o `_GANCHOS.md`)

- **Mecânica de sorteio com prioridade de variedade de domínio** (Semanas 3, 4, 11,
  12) — reusada tal e qual na seleção dos ~10 apresentadores ao vivo do Demo Day, com
  um critério a mais: prioridade pra quem nunca foi sorteado antes, pra não repetir
  sempre as mesmas pessoas no palco ao longo do curso.
- **`RUBRICA-DEMO-RELAMPAGO.md`** (Semana 11, reusada na 12) — citada explicitamente
  como base da `RUBRICA-DEMO-DAY.md`; os 5 critérios são a mesma família (funciona ao
  vivo, decisão do aluno visível, evidência com número, clareza no tempo), só
  reponderados pra um pitch de projeto inteiro em vez de uma feature.
- **"O parágrafo para o dono do negócio"** (decisão estrutural do `_BRIEF.md`, escrito
  em todo `ENTREGAVEL.md` desde a Semana 2) — vira literalmente a abertura do pitch
  do Demo Day. Esse é o gancho mais importante do pacote inteiro: 13 semanas de um
  hábito viram a primeira frase falada em público.
- **Mecânica de clínica rotativa** (fila de sinalização, direito de pular fila por
  variedade, tarefa fixa da plateia — Semanas 7, 8, 11, 12) — reusada na estrutura da
  fila do plantão da aula 27, com adaptação: prioridade por bloqueio técnico em vez
  de por tipo de erro, porque aqui não há "aposta da plateia" nem crítica coletiva, é
  destravamento puro.
- **"O verificador existe para o agente, não para você"** (Semana 8) — citado
  implicitamente no checklist final: cada item obrigatório é, na prática, um
  verificador que alguém aplicou sobre o próprio trabalho antes de mostrar pra
  plateia.
- **Os quatro estágios de maturidade** (Assisted Developer → Context Orchestrator →
  Agentic Orchestrator → Harness/Loop Engineer, badges da Alura desde a Semana 1) —
  base estrutural da `AUTOAVALIACAO-FINAL.md`.
- **Fronteira de ferramenta cruzada na Semana 11** (chave de API, custo real) —
  retomada implicitamente no checklist (Bloco 9) e no lembrete de "decidir o destino
  do app em produção" no fechamento do curso — o custo real não acaba quando o curso
  acaba.
- **"Worktree ≠ subagente"** e **"três agentes não fazem um terço do tempo"** (Semana
  10) — citados no item 4 do "O que você sabe fazer agora" no `ROTEIRO-FACILITADORA.md`
  como exemplo de capacidade que tem os dois lados do argumento, não só a técnica.

---

## 5. Cobertura dos 7 domínios do catálogo

Esta semana não tem lab novo — o entregável é auditoria + comunicação, não
construção. A cobertura correta pra medir aqui não é "o lab funciona pro domínio X",
é "o formato do Demo Day funciona pra apresentar um projeto desse domínio":

| # | Domínio | Funciona? | Como |
|---|---|---|---|
| 1 | Listagem de perfis de alunos da PDA | Sim | O pitch abre com o parágrafo do dono do negócio (quem contrata) e a demo mostra o filtro funcionando ao vivo — estrutura de pitch é agnóstica de domínio. |
| 2 | Captação de clientes / automações para freelancers | Sim | O "número real" da rubrica encaixa naturalmente aqui (taxa de propostas geradas, tempo economizado) — é o domínio mais próximo de um pitch comercial de verdade. |
| 3 | Quiz conectado ao Claude | Sim | Demo ao vivo é literalmente gerar e responder um quiz na hora — risco de travar é baixo, plano B é fácil de gravar. |
| 4 | Avaliação automatizada de projetos por IA | Sim | Ironia pedagógica intencional: quem escolheu esse domínio pode citar a própria `RUBRICA-DEMO-DAY.md` como exemplo do problema que o projeto resolve em escala. |
| 5 | Agente de revisão de código com a voz da PDA | Sim | O "julgamento indispensável" da rubrica (25%) é natural aqui — o aluno explica por que ajustou o tom ou os critérios do revisor. |
| 6 | Problema real da ONG ou das aulas | Sim | Mesma estrutura de pitch; a dor de negócio já é conhecida da plateia (a própria PDA), o que facilita os 30-45s de abertura. |
| 7 | Domínio próprio do aluno | Sim | O roteiro do pitch e a rubrica são desenhados sem menção a nenhum domínio específico — funcionam por construção. |

**7 de 7 domínios cobertos** — o formato de pitch e a rubrica não fazem suposição de
domínio; a única coisa que muda por domínio é o conteúdo que cada aluno traz.

---

## 6. Soma dos minutos

### Aula 27 (Giro das IAs + Plantão) — formato de exceção, seção "Como esta semana é
diferente" do `_BRIEF.md`

| Bloco | Minutos | Conteúdo |
|---|---|---|
| Giro das IAs | 10 | Fixo |
| Abertura do plantão + regras da fila | 10 | As 3 regras da fila + o que fazer quando ninguém pede ajuda |
| Plantão, parte 1 | 60 | Fila por prioridade de bloqueio; telão quando 3+ sinalizam o mesmo problema |
| Checkpoint coletivo | 10 | Mão levantada por bloco do checklist; redireciona prioridade pros 25 min finais |
| Plantão, parte 2 | 25 | Concentrado em quem está mais atrasado; quem já fechou cronometra o pitch |
| Fechamento | 5 | Recap por sorteio + anúncio do formato do Demo Day |
| **Total** | **120** | Fecha exato |

### Aula 28 (Demo Day) — assumindo Formato 2 (recomendado), ver
`ROTEIRO-FACILITADORA.md` para as 3 opções avaliadas

| Bloco | Minutos | Conteúdo |
|---|---|---|
| Abertura | 5 | Regras da rubrica, ordem dos sorteados, lembrete de plano B |
| Pitches ao vivo | 100 | 10 alunos × (8 min pitch + 2 min transição) |
| Fechamento do curso | 15 | "O que você sabe fazer agora" + "Segunda-feira" + fio condutor final |
| **Total** | **120** | Fecha exato |

**Soma das duas aulas: 240 minutos, 120 + 120.**

---

## 7. Onde o julgamento do aluno é indispensável

Diferente das outras semanas, aqui o ponto de julgamento não está num lab — está no
próprio ato de auditar e apresentar:

1. **No checklist final:** o aluno decide **o que escrever na linha de "o que
   travou"** pra cada item obrigatório não marcado. Um agente pode rodar `npm test`
   e reportar o erro, mas só o aluno sabe se aquele erro é "não tive tempo", "não
   entendi o conceito" ou "decidi não fazer assim de propósito" — e essas três
   respostas levam a conversas completamente diferentes no plantão. Isso não é
   auditoria automatizável: é autoavaliação honesta sob risco de exposição.
2. **No pitch:** o critério de maior peso da rubrica (25%) pede exatamente isso —
   **nomear uma decisão que o aluno tomou e o agente não tomou sozinho**. Depois de
   13 semanas usando agente pra quase tudo, separar "o que o modelo fez" de "o que eu
   decidi" é o exercício de metacognição mais difícil do curso inteiro, e é
   deliberadamente o último que o curso pede.
3. **Na autoavaliação final:** o aluno decide **em qual dos 4 estágios de maturidade
   ele está, por capacidade** — sem uma régua objetiva externa pra isso (o formato do
   diagnóstico da Semana 1 nem está disponível pra comparação automática). Ninguém
   além do próprio aluno pode responder honestamente "eu ainda estou em Assisted
   Developer nisso" sem que isso pareça fracasso — e é esse desconforto que a
   pergunta aberta 3 do formulário existe pra nomear sem punir.

---

## 8. Excalidraw

Esta semana **não usa Excalidraw**. Motivo: não há modelagem coletiva de arquitetura
nem diagnóstico visual em grupo pra fazer — a aula 27 é fila individual de
troubleshooting (o quadro compartilhado da fila pode até ser um Excalidraw simples de
post-its, mas isso é ferramenta de logística, não um board pedagógico com zonas
preenchíveis no formato da seção 13 do `_BRIEF.md`) e a aula 28 é apresentação
individual. O quadro fica reservado pras semanas que já são donas dele (5 e 6,
confirmado no `_GANCHOS.md`) e por qualquer outra semana que decidiu usá-lo.
