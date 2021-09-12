
class HomeController {
  
    index(req, res) {
        res.render('pages/home', {
            css: "/css/home.css",
            title: 'Shopping',
           
        });
    }
}


module.exports = new HomeController();