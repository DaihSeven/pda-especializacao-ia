# Referência de formato e voz — a aula 1, que a turma JÁ recebeu

Os arquivos reais estão em `/home/claude/pda/_referencia-aula1/`:

- `README.md` — roteiro público da aula 1. Leia para calibrar o tom do seu README.
- `GUIA-DO-ALUNO.md` — passo a passo dos labs, com suporte explícito a Windows
  (tabela "Terminal: qual usar" comparando Git Bash, WSL, PowerShell, CMD).
  **Seu GUIA-DO-ALUNO.md precisa ter o mesmo nível de cuidado com quem está no Windows
  e com quem trava.** Seção de troubleshooting obrigatória.
- `ENTREGAVEL.md` — a atividade da aula 1. Note: entrega mínima + entrega completa,
  rubrica em tabela com pesos, bloco "Bônus (sem peso na nota, com peso na vida)".
  **Replique essa arquitetura de duas faixas: mínima que todo mundo consegue no dia,
  completa para quem quer ir além.** Isso existe porque a turma tem dificuldade de
  aprendizagem declarada e não pode travar no primeiro degrau.
- `CLAUDE.md` — o CLAUDE.md com TODOs que o aluno completa no lab. Padrão a reusar:
  arquivo incompleto de propósito, com comentário HTML explicando o mecanismo e link
  para a doc.
- `README-RAIZ.md` — o README da raiz do repo.

## Padrões da aula 1 que você deve manter

- "Regra da casa" citada em bloco de citação: *você é responsável por cada linha que
  commita. O agente executa. Você especifica, lê o diff, roda os testes e decide.*
- Código propositalmente ruim em `src/`, com comentário do tipo "gerado por IA, colado
  sem ler. Tem bug."
- `tests/` é a especificação e **não se edita**. Isso é uma regra transversal do curso.
- Árvore de arquivos comentada no README (bloco de código com `<-` explicando cada item).
- Comandos reais, copiáveis, com o output esperado quando ele importa
  (`npm test        # vai falhar. É de propósito.`).
- Rubrica que diz o que NÃO pontua: "código bonito que você não sabe explicar".

## O que a aula 1 fez de errado e você não repete

- Conceito demais antes de mão na massa. A aula 1 gastou os primeiros blocos em teoria e
  a turma travou. Seu bloco de teoria vem DEPOIS de eles terem tocado na coisa, ou é curto
  o suficiente para cabe na frase-âncora de um slide.
- Print de tela como evidência de aprendizado é fraco. Se você usar print, ele é
  complemento — nunca a evidência principal.
