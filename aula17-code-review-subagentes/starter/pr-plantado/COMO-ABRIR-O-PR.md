# Como abrir o PR plantado

Este lab precisa de um repositório com **duas branches**: `main` limpa e
`feature/busca-por-habilidade` com os quatro defeitos plantados. Ele vem empacotado num
git bundle (um arquivo só) porque um repositório git dentro de outro repositório git não
sobrevive ao clone.

```bash
cd aula17-code-review-subagentes/starter
git clone pr-plantado.bundle pr-plantado-lab
cd pr-plantado-lab
git branch -a                    # main e feature/busca-por-habilidade
git checkout feature/busca-por-habilidade
npm test                         # 3 verdes, 1 falha. É de propósito.
```

O diff que você vai revisar é:

```bash
git diff main..feature/busca-por-habilidade
```

A pasta `pr-plantado/` que você está lendo agora tem os mesmos arquivos da branch `main`,
para consulta rápida — mas o lab roda no clone do bundle, porque é lá que as duas branches
existem.
