# 🤖 Semana 11 — Software com LLM dentro: Atividade Prática (Entregável)

**Módulo 3 — AI Orchestrator / Agentes**

|  |  |
| :---- | :---- |
| **Material da aula** | `aula21-software-com-llm-dentro/` no seu fork de pda-especializacao-ia |
| **Repositório do projeto** | seu repo próprio (criado na Semana 2) |
| **Formulário de entrega** | https://forms.gle/PSd6i65g44GwBMgq6 |
| **Prazo de entrega** | Antes da aula 1 da semana 12 |

Duas entregas. A **mínima** todo mundo consegue no fim da aula 22. A **completa** é o app
funcional em produção com evals de verdade — é o que a semana pede no bloco da grade.

---

## O que você vai entregar

Um app do **seu** projeto (qualquer domínio do catálogo) que faz uma chamada real à API
da Anthropic com **streaming**, **system prompt** e **pelo menos uma tool** cuja saída
passa por **structured output**, tudo dentro de um **loop determinístico** que valida a
saída do modelo em código antes de aceitar. Rodando em produção (Render), com **5 casos
de eval** que rodam em lote.

## Por que essa atividade existe

Prova que você sabe fazer a distinção mais importante da semana: **o que o modelo decide
e o que o seu código decide.** Um app que só repassa a resposta do modelo direto pro
usuário, sem nenhuma validação em código, não prova isso — prova só que a API funciona.
O que esta entrega comprova especificamente é que você sabe **nomear, em código, o ponto
em que a saída não-determinística do modelo precisa ser checada antes de virar ação** —
e que você escolheu 5 casos de eval que expõem um jeito real do seu sistema falhar, não
5 variações do caminho feliz. Se esta entrega estivesse errada, o sintoma seria: o app
"funciona na demo" mas quebra no primeiro caso que ninguém tentou ao vivo — porque a
validação estava só no prompt, e o prompt não é código.

## Pré-requisitos

- Bloco "Console e API da Anthropic" do curso Alura **Claude e Python: desenvolva
  assistentes com a API da Anthropic** concluído (ver `PACOTE.md`)
- Chave de API configurada e testada (`npm run checar-chave` verde)
- `npm test` verde no `starter/` (os 5 testes de `loop.test.js`)
- Conta no Render criada

## Passo a passo

1. No seu repositório de projeto, adapte `starter/src/cliente.js` (ou escreva o
   equivalente) pro **seu** domínio: troque a tool `buscar_perfil` pela tool do seu
   projeto, com `input_schema` que faz sentido pro seu caso.
2. Adapte `src/schema-avaliacao.json` (ou crie o schema do seu domínio) e
   `src/validar-avaliacao.js` com **a regra de negócio que só você sabe** — o schema
   sozinho não garante sentido, só formato.
3. Ligue tudo dentro de `rodarLoop()` — sua chamada ao modelo precisa estar validada em
   código antes de qualquer efeito (salvar, responder ao usuário, disparar outra ação).
4. Preencha os **5 casos** em `evals/casos.json` seguindo o formato de
   `evals/README.md` — não vale 5 variações do caminho feliz. Implemente
   `evals/minha-integracao.js` pro seu app.
5. `npm run evals` — anote quantos passam. **Se todos passarem de primeira, revise: seus
   casos são fracos demais, ou você já iterou o suficiente pra merecer isso?**
6. Faça o deploy seguindo `starter/DEPLOY.md`. Confira `starter/CHECKLIST-SEGREDOS.md`
   antes do primeiro `git push`.
7. Escreva um `RELATORIO-EVALS.md` no seu repo (estrutura sugerida abaixo).
8. Preencha o parágrafo pro dono do negócio (veja o exemplo modelo abaixo antes de
   escrever o seu).

### `RELATORIO-EVALS.md` — estrutura sugerida

```markdown
# Evals — Semana 11

## Os 5 casos e por que escolhi cada um
(1 frase por caso: que falha real ele tenta expor)

## Resultado
(quantos passam hoje — cole a saída de `npm run evals`)

## O caso que mais me surpreendeu
(um que você esperava que passasse e falhou, ou vice-versa)

## O que eu ainda não sei se está certo
(honestidade aqui vale mais que 5/5 verde sem explicação)
```

---

## O parágrafo para o dono do negócio

**Enunciado da tarefa:** escreva de 3 a 5 frases, sem jargão técnico, explicando pra
alguém que não programa **que problema o seu app resolve** e **por que a parte de
validação em código importa** (por que não bastaria "perguntar pro Claude e confiar").

**Exemplo modelo — domínio 1 (Listagem de perfis de alunos da PDA):**

> Hoje, quem visita a vitrine de alunos da PDA precisa ler perfil por perfil pra achar
> alguém com a habilidade certa. Este assistente deixa a pessoa perguntar em linguagem
> normal — "quem sabe React e já trabalhou com dados?" — e ele busca no catálogo e
> responde na hora, mostrando a resposta sendo escrita aos poucos, como um chat de
> verdade. A diferença importante é que o sistema não confia cegamente no que o modelo de
> IA sugere: antes de mostrar qualquer nome, o código confere se esse aluno realmente
> está cadastrado com aquela habilidade — porque um modelo de IA pode, às vezes,
> "inventar" uma combinação que parece certa mas não existe no catálogo, e isso quebraria
> a confiança de quem está contratando através da vitrine.

## Checklist antes de entregar

- [ ] `.env` nunca foi commitado (confira `git log` do zero, não só o estado atual)
- [ ] O app roda numa URL pública do Render, não só no `localhost`
- [ ] A chave está configurada como variável de ambiente no Render, não em código
- [ ] `npm test` verde
- [ ] Os 5 casos de `evals/casos.json` estão preenchidos com critérios específicos (não
      "TODO") e `npm run evals` roda até o fim
- [ ] `RELATORIO-EVALS.md` está no repo, com pelo menos um caso que falhou (ou uma
      explicação honesta de por que todos passaram)
- [ ] O parágrafo pro dono do negócio está no README do seu projeto
- [ ] Você sabe explicar, sem olhar o código, onde fica a validação que o modelo não faz sozinho

---

## Entrega mínima (o que todo mundo consegue até o fim da aula 22)

- App rodando localmente (não precisa estar em produção ainda) com streaming + system
  prompt + uma tool com structured output
- `npm test` verde (os 5 testes de `loop.test.js`)
- 2 dos 5 casos de eval preenchidos e rodando
- O parágrafo pro dono do negócio, mesmo que num rascunho

## Entrega completa (tudo da mínima, mais)

- Deploy funcionando em produção (Render), com secret configurado no host
- Os 5 casos de eval completos, com `RELATORIO-EVALS.md`
- A regra de negócio de `validar-avaliacao.js` (ou equivalente) implementada e testada

---

## Rubrica

| Critério | Peso | O que a facilitadora olha |
|---|---|---|
| App funcional em produção | 30% | URL pública do Render responde; streaming visível; tool calling funciona de ponta a ponta |
| Loop determinístico com validação real | 25% | Existe uma regra de negócio em código (não só tipo) que rejeita saída inválida do modelo; `desistir()` devolve formato previsível |
| Qualidade dos 5 casos de eval | 25% | Casos cobrem mais que caminho feliz (ambíguo, quebra de regra, hostil); `RELATORIO-EVALS.md` é honesto sobre o que falha |
| Gestão de segredo | 10% | Chave nunca em commit; variável de ambiente no host; `CHECKLIST-SEGREDOS.md` seguido |
| Parágrafo pro dono do negócio | 10% | Sem jargão; explica por que a validação em código importa, não só o que o app faz |

O que **não** pontua: 5/5 nos evals sem nenhum caso desenhado pra tentar quebrar o
sistema. O que pontua mais: 3/5 com um `RELATORIO-EVALS.md` honesto sobre os 2 que falham
e por quê.

---

## Bônus (sem peso na nota, com peso na vida)

- Rode o mesmo caso de eval com `claude-haiku-4-5-20251001` e com `claude-sonnet-5`.
  Algum resultado muda? O custo muda quanto?
- Force o build do Render a falhar de propósito (ex.: suba sem configurar a variável de
  ambiente) e documente, em uma frase, o que o log de erro disse — isso te prepara pra
  quando acontecer de verdade, sem plateia.
