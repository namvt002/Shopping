
class CheckSession {

    checkUser(req, res, next){
        if(req.session.username){
            next();   
        }else{
            res.redirect('/login');
        }
    }

    unSession(req, res, next) {
        if(req.session.username){
            req.session.destroy(function (err) {
                res.redirect('/');
            });
          
        }else{
            next();
        }
    }
}

module.exports = new CheckSession;