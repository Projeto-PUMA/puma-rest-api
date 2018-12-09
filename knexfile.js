// Update with your config settings.
require('dotenv').config();

const pg = require('pg');
pg.defaults.ssl = false;

module.exports = {
  development: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
