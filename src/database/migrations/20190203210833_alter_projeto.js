
exports.up = (knex, Promise) => Promise.all([
  knex.schema.alterTable('projeto', (table) => {
    table
      .string('resposta');
  }),
]);

exports.down = (knex, Promise) => Promise.all([
  knex.schema.alterTable('projeto', (table) => {
    table
      .dropColumn('resposta');
  }),
]);
