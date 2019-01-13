import { Model } from 'objection';
import ObjectionPassword from 'objection-password';
import Papel from './Papel';
import Profissao from './Profissao';
import Endereco from '../endereco/Endereco';

const Password = ObjectionPassword({ passwordField: 'senha' });

class Usuario extends Password(Model) {
  // Table name is the only required property.
  static get tableName() {
    return 'usuario';
  }

  static get idColumn() {
    return 'id';
  }

  $formatJson(json) {
    // Remember to call the super class's implementation.
    const newJson = super.$formatJson(json);
    newJson.senha = undefined;
    return newJson;
  }

  static get relationMappings() {
    return {
      papel: {
        relation: Model.ManyToManyRelation,
        modelClass: Papel,
        join: {
          from: 'usuario.id',
          through: {
            from: 'usuario_papel.usuario_id',
            to: 'usuario_papel.papel_id',
          },
          to: 'papel.id',
        },
      },
      profissao: {
        relation: Model.BelongsToOneRelation,
        modelClass: Profissao,
        join: {
          from: 'usuario.profissao_id',
          to: 'profissao.id',
        },
      },
      endereco: {
        relation: Model.BelongsToOneRelation,
        modelClass: Endereco,
        join: {
          from: 'usuario.endereco_id',
          to: 'endereco.id',
        },
      },
    };
  }
}

module.exports = Usuario;
