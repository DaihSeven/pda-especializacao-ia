# Registro de revisão humana — PR: <link ou nome da branch>

**Revisor:** <seu nome>
**Autor do PR:** <nome do colega, ou "starter/pr-plantado" no Lab 1>
**Início da revisão:** <hh:mm>

> ⚠️ **Regra de ordem, não negociável:** preencha este arquivo e faça o
> commit dele **antes** de rodar `revisor-sinais-ia` ou `revisor-seguranca-ia`
> pela primeira vez neste PR. O commit é a prova — `git log` mostra o
> timestamp. Depois de commitado, **não edite mais este arquivo.** Se um
> achado do subagente mudar sua opinião sobre algo que você já registrou
> aqui, isso vira uma linha NOVA em `REGISTRO-COMPARACAO.csv`, não uma
> edição retroativa deste arquivo — é a mesma lógica de
> `LOG-RED-GREEN-REFACTOR` da Semana 8: a prova está na ordem dos commits,
> não na narrativa que você reconstrói depois.

## Como eu li (marque as camadas que você realmente usou, na ordem)

- [ ] Camada 1 — `git diff --stat` (quais arquivos, quanto mudou)
- [ ] Camada 2 — rodei lint/teste locais (o que já falha antes de eu ler)
- [ ] Camada 3 — separei arquivo de risco de negócio vs. arquivo trivial
- [ ] Camada 4 — li linha a linha só os arquivos que a Camada 3 marcou

## Achados

Para cada achado: onde, o que é, se bloqueia o merge pra você, por quê.

1. **Onde:** `<arquivo:linha>`
   **O que:** <descrição curta>
   **Bloqueia?** <sim/não> — **Por quê:** <justificativa em 1 frase>

2. ...

## O que eu decidi NÃO reportar (e por quê)

Toda revisão que aponta 40 coisas é ruído. Liste aqui o que você viu e
decidiu que não vale a pena mencionar pro autor — isso é o julgamento que
esta semana treina, registre-o também.

- <coisa que você notou e descartou> — <por que não vale bloquear>

## Fim da revisão

**Horário do commit:** <preenchido pelo `git log` depois de commitar — não
escreva de memória, copie a saída real>
