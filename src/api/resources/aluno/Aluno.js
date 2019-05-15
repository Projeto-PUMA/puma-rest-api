import { Model } from 'objection';
import path from 'path';

class Aluno extends Model {
  static get tableName() {
    return 'aluno';
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
          from: 'aluno.usuario_id',
          to: 'usuario.id'
        }
      },
      equipe: {
        relation: Model.BelongsToOneRelation,
        modelClass: path.join(__dirname, '../equipe/Equipe'),
        join: {
          from: 'aluno.equipe_id',
          to: 'equipe.id'
        }
      }
    };
  }
}

module.exports = Aluno;
