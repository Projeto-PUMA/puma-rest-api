exports.up = (knex, Promise) => Promise.all([
  knex.schema.alterTable('endereco', (table) => {
    table
      .integer('endereco_categoria_id')
      .references('endereco_categoria.id')
      .onDelete('SET NULL')
      .onUpdate('CASCADE');
  }),
]);

exports.down = (knex, Promise) => Promise.all([
  knex.schema.alterTable('endereco', (table) => {
    table.dropColumn('endereco_categoria_id');
  }),
]);
