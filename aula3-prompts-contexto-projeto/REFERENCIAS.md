# Referências verificadas — Semana 2

Todos os links abaixo foram abertos com WebFetch nesta sessão antes de entrar aqui.
Nenhum link foi composto por analogia. Status de verificação anotado em cada um.

---

### 1. Context Rot: How Increasing Input Tokens Impacts LLM Performance (Chroma)

**URL:** https://www.trychroma.com/research/context-rot
**Verificado:** sim, WebFetch confirmou conteúdo — relatório técnico publicado por Kelly
Hong, Anton Troynikov e Jeff Huber (Chroma), 14/jul/2025. Avaliou 18 LLMs de fronteira
(GPT-4.1, Claude 4, Gemini 2.5, Qwen3) e mostrou que a performance não degrada de forma
uniforme conforme o input cresce, mesmo em tarefas simples.
**Onde entra:** Aula 3, Bloco 2 (demo Smart Zone/Dumb Zone) — é a base empírica principal
pro "context rot". Slide 12 e 13.

### 2. Effective context engineering for AI agents (Anthropic Engineering)

**URL:** https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents
**Verificado:** sim, WebFetch confirmou conteúdo. Define context engineering como
"o conjunto de estratégias para curar e manter o conjunto ótimo de tokens durante a
inferência". Cita a pesquisa de context rot e recomenda compactação, notas estruturadas e
subagentes pra tarefas longas.
**Onde entra:** base conceitual da facilitadora pro Bloco 2 da aula 3; ponte pro curso da
Alura (ambos cobrem seleção/isolamento/escrita/compressão).

### 3. Self-Consistency Improves Chain of Thought Reasoning in Language Models (Wang et al., 2022)

**URL:** https://arxiv.org/abs/2203.11171
**Verificado:** sim, WebFetch confirmou título, autores (Xuezhi Wang, Jason Wei, Dale
Schuurmans, Quoc Le, Ed Chi, Sharan Narang, Aakanksha Chowdhery, Denny Zhou) e abstract.
Propõe amostrar vários caminhos de raciocínio e votar na resposta mais consistente;
ganhos de +17.9% em GSM8K e +12.2% em AQuA reportados no paper.
**Onde entra:** Aula 3, Slide 10 — slide de referência do corte (Self-Consistency não é
ensinado em profundidade no síncrono).

### 4. Context Engineering: otimização da janela de contexto de IAs (Alura)

**URL:** https://www.alura.com.br/curso-online-context-engineering-otimizacao-da-janela-de-contexto-de-ias
**Verificado:** sim, WebFetch confirmou título exato, 4h de duração, 35 atividades,
instrutor Ricardo Bugan Debs, curso ativo na plataforma. Cobre quatro estratégias:
seleção, isolamento, escrita e compressão, além de gestão de memória curto/longo prazo.
**Onde entra:** pré-requisito de entrada na aula 4 (`GUIA-DO-ALUNO.md`, `ENTREGAVEL.md`).
Também cobre o que fica de fora do síncrono (Self-Consistency, PT/EN).

### 5. Claude prompting best practices (Claude Docs / platform.claude.com)

**URL:** https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices
**Verificado:** sim, WebFetch confirmou conteúdo. Nota: a URL original pesquisada
(docs.claude.com/.../be-clear-and-direct) redireciona (302) pra esta — usei a URL final,
não a antiga. Cobre: ser claro e direto, multishot prompting (3-5 exemplos), e como
especificar formato de saída dizendo o que fazer em vez do que não fazer.
**Onde entra:** Aula 3, Bloco 1 (os três controles: especificidade, exemplo, formato) —
Slides 8 e 9.

### 6. How Claude remembers your project (Claude Code Docs — memory)

**URL:** https://code.claude.com/docs/en/memory
**Verificado:** sim, WebFetch confirmou conteúdo completo. Documenta CLAUDE.md vs auto
memory, tamanho recomendado (abaixo de 200 linhas), estrutura, e o comportamento de
`/init`, `/memory` e `/context`.
**Onde entra:** Aula 3, Bloco 2 (CLAUDE.md como memória entre sessões) — Slide 14. Base
do `starter/CLAUDE.md.template` e da seção "Regras" do `GUIA-DO-ALUNO.md`.

### 7. Lost in the Middle: How Language Models Use Long Contexts (Liu et al., 2023/2024)

**URL:** https://arxiv.org/abs/2307.03172
**Verificado:** sim, WebFetch confirmou título, autores (Nelson F. Liu, Kevin Lin, John
Hewitt, Ashwin Paranjape, Michele Bevilacqua, Fabio Petroni, Percy Liang) e o achado
central: performance é melhor quando a informação relevante está no início ou fim do
contexto, e degrada quando está no meio — mesmo em modelos feitos pra contexto longo.
Publicado também na TACL (ACL Anthology).
**Onde entra:** Aula 3, Slide 13 — segunda base empírica da demo de degradação por
contexto, complementar ao Context Rot (Chroma).

### 8. Smart zone (AI Coding Dictionary — aihero.dev)

**URL:** https://www.aihero.dev/ai-coding-dictionary/smart-zone
**Verificado:** sim, WebFetch confirmou conteúdo. Define "smart zone" como a fase inicial
de uma sessão de agente onde a performance é ótima, e "dumb zone" como a degradação
gradual que segue — sem mensagem de erro, sem fronteira visível. Nota explicitamente que
o início da dumb zone em modelos de fronteira é debatido e varia (cita uma faixa de
125K-150K tokens em alguns modelos, não um número universal).
**Onde entra:** Aula 3, Bloco 2 — é a fonte do nome "Smart Zone / Dumb Zone" usado no
slide 12 e na fala da facilitadora. **Importante:** este termo vem de conteúdo de
comunidade (dicionário de aihero.dev, também associado a discussões públicas de Matt
Pocock), não de um paper. Nota sobre o número "abaixo de ~40%": não há percentual fixo
publicado como limiar de degradação (ver item 9) — o corte de 40% é observação empírica
da facilitadora, apresentado em aula como tal, não como dado de pesquisa.

### 9. Explore the context window (Claude Code Docs)

**URL:** https://code.claude.com/docs/en/context-window
**Verificado:** sim, WebFetch confirmou conteúdo (simulação interativa de como a janela
de contexto do Claude Code enche: system prompt, CLAUDE.md, auto memory, MCP tools,
leituras de arquivo, hooks, `/compact`). Não encontrei, nesta página nem em nenhuma
doc oficial pesquisada, um percentual fixo publicado como limiar de degradação.
**Onde entra:** referência de apoio pra rodar `/context` ao vivo na demo (Aula 3, Bloco
2) e mostrar o que compõe a janela desde o início da sessão.

