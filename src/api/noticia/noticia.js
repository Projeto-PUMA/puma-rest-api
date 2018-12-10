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