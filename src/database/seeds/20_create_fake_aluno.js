exports.seed = knex =>
  knex('aluno')
    .del()
    .then(() =>
      knex('aluno').insert([
        {
          usuario_id: 5,
          equipe_id: 1
        },
        {
          usuario_id: 6,
          equipe_id: 1
        },
        {
          usuario_id: 7,
          equipe_id: 1
        },
        {
          usuario_id: 8,
          equipe_id: 1
        }
      ])
    );
