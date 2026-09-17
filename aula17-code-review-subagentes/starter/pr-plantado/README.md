# perfis-pda-busca

Projeto de exemplo (domínio 1 do catálogo: **listagem pública de perfis de
alunos da PDA**) usado no lab de leitura em camadas da Semana 9. `main` é o
estado "antes". A branch `feature/busca-por-habilidade` é o PR que o colega
(fictício) abriu — **gerado por agente, colado sem ler**.

## Rodando

```bash
npm test        # roda a suíte em tests/ (intocável — é a especificação)
npm run lint    # lint-simples.js: um script sem dependência que pega os
                # sinais mais óbvios (var, ==, console.log esquecido)
```

## O que este projeto faz

`src/perfis.js` expõe `buscarPorHabilidade(perfis, habilidade)`, usada pela
página pública de listagem. **Regra de domínio que já vale desde a `main`:**
o resultado é uma vitrine pública — nenhum campo de contato (e-mail) pode
aparecer nele, e só perfil de aluno formado aparece. Isso está fixado no
teste `resultado não expõe e-mail`.

## Não leia o gabarito ainda

Se você é aluno: não abra `../GABARITO-PR-PLANTADO.md` antes de terminar o
Lab 1. Ele existe pra facilitadora conferir seu registro, não pra você
copiar a resposta.
