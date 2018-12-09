'use strict';

const Model = require('objection').Model;
const path = require('path');
let reqPath = path.join(__dirname, '../');

class Noticia extends Model {
    // Table name is the only required property.
    static get tableName() {
        return 'noticia';
    }

    static get relationMappings() {
        return {
            usuario: {
                relation: Model.BelongsToOneRelation,
                // The related model. This can be either a Model subclass constructor or an
                // absolute file path to a module that exports one.
                modelClass: reqPath + 'usuario/usuario',
                join: {
                    from: 'noticia.cpfUsuario',
                    to: 'usuario.cpf'
                }
            }
        };
    }
}

module.exports = Noticia;