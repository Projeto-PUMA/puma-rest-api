import { Model } from 'objection';

class NoticiaCategoria extends Model {
  // Table name is the only required property.
  static get tableName() {
    return 'noticia_categoria';
  }

  static get idColumn() {
    return 'id';
  }

  static get relationMappings() {
    return {
      noticia: {
        relation: Model.HasManyRelation,
        modelClass: `${__dirname}/Noticia`,
        join: {
          from: 'noticia_categoria.id',
          to: 'noticia.noticia_categoria_id',
        },
      },
    };
  }
}

module.exports = NoticiaCategoria;
