import * as disciplinaDal from "./dal";
import HttpStatus from "http-status";
import { defaultResponse, errorResponse } from "../../../util/response";

export async function getAll(req) {
  try {
    const res = await disciplinaDal.getAll(req);
    return defaultResponse(res);
  } catch (err) {
    if (err.message == "Not Found") {
      return errorResponse(err.message, HttpStatus.NOT_FOUND);
    }
    return errorResponse(err.message);
  }
}

export async function create(body) {
  try {
    const response = await disciplinaDal.create(body);
    return defaultResponse(response);
  } catch (err) {
    return errorResponse(err.message);
  }
}

export async function findById(id) {
  try {
    const response = await disciplinaDal.findById(id);
    return defaultResponse(response);
  } catch (err) {
    if (err.message == "Not Found") {
      return errorResponse(err.message, HttpStatus.NOT_FOUND);
    }
    return errorResponse(err.message);
  }
}

export async function patch(id, body) {
  try {
    const response = await disciplinaDal.patch(id, body);
    return defaultResponse(response);
  } catch (err) {
    return errorResponse(err.message);
  }
}
export async function deleteById(id) {
  try {
    const response = await disciplinaDal.deleteById(id);
    return defaultResponse(response);
  } catch (err) {
    return errorResponse(err.message);
  }
}
