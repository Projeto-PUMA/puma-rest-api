import { Model } from 'objection';
import path from 'path';

class Monitor extends Model {
  static get tableName() {
    return 'monitor';
  }

  static get idColumn() {
    return 'id';
  }

  static get relationMappings() {
    return {
      usuario: {
        relation: Model.BelongsToOneRelation,
        modelClass: path.join(__dirname, '../usuario/Usuario'),
        join: {
          from: 'monitor.usuario_id',
          to: 'usuario.id'
        }
      },
      turma: {
        relation: Model.BelongsToOneRelation,
        modelClass: path.join(__dirname, '../turma/Turma'),
        join: {
          from: 'monitor.turma_id',
          to: 'turma.id'
        }
      }
    };
  }
}

module.exports = Monitor;
