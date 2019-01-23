import config from '../config';

const pg = require('pg');

pg.defaults.ssl = false;

console.log(config.dbUrl)
module.exports = {
  development: {
    client: 'pg',
    connection: config.dbUrl,
    migrations: {
      tableName: 'knex_migrations',
    },
    pool: {
      min: 0,
      max: 15,
    },
  },
  staging: {
    client: 'pg',
    connection: config.dbUrl,
    migrations: {
      tableName: 'knex_migrations',
    },
    pool: {
      min: 0,
      max: 15,
    },
  },
  production: {
    client: 'pg',
    connection: config.dbUrl,
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
