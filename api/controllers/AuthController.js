// api/controllers/AuthController.js
var passport = require('passport');

var AuthController = { 
	index: function (req,res){
		res.view();
	},
	
	create: function(req, res){
		passport.authenticate('local', function(err, user, info){
			if ((err) || (!user)){
				res.redirect('/auth');
				return;
			}
		
			req.logIn(user, function(err){
				if (err){
					res.view();
					return;
				}
				
				res.redirect('/');
				return;
			});
		})(req, res);
	},
	
	logout: function (req,res){
		req.logout();
		res.redirect('/');
	}
};
module.exports = AuthController;

/*
var LoginController = {
  index : function (req,res) {
    res.view()
  }
  ,create : function (req, res, next) {
    console.log('create')
    passport.authenticate('local', function(err, user, info) {
      if (err) return next(err)
      if (!user) return res.redirect('/login')
      req.logIn(user, function(err){
        if(err) return next(err)
        return res.redirect('/')
      })
    })(req, res, next)
  }
  ,logout : function (req,res) {
    res.logout()
    return res.redirect('/')
  }
}
module.exports = LoginController
*/