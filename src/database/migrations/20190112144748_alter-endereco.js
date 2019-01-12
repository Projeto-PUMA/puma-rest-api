
exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.alterTable('endereco', (table) => {
      table
        .integer('endereco_categoria_id')
        .references('endereco_categoria.id')
        .onDelete('SET NULL')
        .onUpdate('CASCADE');
    }),
  ]);
};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropColumn('endereco_categoria_id'),
  ]);
};
