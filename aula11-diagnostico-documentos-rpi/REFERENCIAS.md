# Referências verificadas — Semana 6

Todos os links abaixo foram abertos com WebFetch nesta sessão antes de entrar aqui.
Nenhum link foi composto por analogia. Status de verificação anotado em cada um.

---

### 1. Best practices for Claude Code (Claude Code Docs)

**URL:** https://code.claude.com/docs/en/best-practices
**Verificado:** sim, WebFetch confirmou conteúdo completo. A seção "Explore first, then
plan, then code" recomenda separar pesquisa/planejamento de implementação com plan mode,
e a seção "Let Claude interview you" recomenda, depois de escrever um `SPEC.md`: *"Once
the spec is complete, start a fresh session to execute it. The new session has clean
context focused entirely on implementation, and you have a written spec to reference."*
**Onde entra:** base da Teoria 1 (slide 10) — é a confirmação, em documentação oficial da
Anthropic, do mesmo padrão de sessão nova entre planejamento e execução que a referência
#2 nomeia como RPI.

### 2. Advanced Context Engineering for Coding Agents (HumanLayer, Dex Horthy)

**URL:** https://www.humanlayer.dev/blog/advanced-context-engineering
**Verificado:** sim, WebFetch confirmou conteúdo. Publicado por Dex Horthy (HumanLayer),
29/ago/2025. Define o fluxo Research → Plan → Implement, cada fase em contexto separado,
e a hierarquia de alavancagem: pesquisa ruim gera milhares de linhas de código ruins,
plano ruim gera centenas, código ruim é só código ruim.
**Onde entra:** fonte primária do nome e do mecanismo "RPI" (slides 10 e 12) — citada como
origem, não atribuída a outra pessoa por hábito.

### 3. Dex Horthy on Ralph, RPI, and escaping the "Dumb Zone" (Dev Interrupted)

**URL:** https://devinterrupted.substack.com/p/dex-horthy-on-ralph-rpi-and-escaping
**Verificado:** sim, WebFetch confirmou conteúdo. Entrevista com Dex Horthy descrevendo o
RPI como "um processo que força agentes a gerar artefatos intermediários de design e
alinhar decisões arquiteturais antes de escrever uma linha de código", e ligando
explicitamente o RPI ao vocabulário de "Dumb Zone" (degradação sem separação de fases).
**Onde entra:** ponte entre o RPI e o vocabulário de Smart Zone/Dumb Zone que a turma já
tem da semana 2 (slide 12). **Nota de honestidade:** o termo "Smart Zone/Dumb Zone" em si
já foi atribuído na semana 2 à comunidade (aihero.dev), não a Dex Horthy — usamos esta
referência só pra mostrar que o mesmo vocabulário aparece na origem do RPI, não pra
reatribuir o termo.

### 4. EARS: Easy Approach to Requirements Syntax (guia oficial de Alistair Mavin)

**URL:** https://alistairmavin.com/ears/
**Verificado:** sim, WebFetch confirmou conteúdo. Define os 5 padrões (Ubiquitous,
State-driven, Event-driven, Optional feature, Unwanted behaviour) com o gabarito de frase
de cada um. Criado por Alistair Mavin e equipe na Rolls-Royce, a partir do trabalho deles
analisando regulação de aeronavegabilidade pra um sistema de controle de motor a jato,
publicado originalmente em 2009.
**Onde entra:** fonte primária dos 5 padrões EARS (slides 20–24, `EARS-BDD-template.md`).

### 5. Architectural Decision Records (adr.github.io)

**URL:** https://adr.github.io/
**Verificado:** sim, WebFetch confirmou conteúdo. Descreve o formato de ADR e atribui a
popularização do conceito ao post de Michael Nygard, "Documenting Architecture
Decisions" (2011). Estrutura padrão: Título, Status, Contexto, Decisão, Consequências.
**Onde entra:** fonte do formato de ADR usado em `ADR-template.md` e nos slides 8 e 9.

### 6. Introducing BDD (Dan North)

**URL:** https://dannorth.net/blog/introducing-bdd/
**Verificado:** sim, WebFetch confirmou conteúdo. Publicado por Dan North, 20/set/2006.
Define BDD como evolução do TDD focada em "comportamento" em vez de "teste", com o
formato de cenário Dado/Quando/Então (Given/When/Then) — exemplo usado no próprio artigo:
um saque em caixa eletrônico.
**Onde entra:** fonte primária do formato BDD (slide 25, `EARS-BDD-template.md`).

### 7. Engenharia de software na era da IA: context engineering, workflows e controle de custo (Alura)

**URL:** https://www.alura.com.br/conteudo/context-engineering-workflows
**Verificado:** sim, WebFetch confirmou conteúdo. Curso de 196 min / 60 atividades.
Cobre planejamento de agente antes da execução (redução de gasto de token antes de
executar), orquestração multi-agente e sub-agentes.
**Onde entra:** mapeamento Alura (`PACOTE.md`, seção 1) — cobre a mecânica de planejar
antes de executar, o que permite reduzir a explicação de "por que separar sessões" no
síncrono.

### 8. Context Engineering: otimização da janela de contexto de IAs (Alura)

**URL:** https://www.alura.com.br/conteudo/context-engineering-otimizacao-da-janela-de-contexto-de-ias
**Verificado:** sim, WebFetch confirmou conteúdo. Curso de 150 min / 35 atividades. Cobre
as quatro estratégias de otimização de contexto: Selecionar, Isolar, Escrever, Comprimir.
**Onde entra:** mapeamento Alura (`PACOTE.md`, seção 1) — a estratégia "Isolar" (separar
conversas por tópico) é a base conceitual de "por que sessões separadas", coberta na
Alura pra não precisar reexplicar isolamento de contexto do zero em sala.

### 9. Feature Specs (Kiro Docs, AWS)

**URL:** https://kiro.dev/docs/specs/feature-specs/
**Verificado:** sim, WebFetch confirmou conteúdo. Documenta o fluxo de spec do Kiro em 3
fases (Requirements → Design → Tasks), com a fase de Requirements usando explicitamente
notação EARS: *"Each requirement follows this pattern: WHEN [condition/event] THE SYSTEM
SHALL [expected behavior]"*.
**Onde entra:** gancho pra frente (slide 20, `PACOTE.md` seção 3) — mostra que EARS não é
uma escolha de curso isolada, é prática usada em ferramenta comercial de 2025/2026, e
prepara o terreno pra semana 7 (Spec-Driven Development) citar o mesmo vocabulário sem
reexplicar.

---

## Sobre a atribuição de "Smart Zone / Dumb Zone"

A semana 2 (`aula3-prompts-contexto-projeto/REFERENCIAS.md`, referência 8) já atribuiu
esse par de termos a conteúdo de comunidade (dicionário aihero.dev), não a um paper nem a
uma pessoa específica. Esta semana usa o mesmo termo, na mesma atribuição — a referência
3 desta lista (Dex Horthy) mostra que o vocabulário circula também na origem do RPI, mas
não é citada aqui como a origem do termo em si, pra não contradizer o que a semana 2 já
registrou.

## Referências que a semana 5 provavelmente já cobriu (não reabertas aqui)

DDD estratégico, bounded context e linguagem ubíqua (Eric Evans / Martin Fowler) são
pré-requisito conceitual desta semana, mas a verificação dessas fontes é da semana 5 —
não reabrimos aqui pra não duplicar trabalho de pesquisa. Se a semana 5, quando
finalizada, citar fontes diferentes das que este documento presume, `PACOTE.md` seção 8
lista isso como pendência de checagem cruzada.
