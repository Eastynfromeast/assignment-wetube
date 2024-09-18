import express from "express";
import path from "path";
import bodyParser from "body-parser";
import multer from "multer";
import fs from "fs";
import { localsMiddleware } from "./middlewares";
import rootRouter from "./routers/rootRouter";

const PORT = 4000;

const app = express();
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(localsMiddleware);
app.use("/uploads", express.static("uploads"));
app.use("/", rootRouter);

// Codesanbox does not need PORT :)
// But I am writing on local repository!
app.listen(PORT, () => console.log(`✅  Server Ready! on http://localhost:${PORT}`));
