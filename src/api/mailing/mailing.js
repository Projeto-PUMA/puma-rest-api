import nodemailer from 'nodemailer';
import config from '../../config';

require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: config.emailUsr,
    pass: config.emailPass,
  },
});

export async function emailConfirmacao(email, token) {
  try {
    const mailOptions = {
      from: 'Plataforma Unificada de Metodologia Ativa', // sender address
      to: `${email}`, // list of receivers
      subject: 'Confirme seu e-mail', // Subject line
      html: `<b>Olá! </b>
            <p> 
            Seja bem vindo à Plataforma Unificada de Metodologia Ativa!
            <p>
            Para ativar sua conta, clique
            <a href="${config.host}/api/auth/confirmacaoUsuario/${token}"> aqui </a>
            ou copie e cole no seu navegador o link a seguir: ${config.host}/api/auth/tokenConfirmacao/${token}`, // html body
    };
    await transporter.sendMail(mailOptions);
  } catch (err) {
    console.log(err.message);
    throw err;
  }
}

export async function alteracaoStatusProjeto(email, projeto) {
  try {
    const mailOptions = {
      from: 'Plataforma Unificada de Metodologia Ativa', // sender address
      to: `${email}`, // list of receivers
      subject: 'Alteração no status do seu projeto', // Subject line
      html: `<b>Olá! </b>
          <p>
          Olá, 
          <p>
          O seu projeto ${projeto.titulo} teve o status alterado para: ${projeto.status}. Para mais informações acesse sua conta na Plataforma.`, // html body
    };
    await transporter.sendMail(mailOptions);
  } catch (err) {
    console.log(err.message);
    throw err;
  }
}
