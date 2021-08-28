const userschema = require('../../config/schema/user.shema');

class ProfileModel {
    getProfile(req, res) {
        return userschema.find({username: req.session.username})
            .then(users => users.map(user=> user.toObject()))
            .catch(err=> console.log(err));
    }
}

module.exports = new ProfileModel;