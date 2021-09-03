const express = require('express');
const route = express.Router();
const admincontroller = require('../app/controller/admin.controller');
const uploadProduct = require('../util/uploadProduct.file');





route.use('/', admincontroller.listProducts);

module.exports = route;