import * as noticiaController from './controller';
import { authentication } from '../autenticacao/controller';

export default (route) => {
  route
    .get('/noticia', authentication, async (req, res, next) => {
      const response = await noticiaController.getAll(req);
      res.status(response.statusCode)
        .json(response.data);
    });

  route
    .route('/noticia')
    .post(authentication, async (req, res) => {
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
    .route(authentication, '/noticia/:id')
    .patch(async (req, res) => {
      const response = await noticiaController.patch(req.params.id, req.body);
      res.status(response.statusCode)
        .json(response.data);
    });

  route
    .route(authentication, '/noticia/:id')
    .delete(async (req, res) => {
      const response = await noticiaController.deleteById(req.params.id);
      res.status(response.statusCode)
        .json(response.data);
    });
};