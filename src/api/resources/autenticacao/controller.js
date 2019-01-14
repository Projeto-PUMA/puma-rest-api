import jwt from 'jsonwebtoken';
import HttpStatus from 'http-status'
import { errorResponse, defaultResponse } from '../../../util/response';
import * as usuarioController from '../usuario/controller';

require('dotenv').config();


async function signToken(body, key, expiresIn) {
  try {
    const payload = await usuarioController.generatePayload(body);
    await console.log(payload);
    const token = await jwt.sign(payload, key, { expiresIn });
    return { token: `Bearer ${token}` };
  } catch (err) {
    throw err.message;
  }
}

export async function createToken(
  body,
  secretOrKey = process.env.JWT_SECRET_OR_KEY,
  expiresIn = process.env.JWT_EXPIRES_IN) {
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

export async function authentication(req, res, next) {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(" ")[1];
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET_OR_KEY);
      req.info = decoded;
      next();
    } catch (err) {
      if (err.name === "TokenExpiredError") {
        let response = errorResponse('Expired Token', HttpStatus.UNAUTHORIZED)
        res
          .status(response.statusCode)
          .json(response.data);
        res.end()
      }
      else {
        let response = errorResponse('Invalid Token', HttpStatus.UNAUTHORIZED)
        res
          .status(response.statusCode)
          .json(response.data);
        res.end()
      }
    }
  }
  else {
    let response = errorResponse('Missing Token', HttpStatus.UNAUTHORIZED)
    res
      .status(response.statusCode)
      .json(response.data);
  }
}

export async function confirmEmail(req) {
  try {

    const usuario = await jwt.verify(req.params.token, process.env.EMAIL_SECRET_OR_KEY);

    await console.log(usuario)

    await usuarioController.patch(usuario.id, { ativo: true });
    let response = defaultResponse();
    return response;
  } catch (e) {
    let response = errorResponse('Invalid Token', HttpStatus.UNAUTHORIZED)
    return response;
  }
}

export async function createEmailToken(usuario) {
  try {
    let payload = { id: usuario.id, email: usuario.email };
    return jwt.sign(payload, process.env.EMAIL_SECRET_OR_KEY, { expiresIn: process.env.EMAIL_EXPIRES_IN });
  }
  catch (err) {
    throw err;
  }
}
