# aula7-mcp-server

Semana 4 — **MCP na prática: você constrói um MCP server**
Especialização em Desenvolvimento com IA · Programadores do Amanhã · Turma 2

Nas duas primeiras semanas você usou MCP pronto (o `context7` da aula 1) e ensinou o
agente a se comportar com `AGENTS.md`/`CLAUDE.md` e skills (semana 3). Esta semana você
inverte o papel: em vez de *consumir* um MCP server, você **constrói um** — uma tool que
o seu projeto de verdade precisa — e depois passa duas aulas tentando **quebrar** o que
construiu, porque toda tool que você expõe a um agente é uma porta que também pode ser
usada contra você.

> Faz parte do repo do curso: [`pda-especializacao-ia`](../). Cada pasta na raiz é uma aula.

## Como usar

1. **Fork** o repositório `pda-especializacao-ia` inteiro na sua conta (se ainda não fez).
2. Clone o seu fork e entre nesta pasta:

   ```bash
   git clone https://github.com/<seu-usuario>/pda-especializacao-ia.git
   cd pda-especializacao-ia/aula7-mcp-server
   ```

3. Durante a aula, siga o [`GUIA-DO-ALUNO.md`](./GUIA-DO-ALUNO.md) — ele acompanha os
   slides, lab por lab, e tem a seção de setup do Node/TypeScript.
4. Depois da aula, faça a [`ENTREGAVEL.md`](./ENTREGAVEL.md) (entrega mínima ou completa).

## O que tem aqui

```
.
|-- README.md                          <- este arquivo
|-- GUIA-DO-ALUNO.md                   <- passo a passo dos labs + setup + troubleshooting
|-- ENTREGAVEL.md                      <- a atividade de fixação + rubrica
|-- starter/
|   |-- mcp-server-template/           <- esqueleto do SEU server (TypeScript, incompleto de propósito)
|   |-- demos/mcp-demo-vulneravel/     <- server usado nas duas primeiras demos ao vivo (aula 1)
|   |-- supply-chain-sim/              <- simulação SEGURA de um MCP de terceiros malicioso (demo 3)
|   |-- decisao-escopo-template.md     <- o formulário que você preenche ANTES de escrever código
|   `-- LOG-INJECTION-TEMPLATE.md      <- o template do entregável principal da semana
```

## Por que esta semana existe

Nas últimas duas semanas o agente ganhou memória (`CLAUDE.md`) e capacidades sob demanda
(skills). Esta semana ele ganha **acesso a sistemas externos** — e acesso é a coisa que,
quando mal desenhada, vira o vetor de ataque mais comum contra agentes hoje. Você não
aprende isso lendo uma lista do OWASP. Você aprende quebrando um MCP server na sua frente
e depois o do colega.

## Pré-requisitos

- Node 18+ (`node -v`) — o mesmo Node que você já usa desde a aula 1.
- git, GitHub, Claude Code já instalado e logado (aula 1).
- **Bloco "OWASP IA Top 10 para LLMs" da Alura concluído** — é pré-requisito de entrada
  no lab da aula 2 (ver `PACOTE.md` para o mapeamento completo).
- **Windows:** os comandos deste guia usam o mesmo terminal recomendado na aula 1
  (Git Bash). Veja a seção "Terminal" do `GUIA-DO-ALUNO.md`.

## Caminho tecnológico desta semana

**TypeScript, com o SDK oficial `@modelcontextprotocol/server`, transporte stdio.**
Não é "escolha a linguagem que quiser" — é uma decisão só, para não fragmentar o suporte
em sala. A justificativa completa (por que TS e não Python, o que isso significa pra quem
está no Windows) está em `PACOTE.md`, seção 1.

## Os três riscos desta semana

Você não vai ler os 10 itens do OWASP Top 10 for LLM Applications em sala — isso está na
Alura. Em sala você vê **três** riscos acontecerem ao vivo, na ordem em que aparecem no
[`ROTEIRO-FACILITADORA.md`](./ROTEIRO-FACILITADORA.md):

1. **Prompt injection** (LLM01) — conteúdo externo que o seu próprio tool devolve ao
   agente contém uma instrução escondida, e o agente obedece.
2. **Improper output handling** (LLM05) — o que o modelo escreve vai parar em outro
   sistema (um arquivo HTML, um comando) sem ser tratado, e essa segunda instrução vira
   execução.
3. **Supply chain de MCP de terceiros** (LLM03) — uma tool de fora com uma descrição
   envenenada engana o agente sem que o usuário perceba. Fazemos isso com um server local
   que **simula** o comportamento relatado em pesquisas reais — nada malicioso é instalado
   de verdade em sala.

## Regra da casa (continua valendo)

> **Você é responsável por cada linha que commita.**
> O agente executa. Você especifica, lê o diff, roda os testes e decide.

Esta semana ganha um adendo:

> **Toda tool que você expõe a um agente é uma superfície de ataque.**
> Antes de escrever a primeira linha da tool, você decide — e escreve — o que ela
> **não pode** fazer.

## Referências

Lista completa e verificada em [`REFERENCIAS.md`](./REFERENCIAS.md). As três centrais:

- Spec do MCP: <https://modelcontextprotocol.io/introduction>
- Arquitetura MCP (host/client/server): <https://modelcontextprotocol.io/docs/2026-07-28/learn/architecture>
- OWASP Top 10 for LLM Applications (2025): <https://owasp.org/www-project-top-10-for-large-language-model-applications/>
