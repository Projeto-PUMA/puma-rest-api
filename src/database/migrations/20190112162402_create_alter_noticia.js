exports.up = (knex, Promise) => Promise.all([
  knex.schema.alterTable('noticia', (table) => {
    table
      .integer('noticia_categoria_id')
      .references('noticia_categoria.id')
      .notNullable()
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  }),
]);

exports.down = (knex, Promise) => Promise.all([
  knex.schema.alterTable('noticia', (table) => {
    table.dropColumn('noticia_categoria_id');
  }),
]);
