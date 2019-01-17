import { transaction } from 'objection';
import Usuario from './Usuario';
import Permissao from '../autorizacao/Permissao'

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
    const usuario = await transaction(Usuario.knex(), trx => (
      Usuario.query(trx)
        .allowInsert('[endereco, profissao, telefone]')
        .insertGraph(body, options)
    ));
    return usuario;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function findById(id) {
  try {
    const usuario = await Usuario.query().findById(id).eager('papel');

    const papeis = usuario.papel.map(papel => papel.nome);

    await console.log(papeis)

    const permissoes = await Permissao
      .query()
      .select('acao.nome as action', 'papel.nome as role', 'recurso.nome as resource')
      .joinRelation('[acao,  papel, recurso]')
      .whereInComposite('papel.nome', papeis)

    await console.log(permissoes)
    if (usuario === undefined) {
      throw new Error('Not Found');
    }
    return usuario;
  } catch (error) {
    throw error;
  }
}

export async function findByCpf(cpf) {
  try {
    const usuario = await Usuario.query()
      .first()
      .eager('papel')
      .where('cpf', cpf);
    if (usuario === undefined) {
      throw new Error('Not Found');
    }
    return usuario;
  } catch (error) {
    throw error;
  }
}


export async function patch(id, body) {
  try {
    const options = {
      noDelete: true, relate: true,
    };

    const data = body;
    data.id = id;
    console.log(data);

    const usuario = await Usuario.query()
      .upsertGraph(data, options);

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
