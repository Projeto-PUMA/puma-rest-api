// middleware for doing role-based permissions
module.exports = (...allowed) => (req, res, next) => {
  if (req.info) {
    const array = req.info.usuario.papel;
    const papeis = [];

    for (let i = 0; i < array.length; i = +1) {
      const role = array[i];
      const data = role.tipo;
      papeis.push(data);
    }
    const found = papeis.some(r => allowed.includes(r));
    if (found) {
      next();
    } else {
      res.status(403).json({ message: 'Forbidden' });
    }
  } else {
    res.status(403).json({ message: 'Forbidden' });
  }
};
