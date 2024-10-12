const { Router } = require('express');
const courseModel = require('../models/course.mode.js');
const courseRouter = Router();

courseRouter.get('/all', async (req, res) => {
    try {
        const courses = await courseModel.find({});
        res.status(200).json({
            message: "All courses",
            data: courses
        });
    } catch (error) {
        res.status(500).json({
            message: "Internal server error"
        });
    }
});

module.exports = courseRouter; 
