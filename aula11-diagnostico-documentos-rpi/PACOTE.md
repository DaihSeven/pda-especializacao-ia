# PACOTE.md — Semana 6: Diagnóstico, documentos e RPI (aula11-diagnostico-documentos-rpi)

Documento interno pra Iasmim e para a orquestradora. Não vai pro aluno.

---

## 0. Dependência declarada da semana 5 (`aula9-engenharia-para-ia`)

Esta semana foi escrita em paralelo com a semana 5, com a seguinte instrução: assumir que
a semana 5 entrega DDD estratégico (linguagem ubíqua, bounded context), um checklist
nomeado de sinais de código ruim gerado por IA, e um board de Excalidraw de bounded
contexts.

No momento em que este pacote foi fechado, a pasta `aula9-engenharia-para-ia/` já existia
no disco (em progresso, sem `PACOTE.md` ainda), com os seguintes artefatos legíveis — os
nomes abaixo são exatos, lidos diretamente dos arquivos, não presumidos:

- `aula9-engenharia-para-ia/starter/checklist-sinais-codigo-ia.md` — o checklist nomeado.
  Categoria 1 se chama **Abstraction Bloat**, com quatro sinais nomeados:
  **God Class**, **Miragem Modular**, **Camada de Passagem** e **Nomeação genérica**.
  Categorias seguintes: Duplicação em vez de reuso, Mascaramento de erro, API/biblioteca
  alucinada, Defensividade sem necessidade ("Reasoning-Complexity Paradox"), Fronteira
  dissolvida.
- `aula9-engenharia-para-ia/excalidraw/board-bounded-contexts.excalidraw` — o board de
  bounded contexts, com mecânica de "trios" (um aluno compartilha tela por vez, os outros
  dois perguntam fronteira), plenárias no minuto 40 e 80, ajuste final no minuto 95–115.

**Usei esses nomes exatos** no Recap ativo (`ROTEIRO-FACILITADORA.md`) e no README. Se a
versão final da semana 5 mudar qualquer um desses nomes antes de publicar, os pontos a
corrigir aqui são: o quiz do Recap (pergunta 3), a menção ao board no `GUIA-DO-ALUNO.md`
e a comparação de mecânica de Excalidraw na abertura da aula 2 do
`ROTEIRO-FACILITADORA.md`. **Pendência:** reconfirmar contra o `PACOTE.md` da semana 5
quando ele existir.

---

## 1. Mapeamento Alura

| Curso/módulo Alura | Carga | O que cobre | O que isso tira do síncrono |
|---|---|---|---|
| **Engenharia de software na era da IA: context engineering, workflows e controle de custo** (`alura.com.br/conteudo/context-engineering-workflows`, 196min/60 atividades) | planejamento de agente antes de executar, redução de gasto de token, orquestração multi-agente, sub-agentes | O aluno chega à aula 1 já tendo visto que "planejar antes de executar" reduz custo e erro — **por isso a aula não gasta tempo justificando que planejar vale a pena**, só nomeia o RPI como a versão disciplinada disso (3 sessões, não 1) e mostra o contraste ao vivo. |
| **Context Engineering: otimização da janela de contexto de IAs** (`alura.com.br/conteudo/context-engineering-otimizacao-da-janela-de-contexto-de-ias`, 150min/35 atividades) | as 4 estratégias: Selecionar, Isolar, Escrever, Comprimir | A estratégia "Isolar" (separar conversas por tópico) já é conhecida antes da aula — **é por isso que a Demo 1 não reexplica "por que contexto isolado importa"**, só aplica o conceito já visto ao caso específico de research vs. plano vs. implementação. |
| **Context Engineering: otimização da janela de contexto de IAs** (mesma) — módulo "Escrever" | escrita de documentação/notas estruturadas como estratégia de contexto | Fundamenta por que `RESEARCH.md` e o documento enxuto existem como **arquivos**, não como memória de conversa — a Alura já cobriu o "porquê" de externalizar; a aula foca no "o quê" (EARS, BDD, ADR) e no "quando" (RPI). |

**Pré-requisito de entrada no lab da aula 2 (contrato, não punição):** os dois cursos
acima concluídos antes da aula 2 — sem isso o aluno não tem vocabulário pra entender por
que o quadro de um colega precisa ser legível sem explicação verbal, que é o próprio
mecanismo do Rodízio do Diagnóstico.

---

## 2. O que foi cortado

| Corte | Onde foi (antes → agora) |
|---|---|
| PRD e Design Doc como dois documentos separados | Virou **um documento único enxuto** (`starter/SPEC-ENXUTA-template.md`) — decisão explícita do enunciado desta semana, não um corte de 20-30%, é redesenho de formato. |
| Explicação teórica longa de "por que documentar decisões" (motivação de ADR do zero) | Reduzida a 1 frase-âncora + mostrar uma ADR de 15 linhas sendo lida em voz alta (20 segundos) — a motivação profunda de por que registro de decisão importa já é assumida como senso comum depois de 5 semanas de curso; o tempo vai pro **formato certo**, não pro **porquê genérico**. |
| Cobertura de outras notações de requisito (User Stories clássicas, Use Cases UML, RFC 2119 "MUST/SHOULD") | Não entram nesta semana — EARS é a única notação ensinada, deliberadamente, porque é a que gera critério verificável sem curva de aprendizado de UML. Slide de referência, não bloco de aula: nenhum. Se a coordenação quiser comparar, fica pra Alura futura. |
| Explicação de por que isolar contexto reduz erro (a fundamentação de context engineering) | Cobre na Alura (seção 1 desta tabela) — o síncrono assume que a turma já sabe e aplica direto ao caso RPI. |
| Ferramentas específicas de spec-driven (Kiro, spec-kit do GitHub) como lab | Citadas só como referência de mercado (`REFERENCIAS.md` #9) — usá-las de verdade é candidato pra semana 7 (Spec-Driven Development), não aqui. |

---

## 3. Ganchos para frente

- **Semana 7 (`aula13-spec-driven-development`)** pode assumir que todo aluno já sabe
  escrever critério EARS (os 5 padrões, com o gabarito de frase) e cenário BDD em
  Gherkin — não precisa reintroduzir nenhum dos dois do zero. Pode citar
  `REFERENCIAS.md` #9 (Kiro) como prática de mercado já conhecida da turma.
- **Semana 8 (`aula15-verificadores`)** deve literalmente rodar os **3 cenários BDD** que
  o aluno escreveu nesta semana como teste automatizado — o formato foi desenhado pra
  isso (Gherkin, Dado/Quando/Então, sem prosa). Se a semana 8 pedir um formato diferente,
  ela precisa converter, não o aluno reescrever do zero.
- **A régua "escala do documento vs. escala do problema"** (P/M/G) é um artefato
  reusável — qualquer semana futura que peça documentação nova (Spec-Driven Development
  na semana 7, por exemplo) pode citar essa régua em vez de reinventar "quanto documentar".
- **O padrão de 3 sessões separadas do RPI** é candidato a virar hábito transversal do
  curso — qualquer lab futuro que envolva "primeiro entenda, depois planeje, depois
  construa" pode citar "faça isso em RPI" sem reexplicar o mecanismo.
- **`ADR-template.md`** é convenção do curso a partir de agora — qualquer decisão
  arquitetural relevante em qualquer semana futura (semana 10, orquestração; semana 12,
  n8n + Google ADK) pode pedir uma ADR no mesmo formato, sem reintroduzir Nygard.
- O **checklist de EARS "aponte a frase do Research"** é o mesmo músculo de "especifique →
  leia o que voltou → rejeite o que não serve" (convenção do lote 1) — vale nomear essa
  ligação explicitamente em semanas futuras de revisão de critério.

---

## 4. Ganchos para trás

`_GANCHOS.md` chegou com o "LOTE 1 ENTREGUE" (semanas 2, 3 e 4) como fato, mais a
dependência declarada da semana 5 (seção 0 deste documento, porque a semana 5 foi escrita
em paralelo, não antes).

- **Semana 2:** o parágrafo pro dono do negócio é o ponto de partida literal da sessão de
  Research (Lab 1) — o aluno não começa do zero, refina o que já escreveu. O catálogo de
  7 domínios (seção 6 do `_BRIEF.md`) é a base dos 3 exemplos da régua de escala do
  documento (domínios 1, 4 e 2).
- **Semana 2/3:** a mecânica de sorteio com prioridade a domínios diferentes (inventada na
  semana 3, reusada na semana 4) é reusada de novo na abertura da aula 2 desta semana,
  citando explicitamente que a turma já conhece.
- **Semana 2:** Smart Zone / Dumb Zone e o comando `/context` são citados na Demo 1 como
  o vocabulário que já explica por que contexto contaminado produz plano ruim — não
  reexplicados do zero. Ver nota de atribuição em `REFERENCIAS.md` (a atribuição do termo
  em si continua sendo a da semana 2 — comunidade/aihero.dev — não Dex Horthy).
- **Semana 4:** o padrão "especifique → leia o que voltou → rejeite o que não serve"
  (músculo central do curso) é a mesma disciplina aplicada ao revisar critério EARS
  contra o `RESEARCH.md` — citado explicitamente no Lab 2 e no `ENTREGAVEL.md`.
- **Semana 5 (assumida, ver seção 0):** bounded context e linguagem ubíqua são
  pré-requisito direto — os documentos desta semana são escritos NA linguagem que a
  semana 5 nomeou, não em vocabulário novo. O checklist de Abstraction Bloat da semana 5
  é reusado no Recap ativo, com os nomes exatos (God Class, Miragem Modular, Camada de
  Passagem, Nomeação genérica).

---

## 5. Cobertura dos 7 domínios do catálogo

| # | Domínio | Funciona? | Como |
|---|---|---|---|
| 1 | Listagem de perfis de alunos da PDA | ✅ | Usado como exemplo de escala **P** no `README.md` e como "exemplo preenchido" no board de Excalidraw — problema de 1 tela (filtro de busca), ADR curta basta. |
| 2 | Captação de clientes e automações para freelancers | ✅ | Usado como exemplo de escala **G** — trocar planilha de lead por banco de dados mexe em dado sensível (dado de cliente) e é caro de reverter; força Research mais cuidadoso e ADR completa. |
| 3 | Quiz conectado ao Claude | ✅ | Problema típico de escala P/M (ex.: mudar como o quiz exporta resultado) — cabe direto na régua, sem adaptação especial. |
| 4 | Avaliação automatizada de projetos por IA | ✅ | Usado como exemplo de escala **M** no `README.md`, no exemplo preenchido de `EARS-BDD-template.md` e no exemplo do parágrafo pro dono do negócio em `ENTREGAVEL.md` — mudar o peso do checklist de correção cruza confiança entre facilitadora e aluno. |
| 5 | Agente de revisão de código com a voz da PDA | ✅ | O Research pergunta "quem sente a dor de revisar código manualmente, e quanto isso custa" — mesmo padrão de diagnóstico, domínio diferente; nenhuma adaptação de mecânica necessária. |
| 6 | Problema real da ONG ou das aulas | ✅ | Depende do problema trazido pela facilitadora; o mecanismo de Research (entrevista guiada) funciona igual, e é justamente o tipo de problema que mais se beneficia de "nomear a dor antes de propor solução" — problemas internos de ONG tendem a vir pré-embrulhados em solução ("a gente precisa de um sistema pra X"), e o Research desmonta isso. |
| 7 | Domínio próprio do aluno | ✅ | É o caso mais forte da semana — o aluno é quem melhor consegue responder as perguntas de Research (quem sente, quando, quanto custa) porque é o próprio negócio dele. |

**Cobertura: 7 de 7.** Nenhum domínio ficou sem verificação. O mecanismo desta semana
(entrevista de diagnóstico → decisão registrada → critério verificável) não depende de
tipo de sistema — depende só de existir uma dor real por trás, e o catálogo inteiro tem.

---

## 6. Soma dos minutos

**Aula 1:** 10 (Giro) + 15 (Recap) + 30 (Teoria+Demo1) + 15 (Lab1) + 20 (Teoria+Demo2) +
25 (Lab2) + 5 (Fechamento) = **120 min.**

**Aula 2:** 10 (Abertura+sorteio) + 10 (Rodada 1) + 20 (Rodada 2) + 5 (Volta rápida) + 20
(Rodada 3) + 5 (Volta rápida) + 25 (Rodada 4) + 20 (Consolidação) + 5 (Fechamento) =
**120 min.**

(Tabelas completas, bloco a bloco, com o que se diz e o que se faz em cada um: ver
`ROTEIRO-FACILITADORA.md`.)

---

## 7. Onde o julgamento do aluno é indispensável

**O ponto exato:** decidir se um critério EARS gerado pelo agente corresponde a uma dor
real nomeada no `RESEARCH.md` — ou se é uma frase plausível sobre um problema que ninguém
descreveu.

Por que o agente não resolve isso sozinho: peça "escreva 5 critérios EARS pra melhorar
X" e qualquer agente devolve 5 frases com a forma correta (Ubíqua, orientada a evento,
etc.) — isso é tarefa mecânica de formatação, e a Demo 2 prova ao vivo que ele faz isso
até **sem nenhuma informação real**, preenchendo com o que é estatisticamente comum em
specs do mesmo tipo de sistema. O que o agente não tem é acesso à dor de verdade — só
quem fez a entrevista de Research (ou é a própria pessoa que sente a dor) sabe se aquele
critério é sobre algo que aconteceu ou sobre algo que "faria sentido acontecer".

**Como o lab força essa decisão a acontecer:** o Lab 2 pede explicitamente, e a
facilitadora cobra circulando, que o aluno aponte **em qual frase do `RESEARCH.md`** cada
um dos 5 EARS se apoia. Se ele não consegue apontar, o critério é rejeitado — o próprio
checklist de saída do `EARS-BDD-template.md` e do `ENTREGAVEL.md` reforça isso por
escrito, não só verbalmente. A rubrica (`ENTREGAVEL.md`) dá 30% de peso a essa
rastreabilidade — o maior peso individual da entrega.

---

## 8. Excalidraw

Esta semana **usa Excalidraw obrigatoriamente** (S5 e S6, por decisão do `_BRIEF.md`).
Arquivo: `excalidraw/mapa-da-dor.excalidraw`, validado com
`python3 -c "import json;json.load(open('...'))"` (77 elementos, JSON válido).

**Conteúdo do board:** título, legenda (4 zonas coloridas: Quem sente/azul, Onde
dói/vermelho claro, Custo hoje/laranja, O que muda/verde), um exemplo totalmente
preenchido (domínio 1 do catálogo), duas linhas-template tracejadas pra duplicar por
grupo (com o minuto e o responsável por cada zona escritos dentro da própria caixa), e um
diagrama de ciclo mostrando visualmente como o rodízio funciona (seu quadro → colega 1 →
colega 2 → volta pro seu).

**Por que é diferente do board da semana 5, além do conteúdo:** a semana 5 (pelo que foi
possível ler do material dela em progresso — ver seção 0) usa uma mecânica de **trios com
compartilhamento de tela**, onde cada aluno desenha o próprio board do início ao fim,
mediado por plenárias que ajustam fronteira. A mecânica desta semana é
**Rodízio do Diagnóstico**: o quadro muda de dono no meio da atividade — um colega de
fora preenche duas das quatro zonas (Onde dói, Custo hoje) só lendo o que já está escrito,
sem poder perguntar ao dono. Isso não é variação de tema, é um mecanismo pedagógico
diferente: testa se o diagnóstico é legível pra quem não conhece o domínio — a mesma
competência do parágrafo pro dono do negócio, agora aplicada dentro da própria dinâmica
da aula, não só no entregável escrito. Duas semanas seguidas de Excalidraw coletivo só se
justificam com essa diferença de mecânica — se a semana 5 final também usar rotação entre
quadros de colegas, esta seção precisa ser revisada pra manter a diferenciação real (não
só no texto).

---

## 9. Pendências pra orquestradora decidir

1. **Nome e número do módulo.** Usei "Módulo 2 — Diagnóstico, documentos e decisões de
   arquitetura" por analogia com aula3/aula5/aula7 (todas "Módulo 2", subtítulo próprio
   por semana) — não há uma tabela de módulos fixa no `_BRIEF.md` que eu tenha
   encontrado. Confirmar se semana 6 ainda está no mesmo módulo que semanas 2-5, ou se
   já mudou de módulo.
2. **Confirmação cruzada com a semana 5 finalizada.** Os nomes usados na seção 0 (God
   Class, Miragem Modular, Camada de Passagem, Nomeação genérica,
   `checklist-sinais-codigo-ia.md`, `board-bounded-contexts.excalidraw`) vieram de
   arquivos já escritos no disco da semana 5, mas o `PACOTE.md` dela ainda não existia no
   momento desta escrita. Se algum nome mudar na versão final da semana 5, os pontos a
   corrigir aqui estão listados na seção 0.
3. **Origem do número "abaixo de 40%"** não é repetida aqui (não é usada nesta semana) —
   sem pendência nova nessa frente.
