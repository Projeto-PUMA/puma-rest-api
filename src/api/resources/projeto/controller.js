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

export async function patch(id, body) {
  try {
    const response = await projetoDal.patch(id, body);
    return defaultResponse(response);
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