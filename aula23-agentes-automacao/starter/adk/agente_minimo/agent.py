"""
Mesma automação do n8n (classificar mensagem de cliente), agora em código.

Comparação direta com starter/n8n/workflow-classificador-leads.json:
- lá, a "tool" era o input_schema dentro do JSON do node HTTP Request.
- aqui, a tool é uma função Python de verdade — com type hints, docstring e
  a possibilidade de ter um teste unitário (ver ../agent_test.py).

Comando de instalação e hello-world confirmados na doc oficial em 2026-09-13
(REFERENCIAS.md itens 6, 7 e 8):
    pip install google-adk
    adk create agente_minimo      # gera esta estrutura de pastas
    adk run agente_minimo         # roda no terminal
    adk web                       # roda numa UI local (a partir da pasta pai)
"""

from google.adk.agents.llm_agent import Agent


def classificar_mensagem(mensagem: str, canal: str) -> dict:
    """Classifica a urgência e a categoria de uma mensagem de cliente.

    Args:
        mensagem: o texto recebido do cliente.
        canal: de onde a mensagem veio (whatsapp, formulario, email...).

    Returns:
        dict com urgencia (baixa/media/alta), categoria e uma resposta sugerida.
    """
    # Em produção, aqui entraria a MESMA regra de negócio do node 4 do workflow
    # n8n (starter/n8n/workflow-classificador-leads.json) — ou uma chamada a um
    # serviço que faça isso. Deixado como stub simples de propósito: o que
    # importa hoje é o contraste de FERRAMENTA, não reimplementar a lógica.
    return {
        "status": "success",
        "canal": canal,
        "urgencia": "media",
        "categoria": "duvida",
        "resposta_sugerida": f"Recebemos sua mensagem por {canal}. Já te respondemos.",
    }


root_agent = Agent(
    model="gemini-flash-latest",
    name="classificador_pda",
    description="Classifica mensagens de clientes por urgência e categoria.",
    instruction=(
        "Você é o classificador de mensagens de um pequeno negócio ou "
        "freelancer da PDA. Sempre que receber uma mensagem de cliente, chame "
        "a tool classificar_mensagem. Nunca invente dado que não está na "
        "mensagem recebida."
    ),
    tools=[classificar_mensagem],
)

# BUG PROPOSITAL DA DEMO DE HOJE (ver ROTEIRO-FACILITADORA.md, Bloco 4):
# se você trocar o model acima por "gemini-pro" achando que é "a versão mais
# forte", o agente quebra — esse nome de modelo não existe mais nos exemplos
# atuais da doc do ADK. É o MESMO tipo de bug do `cliente.js` da Semana 11
# (nome de modelo errado). Confira sempre contra REFERENCIAS.md, nunca de
# memória.
