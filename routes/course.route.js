const { Router } = require('express');

const courseRouter = Router();

courseRouter.post('/create', (req, res) => {
    res.send('course created');
});

module.exports = courseRouter; 
