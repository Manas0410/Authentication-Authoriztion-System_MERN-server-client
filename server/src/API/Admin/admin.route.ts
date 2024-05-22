import express, { Router, Response } from "express";
import { Ireq } from "../../../types";

const adminRouter: Router = express.Router();

adminRouter.get("/", (req: Ireq, res: Response) => {
  const role = req.role;
  if (role !== "admin") {
    res
      .status(401)
      .send("you are not authorised because, u re logged in as user");
  }
  res.status(200).send("congrts !! you are an Admin");
  res.end();
});

export default adminRouter;
