const { Router } = require('express');
const userRouter = Router();
// const UserService = require('../controller/user.controller.js');
const userAuthMiddleware = require('../middleware/user.middleware.js');

//=============================ROUTES=============================
userRouter.post('/signup', async (req, res) => {
    const userService = new UserService();
    const user = await userService.createUser(req.body);
    res.json(user);
})

userRouter.post('/signin', (req, res) => {
    res.send('Signin Page');
});

userRouter.post('/purchase', userAuthMiddleware, (req, res) => {
    res.send('Purchase Page');
});

module.exports = userRouter;
