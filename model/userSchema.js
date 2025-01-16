const mongoose = require('mongoose');
const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique:true
    },
    password: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    role: {
        type: Array,
        required:true
    },
    isActive: {
        type: Boolean,
        required: true
    }
});

module.exports = mongoose.model('user', UserSchema);