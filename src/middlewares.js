export const localsMiddleware = (req, res, next) => {
	res.locals.siteTitle = "Nomad Movies by Nulnu";
	next();
};
