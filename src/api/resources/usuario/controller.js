import * as usuarioDal from './dal';
import { defaultResponse, errorResponse } from '../../../util/response';

export async function getAll() {
  try {
    const res = await usuarioDal.getAll();
    return defaultResponse(res);
  } catch (err) {
    return errorResponse(err.message);
  }
}

export async function create(body) {
  try {
    const response = await usuarioDal.create(body);
    return defaultResponse(response);
  } catch (err) {
    return errorResponse(err.message);
  }
}

export async function findById(id) {
  try {
    const response = await usuarioDal.findById(id);
    return defaultResponse(response);
  } catch (err) {
    return errorResponse(err.message);
  }
}

export async function patch(id, body) {
  try {
    const response = await usuarioDal.patch(id, body);
    return defaultResponse(response);
  } catch (err) {
    return errorResponse(err.message);
  }
}

export async function deleteById(id) {
  try {
    const response = await usuarioDal.deleteById(id);
    return defaultResponse(response);
  } catch (err) {
    return errorResponse(err.message);
  }
}
