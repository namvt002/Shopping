const express = require('express');
const route = express.Router();
const registerController = require('../app/controller/register.controller');



route.get('/', registerController.form);
route.post('/', registerController.register);

module.exports = route;