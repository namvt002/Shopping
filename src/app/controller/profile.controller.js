const profilemodel = require('../models/profile.model');

class ProfileController {
    index(req, res) {
        res.render('pages/profile',{css: "/css/profile.css", title: 'Profile'});
    }

    async index2(req, res) {
        let user = await profilemodel.getProfile(req, res);
        res.render('pages/profile',
            {
                css: "/css/profile.css", title: 'Profile',
                profile: user // [ {username: "trung", password: 1}, {username: "trung2", password: 2}]
            }
        );
    };
}

module.exports = new ProfileController();