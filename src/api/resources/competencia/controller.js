import * as competenciaDal from "./dal";
import * as response from "../../../util/response/format";

export function filtraFilhos(competencias) {
  let filtered = competencias.filter(competencia => {
    if (competencia.competencia_categoria_id !== null) {
      return competencia;
    }
  });

  return filtered;
}

export async function getAll(req) {
  try {
    const competencias = await competenciaDal.getAll(req);
    const filtered = filtraFilhos(await competencias);
    return response.success(null, filtered);
  } catch (err) {
    if (err.message === "NotFoundError") {
      return response.notFound();
    }
    return response.internalError(err.message);
  }
}

export async function create(body) {
  try {
    if (body.competencia_pai_id !== null) {
      body.competencia_categoria_id = null;
    }
    const competencia = await competenciaDal.create(body);
    return response.created(undefined, competencia);
  } catch (err) {
    return response.badRequest(err.message);
  }
}

export async function findById(id) {
  try {
    const competencia = await competenciaDal.findById(id);
    return response.success(null, competencia);
  } catch (err) {
    if (err.message === "NotFoundError") {
      return response.notFound();
    }
    return response.internalError(err.message);
  }
}

export async function patch(id, body) {
  try {
    if (body.competencia_pai_id !== null) {
      body.competencia_categoria_id = null;
    }
    const competencia = await competenciaDal.patch(id, body);
    return response.success(null, competencia);
  } catch (err) {
    if (err.message === "NotFoundError") {
      return response.notFound();
    }
    return response.internalError(err.message);
  }
}

export async function deleteById(id) {
  try {
    const competencia = await competenciaDal.deleteById(id);
    return response.success(null, competencia);
  } catch (err) {
    if (err.message === "NotFoundError") {
      return response.notFound();
    }
    return response.internalError(err.message);
  }
}
