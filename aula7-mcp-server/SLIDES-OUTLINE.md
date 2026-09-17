# Outline de slides — Semana 4: MCP na prática

**Total: aula 1 = 30 slides (S1–S30) · aula 2 = 3 slides (A1–A3), inalterada.**

Gramática PDA: roxo escuro + amarelo, Dela Gothic One (títulos) / IBM Plex Sans (corpo).
Kicker no topo, título em tag `</ASSUNTO>`, frase-âncora curta em caixa alta, pontos
numerados com uma frase de explicação cada, linha `ref:` com fonte real quando houver,
`MÃO NA MASSA` onde a facilitadora para de falar, blocos de terminal reais, e **notas da
apresentadora com timestamp** `[mm:ss–mm:ss]`.

Regra desta semana: **no máximo 3 slides consecutivos sem imagem, diagrama ou GIF** — na
prática, quase todo slide abaixo carrega seu próprio recurso visual, marcado na linha
`Visual:`. A estrela do template não conta como recurso visual. Onde a imagem é escolha da
Iasmim (print real de tela), o slot vem marcado `[ PRINT: … ]` em vez de imagem inventada.

**Fio condutor da semana:** *"Hoje, mãos."* — semana 3 deu memória e procedimento ao
agente; semana 4 dá acesso a coisas fora da conversa. A variação que fecha o dia é do
próprio roteiro: *"mão que abre porta pra fora também abre porta pra dentro."* Volta nas
transições de bloco (S8, S19, S22, S30).

Só a **aula 1** tem slide de apoio (aula 2 é laboratório puro — no máximo 2-3 slides de
regras do jogo, sem conteúdo novo).

Timestamps somam os 120 minutos da aula 1 (ver `ROTEIRO-FACILITADORA.md`): Giro das IAs
(0:00–0:10, sem slide, discussão aberta) e o miolo de cada bloco correm dentro das faixas
abaixo — a soma de todas as notas fecha exatamente em 2:00:00.

---

## AULA 1

### S1 — Capa
`SEMANA 4 · MCP NA PRÁTICA` — subtítulo: "Você constrói o server. Depois quebra o do
colega."
**Visual:** ícone de plugue/conector estilizado (referência ao "USB-C pra IA" do MCP).
**Notas:** `[00:00–00:01]` Capa em pé, sem falar nela — deixa projetada enquanto a turma
senta.

### S2 — `</HOJE>` — linha do tempo minuto a minuto
Espelha a tabela do `ROTEIRO-FACILITADORA.md` (7 blocos, 120 min).
**Visual:** barra de tempo horizontal com os 7 blocos coloridos.
**Notas:** `[00:01–00:02]` "Sete blocos, 120 minutos, dois labs. O segundo lab é mais
longo — é onde vocês tentam furar o próprio server."

### S3 — `</COMO ACOMPANHAR>`
Regras do jogo: terminal aberto, projeto da semana 2/3 do lado, trilha assíncrona de
OWASP concluída (ver `PACOTE.md` para o mapeamento completo). Nota: "hoje trabalha
sozinho até o Lab 2 — a dupla só entra na aula 2."
**Visual:** ícone de checklist com os três itens marcados.
**Notas:** `[00:02–00:03]` Confirma rápido: "quem não terminou o pré-requisito assíncrono
me procura no intervalo, não trava o lab dos outros."

### S4 — Recap — `</SEMANA PASSADA>`
Sorteio de 3 alunos (ver roteiro).
Frase-âncora: **"MEMÓRIA E PROCEDIMENTO. HOJE, MÃOS."**
**Visual:** GIF sugerido — mão robótica alcançando algo fora de tela (humor leve, tema
"mãos").
**Notas:** `[00:10–00:25]` Sorteio condução deles: (1) `AGENTS.md`/`CLAUDE.md` comum vs.
diferente entre dois membros do grupo; (2) mostrar uma skill escrita e quando ativa; (3)
quiz relâmpago de progressive disclosure. Fecha com o gancho: "semana passada vocês deram
memória e procedimento pro agente. Hoje ele ganha mãos — acesso a coisas fora da
conversa. E mão que abre porta pra fora também abre porta pra dentro."

### S5 — `</O QUE É MCP>`
Frase-âncora: **"PROTOCOLO, NÃO PRODUTO."**
1. MCP é um protocolo aberto — uma forma padronizada de conversar, não um pacote que você
   instala.
2. Client e server trocam JSON-RPC por baixo — o "USB-C da IA": uma conexão, muitos
   encaixes.
`ref: modelcontextprotocol.io/introduction`
**Visual:** ícone de dois blocos ligados por um cabo, legenda "JSON-RPC" no meio.
**Notas:** `[00:25–00:27]` Não abre com esse slide antes de algo rodando — já veio do
`starter/demos/mcp-demo-vulneravel` ligado, `/mcp` verde na tela. Agora nomeia: "isso que
tá conectado aí é exatamente isso: um protocolo."

### S6 — `</HOST, CLIENT E SERVER>`
Frase-âncora: **"TRÊS PAPÉIS, UMA LINHA RETA."**
Diagrama fundador da semana, slide grande e sozinho:
1. **Host** — o Claude Code, o programa que você abre. É quem decide se conecta a um
   server.
2. **Client** — o host cria **um client dedicado por server conectado**; é o tradutor
   entre o host e aquele server específico.
3. **Server** — o programa que fornece contexto ou ação; é a peça que responde ao que o
   client pede.
Setas: Host → cria → Client (uma seta por server conectado, várias saindo do Host) ·
Client ↔ Server (seta dupla, "fala JSON-RPC com"). O aluno tem que sair vendo: um host,
vários clients, um server por client — nunca um client conversando com dois servers.
`ref: modelcontextprotocol.io/docs/2026-07-28/learn/architecture`
**Visual:** diagrama com as três caixas (Host à esquerda, Client no meio, Server à
direita), repetindo Client+Server em pares menores abaixo pra mostrar "um client por
server".
**Notas:** `[00:27–00:29]` "Guarda esse desenho — vocês vão usar ele o resto do curso.
Hoje vocês são a caixa da direita."

### S7 — `</O HANDSHAKE>`
Frase-âncora: **"NINGUÉM VÊ SUAS TOOLS ANTES DO APERTO DE MÃO."**
Diagrama de sequência (quem fala primeiro, o que é negociado, quando as tools aparecem):
1. O **client inicia** — manda `initialize` dizendo qual versão do protocolo fala e o que
   sabe fazer.
2. O **server responde** com as próprias capacidades — quais primitivas oferece (tools,
   resources, prompts).
3. Só depois desse aperto de mão o client pede a lista de tools.
4. É **nesse momento** que as tools do seu server aparecem pro modelo — antes disso, elas
   simplesmente não existem pra ele.
`ref: modelcontextprotocol.io/docs/2026-07-28/learn/architecture`
**Visual:** diagrama de sequência com duas colunas (Client / Server) e setas numeradas na
ordem 1→4, como um diagrama de troca de mensagens.
**Notas:** `[00:29–00:30]` "É por isso que, quando o `/mcp` mostra verde, já rolou tudo
isso por baixo — vocês só não viram."

### S8 — `</O QUE VOCÊ CONSTRÓI HOJE>`
Frase-âncora: **"HOJE: SERVER. SEMANA 10: CLIENT."**
1. Vocês foram **client** na aula 1 (usaram o `context7`, um server pronto).
2. Hoje vocês constroem o **server** — a peça que fornece contexto ou ação.
3. O client próprio, que fala esse mesmo protocolo do outro lado, é **semana 10** — não é
   hoje.
**Visual:** o mesmo diagrama do S6, Host e Client apagados/acinzentados, só a caixa
Server em destaque com uma seta "você constrói isso hoje" e uma legenda cinza ao lado:
"client — semana 10".
**Notas:** `[00:30–00:31]` "E mão que abre porta pra fora também abre porta pra dentro —
é disso que a aula inteira trata a partir de agora."

### S9 — `</STDIO OU HTTP>`
Frase-âncora: **"HOJE: SÓ STDIO."**
1. **stdio** = processo local, um client — sem porta, sem auth, sem custo de infra.
2. **Streamable HTTP** = remoto, muitos clients, precisa de autenticação.
3. Claude Code recomenda stdio pra server local custom — é o que 90% dos servers "de uso
   pessoal/de equipe" usam.
`ref: code.claude.com/docs/en/mcp` · `ref: modelcontextprotocol.io/specification/2026-07-28/basic/transports`
**Visual:** diagrama comparando os dois transportes lado a lado (stdio: um processo, uma
seta curta pro client; HTTP: um servidor remoto, várias setas longas de clients diferentes
e um cadeado de auth no meio).
**Notas:** `[00:31–00:33]` "Vocês vão rodar `node build/index.js` local — nada de porta
aberta, nada de deploy. Isso é proposital."

### S10 — `</UMA TOOL NÃO É UMA FUNÇÃO>`
Frase-âncora: **"É UM TEXTO QUE O MODELO LÊ E DECIDE OBEDECER."**
Ponto único, grande: nome + descrição + schema — tudo isso é linguagem natural pro modelo,
não um contrato de tipos como você está acostumado a pensar em código.
**Visual:** frase em destaque sozinha, sem bullet — slide de respiro antes do diagrama
seguinte.
**Notas:** `[00:33–00:34]` Pausa curta. "Esquece TypeScript um segundo. Pro modelo, sua
tool é só... texto."

### S11 — `</ANATOMIA DE UMA TOOL>`
Frase-âncora: **"QUATRO PEÇAS, TODAS EM LINGUAGEM NATURAL."**
1. **Nome** — identifica a tool numa lista, ex.: `ler_issue`.
2. **Descrição** — texto livre que diz ao modelo quando e como usar.
3. **Schema de entrada** — os parâmetros aceitos, cada um com seu próprio texto
   explicativo.
4. **Retorno** — o que a tool devolve pro modelo continuar o raciocínio.
`ref: modelcontextprotocol.io/docs/2026-07-28/develop/build-server`
**Visual:** diagrama de uma caixa "Tool" dividida em quatro quadrantes rotulados, com uma
seta saindo de cada um até um ícone de "modelo" lendo tudo como texto corrido.
**Notas:** `[00:34–00:35]` "Reparem: as quatro peças. Nenhuma delas é código que roda —
são as quatro que o modelo lê antes de decidir chamar a tool."

### S12 — `</A DESCRIÇÃO É A INTERFACE>`
Frase-âncora: **"A DESCRIÇÃO É O QUE O MODELO LÊ PRA DECIDIR USAR A TOOL."**
1. Não é comentário de código pra humano — é **prompt**.
2. Vaga ou ambígua: o modelo usa errado, ou nunca usa.
3. É também a superfície que uma tool de fora pode envenenar — guarda essa ideia pra
   daqui a pouco.
`ref: modelcontextprotocol.io/docs/2026-07-28/develop/build-server`
**Visual:** `[ PRINT: definição da tool `ping` do `mcp-server-template`, campo
`description` destacado em amarelo ]`.
**Notas:** `[00:35–00:37]` "Quando vocês escreverem a descrição da sua tool, escrevam pra
um leitor que não vê o código — porque é exatamente isso que o modelo é."

### S13 — `MÃO NA MASSA` — Demo 1 ao vivo: Prompt Injection
Sem conteúdo — é a demo rodando na tela (terminal + Claude Code). Slide só com o kicker
`DEMO 1 · AO VIVO` e o nome da tool (`ler_issue`).
**Visual:** terminal + Claude Code em tela cheia — o próprio recurso visual da demo.
**Notas:** `[00:37–00:48]` Roteiro completo em `ROTEIRO-FACILITADORA.md`, Demo 1. Resumo:
peça "resuma a issue 42"; deixe o agente ler `fixtures/segredo.txt` sem pedido — **não
interrompa**; pare e pergunte "quem pediu isso?". Ninguém.

### S14 — `</O QUE ACABOU DE ACONTECER>` (pós-demo 1)
Frase-âncora: **"A INSTRUÇÃO NÃO VEIO DE VOCÊ."**
1. Prompt injection **indireta** — LLM01 do OWASP Top 10 for LLM Applications.
2. A tool não teve bug — devolveu exatamente o que devia.
3. O modelo não separa "dado" de "instrução" no mesmo texto.
4. Caso real: `mcp-server-git` da própria Anthropic, 3 CVEs de prompt injection,
   corrigidos dez/2025.
`ref: owasp.org/www-project-top-10-for-large-language-model-applications` ·
`ref: infosecurity-magazine.com/news/prompt-injection-bugs-anthropic/`
**Visual:** `[ PRINT: momento em que o agente lê `segredo.txt` sem pedido, na própria
sessão da demo ]`.
**Notas:** `[00:48–00:55]` Nomeie e ancore no real: "se aconteceu no server de referência
da própria empresa que inventou o protocolo, não é erro de iniciante."

### S15 — `</DECISAO-ESCOPO.md>`
Frase-âncora: **"O QUE A TOOL NÃO PODE FAZER — DECISÃO SUA, NÃO DO AGENTE."**
1. Preenchido **antes da primeira linha de código** — agora, na abertura do Lab 1.
2. Não é burocracia: é a única decisão desta semana que o agente não toma por você.
3. Na aula 2 é o documento que seu colega recebe como **alvo declarado** do ataque.
**Visual:** `[ PRINT: `starter/decisao-escopo-template.md`, seção "O que ela NÃO PODE
poder fazer" destacada ]`.
**Notas:** `[00:55–00:57]` Reforço verbal nº1 do dia (o roteiro pede pelo menos dois):
"cada tool que vocês vão escrever hoje é uma decisão de escopo, não só uma função."

### S16 — `</ESCOPO ERRADO>`
Frase-âncora: **"CONVENIENTE PRA VOCÊ HOJE. PERIGOSO PRA SEMPRE."**
Exemplo (domínio 4 do catálogo — avaliação automatizada de projetos): a tool
`checar_estrutura_entrega` só precisava **ler** arquivos do repositório do aluno e
comparar com um checklist. Escopo largo demais: ela também aceita **rodar comandos** do
repositório (`npm install`, scripts de build) "pra economizar um passo manual".
1. Ganhou poder que a tarefa não pediu — ler estrutura não precisa executar nada.
2. Um `package.json` ou README malicioso no repositório agora é caminho de ataque (mesma
   classe de risco da Demo 1).
3. **Excessive agency**: o risco cresce com o poder que a tool tem, não com a intenção de
   quem escreveu.
**Visual:** diagrama da tool com uma seta extra pra "executar comando", cortada em
vermelho com um X.
**Notas:** `[00:57–00:58]` "Ninguém escreve isso pra ser malicioso. Escreve pra ser
prático. É exatamente por isso que dá pra acontecer com vocês."

### S17 — `</ESCOPO CERTO>`
Frase-âncora: **"SÓ O QUE A TAREFA PEDE. NADA A MAIS."**
Mesma tool, corrigida: `checar_estrutura_entrega` só lê arquivos dentro de uma allow-list
de caminhos do repositório — **nunca** chama `npm install` ou qualquer execução.
1. A trava está no código — ausência de qualquer chamada de execução no processo, não uma
   instrução pra "ter cuidado".
2. Mesmo que a issue ou o README do aluno peçam pra ela rodar algo, ela não tem esse
   poder.
3. É exatamente a seção "Como isso é garantido no código" do `DECISAO-ESCOPO.md`.
**Visual:** mesmo diagrama do S16, sem a seta de execução — só a seta de leitura,
apontando pra dentro da allow-list.
**Notas:** `[00:58–01:00]` "Essa é a régua: se a resposta de 'como isso é garantido no
código' for 'eu vou ter cuidado', voltem e preencham de novo."

### S18 — `MÃO NA MASSA` — Lab 1 (15 min)
Frase-âncora: **"SCAFFOLD DO SEU SERVER."**
Checklist visível: `npm install` → `npm run build` → `claude mcp add` → `/mcp` verde.
**Visual:** o checklist em si, como elemento gráfico (4 caixas de check, preenchendo
conforme a turma avança).
**Notas:** `[01:00–01:10]` Eles fazem o Lab 1 do `GUIA-DO-ALUNO.md`: `DECISAO-ESCOPO.md`
primeiro, depois scaffold a partir do `starter/mcp-server-template`, tool `ping` rodando.
Circule — não construa. Reforço verbal nº2: no fechamento do lab, repita a frase do S15.

### S19 — `</SAÍDA TAMBÉM É SUPERFÍCIE>`
Frase-âncora, sozinha, caixa alta, sem mais nada: **"O QUE O MODELO ESCREVE VIRA ENTRADA
DE OUTRO SISTEMA."**
**Visual:** GIF sugerido — líquido sendo despejado sem funil, espalhando pra fora do copo
(humor leve, "sem filtro"). Slide de respiro marcando a virada de bloco.
**Notas:** `[01:10–01:11]` "Mesma sessão contaminada da Demo 1 — a gente não limpou de
propósito."

### S20 — `MÃO NA MASSA` — Demo 2 ao vivo: Output Handling
Kicker `DEMO 2 · AO VIVO`.
**Visual:** terminal + navegador abrindo o `.html` gerado — o recurso visual é a própria
demo.
**Notas:** `[01:11–01:17]` Roteiro completo em `ROTEIRO-FACILITADORA.md`, Demo 2. Peça
"gere um relatório em HTML da issue 42"; a tool `gerar_relatorio_html` escreve sem
escapar; abra o `.html` no navegador na frente da turma — o `alert()` embutido dispara.

### S21 — `</A CADEIA COMPLETA>` (pós-demo 2)
Frase-âncora: **"A SAÍDA DO MODELO NÃO É TEXTO INOCENTE."**
1. **Improper output handling** — LLM05 do OWASP.
2. HTML sem escape → XSS. Comando sem sanitização → execução.
3. Injeção (LLM01) + saída não tratada (LLM05) = a cadeia completa do dano — uma sem a
   outra não causa nada.
`ref: owasp.org/www-project-top-10-for-large-language-model-applications` ·
`ref: anthropic.com/engineering/how-we-contain-claude`
**Visual:** `[ PRINT: o alert() disparando no navegador, tela da própria demo ]`.
**Notas:** `[01:17–01:20]` "Um ataque de prompt injection sem output handling ruim no fim
da cadeia é só um texto estranho na tela. A Demo 2 é o que transforma isso em dano."

### S22 — `</MCP DE TERCEIROS>`
Frase-âncora: **"A FERRAMENTA PODE FUNCIONAR PERFEITAMENTE E AINDA ASSIM TE ATACAR."**
Aviso em destaque visual (caixa amarela): "A próxima demo é uma simulação segura, escrita
por nós. Nunca instale um MCP desconhecido sem ler a descrição completa de cada tool."
**Visual:** caixa de aviso amarela em destaque, ícone de alerta.
**Notas:** `[01:20–01:21]` Aviso em voz alta, antes de rodar qualquer coisa: "o que eu vou
instalar agora eu escrevi, local — não é pacote malicioso de verdade."

### S23 — `MÃO NA MASSA` — Demo 3 ao vivo: Supply Chain Simulado
Kicker `DEMO 3 · AO VIVO`.
**Visual:** terminal + MCP Inspector mostrando a descrição completa da tool — o recurso
visual é a própria demo.
**Notas:** `[01:21–01:27]` Roteiro completo em `ROTEIRO-FACILITADORA.md`, Demo 3. Instale
`conversor-moeda`, peça uma conversão (funciona certo), depois abra a descrição completa
no MCP Inspector e mostre a instrução escondida que lê o `.env` (chave falsa).

### S24 — `</TOOL POISONING>` (pós-demo 3)
Frase-âncora: **"A DESCRIÇÃO MENTE. O RESULTADO NÃO."**
1. Supply chain — LLM03 do OWASP.
2. "Shadowing": uma tool com descrição maliciosa manipula o uso de OUTRA tool legítima.
3. Pesquisa real: Invariant Labs, ataque de e-mail redirecionado via tool description.
4. Defesa: ler a descrição inteira antes de instalar, não só o nome.
`ref: invariantlabs.ai/blog/mcp-security-notification-tool-poisoning-attacks`
**Visual:** `[ PRINT: descrição da tool no MCP Inspector, trecho escondido destacado ]`.
**Notas:** `[01:27–01:30]` "O conversor funciona. Isso é o ponto — um server malicioso bem
feito não tem motivo pra falhar na tarefa que promete."

### S25 — `</O QUE VOCÊ NÃO VAI FAZER HOJE>`
Frase-âncora: **"NÃO VAMOS VARRER OS 10 ITENS DO OWASP."**
1. Os outros 7 riscos (sensitive info disclosure, data poisoning, excessive agency,
   system prompt leakage, vector weaknesses, misinformation, unbounded consumption) ficam
   pra trilha assíncrona (ver `PACOTE.md`).
2. Hoje: profundidade em 3, não superfície em 10.
**Visual:** diagrama simples — 10 caixinhas numeradas LLM01–LLM10, 3 delas (01/03/05)
preenchidas em amarelo, as outras 7 em cinza.
**Notas:** `[01:30–01:31]` "As três que vocês viveram na pele hoje são as três mais
comuns contra agentes com tools. As outras sete não desaparecem — ficam pro material de
consulta."

### S26 — `</REFERÊNCIA: OWASP COMPLETO>`
Frase-âncora: **"OS OUTROS 7, PRA QUEM QUER IR MAIS LONGE."**
Slide de referência pura — só os links que saíram do síncrono de hoje:
`ref: owasp.org/www-project-top-10-for-large-language-model-applications` ·
`ref: owasp.org/www-project-top-10-for-large-language-model-applications/assets/PDF/OWASP-Top-10-for-LLMs-v2025.pdf`
**Visual:** ícone de link/bookmark do template — slide deliberadamente enxuto.
**Notas:** `[01:31–01:32]` Não lê os links em voz alta — só aponta: "isso fica projetado
um instante, tira foto quem quiser."

### S27 — `</LOG DE INJECTION BEM-SUCEDIDA>`
Frase-âncora: **"CADA CAMPO DO LOG PROVA UMA COISA DIFERENTE."**
1. **Payload exato** (colado, não parafraseado) — prova que é reproduzível, não
   "achismo".
2. **Vetor** (direta / indireta / tool poisoning) — prova que classe de ataque foi essa,
   não outra.
3. **Causa raiz** — prova que é uma falha técnica concreta (falta de validação, saída não
   sanitizada), não "a IA é burra".
4. **Severidade + risco OWASP correspondente** — prova o quanto isso importa e onde
   encaixa no vocabulário do time.
**Visual:** `[ PRINT: `starter/LOG-INJECTION-TEMPLATE.md` com as seções Metadados /
Payload / Vetor / Causa raiz / Severidade / Mitigação destacadas em cores diferentes ]`.
**Notas:** `[01:32–01:34]` "Vocês vão começar a preencher isso já no Lab 2. Copiem e colem
o payload no momento em que ele acontece — não escrevam de memória depois."

### S28 — `MÃO NA MASSA` — Lab 2 (25 min)
Frase-âncora: **"QUEBRE O SEU PRÓPRIO SERVER PRIMEIRO."**
Checklist: MCP Inspector → tentativa direta → tentativa indireta →
`LOG-INJECTION-TEMPLATE.md` começado.
`ref: github.com/modelcontextprotocol/inspector`
**Visual:** o checklist como elemento gráfico, igual ao S18.
**Notas:** `[01:34–01:55]` Circule perguntando "o que você já tentou que não funcionou?"
— resposta vaga ("tentei hackear") indica que ainda falta um payload concreto.

### S29 — `</ATIVIDADE DE FIXAÇÃO>`
Entregável: server funcional + log de injection no próprio server. Link do
`ENTREGAVEL.md` e do formulário único.
**Visual:** ícone de checklist final com os itens do `ENTREGAVEL.md` resumidos.
**Notas:** `[01:55–01:57]` Recapitule em uma frase por demo (injeção = instrução escondida
no dado; output handling = saída não tratada virando entrada; supply chain = a descrição
mente sobre o que a tool faz por trás).

### S30 — `</PRÓXIMOS PASSOS>`
Frase-âncora: **"AULA 2: VOCÊ ATACA O SERVER DO COLEGA."**
Pontos: dupla sorteada por domínio cruzado, traga `DECISAO-ESCOPO.md`, o log final é
sobre o **seu** server.
**Visual:** GIF sugerido — dois personagens/ícones se preparando pra um duelo amistoso
(humor leve, hype pra aula 2, sem violência gráfica).
**Notas:** `[01:57–02:00]` Fecha com a variação do fio condutor: "mão que abre porta pra
fora também abre porta pra dentro — na aula 2 é a mão do colega abrindo a de vocês."

---

## AULA 2 (só regras do jogo, sem conteúdo novo)

### A1. Capa
`SEMANA 4 · AULA 2 — RED TEAM EM DUPLAS`. Imagem: dois personagens/ícones "de frente um
pro outro" — humor leve, sem violência gráfica.

### A2. `</REGRAS DO JOGO>`
Sorteio de duplas cruzando domínio, o que o atacante recebe (server rodando + `/mcp` +
`DECISAO-ESCOPO.md` do alvo — **não** o código-fonte), duas rodadas de 40 min, log final
com o dono do código.

### A3. `</PLACAR>`
Elemento visual: quadro/placar em branco pra ir preenchendo ao vivo (não é slide de
conteúdo, é ferramenta de facilitação — deixe projetado a aula toda).

Nenhum outro slide — o resto da aula é o roteiro da facilitadora circulando, não conteúdo
projetado.
