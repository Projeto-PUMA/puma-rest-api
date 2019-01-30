import path from 'path';

require('custom-env').env(true, path.join(__dirname, '../'));

const config = {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  dbUrl: process.env.DATABASE_URL,
  usuarioJwtSecretOrKey: process.env.USR_JWT_SECRET_OR_KEY,
  usuarioExpiresIn: process.env.USR_JWT_EXPIRES_IN,
  emailJwtSecretOrKey: process.env.EMAIL_SECRET_OR_KEY,
  emailExpiresIn: process.env.EMAIL_EXPIRES_IN,
  emailUsr: process.env.EMAIL_USR,
  emailPass: process.env.EMAIL_PASS,
  host: process.env.HOST,
};

export default config;
