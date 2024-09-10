import express from "express";
import { getEdit, home, postEdit, upload, detail, deleteMovie, search } from "../controller/movieController";

const movieRouter = express.Router();

movieRouter.get("/", home);
movieRouter.route("/upload").get(upload).post(upload);
movieRouter.get("/search", search);
movieRouter.route("/movies/:id([0-9a-f]{24})").get(detail);
movieRouter.route("/movies/:id([0-9a-f]{24})/edit").get(getEdit).post(postEdit);
movieRouter.get("/movies/:id([0-9a-f]{24})/delete", deleteMovie);
export default movieRouter;
