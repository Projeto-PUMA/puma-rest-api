exports.seed = knex => knex('professor')
  .del()
  .then(() => knex('professor').insert([
    {
      usuario_id: 4,
      disciplina_id: 1,
    },
  ]));
