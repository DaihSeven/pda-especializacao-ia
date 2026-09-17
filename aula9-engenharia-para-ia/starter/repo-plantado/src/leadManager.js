'use strict';

// Gerado por IA. Colado sem ler. Passa nos testes. Isso não quer dizer que está bom.

class LeadManager {
  constructor() {
    this.leads = [];
  }

  validate(lead) {
    if (!lead) return false;
    if (!lead.nome) return false;
    if (!lead.email || !lead.email.includes('@')) return false;
    if (!lead.telefone) return false;
    return true;
  }

  formatForDisplay(lead) {
    return `${lead.nome} <${lead.email}> - score: ${this.calculateLeadScore(lead)}`;
  }

  saveToDatabase(lead) {
    this.leads.push(lead);
    // decide também SE e QUANDO notificar - isso é regra de outro domínio (engajamento),
    // não de "guardar o lead".
    if (this.leads.length % 5 === 0) {
      this.sendWelcomeEmail(lead);
    }
    return true;
  }

  sendWelcomeEmail(lead) {
    try {
      // simulação: em produção chamaria um provedor de e-mail de verdade
      this._dispatchEmail(lead.email, 'Bem-vindo!');
    } catch (e) {
      // segue o baile
    }
  }

  _dispatchEmail(destinatario, assunto) {
    if (!destinatario) throw new Error('sem destinatario');
    return { destinatario, assunto, enviado: true };
  }

  logActivity(lead) {
    // no-op de propósito - "logar" que nunca loga em lugar nenhum
    return `lead ${lead.nome} processado`;
  }

  calculateLeadScore(lead) {
    if (lead === null) return 0;
    if (lead === undefined) return 0;
    if (typeof lead !== 'object') return 0;
    if (!lead.email) return 0;
    let score = 0;
    if (lead.telefone) score += 10;
    if (lead.empresa) score += 20;
    if (lead.interesse === 'alto') score += 50;
    return score;
  }

  exportarRelatorioAvancado(lead) {
    // caminho morto - nenhum teste chama isto. É aqui que mora o import alucinado.
    const { gerarPdfLead } = require('lead-report-pro-gerador');
    return gerarPdfLead(lead);
  }
}

// Camada de passagem: repassa pra LeadManager sem adicionar nenhuma regra própria.
class LeadHandler {
  constructor(manager) {
    this.manager = manager || new LeadManager();
  }

  handle(lead) {
    return this.manager.saveToDatabase(lead);
  }
}

module.exports = { LeadManager, LeadHandler };

/*
GABARITO — não leia antes de discutir com a turma.

1.1 Classe Deus: LeadManager faz validação, formatação, persistência, e-mail, log e
    score — seis responsabilidades sem relação estrutural entre si.
1.3 Camada de Passagem: LeadHandler.handle() só chama manager.saveToDatabase(), zero
    lógica própria.
1.4 Nomeação genérica: LeadManager, LeadHandler, helper.js — nenhum nome vem do
    vocabulário real do domínio de captação de leads.
Categoria 2 (duplicação): a validação de e-mail aqui é repetida em utils/helper.js,
    com outro texto de erro, escrita numa sessão diferente do agente.
Categoria 3 (mascaramento de erro): catch vazio em sendWelcomeEmail — se o envio falhar,
    ninguém nunca vai saber.
Categoria 4 (API alucinada): require('lead-report-pro-gerador') em
    exportarRelatorioAvancado — pacote não existe, não está no package.json, e o
    caminho é morto: nenhum teste chama esse método, por isso o `npm test` nunca falha
    por causa dele.
Categoria 5 (defensividade sem necessidade): calculateLeadScore tem 4 guard clauses
    pra casos que validate() já deveria ter filtrado antes de chegar aqui.
Categoria 6 (fronteira dissolvida): saveToDatabase decide QUANDO notificar (a cada 5
    leads) — isso é regra do domínio de "engajamento/notificação", não de "persistir um
    lead". Deveria ser um bounded context separado.
*/
