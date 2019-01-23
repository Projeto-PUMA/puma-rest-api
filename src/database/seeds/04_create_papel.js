
exports.seed = knex => (
  // Deletes ALL existing entries
  knex('papel').del()
    .then(() => (knex('papel').insert([
      { id: 1, nome: 'ADMIN' },
      { id: 2, nome: 'COORDENADOR' },
      { id: 3, nome: 'PROFESSOR' },
      { id: 4, nome: 'ALUNO' },
      { id: 5, nome: 'MONITOR' },
      { id: 6, nome: 'SECRETARIA' },
      { id: 7, nome: 'USUARIO' },
    ])))
);
