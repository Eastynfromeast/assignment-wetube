import express from "express";
import { getJoin, getLogin, home, postJoin } from "../controller/userController";

const userRouter = express.Router();

userRouter.get("/", home);
userRouter.route("/join").get(getJoin).post(postJoin);
userRouter.route("/login").get(getLogin);

export default userRouter;
