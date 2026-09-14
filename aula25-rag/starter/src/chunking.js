// Três estratégias de chunking do MESMO documento. É o material do slide de diagrama
// da aula 21 e do `compare-chunking.js` — cada uma existe pra você VER o efeito, não só
// ler sobre ele. Ver REFERENCIAS.md item 6 (chunking strategies) e item 1 (contextual
// retrieval) pro raciocínio por trás de cada escolha.

/**
 * ESTRATÉGIA 1 — fixo, ingênuo. Corta a cada N caracteres, sem olhar pra frase, parágrafo
 * ou palavra. Sem sobreposição. É o que qualquer tutorial de "RAG em 10 minutos" faz por
 * padrão — e é o que você vai indexar primeiro nesta aula, de propósito, pra bater de
 * frente com uma pergunta que ele responde errado.
 */
export function chunkFixo(texto, tamanho = 400) {
  const chunks = [];
  for (let i = 0; i < texto.length; i += tamanho) {
    chunks.push({ texto: texto.slice(i, i + tamanho), metadados: { estrategia: "fixo", inicio: i } });
  }
  return chunks;
}

/**
 * ESTRATÉGIA 2 — recursiva com sobreposição e fronteira semântica. Tenta cortar em
 * parágrafo (\n\n); se um "parágrafo" ainda for maior que `tamanho`, cai pra frase; se
 * uma frase ainda for maior, só aí cai pra corte bruto. Cada chunk carrega um pedaço do
 * fim do chunk anterior (a sobreposição) — é o que evita que uma referência ("essa
 * regra", "o valor acima") fique sem o antecedente dela.
 *
 * O mesmo mecanismo, com outro nome de classe, é o `RecursiveCharacterTextSplitter` do
 * LangChain (REFERENCIAS.md item 8) — reescrito aqui porque este curso não instala
 * LangChain no síncrono (ver PACOTE.md seção 1: a Alura é onde vocês praticam LangChain
 * de verdade; aqui vocês entendem o mecanismo por dentro).
 */
export function chunkRecursivoComOverlap(texto, tamanho = 400, sobreposicao = 60) {
  const separadores = ["\n\n", "\n", ". ", " "];

  function dividir(pedaco, nivelSeparador) {
    if (pedaco.length <= tamanho || nivelSeparador >= separadores.length) {
      return [pedaco];
    }
    const separador = separadores[nivelSeparador];
    const partes = pedaco.split(separador).filter((p) => p.length > 0);
    if (partes.length === 1) {
      return dividir(pedaco, nivelSeparador + 1);
    }
    // Reagrupa partes pequenas até chegar perto do tamanho-alvo, sem passar muito dele.
    const agrupado = [];
    let atual = "";
    for (const parte of partes) {
      const candidato = atual ? atual + separador + parte : parte;
      if (candidato.length > tamanho && atual) {
        agrupado.push(atual);
        atual = parte;
      } else {
        atual = candidato;
      }
    }
    if (atual) agrupado.push(atual);
    // Qualquer pedaço agrupado que ainda estourou o tamanho desce mais um nível.
    return agrupado.flatMap((p) => (p.length > tamanho ? dividir(p, nivelSeparador + 1) : [p]));
  }

  const brutos = dividir(texto.trim(), 0);
  const chunks = [];
  for (let i = 0; i < brutos.length; i++) {
    const anterior = i > 0 ? brutos[i - 1].slice(-sobreposicao) : "";
    const textoComOverlap = anterior ? `${anterior} ${brutos[i]}` : brutos[i];
    chunks.push({
      texto: textoComOverlap,
      metadados: { estrategia: "recursivo_overlap", indice: i, sobreposicao },
    });
  }
  return chunks;
}

/**
 * ESTRATÉGIA 3 — consciente de estrutura + metadados. Específica pra Markdown (o formato
 * dominante nos repositórios do curso: README, RESEARCH.md, ADRs, specs). Corta por
 * cabeçalho (`#`, `##`, `###`) e anexa o título da seção como METADADO em todo chunk
 * daquela seção — não como texto embutido. Isso é o que deixa "de onde veio esse chunk"
 * disponível pro passo de geração sem inflar o texto que vai pro embedding.
 */
export function chunkPorEstrutura(texto, tamanho = 500) {
  const linhas = texto.split("\n");
  const secoes = [];
  let tituloAtual = "(sem título)";
  let bufer = [];

  function fecharSecao() {
    if (bufer.length > 0) {
      secoes.push({ titulo: tituloAtual, corpo: bufer.join("\n").trim() });
      bufer = [];
    }
  }

  for (const linha of linhas) {
    const cabecalho = linha.match(/^(#{1,3})\s+(.*)/);
    if (cabecalho) {
      fecharSecao();
      tituloAtual = cabecalho[2].trim();
    } else {
      bufer.push(linha);
    }
  }
  fecharSecao();

  const chunks = [];
  for (const secao of secoes) {
    if (secao.corpo.length === 0) continue;
    // Reusa a divisão recursiva DENTRO da seção, se a seção for grande — estrutura e
    // tamanho não são estratégias concorrentes, são complementares.
    const subchunks =
      secao.corpo.length > tamanho ? chunkRecursivoComOverlap(secao.corpo, tamanho, 40) : [{ texto: secao.corpo }];
    for (const sub of subchunks) {
      chunks.push({
        texto: sub.texto,
        metadados: { estrategia: "por_estrutura", secao: secao.titulo },
      });
    }
  }
  return chunks;
}

export const ESTRATEGIAS = {
  fixo: chunkFixo,
  recursivo_overlap: chunkRecursivoComOverlap,
  por_estrutura: chunkPorEstrutura,
};
