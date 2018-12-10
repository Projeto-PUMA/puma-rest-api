
exports.up = function (knex, Promise) {
    return Promise.all([
        knex.schema.createTable('profissao', table => {
            table.string('codigo').primary().notNullable();
            table.string('termo').notNullable();
        })
    ]);
};

exports.down = function (knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('profissao')
    ])
};
