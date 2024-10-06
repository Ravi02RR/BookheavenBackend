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
    }
}

module.exports = config;
