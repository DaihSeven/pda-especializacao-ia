// Gerado por IA. Colado sem ler. Tem bug.
// (convenção do curso desde a Semana 1 — ver _AULA1-REFERENCIA.md)
//
// Este arquivo junta as quatro peças da Semana 11: streaming, system prompt, tool
// calling e structured output. Doc oficial de cada uma em REFERENCIAS.md (itens 1, 3, 4, 2).
import "dotenv-lite"; // não existe — removido no Lab 1, é resquício de outro projeto que a IA colou junto (ver GUIA-DO-ALUNO.md)
import Anthropic from "@anthropic-ai/sdk";
import { readFileSync } from "node:fs";
import { rodarLoop } from "./loop.js";
import { validarAvaliacao } from "./validar-avaliacao.js";

// BUG: este nome de modelo não existe na doc oficial (REFERENCIAS.md, item 6).
// "-latest" foi inventado — parece plausível, mas não é o que a Anthropic documenta hoje.
// Além disso, isto ignora o .env que você configurou (MODELO_PRINCIPAL). Os dois problemas
// têm a mesma causa: código colado sem checar contra a doc nem contra o que já existia.
const MODELO = "claude-sonnet-5-latest";

const client = new Anthropic(); // lê ANTHROPIC_API_KEY do ambiente sozinho

const SYSTEM_PROMPT =
  "Você responde no tom da PDA: direto, sem jargão, sem floreio. Frase curta. " +
  "Quando não tiver certeza de um fato, diga que não tem certeza em vez de inventar.";

/**
 * DEMO 1 — streaming + system prompt.
 * Imprime o texto token a token conforme chega, sem esperar a resposta inteira.
 */
export async function perguntarComStreaming(pergunta) {
  const stream = client.messages
    .stream({
      model: MODELO,
      max_tokens: 512,
      system: SYSTEM_PROMPT,
      messages: [{ role: "user", content: pergunta }],
    })
    .on("text", (texto) => process.stdout.write(texto));

  const mensagemFinal = await stream.finalMessage();
  process.stdout.write("\n");
  return mensagemFinal;
}

/**
 * DEMO 2 — tool calling. Uma tool de exemplo (buscar_perfil) pro domínio 1 do catálogo
 * (Listagem de perfis de alunos da PDA). Troque a tool pela do seu domínio no Lab 1.
 */
const FERRAMENTAS = [
  {
    name: "buscar_perfil",
    description: "Busca um perfil de aluno da PDA por habilidade principal.",
    input_schema: {
      type: "object",
      properties: {
        habilidade: { type: "string", description: "ex: 'React', 'dados', 'automação'" },
      },
      required: ["habilidade"],
    },
  },
];

// Dado de exemplo — no projeto real isso vem do catálogo de perfis (domínio do aluno).
function executarFerramenta(nome, entrada) {
  if (nome === "buscar_perfil") {
    return { encontrados: [{ nome: "Exemplo da Silva", habilidade: entrada.habilidade, turma: 2 }] };
  }
  throw new Error(`ferramenta desconhecida: ${nome}`);
}

export async function chamarFerramenta(mensagemUsuario) {
  const mensagens = [{ role: "user", content: mensagemUsuario }];

  const primeira = await client.messages.create({
    model: MODELO,
    max_tokens: 512,
    system: SYSTEM_PROMPT,
    tools: FERRAMENTAS,
    messages: mensagens,
  });

  const usoDeTool = primeira.content.find((bloco) => bloco.type === "tool_use");
  if (!usoDeTool) return primeira; // o modelo decidiu não usar a tool — resposta direta

  const resultadoDaTool = executarFerramenta(usoDeTool.name, usoDeTool.input);

  mensagens.push({ role: "assistant", content: primeira.content });
  mensagens.push({
    role: "user",
    content: [{ type: "tool_result", tool_use_id: usoDeTool.id, content: JSON.stringify(resultadoDaTool) }],
  });

  return client.messages.create({
    model: MODELO,
    max_tokens: 512,
    system: SYSTEM_PROMPT,
    tools: FERRAMENTAS,
    messages: mensagens,
  });
}

/**
 * DEMO 3 — structured output + loop determinístico.
 * O modelo NÃO decide se a avaliação é válida — validarAvaliacao() decide, em código.
 * Se inválido, rodarLoop() tenta de novo (até MAX_TENTATIVAS_PADRAO vezes, ver loop.js).
 */
const SCHEMA_AVALIACAO = JSON.parse(readFileSync(new URL("./schema-avaliacao.json", import.meta.url)));

export async function avaliarComStructuredOutput(trechoDeCodigo, criterio) {
  return rodarLoop({
    chamarModelo: async () => {
      const resposta = await client.messages.create({
        model: MODELO,
        max_tokens: 512,
        system: SYSTEM_PROMPT,
        messages: [
          {
            role: "user",
            content: `Avalie este trecho contra o critério "${criterio}". Trecho:\n\n${trechoDeCodigo}`,
          },
        ],
        output_config: { format: { type: "json_schema", schema: SCHEMA_AVALIACAO } },
      });
      const blocoTexto = resposta.content.find((bloco) => bloco.type === "text");
      return JSON.parse(blocoTexto.text);
    },
    validar: validarAvaliacao,
  });
}
