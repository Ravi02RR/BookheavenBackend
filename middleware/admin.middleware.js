const jwt = require('jsonwebtoken');
const config = require('../config/config.js');

const adminAuthMiddleware = (req, res, next) => {
    const token = req.header('token');
    const decodedData = jwt.verify(token, config.jwt.admin);

    if (decodedData) {
        req.userID = decodedData.id;
        next();
    }

    else {
        res.status(403).json({
            message: "Unauthorized user"
        })
    }


}

module.exports = adminAuthMiddleware;