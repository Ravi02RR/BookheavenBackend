const { Router } = require('express');
const adminRouter = Router();
const { z } = require('zod');
const adminModel = require('../models/admin.model.js');
const bcrypt = require('bcrypt');
const config = require('../config/config.js');
const jwt = require('jsonwebtoken');
const adminAuthMiddleware = require('../middleware/admin.middleware.js');
const courseModel = require('../models/course.mode.js');





let hashedPassword = async (password) => {

    return await bcrypt.hash(password, config.bcryptsalt.salt);
}

//====================ZOD SCHEMA============================
const signupSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters long"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters long")
});


//=============================ROUTES=============================
adminRouter.post('/signup', async (req, res) => {
    try {
        // Validate the request body against the schema
        const validatedData = signupSchema.parse(req.body);

        // Destructure the validated data
        const { name, email, password } = validatedData;

        // Hash the password
        let securePass = await hashedPassword(password);

        // Create the admin in the database
        const cheackadmin = await adminModel.findOne(({ email }))
        if (cheackadmin) {
            res.status(400).json({
                message: "admin already exists"
            });
            return;
        }

        await adminModel.create({ name, email, password: securePass });

        res.status(201).json({
            message: "admin created successfully",
            data: {
                name,
                email,
                securePass
            }
        });
    } catch (error) {
        if (error instanceof z.ZodError) {

            res.status(400).json({
                error: "Validation failed",
                details: error.errors.map(e => ({
                    field: e.path.join('.'),
                    message: e.message
                }))
            });
        } else {

            console.error('Signup error:', error);
            res.status(500).json({ error: "An error occurred during signup" });
        }
    }
});


adminRouter.post('/signin', async (req, res) => {
    try {
        let { email, password } = req.body;
        let admin = await adminModel.findOne({
            email
        })
        if (admin) {
            let match = await bcrypt.compare(password, admin.password);
            if (match) {
                let token = jwt.sign({
                    email: admin.email,
                    id: admin._id,
                    name: admin.name
                }, config.jwt.admin, { expiresIn: '1h' });
                res.status(200).json({
                    message: "admin signed in successfully",
                    token
                });
            } else {
                res.status(401).json({
                    message: "Invalid credentials"
                });
            }
        }
        else {
            res.status(404).json({
                message: "admin not found"
            });
        }
    }
    catch (err) {
        console.error('Signin error:', err);
        res.status(500).json({ error: "An error occurred during signin" });
    }
});

adminRouter.post('/create', adminAuthMiddleware, async (req, res) => {
    const adminId = req.userID;
    const courseData = { title, description, price, imageUrl } = req.body;

    try {
        const course = await courseModel.create({
            ...courseData,
            creatorId: adminId
        });

        res.status(201).json({
            message: "Course created successfully",
            data: course
        });

    } catch (error) {
        console.error('Course creation error:', error);
        res.status(500).json({ error: "An error occurred during course creation" });
    }

});
adminRouter.put('/create', (req, res) => {
    res.send('Purchase Page');
})
adminRouter.get('/course/bulk', (req, res) => [
    res.send('Bulk Course Page')
])

module.exports = adminRouter;
