const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    imageUrl: {
        type: String,
        default: 'https://via.placeholder.com/150'
    },
    creatorId: {
        type: Schema.Types.ObjectId,
        ref: 'admin',
        required: true
    }
});

let courseModel = mongoose.model('course', courseSchema);
module.exports = courseModel;
