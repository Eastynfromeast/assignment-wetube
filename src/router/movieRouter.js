import express from "express";
import { home, upload } from "../controller/movieController";

const movieRouter = express.Router();

movieRouter.get("/", home);
movieRouter.get("/upload", upload);
// Add your magic here!

export default movieRouter;
