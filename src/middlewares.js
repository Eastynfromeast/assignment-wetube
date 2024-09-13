export const localsMiddleware = (req, res, next) => {
	res.locals.siteTitle = "Nomad Movies by Nulnu";

	res.locals.isLoggedIn = Boolean(req.session.isLoggedIn);
	res.locals.loggedUser = req.session.loggedUser;
	console.log(res.locals);
	next();
};
