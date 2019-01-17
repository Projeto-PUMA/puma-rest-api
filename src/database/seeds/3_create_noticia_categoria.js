
exports.seed = knex => (
  // Deletes ALL existing entries
  knex('noticia_categoria').del()
    .then(() => (knex('noticia_categoria').insert([
      { id: 1, categoria: 'Melhores Projetos' },
      { id: 2, categoria: 'Destaque' },
      { id: 3, categoria: 'Normal' },
    ])))
);
