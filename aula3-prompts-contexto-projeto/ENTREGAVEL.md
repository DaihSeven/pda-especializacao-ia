# 🤖 Semana 2 — Prompt, contexto e o nascimento do seu projeto: Atividade Prática (Entregável)

**Módulo 1 — Contexto, memória e ferramentas do agente**

|  |  |
| :---- | :---- |
| **Repositório da atividade** | seu próprio repositório de projeto (fora do fork do curso — ver "Pré-requisitos") |
| **Formulário de entrega** | https://forms.gle/PSd6i65g44GwBMgq6 |
| **Prazo de entrega** | antes da aula 1 da semana seguinte |

## O que você vai entregar

- Um `CLAUDE.md` no seu repositório de projeto, com pelo menos: contexto do projeto,
  1 convenção técnica e 1 comando útil.
- O esqueleto funcional do seu projeto, gerado com o agente a partir de um prompt
  específico (com exemplo e formato de saída) — pelo menos 1 arquivo funcional, não
  precisa estar completo.

## Por que essa atividade existe

Essa entrega comprova duas coisas específicas: que você consegue transformar um pedido
vago num prompt que produz o que você realmente precisa, e que você sabe decidir — com
um critério, não no impulso — quando vale mais limpar uma sessão contaminada do que
insistir nela. Sem isso, cada sessão nova com o agente é uma loteria.

## Pré-requisitos

- Bloco assíncrono da semana 2 concluído.
- Ter participado da aula 1 (escolha do domínio + esqueleto inicial) ou, se faltou, ter
  escolhido um domínio do catálogo em `GUIA-DO-ALUNO.md` antes de começar.
- Repositório do seu projeto criado fora do fork do material da aula — o fork guarda o
  conteúdo do curso, o seu projeto é seu, à parte, e vai crescer semana a semana.

## Passo a passo

1. Confirme (ou escolha agora) seu domínio de projeto — o catálogo está no
   `GUIA-DO-ALUNO.md`, seção "Ato final".
2. Confirme que o repositório do seu projeto existe no GitHub, fora do fork do curso,
   e que a facilitadora consegue acessar (se for privado, adicione a conta dela como
   colaboradora).
3. Se o esqueleto ainda não existe ou ficou pela metade na aula: peça ao agente, com um
   prompt específico (exemplo + formato de saída — modelo no checkpoint 1 do
   `GUIA-DO-ALUNO.md`), o esqueleto funcional do projeto. Critério de pronto: pelo menos
   1 arquivo funcional — não precisa estar completo.
4. Rode o projeto do zero pra garantir que ele não depende de nada que só existia na
   sessão que o gerou:
   ```bash
   <comando de instalar dependências, do seu README>
   <comando de teste, do seu README>
   ```
5. Escreva (ou revise) o `CLAUDE.md`: curto e específico, menos de 1 página, com o
   contexto do projeto + pelo menos 1 convenção técnica + 1 comando útil. O
   `starter/CLAUDE.md.template` é o ponto de partida.
6. Escreva o parágrafo pro dono do negócio (modelo na seção abaixo) e adicione no
   `README.md`.
7. Commit, push, e cole o link do repositório no formulário de entrega.

## Escreva o contexto do problema que você está resolvendo

Escreva de 3 a 5 frases, sem jargão técnico, explicando pra alguém que não programa:
que problema esse projeto (no domínio que você escolheu) resolve, e por que ele
importa. É o primeiro rascunho de como você vai explicar seu trabalho pra alguém que
só quer saber se resolve a vida dela.

**Exemplo modelo — domínio 1 (Listagem de perfis de alunos da PDA):**

> Hoje, quando alguém quer saber quem já passou pela PDA e o que essas pessoas sabem
> fazer, não existe um lugar único pra olhar — a informação está espalhada em planilhas e
> mensagens soltas. Este projeto cria uma vitrine pública simples: uma página que lista
> quem concluiu o programa, o que cada pessoa construiu e como entrar em contato. Isso
> ajuda a PDA a mostrar resultado pra quem financia o programa, e ajuda cada aluno a ser
> encontrado por quem quer contratar. Não é uma rede social nem um currículo completo — é
> uma porta de entrada rápida, que qualquer pessoa entende em 10 segundos de olhar.

Use esse exemplo como régua de nível de detalhe e de ausência de jargão — não como
modelo de frase pra copiar e trocar palavras.

## Checklist antes de entregar

- [ ] `CLAUDE.md` existe e tem menos de 1 página
- [ ] O esqueleto do projeto tem pelo menos 1 arquivo funcional gerado pelo agente
- [ ] O parágrafo pro dono do negócio está no `README.md`
- [ ] Link do repositório enviado no formulário

## Rubrica

| critério | peso | o que eu olho |
|---|---|---|
| Esqueleto funcional | 30% | pelo menos 1 arquivo funcional real do seu domínio, gerado pelo agente — não um placeholder vazio; o projeto instala/abre sem erro de configuração |
| Prompt específico e julgamento | 30% | o esqueleto nasceu de um prompt com exemplo e formato de saída, não de um pedido de uma linha; você consegue dizer o que ajustou ou rejeitou do que o agente propôs — "aceitei tudo sem ler" não pontua aqui |
| `CLAUDE.md` útil | 20% | menos de 1 página, com contexto do projeto + pelo menos 1 convenção técnica + 1 comando útil — específico deste projeto, não genérico a ponto de servir pra qualquer coisa |
| Parágrafo pro dono do negócio | 20% | está no `README.md`, sem jargão, 3-5 frases — uma pessoa fora de tech entenderia o problema e por que importa numa leitura |

O que **não** pontua: esqueleto bonito que você não sabe explicar por que tem essa
estrutura. O que pontua: você ter rejeitado algo que o agente sugeriu — ou saber dizer,
com clareza, por que dessa vez não precisou rejeitar nada.
