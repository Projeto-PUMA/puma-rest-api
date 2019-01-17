import { Model } from 'objection';

class Recurso extends Model {
  static get tableName() {
    return 'recurso';
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
          from: 'recurso.id',
          to: 'permissao.recurso_id',
        },
      },
    };
  }
}

module.exports = Recurso;
