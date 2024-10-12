//====================ENV============================

let config = {
    app: {
        port: process.env.PORT
    },
    db: {
        mongo: process.env.MONGODB_URIrs
    },
    jwt: {
        user: process.env.JWT_SECRET_FOR_USER,
        admin: process.env.JWT_SECRET_FOR_ADMIN
    },
    bcryptsalt: {
        salt: parseInt(process.env.SALT)
    }
}

module.exports = config;
