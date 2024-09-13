import User from "../models/User";

export const home = async (req, res) => res.render("home", { pageTitle: "A13 User" });

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

export const postLogin = async (req, res) => {};
