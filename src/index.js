const express = require('express');
const path = require('path');
const app = express();
const handlebars = require('express-handlebars');
const { extname } = require('path');
const route = require('./routes');
const db = require('./config/db');
const session = require('express-session');

db.connect();

app.use(express.static(path.join(__dirname,'public')));
app.engine('hbs', handlebars(
   { extname: '.hbs' }
));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'resources\\views'));

// sau khi cai express-session thi them doan nay
app.use(session({
   secret: "nodejs",
   resave: false,
   saveUninitialized: true,
   cookie: {},
}))

route.index(app);

app.listen(3003);

