const express = require('express');
const route = express.Router();
const admincontroller = require('../app/controller/admin.controller');
const uploadProduct = require('../util/uploadProduct.file');


// route.get('/edit/:id', admincontroller.edit)
// route.get('/listProducts', admincontroller.listProducts);
// route.post('/addProduct', uploadProduct.index().single('productImage'), admincontroller.addProduct);


route.get('/', admincontroller.view);
route.post('/', admincontroller.find);
route.get('/adduser', admincontroller.form);
route.post('/adduser', admincontroller.create);
route.get('/edituser/:id', admincontroller.edit);
route.post('/edituser/:id', admincontroller.update);

module.exports = route;