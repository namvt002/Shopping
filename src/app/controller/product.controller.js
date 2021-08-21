class ProductController {
    index(req, res) {
        res.render('pages/product',);
    }
}

module.exports = new ProductController();