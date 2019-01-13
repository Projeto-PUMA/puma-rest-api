import * as noticiaDal from './dal';
import { defaultResponse, errorResponse } from '../../../util/response';

export async function getAll(req) {
    try {
        const res = await noticiaDal.getAll(req);
        return defaultResponse(res);
    } catch (err) {
        console.log(err)
        return errorResponse(err.message);
    }
}

export async function create(body) {
    try {
        const response = await noticiaDal.create(body);
        return defaultResponse(response);
    } catch (err) {
        return errorResponse(err.message);
    }
}

export async function findById(id) {
    try {
        const response = await noticiaDal.findById(id);
        return defaultResponse(response);
    } catch (err) {
        return errorResponse(err.message);
    }
}

export async function patch(id, body) {
    try {
        const response = await noticiaDal.patch(id, body);
        return defaultResponse(response);
    } catch (err) {
        return errorResponse(err.message);
    }
}
export async function deleteById(id) {
    try {
        const response = await noticiaDal.deleteById(id);
        return defaultResponse(response);
    } catch (err) {
        return errorResponse(err.message);
    }
}
