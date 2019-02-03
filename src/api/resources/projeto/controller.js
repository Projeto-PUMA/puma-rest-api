import HttpStatus from 'http-status';
import * as projetoDal from './dal';
import { defaultResponse, errorResponse } from '../../../util/response';

export async function getAll(req) {
  try {
    const res = await projetoDal.getAll(req);
    return defaultResponse(res);
  } catch (err) {
    console.log(err);
    return errorResponse(err.message);
  }
}

export async function create(body) {
  try {
    const response = await projetoDal.create(body);
    return defaultResponse(response);
  } catch (err) {
    return errorResponse(err.message);
  }
}

export async function findById(id) {
  try {
    const response = await projetoDal.findById(id);
    return defaultResponse(response);
  } catch (err) {
    return errorResponse(err.message);
  }
}

export async function patch(req) {
  try {
    if (req.info.level === 'own' && req.info.usuarioId === parseInt(req.params.id, 10)) {
      if (req.body.status_id) {
        return errorResponse('Unauthorized');
      }
      const response = await projetoDal.patch(req.params.id, req.body);
      return defaultResponse(response);
    } if (req.info.level === 'any') {
      const response = await projetoDal.patch(req.params.id, req.body);
      return defaultResponse(response);
    }
    return errorResponse('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
  } catch (err) {
    return errorResponse(err.message);
  }
}


export async function deleteById(id) {
  try {
    const response = await projetoDal.deleteById(id);
    return defaultResponse(response);
  } catch (err) {
    return errorResponse(err.message);
  }
}

export async function findByUsuario(id) {
  try {
    const response = await projetoDal.findByUsuario(id);
    return defaultResponse(response);
  } catch (err) {
    return errorResponse(err.message);
  }
}
