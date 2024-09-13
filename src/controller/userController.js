import User from "../models/User";
import bcrypt from "bcrypt";

export const home = async (req, res) => {
	const loggedUser = req.session.loggedUser;
	if (!Boolean(loggedUser)) {
		return res.redirect("/login");
	} else {
		return res.render("home", { pageTitle: `The user is ${loggedUser.name}` });
	}
};

export const getJoin = (req, res) => res.render("join", { pageTitle: "Join us" });

export const postJoin = async (req, res) => {
	const { username, name, password, confirm_password } = req.body;
	const pageTitle = "Join us!";
	if (password !== confirm_password) {
		return res.status(400).render("join", { pageTitle, errorMessage: "Password confirmation does not match" });
	}
	const user = await User.exists({ username });
	if (user) {
		return res.status(400).render("join", { pageTitle, errorMessage: "This username is already taken" });
	}
	try {
		await User.create({
			username,
			name,
			password,
		});
		return res.redirect("/login");
	} catch (error) {
		return res.status(400).render("join", {
			pageTitle,
			errorMessage: error._message,
		});
	}
};

export const getLogin = (req, res) => res.render("login", { pageTitle: "Login" });

export const postLogin = async (req, res) => {
	const { username, password } = req.body;
	const pageTitle = "Login here";
	const user = await User.findOne({ username });
	if (!user) {
		return res.status(400).render("login", { pageTitle, errorMessage: "There is no account with this username" });
	}

	const ok = await bcrypt.compare(password, user.password);
	if (!ok) {
		return res.status(400).render("login", { pageTitle, errorMessage: "Password is wrong. Try it again" });
	}
	req.session.isLoggedIn = true;
	req.session.loggedUser = user;
	return res.redirect("/");
};
