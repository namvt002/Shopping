const express = require('express');
const route = express.Router();
const accountcontroller = require('../app/controller/account.controller');
const upload = require('../util/upload.file');


route.post('/addUser', upload.index().single('avatar'), accountcontroller.addUser);
route.use('/', accountcontroller.index);

module.exports = route;