const express = require('express');
const route = express.Router();
const homecontroller = require('../app/controller/home.controller');


// route.use('/', homecontroller.index);
route.use('/', homecontroller.viewall);


module.exports = route;