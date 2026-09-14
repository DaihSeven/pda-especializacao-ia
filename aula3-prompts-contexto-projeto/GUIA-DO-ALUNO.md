# Guia do aluno — Semana 2: Prompt, contexto e o nascimento do projeto

Este guia cobre as duas aulas. A aula 3 é curta em mão na massa (dois labs de 15 e 25
min); a aula 4 é lab do início ao fim — você constrói o projeto acompanhando a
facilitadora, checkpoint a cada 20 minutos.

Regra de sempre: terminal aberto do lado. Travou? Manda o erro no chat, segue em dupla.

---

## Terminal: qual usar (repete da aula 1, porque ainda importa)

| opção | o que é | já vem pronto no Windows? | roda os comandos deste guia sem adaptar? |
|---|---|---|---|
| **Git Bash** — recomendado | terminal bash que instala junto com o Git | não — instala junto do [Git para Windows](https://git-scm.com/download/win) | sim |
| **WSL (Ubuntu)** | Linux de verdade dentro do Windows | não — precisa instalar | sim |
| **PowerShell** | terminal padrão do Windows | sim | parcial — `node`, `npm`, `git`, `gh` e `claude` funcionam; `curl ... \| bash` não |
| **CMD** | terminal antigo do Windows | sim | evite |

Se você já resolveu isso na aula 1, siga com o mesmo terminal. Se não, abra o **Git Bash**
agora, antes da aula começar — não durante o lab.

---

## Alura desta semana (pré-requisito de entrada na aula 4)

Curso: **Context Engineering: otimização da janela de contexto de IAs** (Alura, 4h/35
atividades — [alura.com.br/curso-online-context-engineering-otimizacao-da-janela-de-contexto-de-ias](https://www.alura.com.br/curso-online-context-engineering-otimizacao-da-janela-de-contexto-de-ias)).

Faça entre a aula 3 e a aula 4. O curso cobre em profundidade quatro estratégias
(seleção, isolamento, escrita, compressão) que a gente só toca por cima no síncrono — a
aula 3 te dá o *porquê* isso importa (a demo), a Alura te dá o *como fazer em mais
situações*. Quem não fez esse bloco chega na aula 4 sem vocabulário pra acompanhar o
checkpoint 4 (escrever o `CLAUDE.md`) e trava a dupla.

Não achou o curso na sua conta? Avisa a facilitadora antes da aula 4 — não espera o dia.

---

## AULA 3 — Conceito + demo ao vivo

### O que você leva desta aula

1. Por que "faz um sistema de login" (ou qualquer prompt de uma linha) dá um resultado
   genérico — e o que fazer em vez disso: especificidade, exemplos, formato de saída.
2. Que a mesma pergunta, no mesmo modelo, piora de qualidade conforme a janela de
   contexto enche — e o `CLAUDE.md` como jeito de não perder o que importa entre sessões.

### LAB 1 — Reescreva o prompt (15 min)

A facilitadora já rodou, ao vivo, um prompt de uma linha (tipo "faz um sistema de
login") e mostrou o que voltou: uma escolha arbitrária de stack, nenhuma restrição
respeitada, e pelo menos uma invenção (uma lib que não existe ou uma decisão que ninguém
pediu). Isso é o **erro proposital** da demo — o objetivo era mostrar que resposta vaga
pra pergunta vaga não é o modelo "errando", é o modelo fazendo exatamente o que devia
fazer com a informação que tinha.

Agora é sua vez:

1. Pegue um prompt de uma linha que a facilitadora vai distribuir (ou use um seu, ligado
   ao domínio que você está considerando pra aula 4).
2. Rode ele exatamente como está no Claude Code. Anote o que voltou.
3. Reescreva aplicando os três controles que você acabou de ver na teoria:
   - **especificidade** — stack, restrições, o que NÃO fazer
   - **exemplo** — pelo menos um caso de entrada/saída concreto
   - **formato de saída** — diga a forma exata do que você quer de volta (lista de
     arquivos? um plano antes de criar? um trecho de código só?)
4. Rode a versão reescrita. Compare as duas respostas lado a lado.

**Onde seu julgamento entra:** o agente não sabe se a versão reescrita "resolveu certo" —
só quem conhece a intenção original sabe. Sua tarefa não termina em rodar o prompt novo;
termina em decidir, olhando a resposta, se ela captura o que você queria ou se ainda
faltou algo (e o quê).

Responda no chat da turma: o que mudou entre as duas respostas — foi só o código, ou
também a estrutura, os nomes, o que foi assumido?

### LAB 2 — Contexto sujo, contexto limpo (25 min)

Reabra o repositório da aula 1 (`pda-ia-aula1-fundamentos`) — ele já está no seu
computador e serve de playground de novo.

1. Abra uma sessão nova do Claude Code (`claude`) dentro da pasta. Rode `/context` e
   anote o percentual de uso — deve estar baixo (perto de 0%, sessão recém-aberta).
2. Peça uma tarefa pequena que dependa de uma regra específica, por exemplo:
   `adicione uma função utilitária nova em src/ pra formatar telefone. Toda função nova
   tem teste.` Confira: ele escreveu o teste?
3. **Sem fechar a sessão**, polua o contexto: peça pra ele ler e resumir 3-4 arquivos
   grandes e sem relação (pode ser qualquer coisa — um `package-lock.json`, um log
   comprido, um arquivo de outro projeto). Rode `/context` de novo e confira o
   percentual — deve ter subido bastante.
4. Na mesma sessão poluída, peça outra função utilitária pequena, parecida com a do passo
   2, sem repetir a regra do teste. Ele escreveu o teste dessa vez? Ele lembrou de algo
   que vocês combinaram antes?
5. Se ele esqueceu (é o esperado, é o ponto do exercício): abra o `CLAUDE.md` do projeto
   e escreva a regra lá dentro ("toda função nova em src/ tem teste em tests/"). Feche a
   sessão. Abra uma sessão **nova**. Peça uma terceira função parecida, sem repetir a
   regra em chat. Ele lembrou agora?

Anote no chat da turma: em que ponto (que percentual aproximado de `/context`) a resposta
começou a piorar pra você? Não precisa ser exato — o ponto do exercício é que você viu a
queda acontecer, não que você mediu um número oficial.

---

## AULA 4 — Lab guiado paralelo: nasce o seu projeto

Formato: a facilitadora constrói o dela na tela, você constrói a sua em paralelo, mesmo
ritmo. Checkpoint a cada ~20 minutos — a facilitadora não avança pro próximo até a
maioria confirmar o atual. **Não tem conteúdo novo nesta aula.** Se travar em algo
conceitual, é hora de voltar pra aula 3 ou pra Alura, não de a facilitadora explicar de
novo do zero.

### Antes de começar: escolha de domínio (até 10 minutos, sem exceção)

75 pessoas escolhendo domínio ao mesmo tempo trava se não tiver um critério. Use esta
única pergunta:

> **Você já tem um problema real — seu, de um cliente, ou da ONG — que consegue descrever
> em uma frase sem jargão técnico?**

- **Sim, e é seu ou de alguém que você atende** → domínio 7 (domínio próprio). Escreva a
  frase agora, antes de abrir o agente.
- **Sim, mas é da ONG ou de outra turma** → provavelmente domínio 6 — confirme com a
  facilitadora em 1 frase no chat.
- **Não tenho um problema próprio claro** → você tem até o minuto 8 pra escolher entre os
  domínios 1 a 5 olhando a lista. **Critério de desempate: qual desses te daria mais
  raiva de continuar mal resolvido depois de 12 semanas de trabalho seu em cima dele?**
  Esse é o que você escolhe.
- **Ainda não decidiu no minuto 8** → cai automaticamente no default: **domínio 3, Quiz
  conectado ao Claude.** É o mais simples de especificar bem no primeiro esqueleto e
  funciona pra qualquer nível de experiência. Ninguém fica sem projeto.

No minuto 10 a escolha trava. Mudar depois é caro (não impossível, mas você perde
trabalho) — decida com o critério, não com a paralisia.

### O contrato mínimo do esqueleto

Toda semana daqui pra frente vai construir em cima do que você gerar hoje. Pra isso
funcionar, o esqueleto que sai da aula 4 **tem** que ter, sem exceção de domínio:

- [ ] **Git inicializado**, com pelo menos 2 commits (não "um commit com tudo gerado de
      uma vez" — isso não mostra revisão, mostra vibe coding)
- [ ] **Repositório novo no GitHub, fora do fork do curso.** Este projeto é seu — ele
      sobrevive ao curso, não faz sentido morar dentro do repo de exercícios da PDA.
- [ ] **README.md** na raiz: o que é (a mesma frase de 1 linha do domínio), como rodar
      localmente, estrutura de pastas comentada
- [ ] **Separação clara entre código e teste** (o nome das pastas varia por stack, a
      separação não varia)
- [ ] **Um comando de teste que roda** — não precisa passar 100% ainda, mas não pode
      quebrar por erro de configuração. Documentado no README, copiável.
- [ ] **CLAUDE.md** na raiz, sem `TODO`, curto (mire embaixo de 40 linhas nesta fase),
      com stack, comandos, pelo menos 1 regra e a frase do problema
- [ ] **Pelo menos um artefato real** do seu domínio — não um "hello world" vazio. Uma
      rota, uma função, uma página, um schema — algo que já é o começo da coisa de
      verdade, não um placeholder

Se algum item não existir no seu repo no fim da aula, a atividade não está pronta pra
entrega — não é sobre estar bonito, é sobre estar completo o suficiente pra semana 3
construir em cima.

### Checkpoint 1 (20 min) — Especifique o esqueleto pro agente

Isso **não é** um `npx create-x`. Você não vai pedir pra facilitadora te dar um comando
que gera tudo sozinho. Você vai escrever a especificação, do jeito que praticou no Lab 1
da aula 3 (especificidade + exemplo + formato de saída), e o agente vai propor um plano
**antes** de criar qualquer arquivo.

Modelo de prompt (adapte pro seu domínio — não copie a frase entre `< >`):

```
Quero um esqueleto de projeto pra: <seu domínio em 1 frase, sem jargão>.

Restrições:
- <stack, se você já tem preferência; senão: "sugira 1 opção simples e me pergunta antes
  de instalar qualquer coisa">
- separação clara entre código e teste
- um comando de teste que rode desde o primeiro commit, mesmo que seja 1 teste trivial
- README com o que é, como rodar, estrutura comentada
- pelo menos 1 artefato real do domínio, não um placeholder vazio — exemplo do que esse
  artefato faz: <um exemplo concreto>

Antes de criar qualquer arquivo, me mostre o plano: árvore de pastas + lista de arquivos
+ por que essa estrutura. Eu confirmo antes de você seguir.
```

Rode. Leia o plano que voltou. **Não confirme automaticamente.**

### Checkpoint 2 (20 min) — Leia, rejeite, ajuste

Este é o ponto em que **o agente não resolve sozinho e ninguém resolve por você**: ele
não sabe se o plano que gerou serve pro problema real que você descreveu — ele otimiza
pra "parece um projeto bem estruturado", não pra "resolve o que a pessoa do seu domínio
precisa". Antes de deixar ele criar os arquivos, responda por escrito (num rascunho, não
precisa ser formal):

- Essa estrutura de pastas faz sentido pro MEU problema, ou é genérica demais /
  específica demais pra outra coisa?
- Ele escolheu uma stack que eu sei rodar, ou inventou algo que eu vou ter que aprender
  do zero hoje?
- O "artefato real" que ele propôs realmente é do meu domínio, ou é um placeholder
  disfarçado?

Ajuste o prompt e peça de novo se a resposta for "não" em qualquer um desses pontos.
Quando o plano fizer sentido, deixe ele criar os arquivos. Depois:

```bash
# o comando exato depende da stack que o agente escolheu — pergunte a ele
# "como eu instalo as dependências?" e "qual o comando de teste?" se não estiver óbvio
<comando de instalar dependências>
<comando de teste>        # tem que rodar sem erro de configuração
```

```bash
git init
git add -A
git commit -m "esqueleto inicial: <seu domínio>"
```

### Checkpoint 3 (20 min) — GitHub, README, e confere o contrato

1. Crie o repositório no GitHub (fora do fork do curso):
   ```bash
   gh repo create <nome-do-seu-projeto> --private --source=. --remote=origin --push
   ```
   Sem `gh` instalado? Crie pelo site do GitHub e depois:
   ```bash
   git remote add origin https://github.com/<seu-usuario>/<nome-do-seu-projeto>.git
   git branch -M main
   git push -u origin main
   ```
2. Abra o `README.md` gerado. Ele explica o que é, como rodar, e comenta a estrutura de
   pastas? Se não, peça pro agente completar — isso também é ajuste, não geração do zero.
3. Confira o **contrato mínimo do esqueleto** (seção acima) item por item. Marque o que
   já está pronto.

### Checkpoint 4 (20 min) — O primeiro CLAUDE.md

Copie `starter/CLAUDE.md.template` (desta pasta, `aula3-prompts-contexto-projeto/`) pra
raiz do SEU projeto novo, como `CLAUDE.md`. Preencha os `TODO`s — não peça pro agente
preencher tudo sozinho: a lista do que entra aqui é curadoria sua, não geração de texto.
Pode pedir ajuda pontual ("me lembra qual foi o comando de teste que a gente definiu"),
mas a decisão de o que é importante o suficiente pra entrar é sua.

Regra de tamanho: se passar de 40 linhas nesta fase, você está documentando algo que o
agente já descobre lendo o código. Corte.

Apague os comentários HTML e os `TODO`s restantes quando terminar.

### Checkpoint 5 (20 min) — Valide e escreva o parágrafo

1. Feche a sessão do Claude Code. Abra uma sessão nova dentro do seu projeto.
2. Pergunte: `o que você sabe sobre este projeto?` — a resposta tem que bater com o que
   está no seu `CLAUDE.md`, sem você ter repetido nada em chat.
3. Peça uma tarefa pequena que dependa de uma das suas regras (por exemplo, a regra de
   teste) e confirme que ele seguiu sem você lembrar.
4. Escreva o **parágrafo pro dono do negócio** (3 a 5 frases, sem jargão — veja o modelo
   pro domínio 1 na `ENTREGAVEL.md`). Escreva pensando numa pessoa específica que você
   conhece que não é da área — se ela não entenderia uma frase, reescreve.
5. `git add -A && git commit -m "CLAUDE.md + parágrafo pro dono do negócio"` e
   `git push`.

### Fechamento (5 min)

Confira o contrato mínimo do esqueleto uma última vez. O que faltar vira o primeiro item
da sua lista pessoal antes do prazo da `ENTREGAVEL.md`.

---

## Se algo deu errado

| sintoma | tenta isso |
|---|---|
| `/context` não existe ou não mostra nada | atualize o Claude Code (`claude update` ou reinstale); confirme que está dentro de uma sessão ativa (`claude` rodando) |
| o agente criou os arquivos sem esperar eu confirmar o plano | pare (`Esc` ou feche a sessão), volte o `git status`, apague o que não foi commitado, e repita o prompt sendo mais explícito: "não crie nada até eu confirmar" |
| `gh repo create` pede autenticação | rode `gh auth login` primeiro, escolha GitHub.com e o método por navegador |
| o comando de teste não roda | pergunte ao agente "por que esse comando não roda no meu terminal?" antes de tentar consertar sozinho — ele tem o contexto de como gerou o projeto |
| criei o projeto dentro do fork do curso por engano | mova a pasta pra fora antes de inicializar o `git` novo, ou copie os arquivos pra uma pasta nova fora do fork — não deixe os dois `git init` aninhados |
| `CLAUDE.md` ficou gigante (mais de 40 linhas) | releia cada linha perguntando "o agente descobriria isso sozinho lendo o código?" — se sim, corte |
| Windows: `gh` não é reconhecido | instale pelo [cli.github.com](https://cli.github.com/), reabra o terminal |
| perdi o commit inicial gerado pelo agente | normal se você rejeitou o primeiro plano — é o ponto do checkpoint 2. Só recomece o prompt mais específico, não tem problema gastar uma segunda rodada |
