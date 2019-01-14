import HttpStatus from 'http-status';
import jwt from 'jsonwebtoken';
import { errorResponse } from '../../../util/response';

require('dotenv').config();

export default async function autenticacao(req, res, next) {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(' ')[1];
    try {
      jwt.verify(token, process.env.JWT_SECRET_OR_KEY);
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
