const mongoose = require('mongoose');
const schema = mongoose.Schema;






const userSchema = new schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})


let userModel = mongoose.model('user', userSchema);
module.exports = userModel;