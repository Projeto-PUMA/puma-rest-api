
exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.alterTable('noticia', (table) => {
      table
        .integer('noticia_categoria_id')
        .references('noticia_categoria.id')
        .onDelete('SET NULL')
        .onUpdate('CASCADE');
    }),
  ]);
};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropColumn('noticia_categoria_id'),
  ]);
};
