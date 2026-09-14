# ADK — a mesma automação, em código

Isso não é o próximo passo obrigatório de todo mundo. É a demonstração de **quando** vale
trocar o n8n visual por código: quando você precisa versionar a automação num repositório
de verdade, escrever um teste automatizado pra ela, ou rodar `adk eval` antes de mandar
uma mudança pra produção. Se sua automação nunca vai precisar disso, o n8n sozinho resolve
e trocar por código é trabalho a mais sem ganho.

## Instalar e rodar (confirmado na doc oficial, REFERENCIAS.md itens 6–8)

```bash
pip install google-adk
adk create agente_minimo        # gera agent.py, .env, __init__.py — já feito neste starter
adk run agente_minimo           # roda no terminal, conversa por texto
# ou, numa UI local:
adk web --port 8000             # rode a partir da pasta que CONTÉM agente_minimo/
```

Preencha `.env.example` → `agente_minimo/.env` antes de rodar (ver `CHECKLIST-SEGREDOS.md`
da Semana 11, mesma regra, chave diferente: aqui é `GOOGLE_API_KEY`, não
`ANTHROPIC_API_KEY`).

## O que você ganha trocando n8n por ADK

- **Diff de verdade.** `git diff agent.py` mostra exatamente o que mudou na lógica.
  No n8n, comparar duas versões de um workflow visualmente é bem mais difícil.
- **Teste automatizado.** `classificar_mensagem` é uma função Python — dá pra testar com
  `pytest` sem gastar um token de API (mockando a função, igual a Semana 11 fez com
  `chamarModelo` falsa em `loop.js`).
- **`adk eval`** roda um conjunto de casos contra o agente e compara com o esperado — é o
  irmão do `starter/evals/runner.js` da Semana 11, agora nativo do framework (ver
  `agente_minimo/casos.test.json`, formato ilustrativo, e REFERENCIAS.md item 9 antes de
  escalar pra valer).
- **Deploy de fato versionado.** O mesmo `agent.py` que você testou local é o que sobe —
  sem depender de "salvei a versão certa do workflow no host certo".

## O que você perde

- **Velocidade de montagem.** O workflow n8n de hoje ficou de pé em minutos. Este mesmo
  agente em ADK exige know-how de Python, ambiente virtual, e ler doc de framework.
- **Visual.** Ninguém mostra `agent.py` pro dono de uma oficina mecânica como prova de que
  a automação existe. O n8n, sim — a tela do workflow É a explicação.
- **Ferramental.** ADK pressupõe que você sabe debugar um traceback Python. n8n pressupõe
  que você sabe ler um workflow.

**Honestidade da semana:** pra 69 dos 75 alunos desta turma, a primeira automação que gera
renda de verdade sai do n8n, não do ADK. Isso não é o ADK perdendo — é o n8n resolvendo o
problema que a maioria tem primeiro. O ADK entra quando esse workflow já provou valor e
precisa parar de quebrar silenciosamente.

## `[CONFIRMAR]`

- O schema completo de `eval_cases` (campos opcionais, formato de `intermediate_data`) não
  foi verificado campo a campo — confira `agente_minimo/casos.test.json` e
  <https://adk.dev/evaluate/> antes de escalar pra um conjunto de casos real.
- Preço do Gemini (Flash/Pro) por token **não foi verificado nesta sessão** — antes de
  montar a planilha de custo pro lado ADK, confira em
  <https://ai.google.dev/gemini-api/docs/pricing>. A `CUSTO-POR-EXECUCAO.csv` desta semana
  só tem a coluna do n8n/Claude preenchida com preço confirmado; a linha do Gemini está em
  branco de propósito.
