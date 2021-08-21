const express = require('express');
const route = express.Router();
const productDetailscontroller = require('../app/controller/productDetails.controller');

route.use('/', productDetailscontroller.index);

module.exports = route;