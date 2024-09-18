import express from "express";
import { getEdit, home, postEdit, upload, detail, deleteMovie, search } from "../controller/movieController";

const movieRouter = express.Router();

movieRouter.route("/upload").get(upload).post(upload);
movieRouter.get("/search", search);
movieRouter.route("/:id([0-9a-f]{24})").get(detail);
movieRouter.route("/:id([0-9a-f]{24})/edit").get(getEdit).post(postEdit);
movieRouter.get("/:id([0-9a-f]{24})/delete", deleteMovie);
export default movieRouter;
