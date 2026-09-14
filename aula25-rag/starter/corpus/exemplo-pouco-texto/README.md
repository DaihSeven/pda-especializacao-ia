# Se o seu domínio tem pouco texto

Alguns domínios do catálogo (5 — agente de revisão de código, 6 — problema real da ONG,
7 — domínio próprio) podem não ter, ainda, uma base de documentos "de produto" grande.
Isso não é motivo pra pular o lab, e a resposta **não é** "arranje documentos" — é:
**você já tem um corpus, e ele está espalhado nos artefatos que você mesmo escreveu
desde a Semana 2.**

Lembrete de `_GANCHOS.md` (Lote 1): *"o esqueleto do projeto nasce na Semana 2, todas as
semanas constroem por cima, nada é descartado."* Isso significa que, chegando na
Semana 13, todo aluno tem, no mínimo:

- `README.md` do projeto (Semana 2)
- `CLAUDE.md` (Semana 2, editado desde então)
- `RELATORIO-FRONTEIRA.md` (Semana 5, se aplicável ao seu domínio)
- `RESEARCH.md` + ADR(s) no padrão Nygard + o documento único de spec (Semana 6)
- As specs executadas e o registro de taxa de acerto (Semana 7)
- `LOG-RED-GREEN-REFACTOR`, o histórico de CI (Semana 8)
- `REGISTRO-REVISAO-HUMANA.md`, `REGISTRO-SUBAGENTE.md`, `LISTA-SINAIS-ALERTA-PR-AGENTE.md`
  (Semana 9)
- O documento "quando um agente único teria sido melhor" (Semana 10)
- `evals/casos.json` com os 5 casos + o parágrafo pro dono do negócio de CADA semana
  (todo `ENTREGAVEL.md` desde a Semana 2 tem um)

Isso é, sozinho, várias dezenas de páginas de texto real, escrito por você, sobre decisões
reais do SEU projeto. É um corpus perfeitamente legítimo pra este lab — e responder
"por que decidimos X na Semana 6" ou "qual foi o critério de aceite do Lab 2 da Semana 8"
é exatamente o tipo de pergunta que RAG deveria resolver melhor que grep.

## Como montar esse corpus em 5 minutos

```bash
# rodando dentro do SEU repositório de projeto
mkdir -p corpus-rag
cp README.md CLAUDE.md corpus-rag/ 2>/dev/null
cp RESEARCH.md ADR-*.md corpus-rag/ 2>/dev/null
cp REGISTRO-*.md LISTA-SINAIS-ALERTA-PR-AGENTE.md corpus-rag/ 2>/dev/null
find . -maxdepth 3 -iname "ENTREGAVEL.md" -exec cp {} corpus-rag/ \; 2>/dev/null
```

Ajuste os nomes ao que você realmente tem — nem todo mundo praticou toda semana da mesma
forma, e está tudo bem. O ponto do exercício de `src/filtro.js` continua o mesmo mesmo
aqui: mesmo com pouco material, ainda existe julgamento a fazer (por exemplo: o
`RASCUNHO` que você escreveu e nunca revisou não deveria entrar; o ADR que você já
revogou por um mais novo também não).

## Se mesmo assim sobrar muito pouco

Junte-se em dupla com alguém do MESMO domínio (ou de um domínio parecido) só pra este
lab — indexem os dois corpora juntos, cada um mantém o próprio índice separado depois.
A facilitadora sabe que isso vai acontecer nesta altura do curso (ver
`ROTEIRO-FACILITADORA.md`, plano B da Aula 25) — avise no chat em vez de travar sozinho.
