exports.up = (knex, Promise) => Promise.all([
  knex.schema.alterTable('avaliacao_equipe', (table) => {
    table
      .integer('avaliacao_id')
      .references('avaliacao.id')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  }),

  knex.schema.alterTable('avaliacao_pares', (table) => {
    table
      .integer('avaliacao_id')
      .references('avaliacao.id')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  }),
]);

exports.down = (knex, Promise) => Promise.all([
  knex.schema.alterTable('avaliacao_equipe', (table) => {
    table.dropColumn('avaliacao_id');
  }),

  knex.schema.alterTable('avaliacao_pares', (table) => {
    table.dropColumn('avaliacao_id');
  }),
]);
