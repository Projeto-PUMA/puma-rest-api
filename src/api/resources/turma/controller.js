import * as turmaDal from './dal';
import * as response from '../../../util/response/format';

export async function getAll(idDisciplina) {
  try {
    const turmas = await turmaDal.getAll(idDisciplina);
    return response.success(null, turmas);
  } catch (err) {
    if (err.message === 'NotFoundError') {
      return response.notFound();
    }
    return response.internalError(err.message);
  }
}

export async function create(body) {
  try {
    const turma = await turmaDal.create(body);
    return response.created(undefined, turma);
  } catch (err) {
    return response.badRequest(err.message);
  }
}

export async function findById(id) {
  try {
    const turma = await turmaDal.findById(id);
    return response.success(null, turma);
  } catch (err) {
    if (err.message === 'NotFoundError') {
      return response.notFound();
    }
    return response.internalError(err.message);
  }
}

export async function patch(id, body) {
  try {
    const turma = await turmaDal.patch(id, body);
    return response.success(null, turma);
  } catch (err) {
    if (err.message === 'NotFoundError') {
      return response.notFound();
    }
    return response.internalError(err.message);
  }
}

export async function deleteById(id) {
  try {
    const turma = await turmaDal.deleteById(id);
    return response.success(null, turma);
  } catch (err) {
    if (err.message === 'NotFoundError') {
      return response.notFound();
    }
    return response.internalError(err.message);
  }
}
