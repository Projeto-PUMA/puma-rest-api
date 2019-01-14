
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('endereco_categoria').del()
    .then(function () {
      // Inserts seed entries
      return knex('endereco_categoria').insert([
        { id: 1, categoria: 'Residencial' },
        { id: 2, categoria: 'Comercial' },
      ]);
    });
};
