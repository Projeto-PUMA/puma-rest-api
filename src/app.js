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
import config from './config';

Model.knex(knex);

const app = express();

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
pspRoutes(router);
disciplinaRoutes(router);
competenciaRoutes(router);
professorRoutes(router);

export default app;
