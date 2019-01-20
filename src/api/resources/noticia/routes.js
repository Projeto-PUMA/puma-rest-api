import * as noticiaController from './controller';
import { autenticacao } from '../autenticacao/controller';
import autorizacao from '../autorizacao/controller';

export default (route) => {
  route
    .get('/noticia', async (req, res, next) => {
      const response = await noticiaController.getAll(req);
      res.status(response.statusCode)
        .json(response.data);
    });

  route
    .route(autenticacao, autorizacao('noticia', 'create'), '/noticia')
    .post(async (req, res) => {
      const response = await noticiaController.create(req.body);
      res.status(response.statusCode);
      res.json(response.data);
    });

  route
    .route('/noticia/:id')
    .get(async (req, res) => {
      const response = await noticiaController.findById(req.params.id);
      res.status(response.statusCode)
        .json(response.data);
    });

  route
    .route(autenticacao, '/noticia/:id')
    .patch(async (req, res) => {
      const response = await noticiaController.patch(req.params.id, req.body);
      res.status(response.statusCode)
        .json(response.data);
    });

  route
    .route(autenticacao, '/noticia/:id')
    .delete(async (req, res) => {
      const response = await noticiaController.deleteById(req.params.id);
      res.status(response.statusCode)
        .json(response.data);
    });
};
