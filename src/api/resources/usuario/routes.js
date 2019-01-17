import * as usuarioController from './controller';
import { authentication } from '../autenticacao/controller';
import autorizacao from '../autorizacao/controller';

export default (route) => {
  route
    .get('/usuario', async (req, res, next) => {
      const response = await usuarioController.getAll();
      res.status(response.statusCode)
        .json(response.data);
    });

  route
    .route('/usuario')
    .post(async (req, res) => {
      const response = await usuarioController.create(req.body);
      res.status(response.statusCode);
      res.json(response.data);
    });

  route
    .route('/usuario/:id')
    .get(autorizacao("turma", "read"), async (req, res, next) => {
      console.log(req.level)
      const response = await usuarioController.findById(req.params.id);
      res.status(response.statusCode)
        .json(response.data);
    });

  route
    .route('/usuario/:id')
    .patch(async (req, res) => {
      const response = await usuarioController.patch(req.params.id, req.body);
      res.status(response.statusCode)
        .json(response.data);
    });

  route
    .route('/usuario/:id')
    .delete(async (req, res) => {
      const response = await usuarioController.deleteById(req.params.id);
      res.status(response.statusCode)
        .json(response.data);
    });
};
