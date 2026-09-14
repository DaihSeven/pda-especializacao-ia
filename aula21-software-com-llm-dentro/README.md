# aula21-software-com-llm-dentro

Semana 11 — **Software com LLM dentro** + AIOps 1 (deploy, chaves e segredos)
Especialização em Desenvolvimento com IA · Programadores do Amanhã · Turma 2

> **Fronteira de ferramenta do curso.** Até a semana 10 vocês usaram só o Claude Code com
> a conta Claude Pro da turma — sem chave de API. **A partir de hoje, chave de API é
> pré-requisito.** Isso significa uma conta que pode ser cobrada de verdade. Leia o bloco
> de custo antes de rodar qualquer coisa — está no `GUIA-DO-ALUNO.md`, seção "Setup de
> chave e `.env`", e não é opcional.

Vocês já escreveram, na semana 10, um loop que fala protocolo MCP sem nenhum modelo
dentro. Esta semana o meio desse loop deixa de imprimir um resultado fixo e passa a
perguntar pra um modelo o que fazer — com streaming, system prompt, tool calling e
structured output. **O modelo preenche o meio. O loop é seu.**

## Como usar

1. Você já tem um repositório próprio do projeto, criado na Semana 2 — é lá que o
   trabalho desta semana entra, não neste fork.
2. Clone (ou já tenha clonado) o fork do curso `pda-especializacao-ia` pra pegar o
   material desta pasta:

   ```bash
   cd pda-especializacao-ia/aula21-software-com-llm-dentro/starter
   node -v            # precisa ser v20 ou maior — o SDK oficial exige (ver REFERENCIAS.md)
   npm install
   npm test           # 3 de 5 passam. 2 falham de propósito — Lab 2 resolve.
   ```

3. **Antes da aula 21**, faça o setup de chave (`GUIA-DO-ALUNO.md`, primeira seção) e
   rode `npm run checar-chave`. Sem isso feito, você não acompanha a aula.
4. Durante a aula 21, siga o [`GUIA-DO-ALUNO.md`](./GUIA-DO-ALUNO.md) lab por lab.
5. Na aula 22 (clínica rotativa + demo relâmpago), você constrói em cima do que já fez —
   sem conteúdo novo, é laboratório e debug ao vivo.
6. Depois das duas aulas, entregue conforme [`ENTREGAVEL.md`](./ENTREGAVEL.md).

## O que tem aqui

```
.
|-- README.md                     <- este arquivo
|-- GUIA-DO-ALUNO.md               <- setup de chave, passo a passo dos labs, troubleshooting
|-- ENTREGAVEL.md                  <- a atividade (mínima + completa) e a rubrica
|-- REFERENCIAS.md                 <- os 13 links verificados desta semana
`-- starter/
    |-- package.json                <- 1 dependência: @anthropic-ai/sdk (única exceção
    |                                  declarada à convenção de zero deps do curso — ver
    |                                  PACOTE.md seção 2)
    |-- .env.example                <- copie pra .env e preencha a sua chave
    |-- CLAUDE.md                   <- memória do projeto, com TODOs
    |-- .claude/settings.json       <- permissões básicas do agente neste projeto
    |-- src/
    |   |-- cliente.js               <- gerado por IA, colado sem ler. Tem bug (Lab 1)
    |   |-- loop.js                  <- o loop determinístico. TODO no Lab 2
    |   |-- schema-avaliacao.json    <- o schema de structured output usado no exemplo
    |   |-- validar-avaliacao.js     <- a regra de negócio que o schema sozinho não garante
    |   `-- teste-chave.js           <- smoke test da chave (`npm run checar-chave`)
    |-- tests/                       <- NÃO EDITE. loop.test.js é a especificação do Lab 2
    |-- evals/
    |   |-- README.md                <- formato do eval, explicado
    |   |-- casos.json                <- seu template com 5 TODOs
    |   |-- casos.exemplo.json        <- 1 exemplo preenchido (domínio 1) pra ver a régua
    |   |-- minha-integracao.js       <- TODO: ligue os casos ao seu app
    |   `-- runner.js                 <- `npm run evals` — roda tudo em lote
    |-- CHECKLIST-SEGREDOS.md        <- antes de commitar, antes de dar deploy
    |-- DEPLOY.md                    <- passo a passo Render + o que fazer se o build falhar
    `-- RUBRICA-DEMO-RELAMPAGO.md    <- os critérios da demo relâmpago da aula 22
```

## Pré-requisitos

- Tudo que a semana 10 já exigia (Node 18+, git, GitHub, Claude Code)
- **Node 20 ou maior** — específico desta semana, o SDK oficial da Anthropic em
  JavaScript exige (`node -v`; se estiver em 18, atualize antes da aula)
- **Uma chave de API da Anthropic**, configurada em `.env` — passo a passo completo no
  `GUIA-DO-ALUNO.md`. Sem isso você não faz nenhum dos dois labs da aula 21.
- Bloco "Console e API da Anthropic" do curso Alura **Claude e Python: desenvolva
  assistentes com a API da Anthropic** concluído (ver `PACOTE.md` — é pré-requisito de
  entrada no lab da aula 22, não é opcional)
- Conta no [Render](https://render.com) criada (grátis, sem cartão)

## Regra da casa (retomada da aula 1)

> **Você é responsável por cada linha que commita — e agora também por cada chamada de
> API que sua conta paga.** O agente executa. Você especifica, lê o diff, roda os testes,
> decide, e confere que a chave nunca aparece em nenhum lugar que vá pro GitHub.

## Fio condutor da semana

**"O modelo preenche o meio. O loop é seu."** — repetido nas transições dos slides e no
roteiro. É a mesma ideia de "especifique → leia o que voltou → rejeite o que não serve"
(Semana 2) aplicada à primeira vez que um modelo de verdade, via API, entra dentro do
código de vocês.
