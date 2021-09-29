const homeRouter = require('./home.route');
const adminRoute = require('./admin.route');
const registerRoute = require('./register.route');
const loginRoute = require('./login.route');
const profileRoute = require('./profile.route');
const logoutRoute = require('./logout.route');

class Route{
    index(app){
  
           
        app.use('/logout',  logoutRoute);
        app.use('/profile', profileRoute);
        app.use('/login', loginRoute)
        app.use('/register', registerRoute);
        app.use('/admin', adminRoute);
        app.use('/', homeRouter);
    }
}

module.exports = new Route;