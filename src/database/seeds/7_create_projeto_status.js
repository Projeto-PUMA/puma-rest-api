
exports.seed = knex => (
  // Deletes ALL existing entries
  knex('projeto_status').del()
    .then(() => (knex('projeto_status').insert([
      { id: 1, status: 'Em análise' },
      { id: 2, status: 'Aceito' },
      { id: 3, status: 'Rejeitado' },
    ])))
);
