const { Router } = require('express');
const adminRouter = Router();
const zod = require('zod');

const adminModel = require('../models/admin.model.js');



//=============================ROUTES=============================
adminRouter.get('/signup', (req, res) => {
    let adminData = req.body;
    const adminSchema = zod.object({
        name: zod.string(),
        email: zod.string().email(),
        password: zod.string().min(6),
    });
    try {

    } catch (err) {

    }

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
