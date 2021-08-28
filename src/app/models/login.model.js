const userschema = require('../../config/schema/user.shema');



class LoginModel {
    checkUser(req, res) {
        userschema.findOne({username: req.body.username})
            .then(user => {
                if(user.password == req.body.password) {
                    // req.session.username  = req.body.username;
                    res.redirect('/profile');
                }else{
                    res.send('sai cmm mat khau roi');
                    res.redirect('/account');
                }
            })
            .catch(err => { console.log(err)});
    }
    
};

module.exports = new LoginModel;