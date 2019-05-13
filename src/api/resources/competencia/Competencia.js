import { Model } from 'objection';
import path from 'path';

class Competencia extends Model {
  static get tableName() {
    return 'competencia';
  }

  static get idColumn() {
    return 'id';
  }

  static get relationMappings() {
    return {
      pai: {
        relation: Model.BelongsToOneRelation,
        modelClass: Competencia,
        join: {
          from: 'competencia.competencia_pai_id',
          to: 'competencia.id',
        },
      },
      filho: {
        relation: Model.HasManyRelation,
        modelClass: Competencia,
        join: {
          from: 'competencia.id',
          to: 'competencia.competencia_pai_id',
        },
      },
      categoria: {
        relation: Model.BelongsToOneRelation,
        modelClass: `${__dirname}/CompetenciaCategoria`,
        join: {
          from: 'competencia.competencia_categoria_id',
          to: 'competencia_categoria.id',
        },
      },
    };
  }
}

module.exports = Competencia;
