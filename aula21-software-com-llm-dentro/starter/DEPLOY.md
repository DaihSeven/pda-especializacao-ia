# Deploy — Render (plano gratuito)

O curso se compromete com **um** host esta semana: [Render](https://render.com). Free
plan confirmado na doc oficial (REFERENCIAS.md item 9): 750h de instância grátis por mês,
sem cartão obrigatório, suporta Node nativamente, variável de ambiente/secret disponível
em todo plano. Isso funciona nos 7 domínios do catálogo e não exige nada específico de
Windows — o Render funciona pelo navegador e por `git push`, não por CLI local.

**Limite real que você precisa saber antes de escolher a hora da sua demo:** o plano
gratuito **dorme depois de 15 minutos sem tráfego** e leva **cerca de 1 minuto pra
acordar** na próxima requisição. Se você vai apresentar na demo relâmpago (aula 22),
**acesse a URL alguns minutos antes** da sua vez pra ela já estar acordada — isso é
literalmente parte do checklist da rubrica (ver `RUBRICA-DEMO-RELAMPAGO.md`).

## Passo a passo

1. Empurre o código pro **seu repositório próprio do projeto** (não o fork do curso —
   convenção da Semana 2). `.env` não vai junto — confira `CHECKLIST-SEGREDOS.md` antes.
2. No [dashboard do Render](https://dashboard.render.com), **New > Web Service**, conecte
   sua conta do GitHub e escolha o repositório.
3. Configure:
   - **Runtime:** Node
   - **Build Command:** `npm install && npm test` (o build falha se os testes falharem —
     de propósito: retoma "CI verde" da Semana 8. Sem testes verdes, sem deploy.)
   - **Start Command:** `npm start` (garanta que seu `package.json` tem esse script
     apontando pro seu servidor — o starter desta semana não inclui servidor HTTP porque
     isso depende do formato de app que você escolheu; o mínimo é um script que sobe algo
     na porta de `process.env.PORT`)
4. Na aba **Environment**, adicione as variáveis (nunca no código, nunca num arquivo
   commitado): `ANTHROPIC_API_KEY`, `MODELO_PRINCIPAL`, `MODELO_EVALS`.
5. Deploy. Se falhar, veja "Quando o build falha" abaixo antes de chamar a facilitadora.

## Quando o build falha

| Sintoma no log do Render | Causa mais provável | O que fazer |
|---|---|---|
| `Error: Cannot find module '@anthropic-ai/sdk'` | `package.json` não lista a dependência, ou `node_modules` foi commitado por engano e confundiu o build | Confira `npm install` local limpo (`rm -rf node_modules && npm install`) antes de subir de novo |
| Testes falham no build mas passam local | Versão de Node diferente — o starter pede **Node 20+** (o SDK oficial exige, ver REFERENCIAS.md item 3/6). Configure a versão em **Environment > NODE_VERSION** no Render | `node -v` local tem que ser >= 20 antes de mais nada |
| `401` ou `authentication_error` já em produção | Chave não configurada na aba Environment do Render, ou copiada com espaço/quebra de linha | Recopie a chave, sem espaço nas pontas |
| App builda mas dorme e demora 1min pra responder na demo | Comportamento esperado do free tier (ver acima) | Acesse a URL 2–3 min antes de apresentar |
| `model not found` / erro de modelo inválido | Nome do modelo errado — igual ao bug proposital do `src/cliente.js` desta semana | Confira contra REFERENCIAS.md item 6, não confie de memória |

## O que continua de pé nas próximas semanas

Este mesmo serviço (não um novo) é usado na **Semana 12 (AIOps 2)** pra medir custo por
execução e tracing, e sobrevive até a **Semana 14 (Demo Day)**. Não recriem do zero.
