const express = require('express');
const route = express.Router();
const admincontroller = require('../app/controller/admin.controller');
const uploadProduct = require('../util/uploadProduct.file');



// route.use('/updateRecord', admincontroller.updateRecord)

route.get('/edit/:id', admincontroller.edit)
route.use('/', admincontroller.listProducts);

module.exports = route;