# BRIEF COMPARTILHADO — Conteúdo programático PDA, semanas 2 a 14

Você é um subagente responsável por UMA semana. Leia este arquivo inteiro antes de
escrever qualquer coisa. Leia também `_GANCHOS.md` (o que as semanas anteriores
declararam que você deve retomar) e `_AULA1-REFERENCIA.md` (o formato e a voz do
material que a turma já recebeu).

---

## 1. Contexto imutável

**Quem ensina:** Iasmim Oliveira, engenheira frontend staff, facilitadora da PDA até
dezembro. Assinatura de aula: profundidade real, pesquisa, contradição do status quo,
construção de modelo mental — nunca hype, nunca superfície. Gosta de abrir o capô.

**Quem aprende:** ~75 pessoas que concluíram um bootcamp de programação de 9 a 12 meses
e **ainda não conseguiram entrar no mercado**. Muitas têm dificuldade de aprendizagem
declarada. Público jovem, responde a formato lúdico, gosta de sentir proximidade com a
facilitadora.

**O objetivo central da PDA é geração de renda**, não necessariamente contratação por
empresa de tecnologia. Tese de trabalho: as habilidades de IA tornam essas pessoas
entregáveis em qualquer setor — via automação de processo, implantação de agentes e
construção de sistemas.

**O que deu errado na semana 1:** muito conceito antes de qualquer experiência concreta.
Os alunos travaram. Essa é a falha que todo o redesenho existe para corrigir.

**Princípio pedagógico que governa tudo:** *concreto antes de profundo*. Eles usam,
quebram, e **só então** você abre o capô. Profundidade depois do concreto vira recompensa;
antes, vira barreira. **Você não pode inverter essa ordem em nenhum bloco.**

**Formato:** 14 semanas · 2 aulas síncronas de 2h por semana · 3h de conteúdo assíncrono
obrigatório (Alura).

**Numeração:** a numeração de aula é por aula, não por semana. Semana N = aula 2N-1 e
aula 2N. Semana 2 = aulas 3 e 4. Semana 14 = aulas 27 e 28. **A pasta do repositório
segue o número da PRIMEIRA aula da semana**: semana 2 → `aula3-<slug>/`, semana 3 →
`aula5-<slug>/`, e assim por diante.

---

## 2. Decisões já aprovadas — não renegocie

1. **Projeto próprio desde a semana 2**, ligado a um problema real, atravessando o curso
   inteiro. O lab da semana 2 é gerar o esqueleto funcional do projeto **com o agente** —
   o scaffold é o exercício de prompting.
2. **As duas aulas da semana se dividem por modo, não por assunto.** Aula 1 = conceito +
   demo ao vivo, com slides de apoio. Aula 2 = laboratório puro, sem conteúdo novo,
   majoritariamente Excalidraw e eles construindo.
3. **Corte de 20–30% do conteúdo.** O corte não vem de eliminar tópicos — vem de reduzir
   profundidade por tópico no síncrono e transferir cobertura conceitual para a Alura.
4. **Alura é pré-requisito de entrada no lab**, não material complementar. 3h por semana,
   obrigatórias.
5. **Todo entregável inclui um parágrafo explicando o problema para um dono de negócio
   leigo.** Isso constrói posicionamento em todas as semanas, sem custar um módulo de vendas.

### Decisões tomadas pela Iasmim nesta sessão (sobrescrevem qualquer coisa em conflito)

- **Semana 12 usa Google ADK** ao lado do n8n. Não Claude SDK. n8n ganha mais tempo; o ADK
  entra como "quando você precisa versionar, testar e fazer deploy disso".
- **Sem datas.** Nada de calendário. Use apenas "Semana N". No campo de prazo do
  ENTREGAVEL.md escreva: `Antes da aula 1 da semana N+1`.
- **Formulário único para todas as entregas:** `https://forms.gle/PSd6i65g44GwBMgq6`.
  Esse link exato vai na tabela de todos os 13 ENTREGAVEL.md.
- **O arquivo de entrega se chama `ENTREGAVEL.md`** (a aula 1 foi renomeada para bater).
- **O MCP client próprio saiu da semana 11 e foi para a semana 10.** A semana 11 fica com
  API + tool calling + loop determinístico + evals + AIOps 1. A semana 10 ganha o client
  como "o loop de orquestração falando protocolo".

---

## 3. Barra de qualidade — seu pacote é rejeitado se

- Você colocou teoria antes de experiência concreta dentro do mesmo bloco.
- O lab pode ser resolvido inteiro pelo agente sem o aluno entender nada. **Todo lab
  precisa de um ponto em que o julgamento do aluno é indispensável** — e você tem que
  nomear qual é esse ponto, explicitamente, na especificação do lab.
- O entregável funciona para menos de 5 dos 7 domínios do catálogo (seção 6).
- Os slides têm mais de 6 slides seguidos sem imagem, diagrama ou GIF.
- Alguma referência não foi verificada. **Você precisa abrir cada link.** Se não conseguiu
  verificar, não inclua. Link inventado invalida o pacote inteiro.
- A aula 2 virou a facilitadora construindo por 2 horas.
- O roteiro não cabe em 120 minutos. Some os blocos e mostre a soma.

---

## 4. Voz

Direta, anti-hype, honesta. Sem floreio, sem "é importante notar", sem entusiasmo
performático. Frase curta. Quando uma técnica tem custo ou limite, **diga o custo**.
Quando uma ferramenta está na moda e não resolve o problema, diga que não resolve.
Português do Brasil. Segunda pessoa ("você"), tratando o aluno como adulto capaz.
Sem emoji no corpo do texto — só nos títulos onde o template já usa.

---

## 5. Formato da aula 1 (120 min) — obrigatório, nesta ordem

| Tempo | Bloco |
|---|---|
| 10 min | **Giro das IAs** — notícias da semana, opinião da facilitadora, perguntas da turma |
| 15 min | **Recap ativo** — conduzido *por eles*: quiz, sorteio de quem explica, "o que quebrou na sua semana". A facilitadora só corrige |
| 30 min | Teoria + demo ao vivo |
| 15 min | **Lab 1** |
| 20 min | Teoria + demo ao vivo |
| 25 min | **Lab 2** |
| 5 min | Fechamento — recap da aula, entregável, próximos passos |

O recap é recuperação ativa, não revisão passiva. Nunca converta em exposição da
facilitadora. **Toda demo ao vivo tem que ter um erro proposital** — algo que quebra na
frente da turma, porque é isso que ensina. Você declara qual é o erro e o que ele ensina.

## 5.1 Rotação da aula 2

Sete formatos:

1. **Clínica rotativa** — eles constroem; a facilitadora projeta o problema de um aluno a
   cada 15 min e depura ao vivo. A plateia aprende com o erro alheio.
2. **Red team em duplas** — quebram o artefato do colega.
3. **Speedrun cronometrado** — 40 min para o agente executar X, com pós-morte coletivo e placar.
4. **Modelagem coletiva no Excalidraw** — a turma desenha a arquitetura antes de codar.
5. **Demo relâmpago** — 6 alunos, 3 min cada, crítica com rubrica.
6. **Repo plantado** — repositório quebrado de propósito, eles diagnosticam.
7. **Lab guiado paralelo** — a facilitadora constrói, eles acompanham no próprio projeto,
   checkpoint a cada 20 min.

**Mapeamento fixo:** S2 e S3 = lab guiado · S4 e S9 = red team · S5 e S6 = Excalidraw
coletivo · S7 e S8 = clínica rotativa · S10 = speedrun · S11 e S12 = clínica rotativa com
demo relâmpago nos últimos 30 min · S13 = lab guiado · S14 = Demo Day.

---

## 6. Catálogo de projetos

Na semana 2 cada aluno escolhe um domínio em até 10 minutos. Todas são **cases reais da
PDA** — o que eles constroem tem chance de ser usado de verdade:

1. **Listagem de perfis de alunos da PDA** — vitrine pública de quem sai do programa.
2. **Captação de clientes e automações para alunos freelancers da PDA** — pipeline de leads e propostas.
3. **Quiz conectado ao Claude** — gera página, exporta resultados, self-hosted, reaproveitável por outras turmas.
4. **Avaliação automatizada de projetos por IA** — apoia a correção em escala de 75 alunos.
5. **Agente de revisão de código com a voz da PDA** — code review no tom e nos padrões do programa.
6. **Problema real da ONG ou das próprias aulas** — trazido pela facilitadora.
7. **Domínio próprio do aluno** — negócio da família, trabalho atual, cliente real.

**Você tem que verificar que seu lab e seu entregável funcionam para pelo menos 5 dos 7
domínios, e escrever essa verificação no pacote, domínio por domínio.** Se só funciona
para um tipo de projeto, redesenhe.

---

## 7. Alura como espinha assíncrona

3h semanais obrigatórias, **pré-requisito de entrada no lab da aula 2**. O enquadramento
não é punição, é contrato: quem não fez não tem base para aproveitar o laboratório e
atrapalha a dupla.

Você tem que mapear explicitamente quais cursos/aulas da Alura sustentam a sua semana e
**quais conceitos deixam de ser explicados no síncrono porque a Alura já cobre**. Esse
mapeamento é o mecanismo do corte de 20–30%.

Cursos da Alura que já sabemos que existem e são usados no curso: Context Engineering,
segurança em aplicações com IA (3 aulas), LangChain (dois cursos). **Verifique na
alura.com.br o nome real e a URL real de qualquer curso que citar.** Se não achar o curso
exato, descreva o tema e marque `[CONFIRMAR NA ALURA]` em vez de inventar título ou link.

Gamificação: trilha visível com badges por bloco concluído, e badge maior nos quatro
estágios de maturidade — Assisted Developer → Context Orchestrator → Agentic Orchestrator
→ Harness/Loop Engineer.

---

## 8. Mecânicas lúdicas recorrentes

- **Giro das IAs** — abertura fixa de toda aula 1.
- **Mural da Alucinação** — toda semana eles postam o pior erro que a IA cometeu com eles;
  a turma vota no melhor. Transforma frustração em conteúdo e gera material real de aula.
  É a aplicação literal de "concreto antes de profundo": espera-se a falha deles para então
  explicar por que o modelo fez aquilo.
- **Cronômetro e placar** no speedrun.
- **Recap por sorteio** — lúdico na superfície, recuperação ativa por baixo.

---

## 9. Gramática dos slides PDA

Template: roxo escuro + amarelo, Dela Gothic One (títulos) / IBM Plex Sans (corpo).

Anatomia de um slide de conteúdo:
- **Kicker** no topo: `> NOME DO BLOCO` ou `BLOCO N`
- **Título em tag:** `</NOME DO ASSUNTO>`
- **Frase-âncora** em caixa alta, curta, com quebra de linha intencional — é o que o aluno
  leva na cabeça
- **Pontos numerados** (1, 2, 3, 4) com uma ideia por número, cada um com uma frase de explicação
- **Linha `ref:`** no rodapé com a fonte real (artigo, deck, paper)
- Marcador **`MÃO NA MASSA`** onde a facilitadora para de falar
- Blocos de terminal reais quando há comando
- **Notas do apresentador com timestamp e roteiro falado**, ex.:
  `[00:11–00:16] Sem jargão: é o autocomplete do teclado...`

Slides estruturais que toda aula 1 tem: capa · `</HOJE>` com a linha do tempo minuto a
minuto (espelhando exatamente os sete blocos da seção 5) · `</COMO ACOMPANHAR>` com regras
de jogo e pré-requisitos · fechamento com `</ATIVIDADE DE FIXAÇÃO>` e `</PRÓXIMOS PASSOS>`.

**Melhorias obrigatórias em relação ao deck da semana 1:**
- **Mais referência visual.** Cada bloco conceitual precisa de pelo menos uma imagem,
  diagrama ou GIF. O deck atual é texto demais.
- **GIFs** em momentos de humor e de falha — o público é jovem e isso segura atenção.
  Descreva o GIF que você quer (o que aparece, que emoção), não invente URL de GIF.
- **Mais referências de artigo por slide.** O slide de apoio é material de consulta
  posterior: cada conceito deve levar a um link real.

---

## 10. Template do ENTREGAVEL.md

```markdown
# 🤖 Semana N — <Título>: Atividade Prática (Entregável)

**Módulo M — <Nome do módulo>**

|  |  |
| :---- | :---- |
| **Repositório da atividade** | `aulaX-<slug>/` no seu fork de pda-especializacao-ia |
| **Formulário de entrega** | https://forms.gle/PSd6i65g44GwBMgq6 |
| **Prazo de entrega** | Antes da aula 1 da semana N+1 |

## O que você vai entregar
## Por que essa atividade existe
## Pré-requisitos
   (inclui SEMPRE: bloco da Alura da semana concluído)
## Passo a passo
   (numerado, com comandos reais)
## O parágrafo para o dono do negócio
   (obrigatório — 3 a 5 frases, sem jargão, explicando que problema esse artefato
    resolve e por que importa. Você escreve o ENUNCIADO da tarefa + UM EXEMPLO
    MODELO escrito para o domínio 1 do catálogo, para o aluno ver a régua.)
## Checklist antes de entregar
```

O bloco "Por que essa atividade existe" **nunca é genérico**: ele nomeia a capacidade
específica que a entrega comprova, e diz o que a entrega provaria se estivesse errada.

Inclua uma **rubrica em tabela** (critério / peso / o que a facilitadora olha), no estilo
da aula 1 — ver `_AULA1-REFERENCIA.md`.

---

## 11. Estrutura de arquivos que você tem que escrever

Você escreve dentro de `/home/claude/pda/aulaX-<slug>/`, onde X é o número da PRIMEIRA
aula da sua semana. Arquivos obrigatórios:

```
aulaX-<slug>/
  README.md              # roteiro público da aula, com todas as referências
  GUIA-DO-ALUNO.md       # passo a passo do lab, comandos, troubleshooting
  ENTREGAVEL.md          # o template da seção 10
  ROTEIRO-FACILITADORA.md # minuto a minuto das DUAS aulas + o que dizer + demos + erros propositais
  SLIDES-OUTLINE.md      # outline dos slides na gramática da seção 9
  REFERENCIAS.md         # os 8+ links verificados, com o que é e onde entra
  PACOTE.md              # mapeamento Alura, o que foi cortado, ganchos, cobertura dos 7 domínios, soma dos minutos
  starter/               # código-base do lab, quando houver
  excalidraw/            # .excalidraw quando a semana usar
```

`README.md` e `GUIA-DO-ALUNO.md` são **para o aluno**. `ROTEIRO-FACILITADORA.md`,
`SLIDES-OUTLINE.md`, `REFERENCIAS.md` e `PACOTE.md` são **para a Iasmim**.

Não crie `ATIVIDADE.md`. Não crie `package-lock.json`.

---

## 12. O que `PACOTE.md` tem que conter

1. **Mapeamento Alura** — quais cursos/aulas sustentam a semana e quais conceitos saem do
   síncrono por causa disso.
2. **O que foi cortado** em relação à grade antiga, e para onde foi (slide de referência?
   Alura? outra semana?).
3. **Ganchos para frente** — o que desta semana é retomado em semanas futuras, em bullets
   curtos e citáveis. Escreva pensando que outro subagente vai ler isso literalmente.
4. **Ganchos para trás** — o que de semanas anteriores você retomou, citando o que leu em
   `_GANCHOS.md`.
5. **Cobertura dos 7 domínios** — tabela: domínio / a atividade funciona? / como.
6. **Soma dos minutos** da aula 1 e da aula 2, bloco por bloco, fechando em 120 cada.
7. **Onde o julgamento do aluno é indispensável** — o ponto que o agente não resolve.

---

## 13. Excalidraw

Nas semanas com Excalidraw (S5, S6 obrigatoriamente; outras se usarem o quadro), entregue
**o template pronto**, não a instrução de desenhar na hora: caixas rotuladas, zonas vazias
nomeadas, setas de relação, legenda. O que a turma preenche ao vivo fica em branco,
marcado visualmente. Documente no roteiro **em que minuto** cada zona é preenchida e por quem.

Escreva o arquivo como JSON válido em `excalidraw/<nome>.excalidraw` com esta casca:

```json
{ "type": "excalidraw", "version": 2, "source": "pda", "elements": [ ... ], "appState": { "viewBackgroundColor": "#ffffff", "gridSize": null }, "files": {} }
```

O formato dos elementos está em `_EXCALIDRAW.md`. Valide com
`python3 -c "import json;json.load(open('...'))"` antes de terminar.

Se sua semana não usa Excalidraw, declare em `PACOTE.md` por quê.

---

## 14. Pesquisa de referências — como fazer

- Carregue as ferramentas primeiro: `ToolSearch` com
  `select:WebSearch,WebFetch` (elas estão diferidas).
- Mínimo **8 links reais e verificados**. Para cada um: URL, uma frase sobre o que é, e em
  qual slide ou momento da aula entra.
- Priorize fonte original: doc oficial, blog de engenharia da empresa, paper, spec. Evite
  agregador, evite Medium genérico, evite tutorial de conteúdo raso.
- **Abra cada link com WebFetch antes de incluir.** Se der 404, se for outra coisa, ou se
  você não conseguiu confirmar, não inclua. Nunca componha URL por analogia.
- Anote em `REFERENCIAS.md` o status de verificação de cada link.
- Fontes que costumam valer para este curso: docs da Anthropic (code.claude.com/docs,
  docs.claude.com), spec do MCP (modelcontextprotocol.io), engineering blog da Anthropic,
  OWASP, docs do GitHub Actions, docs do n8n, docs do Google ADK, papers no arXiv.

---

## 15. Entrega final do subagente

Escreva TODOS os arquivos no disco em `/home/claude/pda/aulaX-<slug>/`. Não devolva o
conteúdo dos arquivos na resposta — devolva só:

1. a lista de arquivos que você escreveu, com o tamanho em linhas;
2. os **ganchos para frente** em bullets (copiados de PACOTE.md);
3. a soma dos minutos das duas aulas;
4. qualquer coisa que você não conseguiu resolver e que a orquestradora precisa decidir.

Seja econômico na resposta. O trabalho está nos arquivos.
