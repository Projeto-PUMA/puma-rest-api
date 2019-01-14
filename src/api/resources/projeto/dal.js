import { transaction } from 'objection';
import Projeto from './Projeto';

export async function getAll(req) {
  try {
    const { limite } = req.query;
    const projeto = await Projeto.query()
      .skipUndefined()
      .eager('[usuario(selectNomeAndId), psp(selectNomeAndId).[pai(selectNomeAndId)], status(selectStatusAndId)]', {
        selectNomeAndId: (builder) => {
          builder.select('nome', 'id');
        },
        selectStatusAndId: (builder) => {
          builder.select('status', 'id');
        },
      })
      .orderBy('created_at', 'desc')
      .limit(limite);
    if (projeto === undefined) {
      throw new Error('Not Found');
    }
    return projeto;
  } catch (error) {
    throw error;
  }
}

export async function create(body) {
  try {
    const options = {
      relate: true, insertMissing: true,
    };
    const projeto = await transaction(Projeto.knex(), trx => (
      Projeto.query(trx)
        .allowInsert('[empresa.[endereco]]')
        .insertGraph(body, options)
    ));
    return projeto;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function findById(id) {
  try {
    const projeto = await Projeto.query()
      .findById(id)
      .skipUndefined()
      .eager('[usuario(selectNomeEmailAndId), psp(selectNomeAndId).[pai(selectNomeAndId)], status(selectStatusAndId), empresa]', {
        selectNomeAndId: (builder) => {
          builder.select('nome', 'id');
        },
        selectNomeEmailAndId: (builder) => {
          builder.select('nome', 'id', 'email');
        },
        selectStatusAndId: (builder) => {
          builder.select('status', 'id');
        },
      });
    if (projeto === undefined) {
      throw new Error('Not Found');
    }
    return projeto;
  } catch (error) {
    throw error;
  }
}

export async function patch(id, body) {
  try {
    const options = {
      relate: true, noDelete: true, insertMissing: true,
    };
    const data = body;
    data.id = id;
    const projeto = await transaction(Projeto.knex(), trx => (
      Projeto.query(trx)
        .upsertGraph(body, options)
    ));
    if (projeto === undefined) {
      throw new Error('Not Found');
    }
    return projeto;
  } catch (error) {
    throw error;
  }
}

export async function deleteById(id) {
  try {
    const projeto = await Projeto.query().deleteById(id);
    return projeto;
  } catch (error) {
    throw error;
  }
}
