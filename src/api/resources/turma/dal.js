import Turma from './Turma';

export async function getAll(idDisciplina) {
  try {
    console.log('oxe');
    console.log(idDisciplina);
    const turmas = await Turma.query()
      .skipUndefined()
      .eager('[professor(selectId).usuario(selectNomeAndId)]', {
        selectNomeAndId: builder => {
          builder.select('nome', 'id');
        },
        selectId: builder => {
          builder.select('id');
        }
      })
      .joinRelation('[professor.disciplina]')
      .where('disciplina_id', idDisciplina)
      .orderBy('created_at', 'desc')
      .throwIfNotFound();
    return turmas;
  } catch (error) {
    throw error;
  }
}

export async function create(body) {
  try {
    const turma = await Turma.query()
      .insert(body)
      .returning('*');
    return turma;
  } catch (error) {
    throw error;
  }
}

export async function findById(id) {
  try {
    const turma = await Turma.query()
      .findById(id)
      .eager(
        `[professor(selectId).usuario(selectNomeAndId), 
          monitor.usuario(selectNomeMatriculaAndId), 
          equipe(selectNomeAndId).[projeto(selectTituloAndId), 
          aluno(selectId).usuario(selectNomeMatriculaAndId)]]`,
        {
          selectNomeAndId: builder => {
            builder.select('nome', 'id');
          },
          selectNomeMatriculaAndId: builder => {
            builder.select('nome', 'matricula', 'id');
          },
          selectTituloAndId: builder => {
            builder.select('titulo', 'id');
          },
          selectId: builder => {
            builder.select('id');
          }
        }
      )
      .throwIfNotFound();
    return turma;
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
    await Turma.query()
      .upsertGraph(body, options)
      .where('id', id)
      .returning('*');
    const turma = await this.findById(id);
    return turma;
  } catch (error) {
    throw error;
  }
}

export async function deleteById(id) {
  try {
    const turma = await Turma.query()
      .deleteById(id)
      .throwIfNotFound();
    return turma;
  } catch (error) {
    throw error;
  }
}
