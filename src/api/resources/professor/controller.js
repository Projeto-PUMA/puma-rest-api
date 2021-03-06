import * as professorDal from './dal';
import * as response from '../../../util/response/format';

export async function getAll(req) {
  try {
    const professores = await professorDal.getAll(req);
    return response.success(null, professores);
  } catch (err) {
    if (err.message === 'NotFoundError') {
      return response.notFound();
    }
    return response.internalError(err.message);
  }
}

export async function create(body) {
  try {
    const professor = await professorDal.create(body);
    return response.created(undefined, professor);
  } catch (err) {
    return response.badRequest(err.message);
  }
}

export async function findById(id) {
  try {
    const professor = await professorDal.findById(id);
    return response.success(null, professor);
  } catch (err) {
    if (err.message === 'NotFoundError') {
      return response.notFound();
    }
    return response.internalError(err.message);
  }
}

export async function patch(id, body) {
  try {
    const professor = await professorDal.patch(id, body);
    return response.success(null, professor);
  } catch (err) {
    if (err.message === 'NotFoundError') {
      return response.notFound();
    }
    return response.internalError(err.message);
  }
}

export async function deleteById(id) {
  try {
    const professor = await professorDal.deleteById(id);
    return response.success(null, professor);
  } catch (err) {
    if (err.message === 'NotFoundError') {
      return response.notFound();
    }
    return response.internalError(err.message);
  }
}
