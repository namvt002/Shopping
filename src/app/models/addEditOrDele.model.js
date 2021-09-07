const AddProductSchema = require('../../config/schema/product.schema');

class AddProduct {
    async addProduct(req, res){
        let path='';
        if(req.file)
            path = req.file.path.split('\\').slice(2).join('\\');
        if(req.body.id == ''){
            //add product
            const product = new AddProductSchema({
                title: req.body.title,
                price: req.body.price,
                productImage: path,
            });
            await product.save();
            res.redirect('/listProducts')
        }else{
            //updateRecord
            console.log('2' + req.params);
            console.log(req.body);
            AddProductSchema.findOneAndUpdate(
                {_id:req.body.id},
                {title: req.body.title, price: req.body.price, productImage: path},
                {new: true},
                (err, doc)=>{
                    if(!err){
                        res.redirect('/listProducts');
                    }else{
                        console.log(err);
                    }
                }
            )
        } 
    }
    
    edit(req, res){
        return AddProductSchema.findById(req.params.id)
            .then(products => products.map(product => product.toObject()))
            .catch(err=> console.log(err));
         
    }

};

module.exports = new AddProduct;