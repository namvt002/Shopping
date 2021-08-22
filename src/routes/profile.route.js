const express = require('express');
const route = express.Router();
const profilecontroller = require('../app/controller/profile.controller');

route.use('/', profilecontroller.index);

module.exports = route;