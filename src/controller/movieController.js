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

export const upload = async (req, res) => {
	if (req.method === "GET") {
		return res.render("upload", { pageTitle: "Upload Movie" });
	}
	if (req.method === "POST") {
		try {
			await Movie.create({
				title,
				summary,
				genres: genres.split(",").map(genre => genre.trim().replaceAll(" ", "_")),
			});
			return res.redirect("/");
		} catch (error) {
			return res.render("upload", {
				pageTitle: "Upload Video",
				errorMessage: error._message,
			});
		}
	}
};

export const getEdit = async (req, res) => {
	const { id } = req.params;
	console.log(id);
	try {
		const movie = await Movie.findBy({ id });
		return res.render("edit", { pageTitle: movie.title, movie });
	} catch {}
};

export const postEdit = async (req, res) => {
	const { id } = req.params;
	const { title, summary, year, rating, genres } = req.body;
	try {
	} catch {}
};
