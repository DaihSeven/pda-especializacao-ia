# Checklist de segredos — o que SOMA à Semana 11 nesta semana

Esta semana não substitui `aula21-software-com-llm-dentro/starter/CHECKLIST-SEGREDOS.md`
— ele continua valendo inteiro, item por item. Este arquivo é só o delta: o que muda por
você ter uma SEGUNDA chave, de um SEGUNDO provedor.

## O que é novo

- [ ] Você tem agora **duas** chaves em `.env`: `ANTHROPIC_API_KEY` (já existia) e
      `VOYAGE_API_KEY` (nova). São contas separadas, em painéis separados
      (platform.claude.com e dashboard.voyageai.com). Vazar uma não vaza a outra, mas o
      procedimento de resposta é **o mesmo pras duas**: revogue primeiro, gere de novo
      depois, só então limpe histórico se quiser.
- [ ] Rodei `git log -p | grep -i "pa-"` além do `grep -i "sk-ant"` da Semana 11 — o
      prefixo de chave da Voyage é diferente, e um grep que só procura por `sk-ant` não
      pega uma chave da Voyage vazada.
- [ ] `.env.example` deste starter mostra o formato das DUAS chaves, nenhuma real.

## O que é igual (não repita a leitura, já vale)

- Push protection e secret scanning do GitHub: mesmo comportamento, mesmas garantias e
  mesmas NÃO-garantias descritas na Semana 11.
- Revogação automática: continua **não garantida** pra chaves de provedor terceiro —
  Voyage incluída. Trate a rotação manual como obrigatória, do mesmo jeito.
