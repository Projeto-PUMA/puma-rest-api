import { Model } from 'objection';
import path from 'path';

class Equipe extends Model {
  static get tableName() {
    return 'equipe';
  }

  static get idColumn() {
    return 'id';
  }

  static get relationMappings() {
    return {
      turma: {
        relation: Model.BelongsToOneRelation,
        modelClass: path.join(__dirname, '../turma/Turma'),
        join: {
          from: 'equipe.turma_id',
          to: 'turma.id'
        }
      },
      projeto: {
        relation: Model.BelongsToOneRelation,
        modelClass: path.join(__dirname, '../projeto/Projeto'),
        join: {
          from: 'equipe.projeto_id',
          to: 'projeto.id'
        }
      },
      aluno: {
        relation: Model.HasManyRelation,
        modelClass: path.join(__dirname, '../aluno/Aluno'),
        join: {
          from: 'equipe.id',
          to: 'aluno.equipe_id'
        }
      }
    };
  }
}

module.exports = Equipe;
