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
		const movies = await Movie.find({}).sort({ rating: "desc" });
		return res.render("home", { pageTitle: "A11 Mongo 2 by Nulnu", movies });
	} catch (error) {
		return res.render("404", { errorMessage: error });
	}
};

export const detail = async (req, res) => {
	const { id } = req.params;
	try {
		const movie = await Movie.findById(id);
		return res.render("detail", { pageTitle: movie.title, movie });
	} catch (error) {
		return res.render("404", { errorMessage: error });
	}
};

export const upload = async (req, res) => {
	const { title, summary, genres } = req.body;
	if (req.method === "GET") {
		return res.render("upload", { pageTitle: "Upload Movie" });
	}
	if (req.method === "POST") {
		try {
			await Movie.create({
				title,
				summary,
				genres: Movie.formatGenres(genres),
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
		const movie = await Movie.findById(id);
		return res.render("edit", { pageTitle: movie.title, movie });
	} catch (error) {
		return res.render("404", { errorMessage: error });
	}
};

export const postEdit = async (req, res) => {
	const { id } = req.params;
	const { title, summary, year, rating, genres } = req.body;
	try {
		const movie = await Movie.exists({ _id: id });
		if (!movie) {
			return res.render("404", { pageTitle: "Movie not found" });
		}
		await Movie.findByIdAndUpdate(id, {
			title,
			summary,
			year,
			rating,
			genres: Movie.formatGenres(genres),
		});
		return res.redirect(`/movies/${id}`);
	} catch (error) {
		return res.render("404", { errorMessage: error });
	}
};

export const deleteMovie = async (req, res) => {
	const { id } = req.params;
	try {
		await Movie.findByIdAndDelete({ _id: id });
		return res.redirect("/");
	} catch (error) {
		return res.render("server-error");
	}
};
