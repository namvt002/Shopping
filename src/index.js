const {connect} = require('../src/config/connection');
const express = require('express');
const path = require('path');
const app = express();
const handlebars = require('express-handlebars');
const { extname } = require('path');
const route = require('./routes');
var bcrypt = require('bcrypt');
const session = require('express-session');
var bodyParser = require("body-parser");
const mysql = require('mysql');

require('dotenv').config();
connect();

const fileUpload = require('express-fileupload');
// default option
app.use(fileUpload());

// Static Files
app.use(express.static('src/public/image/user_img'));

// bodyparser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//

app.use(express.static(path.join(__dirname,'public')));
app.engine('hbs', handlebars(
   { extname: '.hbs' }
));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'resources\\views'));

// sau khi cai express-session thi them doan nay
app.use(session({
   secret: "nodejs",
   resave: true,
   saveUninitialized: true,
   cookie: {},
}))


route.index(app);

app.listen(3003);

