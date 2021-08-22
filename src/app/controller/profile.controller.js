class ProfileController {
    index(req, res) {
        res.render('pages/profile',{css: "/css/profile.css", title: 'Profile'});
    }
}

module.exports = new ProfileController();