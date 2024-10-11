const jwt = require('jsonwebtoken');

const userAuth = (req, res, next) => {
    const token = req.header('token');
    const decodedData = jwt.verify(token, process.env.JWT_SECRET);

    if (decodedData) {
        req.userId = decodedData.id;
        next();
    }

    else {
        res.status(403).json({
            message: "Unauthorized user"
        })
    }


}

module.exports = userAuth;