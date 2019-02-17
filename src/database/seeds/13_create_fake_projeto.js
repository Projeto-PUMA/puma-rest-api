
exports.seed = knex => (
  knex('projeto').del()
    .then(() => (knex('projeto').insert([
      {
        titulo: 'Titulo do projeto 2',
        problematica: 'problematica do projeto 2',
        objetivo: 'objetivo do projeto 2',
        anexo: 'asdasdas.pdf',
        usuario_id: 1,
        psp_id: 21,
      },
      {
        titulo: 'Titulo do projeto 2',
        problematica: 'problematica do projeto 2',
        objetivo: 'objetivo do projeto 2',
        anexo: 'asdasd.pdf',
        usuario_id: 2,
        psp_id: 21,
      },
      {
        titulo: 'Titulo do projeto 3',
        problematica: 'problematica do projeto 3',
        objetivo: 'objetivo do projeto 3',
        anexo: 'asdasd.pdf',
        usuario_id: 2,
        psp_id: 21,
      },
    ])))
);
