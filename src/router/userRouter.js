import express from "express";
import { getJoin, getLogin, home } from "../controller/userController";

const userRouter = express.Router();

userRouter.get("/", home);
userRouter.route("/join").get(getJoin);
userRouter.route("/login").get(getLogin);

export default userRouter;
