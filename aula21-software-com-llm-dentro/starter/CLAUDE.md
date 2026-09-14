# aula21-software-com-llm-dentro

<!--
  Este arquivo entra na janela de contexto do Claude Code em toda sessão neste projeto.
  Curto de propósito. Complete os TODOs no Lab 1. Referência: https://code.claude.com/docs
  Diferença desta semana: este projeto FAZ chamadas de API de verdade e custa dinheiro.
  Uma regra sobre isso já está escrita abaixo — não apague.
-->

## O que é este projeto

App mínimo da Semana 11: streaming + system prompt + tool calling + structured output,
dentro de um loop determinístico (`src/loop.js`), com evals em `evals/`.

## Stack

- Node 20+, ESM (`"type": "module"` no `package.json`)
- `@anthropic-ai/sdk` — TODO: confirme a versão instalada (`npm ls @anthropic-ai/sdk`)
- Testes: `node:test`, nativo, sem framework externo

## Comandos

- `npm test` — roda `tests/loop.test.js`. Não chama a API, não custa nada, não precisa de chave.
- `npm run checar-chave` — confirma que `ANTHROPIC_API_KEY` está configurada e funciona.
- `npm run evals` — roda os 5 casos em lote. **Chama a API de verdade. Custa dinheiro** (ver
  REFERENCIAS.md item 5 do pacote da semana pra tabela de preço).

## Regras

- Os arquivos em `tests/` são a especificação. Nunca edite testes pra fazê-los passar.
- **Nunca escreva a chave de API em nenhum arquivo que vá pro commit.** Se em algum
  momento você (ou eu, o agente) colar uma chave de verdade num arquivo, pare e rode o
  `CHECKLIST-SEGREDOS.md` antes de continuar.
- Toda validação de regra de negócio (o que conta como "aprovado", o que conta como
  "válido pro meu domínio") vive em código (`validar-avaliacao.js` ou equivalente seu),
  nunca só dentro do prompt. Se você (agente) perceber que está resolvendo uma regra de
  negócio só com texto de prompt, pare e proponha colocar isso em código.
- TODO: escreva uma regra sua sobre o que o loop deve fazer quando desistir (avisar o
  usuário como? logar onde?) — é a decisão do Lab 2 que só você toma.

## Como eu quero trabalhar com você

- Antes de rodar `npm run evals`, me avise que isso vai gastar chamadas de API de verdade.
- Se eu pedir uma mudança no schema de structured output, explique o que fica mais
  restrito ou mais solto antes de aplicar — schema é contrato, eu decido o contrato.
- Se não tiver certeza do nome de um modelo ou de um parâmetro da API, confira a doc
  (REFERENCIAS.md do pacote da semana) em vez de chutar. O bug proposital do `cliente.js`
  existe justamente pra mostrar o custo de não fazer isso.
