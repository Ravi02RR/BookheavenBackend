const app = require('./app/app.js');
const DbConnection = require('./db/dbConnection.js');
const config = require('./config/config.js');
const errorHandler = require('./middleware/errorMiddleware.js');
const userRoute = require('./routes/user.routes.js');
const courseRouter = require('./routes/course.route.js');
const adminRoute = require('./routes/admin.route.js');
const genralRouter = require('./routes/genral.route.js');
/*=============================ROUTES=============================*/
app.use('/api/v1/user', userRoute);
app.use('/api/v1/course', courseRouter);
app.use('/api/v1/admin', adminRoute);
app.use('/genral', genralRouter);


/*=============================ERROR HANDLER=============================*/
app.use(errorHandler);

/*=============================SERVER=============================*/
try {
    DbConnection(config.db.mongo).then(() => {
        app.listen(config.app.port || 8000, () => {
            console.log(`Server running on port ${config.app.port}`);
        });
    });
} catch (err) {
    console.log("Something went wrong");
}
