import * as pspController from "./controller";
import { autenticacao } from "../autenticacao/controller";
import autorizacao from "../autorizacao/controller";

export default route => {
  route.get("/psp", autenticacao, async (req, res, next) => {
    const response = await pspController.getAll(req);
    res.status(response.statusCode).json(response.data);
  });

  route.get("/psp/:id", autenticacao, async (req, res) => {
    const response = await pspController.findById(req.params.id);
    res.status(response.statusCode).json(response.data);
  });

  route.post("/psp", autenticacao, async (req, res) => {
    const response = await pspController.create(req.body);
    res.status(response.statusCode);
    res.json(response.data);
  });

  route.patch("/psp/:id", autenticacao, async (req, res) => {
    const response = await pspController.patch(req.params.id, req.body);
    res.status(response.statusCode).json(response.data);
  });

  route.delete("/psp/:id", autenticacao, async (req, res) => {
    const response = await pspController.deleteById(req.params.id);
    res.status(response.statusCode).json(response.data);
  });
};
