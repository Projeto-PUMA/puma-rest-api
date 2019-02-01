
exports.seed = knex => (
  // Deletes ALL existing entries
  knex('projeto_status').del()
    .then(() => (knex('projeto_status').insert([
      { status: 'Em análise' },
      { status: 'Aceito' },
      { status: 'Rejeitado' },
    ])))
);
