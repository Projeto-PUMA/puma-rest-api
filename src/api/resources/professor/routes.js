import * as professorController from './controller';

export default (route) => {
  route.get('/professor', async (req, res, next) => {
    const response = await professorController.getAll(req);
    res.status(response.statusCode).json(response);
  });

  route.get('/professor/:id', async (req, res) => {
    const response = await professorController.findById(req.params.id);
    res.status(response.statusCode).json(response);
  });

  route.post('/professor', async (req, res) => {
    console.log('here');
    const response = await professorController.create(req.body);
    res.status(response.statusCode).json(response);
  });

  route.patch('/professor/:id', async (req, res) => {
    const response = await professorController.patch(req.params.id, req.body);
    res.status(response.statusCode).json(response);
  });

  route.delete('/professor/:id', async (req, res) => {
    const response = await professorController.deleteById(req.params.id);
    res.status(response.statusCode).json(response);
  });
};
