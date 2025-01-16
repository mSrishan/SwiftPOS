const mongoose = require('mongoose');
const OrderSchema = mongoose.Schema({
    product: {
        type: Array,
        required: true,
    },
    total: {
        type: Number,
        required: true
    },
    customer: {
        type: Object,
        required: true
    },
    Date: {
        type: Date,
        required:true
    },
    status: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('order', OrderSchema);