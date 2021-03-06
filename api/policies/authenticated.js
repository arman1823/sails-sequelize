/**
* Allow any authenticated user.

module.exports = function (req,res,ok) {
	
	// User is allowed, proceed to controller
	if (req.session.authenticated) {
		return ok();
	}

	// User is not allowed
	else {
		return res.send("You are not permitted to perform this action.",403);
	}
};
*/

// We use passport to determine if we're authenticated
module.exports = function(req, res, next)
{
	// this is for socket connections, hmmmh
	if(!req.isAuthenticated)
		return next();

	if (req.isAuthenticated())
		return next();
	else return res.redirect('/auth')
}

/*
module.exports = function (req, res, next) {
  
  // User is allowed, proceed to controller
  var is_auth = req.isAuthenticated()
  console.log('authenticated... is auth: ' + is_auth)
  if (is_auth) return next();
  // User is not allowed
  else return res.redirect("/login");
};
*/