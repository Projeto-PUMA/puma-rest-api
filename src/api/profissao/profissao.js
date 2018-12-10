'use strict';

const Model = require('objection').Model;
const path = require('path');
let reqPath = path.join(__dirname, '../');

class Profissao extends Model {
    // Table name is the only required property.
    static get tableName() {
        return 'profissao';
    }

    static get idColumn() {
        return 'codigo';
    }

    static get relationMappings() {
        return {
            usuario: {
                relation: Model.HasManyRelation,
                modelClass: reqPath + '/usuario/usuario',
                join: {
                    from: 'profissao.codigo',
                    to: 'usuario.idProfissao'
                }
            }
        }
    }
}

module.exports = Profissao;