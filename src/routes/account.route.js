const express = require('express');
const route = express.Router();
const accountcontroller = require('../app/controller/account.controller');

route.use('/', accountcontroller.index);

module.exports = route;