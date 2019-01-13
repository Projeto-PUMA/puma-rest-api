import { Model } from 'objection';

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
    };
  }
}

module.exports = Papel;
