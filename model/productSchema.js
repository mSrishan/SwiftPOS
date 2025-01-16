const mongoose = require('mongoose');
const ProductSchema = mongoose.Schema({
    productName: {
        type: String,
        required: true,
        unique:true
    },
    productType: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    unitPrice: {
        type: Number,
        required:true
    },
    qtyOnHand: {
        type: Number,
        required: true
    },
    images: {
        type: Array,
        required: true
    },
    isActive: {
        type: Boolean,
        required: true
    }
});

module.exports = mongoose.model('product', ProductSchema);