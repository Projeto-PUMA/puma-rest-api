import { Model } from 'objection';
import path from 'path';

class Papel extends Model {
  static get tableName() {
    return 'papel';
  }

  static get idColumn() {
    return 'id';
  }

  static get relationMappings() {
    return {
      usuario: {
        relation: Model.ManyToManyRelation,
        modelClass: `${__dirname}/Usuario`,
        join: {
          from: 'papel.id',
          through: {
            from: 'usuario_papel.usuario_id',
            to: 'usuario_papel.papel_id',
          },
          to: 'usuario.id',
        },
      },
      permissao: {
        relation: Model.HasManyRelation,
        modelClass: path.join(__dirname, '../autorizacao/Permissao'),
        join: {
          from: 'recurso.id',
          to: 'permissao.recurso_id',
        },
      },
    };
  }
}

module.exports = Papel;
