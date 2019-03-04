import HttpStatus from "http-status";
import * as projetoDal from "./dal";
import * as mailing from "../../mailing/mailing";
import { defaultResponse, errorResponse } from "../../../util/response";

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

export async function sendMailProjetoAlteracao(projeto) {
  try {
    await mailing.alteracaoStatusProjeto(projeto);
  } catch (error) {
    throw error;
  }
}

export async function patch(req) {
  try {
    const projetoCandidato = await projetoDal.findById(req.params.id);
    let response;
    if (req.info.level === "own") {
      if (
        req.body.projeto_status_id ||
        req.body.resposta ||
        projetoCandidato.projeto_status_id !== 1 ||
        req.info.usuarioId !== parseInt(projetoCandidato.usuario.id, 10)
      ) {
        return errorResponse("Unauthorized");
      }
      response = await projetoDal.patch(req.params.id, req.body);
      return defaultResponse(response);
    }
    if (req.info.level === "any") {
      response = await projetoDal.patch(req.params.id, req.body);
      if (req.body.projeto_status_id) {
        await sendMailProjetoAlteracao(response);
      }
      return defaultResponse(response);
    }
    return errorResponse(
      "Internal Server Error",
      HttpStatus.INTERNAL_SERVER_ERROR
    );
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
