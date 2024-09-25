const { Router } = require('express');
const userRouter = Router();

//=============================ROUTES=============================
userRouter.get('/signup', (req, res) => {
    res.send('Signup Page');
});

userRouter.post('/signin', (req, res) => {
    res.send('Signin Page');
});

userRouter.post('/purchase', (req, res) => {
    res.send('Purchase Page');
});

module.exports = userRouter;
