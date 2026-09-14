# Outline de slides — Semana 10: Orquestração, paralelismo e o MCP client próprio

Fio condutor da aula, repetido nas transições marcadas com 🔁: **"três agentes não fazem
um terço do tempo."**

Legenda de marcação visual: **[V]** = slide tem imagem/diagrama/GIF/print — nunca mais de
3 slides seguidos sem um. **[MÃO NA MASSA]** = facilitadora para de falar.

---

## AULA 1

### 1. Capa

`> SEMANA 10` · `</ORQUESTRAÇÃO, PARALELISMO E O MCP CLIENT PRÓPRIO>` · subtítulo:
"três agentes não fazem um terço do tempo." · estrela do template.

**Nota:** `[00:00–00:02]` Abertura padrão, sem falar do conteúdo ainda — isso é o Giro
das IAs.

### 2. `</HOJE>` — linha do tempo minuto a minuto [V: diagrama]

Espelha a tabela da seção 5 do roteiro: Giro (10) → Recap (15) → Teoria+Demo 1 (30) →
Lab 1 (15) → Teoria+Demo 2 (20) → Lab 2 (25) → Fechamento (5). Diagrama de barras
horizontais, uma por bloco, com o tempo dentro da barra.

**Nota:** `[00:02–00:04]` "Hoje tem dois labs, duas demos que vão quebrar de propósito, e
no fim vocês saem com um cliente MCP rodando. Zero API key."

### 3. `</COMO ACOMPANHAR>`

Regras: terminal aberto, projeto ou server da semana 4 aberto do lado, travou → chat →
dupla. `ref:` GUIA-DO-ALUNO.md desta semana.

### 4. `</SEMANA PASSADA>` — kicker do recap ativo

`MÃO NA MASSA` — sorteio de 3 pessoas, perguntas da seção "Recap ativo" do roteiro. Sem
bullet de conteúdo aqui — o slide é só o convite pro sorteio.

### 5. Transição — humor [V: GIF]

**[PRINT/GIF: alguém tentando segurar dois carrinhos de controle remoto ao mesmo tempo e
os dois batendo um no outro]** — ilustra "achar que paralelo é de graça" antes de provar
que não é.

**Nota:** `[00:20–00:25]` Ponte pro bloco de teoria: "isso que aconteceu no GIF é
literalmente a aula de hoje."

### 6. `</O HARNESS QUE VOCÊS JÁ CONSTRUÍRAM>` [V: diagrama de linha do tempo]

Diagrama: 7 caixas em sequência — CLAUDE.md (S2) · skill (S3) · MCP server (S4) · rules
por path (S5) · specs EARS/BDD (S7) · verificadores + CI (S8) · subagentes (S9) — com uma
seta comum apontando pra uma caixa final "HARNESS".

**Pontos:**
1. **Vocês não fizeram 7 exercícios soltos.** Cada semana foi uma peça do mesmo
   equipamento.
2. **Hoje a peça que falta é orquestração:** como rodar mais de um agente nesse
   equipamento ao mesmo tempo.

**Nota:** `[00:25–00:30]` Fala completa no roteiro, seção "Parte 1 — Harness recap".
`ref:` nenhuma — é recuperação do material do próprio curso.

### 7. `</ORQUESTRAÇÃO EM 3 PALAVRAS>` — definição por partes

Estilo 3 cards (`01/[TAREFAS]` `02/[AGENTES]` `03/[INTEGRAÇÃO]`): orquestração é decidir
como dividir tarefas entre agentes e como juntar o resultado de volta. O card 03 já
antecipa: "é aqui que o custo mora."

### 8. `</3 PADRÕES>` — intro

Frase-âncora: "TODO PROBLEMA DE ORQUESTRAÇÃO CABE EM UM DESSES TRÊS." Sequencial ·
Paralelo · Supervisor.

### 9. Board Excalidraw projetado [V: diagrama]

Projetar `excalidraw/padroes-orquestracao.excalidraw` ao vivo, andando pelas três zonas.
`ref:` git-scm.com/docs/git-worktree (a zona 2, do custo de integração, usa vocabulário de
merge da doc oficial).

### 10. `</SEQUENCIAL>`

1. **Um agente por vez.** Ordem importa.
2. **Sem conflito.** Também sem ganho de tempo.
3. **Use quando** a tarefa 2 depende do resultado da tarefa 1.

### 11. `</PARALELO>`

1. **Vários agentes ao mesmo tempo.** Ganho de tempo até a hora de integrar.
2. **O custo aparece na integração**, não durante a execução — por isso é fácil
   subestimar.

### 12. `</SUPERVISOR>`

1. **Um agente delega, os outros executam.** O supervisor decide o que fazer com cada
   resposta.
2. **Risco:** o supervisor vira gargalo se toda resposta precisa passar por ele antes de
   seguir.
3. **O padrão Supervisor em profundidade saiu do síncrono.** Fica no bloco assíncrono
   desta semana — aqui você só precisa reconhecer a forma.

### 13. Transição — humor [V: GIF]

**[GIF: uma reunião com 15 pessoas tentando decidir uma coisa simples]** — gancho visual
pra "custo de coordenação cresce com o número de gente/agentes envolvidos", que a segunda
metade da aula vai formalizar com a Lei de Brooks.

### 14. `</WORKTREE ≠ SUBAGENTE>` [V: diagrama comparativo] — SLIDE DEDICADO, NÃO MISTURAR

Duas colunas lado a lado:

| WORKTREE | SUBAGENTE |
|---|---|
| Isola **arquivo** | Isola **contexto** |
| Duas pastas, duas branches | Uma janela separada dentro da MESMA sessão |
| Dois agentes não pisam um no outro no disco | Devolve um resumo pro agente principal |
| Você usou agora, aula 1 | Você usou semana passada, aula 17 |

Frase-âncora, isolada, fonte grande: **"O MATERIAL ANTIGO CONFUNDIA OS DOIS. A PARTIR DE
HOJE, NÃO."**

`ref:` code.claude.com/docs/en/worktrees ("Worktrees isolate file edits. Subagents split
work up inside one session.")

**Nota:** `[00:45–00:50]` Fala completa no roteiro. Não deixar a turma seguir sem essa
distinção cravada — pergunte de volta antes de avançar.

### 15. `MÃO NA MASSA` — Demo 1 ao vivo (setup)

"Vou paralelizar duas tarefas que parecem completamente diferentes. Cronômetro, dois
terminais, vamos ver o que acontece."

### 16. Print da Demo 1 quebrando [V: print]

**[PRINT: terminal mostrando `CONFLICT (content): Merge conflict in validators.js` —
capturar direto da sua própria execução da demo, não recriar depois]**

### 17. `</O QUE ACABOU DE ACONTECER>` (pós-demo 1)

Frase-âncora, fonte grande, sozinha: **"TRÊS AGENTES NÃO FAZEM UM TERÇO DO TEMPO."**
(primeira aparição — vai repetir mais 2x na aula)

**Pontos:**
1. **As duas tarefas não estavam erradas.** A decisão de rodá-las juntas sem checar é que
   estava.
2. **Isso vai acontecer de novo na aula 2, com vocês.** É proposital.

### 18. `MÃO NA MASSA` — Lab 1 (15 min) [V: labPanel]

Painel amarelo: "LAB 1" · "Worktrees na prática" · ⏱ 15 min · `git worktree add` · "dois
terminais abertos do lado ›".

### 19. Transição — humor [V: GIF]

**[GIF curto de "e agora, o que fazer com isso" — cara de confuso olhando pra tela]** —
ponte leve antes do segundo bloco de teoria, sem conteúdo.

### 20. `</O CLIENTE MCP QUE VOCÊS VÃO CONSTRUIR>` [V: dois terminais lado a lado]

Dois blocos de terminal reais lado a lado, estilo "código de projeto open source" já
usado no curso: à esquerda, um trecho do SEU server (semana 4, `registerTool`); à
direita, o esqueleto do cliente (`new Client(...)`, `client.connect(...)`).

`ref:` github.com/modelcontextprotocol/typescript-sdk/blob/main/docs/client.md

### 21. `</SEM LLM AINDA>` — marca de fronteira

Caixa amarela, borda 3pt (infoBox), frase única em caps: **"ESTE CLIENTE NÃO CHAMA
NENHUM MODELO. SEM .ENV. SEM API KEY. ISSO É SEMANA 11."** Esta é a marcação explícita da
fronteira de ferramenta pedida pelo curso.

### 22. `</OS 5 TODOS>` — steps

Componente `steps`, 5 quadrados numerados: 1) criar `Client` · 2) criar
`StdioClientTransport` e `connect` · 3) `listTools()` · 4) `callTool()` · 5) `close()`.
`ref:` modelcontextprotocol.io/docs/2026-07-28/develop/build-client (tutorial oficial —
tiramos a parte de LLM, mantivemos a de protocolo).

### 23. `</HOST, CLIENT, SERVER>` [V: diagrama pequeno]

Diagrama reaproveitado da semana 4 (arquitetura MCP), agora com uma seta nova: "vocês
fecham este triângulo hoje" apontando pro client. `ref:` (já citada na semana 4, não
repetir link novo — mencionar "ver semana 4" no rodapé).

### 24. `</CUSTO DE COORDENAÇÃO>` — Lei de Brooks [V: opcional print]

**[PRINT opcional: capa do livro "The Mythical Man-Month" — se não tiver a imagem à mão,
pule o print e mantenha só o texto]**

Citação em destaque: *"Uma mulher gera um bebê em 9 meses. 9 mulheres não geram um bebê
em 1 mês."* — Fred Brooks, 1975. `ref:` en.wikipedia.org/wiki/Brooks%27s_law

**Pontos:**
1. **Comunicação cresce mais rápido que trabalho** conforme você adiciona gente (ou
   agentes) numa tarefa.
2. **Nem toda tarefa é divisível.** Algumas partes só saem na ordem certa.

### 25. `</OS NÚMEROS DA ANTHROPIC>` [V: gráfico de barras simples]

Gráfico simples: 1 barra "chat" = 1x tokens · "agente" = ~4x · "multiagente" = ~15x.
`ref:` anthropic.com/engineering/multi-agent-research-system

**Ponto-âncora:** "a própria Anthropic diz: tarefa de código hoje é um mau encaixe pra
multiagente, porque as partes dependem umas das outras."

### 26. `</SWARMS>` — menção, não bloco

Uma frase: "dezenas de agentes coordenando sem supervisor central. O framework
educacional que popularizou o nome (OpenAI Swarm) foi descontinuado — o próprio repo
recomenda migrar pro sucessor de produção. Pro tamanho de problema de vocês agora, quase
nunca faz sentido." `ref:` github.com/openai/swarm

### 27. Transição — humor [V: GIF]

**[GIF: enxame de abelhas literal]** — piada visual barata de propósito com a palavra
"swarm", só pra segurar atenção antes da segunda demo.

### 28. `MÃO NA MASSA` — Demo 2 ao vivo (setup)

"Vou tentar conectar meu cliente num server que não terminou de buildar. Vamos ver o
erro cru, sem tradução."

### 29. Print da Demo 2 quebrando [V: print]

**[PRINT: terminal com o erro de conexão/handshake — `ENOENT` ou Promise pendurada,
capturado da sua própria execução]**

### 30. `MÃO NA MASSA` — Lab 2 (25 min) [V: labPanel]

Painel amarelo: "LAB 2" · "Seu MCP client próprio" · ⏱ 25 min · Node/TypeScript ·
"conecta no SEU server da semana 4, não num de exemplo".

### 31. `</ATIVIDADE DE FIXAÇÃO>`

Recap por pergunta antes de mostrar: "sem olhar pro slide 14, alguém me diz a diferença
entre worktree e subagente?" Só depois mostra o resumo. Lembrete do `ENTREGAVEL.md`.

### 32. `</DEMO DAY>` — penúltimo slide, anuncia a aula 2 [V: ícone de cronômetro]

**[V: ícone/gráfico simples de um cronômetro marcando 40:00]**

- **Tema:** speedrun cronometrado.
- **Formato:** 40 min cronometrados, 3 tarefas, 1 repo compartilhado, pós-morte coletivo
  e placar por categoria (não só velocidade).
- **Tragam pronto:** o `meu-mcp-client` do Lab 2 rodando (não é usado diretamente no
  speedrun, mas o raciocínio de worktree é).
- **Como as duplas se formam:** sorteio por trio, sem equilíbrio de domínio desta vez —
  repo do speedrun é genérico.

### 33. `</PRÓXIMOS PASSOS>` — fechamento

- Entregável: `meu-mcp-client` commitado + log da sessão paralela + doc "agente único".
- Prazo: antes da aula 1 da semana 11.
- 🔁 "Três agentes não fazem um terço do tempo — vocês vão provar isso na aula 2."
- Bloco assíncrono desta semana é pré-requisito de entrada no speedrun.

---

## AULA 2 (só regras do jogo, sem conteúdo novo)

### A1. Capa

`> SEMANA 10 · AULA 2` · `</SPEEDRUN>` · cronômetro grande no centro.

### A2. `</REGRAS DO JOGO>`

- 3 tarefas, 1 repo (`starter/speedrun-repo/`), times sorteados por trio.
- 10 min pra ler as tarefas e apostar um tempo. 40 min cronometrados. Integração conta
  dentro do tempo.
- Placar: 40% correção · 30% precisão da aposta · 20% qualidade do pós-morte · 10%
  velocidade (a menor fatia, de propósito).

### A3. `</SE TRAVAR>`

"Ninguém sai daqui com zero. Se travarem na metade, peçam uma carta de pista — não tira
ponto." `ref:` GUIA-DO-ALUNO.md, seção "Se travar".

Daqui em diante, sem slide — é o cronômetro, a planilha de placar projetada, e o pós-morte
com os logs reais dos times (roteiro completo em `ROTEIRO-FACILITADORA.md`).
