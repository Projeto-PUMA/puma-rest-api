// middleware for doing role-based permissions
module.exports = (...allowed) => {
    return (req, res, next) => {
        const array = req.info.usuario.papel;
        const papeis = [];

        for (let i = 0; i < array.length; i++) {
            let role = array[i];
            let data = role.tipo;
            papeis.push(data);
        }
        console.log(papeis);
        console.log(allowed);

        let found = papeis.some(r => allowed.includes(r))
        if (found) {
            next();
        }
        else {
            res.status(403).json({ message: 'Forbidden' });
        }
    }
}