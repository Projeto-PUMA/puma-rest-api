import * as projetoController from './controller';
import { autenticacao } from '../autenticacao/controller';
import autorizacao from '../autorizacao/controller';

export default (route) => {
  route
    .get('/projeto', autenticacao, autorizacao('projeto', 'read'), async (req, res, next) => {
      const response = await projetoController.getAll(req);
      res.status(response.statusCode)
        .json(response.data);
    });

  route
    .get('/projeto/:id', autenticacao, autorizacao('projeto', 'read'), async (req, res) => {
      const response = await projetoController.findById(req.params.id);
      res.status(response.statusCode)
        .json(response.data);
    });

  route
    .post('/projeto', autenticacao, autorizacao('projeto', 'create'), async (req, res) => {
      const response = await projetoController.create(req.body);
      res.status(response.statusCode);
      res.json(response.data);
    });

  route
    .patch('/projeto/:id', autenticacao, autorizacao('projeto', 'update'), async (req, res) => {
      const response = await projetoController.patch(req);
      res.status(response.statusCode)
        .json(response.data);
    });

  route
    .delete('/projeto/:id', autenticacao, autorizacao('projeto', 'delete'), async (req, res) => {
      const response = await projetoController.deleteById(req.params.id);
      res.status(response.statusCode)
        .json(response.data);
    });
};
