exports.seed = knex => knex('turma_status')
  .del()
  .then(() => knex('turma_status').insert([
    {
      status: 'ATIVA',
    },
    {
      status: 'ARQUIVADA',
    },
  ]));
