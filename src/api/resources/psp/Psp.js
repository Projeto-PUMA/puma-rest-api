import { Model } from 'objection';

class Psp extends Model {
  static get tableName() {
    return 'psp';
  }

  static get idColumn() {
    return 'id';
  }

  static get relationMappings() {
    return {
      pai: {
        relation: Model.BelongsToOneRelation,
        modelClass: Psp,
        join: {
          from: 'psp.psp_pai_id',
          to: 'psp.id',
        },
      },
      filho: {
        relation: Model.HasManyRelation,
        modelClass: Psp,
        join: {
          from: 'psp.id',
          to: 'psp.psp_pai_id',
        },
      },
      projeto: {
        relation: Model.HasManyRelation,
        modelClass: path.join(__dirname, '../projeto/Projeto'),
        join: {
          from: 'psp.id',
          to: 'projeto.psp_id',
        },
      },
    };
  }
}

module.exports = Psp;
