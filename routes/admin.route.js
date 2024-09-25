const { Router } = require('express');
const adminRouter = Router();



//=============================ROUTES=============================
adminRouter.get('/signup', (req, res) => {
    res.send('Signup Page');
});

adminRouter.post('/signin', (req, res) => {
    res.send('Signin Page');
});

adminRouter.post('/create', (req, res) => {
    res.send('Purchase Page');
});
adminRouter.put('/create', (req, res) => {
    res.send('Purchase Page');
})
adminRouter.get('/course/bulk', (req, res) => [
    res.send('Bulk Course Page')
])

module.exports = adminRouter;
