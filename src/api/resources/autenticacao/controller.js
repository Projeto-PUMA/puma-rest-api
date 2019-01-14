import jwt from 'jsonwebtoken';
import { errorResponse, defaultResponse } from '../../../util/response';
import * as usuarioDal from '../usuario/dal';

require('dotenv').config();


async function signToken(body, key, expiresIn) {
  try {
    const payload = await usuarioDal.generatePayload(body);
    await console.log(payload);
    const token = await jwt.sign(payload, key, { expiresIn });
    return { token: `Bearer ${token}` };
  } catch (err) {
    throw err.message;
  }
}

export default async function createToken(body) {
  try {
    const newToken = await signToken(
      body,
      process.env.JWT_SECRET_OR_KEY,
      process.env.JWT_EXPIRES_IN,
    );
    return defaultResponse(newToken);
  } catch (err) {
    return errorResponse(err);
  }
}
