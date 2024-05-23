import Express, { Router } from "express";
import validator from "./authentication.Validator";
import { loginUser, registerUser } from "./authentication.Controller";

const authRouter: Router = Express.Router();

authRouter.post("/signup", validator, registerUser);

authRouter.post("/signin", validator, loginUser);

export default authRouter;
