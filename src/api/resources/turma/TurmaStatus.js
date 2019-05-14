import { Model } from 'objection';

class TurmaStatus extends Model {
  static get tableName() {
    return 'turma_status';
  }

  static get idColumn() {
    return 'id';
  }

  static get relationMappings() {
    return {
      status: {
        relation: Model.HasManyRelation,
        modelClass: `${__dirname}/TurmaStatus`,
        join: {
          from: 'turma_status.id',
          to: 'turma.status_id',
        },
      },
    };
  }
}

module.exports = TurmaStatus;
