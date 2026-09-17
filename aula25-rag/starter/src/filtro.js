// TODO(você): este é o ponto de julgamento que nenhum agente resolve por você.
//
// Indexar tudo que existe no seu repositório é a forma mais comum de PIORAR o
// retrieval, não melhorar — mais chunks parecidos competindo por espaço no top-k, ADRs
// que descrevem uma decisão que você já revogou, rascunho pessoal que não representa a
// voz do produto, código-fonte que não é o tipo de pergunta que seu RAG existe pra
// responder. Decidir O QUE ENTRA é seu. Não tem "resposta certa" universal — tem a
// resposta certa PRA SEU domínio, e você precisa conseguir justificá-la em uma frase.
//
// Implemente `deveIndexar` pra excluir pelo menos: (a) arquivos de rascunho/pessoal,
// (b) qualquer coisa dentro de node_modules, .git, data/ ou outra pasta gerada, e (c)
// pelo menos UM tipo de conteúdo do SEU repo que você decidiu, por justificativa própria,
// que não pertence à base. Escreva a justificativa no comentário ao lado do `return`.
//
// O teste em tests/filtro.test.js falha enquanto esta função indexar tudo (o padrão
// abaixo). Ele não te diz a regra certa — só prova que você tem UMA regra.

export function deveIndexar(caminhoRelativo, conteudo) {
  // TODO: substitua esta linha. `return true` sempre é o comportamento "indexei tudo",
  // e é exatamente o que esta função não pode fazer depois que você editar.
  return true;
}
