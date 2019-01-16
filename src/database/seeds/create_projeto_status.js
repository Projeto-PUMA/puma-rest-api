
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('projeto_status').del()
    .then(() => knex('projeto_status').insert([
      { id: 1, status: 'Em análise' },
      { id: 2, status: 'Aceito' },
      { id: 3, status: 'Rejeitado' },
    ]));
};
