import { Model } from 'objection';
import ObjectionPassword from 'objection-password';
import path from 'path';
import Papel from './Papel';
import Profissao from './Profissao';
import Endereco from '../endereco/Endereco';
import Telefone from './Telefone';
import Noticia from '../noticia/Noticia';

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
      telefone: {
        relation: Model.HasManyRelation,
        modelClass: Telefone,
        join: {
          from: 'usuario.id',
          to: 'telefone.usuario_id',
        },
      },
      noticia: {
        relation: Model.HasManyRelation,
        modelClass: Noticia,
        join: {
          from: 'usuario.id',
          to: 'noticia.usuario_id',
        },
      },
      professor: {
        relation: Model.HasManyRelation,
        modelClass: path.join(__dirname, '../professor/Professor'),
        join: {
          from: 'usuario.id',
          to: 'professor.usuario_id',
        },
      },
    };
  }
}

module.exports = Usuario;
