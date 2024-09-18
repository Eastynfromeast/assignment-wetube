import multer from "multer";

export const localsMiddleware = (req, res, next) => {
	res.locals.siteTitle = "Wetube Assignment by Nulnu";
	next();
};

export const uploadTxt = multer({
	dest: "uploads/txt",
});
