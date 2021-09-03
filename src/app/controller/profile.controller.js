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
                username: req.session.username,
                profile: user
            }
        );
    };
}

module.exports = new ProfileController();