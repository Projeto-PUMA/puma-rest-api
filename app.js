
import express from 'express';
import bodyParser from 'body-parser';
import { Model } from 'objection';
import dotenv from 'dotenv';
import morgan from 'morgan';
import knex from './src/database/db';
import usuarioRoutes from './src/api/resources/usuario/routes';

dotenv.config();

Model.knex(knex);

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.set('port', process.env.PORT || 3000);

const router = express.Router();
app.use('/api', router);
usuarioRoutes(router);

export default app;
