# PACOTE.md — Semana 11 (`aula21-software-com-llm-dentro`)

Para a Iasmim. Leitura antes de aprovar o lote.

---

## 0. Dependência declarada da semana 10

`aula19-orquestracao-mcp-client/PACOTE.md` **não existia** no momento em que este pacote
foi escrito (a pasta só tinha `starter/` e `excalidraw/` vazios). Este pacote assume o
combinado no `_BRIEF.md` e no `_GANCHOS.md`:

- A semana 10 entrega **o loop determinístico sem modelo dentro** — um MCP client próprio
  que faz handshake, lista tools, chama uma tool e imprime o resultado, sem chave de API.
- A semana 10 entrega isso como **"o loop de orquestração falando protocolo"**.
- Formato de aula 2 da semana 10: **speedrun cronometrado**.

**Se esse pressuposto estiver errado quando `aula19/PACOTE.md` existir, os pontos que
dependem dele neste pacote são**: o Recap Ativo da abertura da aula 21 (Bloco 2) e a
analogia "vocês já escreveram o loop, hoje vocês colocam o motor dentro dele" no Bloco 3
do `ROTEIRO-FACILITADORA.md`. Ajustar esses dois pontos é suficiente — o resto da semana
11 (API, evals, AIOps) não depende do formato exato do client da semana 10.

---

## 1. Mapeamento Alura

| Curso/módulo Alura | Carga | O que cobre | O que isso tira do síncrono |
|---|---|---|---|
| **Claude e Python: desenvolva assistentes com a API da Anthropic** (`alura.com.br/curso-online-claude-python-desenvolva-assistentes-api-anthropic`, 8h) | Console/Workbench da Anthropic, variáveis, prompt engineering e prompt template, verificação de custo e tokens, controle de erros, estudo de caso de análise de fraude | O aluno chega à aula 1 já tendo visto o Workbench, já sabendo ler o payload de uma chamada de API e já tendo mexido em `try/except` de erro de API. **É por isso que a aula não reexplica "o que é uma chamada de API" do zero** — vai direto pra streaming, tool calling e structured output, que são o que esse curso não cobre. |
| **Gerenciamento de Segredos: segurança, auditoria e automação com Vault** (`alura.com.br/conteudo/gestao-segredos-aplicacoes`, 167 min) | O que é um segredo (senha, chave de API, token, certificado), riscos de vazar em repositório/container/log, casos reais de vazamento | O aluno chega já sabendo **nomear** o problema (por que uma chave num repositório público é grave) antes da aula. **A aula não reconstrói esse argumento do zero** — vai direto pra demo ao vivo de commit de chave e pro `.gitignore`/secret do host, que é prático e esse curso não cobre (o curso é sobre Vault, uma ferramenta que esta semana não usa). |
| **OWASP IA Top 10 para LLMs** (já mapeado nas semanas 4 e 8, `alura.com.br/curso-online-owasp-top-10-para-llms`, 5h) | Prompt injection, supply chain, riscos de saída (os mesmos módulos já citados) | Vocabulário (**prompt injection**, **improper output handling**, **supply chain**) é só **retomado**, nunca reexplicado — ver seção 4. |

**Pré-requisito de entrada no lab da aula 22 (contrato, não punição):** ter feito pelo menos
o módulo "Console e API da Anthropic" do curso Claude e Python **e** ter uma chave de API
válida configurada localmente (`.env` com `ANTHROPIC_API_KEY` preenchida, testada com
`node starter/src/teste-chave.js`) antes da aula 22. Quem não fez não tem chave pronta e
trava a clínica pra si e pra dupla.

---

## 2. O que foi cortado (e para onde foi)

A semana já chegou pré-cortada pela orquestradora (o MCP client saiu inteiro pra semana
10). Mesmo assim, o roteiro só fechou em 120 min por aula depois destes cortes adicionais:

| Cortado | Minutos devolvidos | Para onde foi |
|---|---|---|
| Protocolo SSE por trás do streaming (nomes de evento: `message_start`, `content_block_delta`, `message_delta`...) | ~10 min | Mostrado **funcionando** (`stream.text_stream` imprimindo token a token), não explicado camada por camada. Detalhe do protocolo vira nota de rodapé no slide com link pra doc (ref. 1) e é coberto por quem for além no curso Alura. |
| Gramática completa de JSON Schema (`$ref`, `oneOf`, `anyOf`, `pattern`, formatos customizados) | ~8 min | Mostrado **um schema** (`object` com `properties`/`required`/`additionalProperties: false`) que resolve o caso de uso do lab. A doc completa (ref. 2) vira link no slide, não conteúdo de aula. |
| Superfície completa de `tool_choice` (modos `auto`/`any`/`tool`/`none`, tool calls em paralelo) | ~5 min | Aula usa só o modo padrão (`auto`) com uma tool. O resto vira `[CONFIRMAR]` de aprofundamento — link na doc (ref. 4) pra quem quiser. |
| Passeio clicando em cada tela do painel do Render | ~5 min | Vira passo a passo **escrito** no `starter/DEPLOY.md` e no `GUIA-DO-ALUNO.md`. A demo ao vivo mostra só o momento que importa: variável de ambiente virando secret no host, e o build falhando por chave ausente. |
| Nova varredura do OWASP Top 10 for LLM | 0 min extra (já cortado nas semanas 4/8) | Vocabulário só retomado — ver seção 4. |

**Total devolvido: ~28 minutos**, usados para caber o bloco de setup de chave/`.env`
(obrigatório pelo ADENDO) e o bloco de AIOps 1 sem estourar 120 min. Ver a soma completa
na seção 6.

**Regra seguida à risca:** nenhum corte tirou lab. Os dois labs da aula 21 e a clínica +
demo relâmpago da aula 22 têm o tempo cheio do formato oficial.

**Exceção declarada à convenção "Node puro + zero dependências" do ADENDO:** esta é a
semana que introduz chamada de API de verdade — não dá pra fazer isso sem o SDK oficial.
`starter/package.json` tem exatamente **uma** dependência, `@anthropic-ai/sdk` (nome e
versão confirmados na doc oficial, REFERENCIAS.md itens 3 e 6). A parte testável por
`node --test` (`src/loop.js` e `tests/loop.test.js`) continua zero-dependência e não
chama a rede — os testes usam uma função `chamarModelo` falsa, injetada, exatamente pra
que `npm test` continue grátis e determinístico mesmo numa semana sobre não-determinismo.

---

## 3. Ganchos para frente

- **O deploy desta semana (Render, com variáveis de ambiente configuradas no host) tem
  que continuar de pé na semana 12** — AIOps 2 mede custo por execução e tracing **do
  mesmo serviço que subiu aqui**, não de um novo. Não façam a turma reimplantar do zero.
- **O `starter/evals/casos.json` com 5 casos e o `runner.js`** é o formato mínimo de eval
  do curso a partir daqui — qualquer semana que precisar de eval (12, 13, 14) reusa esse
  formato, não inventa um novo.
- **Frase-âncora "o modelo preenche o meio, o loop é seu"** — semana 12 (agentes com n8n
  e Google ADK) e semana 13 (RAG) devem retomar essa frase quando o modelo entrar dentro
  de um pipeline maior. É a mesma ideia, ferramenta diferente.
- **`starter/CHECKLIST-SEGREDOS.md`** (chave nunca em código, `.env` no `.gitignore`,
  secret no host, rotação) é convenção do curso a partir daqui — qualquer semana com
  chave de API (12, 13) referencia esse checklist em vez de reescrevê-lo.
- **A demo relâmpago de 6 alunos com rubrica em tabela** é o formato oficial de "clínica +
  demo relâmpago" reusado tal e qual na semana 12. Reuse a rubrica desta semana como base
  e só ajuste os critérios de conteúdo.
- **O aviso de custo e a tabela de preço por modelo** (Haiku 4.5 vs Sonnet 5) é referência
  direta pro bloco de custo por execução da semana 12 — não reexplique preço do zero lá,
  cite esta semana.
- Pendência aberta que a semana 12 ou 14 pode resolver: **nenhum modelo de aviso de limite
  de gasto (spending limit / budget alert) foi verificado na doc da Anthropic nesta
  sessão** — está marcado `[CONFIRMAR]` no `GUIA-DO-ALUNO.md`. Se existir um mecanismo
  oficial de limite automático, a semana 12 devia linkar.

---

## 4. Ganchos para trás (retomados, citando o `_GANCHOS.md`)

- **Trio de segurança (prompt injection, improper output handling, supply chain de MCP de
  terceiros)** — instalado na semana 4 (`aula7-mcp-server`). Retomado na demo de chave
  commitada: uma chave vazada é **supply chain do seu próprio segredo**, mesma família de
  risco, novo vetor.
- **`@modelcontextprotocol/server`** — nome de pacote confirmado no lote 1. Citado no
  `ROTEIRO-FACILITADORA.md` quando ligamos "o client de vocês da semana 10" ao host que
  hoje ganha um modelo dentro.
- **"O verificador existe para o agente, não para você"** (semana 8, `aula15-verificadores`)
  — a frase-âncora dos 5 sensores é a base direta da frase desta semana:
  **"eval é o verificador do comportamento não-determinístico, o sexto sensor"**. Ver
  seção 7 do `_GANCHOS.md` (lote 2) — a taxonomia dos "3 padrões de teste que não prova
  nada" é citada de novo aqui contra eval fraco ("funcionou quando eu testei" é o mesmo
  erro, aplicado a modelo em vez de código).
- **Padrão de músculo central do curso** ("especifique → leia o que voltou → rejeite o que
  não serve", lote 1) — é literalmente a estrutura do loop determinístico desta semana:
  especifique (prompt + schema) → leia o que voltou (parse do structured output) → rejeite
  o que não serve (validação em código, não em prompt).
- **CI verde e `npm run verify` rodando** (semana 8) — assumido como dado. O deploy desta
  semana roda `npm run verify` como parte do build no Render (ver `starter/DEPLOY.md`);
  se o build falha, o primeiro passo de troubleshooting é rodar `npm run verify` local
  antes de culpar o host.
- **Mecânica de clínica rotativa** (fila de sinalização, direito de pular fila por
  variedade, tarefa fixa da plateia) — instalada na semana 7, usada na semana 8. Reusada
  tal e qual na aula 22, com um acréscimo: os últimos 30 min viram demo relâmpago (novo
  formato desta semana, ver `ROTEIRO-FACILITADORA.md`).
- **"O MCP client próprio saiu da semana 11 e foi para a semana 10"** (decisão da Iasmim,
  `_BRIEF.md` seção 2) — citada explicitamente no Recap Ativo (Bloco 2) e na transição do
  Bloco 3: "vocês já escreveram o loop que fala protocolo; hoje o meio desse loop deixa de
  ser 'imprimir o resultado' e passa a ser 'perguntar pro modelo o que fazer'."

---

## 5. Cobertura dos 7 domínios do catálogo

| # | Domínio | Funciona? | Como |
|---|---|---|---|
| 1 | Listagem de perfis de alunos da PDA | Sim | Tool `buscar_perfis(criterios)` com `input_schema` (habilidade, disponibilidade); a resposta do modelo vira filtro estruturado aplicado numa lista de perfis (JSON local ou array). Streaming narra a busca, structured output valida o filtro antes de rodar. |
| 2 | Captação de clientes / automações para freelancers | Sim | Tool `gerar_proposta(escopo, prazo, valor_hora)` que devolve JSON estruturado de uma proposta; system prompt fixa o tom comercial da PDA; loop valida que `valor_total = prazo_horas * valor_hora` bate antes de aceitar a proposta do modelo. |
| 3 | Quiz conectado ao Claude | Sim | Tool `gerar_pergunta(tema, dificuldade)` com structured output (`pergunta`, `alternativas[4]`, `correta`); loop rejeita pergunta com menos de 4 alternativas ou `correta` fora do intervalo — validação que o prompt sozinho não garante. |
| 4 | Avaliação automatizada de projetos por IA | Sim — é o encaixe mais natural | O próprio entregável da semana **é** essa avaliação: tool `avaliar_criterio(codigo, criterio)` com structured output de nota + justificativa; os 5 casos de eval do lab são, literalmente, o começo do avaliador de projetos em escala. |
| 5 | Agente de revisão de código com a voz da PDA | Sim | Tool `revisar_trecho(diff)` com system prompt = a voz da PDA (direta, sem jargão) e structured output (`achados: [{linha, categoria, severidade}]`) — mesmo formato de finding que a semana 9 (subagentes de revisão) vai aprofundar. |
| 6 | Problema real da ONG ou das aulas | Sim | Qualquer automação da ONG que precise de uma decisão de linguagem natural + uma ação determinística (ex.: classificar uma mensagem recebida e gerar uma resposta-modelo) encaixa no mesmo esqueleto tool + structured output + loop. |
| 7 | Domínio próprio do aluno | Sim | O esqueleto (`cliente.js` + `schema.json` + `loop.js` + `evals/`) é agnóstico de domínio por construção — só troca a tool e o schema. |

**7 de 7 domínios cobertos** — acima do mínimo de 5 exigido pela barra de qualidade.

---

## 6. Soma dos minutos

### Aula 21 (conceito + demo) — formato fixo da seção 5 do `_BRIEF.md`

| Bloco | Minutos | Conteúdo |
|---|---|---|
| Giro das IAs | 10 | Fixo |
| Recap ativo | 15 | Sorteio + quiz sobre a semana 10 (client MCP, loop sem modelo) |
| Teoria + demo ao vivo (1) | 30 | Setup de chave/`.env` (5) + streaming (7) + system prompt (3) + tool calling (8) + structured output (5) + erro proposital (2) |
| Lab 1 | 15 | Primeira chamada com streaming + system prompt + uma tool com structured output |
| Teoria + demo ao vivo (2) | 20 | Loop determinístico com modelo dentro (6) + evals: o que é / o que não é (6) + AIOps 1: deploy e segredos (6) + erro proposital: chave commitada ao vivo (2) |
| Lab 2 | 25 | Loop com retry/validação + primeiros 2 dos 5 casos de eval + primeiro `git push` pro Render com secret configurado |
| Fechamento | 5 | Recap, entregável, gancho pra aula 22 |
| **Total** | **120** | Fecha exato |

### Aula 22 (clínica rotativa + demo relâmpago) — formato da seção 5.1

| Bloco | Minutos | Conteúdo |
|---|---|---|
| Abertura + regras | 5 | Retoma mecânica de clínica (semana 7/8) + anuncia a demo relâmpago dos últimos 30 min |
| Clínica rotativa | 85 | Fila de sinalização; a cada ~15 min a facilitadora projeta o problema de um aluno e depura ao vivo; tarefa fixa da plateia = aposta no que está quebrado + preencher os 5 casos de eval de quem não terminou o lab 2 |
| Demo relâmpago | 30 | 6 alunos × (3 min de demo + 2 min de crítica com rubrica) = 6 × 5 = 30 |
| **Total** | **120** | Fecha exato |

**Soma das duas aulas: 240 minutos, 120 + 120.**

---

## 7. Onde o julgamento do aluno é indispensável

Três pontos nomeados, um por artefato — nenhum é resolvível pelo agente sozinho:

1. **No schema do structured output (Lab 1):** o aluno decide **quais campos são
   obrigatórios e o que "obrigatório" barra na prática** — isso é conhecimento de domínio
   (ex.: numa proposta de freelancer, `valor_total` bater com `prazo × valor_hora` é regra
   do negócio, não da API). O modelo produz JSON válido contra qualquer schema; só o aluno
   sabe qual schema captura a regra que importa pro domínio dele.
2. **No loop determinístico (Lab 2):** o aluno decide **a condição de parada** — quantas
   tentativas o loop dá antes de desistir, e o que fazer quando desiste (devolver erro
   claro? pedir confirmação humana? usar um valor padrão?). Não existe número certo vindo
   da API; é uma decisão de produto que o código tem que expressar, porque o modelo nunca
   vai "decidir sozinho" que já tentou o suficiente.
3. **Nos 5 casos de eval (Lab 2 e aula 22):** o aluno decide **quais 5 casos expõem um
   jeito real do sistema dele falhar** — não os 5 primeiros que vieram à cabeça, e não só
   os que já sabe que passam. "Funcionou quando eu testei" não é eval; eval é escolher o
   caso que você **espera** que quebre e provar que não quebra (ou documentar que quebra).
   Isso é o mesmo julgamento da semana 8 (verificadores) aplicado ao comportamento
   não-determinístico do modelo em vez de ao código determinístico.

---

## 8. Excalidraw

Esta semana **não usa Excalidraw**. Motivo: a semana não tem um momento de "desenhar
arquitetura antes de codar" — o formato da aula 2 é clínica rotativa + demo relâmpago
(seção 5.1 do `_BRIEF.md`), que é debug ao vivo em cima do código de quem já construiu,
não modelagem coletiva no quadro. Quadro fica reservado pras semanas que o `_GANCHOS.md`
já marca como donas dele (5, 6, e o que mais decidir usar).
