
exports.up = function (knex, Promise) {
    return Promise.all([
        knex.schema.createTable('projeto', table => {
            table
                .increments('id')
                .primary();
            table.string('nome').notNullable();
            table.timestamp('dataCriacao').defaultTo(knex.fn.now());
            table.timestamp('dataAtualizacao').defaultTo(knex.fn.now());
        })
    ]);
};

exports.down = function (knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('projeto')
    ])
};
