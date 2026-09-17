# Checklist final de qualidade — Semana 14

Este é o documento que você traz pro plantão da aula 27. Não é decorativo: é o que
você audita item por item, e é o que a facilitadora (ou o monitor) pede pra ver
quando passa na sua mesa — "mostra teu CI verde", "roda teu `npm run verify`",
"abre teu `RESEARCH.md`". Se você não sabe onde está um item, isso já é o problema
que o plantão existe para resolver.

Formato: **[OBRIGATÓRIO]** bloqueia a nota mínima do `ENTREGAVEL.md` desta semana e o
seu pitch do Demo Day. **[DESEJÁVEL]** não bloqueia, mas é o que separa um pitch de
5 minutos de sobrevivência de um pitch de 8 minutos de verdade.

Marque com `[x]`. Ao lado de cada item obrigatório não marcado, escreva **uma linha**
dizendo o que está travando — é essa linha que você leva pro plantão, não o problema
inteiro sem nome.

---

## Bloco 0 — o esqueleto que nunca parou de existir (Semana 2)

- [ ] **[OBRIGATÓRIO]** Repositório do projeto próprio existe, é seu (não é o fork do
      curso), e está público ou compartilhado com a facilitadora.
- [ ] **[OBRIGATÓRIO]** `git log` do repo tem histórico real ao longo das semanas — não
      um commit único "projeto final" na véspera.
- [ ] **[OBRIGATÓRIO]** README na raiz explica o que o projeto faz, pra quem, e como
      rodar (comandos reais, copiáveis).
- [ ] **[OBRIGATÓRIO]** Separação código/teste existe e um comando de teste roda
      (`npm test` ou equivalente) sem erro de configuração.
- [ ] **[OBRIGATÓRIO]** `CLAUDE.md` na raiz, sem `TODO` pendente, específico do seu
      projeto (não é o template genérico intocado).
- [ ] **[OBRIGATÓRIO]** Existe pelo menos um artefato real do domínio escolhido (não é
      só "hello world" — é a coisa que o catálogo da Semana 2 descreveu).
- [ ] **[OBRIGATÓRIO]** **O parágrafo para o dono do negócio** existe, está atualizado
      pra refletir o que o projeto faz *hoje* (não o que você imaginava na Semana 2), e
      você consegue lê-lo em voz alta sem gaguejar. Esse parágrafo abre o seu pitch.

## Bloco 1 — regras do agente (Semana 3)

- [ ] **[OBRIGATÓRIO]** Uma skill própria em `.claude/skills/<nome>/SKILL.md`, com
      `description` que faz sentido pra alguém que nunca viu o projeto escolher ela.
- [ ] **[DESEJÁVEL]** A skill usa progressive disclosure (SKILL.md curto + arquivo de
      referência carregado sob demanda), não um arquivo monolítico.
- [ ] **[OBRIGATÓRIO]** `allowed-tools` da skill é restrito ao que ela precisa, não
      "libera tudo".
- [ ] **[DESEJÁVEL]** Existe (ou existiu, arquivado) um `RELATORIO-VALIDACAO.md` no
      formato de 3 cenários (dispara quando deve / não dispara quando não deve / falso
      positivo) de uma skill sua ou de um colega.

## Bloco 2 — ferramenta e superfície de ataque (Semana 4)

- [ ] **[OBRIGATÓRIO]** MCP server próprio em TypeScript, com pelo menos uma tool que
      serve o domínio do seu projeto, rodando via Claude Code.
- [ ] **[OBRIGATÓRIO]** `DECISAO-ESCOPO.md` da tool existe e nomeia explicitamente o
      que a tool **não pode fazer**.
- [ ] **[DESEJÁVEL]** Log de uma injection bem-sucedida no seu próprio server (formato
      `LOG-INJECTION-TEMPLATE.md` da Semana 4) — se você nunca tentou quebrar o próprio
      server, essa é uma tarefa de 15 minutos de plantão que vale a pena.

## Bloco 3 — fronteiras e sinais de código (Semana 5)

- [ ] **[OBRIGATÓRIO]** Bounded contexts do seu projeto desenhados (documento ou board),
      com nomes que você usa de verdade no código.
- [ ] **[OBRIGATÓRIO]** `RELATORIO-FRONTEIRA.md` existe.
- [ ] **[OBRIGATÓRIO]** O `checklist-sinais-codigo-ia.md` (Classe Deus, Miragem Modular,
      Camada de Passagem, nomeação genérica) foi aplicado ao **seu** repo, com achados
      reais, não "não encontrei nada".

## Bloco 4 — diagnóstico e especificação (Semana 6)

- [ ] **[OBRIGATÓRIO]** `RESEARCH.md` nomeia a dor real de negócio do seu domínio —
      quem sente, onde dói, o que custa hoje.
- [ ] **[OBRIGATÓRIO]** Pelo menos um ADR no padrão Nygard (`ADR-template.md`) para uma
      decisão real que você tomou no projeto.
- [ ] **[OBRIGATÓRIO]** Um documento único enxuto de especificação (PRD+Design Doc
      fundidos) para a feature central do seu projeto.
- [ ] **[OBRIGATÓRIO]** **5 critérios EARS** e **3 cenários BDD em Gherkin** escritos
      para essa feature.

## Bloco 5 — Spec-Driven Development (Semana 7)

- [ ] **[OBRIGATÓRIO]** Pelo menos **3 specs executadas** de ponta a ponta com o agente,
      usando o Spec Kit (ou o processo equivalente que você adaptou).
- [ ] **[OBRIGATÓRIO]** Tasks atômicas com gate (`TASKS-TEMPLATE.md`) para pelo menos uma
      dessas specs — cada task tem um jeito de provar que passou.
- [ ] **[DESEJÁVEL]** `REGISTRO-TAXA-DE-ACERTO.csv` preenchido com dados reais das suas
      sessões (não o exemplo da facilitadora).

## Bloco 6 — verificadores e CI (Semana 8)

- [ ] **[OBRIGATÓRIO]** **CI no GitHub Actions bloqueando merge** — lint, type check,
      build, testes e dependency check, os 5 sensores.
- [ ] **[OBRIGATÓRIO]** Branch protection configurada (ou a limitação documentada, se
      seu repo é privado no plano Free e você não usou o Student Pack).
- [ ] **[OBRIGATÓRIO]** Os 3 cenários BDD da Semana 6 viraram teste de verdade,
      executado pelo CI.
- [ ] **[DESEJÁVEL]** `LOG-RED-GREEN-REFACTOR` de pelo menos um ciclo completo.

## Bloco 7 — revisão de código com IA (Semana 9)

- [ ] **[OBRIGATÓRIO]** Dois subagentes de revisão configurados —
      `revisor-sinais-ia` e `revisor-seguranca-ia` — funcionando no seu projeto.
- [ ] **[OBRIGATÓRIO]** `REGISTRO-REVISAO-HUMANA.md` commitado **antes**, no `git log`,
      de qualquer rodada de subagente — a ordem é a prova, não a sua palavra.
- [ ] **[OBRIGATÓRIO]** `REGISTRO-SUBAGENTE.md` preenchido com achados reais dos dois
      subagentes rodando no seu código.
- [ ] **[DESEJÁVEL]** CSV de comparação (`REGISTRO-COMPARACAO.csv`) entre o que a
      revisão humana pegou e o que o subagente pegou.

## Bloco 8 — orquestração e MCP client (Semana 10)

- [ ] **[OBRIGATÓRIO]** MCP client próprio funcionando **sem LLM dentro** — handshake,
      lista tools, chama uma tool, imprime resultado.
- [ ] **[DESEJÁVEL]** Log de uma sessão paralela real (`LOG-SESSAO-PARALELA-TEMPLATE.md`)
      com múltiplos agentes/worktrees no seu projeto.
- [ ] **[DESEJÁVEL]** Documento "quando um agente único teria sido melhor"
      (`DOC-AGENTE-UNICO-TEMPLATE.md`) — o contra-argumento ao próprio paralelismo.

## Bloco 9 — produção com LLM dentro (Semana 11)

- [ ] **[OBRIGATÓRIO]** App **em produção** (Render ou equivalente), respondendo numa
      URL pública, não só em `localhost`.
- [ ] **[OBRIGATÓRIO]** Streaming, system prompt, tool calling e structured output
      presentes no código, não só citados.
- [ ] **[OBRIGATÓRIO]** `evals/casos.json` com pelo menos **5 casos reais do seu
      domínio** e um runner que roda em lote — e você sabe, de cabeça, quantos passam
      hoje e qual falha.
- [ ] **[OBRIGATÓRIO]** `CHECKLIST-SEGREDOS.md` seguido: chave nunca no código, `.env`
      no `.gitignore`, secret configurado no host.

## Bloco 10 — agentes e automação (Semana 12) `[CONFIRMAR COM SEMANA 12]`

> Este bloco foi escrito antes do `PACOTE.md` da `aula23-agentes-automacao` existir.
> Os itens abaixo seguem o que o `_BRIEF.md` e o `_GANCHOS.md` já garantem (n8n +
> Google ADK, AIOps 2); os nomes exatos de arquivo/artefato devem ser conferidos e
> substituídos quando esse pacote estiver pronto.

- [ ] **[OBRIGATÓRIO]** Uma automação n8n funcionando, ligada a algum ponto do seu
      domínio (mesmo que simples: disparo → decisão do modelo → ação).
- [ ] **[OBRIGATÓRIO]** O workflow n8n está exportado/documentado no repo do projeto
      (não só vivo dentro da conta n8n, que ninguém além de você acessa).
- [ ] **[DESEJÁVEL]** Alguma parte dessa automação versionada, testada e com deploy via
      Google ADK — "quando você precisa versionar, testar e fazer deploy disso".
- [ ] **[OBRIGATÓRIO]** AIOps 2: custo por execução e algum tracing/observabilidade do
      app da Semana 11 em produção (o mesmo deploy, não um novo).

## Bloco 11 — RAG (Semana 13) `[CONFIRMAR COM SEMANA 13]`

> Mesmo aviso do Bloco 10: `aula25-rag/PACOTE.md` não existia no momento em que este
> checklist foi escrito. Ajuste os nomes exatos quando existir.

- [ ] **[OBRIGATÓRIO]** Um pipeline de RAG funcionando sobre documentos **do seu
      próprio projeto** (specs, `RESEARCH.md`, ADRs, ou dados de domínio) — indexação +
      busca + resposta com citação da fonte.
- [ ] **[DESEJÁVEL]** Algum caso documentado de resposta **sem** RAG vs **com** RAG,
      mostrando a diferença.

## Bloco 12 — pronto para o Demo Day (Semana 14)

- [ ] **[OBRIGATÓRIO]** O parágrafo para o dono do negócio (Bloco 0) está lido em voz
      alta, cronometrado, e cabe nos primeiros 30-45 segundos do seu pitch.
- [ ] **[OBRIGATÓRIO]** Você identificou, junto com o `ROTEIRO-PITCH-TEMPLATE.md`,
      **um ponto concreto onde o seu julgamento foi indispensável** — algo que o agente
      não decidiu sozinho — e sabe explicar isso em uma frase.
- [ ] **[OBRIGATÓRIO]** Você tem um plano B para o pitch: se o app não subir na hora,
      existe um vídeo curto (30-60s) do funcionamento gravado com antecedência.
- [ ] **[OBRIGATÓRIO]** `AUTOAVALIACAO-FINAL.md` preenchida.
- [ ] **[OBRIGATÓRIO]** Você sabe, sem checar, se está no grupo que apresenta ao vivo
      ou no grupo que envia vídeo — ver `ROTEIRO-FACILITADORA.md` da Semana 14 para o
      formato escolhido.

---

## O que fazer com este checklist na aula 27

Antes de entrar na fila do plantão, marque tudo que já está pronto. **A fila é
organizada pelos itens obrigatórios não marcados** — quem tem um bloqueador (CI
vermelho, app fora do ar, teste que não roda) tem prioridade sobre quem só quer
polir um item desejável. Ver `ROTEIRO-FACILITADORA.md` para a mecânica completa.

Se ao final da aula 27 você ainda tem itens obrigatórios não marcados, veja
`POLITICA-REPOSICAO-GATES.md` — existe um caminho, mas ele tem prazo.
