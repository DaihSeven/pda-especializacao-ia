# Quando um agente único teria sido melhor

Este é o entregável central da semana. Ele só existe porque vocês têm o
`LOG-SESSAO-PARALELA-TEMPLATE.md` preenchido na mão — não escreva este documento de
memória nem por intuição. Se um número aqui não vem do log, apague a frase.

**Time:** _______________ **Data (semana):** _______________

## 1. O que vocês escolheram e por quê

Descreva a divisão de trabalho que vocês bancaram (seção 1 do log) e a lógica por trás
dela no momento em que decidiram — antes de saber como ia terminar.

## 2. O que aconteceu de fato

Cole os números da seção 4 do log: tempo apostado, tempo real, diferença. Se houve
conflito de merge, descreva em uma frase o que causou (dois arquivos, duas intenções, ou
o mesmo arquivo por motivos que pareciam não relacionados).

## 3. O cálculo de custo de coordenação

Preencha as três linhas. Use minutos.

| | Minutos |
|---|---|
| (a) Tempo que cada tarefa levaria rodando sozinha, somado (sequencial, 1 agente, sem parar) | |
| (b) Tempo real da sua execução paralela, incluindo integração | |
| (c) "Ganho" real = (a) − (b) | |

Se (c) for pequeno, negativo, ou menor do que vocês esperavam antes de rodar, isso não é
um erro de execução — é o dado que a semana pedia para vocês produzirem. Escreva por
quê, nos termos do que aconteceu no SEU log (merge conflict, revisão de diff, contexto
duplicado), não em termos genéricos.

## 4. Veredito

Marque um:

- [ ] **Paralelizar valeu a pena** — o ganho (c) superou o custo de organizar, revisar e
  integrar. Escreva em que condição isso se repetiria (tarefas de que tipo, quantas).
- [ ] **Um agente único teria sido melhor** — o tempo perdido com coordenação anulou ou
  superou o ganho de rodar em paralelo. Escreva o que vocês teriam feito diferente se
  soubessem disso antes de começar o cronômetro.
- [ ] **Empatou** — nem valeu nem não valeu a pena claramente. Isso é uma resposta válida;
  não force um veredito que os números não sustentam.

## 5. A regra que vocês tirariam disso para o PRÓPRIO projeto

Uma frase, sem jargão, que vocês usariam da próxima vez que tiverem duas tarefas e
tiverem que decidir se rodam um agente ou dois. Não copie a frase de um slide — escreva
a de vocês.
