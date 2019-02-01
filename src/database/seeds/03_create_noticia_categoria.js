
exports.seed = knex => (
  // Deletes ALL existing entries
  knex('noticia_categoria').del()
    .then(() => (knex('noticia_categoria').insert([
      { categoria: 'Melhores Projetos' },
      { categoria: 'Destaque' },
      { categoria: 'Normal' },
    ])))
);
