import { Model } from 'objection';
import path from 'path';
class Professor extends Model {
  static get tableName() {
    return 'professor';
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
          from: 'professor.usuario_id',
          to: 'usuario.id',
        },
      },
      disciplina: {
        relation: Model.BelongsToOneRelation,
        modelClass: path.join(__dirname, '../disciplina/Disciplina'),
        join: {
          from: 'professor.disciplina_id',
          to: 'disciplina.id',
        },
      },
      turma: {
        relation: Model.HasManyRelation,
        modelClass: path.join(__dirname, '../turma/Turma'),
        join: {
          from: 'professor.id',
          to: 'turma.professor_id',
        },
      }
    };
  }
}

module.exports = Professor;
