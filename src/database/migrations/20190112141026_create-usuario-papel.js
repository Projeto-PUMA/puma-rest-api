const { onUpdateTrigger } = require('../knexfile');

exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTable('usuario_papel', (table) => {
      table
        .integer('usuario_id')
        .references('usuario.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      table
        .integer('papel_id')
        .references('papel.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      table
        .primary(['usuario_id', 'papel_id']);
      table
        .timestamps(true, true);
    })
      .then(() => knex.raw(onUpdateTrigger('usuario_papel'))),
  ]);
};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('usuario_papel'),
  ]);
};
