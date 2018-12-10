const status = require('http-status');
require('dotenv').config();
const { defaultResponse, errorResponse } = require('../../util/response');
const Usuario = require('../usuario/usuario');
const jwt = require('jsonwebtoken');



module.exports = {
    auth: async (body) => {
        if (body.cpf && body.senha) {
            const { cpf } = body;
            const { senha } = body;
            const usuario = await Usuario.query().findById(cpf).eager('papel');
            try {
                if (await usuario.verifyPassword(senha)) {
                    await console.log(usuario);
                    const payload = await { usuario };
                    const token = await jwt.sign(payload, process.env.JTWKEY,
                        {
                            expiresIn: process.env.TOKENEXPIRES
                        })
                    return await (defaultResponse(token));
                }
                else {
                    return await (errorResponse('Bad Request'));
                }
            }
            catch (err) {
                return await (errorResponse(err.message));
            }
        }
        else {
            return await (errorResponse('Bad Request'));
        }
    }
}