import * as disciplinaDal from './dal';
import * as response from '../../../util/response/format';

export async function getAll(req) {
  try {
    const disciplinas = await disciplinaDal.getAll(req);
    return response.success(null, disciplinas);
  } catch (err) {
    if (err.message === 'NotFoundError') {
      return response.notFound();
    }
    return response.internalError(err.message);
  }
}

export async function create(body) {
  try {
    const disciplina = await disciplinaDal.create(body);
    return response.created(undefined, disciplina);
  } catch (err) {
    return response.badRequest(err.message);
  }
}

export async function findById(id) {
  try {
    const disciplina = await disciplinaDal.findById(id);
    return response.success(null, disciplina);
  } catch (err) {
    if (err.message === 'NotFoundError') {
      return response.notFound();
    }
    return response.internalError(err.message);
  }
}

export async function patch(id, body) {
  try {
    const disciplina = await disciplinaDal.patch(id, body);
    return response.success(null, disciplina);
  } catch (err) {
    if (err.message === 'NotFoundError') {
      return response.notFound();
    }
    return response.internalError(err.message);
  }
}

export async function deleteById(id) {
  try {
    const disciplina = await disciplinaDal.deleteById(id);
    return response.success(null, disciplina);
  } catch (err) {
    if (err.message === 'NotFoundError') {
      return response.notFound();
    }
    return response.internalError(err.message);
  }
}
