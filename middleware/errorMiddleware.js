function errorHandler(err, req, res, next) {
    if (err) {
        res.status(500).json({
            message: 'some error occurred',
        });
    }
    else {
        next();
    }
}

module.exports = errorHandler;