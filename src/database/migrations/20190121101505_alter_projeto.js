
exports.up = (knex, Promise) => Promise.all([
    knex.schema.alterTable('projeto', (table) => {
        table.string('anexo').alter();
    }),
]);

exports.down = (knex, Promise) => Promise.all([
    knex.schema.alterTable('projeto', (table) => {
        table.string('anexo').notNullable().alter();
    }),
]);
