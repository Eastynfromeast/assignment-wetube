import express from "express";
import { home, read } from "../controller/rootController";
import { uploadTxt } from "../middlewares";

const rootRouter = express.Router();

rootRouter.route("/").get(home).post(uploadTxt.single("textFile"), home);
rootRouter.route("/read").post(uploadTxt.single("textFile"), read);
rootRouter.route("/read/:id").get(read);

export default rootRouter;
