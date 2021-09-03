const AddProductSchema = require('../../config/schema/product.schema');

class listProducts{
    getProduct(req, res){
       return AddProductSchema.find()
            .then(products => products.map(product => product.toObject()))
            .catch(err=> console.log(err));
    }
}

module.exports = new listProducts;