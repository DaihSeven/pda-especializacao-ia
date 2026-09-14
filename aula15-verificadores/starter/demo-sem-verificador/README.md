# demo-sem-verificador

Repo mínimo pra Demo 1 da aula 1 (30 min de teoria + demo, ver
`ROTEIRO-FACILITADORA.md`). Não é pro aluno rodar — é a facilitadora quem
conduz, projetado na tela.

## Setup antes da aula (uma vez, offline)

```bash
cd starter/demo-sem-verificador
npm install
npm run build   # confirma que builda limpo ANTES da demo — parte de trás
npm test        # confirma que passa — parte de trás
```

## O roteiro da demo (resumo — completo em ROTEIRO-FACILITADORA.md)

1. Com o Claude Code aberto nesta pasta, e o `CLAUDE.md` acima (que não fala
   nada de verificar nada), peça: **"adicione uma função `subtrai(a, b)` em
   `src/soma.ts` e exporte ela"**.
2. Deixe o agente editar e responder que terminou. Ele tende a responder
   "pronto"/"implementado" sem rodar `npm run build` nem `npm test` — porque
   nada no `CLAUDE.md` pede isso e nenhum hook força isso.
3. Antes de aceitar a palavra dele, rode você mesma, na tela:
   ```bash
   npm run build
   ```
4. **O erro proposital:** se o agente escreveu `subtrai(a: number, b: number)`
   mas em algum ponto usar uma vírgula a mais, um tipo errado, ou (mais comum
   na prática) simplesmente não rodou `tsc` pra confirmar — o build quebra ou
   passa por acaso. Em ambos os casos, faça a pergunta em voz alta: **"ele
   disse que terminou. Como eu sei que terminou de verdade?"**
   Se por acaso a implementação dele compilar de primeira (acontece — a tarefa
   é simples), force o ponto manualmente: abra `src/soma.ts` e insira um erro
   de tipo você mesma (ex.: `return a - b + "";`) e mostre `npm run build`
   quebrando — a demo não depende de o agente errar sozinho, depende de vocês
   verem que **nada detectaria isso se vocês não rodassem o build**.
5. Nomeie o conceito só agora (não antes): **verificador**. "Ele não mentiu.
   Ele não tem sentido nenhum pra saber se terminou. Vocês são o sentido dele
   até agora."
