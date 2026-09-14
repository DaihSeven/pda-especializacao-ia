# Checklist de segredos — convenção do curso a partir da Semana 11

A partir desta semana existe chave de verdade, numa conta que pode ser cobrada. Passe por
esta lista **antes do primeiro commit** e de novo **antes de todo deploy**.

## Antes do primeiro commit

- [ ] `.env` está no `.gitignore` (confira: `git status` não pode listar `.env`)
- [ ] Rodei `git log -p | grep -i "sk-ant"` (ou equivalente) e não achei nada — nenhuma
      chave já foi commitada em nenhum commit anterior deste repo
- [ ] `.env.example` existe e tem só o formato da chave, nunca uma chave real
- [ ] Nenhum `console.log` do meu código imprime a chave inteira (nem em erro)

## Se você commitou uma chave por engano

Isso vai acontecer com alguém da turma — é o motivo da demo ao vivo da aula 21. A ordem
importa, e é sempre esta (ver REFERENCIAS.md item 10):

1. **Revogue a chave primeiro.** Antes de limpar o histórico, antes de qualquer outra
   coisa. Uma chave commitada é uma chave comprometida — presuma que alguém (ou algum
   bot varredor) já viu, mesmo em repo privado.
2. Gere uma chave nova no console da Anthropic.
3. Só depois disso, limpe o histórico do git (ou aceite que o commit velho existe e a
   chave revogada nele é inofensiva — mais simples e igualmente seguro).
4. Atualize o `.env` local e o secret no host de deploy (Render) com a chave nova.
5. Confira se o GitHub abriu um alerta de secret scanning pro seu repo — se abriu, marque
   como resolvido só depois do passo 1.

**O que o GitHub faz sozinho, e o que não faz** (verificado na doc oficial, não invente):
- **Push protection** pode bloquear o `git push` ANTES do segredo entrar no repositório,
  se o padrão da chave for reconhecido.
- Depois que o segredo já está no histórico, **secret scanning** cria um alerta.
- Revogação automática pelo GitHub existe pra **PATs do próprio GitHub** e pra
  **parceiros cadastrados** que implementam o protocolo de notificação — **não é garantida
  pra qualquer chave de qualquer provedor**. Trate a rotação manual (passo 1 acima) como
  obrigatória sempre, nunca como plano B.

## Antes de todo deploy

- [ ] A chave está configurada como variável de ambiente **no host** (Render → aba
      Environment), nunca dentro do código nem dentro de um arquivo commitado
- [ ] `MODELO_PRINCIPAL` e `MODELO_EVALS` também estão configurados lá (evita hardcode)
- [ ] Rodei `npm run checar-chave` localmente com a MESMA chave que vai pro host, antes
      de subir — mais barato descobrir um erro de digitação aqui do que num build que falha

## Vocabulário retomado (Semana 4, `_GANCHOS.md`)

Uma chave vazada é a mesma família de risco que **supply chain de MCP de terceiros**: uma
credencial que sai do seu controle e vira superfície de ataque de outra pessoa. Trio
completo: prompt injection, improper output handling, supply chain — agora com "vazamento
de segredo" como o quarto item que esta semana instala.
