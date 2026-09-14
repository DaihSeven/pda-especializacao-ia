# Demo 3 — pacote que não existe (slopsquatting)

**Contexto pra dar à turma antes de rodar:** pesquisa recente (arXiv 2406.10279,
"We Have a Package for You!") testou 16 LLMs gerando código em 576 mil
amostras e encontrou 205.474 nomes de pacote **alucinados** — inventados,
que não existem em nenhum registro. Em modelos comerciais a taxa foi de pelo
menos 5,2%; em modelos open-source, 21,7% em média. Quando os autores
reexecutaram os mesmos 576 prompts que já tinham alucinado um pacote, **43%**
dos nomes alucinados se repetiram nas 10 rodadas seguintes — o que significa
que um nome inventado não é ruído aleatório, é um alvo estável o suficiente
pra alguém registrar de propósito e esperar vítima. Isso tem nome:
**slopsquatting** (o termo foi cunhado por Seth Larson, da Python Software
Foundation) — um typosquatting que não depende de erro de digitação humano,
depende de alucinação de modelo.

Fontes completas em `REFERENCIAS.md` (#1 e #2).

## Passo a passo da demo

1. Numa sessão limpa do Claude Code, sem nenhum MCP de documentação
   conectado, peça algo que empurra o modelo pra uma lib de nicho — quanto
   mais específico e menos comum o pedido, maior a chance de ele inventar um
   nome plausível. Exemplo que costuma funcionar: **"eu preciso validar CPF
   em TypeScript com uma biblioteca pronta, me sugere o pacote npm e o
   comando de instalação"**.
2. Se ele sugerir um nome real (ex.: `cpf-cnpj-validator`, que existe), peça
   de novo trocando o enquadramento: "prefiro algo mais específico pra
   formulários do governo, teria uma lib assim?" — insista até aparecer um
   nome que **você não reconhece**.
3. Rode exatamente o comando que ele sugeriu:
   ```bash
   npm install <nome-sugerido>
   ```
4. **Dois desfechos possíveis, ambos ensinam:**
   - **O pacote não existe.** O npm responde com `404 Not Found` — algo como:
     ```
     npm error code E404
     npm error 404 Not Found - GET https://registry.npmjs.org/<nome-sugerido> - Not found
     npm error 404 '<nome-sugerido>@latest' is not in this registry.
     ```
     Esse erro **é** o dependency check funcionando — `npm install`/`npm ci`
     falhando é o piso mínimo que qualquer slopsquatting real de nome
     totalmente novo já pega, porque o pacote falso simplesmente não existe
     ainda no registro (a menos que alguém já o tenha registrado de
     propósito — o próprio ataque descrito na pesquisa).
   - **O pacote existe, mas não é o que o agente pensa que é.** Esse é o caso
     mais perigoso: alguém já registrou aquele nome exato (de boa-fé ou como
     ataque) e `npm install` **não falha** — instala algo, só que não é o
     que o agente "achava" que estava instalando. Nenhum verificador
     automático pega isso sozinho; é por isso que a régua da semana inclui
     **ler a página do pacote no npm antes de instalar** (quantos downloads
     semanais, quando foi publicado a última vez, quem mantém) sempre que o
     nome vier de sugestão do agente e não de você já conhecer a lib.
5. Feche com a régua prática: "toda vez que o agente sugere um pacote que
   você não conhece, o mínimo é `npm view <pacote>` antes de instalar — se
   o pacote tem 3 downloads na semana e foi publicado ontem, isso é dado, não
   é opinião."
