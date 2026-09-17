# Guia do aluno — Semana 8: Verificadores

Este guia acompanha os slides das duas aulas. Quando aparecer **MÃO NA MASSA**
na tela, é a sua vez: abra a seção correspondente aqui e faça junto.

Regra: terminal aberto do lado, projeto da semana 2 aberto do lado. Travou?
Manda o erro no chat, segue em dupla.

---

## Terminal: qual usar

Mesma recomendação da aula 1 — Git Bash se você está no Windows e ainda não
resolveu isso. Ver a tabela completa em `_referencia-aula1/GUIA-DO-ALUNO.md`
se precisar relembrar.

---

## Antes da aula (pré-requisito de entrada no lab)

1. **Bloco da Alura desta semana concluído** (ver `PACOTE.md` para o
   mapeamento exato). Sem isso você não chega com vocabulário de CI/CD e
   atrapalha quem depende de você na clínica.
2. Confirme as ferramentas:

   ```bash
   node -v          # 18 ou maior
   npm -v
   git --version
   gh --version     # GitHub CLI — se não tiver, `npm install -g gh` ou veja cli.github.com
   ```

3. Tenha à mão o **repositório do seu projeto próprio** (criado na semana 2,
   separado do fork do curso) com acesso de push.
4. Puxe as atualizações do repo do curso:

   ```bash
   cd pda-especializacao-ia
   git pull
   cd aula15-verificadores
   ```

---

## LAB 1 — Os 4 sensores rodando local, antes de qualquer GitHub Actions (15 min)

**Objetivo do checkpoint:** `npm run verify` (ou o equivalente do seu
projeto) roda os 4 sensores em sequência e você vê, no seu terminal, cada um
passando ou falhando — antes de subir isso pra nuvem.

### 1. Confirme os 4 scripts no seu `package.json`

Abra `starter/ci-workflow/package.json.exemplo` como referência. Seu projeto
precisa ter `lint`, `typecheck`, `build` e `test` como scripts nomeados
exatamente assim (o CI da semana vai chamar esses nomes). Se algum não
existe:

- **Sem linter ainda?** `npm install -D eslint` e rode `npx eslint --init`
  (aceita as opções padrão pro seu stack).
- **Sem type check?** Confirme que tem `typescript` instalado e um
  `tsconfig.json` na raiz; o script é `tsc --noEmit`.
- **Sem build?** Se seu projeto não gera artefato separado (ex.: script
  Node puro sem bundler), o "build" pode ser `tsc` mesmo (compila
  TypeScript → JavaScript) — build não precisa ser complexo, precisa
  **existir e poder falhar**.
- **Sem teste?** Isso não devia acontecer — desde a semana 2 seu projeto
  tem "comando de teste que roda" como contrato mínimo. Se sumiu, é a
  primeira coisa a resolver, antes de tudo o resto desta semana.

### 2. Adicione o script agregador

No `package.json`, adicione:

```json
"scripts": {
  "verify": "npm run lint && npm run typecheck && npm run build && npm test"
}
```

### 3. Rode e leia a saída

```bash
npm run verify
```

**Checkpoint do Lab 1:** os 4 rodaram (nem que algum tenha falhado — o
objetivo aqui é os 4 *existirem e executarem*, não necessariamente estarem
todos verdes ainda). Se algum falhou, essa é literalmente a próxima coisa
que você corrige — não pule pro Lab 2 com um sensor quebrado.

---

## Acompanhando as demos (teoria + demo ao vivo)

Você não reproduz as demos no seu terminal — a facilitadora roda
`starter/demo-sem-verificador` e `starter/dependency-check` projetados na
tela. Sua tarefa: anotar, pra cada demo, em uma frase, **qual sensor teria
pego aquilo se existisse**. Você vai precisar dessa lista pronta pra
argumentar, na clínica da aula 2, qual sensor pegou o problema do colega.

---

## LAB 2 — CI no GitHub Actions + branch protection (25 min)

### 1. Copie o workflow

```bash
mkdir -p .github/workflows
cp <caminho>/aula15-verificadores/starter/ci-workflow/ci.yml .github/workflows/ci.yml
git add .github/workflows/ci.yml
git commit -m "ci: adiciona workflow de lint, typecheck, build, test e dependency check"
git push
```

### 2. Confirme que rodou

No GitHub, aba **Actions** do seu repositório. Espere os 4-5 jobs
terminarem (2-3 min). Alguma coisa vermelha? Bom — corrija até ficar verde
antes de configurar a proteção (não faz sentido bloquear merge com um
workflow que você sabe que está quebrado por engano de sintaxe do YAML).

### 3. Configure branch protection

Siga `starter/branch-protection-guia.md` do início ao fim — ele resolve,
nesta ordem: se seu repo é público ou privado (decide tudo), como confirmar
que o workflow já rodou, e o clique por clique da tela do GitHub.

### 4. Prove que bloqueia

Crie uma branch, quebre alguma coisa de propósito (ex.: um `;` a mais que
quebra lint, ou um `any` proibido pelo seu tsconfig `strict`), abra um PR.
**O botão de merge tem que aparecer desabilitado.** Print disso é parte da
entrega mínima.

```bash
git checkout -b teste-protecao
# quebre alguma coisa pequena e óbvia
git commit -am "test: quebra proposital pra confirmar bloqueio"
git push -u origin teste-protecao
gh pr create --fill
```

**Checkpoint do Lab 2:** `.github/workflows/ci.yml` commitado e rodando,
branch protection configurada (ou a limitação de plano documentada, se for
o seu caso), print do merge bloqueado.

---

## CI para projeto de automação (domínio 6 e 7 do catálogo, quando aplicável)

Se seu projeto é majoritariamente n8n/automação, com pouco ou nenhum
TypeScript próprio, os 4 nomes de script continuam existindo — o que muda é
o que cada um faz por dentro:

| Script | Projeto de código (React, Node, CLI...) | Projeto majoritariamente automação (n8n) |
|---|---|---|
| `lint` | ESLint no código | Validação de schema do JSON exportado do workflow n8n (ex.: `ajv-cli` validando contra um schema simples que você define: todo node tem `id`, `type`, `parameters`) |
| `typecheck` | `tsc --noEmit` | Se não existe nenhum `.ts` no repo, documente isso explicitamente no `package.json` com um script que roda mas avisa (`"typecheck": "echo 'sem TypeScript neste projeto — ver README' && exit 0"`) — **não apague o job do CI silenciosamente**, deixe ele passar informando por quê |
| `build` | Compila/empacota | Um script Node pequeno que faz `JSON.parse` de cada arquivo de workflow exportado e confirma as chaves obrigatórias (`nodes`, `connections`) — "builda" no sentido de "o artefato que você importa no n8n é válido" |
| `test` | Testes unitários | Teste de contrato: uma fixture de entrada e a saída esperada do webhook/trigger custom que seu projeto tem (mesmo que seja só 1), comparado com `assert.deepEqual` |
| `dependency check` | `npm audit` + dependency-review | Igual — o `package.json` das poucas peças de código custom (o webhook, se houver) continua existindo e continua rodando `npm audit` normalmente |

O ponto pedagógico: **verificador não é "ferramenta de projeto com muito
código"**, é "sinal binário de que algo específico está certo". Se seu
projeto tem pouco código, os sensores ficam mais simples — não deixam de
existir.

---

## AULA 2 — Clínica rotativa: o que você faz

Diferente da clínica da Semana 7: aqui **quem é projetado não é escolhido
por levantar a mão** — é definido por uma fila pública ("fila do CI
vermelho", ver `ROTEIRO-FACILITADORA.md`). Isso significa que **qualquer
um** pode ser chamado a qualquer checkpoint, então mantenha seu CI rodando
(push cedo, push com frequência) mesmo que ainda esteja vermelho — é
exatamente esse vermelho que te coloca na fila.

### O que você faz o tempo todo

Continua construindo: implementando os 3 testes a partir dos cenários BDD da
Semana 6 (ver `starter/bdd-para-teste/`), preenchendo os 3 logs de
red/green/refactor, procurando o "teste que não prova nada" no seu repo
(`starter/teste-que-nao-prova-nada-exemplos.md`), e ajustando seu CI.

### Quando SEU problema for projetado (pode não acontecer hoje, e tudo bem)

Você não assume o controle — a facilitadora depura na tela, com você do
lado narrando o que tentou e o que esperava. Sua única tarefa nesse momento:
responder com precisão o que você já tentou, sem inventar retroativamente
que já sabia a causa.

### Quando o problema de OUTRA pessoa for projetado

**60 segundos de diagnóstico às cegas.** A facilitadora mostra só o log de
falha do CI (sem o código ainda). No chat, escreva: qual dos 5 sensores
falhou (lint / type check / build / teste / dependency check) e uma
hipótese de causa. Só depois disso o código é revelado. Isso não é
enrolação — é o exercício real: **reconhecer o tipo de falha pelo formato do
log é metade do trabalho de debugar CI em qualquer emprego.**

---

## Se algo deu errado

| sintoma | tenta isso |
|---|---|
| O workflow não aparece na aba Actions depois do push | Confirme o caminho exato: `.github/workflows/ci.yml` (com o "s" em "workflows", na raiz do repo, não dentro de nenhuma subpasta do projeto). Confirme que o arquivo foi commitado (`git status`) e que você deu push pra branch certa. |
| O workflow aparece mas não dispara | Veja o campo `on:` do `ci.yml` — ele só dispara em push/PR pra `main`. Se sua branch padrão tem outro nome (`master`, `develop`), ajuste `branches: [main]` pro nome real. |
| `npm ci` falha no CI dizendo que `package-lock.json` não bate com `package.json` | Rode `npm install` local (não `npm ci`) pra regenerar o lockfile, commite o `package-lock.json` atualizado, dê push de novo. `npm ci` exige que o lockfile já exista e esteja sincronizado — é assim de propósito, pra builds reprodutíveis. |
| Erro de permissão tipo "Resource not accessible by integration" | Confira o bloco `permissions:` no topo do `ci.yml` — o padrão do workflow é `contents: read`, que é suficiente pros 4 sensores; se você adicionou um passo que comenta no PR ou escreve em outro lugar, esse passo precisa de uma permissão extra explícita naquele job (nunca dê `write-all` de qualquer jeito — declare só o que aquele job realmente usa). |
| Branch protection não mostra nenhum status check pra marcar como obrigatório | O workflow ainda não rodou nessa branch pelo menos uma vez — volte, dê um push que dispare o `ci.yml`, espere terminar, só então volte pra tela de configuração. |
| Configurei branch protection mas o botão "Save"/"Create" está cinza/inativo | Repositório privado no plano Free não permite branch protection — veja `starter/branch-protection-guia.md`, seção 0, pra as 3 saídas possíveis. |
| Teste passa no meu terminal e falha no CI | Suspeitos mais comuns, nesta ordem: (1) versão do Node diferente — confira `node -v` local contra o `node-version` do `ci.yml`; (2) uma variável de ambiente ou arquivo local (`.env`) que existe na sua máquina e não está no repo nem configurada como secret no GitHub; (3) teste que depende de fuso horário, locale ou ordem de execução — rode `npm test` numa pasta limpa clonada do zero antes de culpar o CI. |
| `npm audit` acusa vulnerabilidade em uma dependência que você nem instalou direto | É uma dependência **transitiva** (dependência de uma dependência sua). Rode `npm ls <nome-do-pacote>` pra ver a cadeia; a correção costuma ser atualizar o pacote de nível superior que puxa a versão vulnerável, não instalar o pacote vulnerável direto. |
| `dependency-review-action` falha dizendo que precisa de GitHub Advanced Security | Confirmado: esse job só roda de graça em repositório público (ver `REFERENCIAS.md` #7 e #8). Em repo privado sem Advanced Security, remova esse job específico do `ci.yml` (mantenha o `dependency-audit` com `npm audit`, que não tem essa restrição) e documente a limitação no `ENTREGAVEL.md`. |
| A clínica da aula 2 nunca projetou o meu CI | Sem problema — a fila prioriza quem ainda não foi projetado nas últimas duas semanas de clínica (Semana 7 e 8 juntas); se não deu tempo, seu entregável continua valendo pelos outros itens (log, testes, teste-que-não-prova-nada). |
