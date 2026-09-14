# aula5-agents-md-skills

Semana 3 — **AGENTS.md e skills**
Especialização em Desenvolvimento com IA · Programadores do Amanhã · Turma 2

> Aula 5 (conceito + demo) e aula 6 (lab guiado paralelo). A numeração é por aula, não
> por semana — semana 3 = aulas 5 e 6.

Essa semana responde a uma pergunta que a semana 2 deixou em aberto: você já tem um
`CLAUDE.md` no seu projeto próprio. Ele funciona? Ele resolve alguma coisa de verdade,
ou é decoração? E o que você faz quando uma instrução não deveria ficar carregada o
tempo todo, mas só quando você precisa dela?

## Pré-requisito não negociável

**Você chega no lab da aula 6 com:**
1. O bloco da Alura desta semana concluído (seção "Alura" abaixo).
2. Um `CLAUDE.md` funcional no repositório do **seu projeto próprio** (o que você
   escreveu/completou na semana 2, com o esqueleto gerado pelo agente).

Sem os dois, você não tem base pro lab e atrapalha a dupla na validação cruzada do
final da aula 6. Isso não é regra por regra — é o motivo pelo qual a Alura é
pré-requisito de entrada, não conteúdo complementar.

## O que você vai fazer

- **Aula 5** — a facilitadora pede pro agente gerar sozinho um arquivo de regras do
  zero, mostra o resultado (genérico, e você vai entender por quê), e contrasta com um
  escrito a partir de erros reais. Depois, o mesmo tratamento para skills: uma skill
  mal-feita que carrega tudo de uma vez vs. uma que carrega só o essencial e busca o
  resto sob demanda. Dois labs curtos no seu próprio projeto.
- **Aula 6** — lab guiado paralelo: a facilitadora escreve uma skill ao vivo, do zero,
  e você acompanha construindo a sua, no seu projeto, checkpoint a cada 20 minutos. No
  último checkpoint, você troca de skill com a sua dupla e tenta quebrar a dela.

## Alura (obrigatório antes da aula 6)

- **Context Engineering: otimização da janela de contexto de IAs** —
  <https://www.alura.com.br/curso-online-context-engineering-otimizacao-da-janela-de-contexto-de-ias>.
  Cobre compressão, isolamento e gestão de memória de contexto. **O síncrono não repete
  o que esse curso já explica sobre orçamento de contexto** — ele assume que você já viu
  isso e vai direto pra decisão prática (regra vs. skill).
- **Engenharia de software na era da IA: segurança de aplicações com agentes, MCPs e
  código gerado por IA** (dentro da formação AI-Native Software Engineering) —
  <https://www.alura.com.br/formacao-ai-native-software-engineering>. Cobre por que
  restringir o que um agente pode executar é uma prática de segurança, não excesso de
  cautela. **O síncrono não reexplica a motivação de segurança de `allowed-tools`** —
  só mostra o campo e como usar. `[CONFIRMAR NA ALURA]` a URL do curso avulso e a
  contagem exata de aulas — só achamos o curso listado dentro da formação.

## O que tem aqui

```
.
|-- README.md                    <- este arquivo
|-- GUIA-DO-ALUNO.md              <- passo a passo dos labs das duas aulas
|-- ENTREGAVEL.md                 <- a atividade de fixação + rubrica
|-- starter/
|   |-- skill-skeleton/
|   |   |-- SKILL.md              <- esqueleto INCOMPLETO com TODOs — você completa no lab
|   |   `-- reference.md          <- onde vai o material de referência (progressive disclosure)
|   `-- relatorio-validacao/
|       `-- TEMPLATE.md           <- o formato do relatório dos 3 cenários de validação
`-- (ROTEIRO-FACILITADORA.md, SLIDES-OUTLINE.md, REFERENCIAS.md, PACOTE.md
     são material da facilitadora — não fazem parte do que você usa no lab)
```

## Pré-requisitos técnicos

- Tudo que você já tinha pronto desde a aula 1: Node 18+, git, Claude Code instalado
  e logado.
- O seu projeto próprio, do jeito que ficou na semana 2, com o `CLAUDE.md` completo
  (sem `TODO`) e um repositório git de verdade (init + pelo menos um commit).
- **Windows:** os mesmos comandos de sempre. Se você não configurou o terminal na aula
  1, volte na tabela "Terminal: qual usar" do `GUIA-DO-ALUNO.md` da aula 1 antes de
  começar — ela não muda essa semana.

## Regra da casa (continua valendo)

> **Você é responsável por cada linha que commita.**
> O agente executa. Você especifica, lê o diff, roda os testes e decide.

Essa semana ela ganha uma segunda camada: você também é responsável por cada linha do
seu `CLAUDE.md` e de cada `SKILL.md`. Se uma regra não muda o comportamento do agente,
ela não é regra — é ruído que você paga em token toda sessão.

## Uma nota sobre nomes: AGENTS.md, CLAUDE.md e a skill

Você vai ouvir os dois nomes esta semana e eles não são a mesma coisa:

- **`AGENTS.md`** é um formato aberto, mantido pela Agentic AI Foundation (Linux
  Foundation), pensado pra funcionar em qualquer agente de código — Codex, Cursor,
  Copilot, Claude Code, etc. Ver <https://agents.md/>.
- **O Claude Code não lê `AGENTS.md` diretamente. Ele lê `CLAUDE.md`.** Se o seu
  repositório já tem um `AGENTS.md` (de outro agente, ou porque seu time decidiu
  padronizar nele), a ponte é um import (`@AGENTS.md` dentro do `CLAUDE.md`) ou um
  symlink (`ln -s AGENTS.md CLAUDE.md`). Isso está documentado, com exemplo, em
  <https://code.claude.com/docs/en/memory#agentsmd>.

Na prática: você escreve as regras uma vez, no formato que fizer sentido pro seu time,
e decide se aponta pra elas com import ou com symlink. O `GUIA-DO-ALUNO.md` mostra os
dois jeitos.
