
exports.seed = knex => (
  knex('noticia').del()
    .then(() => (knex('noticia').insert(
      {
        titulo: 'Titulo da noticia',
        subtitulo: 'problematica da noticia',
        url_thumbnail: 'objetivo da noticia',
        noticia_categoria_id: 1,
        texto: 'Texto da noticia',
        usuario_id: 1,
      },
    )))
);
