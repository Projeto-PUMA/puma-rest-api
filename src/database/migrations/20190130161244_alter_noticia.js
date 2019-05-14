exports.up = (knex, Promise) => Promise.all([
  knex.schema.alterTable('noticia', (table) => {
    table.dropColumn('url_chamada');
  }),
]);

exports.down = (knex, Promise) => Promise.all([
  knex.schema.alterTable('noticia', (table) => {
    table.string('url_chamada');
  }),
]);
