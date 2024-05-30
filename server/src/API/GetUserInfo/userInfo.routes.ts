import { Router } from "express";
import getUserInfoByTokenController from "./userInfo.controller";

const getUserInfoByToken = Router();

getUserInfoByToken.get("/:accessToken", getUserInfoByTokenController);

export default getUserInfoByToken;
