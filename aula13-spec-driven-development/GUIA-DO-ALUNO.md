# Guia do aluno — Semana 7: Spec-Driven Development

Este guia acompanha os slides das duas aulas. Quando aparecer **MÃO NA MASSA** na tela, é
a sua vez: abra a seção correspondente aqui e faça junto.

Regra: terminal aberto do lado, projeto seu aberto do lado, o documento RPI da semana 6
(`aula11-diagnostico-documentos-rpi`) aberto numa aba. Travou? Manda o erro no chat, segue
em dupla.

---

## Terminal: qual usar

Mesma recomendação de sempre — se você já tem o Git Bash configurado, está pronto.

| opção | já vem pronto no Windows? | roda os comandos deste guia sem adaptar? |
|---|---|---|
| **Git Bash** — recomendado | não — instala com o [Git para Windows](https://git-scm.com/download/win) | sim |
| **WSL (Ubuntu)** | não — `wsl --install` como admin | sim |
| **PowerShell** | sim | parcial — troque o comando `curl \| sh` do `uv` pelo bloco marcado "Windows (PowerShell)" |
| **CMD** | sim | evite |

Mac e Linux: terminal de sempre.

---

## Antes da aula (pré-requisito de entrada no lab)

1. **Bloco "Spec-Driven Development" da Alura concluído.**
2. **O documento RPI da semana 6 em mãos** — arquivo único da semana 6 com os 5 critérios
   em EARS e os 3 cenários em BDD do seu projeto. Sem ele você não tem o que dar de
   entrada pro Spec Kit hoje.
3. Confirme as ferramentas de sempre:

   ```bash
   node -v          # 18 ou maior
   git --version
   claude --version
   ```

4. **Instale o `uv`** (gerenciador de pacotes Python — é a única forma oficial de instalar
   o Spec Kit hoje; você não vai escrever Python, só usar o binário):

   **macOS, Linux, Git Bash ou WSL**

   ```bash
   curl -LsSf https://astral.sh/uv/install.sh | sh
   ```

   **Windows (PowerShell)** — só se você não está no Git Bash nem no WSL

   ```powershell
   powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"
   ```

   Confirme: `uv --version`. Feche e reabra o terminal se der `command not found`.

5. **Instale o Specify CLI:**

   ```bash
   uv tool install specify-cli --from git+https://github.com/github/spec-kit.git
   specify version
   ```

   Documentação oficial se algo sair diferente: <https://github.github.com/spec-kit/installation>

6. Puxe as atualizações do repo e entre na pasta da aula:

   ```bash
   cd pda-especializacao-ia
   git pull
   cd aula13-spec-driven-development
   ```

---

## LAB 1 — Da spec ao plano (15 min)

### 1. Inicialize o Spec Kit dentro do seu projeto

Na pasta do **seu** projeto (o repo próprio criado na semana 2 — não nesta pasta do
curso):

```bash
specify init --here --ai claude
```

(`--here` usa a pasta atual em vez de criar uma nova; `--ai claude` gera os comandos como
slash-commands do Claude Code em `.claude/commands/`.)

### 2. `/speckit.constitution` — os princípios do seu projeto (3 min)

Dentro do Claude Code (`claude`, na pasta do seu projeto):

```
/speckit.constitution Baseado no meu documento RPI da semana 6: [cole aqui as 2-3 regras
não-negociáveis do seu domínio — ex.: "todo dado de aluno é tratado como sensível",
"nenhuma automação envia mensagem sem confirmação humana"]
```

Isso gera `memory/constitution.md`. Não é o entregável de hoje — é o contrato que toda
fase seguinte respeita.

### 3. `/speckit.specify` — cole o seu RPI (7 min)

```
/speckit.specify [cole o conteúdo do seu documento RPI da semana 6 — os 5 critérios EARS
e os 3 cenários BDD]
```

O Spec Kit vai gerar `specs/.../spec.md` reorganizando o que você colou no formato dele.
**Leia o resultado.** Ele preservou os 5 critérios? Os 3 cenários viraram alguma seção
identificável? Se o Spec Kit "traduziu" alguma coisa errado, é aqui que você corrige —
antes de continuar, não depois.

### 4. `/speckit.plan` — comece, sem terminar (5 min restantes)

```
/speckit.plan [descreva em 1-2 frases a stack do seu projeto — a mesma que você já usa
desde a semana 2]
```

Se não terminar antes do fim do bloco, tudo bem — a teoria + demo 2 continua com o Spec
Kit rodando em paralelo na tela da facilitadora. Retome no Lab 2.

**Checkpoint do Lab 1:** `memory/constitution.md` existe, `specs/.../spec.md` existe e
você já leu, `/speckit.plan` rodando ou rodado.

---

## Acompanhando a Demo 2 (teoria)

A facilitadora vai rodar `/speckit.tasks` num projeto de exemplo e mostrar o `tasks.md`
gerado. Preste atenção numa coisa específica: **cada task tem um checkbox e um número
(`T001`, `T002`...), mas o critério de "pronto" só aparece no Checkpoint, no final de cada
bloco de tasks — não em cada task individual.** É exatamente esse buraco que o Lab 2 pede
que você feche.

---

## LAB 2 — Tasks atômicas com gate + primeira execução (25 min)

### 1. Rode `/speckit.tasks`

```
/speckit.tasks
```

Gera `specs/.../tasks.md`. Abra o arquivo.

### 2. Escolha 3 tasks e reescreva com gate

Abra `starter/TASKS-TEMPLATE.md` — é o molde que transforma uma task do Spec Kit (que só
tem descrição + checkbox) numa task atômica de verdade. Para cada uma das 3 tasks
escolhidas, preencha:

- **O quê** (copiado/ajustado do `tasks.md` gerado)
- **Gate** — o comando exato que roda e responde sim/não. Se sua task envolve código,
  isso é um teste (`npm test -- <arquivo>`). Se envolve automação/agente, pode ser uma
  chamada com entrada fixa e saída esperada comparada.
- **Critério de aceite além do gate** — o checklist de sinais de código ruim gerado por
  IA da semana 5 (`aula9-engenharia-para-ia`, ver `PACOTE.md` desta semana se quiser o
  nome exato): o gate passar não basta se a task também trouxe bloat que o checklist
  pegaria.

Veja `starter/TASK-FRACA-VS-FORTE.md` para exemplos lado a lado no seu domínio antes de
escrever a sua.

### 3. Execute a primeira task com o gate escrito ANTES de rodar o agente

```
/speckit.implement
```

(ou peça diretamente: "implemente a task T00X do tasks.md, o critério de pronto é o gate
que está em TASKS-TEMPLATE.md para essa task, não pare até ele passar ou até 3
tentativas")

Assim que o agente disser que terminou, **você** roda o gate — não ele relatando que
rodou. Anote o resultado.

### 4. Registre na planilha de taxa de acerto

Abra `starter/REGISTRO-TAXA-DE-ACERTO.csv` (instruções de preenchimento em
`starter/REGISTRO-TAXA-DE-ACERTO.md` — leia antes, tem uma regra anti-trapaça). Para cada
uma das 3 tasks, registre: passou na 1ª tentativa? Quantas tentativas até passar (ou até
você desistir e reescrever a task)? Se falhou, por quê (spec ambígua / task não atômica /
gate mal escrito / agente errou mesmo)?

**Checkpoint do Lab 2:** 3 tasks reescritas com gate em `TASKS-TEMPLATE.md`, pelo menos 1
executada e registrada na planilha, `tasks.md` e `constitution.md` commitados.

```bash
git add -A
git commit -m "feat: spec-driven setup + 3 tasks com gate + registro de taxa de acerto"
git push
```

---

## AULA 2 — Clínica rotativa: o que você faz

A facilitadora **não constrói hoje**. Você constrói a aula inteira, executando as tasks
que sobraram do Lab 2 e novas que você extrair do seu `tasks.md`. A cada 15 minutos, ela
para a turma inteira e projeta o problema de **uma pessoa** — não pra envergonhar, pra
todo mundo aprender com o erro de um só.

### Como você entra na fila de quem é projetado

Quando travar de verdade (task falhou 2+ vezes e você não sabe por quê), registre no
board compartilhado da sala: seu nome + uma frase do sintoma (ex.: "gate falha sempre no
mesmo assert, não sei se é a task ou o meu gate"). A fila é por ordem de chegada, mas a
facilitadora pode pular um caso pra frente se ele repetir um problema que a turma já viu —
o objetivo é variedade de aprendizado, não só velocidade de fila.

### O que você faz enquanto NÃO é a sua vez (não é assistir)

Toda rodada de clínica tem uma tarefa fixa pra quem está assistindo, no chat/board:

1. **Antes** da facilitadora dizer o diagnóstico: escreva sua aposta — o problema é
   **(a)** task mal cortada, **(b)** spec ambígua, **(c)** gate mal escrito, ou **(d)**
   erro genuíno do agente. Tem placar coletivo de acerto.
2. **Depois** do diagnóstico: audite o **seu próprio** `tasks.md` por 2 minutos
   procurando o mesmo padrão de falha. Responda sim/não no chat: "eu tenho esse problema
   também?" Se sim, essa é a próxima task que você conserta quando voltar a construir.

### A regra dos 3 strikes

Se a **mesma task** falhar no gate 3 vezes seguidas sem você mudar nada na task em si,
**pare de rodar o agente**. Reescreva a task (ou volte um passo e reescreva o trecho da
spec que ela veio). Rodar a 4ª tentativa idêntica não é debug, é esperar sorte — e é
exatamente esse ponto que a clínica rotativa está aqui pra pegar ao vivo.

---

## Se algo deu errado

| sintoma | tenta isso |
|---|---|
| `uv: command not found` | feche e reabra o terminal; confira se o instalador imprimiu uma linha pra adicionar ao PATH e rode-a manualmente |
| `specify: command not found` depois de instalar | rode `uv tool install specify-cli --from git+https://github.com/github/spec-kit.git` de novo; confirme com `uv tool list` |
| `/speckit.constitution` (ou outro comando) não aparece no Claude Code | confirme que rodou `specify init --here --ai claude` **dentro da pasta do seu projeto**, e que `.claude/commands/` existe; reabra o Claude Code |
| `/speckit.specify` "traduziu" seu RPI errado | não continue — edite `specs/.../spec.md` na mão antes de rodar `/speckit.plan`. O Spec Kit não sabe que você já tem uma spec revisada, ele só reformata o que você colou |
| task sem gate óbvio (ex.: tarefa de "automação") | o gate pode ser: rodar com uma entrada fixa e comparar a saída exata, não precisa ser `npm test`; veja o exemplo de automação em `TASK-FRACA-VS-FORTE.md` |
| `/speckit.implement` diz que terminou mas o gate falha | isso é o ponto da aula, não um bug: é exatamente por isso que você roda o gate você mesmo em vez de confiar no relato. Registre como tentativa falha e siga pra próxima |
| Windows: `curl \| sh` do `uv` não funciona | use o bloco "Windows (PowerShell)" acima |
| não sei se um "não passar" é a 1ª tentativa ou não | veja a regra em `starter/REGISTRO-TAXA-DE-ACERTO.md` — mudar o texto da task depois de ver falhar conta como task NOVA, não uma segunda chance da mesma linha |
