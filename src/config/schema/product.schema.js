const mongoose = require('mongoose');

const product = new mongoose.Schema({
    title: {type: String, maxLength: 150},
    price: {type: String},
    productImage: {type: String, maxLength: 255},

});

module.exports = mongoose.model('Product', product, 'Product');