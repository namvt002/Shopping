class ProductDetailsController {
    index(req, res) {
        res.render('pages/productDetails',);
    }
}

module.exports = new ProductDetailsController();