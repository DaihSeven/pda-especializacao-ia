# GUIA-DO-ALUNO.md — Semana 9: Code review e subagentes de revisão

Este guia acompanha os slides da aula 1, lab por lab, e o red team da aula
2. Se você travou em algo, vá direto pra seção **Troubleshooting** no fim.

## Terminal: qual usar (a maioria da turma está no Windows)

Todo comando deste guia está escrito em **bash** (padrão de macOS/Linux).
No Windows, o terminal que você abre muda o que funciona. Escolha **antes**
de começar:

| opção | o que é | já vem pronto no Windows? | roda os comandos deste guia sem adaptar? |
|---|---|---|---|
| **Git Bash** — recomendado pra hoje | terminal bash que instala junto com o Git | não — instala junto do [Git para Windows](https://git-scm.com/download/win) | sim |
| **WSL (Ubuntu)** | um Linux de verdade dentro do Windows | não — precisa instalar (`wsl --install` no PowerShell como administrador) | sim — mais parecido com o ambiente da facilitadora, mais trabalho de setup |
| **PowerShell** | terminal padrão do Windows | sim | parcial — `node`, `npm`, `git` e `claude` funcionam; ajuste comandos com `&&` encadeado se der erro |
| **CMD** | terminal antigo do Windows | sim | evite — é o que mais quebra |

**Recomendação:** Git Bash. Se você já vem seguindo o curso desde a aula 1,
provavelmente já está configurado — não precisa mudar nada hoje.

---

## Antes da aula: confirme o ambiente

```bash
node -v      # 18 ou mais
git --version
claude --version
```

Se `claude --version` não rodar, reinstale (mesmo comando da aula 1):

```bash
curl -fsSL https://claude.ai/install.sh | bash
# Windows (PowerShell): irm https://claude.ai/install.ps1 | iex
```

Faça login com sua **conta Claude** (não é chave de API — esta semana
continua sem chave, igual todas as anteriores).

---

## Lab 1 — Leitura em camadas (15 min)

**Critério de pronto:** `templates/REGISTRO-REVISAO-HUMANA.md` preenchido e
**commitado**, com pelo menos 1 achado por camada que você tentou.

1. Entre no repositório de exemplo:

   ```bash
   cd starter/pr-plantado
   git log --oneline --all --graph   # veja as duas branches: main e feature/busca-por-habilidade
   ```

2. **Camada 1 — visão geral.** Não leia nenhuma linha de código ainda:

   ```bash
   git diff main..feature/busca-por-habilidade --stat
   ```

   Anote: quantos arquivos, qual parece maior, qual tem nome de teste.

3. **Camada 2 — rode o que já existe antes de ler.**

   ```bash
   git checkout feature/busca-por-habilidade
   npm test
   npm run lint
   ```

   Um teste vai falhar. O lint vai achar 3–4 coisas. Anote os dois — isso é
   trabalho que NENHUMA leitura precisa fazer, a ferramenta já fez.

4. **Camada 3 — separe risco de negócio do trivial.** Leia o `README.md`
   deste projeto de exemplo (ele te diz qual é o domínio e a regra de
   negócio). Decida, sem ainda ler o código linha a linha, **quais arquivos
   do `--stat`** parecem tocar a regra de negócio (dado sensível, quem pode
   ver o quê) e quais parecem só estilo/refactor.

5. **Camada 4 — linha a linha, só nos arquivos da camada 3.**

   ```bash
   git diff main..feature/busca-por-habilidade -- src/perfis.js tests/perfis.test.js
   ```

6. Copie `templates/REGISTRO-REVISAO-HUMANA.md` pra dentro de
   `starter/pr-plantado/` (ou onde preferir, contanto que fique dentro de
   um git), preencha, e:

   ```bash
   git add REGISTRO-REVISAO-HUMANA.md
   git commit -m "revisão humana: pr-plantado"
   ```

   **Não edite este arquivo depois de commitar.** Se mudar de ideia depois
   do Lab 2, isso vira uma linha nova no `REGISTRO-COMPARACAO.csv`.

---

## Lab 2 — Configurando e rodando os 2 subagentes (25 min)

**Pré-requisito:** o commit do Lab 1 já feito. Se você pular essa ordem, o
exercício perde o sentido — releia "O mecanismo desta semana" no
`README.md`.

**Critério de pronto:** `REGISTRO-SUBAGENTE.md` preenchido e commitado
DEPOIS do commit humano, e `REGISTRO-COMPARACAO.csv` com pelo menos 2
linhas.

1. Os dois subagentes já estão prontos dentro de
   `starter/pr-plantado/.claude/agents/` — confirme:

   ```bash
   ls .claude/agents/
   # revisor-sinais-ia.md
   # revisor-seguranca-ia.md
   ```

   (Se você for usar no SEU projeto depois da aula, copie
   `starter/agentes-revisao/*.md` pra dentro de `.claude/agents/` do seu
   repositório — funciona igual.)

2. Dentro do Claude Code, no diretório `pr-plantado/`, invoque os dois de
   forma explícita (garante que é o subagente certo, não delegação
   automática):

   ```text
   @agent-revisor-sinais-ia revisa o diff de main..feature/busca-por-habilidade
   ```

   ```text
   @agent-revisor-seguranca-ia revisa o diff de main..feature/busca-por-habilidade
   ```

3. Cole as duas saídas completas em `templates/REGISTRO-SUBAGENTE.md`
   (copie o template pra dentro do projeto primeiro), commit:

   ```bash
   git add REGISTRO-SUBAGENTE.md
   git commit -m "revisão por subagente: pr-plantado"
   git log --oneline   # confirme: commit humano ANTES do commit do subagente
   ```

4. Copie `templates/REGISTRO-COMPARACAO.csv`, preencha uma linha por
   achado (seus + dos dois subagentes), marcando `quem_achou`,
   `categoria` e `prioridade_final`. Pelo menos 1 linha tem que ser um
   achado que **só você** encontrou — se não tiver nenhum, releia
   `GABARITO-PR-PLANTADO.md` depois da aula (não antes) pra entender o que
   passou batido.

---

## Aula 2 — Red team em duplas: o que trazer pronto

Antes da aula 2, você precisa ter **um PR real aberto no seu próprio
repositório de projeto** (Semana 2 em diante). Não precisa estar pronto pra
mergear — precisa existir e ter diff de verdade. Se você não tiver PR
aberto no dia, você pratica com o `pr-plantado` (mesmo mecanismo, sem par
humano) — mas isso não conta como a comparação cruzada completa, então abra
o seu antes do prazo do entregável.

Na aula, o mecanismo dos Labs 1 e 2 se repete, mas com o PR real do colega
sorteado (ver `ROTEIRO-FACILITADORA.md` — a mecânica de sorteio é a mesma
desde a Semana 3, cruzando domínio do catálogo).

---

## CI para projeto de automação (se seu domínio é pouco código)

Se seu projeto (domínios 2, 6 ou 7 do catálogo) é majoritariamente n8n ou
planilha, com pouco JS/TS: o Lab 2 ainda se aplica ao trecho de código que
existir (um webhook, um script de transformação). Os dois subagentes leem
qualquer diff versionado em git — não exigem `package.json` nem stack
específica. Se você realmente não tem nenhum arquivo de código no
projeto ainda, use o `pr-plantado` como seu objeto de prática nesta semana
e registre isso no `ENTREGAVEL.md`.

---

## Troubleshooting

**`@agent-revisor-sinais-ia` não faz nada / Claude não reconhece o
subagente.**
Confirme que o arquivo está em `.claude/agents/revisor-sinais-ia.md`
(dentro do projeto onde você abriu o Claude Code) e que o frontmatter YAML
está bem formado (três traços `---` no início e no fim, sem tab, só
espaço). Rode `/agents` dentro do Claude Code pra listar os subagentes que
ele enxerga.

**O subagente tentou editar um arquivo e travou pedindo permissão.**
Esperado — `permissionMode: plan` no frontmatter restringe ele a leitura.
Se ele insistir em editar, você escreveu a instrução errado no corpo do
arquivo (algo pedindo "corrija" em vez de "relate") — revise o texto do
subagente, não dê a permissão.

**`npm test` não roda nada / erro de módulo não encontrado.**
Confirme que você está dentro de `starter/pr-plantado/` (não na raiz do
curso) e que está na branch certa (`git branch` — sem asterisco em
`feature/busca-por-habilidade`, rode `git checkout
feature/busca-por-habilidade`).

**`npm run lint` não acha nada e eu sei que tem `var` no código.**
Confirme que está na branch `feature/busca-por-habilidade` — a `main` está
limpa de propósito (é o "antes"). Se ainda assim não achar, confirme que o
arquivo está dentro de `src/` — `lint-simples.js` só varre essa pasta.

**Git reclama de merge conflict ao tentar commitar o registro.**
Você provavelmente está numa branch com histórico divergente. Rode `git
status` pra confirmar em que branch está; se for algo estranho, crie uma
branch nova a partir de onde está (`git checkout -b minha-revisao`) e
commit ali — não precisa mexer em `main` nem `feature/busca-por-habilidade`
pra fazer o registro.

**Windows (PowerShell): o comando `@agent-...` dentro do prompt do Claude
Code não é um comando de shell** — é texto que você digita DENTRO da
sessão interativa do `claude`, não no PowerShell/Git Bash em si. Se você
colar isso no terminal do sistema operacional por engano, ele vai dar erro
de comando não encontrado — é esperado, abra o Claude Code primeiro
(`claude`) e digite ali dentro.
