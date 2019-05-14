const { onUpdateTrigger } = require('../knexfile');

exports.up = (knex, Promise) => Promise.all([
  knex.schema
    .createTable('avaliacao_equipe', (table) => {
      table.increments('id').primary();
      table
        .integer('equipe_id')
        .references('equipe.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');

      table.decimal('nota');
      table.timestamps(true, true);
    })
    .then(() => knex.raw(onUpdateTrigger('avaliacao_equipe'))),
]);

exports.down = (knex, Promise) => Promise.all([knex.schema.dropTable('avaliacao_equipe')]);
