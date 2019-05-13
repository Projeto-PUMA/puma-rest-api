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
import pspRoutes from './api/resources/psp/routes';
import disciplinaRoutes from './api/resources/disciplina/routes';
import competenciaRoutes from './api/resources/competencia/routes';
import professorRoutes from './api/resources/professor/routes';
import turmaRoutes from './api/resources/turma/routes';
import config from './config';

Model.knex(knex);

const app = express();

const corsMiddleware = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); //replace localhost with actual host
  res.header(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, PUT, PATCH, POST, DELETE'
  );
  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type, X-Requested-With, Authorization'
  );
  next();
};

app.use(corsMiddleware);
app.use(morgan('combined'));
app.use(bodyParser.json());
app.set('port', config.port || 3000);

const router = express.Router();
app.use('/api', router);

autenticacaoRoutes(router);
usuarioRoutes(router);
noticiaRoutes(router);
projetoRoutes(router);
pspRoutes(router);
disciplinaRoutes(router);
competenciaRoutes(router);
professorRoutes(router);
turmaRoutes(router);

export default app;
