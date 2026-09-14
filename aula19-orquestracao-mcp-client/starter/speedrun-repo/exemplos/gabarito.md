# Gabarito de referência — só para quem facilita

Verificado nesta sessão: com este código, `npm test` fecha 11/11 verde. Não distribua
antes do pós-morte — o objetivo é que cada dupla chegue à própria versão.

`src/validators.js` (funções acrescentadas, resto do arquivo igual ao starter):

```js
function validateCPF(cpf) {
  const digits = normalizeDigits(cpf);
  if (digits.length !== 11) return false;
  if (/^(\d)\1{10}$/.test(digits)) return false;
  return true;
}

function validatePhone(phone) {
  const digits = normalizeDigits(phone);
  return digits.length === 11;
}

module.exports = { normalizeDigits, validateEmail, validateCPF, validatePhone };
```

`src/formatters.js` (função acrescentada):

```js
function formatBRL(cents) {
  const value = (cents / 100).toFixed(2).replace(".", ",");
  return `R$ ${value}`;
}

module.exports = { formatDigitsOnly, formatBRL };
```

## O conflito é real, não decorativo

Testado nesta sessão com `git worktree`/branches reais: uma branch só com a tarefa A e
outra só com a tarefa C, ambas mexendo em `validators.js`, geram
`CONFLICT (content): Merge conflict in validators.js` ao dar merge da segunda na `main`
— porque as duas escrevem uma versão diferente da mesma linha (`module.exports`). A
tarefa B, em `formatters.js`, faz merge limpo com qualquer uma das outras duas.
