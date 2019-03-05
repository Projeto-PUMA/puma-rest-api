import { Model } from "objection";
import path from "path";

class Competencia extends Model {
  static get tableName() {
    return "competencia";
  }

  static get idColumn() {
    return "id";
  }

  static get relationMappings() {
    return {
      disciplina: {
        relation: Model.ManyToManyRelation,
        modelClass: path.join(__dirname, "../disciplina/Disciplina"),
        join: {
          from: "competencia.id",
          through: {
            from: "disciplina_competencia.competencia_id",
            to: "disciplina_competencia.disciplina_id",
            extra: ["peso"]
          },
          to: "disciplina.id"
        }
      },
      categoria: {
        relation: Model.BelongsToOneRelation,
        modelClass: `${__dirname}/CompetenciaCategoria`,
        join: {
          from: "competencia.competencia_categoria_id",
          to: "competencia_categoria.id"
        }
      }
    };
  }
}

module.exports = Competencia;
