import HttpStatus from 'http-status';
import * as usuarioDal from './dal';
import { defaultResponse, errorResponse } from '../../../util/response';
import * as autenticacaoController from '../autenticacao/controller';

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
    autenticacaoController.enviaEmailConfirmacao(response.email);
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

export async function patch(id, body, info) {
  try {
    switch (info.level) {
      case 'own': {
        if (id === info.usuarioId) {
          const response = await usuarioDal.patch(id, body);
          return defaultResponse(response);
        }
        break;
      }
      case 'any': {
        const response = await usuarioDal.patch(id, body);
        return defaultResponse(response);
      }
      default: {
        break;
      }
    }
    return errorResponse('Unauthorized', HttpStatus.UNAUTHORIZED);
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

export async function findProfissao() {
  try {
    const response = await usuarioDal.findProfissao();
    return defaultResponse(response);
  } catch (err) {
    return errorResponse(err.message);
  }
}
