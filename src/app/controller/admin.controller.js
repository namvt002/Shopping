const addEditOrDeleModels = require('../models/addEditOrDele.model');
const listProductsModels = require('../models/listProduct.model');

const AddProductSchema = require('../../config/schema/product.schema');

class AdminController {
    index(req, res) {
        res.render('pages/admin', {css: "/css/admin.css", title: 'admin',viewproduct: "Add Product", });
    }

    addProduct(req, res) {
        addEditOrDeleModels.addProduct(req, res);
    }

    async listProducts(req, res){
        // let product = [];
       let product = await listProductsModels.getProduct(req, res);
        res.render('pages/listProducts',
            {
                css: "/css/listproduct.css", title: 'ListProduct',
                listproduct: product,
            }
        );
    }

    // listProducts(req, res){
    //     AddProductSchema.find({}).then(products =>{
    //         res.render('pages/listProducts',{
    //             css: "/css/listproduct.css", title: 'ListProduct',
    //             listproduct: products.map(product => product.toJSON()),
    //         })
    //     });
    // }

    edit(req, res) {
        AddProductSchema.findById(req.params.id,(err, editProduct) => {
            if(!err){
                res.render('pages/admin',{
                    viewproduct: "Edit Product",
                    css: "/css/admin.css", title: 'admin',
                    edit: editProduct.toJSON(),
                });
            }
        })
    }

   
}

module.exports = new AdminController();