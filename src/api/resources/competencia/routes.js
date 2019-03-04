import * as competenciaController from "./controller";

export default route => {
  route.get("/competencia", async (req, res, next) => {
    const response = await competenciaController.getAll(req);
    res.status(response.statusCode).json(response.data);
  });

  route.get("/competencia/:id", async (req, res) => {
    const response = await competenciaController.findById(req.params.id);
    res.status(response.statusCode).json(response.data);
  });

  route.post("/competencia", async (req, res) => {
    const response = await competenciaController.create(req.body);
    res.status(response.statusCode);
    res.json(response.data);
  });

  route.patch("/competencia/:id", async (req, res) => {
    const response = await competenciaController.patch(req.params.id, req.body);
    res.status(response.statusCode).json(response.data);
  });

  route.delete("/competencia/:id", async (req, res) => {
    const response = await competenciaController.deleteById(req.params.id);
    res.status(response.statusCode).json(response.data);
  });
};
