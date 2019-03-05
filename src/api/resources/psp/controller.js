import * as pspDal from "./dal";
import { defaultResponse, errorResponse } from "../../../util/response";
import * as response from "../../../util/response/format";

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
    const response = await pspDal.create(body);
    return defaultResponse(response);
  } catch (err) {
    return errorResponse(err.message);
  }
}

export async function findById(id) {
  try {
    const response = await pspDal.findById(id);
    return defaultResponse(response);
  } catch (err) {
    return errorResponse(err.message);
  }
}

export async function patch(id, body) {
  try {
    const response = await pspDal.patch(id, body);
    return defaultResponse(response);
  } catch (err) {
    return errorResponse(err.message);
  }
}
export async function deleteById(id) {
  try {
    const response = await pspDal.deleteById(id);
    return defaultResponse(response);
  } catch (err) {
    return errorResponse(err.message);
  }
}
