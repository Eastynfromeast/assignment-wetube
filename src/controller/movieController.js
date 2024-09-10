/*
You DONT have to import the Movie with your username.
Because it's a default export we can nickname it whatever we want.
So import Movie from "./models"; will work!
You can do Movie.find() or whatever you need like normal!
*/
import Movie from "../models/Movie";

// Add your magic here!
export const home = async (req, res) => {
	try {
		const movies = await Movie.find({});
		console.log("movies", movies);
		return res.render("home", { pageTitle: "A11 Mongo 2 by Nulnu", movies });
	} catch (error) {
		console.log("home error", error);
	}
};

export const upload = (req, res) => {
	return res.render("upload", { pageTitle: "Upload Movie" });
};
