# 🤖 Semana 10 — Orquestração, paralelismo e o MCP client próprio: Atividade Prática (Entregável)

**Módulo 3 — AI Orchestrator / Agentes**

|  |  |
| :---- | :---- |
| **Material da aula** | `aula19-orquestracao-mcp-client/` no seu fork de pda-especializacao-ia |
| **Repositório do projeto** | seu repo próprio (criado na semana 2) |
| **Formulário de entrega** | https://forms.gle/PSd6i65g44GwBMgq6 |
| **Prazo de entrega** | Antes da aula 1 da semana 11 |

## O que você vai entregar

Três artefatos, nesta ordem de importância:

1. **`meu-mcp-client/`** — seu cliente MCP funcionando, conectado ao MCP server que você
   construiu na semana 4, commitado no seu repositório de projeto (não no fork do curso).
2. **O log da sessão paralela** — `LOG-SESSAO-PARALELA-TEMPLATE.md` preenchido durante o
   speedrun da aula 2, com números reais, não reconstruídos de memória depois.
3. **O documento "quando um agente único teria sido melhor"** —
   `DOC-AGENTE-UNICO-TEMPLATE.md` preenchido a partir do log acima. Este é o entregável
   central da semana.

### Entrega mínima (todo mundo consegue no dia)

- O cliente conecta no seu server, lista as tools, e pelo menos uma chamada real acontece
  (sucesso ou erro do protocolo — os dois contam, com uma frase explicando qual foi).
- O log da sessão paralela tem pelo menos a seção 1 (antes do cronômetro) e a seção 4
  (números finais) preenchidas.
- O documento "agente único" tem um veredito marcado (seção 4) e uma frase de regra
  pessoal (seção 5), mesmo que o resto esteja incompleto.

### Entrega completa (para quem quer ir além)

- Todas as seções dos três artefatos preenchidas com detalhe.
- O cálculo de custo de coordenação (seção 3 do doc "agente único") com números reais das
  três tarefas, não estimativas grosseiras.
- Uma tentativa registrada de repetir o speedrun sozinho, fora da aula, comparando o
  tempo de um agente único de verdade contra o time que rodou em paralelo — se o tempo
  bateu com a previsão do documento, diga; se não bateu, diga também.

## Por que essa atividade existe

Ela comprova uma capacidade específica: **decidir se uma tarefa deve ser paralelizada
antes de paralelizar, e medir o custo real de ter decidido errado.** Não é "saber rodar
dois agentes ao mesmo tempo" — isso qualquer um faz digitando dois comandos em dois
terminais. É saber, olhando pra duas tarefas, se elas tocam o mesmo arquivo, se uma
depende do resultado da outra, e se o tempo que você vai gastar revisando os diffs e
resolvendo conflitos no fim supera o tempo que você economizou rodando em paralelo. Se a
entrega estivesse errada, o sintoma seria: um documento "agente único" que conclui
"paralelizar sempre vale a pena" sem ter enfrentado um conflito real, ou que conclui isso
com números que não vêm do log.

## Pré-requisitos

- Bloco da Alura desta semana concluído (ver `PACOTE.md` para os cursos exatos).
- MCP server da semana 4 (`aula7-mcp-server`) buildado e funcional.
- Node 20+ instalado (exigência do `@modelcontextprotocol/client`).
- Ter participado do speedrun da aula 2 — sem isso, não existe log real pra basear o
  documento principal. Se você faltou, ver a seção "Se você faltou" abaixo.

## Passo a passo

1. Confirme o server da semana 4 rodando: `node build/index.js` na pasta dele, sem erro.
2. Copie o esqueleto: `cp -r aula19-orquestracao-mcp-client/starter/mcp-client-starter meu-mcp-client`.
3. Implemente os 5 TODOs de `meu-mcp-client/src/index.ts` (ver `GUIA-DO-ALUNO.md`).
4. `npm run build && node build/index.js <caminho para o build do seu server>` — confirme
   que aparece a lista de tools e o resultado de uma chamada real.
5. Commit no **seu repositório de projeto** (não no fork do curso):
   ```bash
   git add meu-mcp-client
   git commit -m "feat: cliente MCP proprio conectando no server da semana 4"
   git push
   ```
6. Durante a aula 2, preencha `LOG-SESSAO-PARALELA-TEMPLATE.md` em tempo real.
7. Depois da aula 2 (pode ser em casa), preencha `DOC-AGENTE-UNICO-TEMPLATE.md` usando os
   números do log — não escreva da memória.
8. Commit os dois documentos no seu repositório de projeto, numa pasta
   `semana-10/` ou equivalente.
9. Preencha o formulário de entrega com o link do commit.

### Se você faltou na aula 2

Rode o speedrun sozinho, fora do horário, com o `starter/speedrun-repo/`: cronometre você
mesmo as três tarefas rodando sequencialmente (sem paralelizar — você está sozinho), e
preencha o log e o documento com esses números. O veredito nesse caso tende a ser "não
tem custo de coordenação pra medir, porque não tinha ninguém pra coordenar" — e essa
constatação, escrita com todas as letras, também vale como entrega.

## O parágrafo para o dono do negócio

Toda semana você escreve um parágrafo curto explicando o que construiu para alguém sem
vocabulário técnico. Aqui está o enunciado da tarefa e um exemplo modelo, escrito para o
domínio 1 do catálogo (Listagem de perfis de alunos da PDA), só para você ver a régua —
o seu parágrafo é sobre o SEU domínio, não sobre este.

**Enunciado:** em 3 a 5 frases, sem jargão técnico, explique por que decidir rodar um
agente ou vários ao mesmo tempo é uma decisão de negócio, não só técnica — e o que
acontece quando essa decisão é tomada sem medir o custo.

**Exemplo modelo (domínio 1 — vitrine de perfis de alunos):**

> Quando duas pessoas da equipe pedem pra IA mexer no mesmo site ao mesmo tempo, parece
> que o trabalho vai ficar pronto duas vezes mais rápido. Às vezes fica. Mas se as duas
> mexerem numa parte que se cruza — o mesmo arquivo, a mesma tela — alguém vai ter que
> parar tudo pra descobrir qual versão fica, e isso pode levar mais tempo do que se uma
> pessoa só tivesse feito o trabalho inteiro sozinha, na ordem. Antes de colocar duas
> IAs pra trabalhar ao mesmo tempo num projeto, vale perguntar: essas duas tarefas
> realmente não se cruzam em lugar nenhum? Se a resposta for "não sei", a resposta certa
> é rodar uma de cada vez até você saber.

## Checklist antes de entregar

- [ ] `meu-mcp-client` conecta no MEU server da semana 4 (não no template de exemplo).
- [ ] `npm run build` roda sem erro.
- [ ] Pelo menos uma chamada real a uma tool, com resultado impresso.
- [ ] Log da sessão paralela preenchido com números reais, não reconstruídos.
- [ ] Documento "agente único" com veredito marcado e justificado pelos números do log.
- [ ] O parágrafo pro dono do negócio é sobre o SEU domínio, não uma cópia do exemplo.
- [ ] Tudo commitado no repositório do PROJETO, não no fork do curso.
- [ ] Bloco da Alura da semana concluído.

## Rubrica

| Critério | Peso | O que a facilitadora olha |
|---|---|---|
| Cliente MCP conecta e chama uma tool real | 25% | `npm run build` limpo, lista de tools do server real do aluno (não o `ping` de exemplo), pelo menos uma chamada com resultado impresso |
| Log da sessão paralela é fiel ao que aconteceu | 20% | Números batem com o que a facilitadora observou circulando durante o speedrun; não é "consertado" depois pra parecer mais organizado do que foi |
| Cálculo de custo de coordenação está correto | 25% | A conta (a) − (b) = (c) do doc "agente único" usa os números certos do log, não estimativas soltas |
| Veredito é sustentado pelos próprios números, não copiado de slide | 20% | A frase de regra pessoal (seção 5) usa vocabulário do que aconteceu NAQUELE speedrun, não repete "depende" ou "paralelizar é bom" sem argumento |
| Parágrafo para o dono do negócio | 10% | Está no domínio do aluno, sem jargão, e a lógica de custo aparece de verdade, não só a palavra "cuidado" |

**O que NÃO pontua:** um documento "agente único" que conclui a favor de paralelizar sem
ter enfrentado nenhum atrito real no speedrun — se o time não teve conflito, o documento
correto reconhece isso e explica por que não teve (tarefas realmente independentes, ou
sorte), em vez de inventar um custo que não existiu.

## Bônus (sem peso na nota, com peso na vida)

Rode o mesmo speedrun de novo, sozinho, num fim de semana, comparando: você paralelizando
sozinho (múltiplas sessões suas, em worktrees diferentes) contra você fazendo sequencial.
Poste o resultado no Mural da Alucinação se algo quebrou de um jeito engraçado — geralmente
quebra.
