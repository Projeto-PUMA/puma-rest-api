
exports.seed = knex => (
  // Deletes ALL existing entries
  knex('acao').del()
    .then(() => (knex('acao').insert([
      { id: 1, nome: 'create:any' },
      { id: 2, nome: 'create:own' },

      { id: 3, nome: 'read:any' },
      { id: 4, nome: 'read:own' },

      { id: 5, nome: 'update:any' },
      { id: 6, nome: 'update:own' },

      { id: 7, nome: 'delete:any' },
      { id: 8, nome: 'delete:own' },
    ])))
);
