
import express from 'express';
import bodyParser from 'body-parser';
import { Model } from 'objection';
import morgan from 'morgan';
import knex from './database/db';
import autenticacaoRoutes from './api/resources/autenticacao/routes';
import usuarioRoutes from './api/resources/usuario/routes';
import noticiaRoutes from './api/resources/noticia/routes';
import projetoRoutes from './api/resources/projeto/routes';
import config from './config';

Model.knex(knex);

const app = express();
var cors = require('cors');

app.use(cors());
app.use(morgan('combined'));
app.use(bodyParser.json());
app.set('port', config.port || 3000);

const router = express.Router();
app.use('/api', router);

autenticacaoRoutes(router);
usuarioRoutes(router);
noticiaRoutes(router);
projetoRoutes(router);
export default app;
