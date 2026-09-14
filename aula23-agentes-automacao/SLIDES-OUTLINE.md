# SLIDES-OUTLINE.md — Semana 12 (aula 23)

**Total: 34 slides.**

Fio condutor da semana, repetido nas transições: **"O agente mais caro é o que não
precisava existir."**

Teto visual observado: nenhuma sequência de mais de 3 slides seguidos sem imagem,
diagrama, GIF ou slot de print — marcado em cada slide com `[V]` (tem recurso visual) ou
`[T]` (texto/terminal, sem imagem/diagrama/GIF). Sequência de `[T]` nunca passa de 2 slides
seguidos neste outline.

Nenhum slide menciona Alura. Mapeamento Alura vive só em `PACOTE.md` e
`ROTEIRO-FACILITADORA.md`.

---

### 1. Capa `[V]`
`PDA · SEMANA 12` · `</AGENTES E AUTOMAÇÃO>`. Subtítulo: "n8n primeiro. Google ADK quando
o n8n não aguenta mais." Estrela do template + slot `[ PRINT: logo n8n + logo ADK lado a
lado, discretos ]`.
`ref:` —
**Notas [00:00]:** "Hoje a régua muda. Vocês não vão só usar um agente — vão decidir se
usam um."

### 2. `</HOJE>` — linha do tempo `[V]`
Diagrama da linha do tempo com os 7 blocos e minutos (espelha a tabela do Bloco 5 do
roteiro). Cada bloco com ícone simples.
**Notas [00:00–00:02]:** aponte o bloco "AIOps 2" e diga: "essa é a parte que ninguém
ensina — quanto custa cada execução, em reais."

### 3. `</COMO ACOMPANHAR>` `[V]`
Ícones + texto curto: (1) chave da Anthropic da Semana 11 continua valendo, (2) hoje entra
uma chave nova (Google AI Studio, grátis), (3) `CHECKLIST-SEGREDOS.md` da Semana 11 vale
pras duas, (4) Docker Desktop instalado antes da aula (pré-requisito, avisado no
`GUIA-DO-ALUNO.md`).
`ref:` docs.n8n.io/deploy/host-n8n
**Notas [00:02–00:03]:** "Quem não instalou o Docker antes, instala agora — é 2 minutos,
mas trava a dupla se deixar pra hora do lab."

### 4. Giro das IAs `[T]`
Kicker `GIRO DAS IAS`. Slide simples, sem conteúdo fixo — a facilitadora traz a notícia da
semana.
**Notas [00:00–00:10]:** bloco fixo de abertura, ver seção "Giro das IAs" do
`ROTEIRO-FACILITADORA.md`.

### 5. Recap ativo `[T]`
Kicker `RECAP ATIVO`. "Sorteio: alguém explica pro grupo o que `loop.js` fazia. Alguém
mostra o app do Render ainda de pé." Regra: a facilitadora só corrige.
**Notas [00:10–00:25]:** sobre a Semana 11 (streaming, tool calling, evals, deploy). Ver
roteiro pra perguntas exatas.

### 6. Fio condutor `[V]`
Cartão tipográfico grande, fundo amarelo: **"O AGENTE MAIS CARO É O QUE NÃO PRECISAVA
EXISTIR."**
**Notas [00:25]:** "Vou repetir essa frase um monte de vezes hoje. Decorem."

### 7. `</QUANDO NÃO USAR AGENTE>` `[V]`
Diagrama de decisão (3 ramos): **regra fixa e repetitiva** → cron + if (exemplo: "toda
segunda 9h, checar se boleto venceu, mandar lembrete") · **decisão pontual e simples** →
um prompt sem loop (exemplo: "classificar esse texto uma vez") · **decide e age com
ferramentas, em vários passos** → agente de verdade (exemplo: "atender um cliente do
início ao fim, decidindo o que perguntar"). Metade dos casos reais da PDA cai no primeiro
ramo.
`ref:` — (vocabulário de custo de coordenação retomado da Semana 10, Lei de Brooks/4x-15x
tokens, sem reabrir)
**Notas [00:26–00:30]:** "Antes de qualquer ferramenta, essa árvore. O lab de hoje cobra
vocês responderem ela pro próprio projeto."

### 8. `</N8N>` — o que é `[V]`
Slot `[ PRINT: tela do editor de workflows do n8n, com uns 4-5 nodes conectados ]`. Frase-
âncora: "Automação visual: você monta caixinhas, não escreve loop."
`ref:` n8n.io
**Notas [00:30–00:32]:** "É a ferramenta que a maioria de vocês vai usar pra cobrar a
primeira nota fiscal."

### 9. n8n: onde ganha, onde quebra `[V]`
Diagrama de duas colunas. **Ganha:** monta rápido, mostra pro cliente, sem escrever código.
**Quebra:** lógica condicional profunda vira "espaguete" de setas cruzadas; difícil de
testar automaticamente; difícil de revisar diff.
`ref:` docs.n8n.io/choose-how-to-use-n8n
**Notas [00:32–00:34]:** "Não é hype vazio nem é ruim. Tem limite, e o limite é esse."

### 10. Instalar o n8n `[T]`
Bloco de terminal real:
```
docker volume create n8n_data
docker run -it --rm --name n8n -p 5678:5678 \
  -e GENERIC_TIMEZONE="America/Sao_Paulo" -e TZ="America/Sao_Paulo" \
  -v n8n_data:/home/node/.n8n n8nio/n8n
```
Saída: log do n8n subindo, acesso em `http://localhost:5678`. Reparar: sem cartão de
crédito em nenhum passo.
`ref:` docs.n8n.io/deploy/host-n8n/install-options/install-with-docker
**Notas [00:34–00:36]:** "No Windows, isso roda dentro do Docker Desktop — sem WSL
configurado à parte, o Docker Desktop já resolve."

### 11. Anatomia de um workflow `[V]`
Diagrama: Gatilho → Normalizar → Chamar modelo → Extrair + calcular custo → Decidir → Agir.
Rotula cada caixa com o node real do workflow de hoje.
`ref:` `starter/n8n/workflow-classificador-leads.json`
**Notas [00:36–00:38]:** aponte cada caixa no editor real do n8n, já com o workflow de hoje
importado.

### 12. O gatilho de hoje: Webhook `[T]`
Terminal:
```
curl -X POST https://SEU-N8N/webhook/lead-pda \
  -H "Content-Type: application/json" \
  -d '{"nome":"Marcos","mensagem":"Preciso de site até sexta","canal":"whatsapp"}'
```
Reparar: isso é um gatilho **real** — qualquer formulário, WhatsApp Business API ou
planilha pode chamar essa URL.
`ref:` docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.webhook
**Notas [00:38–00:40]:** "Não é um botão que só vocês apertam. É isso que separa
automação de demo."

### 13. `MÃO NA MASSA` — LAB 1 `[V]`
Painel amarelo. `LAB 1` · "Importa o workflow, sobe o n8n, dispara o gatilho" · ⏱ 15 min ·
`n8n + curl`.
**Notas [00:40]:** critério de pronto: "curl retornou JSON com `urgencia`, `categoria` e
`custo_execucao_usd` preenchidos."

### 14. Vai quebrar `[V]`
Slot `[ PRINT ou tela ao vivo: erro 404 no webhook ]`. "Em algum momento vocês vão chamar a
URL errada."
**Notas [00:55]:** dispare o `curl` contra a URL de **teste** depois que ela já expirou, ao
vivo, de propósito.

### 15. Por que quebrou `[V]`
Diagrama: URL de teste (uma escuta só, exige clicar "Listen for test event") × URL de
produção (sempre ativa, exige o workflow **ativado**). Os dois erros mais comuns.
`ref:` docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.webhook
**Notas [00:56–00:58]:** "Guardem isso. É o erro nº 1 de quem começa com n8n."

### 16. O node que chama o Claude `[T]`
Bloco de código (o `jsonBody` do node HTTP Request, resumido) + saída real:
```json
{ "urgencia": "alta", "categoria": "orcamento",
  "resposta_sugerida": "...", "custo_execucao_usd": 0.000630 }
```
Reparar: o `custo_execucao_usd` não vem da Anthropic — o node calcula na hora, usando
`usage.input_tokens`/`usage.output_tokens` da resposta e o preço por milhão de tokens.
`ref:` preço Haiku 4.5 confirmado na Semana 11 (`aula21.../REFERENCIAS.md`, item 5)
**Notas [00:58–01:00]:** "Isso é o mesmo `usage` que vocês já leram no `cliente.js` da
semana passada. Só que agora quem lê é um node, não uma linha de código."

### 17. `</GOOGLE ADK>` — contraste, não tutorial `[V]`
Kicker + diagrama simples: "mesma automação, escrita em código." Ícone Python.
`ref:` github.com/google/adk-python
**Notas [01:00–01:01]:** "Não vamos aprender ADK a fundo hoje. Vamos ver o suficiente pra
vocês decidirem se algum dia precisam dele."

### 18. Instalar e rodar `[T]`
Terminal real:
```
pip install google-adk
adk create agente_minimo
adk run agente_minimo
```
Saída: prompt de conversa no terminal. Reparar: `adk create` já gera `agent.py`, `.env` e
`__init__.py` — igual ao `starter/adk/agente_minimo/` de hoje.
`ref:` adk.dev/get-started/python; pypi.org/project/google-adk
**Notas [01:01–01:03]:** "3 comandos. Não é difícil começar — o difícil é o que vem depois."

### 19. O mesmo agente, em código `[V]`
Comparação lado a lado: o node HTTP Request do n8n (JSON) × a função Python
`classificar_mensagem` (com type hints e docstring). Mesma lógica, forma diferente.
`ref:` `starter/adk/agente_minimo/agent.py`
**Notas [01:03–01:05]:** "Reparem: a função Python dá pra testar com `pytest` sem gastar
um token. O node do n8n, não."

### 20. Vai quebrar de novo `[V]`
Slot `[ PRINT ou tela ao vivo: traceback do agent.py ]`. "Troquei o nome do modelo achando
que era o mais forte."
**Notas [01:05]:** troque `gemini-flash-latest` por `gemini-pro` ao vivo e rode `adk run`.

### 21. Por que quebrou (de novo) `[T]`
"Mesmo bug do `cliente.js` da Semana 11: nome de modelo errado, escrito de memória em vez
de conferido na doc." Reforça: nunca escreva nome de modelo sem checar
`REFERENCIAS.md`/doc oficial.
**Notas [01:05–01:07]:** "É sempre isso. Sempre nome de modelo. Anotem essa frase."

### 22. O que se ganha `[V]`
Diagrama de 3 cards: **Versionar** (`git diff agent.py`) · **Testar** (`pytest` sem gastar
token) · **Avaliar** (`adk eval` contra `casos.test.json`, formato oficial do framework).
`ref:` adk.dev/evaluate
**Notas [01:07–01:09]:** "É o `starter/evals/runner.js` da Semana 11, só que nativo do
framework."

### 23. O que se perde `[V]`
Diagrama de 3 cards (contra-exemplo do slide anterior): **Velocidade** (o workflow n8n
subiu em minutos) · **Visual** (ninguém mostra `agent.py` pro dono de uma oficina) ·
**Ferramental** (exige saber Python, venv, traceback).
**Notas [01:09–01:10]:** "Pra 69 dos 75 aqui, a primeira automação que paga conta sai do
n8n. Isso não é o ADK perdendo."

### 24. `</AIOPS 2>` — a conta que ninguém ensina `[V]`
Kicker + ícone de calculadora/cifrão. Frase-âncora: "Você sai daqui sabendo quanto custa
apertar o botão."
**Notas [01:10–01:11]:** transição pro bloco de custo.

### 25. Fórmula de custo por execução `[V]`
Diagrama/fórmula: `custo = (tokens_entrada / 1.000.000 × preço_entrada) +
(tokens_saída / 1.000.000 × preço_saída)`. Abaixo, exemplo real calculado com os números
do slide 16 (180 tokens de entrada, 90 de saída, Haiku 4.5): **US$0,00063 por execução**.
Multiplicado por 300 execuções/mês: **US$0,19/mês**.
`ref:` preço confirmado na Semana 11 (Haiku 4.5 US$1/US$5 por MTok)
**Notas [01:11–01:14]:** "Ninguém cobra US$0,19 de um cliente. Mas ninguém cobra sem saber
que custa US$0,19 — é a diferença entre precificar e chutar."

### 26. Como precificar em cima disso `[T]`
"Seu custo real é sempre menor que o que você cobra — a diferença é margem, não é
enganação. Some hospedagem (Render, grátis até certo ponto) + tokens + seu tempo."
**Notas [01:14–01:15]:** liga direto com o parágrafo do dono do negócio do `ENTREGAVEL.md`.

### 27. `MÃO NA MASSA` — LAB 2 `[V]`
Painel amarelo. `LAB 2` · "Instrumenta o app da Semana 11: mede o custo de uma chamada
real e decide, pro seu projeto, se hoje é caso de agente, automação simples, ou nenhum dos
dois" · ⏱ 25 min · `n8n ou ADK + Langfuse`.
**Notas [01:15]:** critério de pronto: "uma linha preenchida na
`CUSTO-POR-EXECUCAO.csv` com números reais do SEU projeto, mais um `DECISAO-AGENTE.md`
com uma frase de justificativa."

### 28. `</TRACING>` — "funcionou" não basta `[T]`
"Semana 8: o verificador existe pro agente. Semana 11: eval é o verificador do
não-determinístico. Hoje: trace é a prova de uma execução específica, em produção, sem
você reproduzir o bug."
**Notas [01:35]:** transição dentro do Lab 2 — a facilitadora circula e assiste isso sendo
montado.

### 29. Langfuse: plano free + trace real `[V]`
Slot `[ PRINT ou tela ao vivo: um trace real aberto no Langfuse, com tokens/tempo/custo ]`.
Ficha: Hobby, grátis, sem cartão, 50.000 unidades/mês.
`ref:` langfuse.com/pricing; langfuse.com/integrations/frameworks/google-adk
**Notas [01:36–01:40]:** "Se o app de vocês nunca precisou de mais que a aba Executions do
n8n, não force isso. Ferramenta a mais sem necessidade é o mesmo erro do slide 7."

### 30. `</PROJETO FINAL>` — abertura `[V]`
Kicker + diagrama: "seu projeto desde a Semana 2 + camada de agente/automação. Nada é
descartado." Ícone de camada empilhada.
`ref:` `starter/PROJETO-FINAL.md`
**Notas [01:55]:** "A partir de hoje, todo lab que vocês fizerem entra nisso."

### 31. Gates e prazo `[V]`
Linha do tempo: Gate 1 (fim de hoje: decisão registrada) → Gate 2 (fim da Semana 13:
automação rodando + trace real) → Demo Day (Semana 14: apresentação final). "Atraso no
gate não tira ninguém do Demo Day."
**Notas [01:56–01:58]:** leia a tabela de gates do `starter/PROJETO-FINAL.md` em voz alta
uma vez.

### 32. `</DEMO DAY DE HOJE>` — anúncio da aula 24 `[V]`
Penúltimo slide da aula. Kicker + ícone de holofote: "Clínica rotativa nos primeiros 85
minutos. Últimos 30, demo relâmpago — 6 pessoas, 3 min cada." "Quem apresentou na Semana
11 não é sorteado hoje" (mecânica no `ROTEIRO-FACILITADORA.md`).
`ref:` rubrica reusada de `aula21-software-com-llm-dentro/starter/RUBRICA-DEMO-RELAMPAGO.md`
**Notas [02:15–02:17]:** "Sinalizem 'pronto pra demo' durante a clínica, igual da última
vez."

### 33. `</ATIVIDADE DE FIXAÇÃO>` `[T]`
Aponta pro `ENTREGAVEL.md`: prazo, formulário único, o que é obrigatório vs bônus.
**Notas [02:17–02:19]:** recap perguntando antes de mostrar — "quem lembra o que muda no
custo se eu trocar Haiku por Sonnet?"

### 34. `</PRÓXIMOS PASSOS>` `[T]`
Semana 13 (RAG) + Gate 2 do Projeto Final + lembrete: `.env` fora do commit, sempre.
**Notas [02:19–02:20]:** fechamento fixo — regra da casa: "você é responsável por cada
linha que commita", agora valendo também pra workflow de automação, não só pra código.
