const express = require('express');
const route = express.Router();
const productcontroller = require('../app/controller/product.controller');

route.use('/', productcontroller.index);

module.exports = route;