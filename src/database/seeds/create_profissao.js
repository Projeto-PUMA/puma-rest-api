
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('profissao').del()
    .then(() => knex('profissao').insert([
      { id: '0001', termo: 'Estudante' },
      { id: 'AAA', termo: 'Empresario' },
      { id: 'BBB', termo: 'Professor' },
    ]));
};
