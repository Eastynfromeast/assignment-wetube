import "./db";
import "./models/Movie";
import express from "express";
import path from "path";
import bodyParser from "body-parser";
import movieRouter from "./router/movieRouter";
import { localsMiddleware } from "./middlewares";
import userRouter from "./router/userRouter";

const PORT = 4000;

const app = express();
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(localsMiddleware);
app.use("/", userRouter);
app.use("/movies", movieRouter);

// Codesanbox does not need PORT :)
// But I am writing on local repository!
app.listen(PORT, () => console.log(`✅  Server Ready! on http://localhost:${PORT}`));
