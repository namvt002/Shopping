const userschema = require('../../config/schema/user.shema');



class LoginModel {
    checkUser(req, res, next) {
        return userschema.findOne({username: req.body.username})
            .then(user => {
                if(user.password == req.body.password) {
                    req.session.username  = req.body.username;
                    return 1;
                }else{
                    res.redirect('/account');
                }
            })
            .catch(err => { console.log(err)});
    }
};


module.exports = new LoginModel;