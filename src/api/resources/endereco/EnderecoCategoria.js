import { Model } from 'objection';

class EnderecoCategoria extends Model {
  // Table name is the only required property.
  static get tableName() {
    return 'endereco_categoria';
  }

  static get idColumn() {
    return 'id';
  }

  static get relationMappings() {
    return {
      endereco: {
        relation: Model.HasManyRelation,
        modelClass: `${__dirname}/Endereco`,
        join: {
          from: 'endereco_categoria.id',
          to: 'endereco.endereco_categoria_id',
        },
      },
    };
  }
}

module.exports = EnderecoCategoria;
