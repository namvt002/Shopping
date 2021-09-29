const home = require('../models/home.models');


class HomeController {
    // index(req, res) {
    //     res.render('pages/home', {
    //         css: "/css/home.css",
    //         title: 'Shopping',
           
    //     });
    // }
    viewall = async (req, res) => {
        try{
            let id = req.params.id;
            const rows = await home.viewall();
            res.render('pages/home', { rows: rows ,css: "/css/home.css",title: 'Shopping'});
        }catch(err){
          console.log(err);
        }
    }
}

module.exports = new HomeController();


