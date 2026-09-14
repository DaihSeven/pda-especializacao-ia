# PACOTE.md — Semana 2: Prompt, contexto e o nascimento do projeto

Documento interno pra Iasmim e pra quem monta as semanas seguintes. Não é material de
aluno.

---

## 1. Mapeamento Alura

**Curso:** Context Engineering: otimização da janela de contexto de IAs (Alura, 4h, 35
atividades, instrutor Ricardo Bugan Debs).
URL: https://www.alura.com.br/curso-online-context-engineering-otimizacao-da-janela-de-contexto-de-ias

**Posição no fluxo:** pré-requisito de entrada na aula 4 (lab), feito entre a aula 3 e a
aula 4 — não antes da aula 3, porque a aula 3 é o "porquê" (a demo) que dá sentido ao
"como" que a Alura aprofunda.

**O que sai do síncrono por causa disso:**
- As quatro estratégias de context engineering em profundidade (seleção, isolamento,
  escrita, compressão) — no síncrono só demonstramos o efeito (contexto sujo vs limpo) e
  nomeamos o problema; a Alura ensina o ferramental completo pra mitigar.
- Gestão de memória de curto e longo prazo além do CLAUDE.md básico — a Alura cobre mais
  cenários (múltiplos agentes, isolamento entre projetos paralelos) que não cabem em 20
  minutos de demo.

**O que sai do síncrono por decisão explícita da Iasmim (não é Alura, é corte puro):**
- **Self-Consistency** (Wang et al., 2022) — vira slide de referência (Slide 10, aula 3).
  Não é ensinado com exercício porque exige rodar o mesmo prompt várias vezes e comparar
  raciocínio, o que não cabe no tempo e compete com o foco da aula (especificidade, não
  amostragem).
- **Otimização PT/EN** — vira observação de 1 frase amarrada ao que já foi visto na aula 1
  (tokenização PT vs EN) + ponteiro pra Alura. Não vira exercício porque duplicaria o Lab
  1 da aula 1 sem ensinar nada novo no tempo síncrono.

---

## 2. O que foi cortado (20-30%) e pra onde foi

Não temos acesso a uma "grade antiga" formal desta semana (este pacote é lote 1 —
primeira vez que a semana 2 é desenhada neste formato). O corte aplicado é relativo à
profundidade que SERIA natural cobrir num tratamento completo de prompt engineering +
context engineering, e foi direcionado assim:

| O que teria entrado num tratamento "completo" | Pra onde foi |
|---|---|
| Self-Consistency (amostragem + votação) | Slide de referência + Alura |
| Otimização PT/EN em profundidade | 1 frase de ponte + Alura |
| As 4 estratégias de context engineering em detalhe (seleção/isolamento/escrita/compressão) | Alura inteira |
| Outras técnicas de prompting (few-shot extenso, ReAct, chain-of-thought explícito) | Não entram nesta semana — ficam implícitas no "exemplo" do bloco 1, sem nomear a técnica; se a turma perguntar, aponta pra Alura ou pra uma semana futura se fizer sentido |
| Gestão de múltiplos projetos/contextos paralelos | Alura |

O tempo que sobrou desse corte foi todo pra mão na massa: dois labs de demonstração
replicada (não exercício abstrato) e a aula 4 inteira sendo lab guiado, zero teoria nova.

---

## 3. Ganchos para frente

- **O `CLAUDE.md` escrito nesta semana é a base que a semana 3 (`aula5-agents-md-skills`)
  estende com AGENTS.md e skills.** Quem chegar na semana 3 sem um CLAUDE.md real (sem
  TODO, específico do projeto) não tem o que estender — a semana 3 deveria checar isso no
  recap.
- **O esqueleto do projeto gerado na aula 4 é a base de TODAS as semanas seguintes até a
  semana 14.** O contrato mínimo (git, README, separação código/teste, comando de teste
  que roda, CLAUDE.md, artefato real do domínio) precisa ser assumido como dado —
  qualquer semana futura que peça pro aluno "adicionar" algo ao projeto está adicionando
  em cima desse esqueleto.
- **Decisão que precisa ser confirmada por quem desenha as semanas seguintes:** o projeto
  do aluno vive num repositório GitHub **separado**, fora do fork do curso
  (`pda-especializacao-ia`). Essa foi uma decisão de design que tomei nesta semana porque
  o projeto é do aluno e sobrevive ao curso — mas isso muda como toda ENTREGAVEL.md das
  semanas 3-14 aponta pro repositório da atividade (não vai ser mais `aulaX-<slug>/` no
  fork, vai ser o repo próprio do aluno). **Sinalizo isso explicitamente porque o template
  do ENTREGAVEL.md (seção 10 do BRIEF) assume `aulaX-<slug>/ no seu fork` como padrão —
  a partir da semana 3, a linha "Repositório da atividade" das próximas 12 semanas
  provavelmente deveria apontar pro repo do PROJETO do aluno, não pro fork do curso.**
  Quem monta a semana 3 deve confirmar esse ponto com a Iasmim antes de reusar o template
  literal.
- **O par "especifique pro agente → leia o que voltou → rejeite o que não serve" é o
  músculo central que se repete em toda semana com lab.** Nomeie esse padrão de novo
  sempre que uma semana futura tiver um momento equivalente — não precisa reensinar, só
  apontar "isso é a mesma coisa da semana 2".
- **Smart Zone / Dumb Zone e o comando `/context`** são pré-requisito conceitual direto
  pra semana 10 (orquestração e MCP client próprio) e semana 11 (software com LLM dentro +
  AIOps 1) — ambas mexem com gestão ativa de contexto em sistemas mais complexos.
- **O catálogo de 7 domínios escolhido nesta semana é o mesmo que a semana 13 (RAG)** vai
  usar como base de dados real pra indexar — quem desenhar a semana 13 pode assumir que
  todo aluno já tem um domínio de dados concreto (perfis, leads, respostas de quiz, etc.)
  ligado ao próprio projeto.
- **O comando de teste que "roda" (não que passa 100%) desta semana é o piso que a semana
  8 (Verificadores) e a semana 7 (Spec-Driven Development) vão exigir que evolua** — a
  semana 7/8 pode assumir que existe pelo menos 1 comando de teste executável em todo
  projeto de aluno.

---

## 4. Ganchos para trás

`_GANCHOS.md` está vazio de ganchos anteriores — este pacote é lote 1, origem da cadeia.
O que retomei não veio de ganchos declarados, veio do material real da aula 1 (semana 1),
lido em `_AULA1-REFERENCIA.md` e nos arquivos de `_referencia-aula1/`:

- O ambiente Claude Code (instalado, logado) — assumido como funcionando, checado no
  início da aula 3 (`GUIA-DO-ALUNO.md`, seção "Terminal").
- O `CLAUDE.md` incompleto que eles preencheram na aula 1 — reusado como o objeto de
  demonstração no Lab 2 da aula 3 (mesmo repo, `pda-ia-aula1-fundamentos`, vira
  playground de novo).
- O loop Read → Edit → Bash(test) e a regra da casa ("você é responsável por cada linha
  que commita") — citados no recap ativo (banco de perguntas) e reafirmados no README
  desta semana.
- Tokenização PT vs EN (Lab 1 da aula 1) — reusada como gancho de 1 frase pro corte de
  "otimização PT/EN" (Slide 10, aula 3): não repetimos o exercício, só lembramos o
  resultado dele.
- O padrão de `CLAUDE.md` com comentário HTML + TODOs, específico da aula 1 — reusado
  literalmente na estrutura do `starter/CLAUDE.md.template` desta semana.

---

## 5. Cobertura dos 7 domínios

| Domínio | Funciona com o lab/entregável desta semana? | Como |
|---|---|---|
| 1. Listagem de perfis de alunos da PDA | Sim | Especificação do checkpoint 1 vira "app que lista perfis"; artefato real = 1 página/rota de listagem com dado de exemplo; CLAUDE.md documenta o schema de perfil |
| 2. Captação de clientes/automações pra freelancers | Sim | Especificação vira "pipeline/form de captação"; artefato real = 1 formulário ou 1 script de automação funcional; CLAUDE.md documenta a régua de qualificação de lead |
| 3. Quiz conectado ao Claude | Sim (default da escolha rápida) | Especificação vira "página de quiz + chamada à API"; artefato real = 1 pergunta funcionando end-to-end; CLAUDE.md documenta onde a chave de API fica (nunca no código) |
| 4. Avaliação automatizada de projetos por IA | Sim | Especificação vira "script/agente que lê 1 submissão e devolve nota"; artefato real = a avaliação de 1 caso de exemplo; CLAUDE.md documenta o critério de nota |
| 5. Agente de revisão de código com a voz da PDA | Sim | Muito parecido com a skill `/revisar-codigo` que já viram na aula 1 — especificação vira "skill ou script que aplica o tom da PDA"; artefato real = 1 revisão de exemplo |
| 6. Problema real da ONG/aulas | Sim, com ressalva | Depende do que a facilitadora trouxer no dia — o processo (especificar, gerar, rejeitar, CLAUDE.md) é idêntico; só o domínio de exemplo muda |
| 7. Domínio próprio do aluno | Sim | É o caso mais aberto — exatamente por isso o checkpoint 2 (rejeitar o que não serve) importa mais aqui: o agente tem menos padrão comum pra chutar |

7 de 7 funcionam (acima do mínimo de 5 exigido). O processo desta semana é
deliberadamente domain-agnostic — ele testa a habilidade de especificar e julgar, não uma
stack ou formato de projeto específico. Isso é uma propriedade de design, não coincidência:
se o processo só funcionasse pra 1-2 domínios, o exercício de prompting estaria escondendo
uma resposta pronta, o que violaria a barra de qualidade do BRIEF.

---

## 6. Soma dos minutos

**Aula 3:** 10 (Giro das IAs) + 15 (Recap ativo) + 30 (Teoria+demo bloco 1) + 15 (Lab 1) +
20 (Teoria+demo bloco 2) + 25 (Lab 2) + 5 (Fechamento) = **120 min**

**Aula 4:** 5 (Abertura) + 10 (Escolha de domínio) + 20 (Checkpoint 1) + 20 (Checkpoint 2)
+ 20 (Checkpoint 3) + 20 (Checkpoint 4) + 20 (Checkpoint 5) + 5 (Fechamento) = **120 min**

**Total da semana: 240 min.**

---

## 7. Onde o julgamento do aluno é indispensável

Nomeado explicitamente em dois pontos (não um só, porque a semana tem duas entregas de
julgamento diferentes):

1. **Checkpoint 2 da aula 4 (leitura e rejeição do plano do agente).** O agente propõe
   uma estrutura de projeto que otimiza para "parece um projeto bem estruturado" — ele
   não tem acesso à realidade do problema de negócio por trás do domínio escolhido. Só o
   aluno sabe se a estrutura, a stack e o "artefato real" proposto de fato atendem o
   problema que ele descreveu em 1 frase. Um aluno que aceita o primeiro plano sem
   questionar entrega um esqueleto tecnicamente funcional e substantivamente errado — e
   isso não aparece em nenhum teste automatizado, só na leitura humana do plano.
2. **Checkpoint 4 da aula 4 (curadoria do CLAUDE.md).** O agente pode sugerir dezenas de
   fatos sobre o projeto (via `/init`, por exemplo); decidir quais 5-8 valem a pena entrar
   num arquivo de menos de 40 linhas é curadoria, não geração de texto. Um CLAUDE.md que
   documenta tudo que o `/init` sugeriu tende a ficar genérico e longo — o exercício é
   escolher o que é específico o suficiente pra fazer diferença numa sessão futura.

Ambos os pontos são nomeados em voz alta no roteiro da facilitadora (não só escritos no
guia do aluno), porque a barra de qualidade exige explicitação, não só presença.

---

## 8. Excalidraw

Esta semana **não usa Excalidraw**. Motivo: o formato da aula 4 é lab guiado paralelo — a
facilitadora constrói no terminal/editor real e a turma espelha; um quadro de modelagem
compete com a atenção que devia estar no terminal, e não há ainda superfície suficiente
(nenhum código real, nenhuma arquitetura de sistema) pra justificar desenhar antes de
construir. A modelagem coletiva no quadro é reservada, por desenho do curso, pras semanas
5 e 6 (`_GANCHOS.md` / mapeamento fixo do BRIEF), quando já existe projeto rodando o
suficiente pra valer a pena desenhar a arquitetura dele antes de mexer.

---

## 9. Pendências pra decisão da orquestradora / Iasmim

1. **Confirmar a decisão de repositório separado pro projeto do aluno** (ver seção 3,
   "Ganchos para frente") — isso muda a linha "Repositório da atividade" do template de
   ENTREGAVEL.md (seção 10 do BRIEF) pra todas as semanas 3 a 14. Tomei a decisão porque
   o BRIEF pede um contrato explícito e não faria sentido pedagógico nem prático manter um
   projeto de 12 semanas, possivelmente de cliente real, aninhado dentro do repo de
   exercícios do curso — mas como isso afeta o template de todas as semanas seguintes,
   sinalizo em vez de deixar implícito.
2. **O número "abaixo de 40%"** do enunciado original desta tarefa não tem fonte
   publicada verificável (ver `REFERENCIAS.md`, seção final). Apresentei como observação
   prática/empírica na aula, não como dado de pesquisa — se a Iasmim tiver uma fonte
   específica em mente (por exemplo, um número que ela já usa em mentoria e testou na
   prática), val a pena substituir a frase do roteiro por essa fonte real.
3. Não há "grade antiga" desta semana disponível pra mim consultar — o mapeamento da
   seção 2 foi feito por inferência do que um tratamento completo do tema incluiria, não
   por comparação com um documento anterior real. Se existir uma versão anterior desta
   semana em outro lugar, vale comparar depois.
