
O que você quer esclarecer?

✻ Crunched for 51s · done 11:07

❯ /revisar-codigo src/validaCpf.js

  Ran 1 shell command

I already have the full file and its test spec read. Confirmed test results: validaCpf fails 2/7 (repeated-digit CPFs and letters-in-middle). Here's the review.

Revisão: src/validaCpf.js

🔴 Bugs (comportamento errado)

- L9-10: cpf.replace(/\D/g, '') remove qualquer caractere não-numérico, inclusive letras — então "529a982b247c25" vira "52998224725" (11 dígitos válidos) e passa. → validaCpf deveria rejeitar entrada com letras, não só limpar pontuação. → reproduz com validaCpf('529a982b247c25'), retorna true, teste espera false (tests/validaCpf.test.js:37-39).
- L6-27: Não há checagem de dígitos repetidos (111.111.111-11, 000.000.000-00, 99999999999 etc). O cálculo do DV aceita esses valores porque matematicamente batem, mas são CPFs inválidos por definição — é o bug clássico de CPF gerado por IA (mencionado até no próprio comentário do exemplos/vibe-coding.js:53-56). → reproduz com validaCpf('111.111.111-11'), retorna true, teste espera false (tests/validaCpf.test.js:31-35).

🟡 Riscos (funciona hoje, quebra amanhã)

- L26: dv1 == nums[9] && dv2 == nums[10] usa == em vez de ===. Hoje ambos os lados já são number (por causa do parseInt na L12), então não muda o resultado — mas é o tipo de comparação frouxa que engana o próximo leitor sobre se coerção de tipo é intencional aqui.
- L12: parseInt(d) sem radix. Com d sendo sempre um único dígito de \d, não há caso real que quebre — mas é hábito arriscado; qualquer refator que mude a origem da string (ex.: aceitar "0x...") reintroduz um bug silencioso.

🔵 Estilo / clareza

- L14-21: calcDigito reimplementa a mesma lógica duas vezes via slice, o que é bom (evita duplicação de código), mas o nome base no parâmetro não deixa óbvio que é "os dígitos já coletados até aqui". Um nome como digitosBase ajudaria.

❓ Perguntas que o autor deveria ter feito antes de aceitar

- "CPFs com todos os dígitos iguais passam matematicamente no cálculo do DV — a Receita Federal considera isso válido?" (não considera; é regra conhecida e documentada.)
- "Essa função deveria validar apenas o formato/dígito verificador, ou também garantir que a entrada não tinha lixo (letras) antes da limpeza?"

Veredito

REPROVAR — 2 dos 7 testes falham por não tratar os dois casos canônicos de "CPF matematicamente válido mas de fato inválido" (dígitos repetidos e letras misturadas), que são exatamente os bugs mais comuns em validador de CPF gerado por IA.

