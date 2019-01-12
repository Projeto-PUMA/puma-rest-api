const pg = require('pg');

pg.defaults.ssl = false;

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://postgres:puma@localhost/pumadb',
    migrations: {
      tableName: 'knex_migrations',
    },
    pool: {
      min: 0,
      max: 15,
    },
  },
  onUpdateTrigger: table => `
  CREATE TRIGGER ${table}_updated_at
  BEFORE UPDATE ON ${table}
  FOR EACH ROW
  EXECUTE PROCEDURE on_update_timestamp();
  `,
};