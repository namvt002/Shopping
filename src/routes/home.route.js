const express = require('express');
const route = express.Router();
const homecontroller = require('../app/controller/home.controller');

route.use('/', homecontroller.index);

module.exports = route;