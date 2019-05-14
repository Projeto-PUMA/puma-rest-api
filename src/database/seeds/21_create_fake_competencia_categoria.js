exports.seed = knex =>
  knex('competencia_categoria')
    .del()
    .then(() =>
      knex('competencia_categoria').insert([
        {
          categoria: 'TÉCNICA'
        },
        {
          categoria: 'TRANSVERSAL'
        }
      ])
    );
