# ci-workflow/

O que copiar e o que só ler.

## O que copiar

1. `ci.yml` → vai para `.github/workflows/ci.yml` na raiz do SEU repositório de
   projeto (não do fork do curso). Crie as pastas se não existirem:

   ```bash
   mkdir -p .github/workflows
   cp <caminho-do-fork>/aula15-verificadores/starter/ci-workflow/ci.yml .github/workflows/ci.yml
   ```

2. Confira que seu `package.json` tem os 4 scripts que o workflow chama:
   `lint`, `typecheck`, `build`, `test`. Se algum não existe ainda, olhe
   `package.json.exemplo` — não precisa copiar ele inteiro, só os scripts que
   faltam. O script `verify` (que roda os 4 em sequência) é o que você usa
   **local**, antes de dar push, pra nunca descobrir um vermelho só depois de
   abrir o PR.

## Por que 4 jobs separados e não 1 job com 4 passos

Cada verificador vira um "status check" independente no GitHub — é isso que
te deixa escolher, na branch protection, exatamente quais têm que estar
verdes pra permitir merge (ver `branch-protection-guia.md`). Um job único com
4 `run:` também funcionaria tecnicamente, mas aí você só teria 1 status check
("CI passou" / "CI falhou") em vez de 5 sensores nomeados — e o objetivo da
semana é justamente nomear cada sensor.

## Se seu domínio é quase todo automação (n8n) e quase nada de código

Os 4 nomes de script continuam existindo — o que muda é a implementação
de cada um. Ver `GUIA-DO-ALUNO.md`, seção "CI para projeto de automação",
para o mapeamento completo (lint = validação de schema do JSON exportado,
build = importação sem erro, teste = comparação com fixture esperada).
