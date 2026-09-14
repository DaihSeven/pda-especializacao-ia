# Como preencher o REGISTRO-TAXA-DE-ACERTO.csv sem trapacear

A taxa de acerto de primeira tentativa é a métrica mais honesta da semana — e ela
**deveria** ser baixa. Uma spec vaga produz uma taxa baixa; uma spec específica produz
uma taxa alta. É a própria taxa que ensina isso, não uma explicação da facilitadora. Se
você mexer nos números pra parecer melhor, a métrica para de ensinar qualquer coisa —
inclusive pra você.

## As colunas

| coluna | o que vai ali |
|---|---|
| `task_id` | o ID da task (`T004`). Se você reescrever a task depois de uma falha, ela vira um ID **novo** (`T004b`), nunca sobrescreve o `T004` original |
| `titulo` | uma frase, copiada do `TASKS-TEMPLATE.md` |
| `gate_comando` | o comando exato do gate — copiado, não parafraseado |
| `tentativa_numero` | 1, 2, 3... — quantas vezes você rodou o agente contra **essa mesma** task/gate, sem editar nenhum dos dois entre uma tentativa e outra |
| `resultado` | `passou` ou `falhou` |
| `causa_se_falhou` | uma de: `spec_ambigua`, `task_nao_atomica`, `gate_mal_escrito`, `erro_agente` (o agente entendeu certo e ainda assim errou a implementação) |
| `observacao` | 1 frase — o que você viu de concreto, não uma impressão geral |
| `timestamp` | data/hora da tentativa |

## A regra anti-trapaça

**Editar a task ou o gate depois de ver uma tentativa falhar encerra aquela linha da
tabela.** Você não apaga a tentativa que falhou, e não muda o gate pra um mais fácil e
chama de "tentativa 2 que passou" — isso não é a mesma task mais. Abra uma linha nova com
um ID novo (`T004b`), volte a `tentativa_numero` pra 1, e o resultado dessa linha é o
resultado da task **nova**. A `T004` original fica registrada como falhou/reescrita.

Isso significa que sua taxa de acerto de primeira tentativa **não sobe** só porque você
ajustou o gate até ele passar — ela reflete quantas das suas tentativas *originais*
bateram de primeira. É desconfortável de propósito.

## O que conta como "acerto de primeira"

Uma task conta como acerto de primeira **somente se**: `tentativa_numero = 1` E
`resultado = passou` E você não editou a task nem o gate entre escrever e rodar.

## O cálculo

No topo do CSV (primeira linha de comentário, ou numa célula separada se for planilha):

```
taxa_de_acerto_primeira_tentativa = (nº de task_id distintos com tentativa 1 = passou)
                                     / (nº total de task_id distintos tentados)
```

Uma task que você reescreveu 2 vezes conta como **3 task_ids diferentes** no
denominador (a original + as 2 reescritas) — reescrever não é de graça na conta, e não
deveria ser: cada reescrita é evidência de que a primeira versão não estava pronta.

## Regra dos 3 strikes, refletida na planilha

Se `task_id` chegar a `tentativa_numero = 3` com `resultado = falhou` sem nenhuma edição,
a próxima linha daquele problema **tem** que ser um `task_id` novo (task reescrita) — não
existe `tentativa_numero = 4` na mesma linha original. Se você ver isso no seu CSV,
alguém pulou a regra.

## A facilitadora mostra a dela primeiro

Antes de vocês começarem o Lab 1, a facilitadora mostra `exemplo-taxa-facilitadora.csv` —
a taxa dela preparando a demo de hoje. Ela também errou de primeira. Isso não é
performance de humildade, é o dado real: se a taxa da pessoa que desenhou a aula inteira
não é 100%, a sua também não vai ser, e não é isso que está sendo avaliado.
