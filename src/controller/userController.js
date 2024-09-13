import User from "../models/User";

export const home = async (req, res) => res.render("home", { pageTitle: "A13 User" });

export const getJoin = (req, res) => res.render("join", { pageTitle: "Join us" });

export const getLogin = (req, res) => res.render("login", { pageTitle: "Login" });
