import Disciplina from './Disciplina';

export async function getAll() {
  try {
    const disciplinas = await Disciplina.query()
      .eager('[professor.usuario(selectNomeAndId), psp(selectNomeAndId)]', {
        selectNomeAndId: (builder) => {
          builder.select('nome', 'id');
        },
      })
      .throwIfNotFound();
    return disciplinas;
  } catch (error) {
    throw error;
  }
}

export async function create(body) {
  try {
    const disciplina = await Disciplina.query()
      .insert(body)
      .returning('*');
    return disciplina;
  } catch (error) {
    throw error;
  }
}

export async function findById(id) {
  try {
    const disciplina = await Disciplina.query()
      .findById(id)
      .eager('[professor.usuario(selectNomeAndId), psp(selectNomeAndId)]', {
        selectNomeAndId: (builder) => {
          builder.select('nome', 'id');
        },
      })
      .throwIfNotFound();
    return disciplina;
  } catch (error) {
    throw error;
  }
}

export async function patch(id, body) {
  try {
    const options = {
      relate: true,
      noDelete: true,
    };
    const data = body;
    data.id = id;
    await Disciplina.query()
      .upsertGraph(body, options)
      .where('id', id)
      .returning('*');
    const disciplina = await this.findById(id);
    return disciplina;
  } catch (error) {
    throw error;
  }
}

export async function deleteById(id) {
  try {
    const disciplina = await Disciplina.query()
      .deleteById(id)
      .throwIfNotFound();
    return disciplina;
  } catch (error) {
    throw error;
  }
}
