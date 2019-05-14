import * as professorController from './controller';

export default (route) => {
  route.get('/disciplina/:id/professor', async (req, res, next) => {
    const response = await professorController.getAll();
    res.status(response.statusCode).json(response);
  });

  route.get(
    '/disciplina/:idDisciplina/professor/:idProfessor',
    async (req, res) => {
      const response = await professorController.findById(req.params.id);
      res.status(response.statusCode).json(response);
    },
  );

  route.post('/disciplina/:id/professor', async (req, res) => {
    const response = await professorController.create(req.params.id, req.body);
    res.status(response.statusCode).json(response);
  });

  route.delete('/disciplina/:idDisciplina/professor/:idProfessor', async (req, res) => {
    const response = await professorController.deleteById(
      req.params.idProfessor,
    );
    res.status(response.statusCode).json(response);
  });
};
