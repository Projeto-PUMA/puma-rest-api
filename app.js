
import express from 'express';
import bodyParser from 'body-parser';
import { Model } from 'objection';
import dotenv from 'dotenv';
import morgan from 'morgan';
import knex from './src/database/db';
import autenticacaoRoutes from './src/api/resources/autenticacao/routes';
import usuarioRoutes from './src/api/resources/usuario/routes';
import noticiaRoutes from './src/api/resources/noticia/routes';
import projetoRoutes from './src/api/resources/projeto/routes';

dotenv.load();

Model.knex(knex);

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.set('port', process.env.PORT || 3000);

const router = express.Router();
app.use('/api', router);

autenticacaoRoutes(router);
usuarioRoutes(router);
noticiaRoutes(router);
projetoRoutes(router);
export default app;
