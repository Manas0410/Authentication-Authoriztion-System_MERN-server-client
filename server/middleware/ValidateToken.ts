import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { jwtSecret } from "../config";
import { Ireq } from "../types";

interface DecodedToken extends JwtPayload {
  role?: string;
}

const validateToken = (req: Ireq, res: Response, next: NextFunction) => {
  if (
    req.headers &&
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "JWT"
  ) {
    console.log("Inside if");
    const token = req.headers.authorization.split(" ")[1];

    jwt.verify(token, jwtSecret, (err, decode) => {
      if (err) {
        return res.status(401).send("Invalid Token Id");
      }

      if (decode) {
        const decodedToken = decode as DecodedToken;
        if (decodedToken.role) {
          req.role = decodedToken.role;
        }
      }
    });
  }
  next();
};

export default validateToken;
