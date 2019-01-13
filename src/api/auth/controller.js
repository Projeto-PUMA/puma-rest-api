// require('dotenv').config();
// const jwt = require('jsonwebtoken');
// const Usuario = require('../usuario/usuario');
// const { defaultResponse, errorResponse } = require('../../util/response');

// module.exports = {
//   auth: async (body) => {
//     if (body.cpf && body.senha) {
//       const { cpf } = body;
//       const { senha } = body;
//       const usuario = await Usuario.query().findById(cpf).eager('papel');
//       try {
//         if (await usuario.verifyPassword(senha)) {
//           const payload = await {
//             cpf: usuario.cpf, nome: usuario.nome, email: usuario.email, papel: usuario.papel,
//           };
//           const token = await jwt.sign(payload, process.env.JTWKEY,
//             {
//               expiresIn: process.env.TOKENEXPIRES,
//             });
//           return await (defaultResponse(token));
//         }

//         return await (errorResponse('Bad Request'));
//       } catch (err) {
//         return (errorResponse(err.message));
//       }
//     } else {
//       return (errorResponse('Bad Request'));
//     }
//   },
// };
