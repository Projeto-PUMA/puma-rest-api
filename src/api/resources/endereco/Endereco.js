import { Model } from 'objection';
import path from 'path';
import EnderecoCategoria from './EnderecoCategoria';

console.log(path.join(__dirname, '../usuario/Usuario--------------------------'));

class Endereco extends Model {
  // Table name is the only required property.
  static get tableName() {
    return 'endereco';
  }

  static get idColumn() {
    return 'id';
  }

  static get relationMappings() {
    return {
      usuario: {
        relation: Model.HasManyRelation,
        modelClass: path.join(__dirname, '../usuario/Usuario'),
        join: {
          from: 'endereco.id',
          to: 'usuario.endereco_id',
        },
      },
      empresa: {
        relation: Model.HasManyRelation,
        modelClass: path.join(__dirname, '../projeto/Empresa'),
        join: {
          from: 'endereco.id',
          to: 'empresa.endereco_id',
        },
      },
      categoria: {
        relation: Model.BelongsToOneRelation,
        modelClass: EnderecoCategoria,
        join: {
          from: 'endereco.endereco_categoria_id',
          to: 'endereco_categoria.id',
        },
      },
    };
  }
}

module.exports = Endereco;
