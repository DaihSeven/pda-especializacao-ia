# Gabarito — `pr-plantado` (só para a facilitadora)

Não distribua este arquivo antes do fechamento do Lab 1 / antes da consolidação
da aula 2. O aluno registra o que achou sozinho primeiro — ver mecanismo em
`ROTEIRO-FACILITADORA.md` e `templates/REGISTRO-REVISAO-HUMANA.md`.

PR: branch `feature/busca-por-habilidade` contra `main`, no repo
`starter/pr-plantado/`. Rode `git diff main..feature/busca-por-habilidade`
pra ver o diff completo, ou `--stat` pra ver só o resumo de arquivos.

## Os 4 defeitos-alvo, um por camada

### Camada 1 — o que o linter pega

**Onde:** `src/utils/normalizarTexto.js`, linhas 5–7 (`var` em vez de
`const`, `==` em vez de `===`); `src/perfis.js`, linha 19 (`console.log`
esquecido).

**Como confirmar:** `npm run lint` (roda `scripts/lint-simples.js`, sem
dependência nenhuma) — acha os 4 pontos sozinho, sem ninguém ler uma linha.

**A lição:** isso não deveria nunca chegar num code review humano ou de
subagente — devia ter sido pego antes, no CI (Semana 8). Se seu aluno gastou
tempo de leitura nisso, é sinal de que ele não rodou as ferramentas
primeiro (Camada 0, antes até da leitura em camadas: rode o que já existe).

### Camada 2 — o que o teste pega

**Onde:** `tests/perfis.test.js`, teste `'busca ignora acento'` (novo,
legítimo) falha de verdade — `npm test` mostra `not ok 4`.

**Causa raiz, se o aluno quiser ir fundo:** `normalizarTexto.js` usa
`.normalize('NFC')` em vez de `.normalize('NFD')` antes de tentar remover
marcas diacríticas — `NFC` não separa a letra do acento, então o `replace`
não remove nada, e a comparação falha para textos acentuados (funciona por
acidente para os que não têm acento, por isso as buscas por "React"/"Node"
continuam passando).

**A lição:** isso é mecânico — rodar `npm test` já revela, sem precisar ler
uma linha de código. É a camada mais barata depois do lint.

### Camada 3 — o que só a leitura pega

**Onde, dois achados juntos no mesmo arquivo:**

1. `src/perfis.js`, dentro de `buscarPorHabilidade`: o `.map()` que
   selecionava só `{ id, nome, habilidades }` foi REMOVIDO — a função agora
   retorna o objeto do perfil inteiro, **incluindo `email`**.
2. `tests/perfis.test.js`, teste `'resultado não expõe e-mail'`: o assert
   original (`assert.equal(perfil.email, undefined)`) foi trocado por
   `assert.ok(perfil.email === undefined || typeof perfil.email === 'string')`
   — uma condição que é **sempre verdadeira**, porque cobre os dois únicos
   casos possíveis (não tem e-mail, ou tem e-mail). O teste continua verde
   mesmo com o vazamento acontecendo.

**Por que só a leitura pega:** `npm test` passa (teste 3 dá `ok`). O lint
não tem regra pra isso. É preciso abrir o diff de `tests/perfis.test.js`
E o de `src/perfis.js` e perceber que os dois se conectam.

**Conexão com o que a turma já sabe:** o assert reescrito é uma instância
literal do padrão **"o assert que sempre passa"** ensinado na Semana 8
(`teste-que-nao-prova-nada-exemplos.md`, padrão #2). E o próprio fato de
`tests/` ter sido tocado já viola a regra da casa desde a aula 1: **"`tests/`
é a especificação e não se edita."** Vale a pena a facilitadora nomear os
dois links explicitamente na consolidação — é o achado mais rico do pacote.

### Camada 4 — o que só quem conhece o domínio pega

**Onde:** o mesmo vazamento de e-mail da Camada 3, mas visto pelo ângulo de
negócio, não de teste. `src/relatorios/exportarCsv.js`, `README.md` e o
domínio do projeto (`aula17-code-review-subagentes` usa o domínio 1 do
catálogo: **"Listagem de perfis de alunos da PDA" — vitrine PÚBLICA**)
dizem que esse resultado é servido numa página pública. Sem saber que é
público, "retornar o perfil inteiro" parece uma escolha de API razoável
(mais dado, mais flexível). Sabendo que é público, é um vazamento de dado
pessoal de aluno.

**Por que só quem conhece o domínio pega:** nem o teste original nem o
lint nem os dois subagentes deste pacote têm como saber, só olhando o
diff, que este endpoint específico é público. Isso é exatamente o tipo de
julgamento que o `PACOTE.md` (seção "onde o julgamento é indispensável")
nomeia como o núcleo da semana. O `revisor-seguranca-ia` não pega isso —
não é prompt injection, não é output handling, não é supply chain, não é
package hallucination. O `revisor-sinais-ia` também não pega — não é
Abstraction Bloat nem duplicação. **Isso é o ponto do exercício**: os dois
subagentes juntos não cobrem 100% do que um humano com contexto de negócio
vê.

## Achados extras (fora dos 4 alvo, contam como bônus se o aluno achar)

- **Escopo:** `src/relatorios/exportarCsv.js` foi reescrito inteiro
  (variáveis em português trocadas por inglês: `separador`→`delimiter`,
  `montarLinha`→`buildRow`, etc.) sem que ninguém tenha pedido — nenhuma
  linha desse arquivo tem relação com "busca por habilidade ignora
  acento". Isso é **scope creep** (ver `LISTA-SINAIS-ALERTA-PR-AGENTE.md`,
  item 1) e não tem teste cobrindo esse arquivo, então um bug ali passaria
  batido.
- **Dependência nova e não usada:** `package.json` ganhou
  `"pt-acento-normalize-utils": "^1.4.0"` — nunca é importada em nenhum
  `require`/`import` do diff (a normalização foi implementada à mão em
  `normalizarTexto.js`). Rode `npm view pt-acento-normalize-utils` — o
  pacote **não existe no registro** (nome inventado pra este exercício,
  mesma categoria de risco da Semana 8: package hallucination). É
  exatamente o tipo de achado que o `revisor-seguranca-ia` deveria trazer.
- **Comentário explicando o óbvio / justificando o vazamento:** o
  comentário em `src/perfis.js` ("retorna o perfil inteiro no resultado,
  mais fácil pra quem for debugar depois...") é o tipo de comentário que
  soa como justificativa razoável mas está racionalizando exatamente o
  problema da Camada 4.

## Cobertura esperada por revisor

| Achado | Humano lendo em camadas | `revisor-sinais-ia` | `revisor-seguranca-ia` |
|---|---|---|---|
| Lint (var/==/console.log) | Sim, rápido | Só se rodar o lint via Bash | Não é o foco dele |
| Teste de acento falhando | Sim, rodando `npm test` | Só se rodar o teste via Bash | Não é o foco dele |
| Assert que sempre passa | Sim, se ler `tests/` | **Não** — não olha `tests/` como alvo do checklist | **Não** |
| Vazamento de e-mail (Camada 3/4) | Sim, se souber que é público | **Não** — não é sinal do checklist da Semana 5 | **Não** — não é um dos 4 riscos dele |
| Scope creep em `exportarCsv.js` | Só se comparar `git diff --stat` primeiro | Possível, se achar Miragem Modular nas renomeações | Não é o foco dele |
| Dependência inventada | Só se abrir `package.json` e checar | Não é o foco dele | **Sim** — é literalmente o Risco 4 dele |

Isto é o material bruto do desconforto que a aula nomeia: **nenhuma das
três revisões (humana, sinais, segurança) sozinha cobre tudo, e cada uma
cobre uma fatia diferente e previsível.**
