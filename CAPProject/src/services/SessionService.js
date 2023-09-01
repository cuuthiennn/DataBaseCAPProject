class SessionService {
    isExist = (req) => {
        if(typeof(req.session.user.id) !== 'undefined' && typeof(req.session.user.user_name) !== 'undefined'){
            return true;
        } else {
            return false;
        }
    }
    
    setSession = (req, id, user_name) =>{
        req.session.user.id = id;
        req.session.user.user_name = user_name;
    }

    deleteSession = (req) => {
        delete req.session.user.id;
        delete req.session.user.user_name;
    }
}

module.exports = SessionService;