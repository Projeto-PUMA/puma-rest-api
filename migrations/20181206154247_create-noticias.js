
exports.up = function (knex, Promise) {
    return Promise.all([
        knex.schema.createTable('noticia', table => {
            table
                .increments('id')
                .primary();
            table
                .string('titulo');
            table
                .string('subtitulo');
            table
                .string('texto');
            table.timestamp('dataCriacao').defaultTo(knex.fn.now());
            table.timestamp('dataAtualizacao').defaultTo(knex.fn.now());
            table
                .string('cpfUsuario')
                .references('usuario.cpf')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
        })
    ]);
};

exports.down = function (knex, Promise) {
    return Promise.all([knex.schema.dropTable('noticia')]);
};
