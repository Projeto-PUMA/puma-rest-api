import knex from 'knex';
import knexfile from './knexfile';

const environment = process.env.ENVIRONMENT || 'development';
const config = knexfile[environment];
console.log(config);
export default knex(config);
