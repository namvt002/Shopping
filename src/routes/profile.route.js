const express = require('express');
const route = express.Router();
const profileController = require('../app/controller/profile.controller');

const checkSession = require("../auth/checkSession.auth");

route.use('/', checkSession.checkUser ,profileController.view);
route.post('/edit',checkSession.checkUser, profileController.update);

// route.post('/', profileController.view);

module.exports = route;