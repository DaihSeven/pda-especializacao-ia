// ESPECIFICAÇÃO. NÃO EDITE ESTE ARQUIVO — regra transversal do curso desde a Semana 1.
// Se um teste falha, o problema está em src/loop.js, nunca aqui.
import { test } from "node:test";
import assert from "node:assert/strict";
import { rodarLoop } from "../src/loop.js";

function chamadaFixa(sequencia) {
  let i = 0;
  return async () => {
    const valor = sequencia[Math.min(i, sequencia.length - 1)];
    i++;
    if (valor instanceof Error) throw valor;
    return valor;
  };
}

test("sucesso de primeira: devolve ok:true e tentativas:1", async () => {
  const resultado = await rodarLoop({
    chamarModelo: chamadaFixa([{ nota: 8 }]),
    validar: (saida) => (saida.nota >= 0 && saida.nota <= 10 ? { ok: true } : { ok: false, motivo: "nota fora do intervalo" }),
  });
  assert.equal(resultado.ok, true);
  assert.equal(resultado.tentativas, 1);
  assert.deepEqual(resultado.resultado, { nota: 8 });
});

test("tenta de novo quando a validação recusa, e passa na segunda", async () => {
  const resultado = await rodarLoop({
    chamarModelo: chamadaFixa([{ nota: 99 }, { nota: 7 }]),
    validar: (saida) => (saida.nota >= 0 && saida.nota <= 10 ? { ok: true } : { ok: false, motivo: "nota fora do intervalo" }),
  });
  assert.equal(resultado.ok, true);
  assert.equal(resultado.tentativas, 2);
});

test("tenta de novo quando a chamada ao modelo lança erro", async () => {
  const resultado = await rodarLoop({
    chamarModelo: chamadaFixa([new Error("timeout"), { nota: 5 }]),
    validar: (saida) => ({ ok: saida.nota != null }),
  });
  assert.equal(resultado.ok, true);
  assert.equal(resultado.tentativas, 2);
});

test("desiste depois de maxTentativas e devolve ok:false com motivo, sem lançar exceção", async () => {
  const resultado = await rodarLoop({
    chamarModelo: chamadaFixa([{ nota: -1 }, { nota: -2 }, { nota: -3 }]),
    validar: () => ({ ok: false, motivo: "nota fora do intervalo" }),
    maxTentativas: 3,
  });
  assert.equal(resultado.ok, false);
  assert.equal(resultado.tentativas, 3);
  assert.match(resultado.motivo, /nota fora do intervalo/);
});

test("nunca chama o modelo mais que maxTentativas vezes, mesmo sempre inválido", async () => {
  let chamadas = 0;
  const contador = async () => {
    chamadas++;
    return { nota: -1 };
  };
  await rodarLoop({
    chamarModelo: contador,
    validar: () => ({ ok: false, motivo: "sempre inválido" }),
    maxTentativas: 2,
  });
  assert.equal(chamadas, 2);
});
