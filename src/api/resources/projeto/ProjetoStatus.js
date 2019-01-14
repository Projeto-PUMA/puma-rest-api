import { Model } from 'objection';

class ProjetoStatus extends Model {
  // Table name is the only required property.
  static get tableName() {
    return 'projeto_status';
  }

  static get idColumn() {
    return 'id';
  }

  static get relationMappings() {
    return {
      projeto: {
        relation: Model.HasManyRelation,
        modelClass: `${__dirname}/Projeto`,
        join: {
          from: 'projeto_status.id',
          to: 'projeto.projeto_status_id',
        },
      },
    };
  }
}

module.exports = ProjetoStatus;
