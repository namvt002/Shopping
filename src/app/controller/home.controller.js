const listProductsModels = require('../models/listProduct.model');

class HomeController {
  
   async index(req, res) {
        let product = await listProductsModels.getProduct(req, res);
        res.render('pages/home', {
            css: "/css/home.css",
            title: 'Shopping',
            listproduct: product,
        });
    }
}




module.exports = new HomeController();