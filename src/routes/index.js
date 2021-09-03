const homerouter = require('./home.route');
const productroute = require('./product.route');
const productsDetailsRoute = require('./productDetails.route');
const profileroute = require('./profile.route');
const accountroute = require('./account.route');
const checkSession = require('../auth/checksession.auth');
const logoutController = require('../app/controller/logout.controller');
const adminroute = require('./admin.route');
const listProductroute = require('./listProducts.route')

class Route{
    index(app){
        app.use('admin/listProducts', listProductroute);
        app.use('/admin', adminroute);
        app.use('/logout', checkSession.unSession,  );
        // app.get('/logout', logoutController);
        app.use('/profile', profileroute);
        app.use('/account', accountroute);
        // app.use('/profile', profileroute);
        app.use('/products-details', productsDetailsRoute);
        app.use('/products', productroute);
        app.use('/', homerouter);
    }
}

module.exports = new Route;