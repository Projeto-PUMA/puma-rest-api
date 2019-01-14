import { Model } from 'objection';
import path from 'path';
import ProjetoStatus from './ProjetoStatus';
import Empresa from './Empresa';
import Psp from '../psp/Psp';

class Projeto extends Model {
  static get tableName() {
    return 'projeto';
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
          from: 'projeto.usuario_id',
          to: 'usuario.id',
        },
      },
      status: {
        relation: Model.BelongsToOneRelation,
        modelClass: ProjetoStatus,
        join: {
          from: 'projeto.projeto_status_id',
          to: 'projeto_status.id',
        },
      },
      empresa: {
        relation: Model.BelongsToOneRelation,
        modelClass: Empresa,
        join: {
          from: 'projeto.empresa_id',
          to: 'empresa.id',
        },
      },
      psp: {
        relation: Model.BelongsToOneRelation,
        modelClass: Psp,
        join: {
          from: 'projeto.psp_id',
          to: 'psp.id',
        },
      },
    };
  }
}

module.exports = Projeto;
