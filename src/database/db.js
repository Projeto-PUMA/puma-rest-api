import knex from 'knex';
import knexfile from './knexfile';
require('dotenv').config();

const environment = process.env.ENVIRONMENT || 'development';

console.log(process.env.DATABASE_URL)

const config = knexfile[environment];
console.log(config);
export default knex(config);
