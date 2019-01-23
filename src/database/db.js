import knex from 'knex';
import knexfile from './knexfile';
import config from '../config';

const knexConfig = knexfile[config.env];
const db = knex(knexConfig);

console.log(knexConfig);

db.raw('select 1+1 as result').then(() => {
  console.log('DB Connected!');
}).catch((err) => { throw new Error(err); });

export default db;
