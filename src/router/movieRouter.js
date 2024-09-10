import express from "express";
import { getEdit, home, postEdit, upload, detail } from "../controller/movieController";

const movieRouter = express.Router();

movieRouter.get("/", home);
movieRouter.route("/upload").get(upload).post(upload);
movieRouter.route("/movies/:id([0-9a-f]{24})").get(detail);
movieRouter.route("/movies/:id([0-9a-f]{24})/edit").get(getEdit).post(postEdit);

export default movieRouter;
