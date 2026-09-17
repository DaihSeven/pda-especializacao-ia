# Evals — formato mínimo do curso

Um eval não é "rodei uma vez e funcionou". É um conjunto de casos que você escolhe
**porque espera que exponham uma falha real** do seu sistema — e prova, em lote, que ela
não acontece (ou documenta que acontece, e por quê ainda não foi resolvida).

## Formato de um caso (`casos.json`)

```json
{
  "id": "string curta, sem espaço",
  "entrada": "o prompt/input exato que você manda pro seu app",
  "criterio_aprovacao": "frase em português: o que precisa ser verdade pra passar",
  "tipo": "code | llm",
  "esperado": { "...": "depende do tipo — ver abaixo" }
}
```

- **`tipo: "code"`** — a nota vem de checagem de código (comparação exata, regex, campo
  obrigatório presente, regra numérica). Mais rápido, mais confiável, use sempre que der
  (ver REFERENCIAS.md item 7 — ordem de preferência: código > LLM > humano).
- **`tipo: "llm"`** — quando o critério é sobre *qualidade* de texto livre (tom, clareza),
  não dá pra checar por código sozinho. Peça pro próprio modelo (com um prompt de nota
  separado, nunca o mesmo prompt do app) dar uma nota 1–5 contra um critério explícito.

## Os 5 casos mínimos

Você precisa de **pelo menos 5**, e eles não podem ser 5 variações do mesmo caminho feliz.
Cubra, no mínimo:

1. Um caso de **caminho feliz** (o uso mais comum, tem que passar sempre).
2. Um caso de **entrada ambígua ou incompleta** (o que o app faz quando falta informação).
3. Um caso desenhado **pra tentar quebrar a validação de negócio** (não o formato — o
   sentido: ex. números que não batem, uma combinação que o schema permite mas a regra
   de domínio proíbe).
4. Um caso de **entrada hostil ou fora do domínio** (alguém pedindo algo que a tool não
   deveria fazer — retomando o vocabulário de prompt injection da Semana 4).
5. Um quinto caso **seu** — o que você, olhando pro SEU domínio, mais desconfia que quebra.

Rode `npm run evals` — o `runner.js` chama o app pra cada caso, aplica o critério e
imprime uma tabela com pass/fail. Saída diferente de zero se algo falhou (então dá pra
usar como gate de deploy, se quiser ir além).

Veja `casos.exemplo.json` — um exemplo preenchido pro domínio 1 (Listagem de perfis),
pra você ver a régua antes de escrever o seu.
