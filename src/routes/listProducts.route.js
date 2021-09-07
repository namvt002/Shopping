const express = require('express');
const route = express.Router();
const admincontroller = require('../app/controller/admin.controller');
const uploadProduct = require('../util/uploadProduct.file');



// route.use('/updateRecord', admincontroller.updateRecord)
route.post('/edit/admin/addProduct', uploadProduct.index().single('productImage'), admincontroller.addProduct);
route.get('/edit/:id', admincontroller.edit);
route.use('/', admincontroller.listProducts);

module.exports = route;