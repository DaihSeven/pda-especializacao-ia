'use strict';

// Fixture simples no lugar de um banco de dados de verdade — o projeto real
// do curso teria isso vindo de um arquivo JSON ou de uma API (semana 13).
const perfis = [
  { id: 1, nome: 'Ana Souza', email: 'ana.souza@example.com', habilidades: ['React', 'Node'], formado: true },
  { id: 2, nome: 'Bruno Lima', email: 'bruno.lima@example.com', habilidades: ['Python'], formado: true },
  { id: 3, nome: 'Carla Nunes', email: 'carla.nunes@example.com', habilidades: ['react', 'CSS'], formado: true },
  { id: 4, nome: 'Diego Alves', email: 'diego.alves@example.com', habilidades: ['Node', 'SQL'], formado: false },
];

function buscarPorHabilidade(listaDePerfis, habilidade) {
  const alvo = habilidade.trim().toLowerCase();
  return listaDePerfis
    .filter((perfil) => perfil.formado)
    .filter((perfil) => perfil.habilidades.some((h) => h.toLowerCase() === alvo))
    .map((perfil) => ({ id: perfil.id, nome: perfil.nome, habilidades: perfil.habilidades }));
}

module.exports = { perfis, buscarPorHabilidade };
