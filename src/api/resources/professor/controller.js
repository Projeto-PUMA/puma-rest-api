import * as professorDal from './dal';
import * as response from '../../../util/response/format';


export async function getAll(idDisciplina) {
  try {
    const professores = await professorDal.getAll(idDisciplina);
    return response.success(null, professores);
  } catch (err) {
    if (err.message === 'NotFoundError') {
      return response.notFound();
    }
    return response.internalError(err.message);
  }
}

export async function create(idDisciplina, body) {
  try {
    const professor = await professorDal.create(idDisciplina, body);
    return response.created(undefined, professor);
  } catch (err) {
    return response.badRequest(err.message);
  }
}

export async function findById(idDisciplina, idProfessor) {
  try {
    const professor = await professorDal.findById(idDisciplina, idProfessor);
    return response.success(null, professor);
  } catch (err) {
    if (err.message === 'NotFoundError') {
      return response.notFound();
    }
    return response.internalError(err.message);
  }
}

export async function deleteById(idProfessor) {
  try {
    const professor = await professorDal.deleteById(idProfessor);
    return response.success(null, professor);
  } catch (err) {
    if (err.message === 'NotFoundError') {
      return response.notFound();
    }
    return response.internalError(err.message);
  }
}
