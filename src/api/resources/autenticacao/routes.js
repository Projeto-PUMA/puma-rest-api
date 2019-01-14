import { createToken, confirmEmail } from './controller';

export default (route) => {
  route
    .route('/login')
    .post(async (req, res) => {
      const response = await createToken(req.body);
      res.status(response.statusCode);
      res.json(response.data);
    });

  route
    .route('/confirmacaoUsuario/:token')
    .get(async (req, res) => {
      const response = await confirmEmail(req);
      res.status(response.statusCode);
      res.json(response.data);
    });
};
