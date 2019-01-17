import { Model } from 'objection';
import Acao from './Acao';
import Papel from '../usuario/Papel';
import Recurso from './Recurso';


class Permissao extends Model {
  // Table name is the only required property.
  static get tableName() {
    return 'permissao';
  }

  static get idColumn() {
    return 'id';
  }

  static get relationMappings() {
    return {
      acao: {
        relation: Model.HasManyRelation,
        modelClass: Acao,
        join: {
          from: 'permissao.acao_id',
          to: 'acao.id',
        },
      },
      papel: {
        relation: Model.HasManyRelation,
        modelClass: Papel,
        join: {
          from: 'permissao.papel_id',
          to: 'papel.id',
        },
      },
      recurso: {
        relation: Model.HasManyRelation,
        modelClass: Recurso,
        join: {
          from: 'permissao.recurso_id',
          to: 'recurso.id',
        },
      },
    };
  }
}

module.exports = Permissao;
