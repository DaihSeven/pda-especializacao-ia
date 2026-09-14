# PACOTE.md — Semana 8: Verificadores (aula15-verificadores)

Documento interno pra Iasmim e para a orquestradora. Não vai pro aluno.

**Nota sobre módulo:** o cabeçalho do `ENTREGAVEL.md` usa "Módulo 3 —
Engenharia e verificação para desenvolvimento com IA" como **chute** — não
há mapeamento aula→módulo definido no `_BRIEF.md` (mesma situação já
registrada pelo lote 1 no `PACOTE.md` da semana 3). O chute agrupa as
semanas 5-8 (`aula9`-`aula15`) num módulo só, já que as quatro tratam de
rigor de engenharia em torno do agente. Ajustar se a Iasmim já tiver
numeração definida.

---

## 0. Ferramentas escolhidas — decisão e justificativa

**CI:** GitHub Actions (não Jenkins, CircleCI, GitLab CI). Justificativa:
o material do curso inteiro já vive em repositórios GitHub desde a aula 1
(fork do curso + repo próprio do aluno) — GitHub Actions não exige
cadastro extra, roda direto no mesmo lugar onde o código já está, e é o
que a documentação oficial do Claude Code e do MCP também usam como
referência de exemplo. Nenhuma alternativa foi cogitada como opção pro
aluno — decisão única, como a Semana 4 fez com TypeScript.

**Dependency check:** dois mecanismos, não um só:
1. `npm audit` (nativo do npm, zero configuração extra, funciona em
   qualquer plano/visibilidade de repositório) — pega vulnerabilidade
   conhecida em dependência já instalada.
2. `dependency-review-action` (ação oficial do GitHub) — pega vulnerabilidade
   **antes de mergear**, comparando o que o PR está adicionando contra a
   base. Só funciona de graça em repositório público (privado exige GitHub
   Advanced Security, plano pago) — por isso o `ci.yml` inclui os dois: o
   `npm audit` como piso universal, e o `dependency-review-action` como
   camada extra pra quem tem repo público.

Justificativa de **não** ter escolhido uma ferramenta de terceiro
(Snyk, Socket, Dependabot como serviço separado) pra esta semana: as duas
ferramentas escolhidas já vêm com o ecossistema que o aluno já usa (npm e
GitHub), zero cadastro novo, zero chave de API nova — coerente com o
padrão da Semana 4 (TypeScript, SDK oficial, sem fragmentar suporte em
sala). Dependabot alerts (passivo, não bloqueia PR sozinho) fica citado
como leitura complementar no `REFERENCIAS.md`-adjacente se algum aluno
quiser ir além, mas não é ensinado ativamente.

**Versões de action pinadas:** `actions/checkout@v7`, `actions/setup-node@v7`,
`actions/dependency-review-action@v5`, Node **22** no `node-version`
(não 20 — o Node 20 é removido dos runners do GitHub em 23 de setembro de
2026, ver `REFERENCIAS.md`). Todas confirmadas nas páginas de releases
oficiais nesta sessão.

**Por que o teste EXATO das 3 cenas BDD, e não "escreva testes pro seu
projeto" genérico:** força um artefato de rastreabilidade (cenário → teste,
1 pra 1) que qualquer facilitadora consegue avaliar sem reconstruir o
raciocínio do aluno do zero, e reusa trabalho já feito na Semana 6 em vez
de pedir cenário novo.

---

## 1. Mapeamento Alura

| Curso/módulo Alura | Carga | O que cobre | O que isso tira do síncrono |
|---|---|---|---|
| **Integração Contínua: pipelines e testes automatizados com GitHub Actions** (`alura.com.br/curso-online-integracao-continua-pipelines-testes-automatizados-github-actions`, 8h) | O que é integração contínua, subindo o projeto, GitHub Actions do zero, protegendo segredos, geração de artefato | O aluno chega à aula 1 já sabendo o que é um workflow, a sintaxe básica de `on:`/`jobs:`/`steps:`, e por que segredos não vão direto no YAML. **É por isso que a teoria de "o que é um workflow" não é explicada do zero em sala** — a aula assume isso e vai direto pra "workflow como verificador que bloqueia merge", que é a parte que a Alura não cobre (ela ensina a construir o pipeline, não a usá-lo como trava de qualidade). |
| **Testes com TypeScript: refatoração, TDD e boas práticas** (`alura.com.br/curso-online-testes-typescript-refatoracao-tdd-boas-praticas`, 8h) | Test doubles, Jest spying, refatoração, começando com TDD, testes de unidade e de integração com TDD, estudo de caso | O aluno chega já tendo visto o ciclo TDD pelo menos uma vez, com ferramenta (Jest) diferente da usada em sala (`node:test`, pra não introduzir mais uma dependência de framework de teste nesta semana). **A explicação de "por que o teste vem primeiro" não é reconstruída do zero** — a aula 1 nomeia o ciclo (red/green/refactor) e vai direto pra exigir a **prova** disso via log e ordem de commit, que é o que a Alura não força (lá o exercício é guiado, aqui o aluno tem que provar sozinho que fez a ordem certa). |
| **OWASP IA Top 10 para LLMs: protegendo aplicações e agentes inteligentes** (já mapeado pela Semana 4, `alura.com.br/curso-online-owasp-top-10-para-llms`, 5h) — módulo de "Integridade de dados e supply chain" | Supply chain de dependência em geral (não específico de LLM) | A Demo 2 (vulnerabilidade conhecida em dependência) **não reexplica o conceito de supply chain attack** — assume que a turma já tem o vocabulário desde a Semana 4, e vai direto pro caso concreto (CVE real, `npm audit` rodando). |

**Pré-requisito de entrada no lab da aula 2 (contrato, não punição):** os
dois blocos de "Integração Contínua com GitHub Actions" e "Testes com
TypeScript: TDD" concluídos antes da aula 2 — sem isso o aluno não tem
vocabulário mínimo de workflow/YAML nem já viu um ciclo TDD guiado, e
atrapalha a clínica.

---

## 2. O que foi cortado

O enunciado desta semana já avisa que **a semana estava calibrada na grade
antiga** — o trabalho aqui não é cortar 20-30%, é acrescentar um sensor
(dependency check) sem estourar os 120 minutos. Mesmo assim, alguns cortes
deliberados de escopo, pra não inflar a aula:

| Corte | Onde foi (antes → agora) |
|---|---|
| Deploy contínuo (CD) — publicar automaticamente depois do merge | Fora do escopo desta semana de propósito: o foco é o **gate** (o que bloqueia), não a entrega (o que roda depois). Fica coberto pela Alura ("Integração Contínua: pipelines e testes automatizados", que também tem "geração de artefato" e menção a deploy) — não é ensinado ativamente em sala. |
| Cobertura de código (coverage) como métrica de qualidade | Citada só de passagem, como parte do padrão "cobertura alta sem valor" (um dos 3 exemplos de teste que não prova nada) — não vira um bloco de aula com ferramenta de coverage configurada. Cobertura numérica sem contexto é exatamente o oposto do que a semana ensina a valorizar. |
| Mutation testing (ferramenta automatizada tipo Stryker) | Citado como gancho livre no fechamento do `ROTEIRO-FACILITADORA.md`, não ensinado. A semana ensina a versão manual (quebrar a implementação de propósito e ver se o teste pega) porque isso é o julgamento indispensável do aluno — automatizar isso é uma ferramenta a mais, não o conceito central. |
| Dependabot como serviço de alerta contínuo (separado de `npm audit`/`dependency-review-action`) | Mencionado de passagem no PACOTE.md (seção 0) como leitura complementar — não ensinado ativamente, pra não fragmentar a aula em 3 ferramentas de dependência diferentes quando 2 já cobrem os dois casos de uso da semana. |
| Varredura ampla de "boas práticas de CI" (matrix de múltiplas versões de Node, cache avançado, workflows reutilizáveis, environments) | Vira slide de referência implícito (comentários no próprio `ci.yml`), não bloco de aula — a régua da semana é "bloqueia merge com 5 sensores", não "pipeline de produção completo". |

---

## 3. Ganchos para frente

- **Semana 9 (`aula17-code-review-subagentes`)** pode assumir que todo aluno
  tem CI bloqueando merge funcionando e um `npm run verify` local — um
  subagente de code review desta semana pode (e deveria) rodar **depois**
  que os 5 sensores já passaram, focando em julgamento que sensor nenhum
  cobre (arquitetura, nomes, se o código faz o que devia além de "compila e
  os testes passam").
- **Semana 9** também pode reusar literalmente a taxonomia dos "3 padrões
  de teste que não prova nada" (`starter/teste-que-nao-prova-nada-exemplos.md`)
  como um dos itens que o red team em duplas caça no código do colega — é
  um artefato pronto, não precisa reinventar.
- **Qualquer semana futura que mencione hooks do Claude Code** (rodar
  `npm run verify` automaticamente depois de cada edição do agente) pode
  citar a Demo 1 desta semana como o "antes" — o `demo-sem-verificador` é
  literalmente o caso que um hook de pós-edição resolveria sozinho.
- **O vocabulário de segurança da Semana 4** (prompt injection, improper
  output handling, supply chain de MCP) ganha um quarto membro de fato,
  mesmo sem ser nomeado como tal: **package hallucination / slopsquatting**
  é outro caso de supply chain attack, desta vez contra o registro npm em
  vez de contra um MCP de terceiros. Qualquer semana futura de segurança
  (11, 12) pode amarrar os dois como "a mesma categoria de risco, dois
  vetores diferentes" sem reexplicar do zero.
- **A mecânica "fila do CI vermelho" + "diagnóstico às cegas antes do
  código aparecer"** é reusável em qualquer clínica rotativa futura (não há
  mais nenhuma no mapeamento fixo do `_BRIEF.md` depois desta, mas fica
  registrado como padrão caso a grade mude).
- **O template `LOG-RED-GREEN-REFACTOR` e a régua "prova pela ordem dos
  commits, não pela narrativa"** são um padrão de curso, não só desta
  semana — qualquer atividade futura que peça TDD com agente deveria exigir
  o mesmo tipo de prova.

## 4. Ganchos para trás

Retomados do `_GANCHOS.md` (lote 1, leitura obrigatória confirmada):

- **"Comando de teste que roda"**, contrato mínimo do esqueleto desde a
  Semana 2: esta semana é literalmente a evolução dele — de "um comando que
  roda" para "quatro comandos que rodam E bloqueiam merge se falharem".
  Citado no README.md e no `GUIA-DO-ALUNO.md` como "o piso que a Semana 8
  faz evoluir" (o próprio gancho da Semana 4 já previa isso: "o comando de
  teste que roda é o piso que as semanas 7 e 8 fazem evoluir").
- **Formato de validação em 3 cenários** (dispara quando deve / não dispara
  quando não deve / falso positivo), inventado na Semana 3: reusado
  explicitamente, com o nome citado, no slide 9 e na teoria da Demo 1 —
  aplicado agora a teste e linter em vez de a skill. O `_GANCHOS.md`
  já pedia isso nominalmente ("a semana 8 (Verificadores) deve reusá-lo
  explicitamente") — feito.
- **Mecânica de sorteio**, usada nas semanas 3 e 4 pra pareamento: reusada
  aqui só como critério de **desempate** na fila do CI vermelho (não é o
  mecanismo principal de seleção desta vez — a fila em si é o que muda em
  relação ao formato genérico de clínica).
- **Trio de vocabulário de segurança da Semana 4** (prompt injection,
  improper output handling, supply chain de MCP): citado na Demo 2/3 como
  pano de fundo — dependency check estende o conceito de "supply chain" pra
  fora do MCP, pro registro npm.
- **DECISAO-ESCOPO.md** (convenção da Semana 4 pra qualquer tool nova): não
  usado diretamente nesta semana (não estamos criando tool nova), mas citado
  de passagem como "o mesmo tipo de decisão explícita antes de codar" ao
  justificar por que `--audit-level=high` é uma escolha e não um padrão
  neutro.

**Dependências assumidas de semanas ainda não escritas** (registradas
porque nenhuma das três pastas abaixo existe no momento deste pacote —
verificado por `ls` direto, não por suposição):

- **Semana 5 (`aula9-engenharia-para-ia`)** — o enunciado desta tarefa diz
  que ela entrega "um checklist nomeado de sinais de código ruim gerado por
  IA". Esta semana **não** assume esse checklist como pré-requisito direto
  (o recap ativo da aula 1 recupera a Semana 7, não a 5), mas se esse
  checklist existir com nomes específicos de sinais, vale citar no bloco
  "teste que não prova nada" como reforço cruzado — ajuste se fizer sentido
  quando a Semana 5 for escrita.
- **Semana 6 (`aula11-diagnostico-documentos-rpi`)** — dependência
  **direta e obrigatória**: o entregável desta semana pede explicitamente
  "os 3 cenários BDD da semana 6 virados em teste". Como a pasta não existe
  ainda, todo o material aqui (`starter/bdd-para-teste/`, item 2 do
  `ENTREGAVEL.md`) foi escrito de forma **genérica** — instrui o aluno a
  abrir os próprios cenários de onde quer que eles estejam no material da
  Semana 6, com um exemplo modelo autoral (domínio 1) só pra mostrar a
  régua de formato, não pra assumir conteúdo real que ainda não existe. Se
  a Semana 6, quando escrita, nomear os cenários de forma diferente (outro
  nome de arquivo, outro domínio de exemplo), **nenhum ajuste estrutural é
  necessário aqui** — só o texto de referência ao caminho do arquivo.
- **Semana 7 (`aula13-spec-driven-development`)** — dependência dupla:
  (a) o recap ativo da aula 1 assume "tasks atômicas com gate" e "registro
  de taxa de acerto de primeira tentativa" como artefato do aluno; (b) a
  clínica rotativa da aula 2 desta semana se diferencia explicitamente da
  clínica da Semana 7, presumindo a descrição genérica do formato do
  `_BRIEF.md` (seção 5.1) já que o roteiro real da Semana 7 não existe
  ainda. Ambas as suposições estão marcadas inline no
  `ROTEIRO-FACILITADORA.md` com uma nota de dependência — se a Semana 7,
  quando escrita, definir algo estruturalmente diferente do presumido,
  revisar essas duas seções específicas (não o pacote inteiro).

---

## 5. Cobertura dos 7 domínios do catálogo

| # | Domínio | Funciona? | Como |
|---|---|---|---|
| 1 | Listagem de perfis de alunos da PDA | ✅ | Projeto web (React/Next ou similar) com `package.json` padrão — os 5 sensores aplicam sem adaptação. É o domínio usado no exemplo modelo do `ENTREGAVEL.md` e em `starter/bdd-para-teste/`. |
| 2 | Captação de clientes e automações para freelancers | ✅ | Se o projeto é majoritariamente código (pipeline em Node/TS que processa leads): os 5 sensores aplicam direto. Se for híbrido com automação (n8n + um webhook fino): usa a tabela de adaptação do `GUIA-DO-ALUNO.md` ("CI para projeto de automação") na parte automatizada. |
| 3 | Quiz conectado ao Claude | ✅ | Projeto web com export de resultado — aplica direto, sem adaptação; um dos cenários BDD naturais aqui é "resultado exportado tem todos os campos obrigatórios". |
| 4 | Avaliação automatizada de projetos por IA | ✅ | CLI/serviço Node/TS que lê outros repositórios — aplica direto. Bônus pedagógico: é literalmente um projeto que **também é** um verificador (ele checa entregas de outros alunos), bom gancho de discussão em sala sobre "quem verifica o verificador". |
| 5 | Agente de revisão de código com a voz da PDA | ✅ | Mesmo caso do domínio 4 — CLI/serviço, aplica direto. Os "3 padrões de teste que não prova nada" são especialmente relevantes aqui: uma ferramenta que revisa código de terceiros precisa que os PRÓPRIOS testes dela sejam confiáveis. |
| 6 | Problema real da ONG ou das aulas | ✅ | Variável por natureza — se o problema trazido pela facilitadora naquele momento for majoritariamente automação (caso comum em processos de ONG: planilha + Zapier/n8n), usa a tabela de adaptação do `GUIA-DO-ALUNO.md`; se for código (dashboard, script de relatório), aplica direto. |
| 7 | Domínio próprio do aluno | ✅ | **É o caso explicitamente verificado**: quando o negócio do aluno é "quase todo automação e quase nada de código" (ex.: um fluxo n8n com um webhook custom mínimo), a tabela "CI para projeto de automação" do `GUIA-DO-ALUNO.md` mapeia os 4 nomes de script pra validação de schema JSON, importação sem erro, teste de contrato com fixture, e `npm audit` sobre o `package.json` residual — nenhum dos 5 sensores é descartado, cada um só muda de implementação. |

**Cobertura: 7 de 7.** O domínio 7 (com a variante "quase nada de código")
era o risco real de falhar em menos de 5 domínios — resolvido com a tabela
de adaptação em vez de excluir o caso.

**MCP server da Semana 4 (`aula7-mcp-server`):** funciona sem nenhuma
adaptação — já é um projeto TypeScript com `package.json`, o mesmo
`ci.yml` se aplica copiando pra dentro daquele repo (ou, mais realista,
pro repo do projeto próprio que hospeda o server). Citado no README.md.

---

## 6. Soma dos minutos

**Aula 1:** 10 (Giro) + 15 (Recap) + 30 (Teoria+Demo 1) + 15 (Lab 1) +
20 (Teoria+Demo 2/3) + 25 (Lab 2) + 5 (Fechamento) = **120 min.**

**Aula 2:** 10 (Abertura+mecânica) + 90 (Construção contínua com 6
checkpoints de 15 min) + 15 (Consolidação) + 5 (Fechamento) = **120 min.**

(Tabelas completas, bloco a bloco e minuto a minuto dos 6 checkpoints, com
o que se diz e o que se faz em cada um: ver `ROTEIRO-FACILITADORA.md`.)

---

## 7. Onde o julgamento do aluno é indispensável

**O ponto exato:** decidir **quando um teste verde não prova nada** — e
achar um exemplo real disso no próprio repositório.

Por que o agente não resolve isso sozinho: peça ao Claude Code "escreve um
teste pra essa função" e ele entrega um teste sintaticamente correto, que
roda, que passa — tudo isso é tarefa mecânica que um agente resolve bem
(às vezes bem demais: é comum o agente gerar um teste que só confirma que a
função "não lança exceção", sem checar o valor de retorno, porque isso é
mais fácil de fazer passar de primeira). O que ele não decide por você é
**se aquele teste, do jeito que está, seria capaz de pegar uma quebra real**
— isso exige quebrar a implementação de propósito e observar, e é
exatamente o tipo de ceticismo que não vem de pedir "revisa esse teste" pro
mesmo agente que o escreveu (ele tende a validar o próprio trabalho).

**Como o lab força essa decisão a acontecer:** o item 4 do `ENTREGAVEL.md`
exige explicitamente achar 1 dos 3 padrões
(`starter/teste-que-nao-prova-nada-exemplos.md`) no próprio repo,
documentar o antes (o teste que não provava nada) e o depois (corrigido),
com a prova mecânica de quebrar a implementação e ver se o teste realmente
reage. Isso não é opcional nem tem "não achei nenhum" como saída fácil — a
própria página do `starter/` instrui o que fazer se genuinamente não achar
nenhum dos três (aplicar o mesmo processo de quebra num teste que já está
bom, provando que ele detecta).

---

## 8. Excalidraw

Esta semana **não usa Excalidraw**. Motivo: o formato fixo da aula 2 é
clínica rotativa (seção 5.1 do `_BRIEF.md`), não modelagem coletiva — as
semanas com Excalidraw obrigatório são S5 e S6. O quadro visual desta
semana é a "fila do CI vermelho" (ver `SLIDES-OUTLINE.md`, slide A3), que é
intencionalmente uma lista/planilha simples, não um diagrama de
arquitetura — porque o conteúdo da aula 2 é depuração ao vivo de CI real,
não desenho de sistema.
