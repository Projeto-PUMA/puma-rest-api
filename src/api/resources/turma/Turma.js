import { Model } from 'objection';
import path from 'path';

class Turma extends Model {
  static get tableName() {
    return 'turma';
  }

  static get idColumn() {
    return 'id';
  }

  static get relationMappings() {
    return {
      professor: {
        relation: Model.BelongsToOneRelation,
        modelClass: path.join(__dirname, '../professor/Professor'),
        join: {
          from: 'turma.professor_id',
          to: 'professor.id',
        },
      },
      status: {
        relation: Model.BelongsToOneRelation,
        modelClass: `${__dirname}/TurmaStatus`,
        join: {
          from: 'turma.status_id',
          to: 'turma_status.id',
        },
      },
    };
  }
}

module.exports = Turma;
