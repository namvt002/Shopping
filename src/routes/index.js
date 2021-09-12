const homerouter = require('./home.route');
const adminroute = require('./admin.route');


class Route{
    index(app){
        
        app.use('/admin', adminroute);
        app.use('/', homerouter);
    }
}

module.exports = new Route;