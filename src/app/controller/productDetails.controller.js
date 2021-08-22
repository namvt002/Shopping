class ProductDetailsController {
    index(req, res) {
        res.render('pages/productDetails',{css: "/css/productDetail.css", title: 'Details'});
    }
}

module.exports = new ProductDetailsController();