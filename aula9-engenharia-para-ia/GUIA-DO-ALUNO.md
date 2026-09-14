# Guia do aluno — Semana 5: Engenharia de software para desenvolvimento com IA

Este guia acompanha os slides. Quando aparecer **MÃO NA MASSA** na tela, é a sua vez.

Regra: terminal aberto do lado. Travou? Manda o erro no chat, segue em dupla/trio.

---

## Terminal: qual usar

Se você já resolveu isso na aula 1, pule esta seção — nada muda. Resumo rápido pra quem
ainda não fixou:

| opção | roda os comandos deste guia sem adaptar? |
|---|---|
| **Git Bash** (Windows) — recomendado | sim |
| **WSL (Ubuntu)** | sim |
| **PowerShell** | parcial — `node`, `npm`, `git`, `claude` funcionam |
| **CMD** | evite |
| **macOS / Linux** | terminal de sempre, sem adaptação |

---

## Antes da aula 1 (5 min)

```bash
cd pda-especializacao-ia
git pull                      # traz o material novo da semana 5
cd aula9-engenharia-para-ia
```

Tenha aberto, num monitor ou aba separada:

1. O código do seu MCP server da semana 4 (`aula7-mcp-server/`, ou o repositório do seu
   projeto próprio, onde quer que a tool esteja).
2. `starter/checklist-sinais-codigo-ia.md` deste repo.

**Não tem nada rodando da semana 4?** Sem problema — use
`starter/repo-plantado/` no lugar. Ele já vem pronto:

```bash
cd starter/repo-plantado
npm test        # passa. Isso não quer dizer que o código é bom — é o ponto da aula.
```

---

## LAB 1 — Diagnóstico com o checklist (15 min)

1. Abra o código-fonte do seu MCP server (ou `starter/repo-plantado/src/`).
2. Abra `starter/checklist-sinais-codigo-ia.md` ao lado.
3. Para cada uma das 6 categorias do checklist, decida: **aparece no seu código, sim ou
   não?** Se sim, anote o arquivo e a linha.
4. Crie (ou complete) um `DIAGNOSTICO.md` no seu próprio repositório de projeto com o que
   achou. Formato livre — o que importa é ter apontado, não ter formatado bonito.

**Não conserte nada agora.** Esta semana é só diagnóstico. Consertar com especificação
formal é a semana 7 (Spec-Driven Development) — se você corrigir agora, vai fazer de
memória, sem o processo que a semana 7 ensina, e o hábito errado gruda.

**Se seu código não tiver NENHUM sinal dos 6:** ótimo sinal, mas releia com mais atenção —
é raro (não impossível) que um MCP server de uma sessão de vibe coding não tenha nenhum.
Se depois de reler continuar sem nada, anote isso também — é dado válido.

---

## LAB 2 — Linguagem ubíqua e candidatos a bounded context (25 min)

Sozinho, no seu projeto:

### Passo 1 — 5 termos de linguagem ubíqua

Liste 5 palavras do **seu** domínio que o dono do negócio (não um programador) entenderia
sem explicação. Teste: se a palavra é `Manager`, `Handler`, `Service`, `Processor`,
`Helper` ou `Util`, ela **não conta** — reescreva até achar 5 que passem no teste.

Exemplo (domínio 1 do catálogo — listagem de perfis): `Aluno`, `Habilidade`, `Portfólio`,
`Depoimento`, `Card de Perfil`. Não conta: `PerfilManager`, `DataHandler`.

### Passo 2 — 2 candidatos a bounded context

Aponte, no seu próprio código, dois pedaços que parecem pertencer a "mundos" diferentes —
mesmo que hoje estejam misturados no mesmo arquivo ou função. Dê um nome de domínio pra
cada um (não um nome técnico).

### Passo 3 — 1 frase de mistura

Escreva: "hoje esses dois contextos estão misturados em `<arquivo ou função>`, porque
`<o que ela faz que não devia>`."

Guarde essas três coisas escritas — **você vai precisar delas prontas na aula 2**, que é
só desenho, sem tempo de pensar do zero.

---

## Antes da aula 2

Não precisa instalar nada novo. Tenha:

- O `DIAGNOSTICO.md`, os 5 termos e os 2 candidatos do Lab 2 em mãos (arquivo aberto ou
  papel — só precisa estar pronto pra falar, não formatado).
- [Excalidraw](https://excalidraw.com) aberto no navegador (não precisa de conta).
- O arquivo `excalidraw/board-bounded-contexts.excalidraw` deste repo baixado.

### Como duplicar o board

1. Abra <https://excalidraw.com>.
2. Menu (canto superior esquerdo) → **Abrir** → selecione o arquivo
   `board-bounded-contexts.excalidraw` que você baixou deste repositório.
3. Assim que abrir, **salve uma cópia com o seu nome** antes de mexer em qualquer coisa
   (menu → Salvar como, ou exportar e reabrir depois) — o board é seu, não o compartilhe
   sobrescrevendo o de outra pessoa.
4. As caixas com **borda tracejada e texto cinza** são as que você preenche. As caixas
   coloridas sólidas (Perfis / Vitrine Pública) são o **exemplo já pronto** — não apague,
   use como régua.

## LAB — Aula 2 (Excalidraw coletivo, 120 min)

Você vai trabalhar em **trio** (formado por sorteio, cruzado por domínio diferente do
catálogo quando possível) e, em paralelo, preencher o **seu próprio board**. O formato
completo (rodadas, plenárias, roteiro de perguntas) está no
[`ROTEIRO-FACILITADORA.md`](./ROTEIRO-FACILITADORA.md) — a facilitadora explica ao vivo, e
o roteiro de perguntas de fronteira fica projetado durante a aula.

Ao final, seu board precisa ter:

- pelo menos **2 bounded contexts** nomeados (com nome de domínio, não técnico);
- **1 linha de linguagem ubíqua** por contexto (os termos que só existem ali);
- **1 seta** entre eles, com o **verbo** da relação (`consulta`, `publica evento`,
  `delega`, `valida` — não deixe a seta sem rótulo).

---

## Se algo der errado

| sintoma | causa provável | o que fazer |
|---|---|---|
| `npm test` do `repo-plantado` falha | você editou algo em `tests/` sem querer | `git checkout -- tests/` restaura; não edite a especificação |
| Excalidraw não abre o `.excalidraw` | arquivo baixado como `.txt` por engano do navegador | renomeie a extensão de volta pra `.excalidraw`, ou use **Abrir** → **Procurar arquivos** e selecione mesmo assim |
| Não sei achar 5 termos que não sejam genéricos | seu domínio ainda não tem vocabulário próprio na sua cabeça | pergunte: "como o cliente descreveria isso numa ligação, sem saber programar?" — a resposta dele tem a palavra |
| Meu trio inteiro escolheu o mesmo domínio no sorteio | acontece, turma não é perfeitamente distribuída | force mais a pergunta 1 do roteiro de fronteira — sem colega de fora, você precisa se esforçar mais pra sair do próprio vocabulário |
| Não tenho ideia de onde cortar meu bounded context | domínio muito pequeno na sua cabeça | todo domínio do catálogo tem pelo menos "o que atende quem usa" e "o que processa por trás" — comece por aí |
| Travei em algo que não está aqui | — | manda o erro exato no chat da turma, com print se precisar. Segue em dupla/trio enquanto aguarda |
