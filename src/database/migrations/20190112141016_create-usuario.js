const { onUpdateTrigger } = require('../knexfile');

exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTable('usuario', (table) => {
      table
        .increments('id')
        .primary();
      table
        .string('cpf')
        .unique()
        .notNullable();
      table
        .string('senha')
        .notNullable();
      table
        .string('nome')
        .notNullable();
      table
        .string('escolaridade')
        .notNullable();
      table
        .string('email')
        .unique()
        .notNullable();
      table
        .string('profissao_id')
        .references('profissao.id')
        .onUpdate('CASCADE')
        .onDelete('SET NULL');
      table
        .integer('endereco_id')
        .references('endereco.id')
        .onUpdate('CASCADE')
        .onDelete('SET NULL');
      table
        .timestamps(true, true);
    })
      .then(() => knex.raw(onUpdateTrigger('usuario'))),
  ]);
};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('usuario'),
  ]);
};
