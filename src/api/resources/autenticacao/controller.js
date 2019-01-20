import jwt from 'jsonwebtoken';
import HttpStatus from 'http-status';
import { errorResponse, defaultResponse } from '../../../util/response';
import * as usuarioDal from '../usuario/dal';
import emailConfirmacao from '../../mailing/email-confirm';

require('dotenv').config();

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

async function signToken(body, key, expiresIn) {
  try {
    const payload = await generatePayload(body);
    await console.log(payload);
    const token = await jwt.sign(payload, key, { expiresIn });
    return { token: `Bearer ${token}` };
  } catch (err) {
    throw err;
  }
}

export async function createToken(
  body,
  secretOrKey = process.env.JWT_SECRET_OR_KEY,
  expiresIn = process.env.JWT_EXPIRES_IN,
) {
  try {
    const newToken = await signToken(
      body,
      secretOrKey,
      expiresIn,
    );
    return defaultResponse(newToken);
  } catch (err) {
    return errorResponse(err);
  }
}

export async function autenticacao(req, res, next) {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(' ')[1];
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET_OR_KEY);
      req.info = decoded;
      next();
    } catch (err) {
      if (err.name === 'TokenExpiredError') {
        const response = errorResponse('Expired Token', HttpStatus.UNAUTHORIZED);
        res
          .status(response.statusCode)
          .json(response.data);
        res.end();
      } else {
        const response = errorResponse('Invalid Token', HttpStatus.UNAUTHORIZED);
        res
          .status(response.statusCode)
          .json(response.data);
        res.end();
      }
    }
  } else {
    const response = errorResponse('Missing Token', HttpStatus.UNAUTHORIZED);
    res
      .status(response.statusCode)
      .json(response.data);
  }
}

export async function confirmEmail(req) {
  try {
    const usuario = await jwt.verify(req.params.token, process.env.EMAIL_SECRET_OR_KEY);
    await usuarioDal.patch(usuario.id, { ativo: true });
    return defaultResponse('Usuario confirmado!');
  } catch (e) {
    const response = errorResponse('Invalid Token', HttpStatus.UNAUTHORIZED);
    return response;
  }
}

export async function createEmailToken(email) {
  try {
    const payload = { email };
    return jwt.sign(payload,
      process.env.EMAIL_SECRET_OR_KEY,
      { expiresIn: process.env.EMAIL_EXPIRES_IN });
  } catch (err) {
    throw err;
  }
}

export async function enviaEmailConfirmacao(email) {
  try {
    const token = await createEmailToken(email);
    await console.log(token);
    await emailConfirmacao(email, token);
    return defaultResponse();
  } catch (err) {
    return (errorResponse(err.message));
  }
}
