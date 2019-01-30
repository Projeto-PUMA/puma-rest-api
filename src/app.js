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

var allowedOrigins = ['http://localhost:3001',
  'https://pumaunb.herokuapp.com/'];

app.use(cors({
  origin: function (origin, callback) {
    // allow requests with no origin 
    // (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      var msg = 'The CORS policy for this site does not ' +
        'allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));

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
