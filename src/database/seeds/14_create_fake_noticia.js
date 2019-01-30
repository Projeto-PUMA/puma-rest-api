
exports.seed = knex => (
  knex('noticia').del()
    .then(() => (knex('noticia').insert([
      {
        titulo: 'Titulo da noticia',
        subtitulo: 'subtitulo da noticia',
        url_thumbnail: 'https://i.imgur.com/vq40Qov.jpg',
        noticia_categoria_id: 1,
        texto: 'Texto da noticia',
        usuario_id: 1,
      },
      {
        titulo: 'Titulo da noticia',
        subtitulo: 'subtitulo da noticia',
        url_thumbnail: 'https://i.imgur.com/vq40Qov.jpg',
        noticia_categoria_id: 1,
        texto: 'Texto da noticia',
        usuario_id: 1,
      },
      {
        titulo: 'Titulo da noticia',
        subtitulo: 'subtitulo da noticia',
        url_thumbnail: 'https://i.imgur.com/vq40Qov.jpg',
        noticia_categoria_id: 2,
        texto: 'Texto da noticia',
        usuario_id: 1,
      },
      {
        titulo: 'Titulo da noticia',
        subtitulo: 'subtitulo da noticia',
        url_thumbnail: 'https://i.imgur.com/vq40Qov.jpg',
        noticia_categoria_id: 2,
        texto: 'Texto da noticia',
        usuario_id: 1,
      },
      {
        titulo: 'Titulo da noticia',
        subtitulo: 'subtitulo da noticia',
        url_thumbnail: 'https://i.imgur.com/vq40Qov.jpg',
        noticia_categoria_id: 3,
        texto: 'Texto da noticia',
        usuario_id: 1,
      },
      {
        titulo: 'Titulo da noticia',
        subtitulo: 'subtitulo da noticia',
        url_thumbnail: 'https://i.imgur.com/vq40Qov.jpg',
        noticia_categoria_id: 3,
        texto: 'Texto da noticia',
        usuario_id: 1,
      }])))
);
