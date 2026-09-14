// O "armazenamento de vetor" desta semana NÃO é um pacote de terceiro. É este arquivo.
//
// Por quê: avaliamos vectra (npm, MIT — REFERENCIAS.md item 9) e ele arrasta ~13
// dependências pra um caso de uso que cabe em 40 linhas — grpc, cliente HTTP da OpenAI,
// parser de HTML, tokenizer. Pra 75 pessoas no Windows, cada dependência a mais é um
// jeito a mais do `npm install` falhar numa máquina que ninguém testou. E tem um motivo
// pedagógico maior: "busca por similaridade" é o coração da semana — se ela mora dentro
// de um pacote fechado, você não abre o capô, você troca de capô. PACOTE.md seção 3 tem
// a comparação completa.
//
// O que isso significa na prática: seu "banco de vetores" é um arquivo JSON e uma
// função de similaridade de cosseno. Isso é exatamente o que Pinecone, Chroma ou
// qualquer vector DB de verdade fazem por baixo, numa escala em que arquivo-texto para
// de dar conta — REFERENCIAS.md item 7. Pra um projeto de curso com algumas centenas ou
// milhares de chunks, essa escala nunca chega.

import { readFile, writeFile, mkdir } from "node:fs/promises";
import { dirname } from "node:path";

export function similaridadeCosseno(a, b) {
  if (a.length !== b.length) {
    throw new Error(`Vetores de tamanhos diferentes: ${a.length} vs ${b.length}.`);
  }
  let produtoEscalar = 0;
  let normaA = 0;
  let normaB = 0;
  for (let i = 0; i < a.length; i++) {
    produtoEscalar += a[i] * b[i];
    normaA += a[i] * a[i];
    normaB += b[i] * b[i];
  }
  if (normaA === 0 || normaB === 0) return 0;
  return produtoEscalar / (Math.sqrt(normaA) * Math.sqrt(normaB));
}

export class LocalVectorStore {
  constructor(caminhoArquivo) {
    this.caminhoArquivo = caminhoArquivo;
    this.itens = []; // { id, texto, metadados, embedding }
  }

  adicionar(itens) {
    this.itens.push(...itens);
  }

  async salvar() {
    await mkdir(dirname(this.caminhoArquivo), { recursive: true });
    await writeFile(this.caminhoArquivo, JSON.stringify({ itens: this.itens }, null, 2));
  }

  async carregar() {
    const conteudo = await readFile(this.caminhoArquivo, "utf8");
    const dados = JSON.parse(conteudo);
    this.itens = dados.itens;
    return this;
  }

  /**
   * Busca os k itens mais similares ao vetor de consulta. Força bruta: compara com
   * TODOS os itens. Para o tamanho de corpus desta semana (dezenas a poucos milhares de
   * chunks) isso roda em milissegundos. Não otimize antes de medir — HNSW e índices
   * aproximados (o que Pinecone/Chroma usam por baixo) só compensam quando força bruta
   * já é o gargalo medido, não antes.
   */
  buscar(vetorConsulta, k = 4) {
    const pontuados = this.itens.map((item) => ({
      ...item,
      pontuacao: similaridadeCosseno(vetorConsulta, item.embedding),
    }));
    pontuados.sort((a, b) => b.pontuacao - a.pontuacao);
    return pontuados.slice(0, k);
  }

  get tamanho() {
    return this.itens.length;
  }
}
