# Repo plantado — diagnóstico (reserva)

Use este repo no Lab 1 **só se** seu MCP server da semana 4 (`aula7-mcp-server`) não
estiver rodando, ou se você não tiver código próprio suficiente pra diagnosticar. Se você
tem o server da semana 4 funcionando, use ele — código seu ensina mais.

## O que é isso

Domínio simulado: **captação de leads pra freelancers da PDA** (domínio 2 do catálogo).
"Gerado por IA, colado sem ler." Passa nos testes. Isso é o ponto: **teste verde não
quer dizer código bom.**

```bash
npm test        # passa. Isso não é elogio ao código.
```

## O que fazer

1. Rode `npm test` — confirme que passa.
2. Abra `src/leadManager.js` e `src/utils/helper.js`.
3. Use `../checklist-sinais-codigo-ia.md` e marque **todos** os sinais que você achar,
   com o número da linha.
4. Não conserte nada ainda. Esta semana é diagnóstico. Consertar com spec vem na semana 7.

Gabarito no fim de `src/leadManager.js`, dentro de um comentário em bloco. Não leia antes
de discutir com a turma.
