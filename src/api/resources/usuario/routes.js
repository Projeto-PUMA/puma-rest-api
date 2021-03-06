import * as usuarioController from './controller';
import * as projetoController from '../projeto/controller';
import { autenticacao } from '../autenticacao/controller';
import autorizacao from '../autorizacao/controller';

export default (route) => {
  route.get(
    '/usuario',
    autenticacao,
    autorizacao('usuario', 'read'),
    async (req, res) => {
      const response = await usuarioController.getAll();
      res.status(response.statusCode).json(response.data);
    },
  );

  route.route('/usuario').post(async (req, res) => {
    const response = await usuarioController.create(req.body);
    res.status(response.statusCode);
    res.json(response.data);
  });

  route
    .route('/usuario/:id')
    .get(autenticacao, autorizacao('usuario', 'read'), async (req, res) => {
      const response = await usuarioController.findById(req.params.id);
      res.status(response.statusCode).json(response.data);
    });

  route
    .route('/usuario/:id/projeto')
    .get(autenticacao, autorizacao('projeto', 'read'), async (req, res) => {
      const response = await projetoController.findByUsuario(req.params.id);
      res.status(response.statusCode).json(response.data);
    });

  route
    .route('/usuario/:id')
    .patch(autenticacao, autorizacao('usuario', 'update'), async (req, res) => {
      const response = await usuarioController.patch(
        Number(req.params.id),
        req.body,
        req.info,
      );
      res.status(response.statusCode).json(response.data);
    });

  route
    .route('/usuario/:id')
    .delete(
      autenticacao,
      autorizacao('usuario', 'delete'),
      async (req, res) => {
        const response = await usuarioController.deleteById(req.params.id);
        res.status(response.statusCode).json(response.data);
      },
    );

  route.route('/profissao').get(async (req, res) => {
    const response = await usuarioController.findProfissao();
    res.status(response.statusCode).json(response.data);
  });
};
