
exports.seed = knex => (
  // Deletes ALL existing entries
  knex('recurso').del()
    .then(() => (knex('recurso').insert([
      { id: 1, nome: 'usuario' },
      { id: 2, nome: 'projeto' },
      { id: 3, nome: 'noticia' },
    ])))
);
