class HomeController {
    index(req, res) {
        res.render('pages/home', {css: "/css/home.css"});
    }
}

module.exports = new HomeController();