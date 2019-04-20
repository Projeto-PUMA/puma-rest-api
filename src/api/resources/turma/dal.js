import Turma from './Turma';

export async function getAll(limit) {
  try {
    const turmas = await Turma.query()
      .skipUndefined()
      .orderBy('created_at', 'desc')
      .limit(limit)
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
      noDelete: true,
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
