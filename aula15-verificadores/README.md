# aula15-verificadores

Semana 8 — **Verificadores**
Especialização em Desenvolvimento com IA · Programadores do Amanhã · Turma 2

Nas últimas três semanas você aprendeu a especificar melhor, diagnosticar
documentos e quebrar tarefas em passos atômicos com gate. Esta semana muda o
assunto: não é mais sobre pedir melhor pro agente, é sobre **dar sentidos a
ele**. Um agente sem verificador não sabe se terminou — ele chuta, e diz que
terminou. Lint, type check, build, teste e dependency check são os cinco
sentidos que fazem "pronto" significar alguma coisa.

> Faz parte do repo do curso: [`pda-especializacao-ia`](../). Cada pasta na raiz é uma aula.

## Como usar

1. **Fork** o repositório `pda-especializacao-ia` inteiro na sua conta (se ainda não fez).
2. Clone o seu fork e entre nesta pasta:

   ```bash
   git clone https://github.com/<seu-usuario>/pda-especializacao-ia.git
   cd pda-especializacao-ia/aula15-verificadores
   ```

3. Durante a aula, siga o [`GUIA-DO-ALUNO.md`](./GUIA-DO-ALUNO.md) — ele
   acompanha os slides, lab por lab, e tem a seção de configuração de CI e
   branch protection.
4. Depois da aula, faça a [`ENTREGAVEL.md`](./ENTREGAVEL.md) (entrega mínima ou completa).

## O que tem aqui

```
.
|-- README.md                          <- este arquivo
|-- GUIA-DO-ALUNO.md                   <- passo a passo dos labs + CI + troubleshooting
|-- ENTREGAVEL.md                      <- a atividade de fixação + rubrica
|-- starter/
|   |-- ci-workflow/ci.yml             <- workflow completo de GitHub Actions (5 jobs)
|   |-- branch-protection-guia.md      <- clique por clique pra bloquear merge sem CI verde
|   |-- demo-sem-verificador/          <- repo da Demo 1 (facilitadora, ao vivo)
|   |-- dependency-check/              <- repo das Demos 2 e 3 (vulnerabilidade + slopsquatting)
|   |-- bdd-para-teste/                <- exemplo: cenário BDD (semana 6) virado teste
|   |-- red-green-refactor-log-TEMPLATE.md
|   `-- teste-que-nao-prova-nada-exemplos.md
```

## Por que esta semana existe

Você trabalhou as últimas três semanas melhorando o que entra no agente
(engenharia de contexto, diagnóstico, spec com gate). Esta semana trata do
que sai: como você — e o próprio agente — sabem, sem depender da palavra
dele, que o que ele fez está certo. É a diferença entre "o agente disse que
terminou" e "cinco checagens automáticas concordam que terminou". A partir
desta semana, todo lab do curso assume que você tem esse piso rodando.

## Pré-requisitos

- Node 18+ e o setup do curso desde a aula 1.
- Seu projeto próprio (catálogo da semana 2) com `git` inicializado e pelo
  menos um comando de teste que roda — o "contrato mínimo do esqueleto" da
  semana 2.
- **Alura da semana concluída** — ver `PACOTE.md` para o mapeamento e o que
  ela cobre que a aula não repete.
- Conta no GitHub com o repositório do seu projeto criado (semana 2).
- **Windows:** mesma recomendação de terminal desde a aula 1 (Git Bash). Ver
  `GUIA-DO-ALUNO.md`.

## A frase-âncora da semana

> **O verificador existe para o agente, não para você.**
> Um agente sem sensor chuta e diz que terminou. Lint, type check, build,
> teste e dependency check são os sentidos dele.

## Os cinco sensores

| Sensor | O que detecta | Ferramenta usada nesta semana |
|---|---|---|
| Lint | Padrão de código quebrado, mas que ainda roda | ESLint (ou o linter que seu projeto já usa) |
| Type check | Tipo errado, mas que ainda "parece" certo | `tsc --noEmit` |
| Build | Não compila / não empacota de verdade | `tsc` / o bundler do seu projeto |
| Teste | Comportamento errado, mesmo compilando | `node --test` / o runner do seu projeto |
| **Dependency check** *(novo)* | Dependência que não existe (alucinada) ou tem vulnerabilidade conhecida | `npm audit` + `dependency-review-action` |

O quinto sensor — dependency check — é o acréscimo desta semana em relação à
grade anterior. Justificativa completa (com pesquisa citada) em
`PACOTE.md`, seção 0, e nas Demos 2 e 3 do `ROTEIRO-FACILITADORA.md`.

## Regra da casa (continua valendo, com um adendo)

> **Você é responsável por cada linha que commita.**
> O agente executa. Você especifica, lê o diff, roda os testes e decide.

> **Um "pronto" sem verificador não é uma informação — é um chute.**
> Não aceite a palavra do agente. Aceite o sinal verde de um sensor que você
> configurou pra não mentir.

## Referências

Lista completa e verificada em [`REFERENCIAS.md`](./REFERENCIAS.md). As três centrais:

- Documentação oficial do GitHub sobre branch protection e disponibilidade por plano: <https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches>
- Paper sobre alucinação de pacote em código gerado por LLM: <https://arxiv.org/abs/2406.10279>
- Martin Fowler sobre o ciclo red/green/refactor do TDD: <https://martinfowler.com/bliki/TestDrivenDevelopment.html>
