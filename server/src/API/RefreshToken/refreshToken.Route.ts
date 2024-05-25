import express, { Router } from "express";
import RefreshTokenValidator from "./RefreshToken.Validator";
import RefreshTokenController from "./RefreshToken.controller";

const RefreshTokenRoute: Router = express.Router();

RefreshTokenRoute.post("/", RefreshTokenValidator, RefreshTokenController);

export default RefreshTokenRoute;
