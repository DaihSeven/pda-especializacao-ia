// Runner em lote. Uso:
//   npm run evals                 -> roda evals/casos.json (o seu, com TODOs preenchidos)
//   node evals/runner.js --exemplo -> roda evals/casos.exemplo.json (o worked example)
//
// Sai com código 1 se qualquer caso falhar — dá pra plugar num CI ou num passo de deploy
// (retomando "o verificador existe para o agente, não para você", Semana 8).
import { readFileSync } from "node:fs";
import { avaliarCaso } from "./minha-integracao.js";

const usaExemplo = process.argv.includes("--exemplo");
const arquivo = new URL(usaExemplo ? "./casos.exemplo.json" : "./casos.json", import.meta.url);
const casos = JSON.parse(readFileSync(arquivo, "utf8"));

if (!process.env.ANTHROPIC_API_KEY) {
  console.error("ANTHROPIC_API_KEY não definida. Rode `npm run checar-chave` primeiro.");
  process.exit(1);
}

console.log(`Rodando ${casos.length} caso(s) de ${usaExemplo ? "casos.exemplo.json" : "casos.json"}...\n`);

let falhas = 0;
const inicio = Date.now();

for (const caso of casos) {
  process.stdout.write(`  ${caso.id.padEnd(35)} `);
  try {
    const { passou, detalhe } = await avaliarCaso(caso);
    console.log(passou ? "PASSOU" : "FALHOU", "—", detalhe ?? "");
    if (!passou) falhas++;
  } catch (erro) {
    console.log("ERRO   —", erro.message);
    falhas++;
  }
}

const duracaoS = ((Date.now() - inicio) / 1000).toFixed(1);
console.log(`\n${casos.length - falhas}/${casos.length} passaram em ${duracaoS}s.`);

if (falhas > 0) {
  console.log("Lembrete: eval falhando não é obrigatoriamente ruim — pode ser um caso");
  console.log("documentando um limite conhecido. O problema é falha SEM registro.");
  process.exit(1);
}
