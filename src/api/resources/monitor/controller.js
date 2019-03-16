import * as monitorDal from "./dal";
import * as response from "../../../util/response/format";

export async function getAll(req) {
  try {
    const monitores = await monitorDal.getAll(req);
    return response.success(null, monitores);
  } catch (err) {
    if (err.message === "NotFoundError") {
      return response.notFound();
    }
    return response.internalError(err.message);
  }
}

export async function create(body) {
  try {
    const monitor = await monitorDal.create(body);
    return response.created(undefined, monitor);
  } catch (err) {
    return response.badRequest(err.message);
  }
}

export async function findById(id) {
  try {
    const monitor = await monitorDal.findById(id);
    return response.success(null, monitor);
  } catch (err) {
    if (err.message === "NotFoundError") {
      return response.notFound();
    }
    return response.internalError(err.message);
  }
}

export async function patch(id, body) {
  try {
    const monitor = await monitorDal.patch(id, body);
    return response.success(null, monitor);
  } catch (err) {
    if (err.message === "NotFoundError") {
      return response.notFound();
    }
    return response.internalError(err.message);
  }
}

export async function deleteById(id) {
  try {
    const monitor = await monitorDal.deleteById(id);
    return response.success(null, monitor);
  } catch (err) {
    if (err.message === "NotFoundError") {
      return response.notFound();
    }
    return response.internalError(err.message);
  }
}
