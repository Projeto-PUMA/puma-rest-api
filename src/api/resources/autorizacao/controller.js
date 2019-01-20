import AccessControl from 'accesscontrol';
import jwt from 'jsonwebtoken';
import HttpStatus from 'http-status';
import findRolesList from './dal';
import { errorResponse } from '../../../util/response';

// retorna os parametros necessarios para checar a autorizaçao do usuario
function getAuthorizationParams(req) {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.decode(token);
    return {
      usuarioId: parseInt(decoded.id, 10),
      roles: decoded.papel,
    };
  } catch (err) {
    throw err;
  }
}

export default function autorizacao(resource, action) {
  return async (req, res, next) => {
    try {
      const { roles, usuarioId } = getAuthorizationParams(req);
      const rolesList = await findRolesList(roles);
      const ac = await new AccessControl(rolesList);
      let permission;
      let level = 'none';

      for (let i = 0; i < roles.length; i += 1) {
        const role = roles[i];
        permission = ac.can(role)[`${action}Any`](resource);
        if (permission.granted === false) {
          permission = ac.can(role)[`${action}Own`](resource);
          if (permission.granted) {
            level = 'own';
          }
        } else {
          level = 'any';
          break;
        }
      }
      if (level === 'none') {
        res.send(errorResponse('Forbidden', HttpStatus.FORBIDDEN));
      } else {
        req.info = { level, usuarioId: Number(usuarioId) };
        next();
      }
    } catch (err) {
      res.send(errorResponse(err.messaage));
    }
  };
}
