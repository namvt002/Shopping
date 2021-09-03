const registermodel = require('../models/register.model');
const loginmodel = require('../models/login.model');

const { renderSync } = require('node-sass');

class AccountController {
    index(req, res) {
        res.render('pages/account', {css: "/css/account.css", title: 'Account'});
    }
    addUser(req, res){
         registermodel.addUser(req, res);
    }
    async checkUser(req, res, next){
        let isTrue = await  loginmodel.checkUser(req, res, next);
        res.redirect("/profile");
    }
}



module.exports = new AccountController();