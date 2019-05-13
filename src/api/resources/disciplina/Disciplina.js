import { Model } from 'objection';
import path from 'path';

class Disciplina extends Model {
  static get tableName() {
    return 'disciplina';
  }

  static get idColumn() {
    return 'id';
  }

  static get relationMappings() {
    return {
      professor: {
        relation: Model.HasManyRelation,
        modelClass: path.join(__dirname, '../professor/Professor'),
        join: {
          from: 'disciplina.id',
          to: 'professor.disciplina_id',
        },
      },
      psp: {
        relation: Model.BelongsToOneRelation,
        modelClass: path.join(__dirname, '../psp/Psp'),
        join: {
          from: 'disciplina.psp_id',
          to: 'psp.id',
        },
      }
    };
  }
}

module.exports = Disciplina;
