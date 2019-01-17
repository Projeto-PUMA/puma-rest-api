import { Model } from 'objection';

class Acao extends Model {
  static get tableName() {
    return 'acao';
  }

  static get idColumn() {
    return 'id';
  }

  static get relationMappings() {
    return {
      permissao: {
        relation: Model.HasManyRelation,
        modelClass: `${__dirname}/Permissao`,
        join: {
          from: 'acao.id',
          to: 'permissao.acao_id',
        },
      },
    };
  }
}

module.exports = Acao;
