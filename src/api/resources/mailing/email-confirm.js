import nodemailer from 'nodemailer';
import { createEmailToken } from '../autenticacao/controller';
require('dotenv').config();

console.log(process.env.MAIL_USR)

const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: process.env.MAIL_USR,
        pass: process.env.MAIL_PASS
    }
});

export default async function sendConfirmationMail(usuario) {
    try {
        let token = await createEmailToken(usuario);
        let mailOptions = {
            from: process.env.MAIL_USR, // sender address
            to: `${usuario.email}`, // list of receivers
            subject: "Confirme seu e-mail", // Subject line
            html: `<b>Olá!${usuario.nome}</b>
            <p> 
            Seja bem vindo à Plataforma Unificada de Metodologia Ativa!
            <p>
            Para ativar sua conta, clique no link abaixo
            <p>
            http://localhost:3000/api/confirmacaoUsuario/${token}` // html body
        };
        // send mail with defined transport object
        let info = await transporter.sendMail(mailOptions)
        console.log("Message sent: %s", info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    }
    catch (err) {
        console.log(err)
        throw new Error('Somethig went wrong')
    }
}

