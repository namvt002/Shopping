const registermodel = require('../models/register.model');


class AccountController {
    index(req, res) {
        res.render('pages/account', {css: "/css/account.css", title: 'Account'});
    }
    addUser(req, res){
         registermodel.addUser(req, res);
     }
}

module.exports = new AccountController();