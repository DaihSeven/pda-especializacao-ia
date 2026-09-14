# Estado da produção — semanas 2 a 14

**Concluído.** As 13 semanas existem, completas, neste repositório.

| Semana | Pasta | Aula 2 | Slides aula 1 |
|---|---|---|---|
| 2 | `aula3-prompts-contexto-projeto` | lab guiado paralelo | 30 |
| 3 | `aula5-agents-md-skills` | lab guiado paralelo | 34 |
| 4 | `aula7-mcp-server` | red team em duplas | 30 |
| 5 | `aula9-engenharia-para-ia` | Excalidraw coletivo | 32 |
| 6 | `aula11-diagnostico-documentos-rpi` | Excalidraw coletivo | 34 |
| 7 | `aula13-spec-driven-development` | clínica rotativa | 34 |
| 8 | `aula15-verificadores` | clínica rotativa | 34 |
| 9 | `aula17-code-review-subagentes` | red team em duplas | 34 |
| 10 | `aula19-orquestracao-mcp-client` | speedrun cronometrado | 33 |
| 11 | `aula21-software-com-llm-dentro` | clínica + demo relâmpago | 38 |
| 12 | `aula23-agentes-automacao` | clínica + demo relâmpago | 34 |
| 13 | `aula25-rag` | lab guiado paralelo | 32 |
| 14 | `aula27-buffer-demo-day` | Demo Day | 24 |

A semana 14 fica abaixo da faixa de 26–34 de propósito: não tem conteúdo novo, é plantão
técnico e Demo Day.

Cada pasta tem `README.md`, `GUIA-DO-ALUNO.md`, `ENTREGAVEL.md`, `ROTEIRO-FACILITADORA.md`,
`SLIDES-OUTLINE.md`, `REFERENCIAS.md`, `PACOTE.md` e `starter/`. Semanas 5, 6 e 10 também
têm `excalidraw/` com o board pronto.

## Decisões fixadas

- **Módulos:** 1 AI-Assisted Developer (semana 2) · 2 AI Orchestrator / Contexto (3–8) ·
  3 AI Orchestrator / Agentes (9–12) · 4 Harness & Loop Engineer (13–14).
- **Fronteira de ferramenta:** semanas 1–10 usam Claude Code com conta Claude Pro, **sem API
  key**. Da semana 11 em diante há chave, custo real e bloco obrigatório de `.env` e aviso
  de custo.
- **Semana 12 usa Google ADK** ao lado do n8n, com o n8n levando mais tempo.
- **O MCP client saiu da semana 11 e foi para a semana 10**, onde é plumbing de protocolo
  sem LLM. A semana 11 pluga o modelo naquele loop.
- **O projeto do aluno vive em repositório próprio**, fora do fork do curso.
- Sem datas: prazo é sempre "antes da aula 1 da semana seguinte". Formulário único:
  https://forms.gle/PSd6i65g44GwBMgq6
- **Deck: 26 a 34 slides por aula 1, média 30.** Uma ideia por slide, no máximo 3 slides
  seguidos sem imagem/diagrama/GIF, nenhum slide menciona o material assíncrono pelo nome.

## Verificações feitas

- 141 referências únicas nas 13 semanas. Só duas aparecem em três semanas
  (`code.claude.com/docs/en/memory` e `.../best-practices`) — são a doc-casa do curso.
- Nenhum slide menciona Alura.
- Os 13 ENTREGAVEL.md têm o formulário único, o prazo relativo, as duas linhas de
  repositório e o parágrafo para o dono do negócio.
- Cada semana soma 120 min na aula 1 e 120 min na aula 2.

## Pendências para a Iasmim

1. **Spec Kit exige `uv` (Python)** na semana 7 — primeira saída do Node no curso. A
   alternativa era OpenSpec, que é npm. Decidir se vale o custo de ambiente.
2. **Formato do Demo Day com 75 alunos.** Três opções estão no
   `aula27-buffer-demo-day/ROTEIRO-FACILITADORA.md`, marcadas `[DECISÃO DA IASMIM]`. A
   recomendação é vídeo gravado para todos + palco ao vivo por sorteio representativo.
3. **Diagnóstico da semana 1** — a autoavaliação final da semana 14 precisa do formato
   original para a comparação funcionar.
4. Semana 2: "janela abaixo de 40%" está como observação empírica, sem fonte publicada.
5. Semana 8: branch protection não é gratuita em repo privado no plano Free do GitHub.
   Três saídas documentadas — escolher uma como padrão da turma.
6. Semana 12: preço do Gemini por token e schema de `eval_cases` do ADK ficaram
   `[CONFIRMAR]` — não foram inventados.
7. Alguns `PACOTE.md` citam números de slide antigos, anteriores à expansão dos decks.

## Próximo passo natural

Os decks existem como `SLIDES-OUTLINE.md` — conteúdo, gramática PDA, notas da
apresentadora com timestamp. Virar `.pptx` no template PDA é um passo separado, semana a
semana, com a skill `pda-aula`.
