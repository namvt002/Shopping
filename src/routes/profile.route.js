const express = require('express');
const route = express.Router();
const profilecontroller = require('../app/controller/profile.controller');
const CheckSession = require('../auth/checkSession.auth');

route.use('/',  profilecontroller.index2);

module.exports = route;