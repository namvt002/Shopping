const express = require('express');
const route = express.Router();
const checkSession = require("../auth/checkSession.auth");
const homecontroller = require('../app/controller/home.controller');

route.get('/', checkSession.unSession, );

module.exports = route;