# Rubrica — Demo Day (aula 28)

Pitch de **5 a 8 minutos** por aluno. Esta rubrica **não é nova** — é a evolução direta
da `RUBRICA-DEMO-RELAMPAGO.md` que vocês já usaram duas vezes, nas Semanas 11 e 12
(clínica + demo relâmpago). Os critérios são os mesmos princípios, ajustados pra um
pitch de projeto inteiro em vez de uma demo de 3 minutos de uma feature. Se você já
foi avaliado por essa rubrica antes, isto não deveria ser surpresa nenhuma.

Quem preenche: a facilitadora, monitores (se houver, ver `ROTEIRO-FACILITADORA.md`
para a logística com 75 pessoas) e, dependendo do formato de sessão, os colegas da
sua sala/grupo. Todo mundo que assiste um pitch ao vivo preenche esta tabela pra ele
— não é tempo de plateia passiva.

---

## A rubrica

| Critério | Peso | O que se avalia |
|---|---|---|
| **O problema do negócio está claro** | 20% | O pitch abre com o parágrafo para o dono do negócio (ou uma versão falada dele) — dá pra entender, em 30-45 segundos, quem sente a dor, o que ela custa hoje, e por que alguém pagaria por isso resolvido. Jargão técnico aqui derruba nota, não sobe. |
| **O artefato funciona ao vivo (ou o plano B é honesto)** | 25% | A demo roda numa URL real, não em slide estático. Travar não é zero automático **se** existe plano B declarado (vídeo curto do funcionamento) — mas usar o plano B sem nunca ter tentado ao vivo, sim, derruba a nota. Regra emprestada de quem estuda demo técnica pra viver: nunca depurar ao vivo na frente da plateia — se quebrar, corta pro vídeo em até 1 minuto e segue (ver `REFERENCIAS.md`, item sobre demos). |
| **O aluno explica o que o agente fez e o que ele decidiu** | 25% | Em algum momento dos 5-8 minutos, aparece **uma decisão que o aluno tomou e o agente não tomou sozinho** — o ponto de julgamento indispensável que todo lab do curso pedia pra nomear. "Eu pedi pro Claude e ele fez" sem mais nada é a nota mais baixa possível neste critério. |
| **Evidência de qualidade citada com números** | 15% | O aluno cita pelo menos um número real do próprio projeto: quantos evals passam, taxa de acerto de primeira tentativa, CI verde há quanto tempo, quantos cenários BDD cobrem a feature. "Funciona bem" sem número não pontua aqui — mesmo critério que já derrubava eval fraco nas Semanas 11 e 12. |
| **Clareza dentro do tempo** | 15% | Deu pra entender o projeto inteiro — o que faz, pra quem, onde a IA entra — dentro dos 5-8 minutos, sem estourar e sem sobrar 3 minutos de silêncio. Terminar em 5 minutos bem estruturado vale mais que 8 minutos enrolando. |

**Total: 100%.**

---

## O que não pontua

- UI bonita sem nenhum dos critérios acima.
- Ler slide em vez de mostrar o produto.
- "Ele decidiu tudo sozinho, eu só pedi" — isso não é orgulho de automação, é ausência
  do critério mais pesado da rubrica (25%).
- Dizer "os testes passam" sem dizer quantos, ou quais.

## O que pontua mais do que parece

- Admitir ao vivo "esse caso de eval falha e eu ainda não sei por quê" — é exatamente
  o julgamento que a Semana 8 (verificadores) já ensinou a valorizar: prova por
  evidência, não por narrativa perfeita.
- Explicar por que você rejeitou uma sugestão do agente em algum ponto do projeto —
  isso é o critério de 25% na sua forma mais direta.

## Faixas de nota (referência pra quem preenche)

| Faixa | O que significa |
|---|---|
| 90-100% | Todos os critérios fortes; a plateia sai sabendo pra quem o projeto serve e por que confiar nele |
| 70-89% | Funciona e o problema está claro, mas falta número ou falta nomear a decisão do aluno |
| 50-69% | Deu pra entender o que é, mas não deu pra confiar (sem número, sem decisão do aluno visível, ou não rodou e não tinha plano B) |
| Abaixo de 50% | Não ficou claro o que o projeto faz, ou a demo não existiu de nenhuma forma (nem ao vivo, nem em vídeo) |

**A nota do Demo Day não é a única nota da semana** — ela compõe o `ENTREGAVEL.md`
junto com o checklist final. Ver `ENTREGAVEL.md` para o peso exato.
