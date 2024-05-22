import Express, { Router } from "express";
import validator from "./authentication.Validator";
import { loginUser, registerUser } from "./authentication.Controller";

const authRouter: Router = Express.Router();

authRouter.post("/registeruser", validator, registerUser);

authRouter.post("/login", validator, loginUser);

export default authRouter;
