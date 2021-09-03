const express = require('express');
const route = express.Router();
const admincontroller = require('../app/controller/admin.controller');
const uploadProduct = require('../util/uploadProduct.file');



route.post('/addProduct', uploadProduct.index().single('productImage'), admincontroller.addProduct);
route.use('/', admincontroller.index);

module.exports = route;