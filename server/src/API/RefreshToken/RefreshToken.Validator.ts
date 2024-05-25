import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { jwtSecret } from "../../../config";

export interface reqType extends Request {
  userData: {
    name: string;
    email: string;
    role: string;
  };
}

const RefreshTokenValidator = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { refreshToken } = req.body;

  jwt.verify(refreshToken, jwtSecret, (err: any, decode: any) => {
    if (err) {
      return res.status(401).send("Invalid Token Id");
    }
    if (decode) {
      const userData = {
        name: decode.name,
        email: decode.email,
        role: decode.role,
      };
      (req as reqType).body.userData = userData;
    }
  });
  next();
};
export default RefreshTokenValidator;
