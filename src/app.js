import cors from 'cors';
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

const allowCrossDomain = function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*'); // allow requests from any other server
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH'); // allow these verbs
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Cache-Control');
};

app.use(allowCrossDomain);
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
