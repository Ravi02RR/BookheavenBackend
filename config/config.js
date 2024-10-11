//====================ENV============================

let config = {
    app: {
        port: process.env.PORT
    },
    db: {
        mongo: process.env.MONGODB_URIrs
    },
    jwt: {
        secret: process.env.JWT_SECRET_FOR_USER
    },
    bcryptsalt: {
        salt: parseInt(process.env.SALT)
    },
    adminJwt: {
        secret: process.env.JWT_SECRET_FOR_ADMIN
    }
}

module.exports = config;
