
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('papel').del()
    .then(() => knex('papel').insert([
      { id: 1, nome: 'ADMIN' },
      { id: 2, nome: 'COORDENADOR' },
      { id: 3, nome: 'PROFESSOR' },
      { id: 4, nome: 'MONITOR' },
      { id: 5, nome: 'USUARIO' },
    ]));
};
