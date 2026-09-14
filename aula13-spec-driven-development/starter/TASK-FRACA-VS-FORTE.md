# Task fraca × task forte — por domínio do catálogo

O teste pra saber se sua task é forte não é o tamanho, é uma pergunta: **existe um
comando que eu poderia rodar agora, sem o agente por perto, que responde sim ou não?**
Se a resposta exige "deixa eu olhar e ver se parece bom", a task é fraca — não importa
quão bem escrita a frase esteja.

Cobertura: exemplos concretos para os domínios 1, 2, 3, 4 e 5 do catálogo. Domínios 6 e 7
(problema da ONG / domínio próprio) usam o mesmo método — ver a seção final.

---

## Domínio 1 — Listagem de perfis de alunos da PDA

**Fraca:** "Adicionar um filtro de busca por habilidade na vitrine de perfis."

Por que é fraca: "filtro" pode significar match exato, parcial, com ou sem acento, com ou
sem maiúscula. "Adicionar" não diz onde. Não há comando que confirme.

**Forte:** "Endpoint `GET /perfis?habilidade=<termo>` retorna somente perfis cujo campo
`skills` contém o termo, comparação case-insensitive e sem diferenciar acento. Termo sem
correspondência retorna `[]` (nunca erro 500). Parâmetro ausente retorna todos os perfis."
**Gate:** `npm test -- perfis.filtro.test.js` — 4 casos fixos (1 resultado, múltiplos
resultados, zero resultados, sem parâmetro).

---

## Domínio 2 — Captação de clientes / automação para freelancers da PDA

**Fraca:** "Melhorar a geração automática de propostas comerciais."

Por que é fraca: "melhorar" não diz o que muda. Não há como saber se uma versão é melhor
que outra sem alguém ler e opinar — não é um gate, é uma opinião.

**Forte:** "Função `gerarProposta(cliente, servico, valorBase)` retorna um texto de
rascunho contendo obrigatoriamente as seções 'Escopo', 'Prazo' e 'Valor' (com a frase
fixa de disclaimer de variação de preço), e a função **nunca** chama a rotina de envio —
retorna string, não despacha nada."
**Gate:** `npm test -- proposta.geracao.test.js` — checa presença das 3 seções em 3
combinações fixas de entrada, e que o mock da função de envio permanece com 0 chamadas.

---

## Domínio 3 — Quiz conectado ao Claude

**Fraca:** "Fazer o quiz gerar perguntas melhores com IA."

Por que é fraca: "melhores" segundo qual critério? Um humano teria que ler e julgar —
de novo, opinião, não gate.

**Forte:** "Função `gerarPergunta(tema, dificuldade)` chama a API do Claude e retorna
`{pergunta: string, alternativas: string[4], respostaCorreta: 0|1|2|3}`; se a resposta da
API não bater esse schema, a função usa uma pergunta de fallback fixa em vez de propagar
o erro."
**Gate:** `npm test -- quiz.gerador.test.js` — valida o schema pra 3 temas fixos e
força uma resposta malformada simulada pra confirmar que o fallback dispara.

---

## Domínio 4 — Avaliação automatizada de projetos por IA

**Fraca:** "Deixar a avaliação de projetos mais justa."

Por que é fraca: "justa" não é mensurável sem uma referência. Sem uma régua, qualquer
resultado pode ser defendido como "mais justo".

**Forte:** "Função `avaliarProjeto(repoUrl)` retorna nota de 0 a 10 e 3 justificativas em
texto. Rodada contra 5 repositórios de referência já avaliados por um humano, a nota da
função não pode se desviar mais que 2 pontos da nota humana em nenhum dos 5."
**Gate:** `npm test -- avaliacao.calibragem.test.js` — falha se o desvio passar de 2
pontos em qualquer um dos 5 repositórios de referência (fixtures commitadas no repo).

---

## Domínio 5 — Agente de revisão de código com a voz da PDA

**Fraca:** "Melhorar o code review pra pegar mais bugs."

Por que é fraca: "mais bugs" sem dizer quais. Um agente pode "melhorar" e ainda não pegar
o bug que interessa pro seu projeto.

**Forte:** "A skill `/revisar-codigo` sinaliza toda ocorrência de `var` (em vez de `const`
ou `let`) com o número da linha, e não sinaliza nada em arquivos sem `var`."
**Gate:** `npm test -- revisor.var-check.test.js` — roda a skill contra 3 arquivos fixture
(2 com `var` em linhas conhecidas, 1 sem nenhum) e compara a saída com a lista exata de
linhas esperada.

---

## Domínios 6 e 7 — problema real da ONG / domínio próprio do aluno

Não existe um exemplo genérico que sirva pra "domínio próprio" — cada aluno tem um
negócio diferente. O que generaliza é o método, sempre as mesmas 3 perguntas antes de
escrever a task:

1. **O que muda, em uma frase sem verbo de opinião** (nada de "melhorar", "otimizar",
   "deixar mais claro" — troque por um resultado observável: "retorna X quando Y",
   "nunca faz Z").
2. **Como eu chamo isso pra confirmar, sem abrir o código e ler** — um comando, uma
   chamada com entrada fixa, uma comparação de saída.
3. **O que a saída tem que conter e o que ela NUNCA pode conter** — a segunda metade é a
   que mais gente esquece, e é onde o checklist de código ruim gerado por IA da semana 5
   entra: o gate técnico pode passar e a task ainda ter trazido código morto, duplicado
   ou um `try/catch` vazio que a semana 5 já ensinou a reconhecer.

Se você não consegue responder as 3 pra sua task de domínio 6 ou 7, ela ainda não está
pronta pro Lab 2 — é aí que o julgamento é seu, não do agente.
