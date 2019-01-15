import nodemailer from 'nodemailer';
import { createEmailToken } from '../autenticacao/controller';

require('dotenv').config();

console.log(process.env.MAIL_USR);

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.MAIL_USR,
    pass: process.env.MAIL_PASS,
  },
});

export default async function sendConfirmationMail(usuario) {
  try {
    const token = await createEmailToken(usuario);
    const mailOptions = {
      from: 'Plataforma Unificada de Metodologia Ativa', // sender address
      to: `${usuario.email}`, // list of receivers
      subject: 'Confirme seu e-mail', // Subject line
      html: `<b>Olá! ${usuario.nome}</b>
            <p> 
            Seja bem vindo à Plataforma Unificada de Metodologia Ativa!
            <p>
            Para ativar sua conta, clique no link abaixo
            <p>
            http://localhost:3000/api/confirmacaoUsuario/${token}`, // html body
    };
    await transporter.sendMail(mailOptions);
  } catch (err) {
    console.log(err);
    throw new Error('Somethig went wrong');
  }
}
