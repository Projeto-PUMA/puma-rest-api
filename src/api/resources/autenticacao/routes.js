import { createToken, confirmEmail, enviaEmailConfirmacao } from './controller';

export default (route) => {
  route
    .route('/autentica/login')
    .post(async (req, res) => {
      const response = await createToken(req.body);
      res.status(response.statusCode);
      res.json(response.data);
    });

  route
    .route('/autentica/confirmacaoUsuario/:token')
    .get(async (req, res) => {
      const response = await confirmEmail(req);
      res.status(response.statusCode);
      res.json(response.data);
    });

  route
    .route('/autentica/reenvioEmail/')
    .post(async (req, res) => {
      const response = await enviaEmailConfirmacao(req.body.email);
      res.status(response.statusCode);
      res.json(response.data);
    });
};
