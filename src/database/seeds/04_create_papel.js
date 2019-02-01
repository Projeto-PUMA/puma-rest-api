
exports.seed = knex => (
  // Deletes ALL existing entries
  knex('papel').del()
    .then(() => (knex('papel').insert([
      { nome: 'ADMIN' },
      { nome: 'COORDENADOR' },
      { nome: 'PROFESSOR' },
      { nome: 'ALUNO' },
      { nome: 'MONITOR' },
      { nome: 'SECRETARIA' },
      { nome: 'USUARIO' },
    ])))
);
