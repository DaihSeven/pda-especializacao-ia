# Guia do aluno — Semana 3: AGENTS.md e skills

Este guia acompanha os slides da aula 5 e o lab guiado da aula 6. Quando aparecer
**MÃO NA MASSA**, é a sua vez. Terminal aberto do lado o tempo todo.

Travou? Manda o erro no chat, segue em dupla — a solução não pode esperar o fim da
aula.

---

## Antes da aula 5 (confira, não refaça)

```bash
cd <pasta-do-seu-projeto-proprio>
git status                 # devia estar limpo ou com mudanças que você reconhece
cat CLAUDE.md               # devia existir e não ter nenhum TODO
claude
```

Dentro do Claude Code:

```
/context
```

Anote o número que aparece pro seu `CLAUDE.md` (linhas e % da janela). Você vai comparar
com esse número várias vezes hoje.

---

## AULA 5 — LAB 1: Regra ou ruído? (15 min)

O objetivo aqui não é escrever uma regra qualquer. É provar, com um teste antes/depois,
que a regra muda o comportamento do agente. Se não muda, ela não entra.

### 1. Escolha um erro real

Abra o Mural da Alucinação da turma (ou a sua própria lista de "coisas que o agente já
fez errado no meu projeto"). Escolha **um** erro concreto — algo que aconteceu de
verdade, não uma preocupação hipotética.

Exemplos do tipo de erro que vale (não copie — use o seu):
- O agente inventou o nome de uma biblioteca que não existe.
- Ele editou um arquivo de teste pra fazer o teste passar.
- Ele usou `let` onde o resto do projeto usa `const`, ou `==` onde o projeto usa `===`.
- Ele assumiu um formato de resposta de API que não é o real.

### 2. Escreva a regra candidata

Uma frase, verificável, no mesmo padrão do `CLAUDE.md` que você já tem. Teste rápido
antes de escrever: **"se essa linha sumir, o agente volta a errar do mesmo jeito?"**
Se a resposta for "não teria diferença", a regra não vale a pena — é coisa que o agente
já faz certo sozinho, e cada linha aqui custa token em toda sessão.

> ref: <https://code.claude.com/docs/en/best-practices#write-an-effective-claude-md> —
> a tabela ✅ incluir / ❌ excluir e o teste "removeria isso causaria erro?" são de lá.

### 3. Teste causal — antes e depois

```
# sessão 1: SEM a regra nova (comente a linha ou use uma cópia do CLAUDE.md sem ela)
peça exatamente a mesma tarefa que gerou o erro original
```

Anote o que o agente faz.

```
# sessão 2: COM a regra nova no CLAUDE.md
/clear
peça exatamente a mesma tarefa de novo
```

Anote se o comportamento mudou de verdade. **Só commita a regra se mudou.**

### 4. Se não mudou

Duas saídas possíveis, e a escolha é sua:
- **Descartar.** Não virou regra por bom motivo — não valia o token.
- **Virar skill, não regra.** Se o que você queria é um procedimento que só importa
  às vezes (não em toda sessão), isso é o assunto do Lab 2. Regra é o que precisa estar
  sempre lá. Skill é o que só precisa estar lá quando você for usar.

---

## AULA 5 — LAB 2: Sua primeira skill com progressive disclosure (25 min)

### 1. Escolha algo que você repete

Não é sobre a tarefa mais impressionante — é sobre a que você já fez mais de duas vezes
do mesmo jeito. Ideias por domínio (adapte pro seu projeto):

| domínio do catálogo | exemplo de skill |
|---|---|
| Listagem de perfis de alunos | gerar um card de perfil a partir de um briefing em texto solto |
| Captação de clientes / automações freelancer | montar uma proposta comercial a partir de 3 perguntas |
| Quiz conectado ao Claude | gerar uma nova pergunta no formato exato do seu schema |
| Avaliação automatizada de projetos | aplicar uma rubrica fixa a um repositório e devolver notas |
| Agente de revisão de código da PDA | comentar um PR no tom e nas regras do curso |
| Problema real da ONG | gerar um rascunho de e-mail ou relatório no tom institucional |
| Domínio próprio | qualquer tarefa do seu negócio que você já fez do mesmo jeito 2+ vezes |

### 2. Copie o esqueleto

```bash
mkdir -p .claude/skills/<seu-nome-de-skill>
cp starter/skill-skeleton/SKILL.md .claude/skills/<seu-nome-de-skill>/SKILL.md
cp starter/skill-skeleton/reference.md .claude/skills/<seu-nome-de-skill>/reference.md
```

Abra `SKILL.md` e complete os `TODO`. Preste atenção especial no `description`: é o
campo que faz o Claude decidir sozinho quando invocar a skill. Siga o padrão
`[o que faz]. Use quando [gatilho específico].` — vago demais e ela não dispara nunca
ou dispara sempre (falso positivo).

> ref: <https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices>
> — exemplos de description boa e ruim são de lá.

### 3. Force a progressive disclosure

Regra prática: se um pedaço do conteúdo só faz sentido **depois** que a skill já foi
invocada (um exemplo longo, um checklist grande, o formato exato de uma saída), ele vai
pro `reference.md`, não pro `SKILL.md`. O `SKILL.md` fica com o "o quê" e o "quando";
o `reference.md` fica com o "como, em detalhe".

### 4. Meça o contexto, antes e depois

```
/context
```

Anote o número. Agora invoque a skill:

```
/<seu-nome-de-skill>
```

```
/context
```

Anote de novo. **A diferença entre os dois números é a prova de que progressive
disclosure funciona** — o `reference.md` só entrou na janela quando você invocou, não
antes.

### 5. Rode uma vez de verdade

Use a skill numa tarefa real do seu projeto. Ela dispara? O resultado é o que você
esperava? Guarde esse primeiro teste — ele volta na aula 6.

---

## AULA 6 — Lab guiado paralelo (120 min, checkpoint a cada 20 min)

A facilitadora escreve a skill dela ao vivo, do zero. Você não copia — você constrói a
sua em paralelo, no seu projeto, no mesmo ritmo. Cada checkpoint é um ponto de sincronia:
a aula só avança quando a maioria confirmar.

**Antes de começar:** confira que você fez o Lab 1 e o Lab 2 da aula 5. Sem isso, você
não tem uma skill pra evoluir hoje.

### Pareamento (anunciado no início da aula 6)

A facilitadora sorteia as duplas publicamente, no início da aula. Regra do sorteio:
sempre que der, você é pareado com alguém de um **domínio diferente** do catálogo — é
o teste mais difícil pra uma `description`: se a sua skill só faz sentido pra quem já
conhece o seu projeto, ela está mal escrita.

- **Faltou um aluno?** Ele fica marcado num "banco de reposição" e faz a validação
  cruzada de forma assíncrona, antes do prazo do entregável, com um colega indicado
  pela facilitadora depois da aula.
- **Dois alunos faltaram?** Eles se validam mutuamente depois, de forma assíncrona.
- **Número ímpar de alunos presentes?** Forma-se um trio: A valida a skill de B, B
  valida a de C, C valida a de A. Ninguém fica sem validar e sem ser validado.

### Checkpoint 1 — min 20

`SKILL.md` com frontmatter válido: `name` e `description` preenchidos,
`allowed-tools` restrito ao mínimo que a skill precisa (não `*`, não "todas"). Confirme
no chat com ✅.

### Checkpoint 2 — min 40

Pelo menos um passo do procedimento decidido e, quando fizer sentido, um `reference.md`
separado. Se você decidiu que **nada** vai pra reference.md, tem que saber dizer por
quê — isso também é uma decisão válida, não um requisito automático.

### Checkpoint 3 — min 60

A skill dispara pelo menos uma vez, com sucesso, numa tarefa real do seu projeto — não
um teste de brinquedo.

### Checkpoint 4 — min 80

Você rodou pelo menos um ajuste na `description` a partir do que observou no
checkpoint 3 (ela disparou tarde? cedo demais? não disparou?). Registre o antes/depois
da description.

### Checkpoint 5 — min 100 (o cruzado)

Troque a skill com a sua dupla (copie a pasta `.claude/skills/<nome>/` inteira — não
o repositório inteiro). Rode, no repositório do colega, **um** dos três cenários do
`starter/relatorio-validacao/TEMPLATE.md`. Anote o resultado bruto (comando + o que
aconteceu) — o relatório completo com os três cenários é parte do entregável
assíncrono, não precisa fechar hoje.

### Fechamento — min 100 a 120

Recap: o que falta pro entregável (completar os três cenários formalmente, escrever o
parágrafo pro dono do negócio), prazo, dúvidas.

---

## Checklist de saída da semana

- [ ] `CLAUDE.md` do seu projeto tem pelo menos uma regra nova nascida de um erro real,
      testada antes/depois.
- [ ] `.claude/skills/<nome>/SKILL.md` com frontmatter completo e `reference.md`
      separado (ou justificativa escrita de por que não precisa de um).
- [ ] Print ou trecho de `/context` mostrando a diferença de tokens antes/depois de
      invocar a skill.
- [ ] Pelo menos um cenário de validação cruzada rodado na skill do colega, anotado.
- [ ] Commit feito, com `CLAUDE.md` e a skill dentro do repositório do seu projeto.

---

## Se algo deu errado

| sintoma | tenta isso |
|---|---|
| `/context` não existe ou dá erro | atualize o Claude Code (`claude update` ou reinstale pelo instalador da aula 1); confirme com `claude --version` |
| a skill não aparece em `/context` nem dispara sozinha | confira o caminho: tem que ser `.claude/skills/<nome>/SKILL.md`, dentro da raiz do seu projeto (ou de uma pasta acima dele) |
| a skill dispara em tarefas que não têm nada a ver | a `description` está genérica demais — reescreva com o padrão "o que faz + quando usar", com termos-chave específicos do seu domínio |
| a skill nunca dispara sozinha, só com `/nome` | normal se você marcou `disable-model-invocation: true` de propósito; se não marcou, o `description` provavelmente está vago |
| `allowed-tools` bloqueia a skill toda hora | ela está pedindo mais ferramenta do que você liberou — decida se a ferramenta é mesmo necessária antes de simplesmente liberar tudo |
| criei `AGENTS.md` mas o Claude Code não usa | ele não lê `AGENTS.md` direto — crie `CLAUDE.md` com `@AGENTS.md` na primeira linha, ou `ln -s AGENTS.md CLAUDE.md` (no Windows sem WSL, use o import, não o symlink — symlink pede administrador) |
| Windows: `ln -s` não funciona | rode o Git Bash ou PowerShell como Administrador, ou simplesmente use o import `@AGENTS.md` em vez do symlink — funciona igual e não pede privilégio nenhum |
| meu par faltou e não sei quem valida minha skill | fala com a facilitadora depois da aula — você entra no banco de reposição, não fica sem validação |
| `/context` mostra número diferente do esperado depois do `/clear` | esperado — `/clear` reseta a conversa, mas o `CLAUDE.md` do projeto recarrega sozinho na próxima leitura |
