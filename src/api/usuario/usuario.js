'use strict';

const Model = require('objection').Model;
const path = require('path');
let reqPath = path.join(__dirname, '../');

const Password = require('objection-password')({
    passwordField: 'senha'
});


class Usuario extends Password(Model) {
    // Table name is the only required property.
    static get tableName() {
        return 'usuario';
    }

    static get idColumn() {
        return 'cpf';
    }

    $formatJson(json) {
        // Remember to call the super class's implementation.
        json = super.$formatJson(json);
        json.senha = undefined;
        return json;
    }

    static get relationMappings() {
        return {
            noticia: {
                relation: Model.HasManyRelation,
                modelClass: reqPath + '/noticia/noticia',
                join: {
                    from: 'usuario.cpf',
                    to: 'noticia.cpfUsuario'
                }
            },
            papel: {
                relation: Model.ManyToManyRelation,
                modelClass: reqPath + 'papel/papel',
                join: {
                    from: 'usuario.cpf',
                    through: {
                        from: 'usuario_papel.cpfUsuario',
                        to: 'usuario_papel.idPapel'
                    },
                    to: 'papel.idPapel'
                }
            },
            profissao: {
                relation: Model.BelongsToOneRelation,
                modelClass: reqPath + '/profissao/profissao',
                join: {
                    from: 'usuario.idProfissao',
                    to: 'profissao.codigo'
                }
            }
        };
    }
}

module.exports = Usuario;