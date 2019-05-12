exports.seed = knex =>
  knex('disciplina')
    .del()
    .then(() =>
      knex('disciplina').insert([
        {
          nome: 'Qualidade de Projeto - 2019/1',
          codigo_mw: '1234568',
          psp_id: 5
        }
      ])
    );
