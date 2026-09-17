# Branch protection clique por clique

Isso configura o GitHub pra **recusar o merge** de qualquer Pull Request cujo
CI não esteja verde — é o que transforma o workflow de `ci.yml` de "roda e
mostra um X vermelho que alguém pode ignorar" em "literalmente não deixa
apertar o botão de merge".

## 0. Antes de tudo: seu repositório é público ou privado?

**Isso decide o resto do guia.** Verificado na documentação oficial do
GitHub (`REFERENCIAS.md`, #3 e #4): branch protection rules e rulesets (as
duas formas de configurar isso) **só são gratuitas em repositório público**.
Em repositório **privado**, exigem GitHub Pro, Team ou Enterprise — não
existe no GitHub Free.

| Seu caso | O que fazer |
|---|---|
| Seu repo de projeto já é público | Siga o guia normalmente a partir do passo 1. |
| Seu repo é privado e você tem conta de estudante verificada | Peça o **GitHub Student Developer Pack** (`education.github.com/pack`, verificado em `REFERENCIAS.md` #13) — ele dá GitHub Pro grátis enquanto você for estudante, e Pro já libera branch protection em repo privado. Leva de minutos a 1-2 dias pra verificar, dependendo do documento que você usa. |
| Seu repo é privado, sem Student Pack, e o conteúdo pode ser público | **Torne o repositório público** (Settings → General → Danger Zone → "Change repository visibility"). Pra um projeto de portfólio (que é o caso da maioria dos domínios do catálogo), isso normalmente é uma vantagem, não um problema — é o que você mostra pra conseguir trabalho. |
| Seu repo é privado e precisa continuar privado, sem Student Pack | Não force pagar por um plano só pra esta entrega. Documente no `ENTREGAVEL.md` que a branch protection não pôde ser configurada por essa restrição de plano, com print da tela de configuração mostrando a limitação, e faça o restante da entrega (CI verde, testes, log) normalmente — a facilitadora avalia isso como entendimento correto do limite, não como entrega incompleta. |

## 1. Rode o workflow pelo menos uma vez antes de configurar a proteção

**Isso não é opcional e é a causa mais comum de trava nesta atividade:** o
GitHub só oferece um status check como opção "obrigatória" na tela de
branch protection **depois que ele já rodou pelo menos uma vez** no
repositório. Se você tentar configurar a proteção antes de dar o primeiro
push com o `ci.yml`, a lista de checks pra marcar como obrigatórios vai
aparecer **vazia**.

```bash
git add .github/workflows/ci.yml
git commit -m "ci: adiciona workflow de lint, typecheck, build, test e dependency check"
git push
```

Vá em **Actions** (aba no topo do repositório) e confirme que os jobs
rodaram — nem que tenham falhado, só precisam ter rodado pelo menos uma vez.

## 2. Abra a configuração de branch protection

1. No repositório, clique em **Settings** (aba no topo, ao lado de "Insights").
2. No menu lateral esquerdo, clique em **Branches** (dentro da seção "Code and automation").
3. Em "Branch protection rules", clique em **Add branch ruleset** (ou "Add
   rule" — o nome muda conforme a versão da interface; ambos levam à mesma
   configuração).

## 3. Configure o alvo

1. Em **Ruleset Name**, dê um nome (ex.: `proteger-main`).
2. Em **Enforcement status**, deixe **Active** (não "Disabled" nem
   "Evaluate" — "Evaluate" só simula, não bloqueia de verdade).
3. Em **Target branches**, clique em **Add target** → **Include default
   branch** (cobre `main` automaticamente, mesmo que você renomeie a branch
   padrão depois).

## 4. Marque as regras que importam pra esta entrega

Na lista de regras (rolando a página), marque:

- **Require a pull request before merging** — sem isso, dá pra dar
  `git push` direto na `main` e pular o CI inteiro. Marque também a
  sub-opção de exigir pelo menos 0 aprovações (você trabalha sozinho no seu
  projeto — 0 é aceitável aqui; times reais exigem 1+).
- **Require status checks to pass before merging** — esta é a regra
  central. Depois de marcar, aparece um campo de busca "Search for status
  checks"; digite e adicione, um por um: `Lint`, `Type check`, `Build`,
  `Test`, `Dependency check: vulnerabilidade conhecida (npm audit)` (os
  nomes vêm de `name:` de cada job no `ci.yml` — se você renomeou os jobs,
  os nomes na busca vão ser os que você escolheu).
  - Se a busca não mostrar nenhum check: volte ao passo 1 — o workflow
    ainda não rodou nessa branch, ou rodou num branch diferente do que você
    está protegendo.
- (Opcional, só se seu repo for público e você tiver Advanced Security, ou
  se você tiver plano pago): adicione também o check da
  `dependency-review-action` à lista.

## 5. Salve

Clique em **Create** (ou **Save changes**). Confirme abrindo um PR de teste
com uma mudança qualquer — o botão de merge deve aparecer **desabilitado**
até os checks passarem, com uma mensagem do tipo "Required statuses must
pass before merging."

## Removendo a proteção (se precisar desfazer pra debugar)

Settings → Branches → clique na regra → **Delete**. Não precisa disso pra
entrega — só se algo travar de um jeito que impeça você de mesclar sua
própria correção.
