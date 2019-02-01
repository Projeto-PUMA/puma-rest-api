
exports.seed = knex => (
  // Deletes ALL existing entries
  knex('recurso').del()
    .then(() => (knex('recurso').insert([
      { nome: 'usuario' },
      { nome: 'projeto' },
      { nome: 'noticia' },
    ])))
);
