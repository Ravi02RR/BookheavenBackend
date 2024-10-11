const { Router } = require('express');
const userRouter = Router();
const { z } = require('zod');
const userModel = require('../models/user.model.js');
const userAuthMiddleware = require('../middleware/user.middleware.js');
const bcrypt = require('bcrypt');
const config = require('../config/config.js');



//======function to create hashed password============
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
userRouter.post('/signup', async (req, res) => {
    try {
        // Validate the request body against the schema
        const validatedData = signupSchema.parse(req.body);

        // Destructure the validated data
        const { name, email, password } = validatedData;

        // Hash the password
        let securePass = await hashedPassword(password);

        // Create the user in the database
        await userModel.create({ name, email, password: securePass });

        res.status(201).json({
            message: "User created successfully",
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


userRouter.post('/signin', (req, res) => {
    res.send('Signin Page');
});

userRouter.post('/purchase', userAuthMiddleware, (req, res) => {
    res.send('Purchase Page');
});

module.exports = userRouter;
