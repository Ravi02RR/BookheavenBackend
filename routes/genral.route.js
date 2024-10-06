const { Router } = require('express');
const genralServie = require('../controller/genral.controller.js')

const genralRouter = Router();

//=============================ROUTES=============================
genralRouter.get('/', genralServie.get);

module.exports = genralRouter;
