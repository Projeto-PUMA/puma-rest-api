import Usuario from './Usuario';
import { transaction } from 'objection';
export default {
  async getAll() {
    try {
      const usuario = await Usuario
        .query()
        .eager('[endereco.categoria, profissao]')
        .select('id', 'cpf', 'nome', 'escolaridade',
          'email', 'telefone', 'created_at', 'updated_at');
      if (usuario === undefined) {
        throw new Error('Not Found');
      }
      return usuario;
    } catch (error) {
      throw error;
    }
  },

  async create(body) {
    try {
      const options = {
        relate: true, insertMissing: true,
      };
      const insertedGraph = await transaction(Usuario.knex(), trx => {
        return (
          Usuario.query(trx)
            // For security reasons, limit the relations that can be inserted.
            .allowInsert('[endereco.[categoria], profissao]')
            .insertGraph(body, options)
        );
      });
      return insertedGraph;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },

  async findById(id) {
    try {
      const usuario = await Usuario.query().findById(id);
      if (usuario === undefined) {
        throw new Error('Not Found');
      }
      return usuario;
    } catch (error) {
      throw error;
    }
  },

  async findByEmail(email) {
    try {
      const usuario = Usuario.query().first().where('email', email);
      if (usuario === undefined) {
        throw new Error('Not Found');
      }
      return usuario;
    } catch (error) {
      throw (error);
    }
  },

  async patch(id, body) {
    try {
      const usuario = await Usuario.query().patch(body).where('id', id);
      if (usuario === undefined) {
        throw new Error('Not Found');
      }
      return usuario;
    } catch (error) {
      throw error;
    }
  },

  async deleteById(id) {
    try {
      const usuario = await Usuario.query().deleteById(id);
      return usuario;
    } catch (error) {
      throw error;
    }
  },
};
