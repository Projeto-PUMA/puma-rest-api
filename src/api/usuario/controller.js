const usuario = require('./usuario');
const { defaultResponse, errorResponse } = require('../../util/response');
status = require('http-status');

module.exports = {
    getAll: async () => {
        try {
            const res = await usuario.query();
            return await defaultResponse(res);
        } catch (err) {
            return await errorResponse(err.message);
        }
    },

    create: async (body) => {
        try {
            body.papel = {
                idPapel: 1
            }

            const options = {
                relate: true // relate true eh para relacionar num n:m ja existente
            }

            const response = await usuario.query().allowInsert(['papel', 'profissao']).insertGraph(
                body,
                options
            );
            return await defaultResponse(response, status.CREATED);
        } catch (err) {
            return await errorResponse(err.message, status.UNPROCESSABLE_ENTITY);
        }
    },

    patch: async (cpf, body) => {
        try {
            const response = await usuario.query().patch(body).where('cpf', cpf);
            if (await response === 0) {
                return await errorResponse("Not Found", status.NOT_FOUND);
            }
            else {
                return await defaultResponse(response);
            }
        }
        catch (err) {
            return await errorResponse(err.message, status.UNPROCESSABLE_ENTITY);
        }
    },

    getByCpf: async (cpf) => {
        try {
            const response = await usuario.query().findById(cpf);
            if (response === undefined) {
                return await errorResponse('Not Found', status.NOT_FOUND);
            }
            else {
                return await defaultResponse(response);
            }
        }
        catch (err) {
            return await errorResponse(status.UNPROCESSABLE_ENTITY, status.UNPROCESSABLE_ENTITY);
        }
    },

    delete: async (cpf) => {
        try {
            const response = await usuario.query().deleteById(cpf);
            return await defaultResponse(response, status.NO_CONTENT);
        }
        catch (err) {
            return await errorResponse(err.message, status.UNPROCESSABLE_ENTITY)
        }
    },

    getByCpfWithPapel: async (cpf) => {
        try {
            const response = await usuario.query().findById(cpf).eager('papel');
            if (response === undefined) {
                return await errorResponse('Not Found', status.NOT_FOUND);
            }
            else {
                return await defaultResponse(response);
            }
        }
        catch (err) {
            return await errorResponse(status.UNPROCESSABLE_ENTITY, status.UNPROCESSABLE_ENTITY);
        }
    }
}
