import { transaction } from 'objection';
import Usuario from './Usuario';

export async function getAll() {
  try {
    const usuario = await Usuario
      .query()
      .eager('[endereco.categoria, profissao, telefone]')
      .select('id', 'cpf', 'nome', 'escolaridade',
        'email', 'created_at', 'updated_at');
    if (usuario === undefined) {
      throw new Error('Not Found');
    }
    return usuario;
  } catch (error) {
    throw error;
  }
}

export async function create(body) {
  try {
    const options = {
      relate: true, insertMissing: true,
    };
    const insertedGraph = await transaction(Usuario.knex(), trx => (
      Usuario.query(trx)
        // For security reasons, limit the relations that can be inserted.
        .allowInsert('[endereco.[categoria], profissao, telefone]')
        .insertGraph(body, options)
    ));
    return insertedGraph;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function findById(id) {
  try {
    const usuario = await Usuario.query().findById(id);
    if (usuario === undefined) {
      throw new Error('Not Found');
    }
    return usuario;
  } catch (error) {
    throw error;
  }
}

export async function findByEmail(email) {
  try {
    const usuario = Usuario.query().first().where('email', email);
    if (usuario === undefined) {
      throw new Error('Not Found');
    }
    return usuario;
  } catch (error) {
    throw (error);
  }
}

export async function patch(id, body) {
  try {
    const options = {
      relate: true, noDelete: true,
    };
    const data = body;
    data.id = id;
    const usuario = await Usuario.query().upsertGraph(data, options).where('id', id);
    if (usuario === undefined) {
      throw new Error('Not Found');
    }
    return usuario;
  } catch (error) {
    throw error;
  }
}

export async function deleteById(id) {
  try {
    const usuario = await Usuario.query().deleteById(id);
    return usuario;
  } catch (error) {
    throw error;
  }
}
