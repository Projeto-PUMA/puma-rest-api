gimport { createToken, confirmEmail, enviaEmailConfirmacao } from './controller';
import findRolesList from '../autorizacao/dal';

export default (route) => {
  route
    .route('/auth/login')
    .post(async (req, res) => {
      console.log('Criando token');
      const response = await createToken(req.body);
      res.status(response.statusCode);
      res.json(response.data);
    });

  route
    .route('/auth/tokenConfirmacao/:token')
    .get(async (req, res) => {
      const response = await confirmEmail(req);
      res.status(response.statusCode);
      res.json(response.data);
    });

  route
    .route('/auth/tokenConfirmacao/')
    .post(async (req, res) => {
      const response = await enviaEmailConfirmacao(req.body.email);
      res.status(response.statusCode);
      res.json(response.data);
    });
};
