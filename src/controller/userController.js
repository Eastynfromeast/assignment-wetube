import User from "../models/User";

export const home = async (req, res) => res.render("home", { pageTitle: "A13 User" });
