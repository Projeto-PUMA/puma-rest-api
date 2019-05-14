import Professor from './Professor';

export async function getAll(idDisciplina) {
  try {
    const professores = await Professor.query()
      .skipUndefined()
      .eager('[usuario(selectNomeAndId), turma]', {
        selectNomeAndId: (builder) => {
          builder.select('nome', 'id');
        },
      })
      .where('disciplina_id', idDisciplina)
      .orderBy('created_at', 'desc')
      .throwIfNotFound();
    return professores;
  } catch (error) {
    throw error;
  }
}

export async function create(idDisciplina, body) {
  try {
    const data = { usuario_id: body.usuario_id, disciplina_id: idDisciplina };
    const professor = await Professor.query()
      .insert(data)
      .returning('*');
    return professor;
  } catch (error) {
    throw error;
  }
}

export async function findById(idDisciplina, idProfessor) {
  try {
    const professor = await Professor.query()
      .findById(idProfessor)
      .eager('[usuario(selectNomeAndId), turma]', {
        selectNomeAndId: (builder) => {
          builder.select('nome', 'id');
        },
      })
      .where('disciplina_id', idDisciplina)
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
      noDelete: true,
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
