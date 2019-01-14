import * as projetoController from './controller';

export default (route) => {
  route
    .get('/projeto', async (req, res, next) => {
      const response = await projetoController.getAll(req);
      res.status(response.statusCode)
        .json(response.data);
    });

  route
    .route('/projeto')
    .post(async (req, res) => {
      const response = await projetoController.create(req.body);
      res.status(response.statusCode);
      res.json(response.data);
    });

  route
    .route('/projeto/:id')
    .get(async (req, res) => {
      const response = await projetoController.findById(req.params.id);
      res.status(response.statusCode)
        .json(response.data);
    });

  route
    .route('/projeto/:id')
    .patch(async (req, res) => {
      const response = await projetoController.patch(req.params.id, req.body);
      res.status(response.statusCode)
        .json(response.data);
    });

  route
    .route('/projeto/:id')
    .delete(async (req, res) => {
      const response = await projetoController.deleteById(req.params.id);
      res.status(response.statusCode)
        .json(response.data);
    });
};
