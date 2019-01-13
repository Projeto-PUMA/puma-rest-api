import { Model } from 'objection';

class Profissao extends Model {
  // Table name is the only required property.
  static get tableName() {
    return 'profissao';
  }

  static get idColumn() {
    return 'id';
  }

  static get relationMappings() {
    return {
      profissao: {
        relation: Model.HasManyRelation,
        modelClass: `${__dirname}/Usuario`,
        join: {
          from: 'profissao.id',
          to: 'usuario.profissao_id',
        },
      },
    };
  }
}

module.exports = Profissao;
