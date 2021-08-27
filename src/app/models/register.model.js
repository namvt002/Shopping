const userschema = require('../../config/schema/user.shema');

class RegisterModel {
    async addUser(req, res){
        let path = req.file.path.split('\\').slice(2).join('\\');
        const user = new userschema({
            username: req.body.username,
            password: req.body.password,
            gender: req.body.gender,
            avatar: path,
        });
        await user.save();
        res.redirect('/account');
    }
};

module.exports = new RegisterModel;