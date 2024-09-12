import express from "express";
import { home } from "../controller/userController";

const userRouter = express.Router();

userRouter.get("/", home);

export default userRouter;
