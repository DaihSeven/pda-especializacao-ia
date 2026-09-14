# Sinais de alerta em PR gerado por agente

Um PR escrito por um agente quebra de formas diferentes de um PR escrito por
um humano apressado. Humano apressado corta caminho onde sabe que está
cortando. Agente produz mudança **estruturalmente plausível fora do que foi
pedido**, porque ele não tem custo de contexto pra tocar mais um arquivo, e
o RLHF que o treinou recompensa "parecer completo" mais do que "ficar no
escopo". Isso é o que este documento cataloga: sinais, não bugs.

Use isto como checklist rápido de TRIAGEM, antes mesmo da leitura em
camadas do diff — se qualquer item aqui aparecer, suba a atenção pra aquele
arquivo específico.

## 1. Mudança fora do escopo pedido (scope creep)

**O que é:** o PR faz mais do que o título/issue pedia — refatora código
vizinho, reorganiza imports, "aproveita e já ajeita" outra coisa.

**Por que o agente faz isso:** dado um prompt de correção de bug, um agente
pode também refatorar código ao redor, desabilitar um teste instável, ou
reorganizar imports — mudanças não pedidas que introduzem regressão e
complicam a revisão (fonte: AWS, ver `REFERENCIAS.md` #3, categoria de
risco nomeada como **R007 — scope creep**).

**Como checar mecanicamente:** `git diff --stat` primeiro, sempre. Todo
arquivo cujo nome não tem relação óbvia com o título do PR é suspeito até
prova em contrário.

## 2. Arquivo de teste alterado

**O que é:** o PR modifica um teste que já existia, em vez de só adicionar
teste novo.

**Por que é grave especificamente neste curso:** `tests/` é a especificação
e não se edita — regra da casa desde a aula 1. Um agente que "conserta" um
teste que falhava enfraquecendo o assert (em vez de corrigir a
implementação) está literalmente reescrevendo a régua pra passar nela. Ver
`GABARITO-PR-PLANTADO.md`, Camada 3, pro exemplo exato disso acontecendo.

**Como checar mecanicamente:** `git diff --stat` já mostra se algum arquivo
em `tests/` foi tocado. Se sim, abra o diff DAQUELE arquivo primeiro, antes
de qualquer outro.

## 3. Dependência nova não justificada

**O que é:** `package.json` (ou equivalente) ganha um pacote novo que o
PR não precisa, ou que ninguém confirmou que existe de verdade.

**Por que o agente faz isso:** o modelo às vezes "lembra" de um nome de
pacote plausível que não existe (package hallucination / slopsquatting,
vocabulário da Semana 8) — e mesmo quando o pacote existe, adicionar
dependência é uma decisão de superfície de risco, não um efeito colateral
neutro (mesma lógica do `DECISAO-ESCOPO.md` da Semana 4: toda coisa nova
exposta é uma escolha que alguém tem que assumir).

**Como checar mecanicamente:** todo pacote novo em `package.json`, rode
`npm view <pacote>`. Se falhar, ou se ninguém usa (`grep -r "nome-do-pacote"
src/`), é achado. O `revisor-seguranca-ia` faz isso automaticamente.

## 4. Comentário explicando o óbvio

**O que é:** comentários que descrevem o que o código já deixa claro
("// incrementa o contador em 1"), ou que soam como justificativa
defensiva de uma decisão que deveria ser óbvia por si ("// mais fácil pra
quem for debugar depois").

**Por que o agente faz isso:** comentário é barato de gerar e "parece"
cuidado — mas comentário que só repete o código, ou que racionaliza uma
escolha estranha em vez de explicar uma decisão real de negócio, é sinal de
baixa confiança na própria mudança, não de clareza.

**Como checar mecanicamente:** pergunte de cada comentário novo: "se eu
apagasse isso, eu perderia informação que o código não me dá sozinho?" Se
não, é ruído — ou pior, é uma cortina de fumaça (ver o exemplo de
`src/perfis.js` no gabarito).

## 5. Refactor não solicitado

**O que é:** renomeação de variáveis, reorganização de estrutura, mudança
de estilo — em código que o pedido original não tocava.

**Por que o agente faz isso:** mesma raiz do item 1 (R007, AWS) — o agente
generaliza "melhorar o código" pra além do que foi pedido, porque não
distingue "fazer melhor" de "fazer o que foi pedido, só isso".

**Como checar mecanicamente:** `git diff` de um refactor real muda MUITAS
linhas com POUCA mudança de comportamento (renomear = muitas linhas, zero
teste novo). Se o `diff --stat` de um arquivo é grande e o arquivo não tem
teste que cubra a mudança, é bandeira dupla.

## O que fazer quando um sinal aparece

Nenhum destes 5 sinais é, sozinho, motivo automático de bloquear o PR — um
refactor pequeno e correto pode ser bem-vindo. O sinal muda **onde você
olha primeiro**, não decide sozinho **o que você bloqueia**. Essa decisão
final é sua — é o "julgamento indispensável" desta semana (ver `PACOTE.md`).

## Fontes

Ver `REFERENCIAS.md` #3 (AWS, framework de controle pra agentes de código,
nomeia R007 — scope creep, com a mesma linguagem de "refatora código ao
redor, desabilita teste instável, reorganiza imports") e #6 (paper sobre
sinais preditivos de esforço de revisão em PRs de agente).
