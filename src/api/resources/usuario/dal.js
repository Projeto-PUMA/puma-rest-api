import { transaction } from 'objection';
import Usuario from './Usuario';

export async function getAll() {
  try {
    const usuario = await Usuario
      .query()
      .eager('[endereco.categoria, profissao, telefone, papel]')
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

export async function generatePayload(body) {
  try {
    const usuario = await Usuario.query()
      .first()
      .eager('papel')
      .where('cpf', body.cpf);

    if (usuario === undefined) {
      throw new Error('Not Found');
    }

    const passwordValid = await usuario.verifyPassword(body.senha);
    if (!passwordValid) {
      throw new Error('Invalid');
    }

    let payload = await {
      id: usuario.id,
      nome: usuario.nome,
      papel: usuario.papel.map(papel => papel.nome),
      email: usuario.email
    };

    return payload;
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
