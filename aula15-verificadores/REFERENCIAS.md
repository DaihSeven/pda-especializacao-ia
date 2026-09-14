# Referências verificadas — Semana 8: Verificadores

Todas abertas com WebFetch nesta sessão. Nenhum link foi composto por analogia.

| # | URL | O que é | Status | Onde entra |
|---|---|---|---|---|
| 1 | <https://arxiv.org/abs/2406.10279> | "We Have a Package for You! A Comprehensive Analysis of Package Hallucinations by Code Generating LLMs" — 576 mil amostras, 16 LLMs, 205.474 nomes de pacote alucinados únicos; comerciais ≥5,2%, open-source 21,7% em média | ✅ Verificado — abstract e achados confirmados | Demo 3 (slopsquatting), slide 13, `starter/dependency-check/exemplo-pacote-inventado.md`, PACOTE.md |
| 2 | <https://socket.dev/blog/slopsquatting-how-ai-hallucinations-are-fueling-a-new-class-of-supply-chain-attacks> | Blog da Socket sobre slopsquatting: origem do termo (Seth Larson, PSF), definição do ataque, e o dado de persistência (43% dos pacotes alucinados se repetem em 10 execuções do mesmo prompt) | ✅ Verificado — conteúdo completo lido | Demo 3, slide 13, ROTEIRO-FACILITADORA.md |
| 3 | <https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches> | Doc oficial do GitHub sobre branch protection: como "require status checks to pass before merging" funciona, e que branch protection só é gratuita em repositório **público** com GitHub Free (privado exige Pro/Team/Enterprise) | ✅ Verificado — texto normativo confirmado | `starter/branch-protection-guia.md` seção 0, GUIA-DO-ALUNO.md, slide 17 |
| 4 | <https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets> | Doc oficial sobre rulesets (alternativa moderna à branch protection clássica): confirma a mesma restrição — grátis só em repositório público, exceto push rulesets no plano Team | ✅ Verificado | `starter/branch-protection-guia.md` seção 0 |
| 5 | <https://docs.github.com/actions/using-workflows/events-that-trigger-workflows> | Doc oficial dos eventos que disparam workflows do GitHub Actions: sintaxe de `push`/`pull_request`, filtro por `branches`, e que o `GITHUB_TOKEN` é somente-leitura em PRs vindos de fork | ✅ Verificado | `starter/ci-workflow/ci.yml`, GUIA-DO-ALUNO.md (troubleshooting) |
| 6 | <https://docs.github.com/en/actions/security-for-github-actions/security-guides/automatic-token-authentication> | Doc oficial sobre o `GITHUB_TOKEN`: permissões padrão, como restringir com o bloco `permissions:`, princípio de menor privilégio | ✅ Verificado | `starter/ci-workflow/ci.yml` (bloco `permissions: contents: read`), GUIA-DO-ALUNO.md (erro de permissão) |
| 7 | <https://github.com/actions/dependency-review-action> | README oficial da action `dependency-review-action`: exemplo de workflow, opção `fail-on-severity`, e que a action exige GitHub Advanced Security em repositório privado (grátis só em público) | ✅ Verificado — README completo lido, versão atual confirmada em `actions/dependency-review-action/releases` (v5.0.0) | `starter/ci-workflow/ci.yml` (job `dependency-review`), GUIA-DO-ALUNO.md (troubleshooting) |
| 8 | <https://docs.github.com/en/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review> | Doc oficial sobre dependency review: o que é, como bloqueia PR via branch protection, disponibilidade por tipo de repositório | ✅ Verificado | PACOTE.md, `starter/ci-workflow/ci.yml` (comentários) |
| 9 | <https://docs.npmjs.com/cli/v10/commands/npm-audit> | Doc oficial do `npm audit`: como identifica vulnerabilidades (bulk advisory endpoint), o que `--audit-level` faz | ✅ Verificado | `starter/ci-workflow/ci.yml` (job `dependency-audit`), Demo 2 |
| 10 | <https://github.com/advisories/GHSA-p6mc-m468-83gw> | GitHub Security Advisory da CVE-2020-8203 (Prototype Pollution no `lodash`, versões `>=3.7.0 <4.17.19`, severidade high, corrigida na `4.17.19`) | ✅ Verificado | `starter/dependency-check/package.json` (lodash fixado em 4.17.15 de propósito), Demo 2 |
| 11 | <https://cucumber.io/docs/gherkin/reference/> | Referência oficial do Gherkin: estrutura Given/When/Then, com exemplo de cenário | ✅ Verificado | `starter/bdd-para-teste/cenario-exemplo.md`, slide 9 |
| 12 | <https://martinfowler.com/bliki/TestDrivenDevelopment.html> | Artigo de Martin Fowler sobre o ciclo red/green/refactor do TDD: por que o teste falha primeiro, e que pular o refactor é "a forma mais comum de estragar TDD" | ✅ Verificado | `starter/red-green-refactor-log-TEMPLATE.md`, README.md |
| 13 | <https://education.github.com/pack> | Página oficial do GitHub Student Developer Pack: confirma "Free GitHub Pro while you are a student" | ✅ Verificado | `starter/branch-protection-guia.md` seção 0 (saída pra quem tem repo privado sem plano pago) |
| 14 | <https://www.typescriptlang.org/docs/handbook/compiler-options.html> | Handbook oficial do TypeScript: a flag `--noEmit`, para checagem de tipo sem gerar arquivo — a base do script `typecheck` | ✅ Verificado | `starter/ci-workflow/package.json.exemplo`, `starter/demo-sem-verificador/package.json` |

**Total: 14 referências, todas verificadas via WebFetch nesta sessão. Mínimo exigido: 8.**

## Versões de action pinadas nesta semana (confirmadas nas respectivas páginas de releases)

- `actions/checkout@v7` — confirmado em `github.com/actions/checkout/releases`.
- `actions/setup-node@v7` — confirmado em `github.com/actions/setup-node/releases`.
- `actions/dependency-review-action@v5` — confirmado em
  `github.com/actions/dependency-review-action/releases`.
- Node **22** (não 20) no `node-version` do workflow: o changelog oficial do
  GitHub (`github.blog/changelog/2025-09-19-deprecation-of-node-20-on-github-actions-runners`,
  verificado nesta sessão) confirma que o Node 20 chega ao fim de vida em
  abril de 2026 e é removido dos runners em 23 de setembro de 2026 — usar
  20 nesta turma seria recomendar uma versão já obsoleta.

## Descartadas na pesquisa (não incluídas, registradas por transparência)

- Diversos posts de blog secundários sobre slopsquatting (TechTarget, GMV,
  DEV Community, Infosecurity Magazine, Wikipedia) apareceram na busca e
  confirmam a mesma história — preteridos em favor da fonte primária (o
  paper, #1) e de uma cobertura técnica mais funda (Socket, #2), que
  citam número e origem do termo com mais precisão.
- Diversas discussões da comunidade GitHub pedindo branch protection grátis
  em repositório privado (`github.com/orgs/community/discussions/...`) —
  não citadas como fonte, só confirmam que a restrição verificada em #3 e
  #4 é real e é uma reclamação recorrente, não um mal-entendido nosso.
