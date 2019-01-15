import knex from 'knex';
import knexfile from './knexfile';

require('dotenv').config();

const environment = process.env.ENVIRONMENT || 'development';

console.log(process.env.DATABASE_URL);

const config = knexfile[environment];
console.log(config);

const db = knex(config);

db.raw('select 1+1 as result').then(() => {
  console.log('DB Connected!');
}).catch((err) => { throw new Error(err); });

export default db;
