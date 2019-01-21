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
    .get('/noticia/:id', async (req, res) => {
      const response = await noticiaController.findById(req.params.id);
      res.status(response.statusCode)
        .json(response.data);
    });

  route
    .post('/noticia', autenticacao, autorizacao('noticia', 'create'), async (req, res) => {
      const response = await noticiaController.create(req.body);
      res.status(response.statusCode);
      res.json(response.data);
    });

  route
    .patch('/noticia/:id', autenticacao, autorizacao('noticia', 'update'), async (req, res) => {
      const response = await noticiaController.patch(req.params.id, req.body);
      res.status(response.statusCode)
        .json(response.data);
    });

  route
    .delete('/noticia/:id', autenticacao, autorizacao('noticia', 'delete'), async (req, res) => {
      const response = await noticiaController.deleteById(req.params.id);
      res.status(response.statusCode)
        .json(response.data);
    });
};
