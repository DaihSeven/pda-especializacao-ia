#!/usr/bin/env node
'use strict';

// Lint sem dependência nenhuma — este curso mantém `starter/` em zero
// dependências (convenção da Semana 1 em diante). Isto NÃO substitui ESLint
// num projeto real; é um substituto propositalmente simples pra "camada 1:
// o que uma ferramenta pega" funcionar sem instalar nada.
//
// Regras: nada de `var`, nada de `==`/`!=` solto (fora de `===`/`!==`),
// nada de `console.log` esquecido em src/.

const fs = require('node:fs');
const path = require('node:path');

const SRC_DIR = path.join(__dirname, '..', 'src');
let achados = 0;

function varrer(dir) {
  for (const nome of fs.readdirSync(dir)) {
    const caminho = path.join(dir, nome);
    const stat = fs.statSync(caminho);
    if (stat.isDirectory()) {
      varrer(caminho);
      continue;
    }
    if (!nome.endsWith('.js')) continue;
    const linhas = fs.readFileSync(caminho, 'utf8').split('\n');
    linhas.forEach((linha, i) => {
      const numero = i + 1;
      const rel = path.relative(process.cwd(), caminho);
      if (/\bvar\s/.test(linha)) {
        console.log(`${rel}:${numero}  use const/let, não var`);
        achados++;
      }
      if (/[^=!<>]==[^=]|[^=!<>]!=[^=]/.test(linha)) {
        console.log(`${rel}:${numero}  use === / !== (igualdade estrita)`);
        achados++;
      }
      if (/console\.log\(/.test(linha)) {
        console.log(`${rel}:${numero}  console.log esquecido`);
        achados++;
      }
    });
  }
}

varrer(SRC_DIR);

if (achados > 0) {
  console.log(`\n${achados} achado(s). Corrija antes de commitar.`);
  process.exit(1);
}
console.log('lint-simples: nada encontrado.');
