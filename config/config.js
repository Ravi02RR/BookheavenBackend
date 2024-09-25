//====================ENV============================

let config = {
    app: {
        port: process.env.PORT
    },
    db: {
        mongo: process.env.MONGODB_URIrs
    }
}

module.exports = config;
