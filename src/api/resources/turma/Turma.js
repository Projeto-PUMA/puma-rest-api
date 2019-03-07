import { Model } from 'objection';

class Turma extends Model {
  static get tableName() {
    return 'turma';
  }

  static get idColumn() {
    return 'id';
  }

  static get relationMappings() {
    return {
      competencia: {
        relation: Model.HasManyRelation,
        modelClass: `${__dirname}/Competencia`,
        join: {
          from: 'competencia_categoria.id',
          to: 'disciplina.competencia_categoria_id',
        },
      },
    };
  }
}

module.exports = Turma;
