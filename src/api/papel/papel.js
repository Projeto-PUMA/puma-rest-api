'use strict';

const Model = require('objection').Model;
const path = require('path');
let reqPath = path.join(__dirname, '../');

class Papel extends Model {
    // Table name is the only required property.
    static get tableName() {
        return 'papel';
    }

    static get idColumn() {
        return 'idPapel';
    }

    static get relationMappings() {
        return {
            usuario: {
                relation: Model.ManyToManyRelation,
                // The related model. This can be either a Model subclass constructor or an
                // absolute file path to a module that exports one.
                modelClass: reqPath + 'usuario/usuario',
                join: {
                    from: 'papel.idPapel',
                    through: {
                        from: 'usuario_papel.cpf',
                        to: 'usuario_papel.idPapel'
                    },
                    to: 'usuario.cpf'
                }
            }
        };
    }
}

module.exports = Papel;