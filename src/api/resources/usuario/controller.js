import * as usuarioDal from './dal';
import { defaultResponse, errorResponse } from '../../../util/response';
import sendConfirmationMail from '../mailing/email-confirm'

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
    await sendConfirmationMail(response);
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

export async function generatePayload(body) {
  try {
    const usuario = await usuarioDal.findByCpf(body.cpf);
    const passwordValid = await usuario.verifyPassword(body.senha);
    if (!passwordValid || !usuario.ativo) {
      throw new Error('Invalid');
    }

    const payload = await {
      id: usuario.id,
      nome: usuario.nome,
      papel: usuario.papel.map(papel => papel.nome),
      email: usuario.email,
    };
    return payload;
  } catch (error) {
    throw (error);
  }
}
