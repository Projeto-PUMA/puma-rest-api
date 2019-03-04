import { Model } from "objection";
import path from "path";

class Disciplina extends Model {
  static get tableName() {
    return "disciplina";
  }

  static get idColumn() {
    return "id";
  }

  static get relationMappings() {
    return {
      professor: {
        relation: Model.HasManyRelation,
        modelClass: path.join(__dirname, "../professor/Professor"),
        join: {
          from: "disciplina.id",
          to: "professor.disciplina_id"
        }
      },
      psp: {
        relation: Model.BelongsToOneRelation,
        modelClass: path.join(__dirname, "../psp/Psp"),
        join: {
          from: "disciplina.psp_id",
          to: "psp.id"
        }
      },
      competencia: {
        relation: Model.ManyToManyRelation,
        modelClass: path.join(__dirname, "../competencia/Competencia"),
        join: {
          from: "disciplina.id",
          through: {
            from: "disciplina_competencia.disciplina_id",
            to: "disciplina_competencia.competencia_id",
            extra: ["peso"]
          },
          to: "competencia.id"
        }
      }
    };
  }
}

module.exports = Disciplina;
