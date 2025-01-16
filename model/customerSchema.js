const mongoose = require('mongoose');
const CustomerSchema = mongoose.Schema({
    customerName: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required:true
    },
    address: {
        type: String,
        required:true
    },
    salary: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        required: true
    }
});

module.Schema = mongoose.model('customer', CustomerSchema);