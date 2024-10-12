const { Router } = require('express');


const genralRouter = Router();

//=============================ROUTES=============================
genralRouter.get('/', (req, res) => {
    res.send('Welcome to the genral route');
})

module.exports = genralRouter;
