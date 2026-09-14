# 🤖 Semana 2 — Prompt, contexto e o nascimento do projeto: Atividade Prática (Entregável)

**Módulo 1 — AI-Assisted Developer**

|  |  |
| :---- | :---- |
| **Material da aula** | `aula3-prompts-contexto-projeto/` no seu fork de pda-especializacao-ia |
| **Repositório do projeto** | repositório **novo**, seu, fora do fork de `pda-especializacao-ia` — é o que nasce nesta semana |
| **Formulário de entrega** | https://forms.gle/PSd6i65g44GwBMgq6 |
| **Prazo de entrega** | Antes da aula 1 da semana 3 |

Duas entregas. A **mínima** todo mundo consegue no dia da aula 4. A **completa** é pra
quem quer treinar de verdade o julgamento de "o que eu aceito do que o agente gerou" —
e é ela que prova que você não só rodou um prompt, revisou o resultado.

---

## O que você vai entregar

O link do repositório novo do seu projeto (o que nasceu na aula 4), contendo pelo menos:
esqueleto rodando, `CLAUDE.md` sem `TODO`, e o parágrafo pro dono do negócio. Na entrega
completa, também um `NOTAS-DE-REVISAO.md` com o seu processo de especificação e revisão.

## Por que essa atividade existe

Essa entrega prova uma capacidade específica: **que você consegue especificar um
problema pro agente com precisão suficiente pra receber algo utilizável, e que você sabe
reconhecer o que do que voltou não serve e precisa ser rejeitado.** Não prova que você
sabe programar do zero, e não prova que o agente é bom — prova que a combinação das duas
coisas, com você no controle, produz algo real.

Se essa entrega estivesse errada — se você tivesse aceitado tudo que o agente sugeriu sem
questionar, ou tivesse escrito um `CLAUDE.md` genérico que serviria pra qualquer projeto —
isso provaria o oposto: que você ainda está delegando o julgamento, não só a execução.
É exatamente o erro que a regra da casa (aula 1) existe pra evitar, e essa semana é onde
ele custa mais caro, porque o projeto vai carregar essa decisão por 12 semanas.

## Pré-requisitos

- Bloco da Alura desta semana concluído: **Context Engineering: otimização da janela de
  contexto de IAs** (Alura).
- Ambiente da aula 1 funcionando (Claude Code, git, GitHub).
- Ter participado da aula 4 inteira — a escolha de domínio e os checkpoints 1-3 não têm
  como ser refeitos sozinho em casa com a mesma qualidade; se você perdeu a aula, fale
  com a facilitadora antes de tentar sozinho.

## Passo a passo

1. Confirme que seu repositório novo existe no GitHub, fora do fork do curso, e é
   público ou que a facilitadora tem acesso (se privado, adicione a conta dela como
   colaboradora).
2. Rode o comando de teste do seu projeto no seu terminal, do zero (clone numa pasta
   nova se quiser garantir que não depende de nada só instalado na sua máquina):
   ```bash
   git clone <url-do-seu-repo>
   cd <seu-projeto>
   <comando de instalar dependências, do seu README>
   <comando de teste, do seu README>
   ```
3. Abra o `CLAUDE.md`. Confirme: sem `TODO`, sem comentário HTML sobrando, abaixo de ~40
   linhas, com pelo menos 1 regra que você mesma escreveu (não copiada do template sem
   adaptar).
4. Confirme que o `README.md` explica o que é o projeto, como rodar, e comenta a
   estrutura de pastas.
5. Escreva (ou revise) o parágrafo pro dono do negócio — veja o modelo abaixo antes de
   escrever o seu.
6. **Só na entrega completa:** escreva `NOTAS-DE-REVISAO.md` na raiz do projeto (estrutura
   na seção abaixo).
7. Commit, push, e cole o link do repositório no formulário de entrega.

## O parágrafo para o dono do negócio

Enunciado: escreva de 3 a 5 frases, sem jargão técnico, explicando pra uma pessoa que não
sabe programar **que problema o seu projeto resolve** e **por que isso importa pra ela**.
Teste real: se a pessoa que você tem em mente perguntasse "e daí?", sua última frase já
responde.

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

## `NOTAS-DE-REVISAO.md` (só na entrega completa)

Estrutura sugerida:

```markdown
# Notas de revisão — nascimento do projeto

## O que eu pedi (o prompt exato do checkpoint 1)

## O que o agente propôs no plano
(resumo — não precisa colar tudo)

## O que eu rejeitei ou pedi pra mudar, e por quê
(o ponto mais importante deste arquivo — se estiver vazio, releia o checkpoint 2)

## O que eu aceitei sem mudar, e por quê fazia sentido

## O que eu coloquei no CLAUDE.md e por quê essas escolhas, não outras
```

## Checklist antes de entregar

- [ ] Repositório novo, fora do fork do curso, acessível pela facilitadora
- [ ] Comando de teste roda do zero, num clone limpo
- [ ] `CLAUDE.md` sem `TODO`, sem comentário HTML, abaixo de ~40 linhas
- [ ] `README.md` explica o que é, como rodar, estrutura comentada
- [ ] Estrutura separa código de teste
- [ ] Pelo menos 1 artefato real do domínio (não um placeholder vazio)
- [ ] Git com pelo menos 2 commits mostrando iteração (não "tudo de uma vez")
- [ ] Parágrafo pro dono do negócio, sem jargão, 3-5 frases
- [ ] (completa) `NOTAS-DE-REVISAO.md` com pelo menos uma coisa rejeitada e o porquê

## Rubrica

| critério | peso | o que eu olho |
|---|---|---|
| Esqueleto funcional | 30% | o comando de teste roda sem erro de configuração num clone limpo; código e teste separados; git tem histórico de iteração, não um commit único gerado tudo de uma vez |
| Especificação e julgamento | 30% | o prompt do checkpoint 1 tinha restrições e formato de saída claros; há evidência de algo rejeitado ou ajustado do que o agente sugeriu — "aceitei tudo" não pontua aqui |
| `CLAUDE.md` útil | 20% | curto (eu conto linha), sem `TODO`, específico deste projeto — não genérico a ponto de servir pra qualquer coisa |
| Parágrafo pro dono do negócio | 20% | sem jargão, 3-5 frases, uma pessoa fora de tech entenderia o problema e por que importa numa leitura |

O que **não** pontua: esqueleto bonito que você não sabe explicar por que tem essa
estrutura. O que pontua: você ter rejeitado algo que o agente sugeriu — ou saber dizer,
com clareza, por que dessa vez não precisou rejeitar nada.

## Bônus (sem peso na nota, com peso na vida)

- Rode o checkpoint 1 de novo, do zero, numa pasta separada, com o mesmo prompt exato.
  Compare os dois esqueletos gerados. O que mudou sem você mudar nada no pedido?
- Peça pro agente, numa sessão nova e sem `CLAUDE.md`, uma tarefa que dependa de uma das
  suas regras. Compare com a mesma tarefa numa sessão que lê o `CLAUDE.md`. Cole os dois
  resultados no `NOTAS-DE-REVISAO.md`.
