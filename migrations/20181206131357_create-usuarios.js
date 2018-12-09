
exports.up = function (knex, Promise) {
    return Promise.all([
        knex.schema.createTable('usuario', table => {
            table.string('cpf').primary();
            table.string('nome');
            table.string('senha');
        })
    ]);
};

exports.down = function (knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('usuario')
    ])
};
