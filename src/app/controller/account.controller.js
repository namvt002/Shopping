const registermodel = require('../models/register.model');
const loginmodel = require('../models/login.model');

class AccountController {
    index(req, res) {
        res.render('pages/account', {css: "/css/account.css", title: 'Account'});
    }
    addUser(req, res){
         registermodel.addUser(req, res);
    }
    checkUser(req, res){
        // res.send("ok la");
        loginmodel.checkUser(req, res);
    }
}

module.exports = new AccountController();