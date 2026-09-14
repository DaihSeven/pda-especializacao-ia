# Projeto Final — enunciado

**Entrega no Demo Day da Semana 14.** Aberto hoje (Semana 12), com dois gates no meio do
caminho. Nada aqui é um projeto novo: **é o seu projeto próprio, o mesmo desde a Semana
2, ganhando a camada de agente e automação.** Se você trocar de projeto agora, perde tudo
que já commitou — não troque.

## O que você vai entregar no Demo Day

1. **Seu projeto de sempre, funcionando em produção** (o mesmo repo, o mesmo domínio do
   catálogo escolhido na Semana 2 — nada é descartado).
2. **Uma automação ou agente real conectado a ele**, com gatilho real (não um botão que só
   você aperta) — em n8n, em Google ADK, ou nos dois, se fizer sentido pro seu domínio.
3. **Ou, alternativa igualmente válida:** um documento curto (`DECISAO-AGENTE.md`)
   explicando por que **nenhum agente e nenhuma automação de fato resolvem** o seu caso, e
   o que um cron + um if fazem no lugar. Essa é uma resposta legítima — é o julgamento
   mais importante da Semana 12, e "eu decidi não usar" bem argumentado pontua mais que
   um agente enfiado à força onde não cabia.
4. **Custo por execução medido** (mesmo modelo da `CUSTO-POR-EXECUCAO.csv`), se você
   escolheu o caminho 2.
5. **Pelo menos um trace real** no Langfuse, se você escolheu o caminho 2.
6. **O parágrafo para o dono do negócio, atualizado** — reescrito pra incluir o que mudou
   com a automação (ou com a decisão de não automatizar).

## Critérios de avaliação

| Critério | Peso | O que se olha |
|---|---|---|
| **Funciona ao vivo em produção** | 25% | Roda na URL/ambiente real, não só no seu computador. Trava só desconta se não houver plano B (vídeo curto do funcionamento) |
| **Decisão de arquitetura justificada** | 20% | Você escolheu n8n, ADK, os dois, ou nenhum — e consegue defender por quê em uma frase, não em "porque sim" |
| **Custo por execução coerente** | 15% | Se usou modelo, sabe quanto custa rodar uma vez e quanto custaria no volume real do seu domínio. Se decidiu não automatizar, este critério vira "por que o custo não compensava" |
| **Observabilidade real** | 15% | Trace real mostrado (Langfuse) ou, no mínimo, histórico de execução (n8n Executions) citado com um caso concreto |
| **Evolução real desde a Semana 2** | 15% | O artefato de hoje conecta com o que já existia — CLAUDE.md, testes, CI, specs, tudo isso continua vivo |
| **Parágrafo pro dono do negócio** | 10% | Alguém leigo entende o que mudou e por que importa |

**O que não pontua:** projeto novo criado às pressas na Semana 13. **O que pontua mais que
qualquer coisa acima:** dizer com clareza, no Demo Day, o que você tentou e não funcionou
— isso é o mesmo padrão de honestidade que a Semana 8 (verificadores) e a Semana 11
(evals) já cobraram.

## Prazo e gates

Sem datas de calendário — só "Semana N", igual ao resto do curso.

| Gate | Quando | O que precisa existir | Se você não chegar lá |
|---|---|---|---|
| **Gate 1** | Fim da Semana 12 (depois da aula 24) | `DECISAO-AGENTE.md` commitado: n8n, ADK, os dois, ou nenhum — com uma justificativa de verdade, não um parágrafo genérico | Você entra na "clínica de resgate" nos primeiros 15 min da aula 25 (Semana 13) em vez de seguir pra RAG sem essa decisão tomada |
| **Gate 2** | Fim da Semana 13 (depois da aula 26) | A automação (ou a alternativa do item 3) rodando de ponta a ponta, com custo por execução medido e pelo menos um trace real | Você apresenta o que tem no Demo Day — **nunca fica de fora** — mas os critérios "Observabilidade real" e "Custo por execução coerente" pontuam pelo que existir, mesmo que incompleto |
| **Gate 3 — Demo Day** | Semana 14 | Apresentação final, todos os critérios da tabela acima | Não existe "Gate 4". O Demo Day é o fim da linha pra este ciclo — o que não estiver pronto entra na avaliação como está |

**Ninguém é excluído do Demo Day por atraso nos gates.** Os gates existem pra você não
chegar na Semana 14 descobrindo de surpresa que falta metade do trabalho — não pra
eliminar quem está com dificuldade. Isso é coerente com a arquitetura de duas faixas
(mínima/completa) que o curso usa desde a Aula 1.
