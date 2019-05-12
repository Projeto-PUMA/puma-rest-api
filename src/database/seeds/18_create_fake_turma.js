exports.seed = knex =>
  knex('turma')
    .del()
    .then(() =>
      knex('turma').insert([
        {
          nome: 'Turma A - Profa Simone',
          data_inicio: '08-03-2019',
          data_fim: '08-07-2019',
          turma_status_id: 1,
          professor_id: 1
        }
      ])
    );
