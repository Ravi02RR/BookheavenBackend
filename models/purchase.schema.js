const mongoose = require('mongoose');
const schema = mongoose.Schema;
/*
const userModel = require('./user.model.js');
const courseModel = require('./course.mode.js');
*/
const obj = mongoose.Types.ObjectId

const purchaseSchema = new schema({
    userId: {
        type: obj,
        ref: 'user',

    },
    couseId: {
        type: obj,
        ref: 'course',

    }

})

const purchaseModel = mongoose.model('purchase', purchaseSchema);
module.exports = purchaseModel;