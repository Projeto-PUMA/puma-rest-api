import Professor from './Professor';

export async function getAll() {
  try {
    const professores = await Professor.query()
      .skipUndefined()
      .eager('[usuario(selectNome), disciplina, turma]', {
        selectNome: builder => {
          builder.select('nome');
        }
      })
      .orderBy('created_at', 'desc')
      .throwIfNotFound();
    return professores;
  } catch (error) {
    throw error;
  }
}

export async function create(body) {
  try {
    const professor = await Professor.query()
      .insert(body)
      .returning('*');
    return professor;
  } catch (error) {
    throw error;
  }
}

export async function findById(id) {
  try {
    const professor = await Professor.query()
      .findById(id)
      .eager('[usuario(selectNomeAndId), disciplina]', {
        selectNomeAndId: builder => {
          builder.select('nome', 'id');
        }
      })
      .throwIfNotFound();
    return professor;
  } catch (error) {
    throw error;
  }
}

export async function patch(id, body) {
  try {
    const options = {
      relate: true,
      noDelete: true
    };
    const data = body;
    data.id = id;
    await Professor.query()
      .upsertGraph(body, options)
      .where('id', id)
      .returning('*');
    const professor = await this.findById(id);
    return professor;
  } catch (error) {
    throw error;
  }
}

export async function deleteById(id) {
  try {
    const professor = await Professor.query()
      .deleteById(id)
      .throwIfNotFound();
    return professor;
  } catch (error) {
    throw error;
  }
}
