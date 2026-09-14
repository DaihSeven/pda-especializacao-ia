# Formato de arquivo .excalidraw

Casca do arquivo:

```json
{ "type": "excalidraw", "version": 2, "source": "pda",
  "elements": [ ... ],
  "appState": { "viewBackgroundColor": "#ffffff", "gridSize": null },
  "files": {} }
```

## Campos de um elemento

Obrigatórios em todos: `type`, `id` (string única), `x`, `y`, `width`, `height`.
Padrões que você pode omitir: `strokeColor:"#1e1e1e"`, `backgroundColor:"transparent"`,
`fillStyle:"solid"`, `strokeWidth:2`, `roughness:1`, `opacity:100`.

Tipos:

- `rectangle` — use `roundness:{"type":3}` para canto arredondado.
- `ellipse`, `diamond`.
- **Forma com rótulo (PREFERIDO):** adicione `"label":{"text":"Texto","fontSize":20}` em
  rectangle/ellipse/diamond. O texto centraliza sozinho. Economiza elemento e token.
- `text` (só para títulos e anotações soltas): `x` é a borda ESQUERDA.
  Para centralizar em `cx`: `x = cx - (len(text) * fontSize * 0.5) / 2`.
- `arrow`: `{"type":"arrow","id":"a1","x":300,"y":150,"width":200,"height":0,
  "points":[[0,0],[200,0]],"endArrowhead":"arrow"}`. `points` são offsets de x,y.
  `endArrowhead`: `null` | `"arrow"` | `"bar"` | `"dot"` | `"triangle"`.
  Rótulo de seta: `"label":{"text":"depende de"}`.
  Binding: `"startBinding":{"elementId":"r1","fixedPoint":[1,0.5]}` —
  topo `[0.5,0]`, base `[0.5,1]`, esquerda `[0,0.5]`, direita `[1,0.5]`.
- `strokeStyle:"dashed"` para linha tracejada (bom para zona a preencher).

## Paleta — use consistentemente

Traço/destaque: azul `#4a9eed` · âmbar `#f59e0b` · verde `#22c55e` · vermelho `#ef4444` ·
roxo `#8b5cf6` · rosa `#ec4899` · ciano `#06b6d4`.

Preenchimento pastel: azul claro `#a5d8ff` (entrada/fonte) · verde claro `#b2f2bb`
(saída/pronto) · laranja claro `#ffd8a8` (externo/pendente) · roxo claro `#d0bfff`
(processamento/middleware) · vermelho claro `#ffc9c9` (erro) · amarelo claro `#fff3bf`
(nota/decisão) · turquesa claro `#c3fae8` (armazenamento/dados) · rosa claro `#eebefa`.

Zonas de fundo com `"opacity":30`: `#dbe4ff` (camada UI) · `#e5dbff` (camada lógica/agente)
· `#d3f9d8` (camada dados/tools).

## Regras de legibilidade

- `fontSize` mínimo 16 para corpo e rótulo; 20 para título; 14 só para anotação secundária.
  Nunca abaixo de 14.
- Forma com rótulo: mínimo 120x60. Deixe 20–30px de folga entre elementos.
- Nunca cinza claro em fundo branco. Mínimo `#757575`. Texto colorido em preenchimento
  claro: use a variante escura (`#15803d` e não `#22c55e`; `#2563eb` e não `#4a9eed`).
- **Sem emoji** — não renderiza na fonte do Excalidraw.
- Ordem do array = ordem de z. Emita progressivamente: zona de fundo → forma → rótulo →
  setas → próxima forma.
- Cheque sobreposição: rótulo de zona não pode ficar embaixo de caixa.

## Padrão para template de aula

Zonas a preencher ao vivo: rectangle com `strokeStyle:"dashed"`,
`backgroundColor:"transparent"`, e um `text` dentro em `#757575` dizendo o que entra ali
(ex.: "BOUNDED CONTEXT 1 — preencher no min 25"). Legenda no canto: caixa amarela clara
explicando a convenção de cores do board.

Valide antes de terminar:
`python3 -c "import json,sys;json.load(open(sys.argv[1]))" caminho/arquivo.excalidraw`
