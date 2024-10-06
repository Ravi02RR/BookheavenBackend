const jwt = require('jsonwebtoken');
const config = require('../config/config.js');
function userAuthMiddleware(req, res, next) {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, config.jwt);
        req.user = decoded;
        next();

    } catch (err) {
        res.status(401).json({
            message: "User not authenticated"
        })
    }
}
module.exports = userAuthMiddleware;