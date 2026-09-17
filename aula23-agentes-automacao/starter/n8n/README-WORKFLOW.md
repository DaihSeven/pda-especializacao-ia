# `workflow-classificador-leads.json` — o que é e como importar

Automação ponta a ponta: alguém manda uma mensagem (formulário, WhatsApp, o que for) →
Claude classifica urgência e categoria e sugere uma resposta → o workflow decide sozinho
se alerta um humano ou responde automático → devolve o resultado. É o mesmo esqueleto
tool + structured output da Semana 11 (`aula21-software-com-llm-dentro`), só que o loop
que antes vivia em `loop.js` agora vive em nodes visuais.

## Como importar

1. Abra o n8n (local, `http://localhost:5678`, ver `GUIA-DO-ALUNO.md` da semana pra subir
   o container).
2. Menu **Workflows > Import from File** (ou `Ctrl+O`) e selecione este arquivo.
3. Crie a credencial: **Credentials > New > Header Auth**. Nome do header: `x-api-key`.
   Valor: sua `ANTHROPIC_API_KEY` (a mesma da Semana 11 — não precisa gerar uma nova).
4. Abra o node **3. Classificar com Claude (HTTP Request)** e, no campo de credencial,
   selecione a que você acabou de criar (o JSON vem com um ID de placeholder que não
   existe no seu n8n — é esperado, o import não traz credencial de ninguém).
5. Ative o workflow (toggle **Active** no topo) — sem isso a URL de produção do webhook
   não responde. Isso é literalmente o erro proposital da demo de hoje (ver
   `ROTEIRO-FACILITADORA.md`): **URL de teste e URL de produção do webhook são
   diferentes**, e a de teste só escuta uma vez, depois que você aperta "Listen for test
   event". Confira a doc oficial antes de jurar que "não tá funcionando":
   <https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.webhook/>.
6. Copie a URL de produção do node **1. Gatilho real (Webhook)** e dispare com:

   ```bash
   curl -X POST https://SEU-N8N/webhook/lead-pda \
     -H "Content-Type: application/json" \
     -d '{"nome":"Marcos","mensagem":"Preciso de um site pra minha oficina até sexta, quanto custa?","canal":"whatsapp"}'
   ```

## O que reparar na saída

```json
{
  "urgencia": "alta",
  "categoria": "orcamento",
  "resposta_sugerida": "Marcos, consigo te atender...",
  "custo_execucao_usd": 0.000312
}
```

`custo_execucao_usd` não vem da API — o node 4 calcula isso na hora, usando
`usage.input_tokens` e `usage.output_tokens` que a própria resposta da Anthropic traz, e
o preço por milhão de tokens do Haiku 4.5 (US$1 entrada / US$5 saída, confirmado na
Semana 11, `aula21-software-com-llm-dentro/REFERENCIAS.md` item 5). É o mesmo cálculo da
`starter/CUSTO-POR-EXECUCAO.csv` desta semana, só que ao vivo, dentro do workflow.

## Por que Haiku 4.5 e não Sonnet 5 aqui

Classificar uma mensagem curta em 3 categorias é uma tarefa simples que vai rodar
**muitas vezes** (é automação, não conversa pontual). Sonnet custaria 2x na entrada e 2x
na saída pelo mesmo resultado. Automação que roda em volume é onde a escolha de modelo
mexe direto na precificação — isso é literalmente o parágrafo do dono do negócio desta
semana.

## Onde entra o julgamento que o agente não resolve

Os nodes **6a** e **6b** são `NoOp` (não fazem nada) de propósito. O modelo decide
*urgência*; **você decide o que "alta urgência" significa pro seu negócio** e pra qual
canal isso vai (Slack? WhatsApp pessoal? e-mail?). Ligar esse fio é trabalho do Lab 2 —
ver `GUIA-DO-ALUNO.md`.

## Os 5 (de 7) domínios em que este workflow encaixa sem alterar a estrutura

| Domínio do catálogo | Como |
|---|---|
| 2 — Captação de clientes / freelancer | Uso direto: troca só o texto do `system` e a tool |
| 1 — Listagem de perfis da PDA | `mensagem` vira "pergunta sobre um perfil"; a tool classifica tipo de busca |
| 4 — Avaliação automatizada de projetos | A tool vira `avaliar_criterio`; o gatilho é o `git push` (webhook do GitHub) em vez de formulário |
| 6 — Problema real da ONG | Qualquer mensagem recebida pela ONG que precise de triagem (dúvida de aluno, pedido de suporte) |
| 7 — Domínio próprio | O esqueleto (webhook → normalizar → tool → custo → roteamento) é agnóstico de domínio |
