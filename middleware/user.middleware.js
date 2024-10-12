const jwt = require('jsonwebtoken');
const config = require('../config/config.js');

const userAuth = (req, res, next) => {
    const token = req.header('token');
    const decodedData = jwt.verify(token, config.jwt.user);

    if (decodedData) {
        req.userID = decodedData.id;
        next();
    }

    res.status(403).json({
        message: "Unauthorized user"
    })



}

module.exports = userAuth;