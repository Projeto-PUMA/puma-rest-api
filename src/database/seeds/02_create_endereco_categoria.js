
exports.seed = knex => (
  // Deletes ALL existing entries
  knex('endereco_categoria').del()
    .then(() => (knex('endereco_categoria').insert([
      { categoria: 'Residencial' },
      { categoria: 'Comercial' },
    ])))
);
