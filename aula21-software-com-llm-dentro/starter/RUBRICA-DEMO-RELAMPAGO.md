# Rubrica — demo relâmpago (aula 22, últimos 30 min)

6 alunos, 3 min de demo cada, 2 min de crítica coletiva logo em seguida (6 × 5min = 30min).
Toda a plateia preenche esta rubrica pra cada apresentação — é a tarefa fixa dela
(mecânica de clínica retomada das Semanas 7 e 8, ver `_GANCHOS.md`).

## Como os 6 são escolhidos

Sorteio com prioridade de variedade (mesma mecânica inventada na Semana 3, reusada na 4):
sorteia entre quem sinalizou "pronto pra demo" durante os 85 min de clínica, priorizando
domínios diferentes do catálogo entre os 6 — não deixa dois "quiz conectado ao Claude"
seguidos se der pra evitar. Quem não sinalizou não é sorteado. Quem foi sorteado numa
semana anterior de demo relâmpago (Semana 12 reusa este formato) entra por último na
prioridade da próxima vez.

## O que os outros 69 fazem durante os 30 minutos

Não é tempo livre. Tarefa fixa dupla:
1. **Preencher esta rubrica pra cada um dos 6** — nota + 1 frase de justificativa por
   critério. Isso vira o material de crítica dos 2 minutos depois de cada demo.
2. **Quem não sinalizou pronto continua no próprio app** — a clínica dos 85 min anteriores
   não é a única janela de trabalho; se sua demo não ficou pronta a tempo, você segue
   construindo em silêncio enquanto avalia os colegas, e sua entrega vale pelo
   `ENTREGAVEL.md`, não pela demo relâmpago (a demo relâmpago não é a nota — é prática de
   apresentar sob restrição de tempo, habilidade que entra no posicionamento de mercado).

## A rubrica

| Critério | Peso | O que a plateia (e a facilitadora) olha |
|---|---|---|
| **Funciona ao vivo, sem erro fatal** | 30% | A demo roda na URL de produção (Render), não no `localhost`. Trava contando como pontos negativos só se não houver plano B (print/vídeo de 10s do funcionamento) |
| **Loop determinístico visível** | 25% | Em algum momento da explicação de 3 min, aparece **o código decidindo algo** sobre a saída do modelo (validação, retry, ou desistência) — não só "eu perguntei pro Claude e ele respondeu" |
| **Evals citados com números** | 20% | O apresentador diz quantos dos 5 casos passam hoje, e cita **pelo menos um que falha ou já falhou** — "todos passam sempre" sem detalhe é sinal de eval fraco (ver `evals/README.md`) |
| **Segredo tratado direito** | 15% | Chave nunca aparece na tela (nem no terminal, nem no código projetado); variável de ambiente configurada no host, não hardcoded |
| **Clareza em 3 minutos** | 10% | Deu pra entender o que o app faz, pra quem, e onde o modelo entra no loop — sem precisar de mais tempo |

**O que não pontua:** UI bonita sem nenhum dos itens acima. **O que pontua mais que UI:**
admitir ao vivo "esse caso de eval falha e eu ainda não sei por quê" — isso é exatamente
o julgamento que a Semana 8 já ensinou a valorizar (prova por evidência, não por narrativa).
