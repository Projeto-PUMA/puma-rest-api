import * as disciplinaController from "./controller";

export default route => {
  route.get("/disciplina", async (req, res, next) => {
    const response = await disciplinaController.getAll(req);
    res.status(response.statusCode).json(response.data);
  });

  route.get("/disciplina/:id", async (req, res) => {
    const response = await disciplinaController.findById(req.params.id);
    res.status(response.statusCode).json(response.data);
  });

  route.post("/disciplina", async (req, res) => {
    const response = await disciplinaController.create(req.body);
    res.status(response.statusCode);
    res.json(response.data);
  });

  route.patch("/disciplina/:id", async (req, res) => {
    const response = await disciplinaController.patch(req.params.id, req.body);
    res.status(response.statusCode).json(response.data);
  });

  route.delete("/disciplina/:id", async (req, res) => {
    const response = await disciplinaController.deleteById(req.params.id);
    res.status(response.statusCode).json(response.data);
  });
};
