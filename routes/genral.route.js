const { Router } = require('express');
const genralController = require('../controller/genral.controller');

const genralRouter = Router();

//=============================ROUTES=============================
genralRouter.get('/', genralController.genralController); 

module.exports = genralRouter;
