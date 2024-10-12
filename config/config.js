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
    },
    razorpay: {
        key_id: process.env.RAZORPAY_KEY_ID,
        key_secret: process.env.RAZORPAY_KEY_SECRET
    }
}

module.exports = config;
