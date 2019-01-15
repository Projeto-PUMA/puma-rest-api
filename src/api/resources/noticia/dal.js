import Noticia from './Noticia';

export async function getAll(req) {
  try {
    const { limit, idNoticiaCategoria } = req.query;
    console.log(req.query);
    const noticia = await Noticia
      .query()
      .skipUndefined()
      .eager('[usuario(selectNomeAndId)]', {
        selectNomeAndId: (builder) => {
          builder.select('nome', 'id');
        },
      })
      .where('noticia_categoria_id', '=', idNoticiaCategoria)
      .orderBy('created_at', 'desc')
      .limit(limit);

    if (noticia === undefined) {
      throw new Error('Not Found');
    }

    return noticia;
  } catch (error) {
    throw error;
  }
}

export async function create(body) {
  try {
    const noticia = Noticia.query().insert(body);
    return noticia;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function findById(id) {
  try {
    const noticia = await Noticia.query().findById(id);
    if (noticia === undefined) {
      throw new Error('Not Found');
    }
    return noticia;
  } catch (error) {
    throw error;
  }
}

export async function patch(id, body) {
  try {
    const options = {
      relate: true, noDelete: true,
    };
    const data = body;
    data.id = id;
    const noticia = await Noticia.query().upsertGraph(data, options).where('id', id);
    if (noticia === undefined) {
      throw new Error('Not Found');
    }
    return noticia;
  } catch (error) {
    throw error;
  }
}

export async function deleteById(id) {
  try {
    const noticia = await Noticia.query().deleteById(id);
    return noticia;
  } catch (error) {
    throw error;
  }
}
