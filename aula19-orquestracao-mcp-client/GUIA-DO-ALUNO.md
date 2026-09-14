# Guia do aluno — Semana 10: Orquestração, paralelismo e o MCP client próprio

Este guia acompanha os slides das duas aulas. Quando aparecer **MÃO NA MASSA** na tela, é
a sua vez: abra a seção correspondente aqui e faça junto.

Regra de sempre: terminal aberto do lado. Travou? Manda o erro no chat, segue em dupla.

---

## Terminal: qual usar

Mesma tabela de sempre — se você já resolveu isso nas semanas anteriores, pule.

| opção | já vem pronto no Windows? | roda os comandos deste guia sem adaptar? |
|---|---|---|
| **Git Bash** — recomendado | não — instala com o [Git para Windows](https://git-scm.com/download/win) | sim |
| **WSL (Ubuntu)** | não — `wsl --install` no PowerShell como admin | sim |
| **PowerShell** | sim | parcial — `node`, `npm`, `git`, `claude` funcionam; `git worktree` funciona igual, mas comandos com `curl \| bash` não |
| **CMD** | sim | evite |

Mac e Linux: terminal de sempre.

---

## Antes da aula (pré-requisito de entrada no lab)

1. **Bloco da Alura desta semana concluído** — ver `PACOTE.md` para o mapeamento exato.
   Sem isso você não tem vocabulário de orquestração pra acompanhar, e atrapalha sua
   dupla/trio no speedrun.
2. Confirme as ferramentas:

   ```bash
   node -v          # 20 ou maior (o SDK do MCP client exige isso)
   npm -v
   git --version
   claude --version
   ```

3. Puxe as atualizações do repo e entre na pasta da aula:

   ```bash
   cd pda-especializacao-ia
   git pull
   cd aula19-orquestracao-mcp-client
   ```

4. **Traga o MCP server da semana 4 buildado e funcionando.** Se você não lembra onde
   ficou:

   ```bash
   cd ../aula7-mcp-server/meu-mcp-server   # ou o caminho onde você o criou
   npm run build
   node build/index.js                     # roda sem erro e sem sair sozinho? bom sinal, Ctrl+C pra fechar
   ```

   Se o seu server da semana 4 sumiu ou nunca terminou de funcionar, avise antes da aula —
   você vai precisar dele hoje, e "meu server não existe" não é um problema pra resolver
   nos 25 minutos do Lab 2.

---

## LAB 1 — Worktrees na prática (15 min)

Objetivo: sair com dois worktrees reais do seu próprio projeto (o do catálogo da semana
2), rodando ao mesmo tempo sem se atropelar.

### 1. Confirme que seu projeto está limpo

```bash
cd meu-projeto-pda
git status     # sem mudanças pendentes — se tiver, faça commit ou stash antes
```

### 2. Crie dois worktrees

```bash
git worktree add ../meu-projeto-tarefa-a -b tarefa-a
git worktree add ../meu-projeto-tarefa-b -b tarefa-b
git worktree list
```

Você deve ver três linhas: a pasta original (na branch principal) e as duas novas, cada
uma na própria branch.

### 3. Rode um agente em cada, ao mesmo tempo

Abra dois terminais. Em cada um:

```bash
cd ../meu-projeto-tarefa-a   # ou -b no outro terminal
claude
```

Peça pra cada sessão fazer uma mudança pequena e **em arquivos diferentes** — por
exemplo, "adicione um comentário explicando o que este arquivo faz" em dois arquivos que
você escolher agora, um pra cada worktree. O ponto do lab não é a mudança em si, é ver as
duas sessões rodando sem uma esperar a outra.

### 4. Confirme o isolamento

Nos dois terminais, rode `git status` — cada um só vê a própria mudança. Isso é
isolamento de sistema de arquivos, não de contexto: se você abrisse um subagente dentro
de uma dessas sessões, ele teria seu próprio resumo de volta, mas continuaria escrevendo
nos mesmos arquivos do worktree onde nasceu.

**Checkpoint do Lab 1:** `git worktree list` mostra 3 entradas, as duas mudanças existem
cada uma no seu worktree, e você consegue explicar em voz alta a diferença entre o que
acabou de fazer (isolamento de arquivo) e o que fez na semana 9 com subagentes
(isolamento de contexto).

### 5. Limpe antes de seguir

```bash
git worktree remove ../meu-projeto-tarefa-a
git worktree remove ../meu-projeto-tarefa-b
```

(Se reclamar de mudanças não commitadas, `git add -A && git commit -m "wip: lab 1"` antes
de remover, ou perca de propósito — a sua escolha.)

---

## Acompanhando as demos (teoria + demo ao vivo)

Você não precisa reproduzir a demo de conflito de merge no seu terminal — a facilitadora
roda ao vivo. Sua tarefa é anotar, numa frase: **o que ela tentou paralelizar, o que
quebrou, e em que arquivo.** Você vai reconhecer esse padrão no seu próprio speedrun da
aula 2.

---

## LAB 2 — Seu MCP client próprio, sem LLM (25 min)

Objetivo: um cliente MCP que conecta no **seu** server da semana 4, lista as tools dele,
chama uma, e imprime o resultado. Nenhuma linha aqui chama um modelo.

### 1. Copie o esqueleto

```bash
cp -r starter/mcp-client-starter meu-mcp-client
cd meu-mcp-client
npm install
```

### 2. Abra `src/index.ts`

Tem 5 TODOs comentados, na ordem que você implementa:

1. Criar o `Client`.
2. Criar o transporte stdio e conectar (`client.connect(transport)`).
3. Listar as tools (`client.listTools()`).
4. Chamar uma tool sua com argumentos fixos (`client.callTool(...)`).
5. Fechar a conexão (`client.close()`).

O pacote certo é `@modelcontextprotocol/client` — **não** `@modelcontextprotocol/sdk`
(nome antigo) e **não** `@modelcontextprotocol/server` (esse é o pacote do lado servidor,
que você já usou na semana 4). Confirmado no registro oficial do npm nesta semana: os
dois pacotes existem separados, na versão 2.0.0, no mesmo repositório do SDK oficial. Ver
`REFERENCIAS.md`.

### 3. Rode

```bash
npm run build
node build/index.js /caminho/para/o/build/index.js/do/SEU/server-da-semana-4
```

Use caminho absoluto se dois níveis de `../../` te confundirem.

### 4. O que "pronto" parece

O terminal imprime a lista de tools do seu server (não do `ping` de exemplo do template —
do server real que você construiu) e, embaixo, o resultado (sucesso ou erro do protocolo)
de uma chamada real a uma delas.

**O ponto onde seu julgamento é insubstituível:** se o `connect` travar ou o resultado vier
com `isError: true`, ninguém vai traduzir isso pra você em português — não tem LLM no
meio ainda. Você lê a mensagem crua do protocolo (Node, JSON, stack trace) e decide: é o
caminho errado? Esqueceu o `npm run build` do server? O schema da tool não bate com o
argumento que você mandou? Essa leitura é o exercício, não um efeito colateral dele.

**Checkpoint do Lab 2:** `npm run build` sem erro, lista de tools do seu server aparece,
e uma chamada real devolve um resultado — sucesso ou erro, contanto que você saiba
explicar qual dos dois foi e por quê.

---

## Se algo deu errado

| sintoma | tenta isso |
|---|---|
| `git worktree add` recusa, dizendo que a branch já está em uso | outra pasta já tem essa branch checked out — escolha outro nome de branch, ou remova o worktree antigo primeiro |
| `Cannot find module '@modelcontextprotocol/client'` | rode `npm install` de novo dentro da pasta do `meu-mcp-client` |
| `Cannot find module '@modelcontextprotocol/client/stdio'` | confira o `import` — o subcaminho é `/stdio`, não `/stdio.js` nem `/transport` |
| `connect` nunca resolve, cliente trava | o server não terminou o handshake — confirme que você rodou `npm run build` no server DEPOIS da última mudança nele |
| erro `ENOENT` apontando pro caminho do server | caminho relativo errado — use caminho absoluto |
| `listTools()` devolve lista vazia | o server conectou mas não registrou nenhuma tool — volte no código do server da semana 4 e confira o `registerTool` |
| `callTool` devolve `isError: true` | não é bug do cliente — é a SUA tool dizendo que o que você mandou não serve. Leia o `content` da resposta, ele geralmente diz o quê |
| Windows: `git worktree add` cria a pasta mas o Claude Code não abre nela | confirme que você deu `cd` pra dentro da nova pasta antes de rodar `claude` — sessões diferentes de worktree são pastas diferentes, não uma flag |
| build do TypeScript quebra com erro de tipo | leia a mensagem — geralmente é o tipo do argumento de `callTool` não batendo com o schema da tool; não é bug do SDK |

---

## AULA 2 — Speedrun cronometrado: como o jogo funciona

### O que você traz pronto

- Seu `meu-mcp-client` do Lab 2, rodando.
- Terminal com `git worktree` testado (Lab 1) — você vai usar de verdade agora, se seu
  time decidir paralelizar.
- Nada do seu projeto pessoal. O speedrun roda num repo à parte
  (`starter/speedrun-repo/`), igual pra todo mundo — assim ninguém começa em vantagem ou
  desvantagem por causa do próprio domínio.

### As 3 tarefas

Descritas em `starter/speedrun-repo/TASKS.md`. Resumo: três funções pequenas, cada uma
com teste próprio. **Antes do cronômetro começar**, sua tarefa é ler as três e decidir se
dá pra rodar em paralelo ou não — algumas tocam o mesmo arquivo, e isso não é acidente.

### Como os times se formam

Sorteio por trios — mesma mecânica que você já viu no red team da semana 4 e da semana 9,
com uma diferença: como o repo do speedrun não é do projeto de ninguém, o sorteio desta
vez não tenta equilibrar por domínio do catálogo. É puramente aleatório.

### A régua do cronômetro

1. **Antes de rodar (10 min):** leiam as 3 tarefas, decidam a divisão, apostem um tempo.
   Escrevam isso na seção 1 do `LOG-SESSAO-PARALELA-TEMPLATE.md` — esse registro vale
   nota tanto quanto o código funcionando.
2. **Speedrun (40 min cronometrados):** executem a divisão que escolheram. Podem trocar
   de estratégia no meio — se trocarem, anotem por quê no log.
3. **Integração (dentro dos 40 min, não depois):** se paralelizaram, o relógio só para
   quando o merge das branches estiver feito e `npm test` fechar 100% verde.
4. **Pós-morte coletivo (o resto da aula):** cada time apresenta os números do próprio
   log — não é sobre quem foi mais rápido, é sobre o que o número ensina.

### O placar não é só velocidade

Se fosse só velocidade, a lição que ficaria seria "sempre paralelize", e isso é falso na
maioria dos casos reais. O placar pesa: **os testes ficarem verdes de verdade** (não
"quase"), **a precisão da aposta que vocês fizeram antes de começar** (saber prever
quanto custa coordenar é a habilidade, não só executar rápido), e **a qualidade da
análise no pós-morte**. Velocidade pura entra, mas é a menor fatia da nota. Detalhe
completo dos pesos: `ROTEIRO-FACILITADORA.md` (facilitadora) — você só precisa saber que
"terminamos rápido mas erramos a aposta" pontua pior que "terminamos mais devagar, mas
previmos certo e entendemos por quê".

### Se travar

Ninguém termina a aula com nota zero por causa do cronômetro. Se sua dupla/trio estiver
travado na metade do tempo, a facilitadora vai oferecer uma pista (não a solução
completa) — pedir ajuda nesse momento não tira ponto, é parte do jogo. O que conta pra
valer é o log preenchido com honestidade, mesmo que o código não feche 100%.

### O entregável que sai disso

`DOC-AGENTE-UNICO-TEMPLATE.md`, preenchido com os números do seu log — não de memória.
Detalhes e rubrica completos em `ENTREGAVEL.md`.
