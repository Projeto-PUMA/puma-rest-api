// import * as turmaController from './controller';

// export default (route) => {
//   route.get('/turma', async (req, res, next) => {
//     const response = await turmaController.getAll(req);
//     res.status(response.statusCode).json(response);
//   });

//   route.get('/turma/:id', async (req, res) => {
//     const response = await turmaController.findById(req.params.id);
//     res.status(response.statusCode).json(response);
//   });

//   route.post('/turma', async (req, res) => {
//     const response = await turmaController.create(req.body);
//     res.status(response.statusCode).json(response);
//   });

//   route.patch('/turma/:id', async (req, res) => {
//     const response = await turmaController.patch(req.params.id, req.body);
//     res.status(response.statusCode).json(response);
//   });

//   route.delete('/turma/:id', async (req, res) => {
//     const response = await turmaController.deleteById(req.params.id);
//     res.status(response.statusCode).json(response);
//   });
// };
