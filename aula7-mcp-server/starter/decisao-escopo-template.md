# Decisão de escopo — preencha ANTES de escrever a tool

<!--
  Isso não é burocracia. É a única parte desta semana que o agente não decide por você.
  Preencha isso, commite, e SÓ DEPOIS comece o código. Na aula 2, este documento é o
  que o seu colega recebe pra tentar atacar — ele é o alvo declarado do red team.
-->

## O projeto

- **Domínio do catálogo (semana 2):**
- **Que dado ou sistema real esse tool vai tocar** (planilha, API, arquivo, banco):

## A tool

- **Nome da tool:**
- **O que ela recebe (parâmetros):**
- **O que ela devolve:**

## O que ela PRECISA poder fazer

(a menor lista possível — cada item aqui é uma permissão que você está concedendo)

1.
2.

## O que ela NÃO PODE poder fazer

(mesmo que fosse conveniente. Pense em: escrever/apagar quando só devia ler, acessar
arquivo fora de uma pasta específica, expor dado sensível de outra pessoa, executar
código arbitrário, agir sem confirmação em algo irreversível)

1.
2.
3.

## Como isso é garantido no código

(não vale "eu vou tomar cuidado". Tem que ser algo que um ataque não consegue contornar
só pedindo educadamente. Exemplos: allow-list de caminhos, validação de schema que rejeita
tipos inesperados, ausência de qualquer credencial de escrita no processo, um limite de
tamanho de entrada/saída)

1.
2.

## Se alguém tentasse enganar o agente pra fazer o que está na lista de "NÃO PODE"

- **O que você acha que aconteceria hoje, antes de qualquer correção?**
- **Qual sinal mostraria que o ataque funcionou** (o que você olharia pra saber)?
