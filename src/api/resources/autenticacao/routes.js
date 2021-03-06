import { createToken, confirmEmail, enviaEmailConfirmacao } from './controller';

export default (route) => {
  route.route('/auth/login').post(async (req, res) => {
    console.log('Criando token');
    const response = await createToken(req.body);
    res.status(response.statusCode);
    res.json(response.data);
  });

  route.route('/auth/tokenConfirmacao/:token').get(async (req, res) => {
    const response = await confirmEmail(req);
    res.status(response.statusCode);
    res.json(response.data);
  });

  route.route('/auth/tokenConfirmacao/').post(async (req, res) => {
    const response = await enviaEmailConfirmacao(req.body.email, 'emailConf');
    res.status(response.statusCode);
    res.json(response.data);
  });

  route.route('/auth/esqueciMinhaSenha/:token').get(async (req, res) => {
    const response = await confirmEmail(req);
    res.status(response.statusCode);
    res.json(response.data);
  });

  route.route('/auth/esqueciMinhaSenha/').post(async (req, res) => {
    const response = await enviaEmailConfirmacao(
      req.body.email,
      'esqueciSenha',
    );
    res.status(response.statusCode);
    res.json(response.data);
  });
};
