import { Request, Response } from "express";
import generateToken from "../../../utils/token/generate-token";

const RefreshTokenController = async (req: Request, res: Response) => {
  const { userData } = req.body;
  const token = await generateToken(userData, "30s");
  res.status(201).json({ accessToken: token });
};

export default RefreshTokenController;
