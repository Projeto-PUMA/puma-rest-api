const noticia = require('./noticia');
const usuario = require('../usuario/usuario');
const { defaultResponse, errorResponse } = require('../../util/response');
const status = require('http-status');

module.exports = {
    getAll: async () => {
        try {
            const res = await noticia.query();
            return await defaultResponse(res);
        } catch (err) {
            return await errorResponse(err.message);
        }
    },

    create: async (body) => {
        try {
            const response = await noticia.query().insert(body);
            return await defaultResponse(response, status.CREATED);
        } catch (err) {
            return await errorResponse(err.message, status.UNPROCESSABLE_ENTITY);
        }
    },

    patch: async (id, body) => {
        try {
            body.dataAtualizacao = new Date();
            console.log(body);
            const response = await noticia.query().patch(body).where('id', id);
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

    getById: async (id) => {
        try {
            const response = await noticia.query().findById(id).eager('usuario').pick(usuario, ['nome', 'email']);
            if (response === undefined) {
                return await errorResponse('Not Found', status.NOT_FOUND);
            }
            else {
                await console.log(response);
                return await defaultResponse(response);
            }
        }
        catch (err) {
            return await errorResponse(status.UNPROCESSABLE_ENTITY, status.UNPROCESSABLE_ENTITY);
        }
    },

    delete: async (id) => {
        try {
            const response = await noticia.query().deleteById(id);
            console.log(response);
            return await defaultResponse(response, status.NO_CONTENT);
        }
        catch (err) {
            return await errorResponse(err.message, status.UNPROCESSABLE_ENTITY)
        }
    }
}
