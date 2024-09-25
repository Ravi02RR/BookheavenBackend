const mongoose = require('mongoose');

//=============================DATABASE CONNECTION=============================
async function DbConnection(uri) {
    try {
        await mongoose.connect(uri);
        console.log('Database connected');
    } catch (err) {
        console.log(err);
    }
}

module.exports = DbConnection;
