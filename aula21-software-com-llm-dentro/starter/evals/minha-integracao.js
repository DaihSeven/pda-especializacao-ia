// TODO (Lab 2 / aula 22): implemente avaliarCaso() ligando cada `caso` ao SEU app.
// O runner.js chama esta função uma vez por caso em evals/casos.json.
//
// Contrato: recebe um `caso` (um objeto de casos.json) e devolve
//   { passou: boolean, detalhe: string }
// `detalhe` aparece na tabela do runner — escreva algo útil pra debugar quando falhar.
//
// Exemplo de como isso ficaria pro domínio 1 (perfis), usando casos.exemplo.json e as
// funções já prontas em src/cliente.js:
//
//   import { chamarFerramenta } from "../src/cliente.js";
//
//   export async function avaliarCaso(caso) {
//     const resposta = await chamarFerramenta(caso.entrada);
//     const texto = resposta.content.find((b) => b.type === "text")?.text ?? "";
//     if (caso.esperado.contem) {
//       const faltando = caso.esperado.contem.filter((termo) => !texto.includes(termo));
//       if (faltando.length > 0) return { passou: false, detalhe: `faltou: ${faltando.join(", ")}` };
//     }
//     return { passou: true, detalhe: texto.slice(0, 80) };
//   }
//
// Troque pelo seu domínio. Cada `tipo` de caso ("code" ou "llm") pode precisar de uma
// checagem diferente dentro desta mesma função — o `caso.tipo` está disponível.

export async function avaliarCaso(caso) {
  throw new Error(
    `TODO: avaliarCaso() não está implementado ainda (caso "${caso.id}"). Veja o exemplo comentado neste arquivo.`
  );
}
