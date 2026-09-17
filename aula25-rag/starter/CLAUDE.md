# CLAUDE.md — starter da Semana 13 (RAG)

<!-- Este arquivo é intencionalmente incompleto. Complete os TODOs no seu `/init`
     ou na primeira sessão do Lab 1. O padrão é o mesmo desde a Semana 2: a IA não
     escreve as próprias regras — você decide o que vai aqui, com base no que já
     aprendeu sobre o seu domínio nas 12 semanas anteriores. -->

## O que este projeto é

TODO: uma frase sobre o SEU projeto (o domínio do catálogo que você escolheu na
Semana 2) e o que o RAG desta semana adiciona a ele.

## Comandos

- `npm test` — testes de unidade. Não chamam API, não custam nada, rode à vontade.
- `npm run checar-chave` — testa `ANTHROPIC_API_KEY` e `VOYAGE_API_KEY`. Chama API,
  custa frações de centavo.
- `npm run ingerir` — TODO: documente aqui o comando exato que você usa pra indexar
  o SEU corpus (pasta + estratégia de chunking escolhida), depois de decidir em
  `src/filtro.js` o que entra.
- `npm run perguntar -- "pergunta"` — pergunta contra o índice.
- `npm run comparar-chunking` — mostra o mesmo documento cortado de 3 formas.
- `npm run eval-retrieval` — mede retrieval antes/depois do ajuste de chunking
  (ver `evals/README.md`).

## O que NÃO entra na base (decisão sua, `src/filtro.js`)

TODO: liste, com uma frase de justificativa cada, o que você decidiu excluir do
índice. Se esta lista estiver vazia, `src/filtro.js` ainda está indexando tudo — e
isso é o oposto do que a Semana 13 pede.

## Regra da casa (vale desde a Semana 1)

> Você é responsável por cada linha que commita. O agente executa. Você especifica,
> lê o diff, roda os testes e decide.

Nesta semana isso vale em dobro pra uma coisa específica: o agente consegue montar
um pipeline de RAG inteiro que RODA sem erro e ainda assim devolve respostas erradas
— porque "rodar sem erro" e "recuperar o chunk certo" são checagens diferentes.
`npm run eval-retrieval` é o jeito de checar a segunda, não só a primeira.
