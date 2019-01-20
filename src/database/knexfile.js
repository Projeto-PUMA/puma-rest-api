const dotenv = require('dotenv');
require('dotenv').config();

dotenv.load({ path: '../../.env' });
const pg = require('pg');

pg.defaults.ssl = false;

module.exports = {
  development: {
    client: 'pg',
    connection: process.env.DEV_DATABASE_URL,
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
    connection: process.env.PROD_DATABASE_URL,
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
