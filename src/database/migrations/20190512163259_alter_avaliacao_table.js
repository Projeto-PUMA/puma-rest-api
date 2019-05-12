exports.up = (knex, Promise) =>
  Promise.all([knex.schema.renameTable('avaliacao', 'avaliacao_pares')]);

exports.down = (knex, Promise) =>
  Promise.all([knex.schema.renameTable('avaliacao_pares', 'avaliacao')]);
