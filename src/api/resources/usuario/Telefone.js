import { Model } from 'objection';

class Telefone extends Model {
  // Table name is the only required property.
  static get tableName() {
    return 'telefone';
  }

  static get idColumn() {
    return 'id';
  }

  static get relationMappings() {
    return {
      usuario: {
        relation: Model.BelongsToOneRelation,
        modelClass: `${__dirname}/Usuario`,
        join: {
          from: 'telefone.usuario_id',
          to: 'usuario.id',
        },
      },
    };
  }
}

module.exports = Telefone;
