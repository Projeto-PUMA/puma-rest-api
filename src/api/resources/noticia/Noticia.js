import { Model } from 'objection';
import path from 'path';
import NoticiaCategoria from './NoticiaCategoria';

class Noticia extends Model {
  static get tableName() {
    return 'noticia';
  }

  static get idColumn() {
    return 'id';
  }

  static get relationMappings() {
    return {
      usuario: {
        relation: Model.BelongsToOneRelation,
        modelClass: path.join(__dirname, '../usuario/Usuario'),
        join: {
          from: 'noticia.usuario_id',
          to: 'usuario.id',
        },
      },
      categoria: {
        relation: Model.BelongsToOneRelation,
        modelClass: NoticiaCategoria,
        join: {
          from: 'noticia.noticia_categoria_id',
          to: 'noticia_categoria.id',
        },
      },
    };
  }
}

module.exports = Noticia;
