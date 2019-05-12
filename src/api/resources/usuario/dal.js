import { transaction } from 'objection';
import Usuario from './Usuario';
import Papel from './Papel';
import Profissao from './Profissao';

export async function getAll() {
  try {
    const usuario = await Usuario.query()
      .eager('[endereco.categoria, profissao, telefone, papel]')
      .select(
        'id',
        'cpf',
        'nome',
        'escolaridade',
        'email',
        'created_at',
        'updated_at',
      );
    if (usuario === undefined) {
      throw new Error('Not Found');
    }
    return usuario;
  } catch (error) {
    throw error;
  }
}

export async function grantsPapel(id, nomePapel) {
  try {
    const papel = await Papel.query()
      .select()
      .first()
      .where('nome', nomePapel);
    await transaction(Usuario.knex(), trx => Usuario.query(trx)
      .allowUpsert('[papel]')
      .upsertGraph(
        { id, papel: { id: papel.id } },
        { noDelete: true, relate: true },
      ));
  } catch (error) {
    throw error;
  }
}

export async function create(body) {
  try {
    const usuario = await transaction(Usuario.knex(), trx => Usuario.query(trx)
      .allowInsert('[endereco, profissao, telefone]')
      .insertGraph(body, { relate: true, insertMissing: true }));
    await grantsPapel(usuario.id, 'USUARIO');
    return usuario;
  } catch (error) {
    throw error;
  }
}

export async function findById(id) {
  try {
    const usuario = await Usuario.query()
      .findById(id)
      .eager('papel');
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

export async function findByEmail(email) {
  try {
    const usuario = await Usuario.query()
      .first()
      .eager('papel')
      .where('email', email);
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
    const data = body;
    data.id = id;
    console.log(data);
    const usuario = await Usuario.query().upsertGraph(data, {
      noDelete: true,
      relate: true,
      unrelate: true,
    });
    // const usuario = await Usuario.query().insertGraph(body);
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

export async function findProfissao() {
  try {
    const profissao = await Profissao.query().select('id', 'termo');
    return profissao;
  } catch (error) {
    throw error;
  }
}
