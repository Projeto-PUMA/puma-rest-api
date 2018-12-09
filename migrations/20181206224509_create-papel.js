
exports.up = function (knex, Promise) {
    return Promise.all([
        knex.schema.createTable('papel', table => {
            table
                .increments('idPapel')
                .primary();
            table
                .string('tipo');
        })
    ]);
};

exports.down = function (knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('papel')
    ])
};
