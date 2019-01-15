
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('endereco_categoria').del()
    .then(() => knex('endereco_categoria').insert([
      { id: 1, categoria: 'Residencial' },
      { id: 2, categoria: 'Comercial' },
    ]));
};
