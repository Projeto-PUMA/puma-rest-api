import { Model } from 'objection';
import Endereco from '../endereco/Endereco';

class Empresa extends Model {
  // Table name is the only required property.
  static get tableName() {
    return 'empresa';
  }

  static get idColumn() {
    return 'id';
  }

  static get relationMappings() {
    return {
      projeto: {
        relation: Model.HasManyRelation,
        modelClass: `${__dirname}/Projeto`,
        join: {
          from: 'empresa.id',
          to: 'projeto.empresa_id',
        },
      },
      endereco: {
        relation: Model.BelongsToOneRelation,
        modelClass: Endereco,
        join: {
          from: 'empresa.endereco_id',
          to: 'endereco.id',
        },
      },
    };
  }
}

module.exports = Empresa;
