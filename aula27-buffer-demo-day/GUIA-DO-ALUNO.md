# Guia do aluno — Semana 14 (aulas 27 e 28)

Este guia não ensina nada novo. Ele explica **como usar as duas aulas** — o plantão e
o Demo Day — e reúne o troubleshooting mais comum de todo o curso num lugar só,
porque essa é a semana em que problemas antigos que ninguém resolveu voltam à tona.

---

## Antes da aula 27: a auditoria

Abra `starter/CHECKLIST-FINAL-QUALIDADE.md`. Para cada item, tente de verdade — rode
o comando, abra o arquivo, confira o CI no GitHub — antes de marcar. "Acho que está
ok" não é auditoria.

Ao final, você deve ter uma lista curta (idealmente vazia, realisticamente não) de
itens **[OBRIGATÓRIO]** não marcados, cada um com uma linha dizendo o que trava. Essa
lista é o seu ingresso pra fila do plantão — ver abaixo.

**Se a lista está longa** (mais de 4-5 itens obrigatórios em aberto): não entre em
pânico e não tente resolver tudo sozinho antes da aula. Vá assim mesmo. É exatamente
pra isso que o plantão existe, e quem chega com mais coisa quebrada tem prioridade na
fila, não vergonha por ter mais coisa quebrada.

## Como funciona o plantão (aula 27)

Não é aula. Não tem slide de conteúdo novo depois do Giro das IAs. Funciona assim:

1. **Fila por prioridade, não por ordem de chegada.** Quem tem um item obrigatório
   que **bloqueia** (app fora do ar, CI vermelho, teste que não roda, repositório que
   não clona) entra antes de quem só quer polir um item desejável.
2. **Sinalize o problema em uma linha**, não narre a história toda antes de pedir
   ajuda — a facilitadora vai perguntar o que precisar, mas a fila anda mais rápido
   quando todo mundo chega com o problema já nomeado (é o mesmo princípio da mecânica
   de clínica rotativa das Semanas 7, 8, 11 e 12 — vocês já conhecem).
3. **Se três ou mais pessoas sinalizarem o mesmo tipo de problema**, ele vai pro
   telão — a facilitadora explica uma vez pra todo mundo em vez de repetir a mesma
   correção em três mesas diferentes. Isso não é "sua dúvida virou pública sem
   permissão" — é o oposto: sua dúvida é comum o suficiente pra merecer atenção da
   sala inteira.
4. **Se você não pediu ajuda, isso não significa que está tudo bem.** A facilitadora
   circula ativamente com o checklist na mão e pede pra ver itens específicos — "me
   mostra teu CI verde", "roda teu `npm run verify` aqui" — porque às vezes o
   problema é justamente não perceber que tem um problema, ou não ter coragem de
   levantar a mão. Se ela chegar na sua mesa sem você ter chamado, é rotina, não
   sinal de que algo está muito errado.

## Preparando o pitch (entre as aulas 27 e 28)

1. Abra `starter/ROTEIRO-PITCH-TEMPLATE.md` e escolha a faixa: mínima (5 min) ou
   completa (8 min).
2. Preencha cada seção com o conteúdo real do seu projeto — não com placeholder.
3. **Cronometre em voz alta, com cronômetro, pelo menos uma vez.** Ler mentalmente
   sempre parece mais rápido do que fica falado. Se passou do tempo, corte conteúdo,
   não corte a velocidade da fala.
4. Grave o vídeo de plano B: 30-60 segundos do produto funcionando, gravado com
   antecedência, pronto pra abrir se a demo ao vivo travar durante o Demo Day.
5. Confira com a facilitadora (ou no `ROTEIRO-FACILITADORA.md` publicado) se você
   está no grupo que apresenta ao vivo ou no grupo que envia vídeo — o formato de
   logística com 75 pessoas está descrito lá, e muda o que você precisa preparar.

## Durante o Demo Day (aula 28)

- Chegue com o app de produção já aberto numa aba, logado, com dados de exemplo já
  carregados — não gaste tempo do seu próprio pitch configurando ambiente na hora.
- Enquanto assiste os colegas, preencha `starter/RUBRICA-DEMO-DAY.md` pra cada um —
  não é plateia passiva, é tarefa fixa (mesma mecânica das demos relâmpago das
  Semanas 11 e 12).
- Se você quebrar ao vivo: **não tente depurar na frente de todo mundo.** Corte pro
  vídeo de plano B em até um minuto e siga o roteiro. Ninguém perde pontos por usar o
  plano B — perde pontos por não ter um.

---

## Troubleshooting — os problemas mais comuns do curso inteiro, num lugar só

| Sintoma | Causa provável | O que fazer |
|---|---|---|
| `npm test` não roda / erro de módulo não encontrado | `node_modules` desatualizado ou versão de Node errada | `node -v` (precisa 20+ desde a Semana 11); `rm -rf node_modules package-lock.json && npm install` |
| CI vermelho no GitHub Actions e você não sabe por quê | Log do Actions não foi lido até o fim — geralmente o primeiro erro real está longe do topo | Abra a aba "Actions" no GitHub, clique no job vermelho, procure a primeira linha em vermelho de baixo pra cima, não de cima pra baixo |
| App do Render não responde / erro 502 | Plano gratuito hiberna depois de 15 min sem tráfego — primeira request acorda em ~1 min | Dê um refresh depois de 1 minuto antes de assumir que quebrou; no Demo Day, "acorde" o app 5 minutos antes da sua vez |
| Build falha no Render mas passa local | Variável de ambiente não configurada no host (só existe no seu `.env` local) | Confira `starter/DEPLOY.md` da Semana 11 e a aba Environment do Render |
| Chave de API dá erro de autenticação | `.env` não carregado, ou chave revogada/expirada | Rode o smoke test (`teste-chave.js`, Semana 11); gere uma chave nova no console se necessário |
| Skill não é chamada pelo agente | `description` genérica demais, não diz quando usar | Reescreva a `description` nomeando a situação de uso, não só o que a skill faz |
| Subagente de revisão não roda | Nome do arquivo ou frontmatter incorreto em `.claude/agents/` (ou pasta equivalente) | Confira contra `agentes-revisao/revisor-sinais-ia.md` da Semana 9 como referência de formato |
| MCP server ou client não conecta | Configuração de `.mcp.json` apontando pro caminho errado, ou server não builda | `/mcp` dentro do Claude Code mostra o status da conexão; rode o build do server manualmente antes de debugar o client |
| Git diz "não é possível fazer push" | Branch protection bloqueando push direto na `main`, ou branch desatualizada | `git pull --rebase origin main` e resolva conflito; se for branch protection, abra PR em vez de push direto |
| Não lembro onde ficou um artefato de semana antiga | Documentos espalhados sem convenção de pasta | Use o `CHECKLIST-FINAL-QUALIDADE.md` como índice — ele cita o nome exato de cada artefato por semana |

**Se o seu problema não está na tabela:** é exatamente o tipo de coisa que vai pro
plantão da aula 27. Não gaste a semana inteira sozinho tentando resolver algo que
três outras pessoas provavelmente também não conseguiram resolver — leve pra fila.

## Terminal: qual usar (retomada da aula 1, pra quem ainda não fixou)

| Situação | Use |
|---|---|
| Windows, já configurou WSL desde cedo no curso | WSL (mais compatível com os comandos do curso) |
| Windows, sem WSL configurado | Git Bash (os comandos deste curso foram testados nele) |
| Windows, só PowerShell disponível | Funciona pra `git`/`npm`, mas alguns comandos com `&&` precisam virar `;` — se travar, é isso |
| Mac / Linux | Terminal padrão, sem ajuste |

Se você chegou até a Semana 14 sem resolver o terminal, isso também é assunto de
plantão — não é tarde demais pra consertar o ambiente antes de apresentar.
