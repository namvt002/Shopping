const express = require('express');
const route = express.Router();
const adminController = require('../app/controller/admin.controller');
const uploadProduct = require('../util/uploadProduct.file');

// route.post('/addProduct', uploadProduct.index().single('productImage'), adminController.addProduct);

route.get('/', adminController.view);
route.post('/', adminController.find);
route.get('/addproduct', adminController.form);
route.post('/addproduct', adminController.create);
route.get('/editproduct/:id', adminController.edit);
route.post('/editproduct/:id', adminController.update);
route.get('/:id',adminController.delete);
// route.get('/viewproduct/:id', adminController.viewall);

module.exports = route;