
exports.seed = knex => (
  // Deletes ALL existing entries
  knex('endereco_categoria').del()
    .then(() => (knex('endereco_categoria').insert([
      { id: 1, categoria: 'Residencial' },
      { id: 2, categoria: 'Comercial' },
    ])))
);
