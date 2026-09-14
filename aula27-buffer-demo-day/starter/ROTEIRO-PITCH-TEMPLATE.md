# Roteiro do pitch — 5 a 8 minutos

Preencha este arquivo antes da aula 28. Ele é o seu script, não o seu texto decorado
palavra por palavra — decorar demais trava mais do que ajuda. A estrutura de tempo
abaixo é adaptada de um formato usado há décadas em conferência acadêmica pra caber
uma ideia inteira em poucos minutos sem correr (CASRAI, ver `REFERENCIAS.md`) e do
guia de pitch de aceleradora de startup que também usa "abra pelo ponto mais forte,
não enterre o lead" (Y Combinator, ver `REFERENCIAS.md`).

**Regra de ouro emprestada de Guy Kawasaki:** se o seu pitch precisa de mais de 10
ideias pra fazer sentido, o problema não é o tempo — é que o projeto ainda não está
claro nem pra você. Corte ideia, não corte tempo de fala.

---

## Antes de preencher: escolha sua faixa

| Faixa | Duração | Pra quem |
|---|---|---|
| **Mínima** | 5 minutos | Todo mundo consegue apresentar isso — é o piso |
| **Completa** | 8 minutos | Projeto com mais de uma decisão de julgamento pra mostrar, ou com número de qualidade forte pra citar |

Você decide a faixa. Ninguém perde pontos por escolher a mínima bem executada em vez
da completa mal cronometrada — ver a rubrica, critério "Clareza dentro do tempo".

---

## Minuto a minuto — faixa mínima (5 min)

### `0:00 – 0:40` — Abertura: o parágrafo para o dono do negócio

Isso não é um parágrafo novo. **É o mesmo parágrafo que você escreveu, e reescreveu,
nas 13 semanas anteriores** — todo `ENTREGAVEL.md` do curso pedia essa versão sem
jargão pra um dono de negócio leigo. Hoje ele vira a abertura falada do seu pitch.
Cole ele aqui, e depois leia em voz alta cronometrando:

```
[cole aqui o parágrafo, atualizado pra refletir o projeto de hoje]
```

Cronometrou? Se passou de 40 segundos, corte adjetivo, não corte informação.

### `0:40 – 1:10` — Quem sente essa dor, hoje

Uma frase concreta: quem é essa pessoa, o que ela faz hoje sem o seu projeto, quanto
isso custa (tempo, dinheiro, ou os dois). Se você tem o `RESEARCH.md` da Semana 6,
essa frase já existe lá — não invente uma nova.

```
[uma frase]
```

### `1:10 – 3:10` — Demo ao vivo

Mostre o produto rodando na URL de produção, fazendo a coisa real que ele faz.
**Não narre o código enquanto digita** — prepare os passos de antemão (dados já
carregados, comando já digitado, só falta apertar enter). Se algo quebrar, você tem
no máximo 45 segundos pra tentar resolver ao vivo antes de cortar pro plano B (o
vídeo curto do funcionamento) — regra de quem já viu muita demo quebrar em público
(Scott Berkun, ver `REFERENCIAS.md`).

```
[passo 1 da demo]
[passo 2 da demo]
[o que a plateia deve reparar em cada passo]
```

### `3:10 – 4:20` — Onde o seu julgamento entrou

Este é o critério de maior peso da rubrica (25%). Nomeie **uma decisão real** que
você tomou e o agente não tomou sozinho — um schema que você desenhou, um caso de
eval que você escolheu porque sabia que ia expor um jeito de quebrar, uma condição de
parada de loop que você definiu, um limite de escopo que você escreveu no
`DECISAO-ESCOPO.md`. Não é "eu revisei o código" genérico — é uma decisão nomeada.

```
[a decisão]
[por que o agente não teria chegado nela sozinho]
```

### `4:20 – 4:50` — Um número real

Cite um número do seu próprio projeto: quantos evals passam, taxa de acerto de
primeira tentativa, há quanto tempo o CI está verde. "Funciona bem" não é número.

```
[o número, e de onde ele vem]
```

### `4:50 – 5:00` — Fechamento

Uma frase: o que fica pronto hoje, e o que você faria a seguir se tivesse mais uma
semana.

```
[a frase]
```

**Soma: 0:40 + 0:30 + 2:00 + 1:10 + 0:30 + 0:10 = 5:00.**

---

## Minutos extras — faixa completa (até 8 min)

Se você escolheu a faixa completa, os 3 minutos extras entram assim, sem mexer na
estrutura acima:

### `+1:30` extra na demo (total demo: 3:40)

Mostre um segundo caminho do produto, ou o caminho que **não** funciona ainda e por
quê — honestidade sobre limite pontua mais do que esconder.

### `+1:00` extra no julgamento (total: 2:00)

Nomeie uma **segunda** decisão, de uma parte diferente do projeto (ex.: uma no schema
de dados, outra na segurança do MCP server).

### `+0:30` extra no número (total: 1:00)

Cite um segundo número, de outra dimensão de qualidade (ex.: primeiro número é de
eval, segundo é de CI ou de taxa de acerto).

**Soma faixa completa: 0:40 + 0:30 + 3:40 + 2:00 + 1:00 + 0:10 = 8:00.**

---

## Checklist antes de subir no palco (ou gravar o vídeo)

- [ ] Cronometrei o pitch inteiro pelo menos uma vez, em voz alta, com cronômetro —
      não silenciosamente na cabeça. Ler mentalmente sempre parece mais rápido do que é.
- [ ] O parágrafo para o dono do negócio está atualizado com o que o projeto faz hoje.
- [ ] Tenho um vídeo curto (30-60s) do produto funcionando, gravado com antecedência,
      pronto pra abrir se a demo ao vivo travar.
- [ ] Sei de cabeça o número que vou citar — não vou procurar na tela durante o pitch.
- [ ] Sei qual é a decisão de julgamento que vou nomear, e ela é específica, não
      genérica.
- [ ] Verifiquei no `ROTEIRO-FACILITADORA.md` se estou no grupo que apresenta ao vivo
      ou no grupo que envia vídeo — e sei o prazo de envio se for vídeo.
