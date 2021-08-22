const homerouter = require('./home.route');
const productroute = require('./product.route');
const productsDetailsRoute = require('./productDetails.route');
const profileroute = require('./profile.route');
const accountroute = require('./account.route');

class Route{
    index(app){
        app.use('/account', accountroute);
        app.use('/profile', profileroute);
        app.use('/products-details', productsDetailsRoute);
        app.use('/products', productroute);
        app.use('/', homerouter);
    }
}

module.exports = new Route;