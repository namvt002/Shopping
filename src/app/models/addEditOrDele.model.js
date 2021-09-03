const AddProductSchema = require('../../config/schema/product.schema');

class AddProduct {
    async addProduct(req, res){

            if(req.body.id == ''){
                //add product
                let path = req.file.path.split('\\').slice(2).join('\\');
                const product = new AddProductSchema({
                    title: req.body.title,
                    price: req.body.price,
                    productImage: path,
                });
                await product.save();
                res.redirect('/listProducts')
            }else{
                //updateRecord
                AddProductSchema.findOneAndUpdate(
                    {_id:req.body.id},
                    req.body,
                    {new: true},
                    (err, doc)=>{
                        if(!err){
                            res.redirect('listProducts');
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