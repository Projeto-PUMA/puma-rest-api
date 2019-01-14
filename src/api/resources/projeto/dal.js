import { transaction } from 'objection';
import Projeto from './Projeto';

export async function getAll(req) {
    try {
        const { limite } = req.query;
        const projeto = await Projeto
            .query()
            .skipUndefined()
            .eager('usuario(selectNomeAndId), empresa(selectNomeFantasiaAndId)', {
                selectNomeAndId: (builder) => {
                    builder.select('nome', 'id');
                },
                selectNomeFantasiaAndId: (builder) => {
                    builder.select('nome_fantasia', 'id');
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
        const projeto = await Projeto.query().findById(id);
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
            relate: true, noDelete: true, insertMissing: true
        };
        const data = body;
        data.id = id;
        const projeto = await transaction(Projeto.knex(), trx => (
            Projeto.query(trx)
                .allowInsert('[empresa.[endereco]]')
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
