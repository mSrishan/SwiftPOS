const mongoose = require('mongoose');
const PaymentSchema = mongoose.Schema({
    order: {
        type: Object,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    tax: {
        type: Number,
        required: true
    },
    discount: {
        type: Number,
        required:true
    },
    extraCharges: {
        type: Array,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    transactionDetails: {
        type: Object,
        required: true
    }
});

module.exports = mongoose.model('payment', PaymentSchema);