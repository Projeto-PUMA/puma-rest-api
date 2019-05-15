import * as disciplinaController from './controller';
import * as professorController from '../professor/controller';
import * as turmaController from '../turma/controller';

export default route => {
  route.get('/disciplina', async (req, res, next) => {
    const response = await disciplinaController.getAll(req);
    res.status(response.statusCode).json(response);
  });

  route.get('/disciplina/:id', async (req, res) => {
    const response = await disciplinaController.findById(req.params.id);
    res.status(response.statusCode).json(response);
  });

  route.post('/disciplina', async (req, res) => {
    const response = await disciplinaController.create(req.body);
    res.status(response.statusCode).json(response);
  });

  route.patch('/disciplina/:id', async (req, res) => {
    const response = await disciplinaController.patch(req.params.id, req.body);
    res.status(response.statusCode).json(response);
  });

  route.delete('/disciplina/:id', async (req, res) => {
    const response = await disciplinaController.deleteById(req.params.id);
    res.status(response.statusCode).json(response);
  });

  route.get('/disciplina/:id/professor', async (req, res, next) => {
    const response = await professorController.getAll(req.params.id);
    res.status(response.statusCode).json(response);
  });

  route.get(
    '/disciplina/:idDisciplina/professor/:idProfessor',
    async (req, res) => {
      const response = await professorController.findById(
        req.params.idDisciplina,
        req.params.idProfessor
      );
      res.status(response.statusCode).json(response);
    }
  );

  route.post('/disciplina/:id/professor', async (req, res) => {
    const response = await professorController.create(req.params.id, req.body);
    res.status(response.statusCode).json(response);
  });

  route.delete(
    '/disciplina/:idDisciplina/professor/:idProfessor',
    async (req, res) => {
      const response = await professorController.deleteById(
        req.params.idProfessor
      );
      res.status(response.statusCode).json(response);
    }
  );
  route.get('/disciplina/:id/turma', async (req, res, next) => {
    console.log('route');
    const response = await turmaController.getAll(req.params.id);
    res.status(response.statusCode).json(response);
  });

  route.get('/disciplina/:id/turma/:idTurma', async (req, res) => {
    const response = await turmaController.findById(req.params.idTurma);
    res.status(response.statusCode).json(response);
  });

  route.post('/disciplina/:id/turma', async (req, res) => {
    const response = await turmaController.create(req.body);
    res.status(response.statusCode).json(response);
  });

  route.patch('/disciplina/:id/turma/:idTurma', async (req, res) => {
    const response = await turmaController.patch(req.params.idTurma, req.body);
    res.status(response.statusCode).json(response);
  });

  route.delete('/disciplina/:id/turma/:idTurma', async (req, res) => {
    const response = await turmaController.deleteById(req.params.idTurma);
    res.status(response.statusCode).json(response);
  });
};
