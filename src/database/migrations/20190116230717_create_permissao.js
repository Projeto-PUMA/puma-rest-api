const { onUpdateTrigger } = require('../knexfile');

exports.up = (knex, Promise) => Promise.all([
  knex.schema.createTable('permissao', (table) => {
    table
      .integer('recurso_id')
      .references('recurso.id')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    table
      .integer('acao_id')
      .references('acao.id')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    table
      .integer('papel_id')
      .references('papel.id')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    table
      .primary(['recurso_id', 'papel_id', 'acao_id']);
    table
      .timestamps(true, true);
  })
    .then(() => knex.raw(onUpdateTrigger('permissao'))),
]);

exports.down = (knex, Promise) => Promise.all([
  knex.schema.dropTable('permissao'),
]);
