const AddProductSchema = require('../../config/schema/product.schema');

class AddProduct {
    async addProduct(req, res){
        let path = req.file.path.split('\\').slice(2).join('\\');
        const product = new AddProductSchema({
            title: req.body.title,
            price: req.body.price,
            productImage: path,
        });
        await product.save();
        res.send("thanh cong");
    }

};

module.exports = new AddProduct;