# Prompts prontos — RPI em três sessões

Copie e cole. Adapte o que está entre `< >`. A regra que importa mais que o texto exato:
**cada bloco abaixo é uma sessão NOVA de agente** (`claude` novo, ou `/clear` antes de
colar). Nunca cole o bloco 2 na mesma janela que já rodou o bloco 1.

---

## Sessão 1 — Research

Abra um agente novo, **sem plan mode e sem intenção de editar nada** (só conversa e leitura):

```
Meu domínio de projeto é: <cole seu domínio do catálogo, ex.: "captação de clientes e
automações pra alunos freelancers da PDA">.

Aqui está o meu parágrafo pro dono do negócio, da semana 2:
<cole o parágrafo>

Me ajude a aprofundar isto como uma sessão de RESEARCH, não de solução. Me faça perguntas
pra eu descrever melhor: quem exatamente sente essa dor, em que momento do processo ela
aparece, o que ela diria com as próprias palavras, e o que isso custa hoje (tempo, dinheiro
ou erro). NÃO proponha solução, tecnologia, nem estrutura de código nesta conversa — se eu
pedir "e agora o que eu construo", me lembre que ainda estamos na fase de Research.

No final, escreva o resultado em starter/RESEARCH-template.md preenchido.
```

Ao terminar: leia o `RESEARCH.md` gerado. Se tiver qualquer palavra de solução técnica
nele, apague antes de seguir pra sessão 2.

---

## Sessão 2 — Plan

**Sessão nova.** Cole SÓ o conteúdo do `RESEARCH.md` (não a conversa da sessão 1):

```
Aqui está o RESEARCH.md da minha sessão anterior, sobre um problema real do meu projeto:

<cole o conteúdo inteiro do RESEARCH.md>

Bounded context da semana 5 ao qual isso pertence: <nome do contexto> — linguagem ubíqua
que já uso nele: <cole 3-5 termos e definições>.

Com base SÓ no que está acima (não invente informação que não está aqui), escreva:

1. Uma ADR (use o formato de starter/ADR-template.md) com a decisão sobre o que fazer.
2. O documento único enxuto (use starter/SPEC-ENXUTA-template.md) com contexto, decisão,
   fora de escopo, 5 critérios EARS (use os 5 padrões: ubíqua, orientada a evento,
   orientada a estado, feature opcional, comportamento indesejado) e 3 cenários BDD em
   Gherkin (Dado/Quando/Então).

Ainda não escreva código nem crie arquivo de implementação — esta sessão só produz os
dois documentos acima.
```

Ao terminar: **revise cada critério EARS contra o `RESEARCH.md`.** Pergunta de verificação
pra cada um: "isso aqui resolve a frase que a pessoa que sente a dor diria?" Se você não
consegue apontar em qual frase do Research este critério se apoia, ele não entra.

---

## Sessão 3 — Implement

**Sessão nova de novo.** Cole SÓ a ADR + o documento enxuto (já revisados por você):

```
Aqui está a especificação de uma feature do meu projeto, já decidida e revisada por mim:

<cole a ADR e o documento enxuto, já com seus ajustes>

Implemente exatamente o que os critérios EARS e os cenários BDD descrevem. Escreva também
os testes automatizados que verificam os 3 cenários BDD, no formato de teste que meu
projeto já usa. Rode os testes ao final e me mostre o resultado.

Não reabra a pergunta de "isso é o problema certo" — essa decisão já foi tomada nas
sessões anteriores. Se você achar a spec ambígua num ponto, pare e pergunte — não invente
a resposta.
```

---

## Prompt da demo (erro proposital — sessão única, pra contraste)

Este é o prompt que a facilitadora roda ao vivo pra mostrar o que dá errado quando as três
fases viram uma só. **Não use isto no seu lab** — é só pra ver o efeito.

```
<contexto do RESEARCH.md colado, na MESMA sessão>

Agora já que você entendeu o problema, pode implementar a solução direto.
```

O que costuma acontecer: o plano que sai a seguir é, na prática, uma descrição do código
que o agente já começou a esboçar mentalmente durante a exploração — não uma resposta
nova à pergunta "o que resolve a dor". A contaminação é sutil: o texto do "plano" ainda
parece bom português, só que já assume a solução como dada.
