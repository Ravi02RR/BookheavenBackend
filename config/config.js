//====================ENV============================

let config = {
    app: {
        port: process.env.PORT
    },
    db: {
        mongo: process.env.MONGODB_URIrs
    },
    jwt: {
        secret: process.env.JWT_SECRET
    },
    bcryptsalt: {
        salt: parseInt(process.env.SALT)
    }
}

module.exports = config;
