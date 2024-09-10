import express from "express";
import { getEdit, home, postEdit, upload } from "../controller/movieController";

const movieRouter = express.Router();

movieRouter.get("/", home);
movieRouter.route("/upload").get(upload).post(upload);
movieRouter.route("/:id/edit").get(getEdit).post(postEdit);
// Add your magic here!

export default movieRouter;
