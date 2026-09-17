# 🤖 Semana 8 — Verificadores: Atividade Prática (Entregável)

**Módulo 2 — AI Orchestrator / Contexto**

|  |  |
| :---- | :---- |
| **Material da aula** | `aula15-verificadores/` no seu fork de pda-especializacao-ia |
| **Repositório do projeto** | seu repositório próprio (criado na semana 2) |
| **Formulário de entrega** | https://forms.gle/PSd6i65g44GwBMgq6 |
| **Prazo de entrega** | Antes da aula 1 da semana 9 |

## O que você vai entregar

1. **CI bloqueando merge** no seu repositório de projeto: workflow de GitHub
   Actions com lint, type check, build e teste rodando em todo push/PR, mais
   branch protection configurada exigindo os 4 (ou 5, com dependency check)
   verdes antes de permitir merge — ou, se seu repo é privado sem plano
   pago, a documentação clara de por que essa peça específica não pôde ser
   configurada.
2. **Os 3 cenários BDD da Semana 6 (`aula11-diagnostico-documentos-rpi`)
   virados em teste automatizado**, um teste por cenário, seguindo o
   exemplo de `starter/bdd-para-teste/cenario-exemplo.md`.
3. **Um log completo de um ciclo red/green/refactor**, por cenário (3 logs),
   provando pela ordem dos commits que o teste foi escrito e commitado
   falhando antes da implementação — template em
   `starter/red-green-refactor-log-TEMPLATE.md`.
4. **Um "teste que não prova nada" encontrado no seu próprio repo**,
   documentado e corrigido — ver `starter/teste-que-nao-prova-nada-exemplos.md`.

## Por que essa atividade existe

Ela comprova uma capacidade específica: **você não aceita "pronto" do
agente sem um sinal que não seja a palavra dele**. Configurar um workflow de
CI é mecânico — o próprio agente escreve o YAML se você pedir. O que só
você decide é **o que conta como prova de que terminou** (quais checks são
obrigatórios, qual severidade de vulnerabilidade bloqueia, se um teste verde
realmente testa alguma coisa) — e só um ciclo real, com log e commits na
ordem certa, prova se essa decisão virou prática ou ficou intenção. Se essa
entrega estivesse errada, ela mostraria uma de duas coisas: você não tem
verificador nenhum bloqueando nada de verdade (CI existe mas não impede
merge), ou você tem verificadores que passam sem checar nada que importe
(os "testes que não provam nada" que ninguém nunca foi atrás de achar).

## Pré-requisitos

- Bloco da Alura desta semana concluído (ver `PACOTE.md` para o mapeamento).
- Ambiente da aula 1 (Node, Claude Code, GitHub) funcional.
- Projeto próprio (semana 2) com git, README, separação código/teste e
  comando de teste que roda — o contrato mínimo do esqueleto.
- Os 3 cenários BDD da Semana 6, escritos e localizáveis no seu repo ou nos
  materiais daquela semana.

## Passo a passo

1. Garanta os 4 scripts (`lint`, `typecheck`, `build`, `test`) no
   `package.json` do seu projeto — ver Lab 1 do `GUIA-DO-ALUNO.md`.
2. Copie `starter/ci-workflow/ci.yml` para `.github/workflows/ci.yml`, ajuste
   os nomes de branch se necessário, commit e push.
3. Confirme na aba Actions do GitHub que os jobs rodam (nem que ainda
   falhem — o importante é rodar pelo menos uma vez, é pré-requisito da
   próxima etapa).
4. Configure branch protection seguindo `starter/branch-protection-guia.md`
   do início ao fim — inclusive a seção 0 (decidir se seu repo fica público
   ou se você usa o Student Pack).
5. Prove o bloqueio: abra um PR com algo quebrado de propósito, capture o
   print do botão de merge desabilitado.
6. Transforme os 3 cenários BDD da Semana 6 em 3 testes, um de cada vez,
   seguindo red → green → refactor. Preencha um
   `LOG-RED-GREEN-REFACTOR-<n>.md` por cenário à medida que for.
7. Vasculhe seu repo (testes das semanas anteriores, testes que você
   escreveu hoje) e ache um "teste que não prova nada" — quebre a
   implementação e confirme que o teste continua verde. Corrija. Documente
   o antes e o depois.
8. Escreva o parágrafo pro dono do negócio.
9. Commit, push. PR aberto (no seu próprio repo, da branch de trabalho pra
   `main`) se for fazer a entrega completa.

## O parágrafo para o dono do negócio

**Enunciado:** escreva de 3 a 5 frases, sem jargão técnico, explicando pra
alguém que não programa: o que significa "o sistema se recusa a publicar
código quebrado sozinho", e por que isso é diferente de "confiar que a
pessoa (ou a IA) vai lembrar de testar".

**Exemplo modelo** (domínio 1 do catálogo — Listagem de perfis de alunos da PDA):

> "Configuramos o sistema pra que nenhuma mudança no site de perfis vá pro
> ar sem passar por quatro checagens automáticas: o código segue o padrão
> combinado, não tem erro de digitação de tipo escondido, realmente compila,
> e os comportamentos que já garantimos (por exemplo, 'perfil sem habilidade
> não aparece numa busca por habilidade') continuam funcionando. Se qualquer
> uma dessas checagens falhar, a plataforma onde o código fica hospedado
> (GitHub) bloqueia a publicação até alguém corrigir — não é uma sugestão,
> é uma trava. Isso significa que, mesmo se um assistente de IA escrever uma
> mudança errada, ela não chega ao site sozinha: alguma das quatro checagens
> pega antes."

## Checklist antes de entregar

- [ ] `package.json` do seu projeto tem `lint`, `typecheck`, `build`, `test`
      (e, opcionalmente, `verify` agregando os 4)
- [ ] `.github/workflows/ci.yml` commitado, rodando (aba Actions com pelo
      menos uma execução), verde
- [ ] Branch protection configurada exigindo os status checks — ou a
      limitação de plano documentada com print
- [ ] Print do merge bloqueado num PR com algo quebrado de propósito
- [ ] 3 testes, um por cenário BDD da Semana 6, cada um nomeado com a frase
      do cenário
- [ ] 3 arquivos `LOG-RED-GREEN-REFACTOR-<n>.md` preenchidos, cada um com a
      saída de `git log --oneline` provando teste antes de implementação
- [ ] 1 "teste que não prova nada" encontrado, documentado (antes/depois) e
      corrigido no seu repo
- [ ] `npm audit` rodado pelo menos uma vez local e no CI, sem vulnerabilidade
      "high" ou "critical" sem tratamento (corrigida, ou justificada por
      escrito se não houver correção disponível ainda)
- [ ] O parágrafo pro dono do negócio, sem jargão
- [ ] Link do repo do seu projeto (ou PR, na entrega completa) no formulário

---

## Entrega mínima (~45 min além do que já foi feito em aula)

Itens 1 a 5 do passo a passo (CI + branch protection + print do bloqueio),
mais **1** dos 3 cenários BDD virado em teste com o log completo, mais o
"teste que não prova nada" encontrado (mesmo que a correção do item 7 fique
simples).

## Entrega completa (tudo da mínima +)

- Os 3 cenários BDD virados em teste, com os 3 logs completos.
- `dependency-review-action` também configurado (se seu repo é público) ou
  a justificativa por escrito de por que não (se privado).
- Um parágrafo extra: qual dos 5 sensores você acha que vai te salvar mais
  vezes ao longo do resto do curso, no seu domínio específico de projeto, e
  por quê.
- PR aberto no seu próprio repo com tudo isso, na descrição citando o
  commit hash de cada "red" e cada "green".

---

## Rubrica

| critério | peso | o que a facilitadora olha |
|---|---|---|
| CI bloqueia merge de verdade | 30% | workflow com os 4 (ou 5) jobs rodando, branch protection configurada e o print provando que um PR quebrado não pôde ser mesclado — ou a limitação de plano documentada com precisão técnica, não só "não deu" |
| Os 3 testes vêm dos cenários BDD reais | 20% | nome do teste é a frase do cenário; o teste falha exatamente no comportamento que o cenário descreve, não em outra coisa |
| Ciclo red/green/refactor provado pela ordem | 30% | o `git log` mostra o commit do teste falhando ANTES do commit da implementação, com a saída real do terminal colada em cada fase — não a narrativa reconstituída depois |
| "Teste que não prova nada" encontrado e corrigido | 15% | o padrão identificado corretamente (dos 3 do `starter/`), a prova de que ele não detectava quebra (implementação quebrada de propósito + teste continuando verde), e a correção que faz o teste passar a detectar |
| O parágrafo pro dono do negócio | 5% | sem jargão, explica a trava (não a ferramenta) em termos que alguém leigo entende |

O que **não** pontua: um `ci.yml` bonito que nunca rodou de verdade, ou um
log de red/green/refactor escrito de memória depois que o código já
funcionava. O que pontua: um merge que você genuinamente não conseguiu
fazer até corrigir o problema — porque o sistema não deixou.

## Bônus (sem peso na nota, com peso na vida)

- Rode `npm install <nome-de-pacote-que-você-inventou-na-hora>` no seu
  projeto e cole a saída de erro no Mural da Alucinação — compare com o
  formato de erro que a Demo 3 mostrou em aula.
- Peça ao agente pra "resolver rápido, sem se preocupar em rodar os testes
  agora, você roda depois" e veja se ele resiste ou cede. Registre o que
  aconteceu — não é bug do agente, é comportamento de modelo sob pressão de
  instrução, mas vale documentar como você reagiu.
