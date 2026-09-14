# 🤖 Semana 5 — Engenharia de software para desenvolvimento com IA: Atividade Prática (Entregável)

**Módulo 2 — AI Orchestrator / Contexto**

|  |  |
| :---- | :---- |
| **Material da aula** | `aula9-engenharia-para-ia/` no seu fork de pda-especializacao-ia |
| **Repositório do projeto** | seu repositório próprio (criado na semana 2) |
| **Formulário de entrega** | https://forms.gle/PSd6i65g44GwBMgq6 |
| **Prazo de entrega** | Antes da aula 1 da semana 6 |

## O que você vai entregar

Duas entregas. A **mínima** todo mundo consegue no dia. A **completa** é pra quem quer ir
além — e é ela que exercita o julgamento de fronteira de verdade, porque o
`RELATORIO-FRONTEIRA.md` é você defendendo uma decisão, não só descrevendo uma.

## Por que essa atividade existe

Ela comprova uma capacidade específica: **você consegue olhar pra código que já funciona
e decidir se a estrutura dele está certa** — não se ele roda, se ele passa nos testes.
Isso é uma habilidade diferente de escrever código, e é a que mais falta em quem começa a
trabalhar com agentes, porque o agente sempre entrega algo que "funciona".

Se essa entrega estivesse errada, o que ela provaria: que você aceita qualquer diff verde
sem perguntar se a estrutura por trás faz sentido — exatamente o comportamento que gera
Abstraction Bloat em produção, silenciosamente, por meses, até alguém precisar mudar
aquele código e descobrir que não dá.

## Pré-requisitos

- Bloco Alura de qualidade de código concluído (ver `PACOTE.md`, seção "Mapeamento
  Alura") — sem ele você não tem vocabulário-base de code smell/refatoração pra
  aproveitar o Lab 2 da aula 1 e a aula 2 inteira.
- Ter feito os dois labs da aula 1 (diagnóstico + linguagem ubíqua/candidatos a bounded
  context) — a entrega completa depende diretamente desse material.
- Ter participado da aula 2 (Excalidraw coletivo) com seu board preenchido.

## Passo a passo

### Entrega mínima (~20 min)

1. **Print ou export PNG** do seu `excalidraw/board-bounded-contexts.excalidraw`
   preenchido (Excalidraw → menu → Exportar imagem → PNG).
2. **Link do seu fork** com `DIAGNOSTICO.md` (do Lab 1) commitado, listando pelo menos 2
   sinais do checklist encontrados no seu próprio código, com arquivo e linha.
3. **Um parágrafo** (5–8 linhas): qual dos 6 sinais do checklist mais te surpreendeu no
   seu próprio código, e por quê.

### Entrega completa (tudo da mínima +)

#### `RELATORIO-FRONTEIRA.md`

Este é o item mais importante. Estrutura sugerida:

```markdown
# RELATORIO-FRONTEIRA — Semana 5

## Os 2 bounded contexts que eu desenhei
(nome de cada um + 1 frase do que cada um faz)

## A linguagem ubíqua de cada um
(3-5 termos por contexto — nenhum pode ser Manager/Handler/Service/Util)

## Onde eles estavam misturados antes de hoje
(o arquivo/função exato, colado ou linkado)

## O que meu trio/a plenária me fez mudar
(se ninguém questionou nada, diga isso também — e diga por que você acha que resistiu)

## Onde eu ainda não tenho certeza da fronteira
(o ponto que você não resolveu sozinho — nomear isso vale mais do que fingir certeza)
```

#### Corrigir 1 sinal do checklist — com especificação, não de memória

Escolha **1** sinal encontrado no seu `DIAGNOSTICO.md` (ex.: uma duplicação, um catch
vazio) e peça ao agente pra corrigir **especificando o que você quer antes**, no padrão
já conhecido do curso (especifique → leia o que voltou → rejeite o que não serve). Cole no
`RELATORIO-FRONTEIRA.md`: o prompt exato, o diff, e se você aceitou de primeira ou pediu
de novo.

**Não é pra corrigir a fronteira toda hoje** — isso, com processo formal, é a semana 7.
Corrija só o sinal pontual escolhido.

#### Abra um PR no seu repositório de projeto

Com: `DIAGNOSTICO.md`, `RELATORIO-FRONTEIRA.md`, o PNG do board, e a correção do sinal
escolhido.

## O parágrafo para o dono do negócio

**Enunciado da tarefa:** escreva de 3 a 5 frases, sem jargão técnico, explicando pro dono
do negócio do seu projeto: (1) que problema esse diagnóstico resolve, (2) por que ele
deveria se importar mesmo sem entender código. Não use as palavras "bounded context",
"Abstraction Bloat" ou "checklist" — traduza.

**Exemplo modelo (domínio 1 do catálogo — listagem de perfis de alunos da PDA):**

> "A gente pediu pra IA construir a vitrine de perfis rápido, e ela construiu — funciona.
> Só que, olhando por dentro, um pedaço do código que deveria só 'mostrar o perfil pro
> visitante' também estava decidindo, escondido, quando mandar e-mail de boas-vindas pro
> aluno. Isso não dá erro hoje. Mas daqui a três meses, quando alguém pedir 'muda o texto
> do e-mail', vai ter que mexer no código da vitrine pra isso — e o risco de quebrar a
> vitrine por causa de um texto de e-mail é real. A gente separou essas duas
> responsabilidades agora, enquanto é barato, em vez de esperar dar problema."

## Checklist antes de entregar

- [ ] PNG do board exportado, com pelo menos 2 bounded contexts nomeados e a linguagem
      ubíqua visível.
- [ ] `DIAGNOSTICO.md` commitado, com arquivo e linha por sinal encontrado.
- [ ] Parágrafo pro dono do negócio sem as palavras técnicas proibidas.
- [ ] (Completa) `RELATORIO-FRONTEIRA.md` com as 5 seções.
- [ ] (Completa) 1 sinal corrigido com especificação prévia, prompt colado.
- [ ] Link enviado no formulário: https://forms.gle/PSd6i65g44GwBMgq6

## Rubrica

| critério | peso | o que a facilitadora olha |
|---|---|---|
| Diagnóstico feito de verdade | 25% | sinais apontados com arquivo/linha real, não genérico ("tem código ruim") |
| Fronteira nomeada com linguagem de domínio | 30% | nomes dos contextos e termos não são Manager/Handler/Service; a mistura anterior está descrita com precisão |
| Board Excalidraw legível | 15% | pelo menos 2 contextos, linguagem ubíqua visível, seta com verbo |
| Qualidade do `RELATORIO-FRONTEIRA.md` (completa) | 20% | você mudou de ideia em algum ponto por causa do trio/plenária? Ou justificou por que não mudou? |
| Parágrafo pro dono do negócio | 10% | sem jargão, 3-5 frases, problema real e concreto |

O que **não** pontua: um board bonito com nomes ainda genéricos por baixo. O que pontua:
você ter mudado a fronteira depois de alguém te questionar — ou ter defendido por que não
mudou, com argumento de domínio, não de preguiça.

## Bônus (sem peso na nota, com peso na vida)

- Crie `.claude/rules/<nome-do-contexto>.md` com frontmatter `paths` escopando esse
  contexto no seu repositório de projeto. Cole no `RELATORIO-FRONTEIRA.md` o trecho do
  frontmatter que você escreveu.
- Peça pro agente "encontrar mais um bounded context que eu não vi" no seu projeto — sem
  dizer nenhuma pista. Compare a sugestão dele com a sua. Ele viu algo real, ou só
  reorganizou por tipo de arquivo (fronteira técnica de novo)?
