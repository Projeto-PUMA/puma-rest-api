exports.seed = knex =>
  knex('equipe')
    .del()
    .then(() =>
      knex('equipe').insert([
        {
          nome: 'Equipe 1',
          turma_id: 1,
          projeto_id: 3
        }
      ])
    );
