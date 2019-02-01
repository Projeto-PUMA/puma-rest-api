
exports.seed = knex => (
  // Deletes ALL existing entries
  knex('acao').del()
    .then(() => (knex('acao').insert([
      { nome: 'create:any' },
      { nome: 'create:own' },

      { nome: 'read:any' },
      { nome: 'read:own' },

      { nome: 'update:any' },
      { nome: 'update:own' },

      { nome: 'delete:any' },
      { nome: 'delete:own' },
    ])))
);
