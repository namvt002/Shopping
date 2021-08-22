class AccountController {
    index(req, res) {
        res.render('pages/account', {css: "/css/account.css", title: 'Account'});
    }
}

module.exports = new AccountController();