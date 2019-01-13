import usuarioDal from './dal';
import { defaultResponse, errorResponse } from '../../../util/response';

export default {
  async getAll() {
    try {
      const res = await usuarioDal.getAll();
      return defaultResponse(res);
    } catch (err) {
      return errorResponse(err);
    }
  },

  async create(body) {
    try {
      const response = await usuarioDal.create(body);
      return defaultResponse(response);
    } catch (err) {
      return errorResponse(err.detail);
    }
  },

  async findById(id) {
    try {
      const response = await usuarioDal.findById(id);
      return defaultResponse(response);
    } catch (err) {
      return errorResponse(err.message);
    }
  },

  async patch(id, body) {
    try {
      const response = await usuarioDal.patch(id, body);
      return defaultResponse(response);
    } catch (err) {
      return errorResponse(err.message);
    }
  },
  async deleteById(id) {
    try {
      const response = await usuarioDal.deleteById(id);
      return defaultResponse(response);
    } catch (err) {
      return errorResponse(err.message);
    }
  },
};
