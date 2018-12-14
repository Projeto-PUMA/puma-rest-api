
exports.up = function (knex, Promise) {
    return Promise.all([
        knex.schema.createTable('usuario', table => {
            table
                .string('cpf')
                .primary()
                .notNullable();
            table
                .string('senha')
                .notNullable();
            table
                .string('nome')
                .notNullable();
            table
                .string('escolaridade')
                .notNullable();
            table
                .string('email')
                .unique()
                .notNullable();
            table
                .string('telefone')
                .notNullable();
            table
                .string('cep')
                .notNullable();
            table
                .string('estado');
            table
                .string('bairro');
            table
                .string('rua');
            table
                .string('numero');
            table
                .string('idProfissao')
                .references('profissao.codigo')
                .onUpdate('CASCADE')
                .onDelete('SET NULL');
            table
                .timestamp('dataCriacao')
                .defaultTo(knex.fn.now());
            table
                .timestamp('dataAtualizacao')
                .defaultTo(knex.fn.now());
        })
    ]);
};

exports.down = function (knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('usuario')
    ])
};
