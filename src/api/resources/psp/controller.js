import * as pspDal from './dal';
import { defaultResponse, errorResponse } from '../../../util/response';
import * as response from '../../../util/response/format';

export async function getAll(req) {
  try {
    const res = await pspDal.getAll(req);
    return response.success(null, res);
  } catch (err) {
    return errorResponse(err.message);
  }
}

export async function create(body) {
  try {
    const psp = await pspDal.create(body);
    return defaultResponse(psp);
  } catch (err) {
    return errorResponse(err.message);
  }
}

export async function findById(id) {
  try {
    const psp = await pspDal.findById(id);
    return defaultResponse(psp);
  } catch (err) {
    return errorResponse(err.message);
  }
}

export async function patch(id, body) {
  try {
    const psp = await pspDal.patch(id, body);
    return defaultResponse(psp);
  } catch (err) {
    return errorResponse(err.message);
  }
}
export async function deleteById(id) {
  try {
    const psp = await pspDal.deleteById(id);
    return defaultResponse(psp);
  } catch (err) {
    return errorResponse(err.message);
  }
}
