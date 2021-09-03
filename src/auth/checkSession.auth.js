
class CheckSession {

    checkUser(req, res, next){
        if(req.session.username){
            next();   
        }else{
            res.redirect('/account');
        }
    }

    unSession(req, res, next) {
        if(req.session.username){
            req.session.destroy(() => {
                res.redirect('/')
            })
               
        }else{
            next();
        }
    }
}

module.exports = new CheckSession;