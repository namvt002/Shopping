const addEditOrDeleModels = require('../models/addEditOrDele.model');
const listProductsModels = require('../models/listProduct.model');

class AdminController {
    index(req, res) {
        res.render('pages/admin', {css: "/css/admin.css", title: 'admin'});
    }

    addProduct(req, res) {
        addEditOrDeleModels.addProduct(req, res);
    }

    async listProducts(req, res){
        // let product = [];
       let product = await listProductsModels.getProduct(req, res);
        res.render('partials/admin/listProduct',
            {
                css: "/css/listproduct.css", title: 'ListProduct',
                listproduct: product,
            }
        );
    }
}

module.exports = new AdminController();