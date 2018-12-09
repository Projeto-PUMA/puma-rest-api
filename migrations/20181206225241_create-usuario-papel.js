
exports.up = function (knex, Promise) {
    return Promise.all([
        knex.schema.createTable('usuario_papel', function (table) {
            table.
                increments('id').primary();
            table
                .string('cpfUsuario')
                .references('usuario.cpf')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
            table
                .integer('idPapel')
                .references('papel.idPapel')
                .onDelete('CASCADE');
        })
    ])
};

exports.down = function (knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('usuario_papel'),
    ]);
};
