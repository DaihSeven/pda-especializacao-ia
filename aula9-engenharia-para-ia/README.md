# aula9-engenharia-para-ia

Semana 5 — **Engenharia de software para desenvolvimento com IA**
Especialização em Desenvolvimento com IA · Programadores do Amanhã · Turma 2

Aula 1 (aula9) e aula 2 (aula10) desta semana. Nesta semana vocês param de só fazer o
agente construir e começam a **diagnosticar o que ele construiu** — e ganham o vocabulário
pra decidir onde uma coisa termina e outra começa no domínio de vocês.

> Faz parte do repo do curso: [`pda-especializacao-ia`](../). Cada pasta na raiz é uma aula.

## O que muda nesta semana

Na semana 4 vocês entregaram um MCP server que **funciona**. Ninguém perguntou ainda se o
código dele é bom. Esta semana é sobre isso: nomear sinais de código ruim gerado por IA
(o núcleo é um padrão que este curso chama de **Abstraction Bloat**) e ganhar o
vocabulário de DDD estratégico — **linguagem ubíqua** e **bounded context** — pra decidir
onde a fronteira do seu domínio deveria estar.

**O que NÃO entra esta semana:** DDD tático (entidade, objeto de valor, agregado,
repositório) — isso existe, mas não é o que resolve o seu problema hoje. Se quiser
adiantar, tem link em `REFERENCIAS.md`. BDD e EARS (especificação comportamental) também
ficam de fora — isso é semana 6.

## Como usar

1. Você já tem seu fork de `pda-especializacao-ia` e seu próprio repositório de projeto
   (criado na semana 2). Entre nesta pasta do fork pra pegar o material da aula:

   ```bash
   cd pda-especializacao-ia/aula9-engenharia-para-ia
   ```

2. Durante a aula 1, siga o [`GUIA-DO-ALUNO.md`](./GUIA-DO-ALUNO.md) — ele acompanha os
   slides, lab por lab, e usa o [`starter/checklist-sinais-codigo-ia.md`](./starter/checklist-sinais-codigo-ia.md).
3. Durante a aula 2, você vai duplicar
   [`excalidraw/board-bounded-contexts.excalidraw`](./excalidraw/board-bounded-contexts.excalidraw)
   e preencher com o modelo do **seu** projeto (o que já vem preenchido é só exemplo).
4. Depois das duas aulas, faça a [`ENTREGAVEL.md`](./ENTREGAVEL.md).

## O que tem aqui

```
.
|-- GUIA-DO-ALUNO.md                    <- passo a passo dos labs das duas aulas
|-- ENTREGAVEL.md                       <- a atividade de fixação + rubrica
|-- starter/
|   |-- checklist-sinais-codigo-ia.md   <- o artefato central: nomeia sinais de código
|   |                                      ruim gerado por IA. Você vai reusar isso nas
|   |                                      semanas 7, 8 e 9 — guarde o link.
|   `-- repo-plantado/                  <- código de reserva pra diagnosticar, SE seu
|                                          MCP server da semana 4 não estiver rodando
`-- excalidraw/
    `-- board-bounded-contexts.excalidraw  <- template do board da aula 2. Duplique
                                             ANTES de preencher — é o board do SEU projeto
```

## Pré-requisitos

- Ter o MCP server da semana 4 (`aula7-mcp-server`) rodando — ou, se não tiver, use
  `starter/repo-plantado/` no lab.
- Bloco Alura de qualidade de código (ver `PACOTE.md`, seção "Mapeamento Alura")
  **concluído antes do Lab 2 da aula 1** — sem ele você não tem o vocabulário-base de
  code smell/refatoração que o síncrono assume.
- Excalidraw instalado ou aberto no navegador (<https://excalidraw.com>, gratuito, não
  precisa de conta pra usar).

## Regra da casa (continua valendo)

> **Você é responsável por cada linha que commita.**
> O agente executa. Você especifica, lê o diff, roda os testes e decide.

Esta semana adiciona uma camada: o agente **não vai se recusar a piorar seu código**. Ele
empilha mais uma abstração se você pedir "adiciona um campo" sem restrição nenhuma. Julgar
onde a fronteira do seu domínio deveria estar continua sendo trabalho seu — nenhum
checklist, nenhum board de Excalidraw decide isso sozinho.
