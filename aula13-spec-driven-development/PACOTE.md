# PACOTE.md — Semana 7: Spec-Driven Development (aula13-spec-driven-development)

Documento interno pra Iasmim e para a orquestradora. Não vai pro aluno.

---

## 0. Dependência declarada — semanas 5 e 6 ainda não escritas nesta sessão

Esta semana **executa** o que a semana 6 produz. No momento em que este pacote foi
escrito, `/home/claude/pda/aula9-engenharia-para-ia/` e
`/home/claude/pda/aula11-diagnostico-documentos-rpi/` **não existiam no disco** — não
havia `PACOTE.md` pra ler o nome exato dos artefatos. Assumi o que o enunciado da minha
tarefa descreveu literalmente:

- **Semana 5 (`aula9-engenharia-para-ia`):** DDD estratégico, bounded contexts, e **"um
  checklist nomeado de sinais de código ruim gerado por IA"**. Eu não inventei um nome
  próprio pra esse checklist — em todo lugar que preciso citá-lo (GUIA-DO-ALUNO.md,
  ENTREGAVEL.md, ROTEIRO-FACILITADORA.md, TASKS-TEMPLATE.md), escrevi **"o checklist de
  sinais de código ruim gerado por IA da semana 5"** com a instrução `(ver PACOTE.md desta
  semana pra confirmar o nome exato)`. **Ação pendente pra orquestradora:** quando a
  semana 5 for escrita, rodar find/replace nesses 4 arquivos trocando a descrição
  genérica pelo nome próprio que a semana 5 escolher.
- **Semana 6 (`aula11-diagnostico-documentos-rpi`):** "RPI em três sessões, ADR,
  documento único enxuto, 5 critérios EARS e 3 cenários BDD sobre a dor real do negócio."
  Assumi que esse documento único se chama, genericamente, **"o documento RPI"** — não
  inventei um nome de arquivo específico (tipo `RPI.md`) porque não sei se a semana 6 vai
  nomear o arquivo assim. Toda referência que fiz é ao **conteúdo** (5 EARS + 3 BDD), não
  a um caminho de arquivo. **Ação pendente pra orquestradora:** se a semana 6 nomear o
  arquivo diferente de "documento RPI" na prosa, ajustar as citações — são referências de
  texto, fáceis de trocar, não estrutura de código.

Se essas duas semanas, quando escritas, divergirem do que assumi aqui, os pontos de maior
risco de quebra são: o Lab 1 (que pede pra colar "o seu documento RPI da semana 6" no
`/speckit.specify`) e o critério de aceite extra das tasks (que cita o checklist da
semana 5). O resto do pacote — Spec Kit, task atômica com gate, clínica rotativa — é
autocontido e não quebra mesmo que os nomes exatos mudem.

---

## 1. Caminho tecnológico — decisão e justificativa

**Escolha: Spec Kit (GitHub/Specify CLI) como a ferramenta hands-on da semana.** OpenSpec,
TLC e Superpowers ficam em 1 linha + link cada, sem prática.

Por quê:

1. **É a que o brief pede nominalmente:** "Mostre Spec Kit funcionando." As outras três
   viram menção.
2. **É a mais completa e documentada publicamente** — tem site de docs dedicado
   (`github.github.com/spec-kit`), quickstart com exemplo ponta a ponta, e um repositório
   com mais de uma centena de estrelas de adoção real (confirmado via WebFetch nesta
   sessão, não por lembrança).
3. **O custo real, e eu digo o custo:** o Spec Kit se instala via `uv` (gerenciador de
   pacotes Python), não via `npm`. É a **primeira vez no curso que a turma instala um
   runtime que não é Node.** Isso quebra o padrão que a aula 7 defendeu explicitamente
   ("uma linguagem só, sem fragmentar suporte em sala"). Decidi pagar esse custo porque
   não existe alternativa: o Spec Kit é distribuído oficialmente só via `uv tool install`
   ou `pipx` (confirmado em `github.github.com/spec-kit/installation`), e o brief exige
   mostrá-lo funcionando, não uma alternativa Node equivalente. Mitigação: a instalação é
   um binário (`curl | sh` ou o instalador do PowerShell) — o aluno não escreve uma linha
   de Python, só usa o CLI. Documentei isso explicitamente no README.md ("não precisa
   saber Python: é um binário, um comando") pra não gerar pânico à toa.
4. **Alternativa considerada e descartada:** usar o OpenSpec (que é `npm install -g`,
   mantém o padrão Node) como ferramenta hands-on em vez do Spec Kit. Descartei porque o
   brief nomeia explicitamente qual dos quatro deve "funcionar" em sala, e é o Spec Kit —
   não é uma escolha livre minha pra otimizar continuidade de ambiente.

---

## 2. Mapeamento Alura

| Curso/módulo Alura | Carga | O que cobre | O que isso tira do síncrono |
|---|---|---|---|
| **Spec-Driven Development: desenvolvimento assistido por agentes** (`alura.com.br/curso-online-spec-driven-development-desenvolvimento-assistido-por-agentes`, 8h) | SDD na era da IA, definição de escopo, engenharia e gestão de contexto, implementação de código, testes | O aluno chega à aula 1 já sabendo o vocabulário geral de "SDD" e já viu pelo menos um método de manter coerência entre spec e código (o curso usa o método próprio "Spec Anchor"). **É por isso que a teoria da aula 1 não reexplica "o que é SDD do zero"** — ela vai direto pro painel dos 4 frameworks nomeados e pro Spec Kit funcionando, que a Alura não cobre (o curso da Alura não usa Spec Kit nem OpenSpec como ferramenta — é metodologia própria). |

**Pré-requisito de entrada no lab da aula 2 (contrato, não punição):** bloco
"Spec-Driven Development: desenvolvimento assistido por agentes" concluído antes da
aula 2 — sem isso o aluno não tem vocabulário de "por que separar spec de plano de
tasks" e trava sozinho na clínica, sem conseguir aproveitar a rodada alheia.

Cobertura adicional que a Alura sustenta e o síncrono não repete: o curso tem um módulo
de "testes e considerações" que aprofunda estratégias de teste automatizado — o síncrono
de hoje assume que o aluno já sabe escrever um `npm test -- arquivo.test.js` (desde a
aula 1) e não reensina isso, só cobra que o gate use esse comando.

---

## 3. O que foi cortado

| Corte | Onde foi (antes → agora) |
|---|---|
| Prática hands-on de OpenSpec, TLC e Superpowers | Vira 1 linha + link cada no slide 5 e no README.md — vocabulário de reconhecimento, não prática. Motivo: o brief limita explicitamente a profundidade a 1 ferramenta. |
| Os comandos avançados do próprio Spec Kit — `/speckit.clarify`, `/speckit.checklist`, `/speckit.analyze`, `/speckit.converge`, `/speckit.taskstoissues` | Citados de passagem no slide 5/nota do apresentador ("existem mais 5 comandos, hoje usamos 4: constitution, specify, plan, tasks, implement"), sem lab. Ficam pro Bônus do `ENTREGAVEL.md` e pra prática livre — não é o corte de 20-30% de conteúdo, é escopo deliberado: 4 comandos bem entendidos valem mais que 9 rasos, e ecoa a mesma decisão que a semana 4 tomou com Resources/Prompts do MCP. |
| Explicação formal do que é "presets/extensions/bundles" do Spec Kit | Fica em 1 frase no README.md ("customização existe, não é tema de hoje") — é feature de maturidade de ferramenta, não de conceito de SDD. |
| Comparação aprofundada "Spec Kit vs. OpenSpec vs. TLC vs. Superpowers" (qual escolher pro seu time) | Não faz sentido nesse ponto do curso — cada aluno tem 1 projeto e vai usar o Spec Kit hoje, ponto. A decisão "qual usar no trabalho" é conteúdo de carreira, não de aula — fica de fora. |

---

## 4. Ganchos para frente

- **Semana 8 (`aula15-verificadores`)** reusa o formato **clínica rotativa** (mesma
  mecânica de S7/S8 no `_BRIEF.md`). Reuse literalmente o mecanismo desta semana: fila de
  sinalização por board (nome + sintoma), direito da facilitadora de pular a fila por
  variedade pedagógica, e a tarefa fixa da plateia (aposta de causa antes do diagnóstico +
  auto-auditoria de 2 min depois). Não reinvente — é exatamente o "formato de validação em
  3 cenários" que a semana 3 pediu pra semana 8 reusar, só que aplicado à mecânica de
  facilitação, não ao conteúdo.
- **O gate como conceito central** ("comando que responde sim/não") é pré-requisito direto
  da semana 8 (Verificadores) — se a semana 8 reexplicar isso do zero, está duplicando.
  Semana 8 deveria assumir: "vocês já sabem que task precisa de gate; hoje aprofundamos
  **como escrever gates melhores e automatizados**."
- **`TASKS-TEMPLATE.md` e a regra dos 3 strikes** são convenção de curso, não só desta
  semana — qualquer semana futura que peça pro aluno executar uma tarefa com o agente
  pode citar "escreva o gate antes, se falhar 3x reescreva a task" sem reexplicar.
- **A taxa de acerto de primeira tentativa** (mecanismo do `REGISTRO-TAXA-DE-ACERTO.csv`)
  é reaproveitável em qualquer semana que queira medir "o agente resolveu de primeira ou
  não" — inclusive a semana 9 (code review de subagentes) pode medir a taxa de acerto de
  revisão automática vs. humana usando o mesmo formato de CSV.
- **O painel dos 4 frameworks (Spec Kit, OpenSpec, TLC, Superpowers)** fica disponível
  como vocabulário — se alguma semana futura (10, 11, 12) citar "orquestração de tarefas"
  ou "workflow de skills obrigatórias", pode referenciar Superpowers sem reexplicar o que
  é.
- **`uv`/Python** agora existe no ambiente de quem fez esta semana — se uma semana futura
  precisar de uma ferramenta Python (não há nenhuma prevista até a semana 14, mas
  registrando por precaução), o custo de setup já foi pago aqui.

## 5. Ganchos para trás

`_GANCHOS.md` (lote 1) não tem gancho declarado apontando especificamente pra semana 7 —
os ganchos de lote 1 miram as semanas 5, 9 e 10. Mesmo assim, três decisões estruturais do
lote 1 valem pra esta semana e foram aplicadas:

- **"Especifique → leia o que voltou → rejeite o que não serve"** (padrão de músculo
  central do curso, `_GANCHOS.md`) é literalmente o que o gate formaliza: "leia o que
  voltou" vira "rode o gate", "rejeite o que não serve" vira a regra dos 3 strikes.
  Nomeei essa continuidade no recap ativo da aula 1 (seção "Gancho explícito pra hoje" do
  `ROTEIRO-FACILITADORA.md`).
- **Contrato mínimo do esqueleto do projeto** (git, README, comando de teste, CLAUDE.md,
  artefato real — nascido na semana 2) é o que permite o gate de hoje existir: sem
  "comando de teste que roda" já estabelecido desde a semana 2, não haveria `npm test`
  pra citar em nenhum gate desta semana. Não recriamos esse contrato, assumimos ele
  presente.
- **Divergência AGENTS.md × CLAUDE.md** (semana 3) não é retomada diretamente, mas o
  `memory/constitution.md` que o Spec Kit gera é um terceiro arquivo de "regras que o
  agente lê" — vale a pena a semana 8 ou uma revisão futura nomear explicitamente que
  agora existem 3 arquivos de instrução persistente (CLAUDE.md, AGENTS.md quando usado,
  `memory/constitution.md`) e como eles não competem entre si.

Como as semanas 5 e 6 (que teriam ganchos mais diretos pra esta semana) não existiam no
disco no momento da escrita, os ganchos "reais" que esta semana precisa vêm da seção 0
deste documento (dependência declarada), não de `_GANCHOS.md`.

---

## 6. Cobertura dos 7 domínios

| Domínio | Funciona? | Como |
|---|---|---|
| 1. Listagem de perfis de alunos da PDA | Sim | Exemplo central da semana — usado na Demo 1, Demo 2 e em `TASK-FRACA-VS-FORTE.md`: endpoint de busca por habilidade com gate de 4 casos. |
| 2. Captação de clientes / automações freelancer PDA | Sim | Exemplo em `TASK-FRACA-VS-FORTE.md`: geração de proposta comercial com gate que confirma as 3 seções obrigatórias e que a função nunca despacha sozinha. |
| 3. Quiz conectado ao Claude | Sim | Exemplo em `TASK-FRACA-VS-FORTE.md`: gerador de pergunta com gate de schema + fallback testável. |
| 4. Avaliação automatizada de projetos por IA | Sim | Exemplo em `TASK-FRACA-VS-FORTE.md`: função de nota calibrada contra 5 repositórios de referência, gate por desvio máximo. |
| 5. Agente de revisão de código com a voz da PDA | Sim | Exemplo em `TASK-FRACA-VS-FORTE.md`: skill `/revisar-codigo` com gate de detecção de `var`, fixtures fixas. |
| 6. Problema real da ONG ou das próprias aulas | Sim | Não tem exemplo dedicado — usa o método genérico da seção final de `TASK-FRACA-VS-FORTE.md` (as 3 perguntas). O documento RPI da semana 6, que já é específico do domínio escolhido, é a entrada real; o Spec Kit e o gate não têm nenhuma dependência de domínio. |
| 7. Domínio próprio do aluno | Sim | Mesmo caso do domínio 6 — método genérico, documentado explicitamente como tal em `TASK-FRACA-VS-FORTE.md` pra não deixar esse domínio sem orientação nenhuma. |

**7 de 7 domínios cobertos.** O mecanismo da semana (spec → task → gate) é agnóstico de
domínio por construção — ele opera sobre o documento RPI que cada aluno já trouxe
específico do seu próprio domínio, não sobre um domínio fixo escolhido por mim.

## 7. Soma dos minutos

**Aula 1:** Giro (10) + Recap (15) + Teoria/Demo 1 (30) + Lab 1 (15) + Teoria/Demo 2 (20)
+ Lab 2 (25) + Fechamento (5) = **120 min.**

**Aula 2:** Abertura (10) + 6 ciclos de clínica de 15 min (90) + Consolidação/fechamento
(20) = **120 min.**

**Total da semana: 240 min síncronos**, mais o bloco "Spec-Driven Development" da Alura
(8h, não contado nos 240 — é pré-requisito assíncrono).

## 8. Onde o julgamento do aluno é indispensável

O agente escreve o `tasks.md` inteiro sozinho, e até sugere um texto de gate se você
pedir educadamente. **O que ele não decide por você é quando parar de confiar na execução
e admitir que o problema está na spec.** Isso é uma decisão de julgamento, não uma tarefa
de código: exige que o aluno releia a própria task com ceticismo, em vez de pedir a
próxima tentativa. A regra dos 3 strikes (ROTEIRO-FACILITADORA.md, GUIA-DO-ALUNO.md,
REGISTRO-TAXA-DE-ACERTO.md) força esse momento a acontecer de forma visível e registrada
— sem ela, a saída mais fácil é sempre "deixa eu pedir de novo", e é exatamente essa
saída fácil que a aula existe pra fechar. O lab está desenhado pra essa descoberta ser
inevitável: toda vez que uma task falha 3x, a única ação permitida pela planilha é abrir
uma linha nova com um `task_id` novo — não existe campo pra "tentativa 4 da mesma task",
então o aluno é forçado a reescrever antes de continuar.

## 9. Por que esta semana não usa Excalidraw

`_GANCHOS.md` e `_BRIEF.md` mapeiam Excalidraw coletivo só pras semanas 5 e 6. A semana 7
usa clínica rotativa (mapeamento fixo do `_BRIEF.md`, seção 5.1: "S7 e S8 = clínica
rotativa"), e não há uma zona de diagrama coletivo a preencher ao vivo nesta semana — o
conteúdo é comando de terminal, arquivo gerado e planilha de registro, não arquitetura
pra desenhar. O único diagrama que aparece (a tabela dos 4 frameworks) é um artefato de
slide, pronto, não um quadro que a turma desenha junto. Por isso não há pasta
`excalidraw/` neste pacote.

## 10. Pendências pra orquestradora decidir

- **Nome do checklist da semana 5** e **nome do arquivo do documento da semana 6** — ver
  seção 0 deste documento. Nenhum dos dois bloqueia o pacote (as referências são de
  prosa, fáceis de ajustar), mas precisam de find/replace quando essas semanas forem
  escritas.
- **"Módulo 3" no cabeçalho do `ENTREGAVEL.md` é um chute de numeração de módulo** —
  igual ao que a semana 3 já registrou como pendência: não há um mapeamento aula→módulo
  explícito no `_BRIEF.md`. Ajustar se a Iasmim já tiver uma numeração definida.
- **Custo de introduzir `uv`/Python só pra esta semana** (seção 1 acima) é uma decisão
  que vale confirmar com a Iasmim antes da aula — é a primeira vez que o curso sai do
  Node, e mesmo sendo só um binário, é atrito novo pra uma turma que já reclamou de
  travar. Se a Iasmim preferir, a alternativa é trocar a ferramenta hands-on pro OpenSpec
  (`npm install -g`, sem runtime novo) e rebaixar o Spec Kit a "conhecido, não praticado"
  — mas isso contraria a instrução explícita do brief de "mostrar Spec Kit funcionando",
  então não fiz essa troca sozinho.
- **Versão exata do Spec Kit a fixar no `GUIA-DO-ALUNO.md`:** os comandos oficiais usam
  `--from git+https://github.com/github/spec-kit.git@vX.Y.Z` com uma tag de versão
  específica recomendada pela doc, mas não consegui confirmar via WebFetch qual é a tag
  de release **atual** no momento desta sessão (a doc só documenta o padrão do comando,
  não lista a versão corrente numa página está­vel). Deixei o comando sem pin de versão
  (`uv tool install specify-cli --from git+https://github.com/github/spec-kit.git`, que
  pega a `main`) — mais simples e correto hoje, mas menos reprodutível amanhã. Se a
  Iasmim quiser fixar uma tag antes da aula, rodar `specify version` num ambiente limpo
  no dia anterior e colar o número no `GUIA-DO-ALUNO.md`.
