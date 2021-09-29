const User = require('../models/login.models');
const bcrypt = require('bcrypt');

module.exports.form = (req, res) => {
    res.render('pages/login', {css: "/css/login.css", title: 'Login'});
}

module.exports.find = async (req, res) => {
    try{
        const {user_name, password} = req.body;
        // console.log(user_name, password);
        if (!(user_name && password)) {
            // res.status(400).json({
            //     message: "All input is required"
            // });
            res.redirect('/login');
        }
         const user = await User.findUser(user_name);

         
        if (user && (await bcrypt.compare(password, user.password))) {
            req.session.username = user_name;
            res.redirect('/profile');
        } else {
            res.status(400).json({
                message: "Login failed"
            });
        }    
    }catch(err){
        console.log(err);
    }
}