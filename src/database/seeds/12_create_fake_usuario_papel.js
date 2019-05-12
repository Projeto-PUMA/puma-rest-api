exports.seed = knex =>
  knex('usuario_papel')
    .del()
    .then(() =>
      knex('usuario_papel').insert([
        {
          usuario_id: 1,
          papel_id: 1
        },
        {
          usuario_id: 2,
          papel_id: 7
        },
        {
          usuario_id: 3,
          papel_id: 2
        },
        {
          usuario_id: 4,
          papel_id: 3
        },
        {
          usuario_id: 5,
          papel_id: 4
        },
        {
          usuario_id: 6,
          papel_id: 4
        },
        {
          usuario_id: 7,
          papel_id: 4
        },
        {
          usuario_id: 8,
          papel_id: 4
        }
      ])
    );
