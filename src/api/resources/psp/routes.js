import * as pspController from './controller';
import { autenticacao } from '../autenticacao/controller';
import autorizacao from '../autorizacao/controller';

export default (route) => {
    route
        .get('/psp', async (req, res, next) => {
            const response = await pspController.getAll(req);
            res.status(response.statusCode)
                .json(response.data);
        });

    route
        .get('/psp/:id', async (req, res) => {
            const response = await pspController.findById(req.params.id);
            res.status(response.statusCode)
                .json(response.data);
        });

    route
        .post('/psp',  async (req, res) => {
            const response = await pspController.create(req.body);
            res.status(response.statusCode);
            res.json(response.data);
        });

    route
        .patch('/psp/:id',  async (req, res) => {
            const response = await pspController.patch(req.params.id, req.body);
            res.status(response.statusCode)
                .json(response.data);
        });

    route
        .delete('/psp/:id',  async (req, res) => {
            const response = await pspController.deleteById(req.params.id);
            res.status(response.statusCode)
                .json(response.data);
        });
};
