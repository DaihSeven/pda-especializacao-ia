# TASKS-TEMPLATE.md — molde de task atômica com gate

O Spec Kit gera `tasks.md` com descrição + checkbox. Isso não é gate — é lembrete. Para
cada task que você vai de fato executar hoje, copie o bloco abaixo e preencha as 5
perguntas. Se você não consegue responder a pergunta 3 (o gate), a task ainda não está
pronta pra ir pro agente — volte e corte ela menor, ou torne o critério mais concreto.

```markdown
## Task <ID do tasks.md, ex.: T004>

**1. O quê** (uma frase, sem "melhorar", "otimizar", "deixar mais robusto" — verbos que
não descrevem um resultado checável):


**2. De onde vem** (qual critério EARS ou qual dos 3 cenários BDD do seu documento RPI da
semana 6 esta task atende — cite o número):


**3. Gate** (o comando EXATO que roda e responde sim/não; se não existe um comando assim,
volte pra pergunta 1):

```bash

```

**4. Critério de aceite além do gate** (o gate técnico pode passar e a task ainda trazer
bloat — cite pelo menos um item do checklist de código ruim gerado por IA da semana 5,
`aula9-engenharia-para-ia`, que você vai checar manualmente mesmo com o gate verde):


**5. Se falhar 3x seguidas** (o que você reescreve primeiro: a task, o gate, ou volta pra
spec? decida ANTES de rodar a 1ª tentativa, não depois de travar):

```

---

## Exemplo preenchido (domínio 1 — Listagem de perfis de alunos da PDA)

```markdown
## Task T004

**1. O quê**: endpoint GET /perfis?habilidade=<termo> retorna somente perfis cujo campo
`skills` contém o termo (case-insensitive); termo sem correspondência retorna array
vazio; sem parâmetro retorna todos os perfis.

**2. De onde vem**: critério EARS #2 do RPI ("Quando um visitante busca por uma
habilidade, o sistema deve exibir somente os perfis correspondentes") + cenário BDD #1.

**3. Gate**:

```bash
npm test -- perfis.filtro.test.js
```
(4 casos: habilidade com 1 resultado, habilidade com múltiplos resultados, habilidade
inexistente → array vazio sem erro, parâmetro ausente → todos os perfis)

**4. Critério de aceite além do gate**: nenhuma duplicação de lógica de filtro — se já
existe uma função de busca/filtro em outro lugar do projeto, esta task reusa, não
reescreve do zero (item do checklist da semana 5 sobre duplicação/código órfão).

**5. Se falhar 3x seguidas**: primeiro suspeito é o gate — "case-insensitive" pode estar
ambíguo (acento? maiúscula em `React` vs `react`?). Reescrevo o gate especificando os
acentos antes de suspeitar do agente.
```

Veja mais exemplos, incluindo tasks **fracas** para comparar, em
`TASK-FRACA-VS-FORTE.md`.
