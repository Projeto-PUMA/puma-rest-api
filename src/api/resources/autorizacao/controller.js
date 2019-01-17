import AccessControl from 'accesscontrol';
import jwt from 'jsonwebtoken';
import HttpStatus from 'http-status';
import * as autorizacaoDal from './dal'
import { errorResponse } from '../../../util/response'

// retorna os parametros necessarios para checar a autorizaçao do usuario
function getAuthorizationParams(req) {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.decode(token);
        return {
            idUser: parseInt(decoded.id, 10),
            roles: decoded.papel,
        };
    } catch (err) {
        throw err.message;
    }
}

function getLevel(level) {
    switch (level) {
        case "own":
            req.level = level;
            next();
            break;
        case "any":
            req.level = level;
            next();
            break;
        case "none":
            res.send(errorResponse("forbidden"));
            break;
    }
}

export default function autorizacao(resource, action) {
    return async (req, res, next) => {
        try {
            const { roles } = getAuthorizationParams(req);
            const rolesList = await autorizacaoDal.findRolesList(roles);
            const ac = await new AccessControl(rolesList);
            let permission;
            let level = "none";

            await console.log(rolesList, resource, action)

            for (let i = 0; i < roles.length; i += 1) {
                console.log(level)
                const role = roles[i];
                permission = ac.can(role)[`${action}Any`](resource);
                console.log(permission.granted)
                if (permission.granted === false) {
                    permission = ac.can(role)[`${action}Own`](resource);
                    if (permission.granted) {
                        console.log(level);
                        level = "own";
                    }
                }
                else {
                    level = "any";
                    break;
                }
            }
            switch (level) {
                case "own":
                    req.level = level;
                    next();
                    break;
                case "any":
                    req.level = level;
                    next();
                    break;
                case "none":
                    res.send(errorResponse("forbidden"));
                    break;
            }
        } catch (err) {
            console.log(err.message)
            res.send(errorResponse(err));
        }
    };
}