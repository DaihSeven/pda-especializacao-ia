# dependency-check/ — material da Demo 2 e 3 (aula 1, bloco de 20 min)

Duas demos, dois modos de o agente errar com dependência: **vulnerabilidade
conhecida** (esta pasta) e **pacote que não existe** (`exemplo-pacote-inventado.md`).

## Demo 2 — vulnerabilidade conhecida (lodash 4.17.15)

O `package.json` desta pasta fixa `lodash` na versão `4.17.15` **de propósito**.
Essa versão tem uma vulnerabilidade real, documentada e de severidade alta:

- **CVE-2020-8203 / GHSA-p6mc-m468-83gw** — Prototype Pollution em `lodash`,
  afeta versões `>= 3.7.0, < 4.17.19`, corrigida na `4.17.19`.
  <https://github.com/advisories/GHSA-p6mc-m468-83gw>

### Passo a passo da demo

```bash
cd starter/dependency-check
npm install
npm audit
```

`npm audit` deve listar a vulnerabilidade acima como **high**, com a versão
corrigida sugerida. Rode também:

```bash
npm audit --audit-level=high
echo $?     # 1 = falhou. Isso é o que o job "dependency-audit" do CI faz.
```

**O ponto da demo:** peça ao Claude Code, numa sessão limpa, "adicione lodash
como dependência pra deduplicar uma lista" — sem mais contexto. Muitos
agentes (e muitos devs) rodam `npm install lodash` puro, que pega a **última**
versão (segura) do npm — então, pra reproduzir o cenário realista de "código
antigo herdado com uma versão vulnerável fixada", a demo usa este
`package.json` já fixado, simulando um projeto que **já tinha** essa versão
antes de o agente tocar nele. Pergunta pra turma: "o agente que só edita
código teria achado isso sozinho, sem rodar `npm audit`?" Resposta: não — a
vulnerabilidade não está no código que ele escreveu, está numa dependência
que já existia. **Isso é o motivo de dependency check ser um sensor
separado dos outros quatro:** lint, type check, build e teste só olham o
código que existe no repo. Dependency check olha o que o repo *depende de
fora*.

## Demo 3 — pacote que não existe (slopsquatting)

Ver `exemplo-pacote-inventado.md` na mesma pasta.
