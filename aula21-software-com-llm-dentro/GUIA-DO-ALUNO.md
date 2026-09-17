# Guia do aluno — Semana 11: Software com LLM dentro

Este guia acompanha os slides das duas aulas. Quando aparecer **MÃO NA MASSA** na tela,
é a sua vez: abra a seção correspondente aqui e faça junto.

Regra: terminal aberto do lado. Travou? Manda o erro no chat, segue em dupla.

---

## ANTES DE TUDO — a fronteira de ferramenta desta semana

Semanas 1 a 10: Claude Code, conta Claude Pro da turma, **zero chave de API**. Acabou.
A partir de hoje você tem uma **conta na plataforma da Anthropic que pode ser cobrada**.
Não é o mesmo login do Claude Code. Leia esta seção inteira antes de instalar qualquer
coisa.

### Quanto isso custa, de verdade

Preço confirmado na doc oficial (REFERENCIAS.md item 5), por milhão de tokens:

| Modelo | Entrada | Saída | Uso recomendado nesta semana |
|---|---|---|---|
| **Claude Haiku 4.5** (`claude-haiku-4-5-20251001`) | US$1 / MTok | US$5 / MTok | Rodar os evals em lote (várias chamadas, mais barato) |
| **Claude Sonnet 5** (`claude-sonnet-5`) | US$2 / MTok | US$10 / MTok | O app principal (streaming, tool calling) |

Um milhão de tokens é **muito** texto — um prompt de eval típico tem algumas centenas de
tokens. Rodar os 5 casos de eval algumas dezenas de vezes durante a semana custa **frações
de centavo a poucos centavos**, não dólares. `npm run checar-chave` (a chamada mais barata
possível) custa menos de US$0,001. **Contas novas ganham um crédito pequeno de teste** —
confira no seu console antes de se preocupar.

**Como não estourar:**
- Rode `npm test` (que não chama a API) o quanto quiser — é grátis.
- Só rode `npm run evals` quando tiver algo pra testar de verdade, não a cada save.
- Confira o painel de uso em <https://platform.claude.com> de vez em quando durante a
  semana. `[CONFIRMAR]`: não achamos, nesta verificação, documentação de um limite de
  gasto automático configurável — se você encontrar um, avise a facilitadora.
- Depois de configurar a chave, **nunca** peça pro agente "gerar 1000 exemplos de teste"
  sem pensar no custo — isso é decisão sua, não algo que o agente deveria decidir sozinho.

### Setup de chave e `.env` (faça isso ANTES da aula 21)

1. Vá em <https://platform.claude.com>, crie conta (ou entre) e gere uma chave de API em
   **Settings → API Keys**. Guarde num lugar seguro (gerenciador de senha) — ela só
   aparece inteira uma vez.
2. No `starter/`:

   ```bash
   cd aula21-software-com-llm-dentro/starter
   cp .env.example .env
   ```

3. Abra `.env` e cole sua chave no lugar de `sk-ant-api03-substitua-por-uma-chave-de-verdade`.
4. **Confira agora, antes de fechar o editor:** `.env` está listado no `.gitignore`?

   ```bash
   git check-ignore -v .env   # tem que imprimir uma linha. Se não imprimir nada, PARE.
   ```

5. Teste a chave:

   ```bash
   npm install
   npm run checar-chave
   ```

   Saída esperada: `Chave funciona. Resposta do modelo: ok` (ou parecido). Se der erro,
   veja a seção de troubleshooting no fim deste guia.

Leia `starter/CHECKLIST-SEGREDOS.md` inteiro agora — ele volta na aula com a demo do que
acontece quando alguém comete o erro de commitar a chave.

---

## Terminal: qual usar (retomado do guia da aula 1 — a maioria da turma está no Windows)

| opção | já vem pronto no Windows? | roda os comandos deste guia sem adaptar? |
|---|---|---|
| **Git Bash** — recomendado hoje também | não — instala com o [Git para Windows](https://git-scm.com/download/win) | sim |
| **WSL (Ubuntu)** | não — `wsl --install` como administrador, reiniciar | sim |
| **PowerShell** | sim | parcial — `node`, `npm`, `git` funcionam; prefira Git Bash pros comandos com `&&` encadeado |
| **CMD** | sim | evite |

Se você já resolveu isso na semana 1, nada muda aqui. Se ainda não resolveu: Git Bash,
hoje, sem exceção — esta semana tem coisa nova o suficiente sem também estar aprendendo
terminal.

**Node 20+ é obrigatório esta semana especificamente** (o SDK oficial da Anthropic em
JavaScript exige — REFERENCIAS.md item 3). Se `node -v` mostrar 18 ou 19, atualize antes
da aula: baixe em <https://nodejs.org> (versão LTS) ou, se usa `nvm`, `nvm install 20`.

---

## LAB 1 (aula 21, 15 min) — primeira chamada com streaming, system prompt e tool calling

Objetivo: sair deste lab com `node src/cliente.js` rodando sem erro e imprimindo texto
token a token.

1. Rode:

   ```bash
   node -e "import('./src/cliente.js').then(m => m.perguntarComStreaming('em uma frase, o que é um loop determinístico?'))"
   ```

   Isso vai quebrar. **De propósito** — leia o erro antes de rolar pra baixo.

2. Primeiro erro esperado: um `import` de um pacote que não existe (`dotenv-lite`), um
   resquício de outro projeto que foi colado junto. Apague a linha do import — este
   projeto lê `.env` de outro jeito (confira: o Node 20+ lê `.env` nativamente com a flag
   `--env-file`, ou você pode rodar `node --env-file=.env -e "..."`. Ajuste o comando do
   passo 1 pra usar `--env-file=.env`, ou exporte a variável no terminal antes de rodar).
3. Segundo erro esperado (depois de resolver o import): um erro de API dizendo que o
   modelo não existe ou não foi encontrado. **Este é o bug de verdade do `cliente.js`.**
   Abra o arquivo, ache a constante `MODELO`, e compare o valor com o nome de modelo
   confirmado no `REFERENCIAS.md` (item 6). Corrija — e enquanto corrige, troque o valor
   hardcoded por `process.env.MODELO_PRINCIPAL` (é pra isso que o `.env` tem essa
   variável).
4. Rodando limpo agora? Leia `chamarFerramenta()` no mesmo arquivo — é o exemplo de tool
   calling (domínio 1 do catálogo, busca de perfil). Teste:

   ```bash
   node --env-file=.env -e "import('./src/cliente.js').then(async m => console.log(JSON.stringify(await m.chamarFerramenta('quem sabe React?'), null, 2)))"
   ```

5. **Ponto de julgamento (não pule):** abra `src/schema-avaliacao.json` e
   `src/validar-avaliacao.js`. O schema garante *formato* (tipos, campos obrigatórios). A
   função de validação garante *sentido de negócio* — hoje ela só confere tipo, não a
   regra "aprovado só pode ser true se nota >= 6" (está comentada como TODO). **Decida o
   corte pro SEU domínio** (qual nota mínima faz sentido pro que você está avaliando?) e
   implemente essa regra antes de seguir pro Lab 2. Ninguém além de você sabe esse número
   — não pergunte pro modelo, é decisão sua.

**Erro proposital desta demo, e o que ele ensina:** os dois bugs de `cliente.js` foram
colados por uma IA que não conferiu contra a doc nem contra o `.env` que já existia. O
segundo (nome de modelo inventado) é o mais importante: **o modelo nunca vai te avisar
que o NOME DO MODELO que você mandou pra API está errado** — isso só aparece como erro de
API, e só se resolve conferindo a doc oficial.

---

## LAB 2 (aula 21, 25 min) — loop com validação + primeiros evals + primeiro deploy

Objetivo: `npm test` totalmente verde, 2 dos 5 casos de eval escritos, e um primeiro
`git push` que sobe pro Render (mesmo que ainda não fique perfeito).

1. Rode `npm test`. Você deve ver 3 passando e 2 falhando (a função `desistir()` em
   `src/loop.js` ainda não devolve o formato certo). Leia os nomes dos testes que falham
   — eles descrevem exatamente o que falta.
2. **Ponto de julgamento (a decisão central do lab):** implemente `desistir()` pra
   devolver `{ ok: false, motivo, tentativas }` em vez de lançar erro. Antes de escrever
   o código, responda em voz alta pra sua dupla: **depois de quantas tentativas o loop
   deveria desistir, e o que o resto do seu app deveria fazer quando isso acontece?**
   Não existe resposta certa vinda da API — é decisão de produto sua, e o `loop.js` já
   deixa o padrão em 3 tentativas (a "regra dos 3 strikes" da Semana 7) caso você não
   tenha uma razão pra mudar.
3. `npm test` deve ficar 5/5 verde. Se não ficou, o problema está no formato do retorno,
   não na lógica de tentativas (que já está pronta).
4. Abra `evals/casos.json`. Preencha **pelo menos os 2 primeiros** casos (caminho feliz e
   entrada ambígua) — os outros 3 ficam pra clínica da aula 22. Use `evals/casos.exemplo.json`
   como régua de quão específico o `criterio_aprovacao` precisa ser.
5. Implemente o começo de `evals/minha-integracao.js` pro seu app (o comentário no
   arquivo tem um exemplo completo pro domínio 1 — adapte pro seu).
6. Rode `npm run evals` — **isso custa uma fração de centavo, é esperado.**
7. Deploy inicial: siga `starter/DEPLOY.md` do passo 1 ao 4. Não precisa terminar hoje —
   o objetivo do Lab 2 é ter a chave configurada como variável de ambiente **no Render**,
   não em código. A clínica da aula 22 termina o resto.

**Erro proposital desta demo (feito pela facilitadora, ao vivo):** a facilitadora vai
"esquecer" e commitar um `.env` com uma chave de mentira dentro, num repositório de
demonstração, e mostrar o que acontece (ou não acontece) automaticamente. Leia
`starter/CHECKLIST-SEGREDOS.md` — ele documenta exatamente o que é automático e o que
não é, pra você não confiar em proteção que não existe.

---

## AULA 22 — clínica rotativa + demo relâmpago (nada de conteúdo novo)

Você já sabe o formato de clínica (Semanas 7 e 8): sinalize quando estiver travado ou
quando quiser mostrar algo, a facilitadora projeta e depura ao vivo a cada ~15 minutos.
Novo desta semana: **os últimos 30 minutos são demo relâmpago** — 6 pessoas sorteadas
apresentam 3 minutos cada, e todo mundo mais preenche a rubrica (`starter/RUBRICA-DEMO-RELAMPAGO.md`)
pra cada uma. Detalhe de como o sorteio funciona e o que fazer se você não for sorteado
está na própria rubrica.

Objetivo de saída da aula 22: os 5 casos de eval escritos e rodando, o deploy funcionando
na URL pública, e (se você foi sorteado) a demo feita.

---

## Troubleshooting

| Sintoma | Causa provável | O que fazer |
|---|---|---|
| `Cannot find module 'dotenv-lite'` | O import propositalmente quebrado do Lab 1, passo 2 | Apague a linha do import, use `--env-file=.env` |
| `model: claude-sonnet-5-latest not found` (ou parecido) | O bug proposital do `cliente.js` — nome de modelo inventado | Troque pelo valor confirmado em REFERENCIAS.md item 6, ou por `process.env.MODELO_PRINCIPAL` |
| `ANTHROPIC_API_KEY não está definida` | `.env` não foi criado, ou o comando não carregou o `.env` | Confira que `.env` existe (`ls -a`) e rode com `--env-file=.env` (ou exporte a variável) |
| `401` / `authentication_error` | Chave copiada com espaço ou quebrada, ou revogada | Recopie do console da Anthropic, sem espaço nas pontas |
| `npm test` mostra 2 falhas mesmo depois de mexer no `loop.js` | `desistir()` ainda lança erro, ou não devolve exatamente `{ ok, motivo, tentativas }` | Releia o teste que falha — o nome dele diz o comportamento esperado, palavra por palavra |
| `npm run evals` fica em ERRO em todos os casos | `evals/minha-integracao.js` ainda tem o `throw` do template | Implemente `avaliarCaso()` — o comentário do arquivo tem exemplo completo |
| Build falha no Render mas funciona local | Versão de Node diferente, ou dependência não commitada | Veja a tabela em `starter/DEPLOY.md`, seção "Quando o build falha" |
| Terminal do Windows não aceita `--env-file` ou dá erro estranho de aspas | PowerShell/CMD tem sintaxe diferente pra variável de ambiente inline | Use Git Bash (ver tabela no início deste guia) — todo comando deste guia foi escrito pra bash |
| "Rodei 5 vezes e sempre passou, então tá bom" | Isso não é eval — é sorte documentada. Ver `evals/README.md` | Desenhe um caso que você **espera** que quebre antes de rodar, não depois |

Travou em algo que não está aqui? Chama no chat da turma antes de ficar preso sozinho —
é o mesmo combinado desde a aula 1.
