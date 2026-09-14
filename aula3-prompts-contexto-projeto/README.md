# aula3-prompts-contexto-projeto

Semana 2 — **Prompt, contexto e o nascimento do projeto**
Especialização em Desenvolvimento com IA · Programadores do Amanhã · Turma 2

Essa semana tem duas aulas com papéis diferentes. Na aula 3 você aprende (com demo ao
vivo, erro incluído) por que um prompt vago te dá um resultado genérico e como controlar
isso — e **termina escolhendo o domínio e gerando o esqueleto inicial** do projeto que
vai atravessar as próximas 12 semanas. Na aula 4 você continua esse esqueleto num lab
guiado — com o agente, não com um gerador pronto.

> Faz parte do repo do curso: [`pda-especializacao-ia`](../). Cada pasta na raiz é uma aula.

## O que essa semana entrega

No fim da aula 4 você sai com: um repositório novo (seu, fora do fork do curso), com um
esqueleto de projeto que roda, um `CLAUDE.md` escrito por você, e um parágrafo explicando
o problema do seu projeto pra alguém que não é da área. Isso é a base de tudo que vem
depois — as próximas 11 semanas constroem em cima do que sai daqui.

## Como usar

1. Confirme que o ambiente da aula 1 ainda funciona: `claude --version` e `claude` abrindo
   sem erro. Se não funciona, resolve isso **antes** da aula 3 — não dá pra recuperar
   durante o lab.
2. Faça o bloco assíncrono desta semana **antes da aula 4** (é pré-requisito de entrada
   no lab — ver `GUIA-DO-ALUNO.md`, seção "Bloco assíncrono").
3. Na aula 3, acompanhe os slides e faça os dois labs curtos com o
   [`GUIA-DO-ALUNO.md`](./GUIA-DO-ALUNO.md). **No ato final você escolhe o domínio do
   projeto e gera o esqueleto inicial** — use a pergunta de corte da seção "Ato final"
   do guia, você tem 10 minutos, não mais.
4. Na aula 4, siga o guia checkpoint por checkpoint enquanto a facilitadora constrói na
   tela — você continua o esqueleto que nasceu na aula 3.
5. Depois da aula 4, feche a [`ENTREGAVEL.md`](./ENTREGAVEL.md).

## O que tem aqui

```
aula3-prompts-contexto-projeto/
|-- README.md                 <- este arquivo
|-- GUIA-DO-ALUNO.md           <- passo a passo das duas aulas, com o contrato mínimo do esqueleto
|-- ENTREGAVEL.md              <- a atividade da semana + rubrica
`-- starter/
    `-- CLAUDE.md.template     <- esqueleto INCOMPLETO de CLAUDE.md — vira o CLAUDE.md
                                  do SEU projeto na aula 4 (checkpoint 4)
```

Não tem `src/` nem `tests/` prontos nesta pasta: **o código-base desta semana é o seu
próprio projeto, ainda não existe.** Ele nasce no ato final da aula 3, dentro do
repositório novo que você cria — não dentro deste fork do curso.

## Pré-requisitos

- Tudo da aula 1 funcionando: Claude Code instalado e logado, `git`, conta no GitHub.
- Bloco assíncrono desta semana concluído (Context Engineering — ver `GUIA-DO-ALUNO.md`).
- Ter pensado, antes do fim da aula 3, se você já tem um problema real em mente (domínio
  7 do catálogo) ou se vai escolher um dos cases da PDA. Pensar antes não é decidir
  antes — a decisão final acontece no ato final da aula 3, mas chegar sem ter pensado
  nada custa os 10 minutos inteiros.

## O catálogo de domínios (revisão rápida)

1. Listagem de perfis de alunos da PDA
2. Captação de clientes e automações pra alunos freelancers da PDA
3. Quiz conectado ao Claude
4. Avaliação automatizada de projetos por IA
5. Agente de revisão de código com a voz da PDA
6. Problema real da ONG ou das próprias aulas (trazido pela facilitadora)
7. Domínio próprio do aluno

Todos os sete funcionam com o mesmo processo desta semana — o que muda é o que você
especifica pro agente, não como você especifica. Dúvida sobre como algum se encaixa?
Pergunte pra facilitadora no dia.

## Regra da casa

> **Você é responsável por cada linha que commita.**
> O agente executa. Você especifica, lê o diff, roda os testes e decide.

Essa semana isso vale em dobro: o esqueleto do seu projeto não é um `npx create-x`. É
você especificando pro agente o que precisa existir — e o seu trabalho de verdade começa
quando o agente termina e você tem que decidir o que aceitar e o que jogar fora.
