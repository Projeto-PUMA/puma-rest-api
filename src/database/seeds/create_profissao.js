
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('profissao').del()
    .then(function () {
      // Inserts seed entries
      return knex('profissao').insert([
        { id: "0001", termo: 'Estudante' },
        { id: "AAA", termo: 'Empresario' },
        { id: "BBB", termo: 'Professor' }
      ]);
    });
};
