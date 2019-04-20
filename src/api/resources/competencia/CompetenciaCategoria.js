import { Model } from 'objection';

class CompetenciaCategoria extends Model {
  static get tableName() {
    return 'competencia_categoria';
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
          to: 'competencia.competencia_categoria_id',
        },
      },
    };
  }
}

module.exports = CompetenciaCategoria;
