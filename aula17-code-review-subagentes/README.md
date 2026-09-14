# aula17-code-review-subagentes

Semana 9 — **Code review e subagentes de revisão**
Especialização em Desenvolvimento com IA · Programadores do Amanhã · Turma 2
**Módulo 3 — AI Orchestrator / Agentes**

Fio condutor: **"Quem olha primeiro, vê diferente."**

Desde a Semana 8 seu repositório tem CI bloqueando merge — lint, type
check, build, teste e dependency check rodando antes de qualquer coisa
chegar na `main`. Isso resolve "o código compila e passa nos testes
combinados". Não resolve "esse código deveria existir do jeito que está".
Essa semana é sobre a lacuna entre as duas coisas: como ler um diff grande
sem ler cada linha, e como configurar dois subagentes especializados de
revisão que pegam parte do que um humano cansado deixa passar — e deixam
passar parte do que só um humano com contexto de domínio percebe.

> Faz parte do repo do curso: [`pda-especializacao-ia`](../). Cada pasta na
> raiz é uma aula.

## Como usar

1. **Fork** o repositório `pda-especializacao-ia` inteiro na sua conta (se
   ainda não fez).
2. Clone o seu fork e entre nesta pasta:

   ```bash
   git clone https://github.com/<seu-usuario>/pda-especializacao-ia.git
   cd pda-especializacao-ia/aula17-code-review-subagentes
   ```

3. Durante a aula, siga o [`GUIA-DO-ALUNO.md`](./GUIA-DO-ALUNO.md) — ele
   acompanha os slides, lab por lab.
4. Depois da aula, faça a [`ENTREGAVEL.md`](./ENTREGAVEL.md) (entrega
   mínima ou completa).

## O que tem aqui

```
.
|-- README.md                          <- este arquivo
|-- GUIA-DO-ALUNO.md                   <- passo a passo dos labs + troubleshooting
|-- ENTREGAVEL.md                      <- a atividade de fixação + rubrica
|-- starter/
|   |-- pr-plantado/                   <- repositório git de exemplo (branch main + branch
|   |                                     do PR) usado no Lab 1 e nas demos
|   |-- GABARITO-PR-PLANTADO.md        <- só a facilitadora, não abra antes do Lab 1
|   |-- agentes-revisao/               <- os 2 subagentes prontos pra copiar pro seu projeto
|   |   |-- revisor-sinais-ia.md
|   |   `-- revisor-seguranca-ia.md
|   |-- templates/                     <- os 3 registros que você preenche nos labs
|   |   |-- REGISTRO-REVISAO-HUMANA.md
|   |   |-- REGISTRO-SUBAGENTE.md
|   |   `-- REGISTRO-COMPARACAO.csv
|   `-- LISTA-SINAIS-ALERTA-PR-AGENTE.md
```

## Por que esta semana existe

Nas últimas quatro semanas você ganhou fronteira de domínio (Semana 5),
documento e critério de aceite (Semana 6), spec executável (Semana 7) e um
portão automático que bloqueia merge quebrado (Semana 8). Todos esses
sensores checam **se o código funciona**. Nenhum deles checa **se o código
deveria ter sido escrito daquele jeito** — arquitetura, nome, se a
mudança respeita o domínio do seu próprio produto. Isso é revisão, e é
julgamento, não sensor. Esta semana você pratica ler um diff grande sem se
afogar nele, e configura dois subagentes que fazem uma fatia mecânica
dessa revisão — descobrindo, na prática desconfortável, que eles pegam
coisas que você não pega, e perdem coisas que só você pega.

## Pré-requisitos

- Node 18+ (`node -v`) — mesmo Node que você já usa desde a aula 1.
- git, GitHub, Claude Code já instalado e logado (aula 1).
- **Bloco "Code Review Profissional"** do curso Alura "Qualidade de
  código: estratégia de Code Review, métricas e governança" concluído — é
  pré-requisito de entrada no lab da aula 2 (ver `PACOTE.md` da
  facilitadora para o mapeamento completo).
- Seu repositório de projeto (Semana 2) com pelo menos um PR real — você
  precisa dele **antes** da aula 2 (red team em duplas).
- **Windows:** os comandos deste guia usam o mesmo terminal recomendado na
  aula 1 (Git Bash). Veja a seção "Terminal" do `GUIA-DO-ALUNO.md`.

## Nenhuma chave de API nesta semana

Subagente de revisão é recurso do **Claude Code**, disponível na sua
assinatura **Claude Pro** — não é uma chamada de API separada. Se em algum
momento você achar que precisa gerar uma chave pra fazer o lab funcionar,
pare: o desenho está errado, avise a facilitadora. A fronteira de chave de
API só começa na Semana 10.

## O mecanismo desta semana: ordem importa, e é provada por commit

**Regra que estrutura os dois labs:** você registra sua própria revisão
humana e **commita** ela antes de rodar qualquer subagente. A prova de que
você fez nessa ordem não é sua palavra — é `git log --oneline` mostrando o
timestamp do commit do registro humano antes do commit do registro do
subagente. Mesma lógica do `LOG-RED-GREEN-REFACTOR` que você já usou na
Semana 8: **prova pela ordem dos commits, não pela narrativa reconstruída
depois.**

Por que essa ordem, e não a inversa: ver um output de subagente muda o que
você continua procurando por conta própria — o cérebro trata "o que ele
disse" como "o que existe". Se você ver o subagente primeiro, sua revisão
humana deixa de ser uma segunda opinião independente e vira uma checagem do
que ele já te mostrou.

## Regra da casa (continua valendo)

> **Você é responsável por cada linha que commita.**
> O agente executa. Você especifica, lê o diff, roda os testes e decide.

Esta semana ganha um adendo:

> **Um subagente que acha problema, acha. Um subagente que não acha,
> não prova que não existe.**
> A decisão de bloquear ou não um merge continua sua, mesmo com dois
> subagentes rodando.

## Referências

Lista completa e verificada em [`REFERENCIAS.md`](./REFERENCIAS.md). As
três centrais:

- Doc oficial de subagentes do Claude Code: <https://code.claude.com/docs/en/sub-agents>
- Doc oficial de boas práticas — "Add an adversarial review step": <https://code.claude.com/docs/en/best-practices>
- Framework de controle da AWS pra agentes de código (scope creep, R007): <https://aws.amazon.com/blogs/security/balancing-speed-and-safety-a-control-framework-for-ai-coding-agents/>
