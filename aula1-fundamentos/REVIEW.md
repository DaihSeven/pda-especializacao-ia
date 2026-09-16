# REVIEW — Aula 1

## Desafio 2 — validaCpf

### O que eu pedi

Corrija `src/validaCpf.js` para rejeitar CPFs com todos os dígitos iguais
(ex.: `111.111.111-11`) e strings com letras no meio.

Requisitos:

* `npm test` deve passar;
* não editar os arquivos em `tests/`.

### O que o agente fez

O agente primeiro analisou `src/validaCpf.js` e os testes relacionados e executou a suíte para identificar os problemas.

Foram identificados dois bugs:

* a utilização de `replace(/\D/g, '')` removia também letras antes da validação, permitindo que uma entrada como `529a982b247c25` se transformasse em uma sequência de 11 dígitos e fosse aceita;
* não havia uma validação explícita para CPFs com os 11 dígitos iguais, como `111.111.111-11`, que podem passar matematicamente pelo cálculo do dígito verificador.

A correção foi feita somente em `src/validaCpf.js`.

Foram adicionadas:

* validação do formato antes de remover caracteres;
* rejeição de sequências com todos os dígitos iguais;
* `parseInt(d, 10)` com radix explícito.

Após a alteração, os 7 testes de `validaCpf` passaram. Os 3 testes restantes naquele momento pertenciam a `fetchUsuario`, que ainda era o desafio seguinte.

### O que eu aceitei e por quê

Aceitei a alteração porque ela corrigiu exatamente os dois comportamentos cobertos pelos testes de `validaCpf`, preservou a lógica existente do cálculo do dígito verificador e não alterou os arquivos da pasta `tests/`.

Também revisei a explicação do agente sobre a validação do formato antes do `replace(/\D/g, '')` e confirmei que essa ordem é necessária para não perder a informação de que a entrada original continha caracteres inválidos.

Por fim, revisei o diff final antes de considerar a tarefa concluída.

### O que eu rejeitei ou mudei e por quê

Não houve alteração rejeitada nesta etapa.

Houve intervenção durante a revisão: antes de considerar a tarefa concluída, pedi ao agente que explicasse a ordem da validação, apresentasse um exemplo de entrada que seria aceita incorretamente sem essa mudança e confirmasse que nenhum arquivo em `tests/` havia sido alterado.

Depois também solicitei o diff final sem permitir novas alterações.

### Onde ele chutou / alucinou / fez mais do que pedi

Não identifiquei alucinação ou alteração fora do escopo nessa tarefa.

O agente identificou corretamente os dois problemas cobertos pelos testes e alterou apenas `src/validaCpf.js`.

Ele também não tentou corrigir `fetchUsuario` durante essa tarefa, mesmo com testes dessa parte ainda falhando.

### O que eu colocaria no CLAUDE.md para isso não acontecer de novo

As regras já adicionadas ao `CLAUDE.md` reforçam pontos importantes observados durante a tarefa:

* sempre executar `npm test` antes de considerar a tarefa concluída;
* não alterar arquivos em `tests/` sem solicitação explícita;
* analisar os arquivos relevantes antes de editar;
* fazer apenas alterações necessárias;
* revisar o diff e os resultados dos testes antes de finalizar.

Essas regras ajudam a manter o trabalho dentro do escopo e tornam o resultado mais fácil de revisar.

---

## Desafio 3 — fetchUsuario

### O que eu pedi

Quero resolver o Desafio 3 em `src/fetchUsuario.js`.

Antes de editar qualquer arquivo:

1. ler `src/fetchUsuario.js` e `tests/fetchUsuario.test.js`;
2. identificar exatamente por que os testes estão falhando;
3. explicar quais comportamentos os testes esperam;
4. propor uma abordagem para corrigir o problema.

Restrições:

* alterar somente `src/fetchUsuario.js`;
* não alterar nenhum arquivo dentro de `tests/`;
* preservar o comportamento que já está funcionando;
* não adicionar dependências sem necessidade;
* a validação do ID deve acontecer antes da chamada à API;
* o tratamento da resposta deve funcionar para HTTP 404;
* a função não deve quebrar quando a API retornar campos ausentes;
* ao final, `npm test` deve passar.

Não fazer alterações ainda; primeiro analisar e propor a solução.

### O que o agente fez

O agente primeiro executou os testes para confirmar o estado atual e analisou `src/fetchUsuario.js` e `tests/fetchUsuario.test.js`.

Foram identificados três problemas:

1. o ID não era validado antes da chamada à API;
2. respostas HTTP não-OK, como 404, não eram tratadas antes de acessar os dados da resposta;
3. `dados.nome.trim()` e `dados.email.toLowerCase()` podiam gerar `TypeError` quando esses campos estavam ausentes.

O agente propôs:

* validar o ID como inteiro positivo antes da chamada;
* verificar `resposta.ok` e gerar um erro contendo o status HTTP;
* tratar campos ausentes com optional chaining e nullish coalescing.

Depois da minha aprovação da abordagem, o agente alterou somente `src/fetchUsuario.js` e executou os testes.

A implementação final ficou com:

* validação de `id`;
* tratamento de respostas HTTP não-OK;
* tratamento seguro de `nome` e `email` ausentes.

### Número de voltas do loop

Foi realizado um ciclo de implementação e teste após a etapa inicial de análise:

`Read → Read dos testes → Bash(npm test) → análise → Edit → Bash(npm test)`

O teste final confirmou que a implementação atendia à suíte.

### Tools utilizadas

* `Read`
* `Edit`
* `Bash`

### O que eu aceitei e por quê

Aceitei a implementação porque ela resolveu os três problemas identificados nos testes, preservou o comportamento do caso 200 e manteve a alteração restrita a `src/fetchUsuario.js`.

Também solicitei uma leitura final do arquivo e do diff antes de considerar a tarefa concluída.

### O que eu rejeitei ou mudei e por quê

Não houve alteração rejeitada nesta etapa.

Durante a revisão, pedi ao agente que confirmasse especificamente:

* onde o ID era validado;
* onde a resposta HTTP era verificada;
* como campos ausentes eram tratados;
* se existiam propriedades duplicadas no objeto retornado.

O agente confirmou esses pontos sem realizar novas alterações.

### Onde ele chutou / alucinou / fez mais do que pedi

Não identifiquei alucinação ou alteração fora do escopo.

O agente manteve a alteração somente em `src/fetchUsuario.js`, não modificou os testes e não adicionou dependências.

### O que eu colocaria no CLAUDE.md para isso não acontecer de novo

As regras já estabelecidas no `CLAUDE.md` foram adequadas para essa tarefa, especialmente:

* analisar antes de editar;
* trabalhar com uma tarefa por vez;
* não alterar `tests/` sem autorização;
* executar `npm test` antes de finalizar;
* revisar o diff e os resultados dos testes;
* informar qualquer alteração fora do escopo.

---

## Resultado final

Depois da correção do `fetchUsuario.js`, a suíte completa foi executada novamente:

* `fetchUsuario`: 4/4 testes passando;
* `formataPreco`: 2/2 testes passando;
* `validaCpf`: 7/7 testes passando.

**Total: 13 testes passando e 0 falhando.**
