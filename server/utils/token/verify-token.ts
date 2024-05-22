import jwt from "jsonwebtoken";
import { jwtSecret } from "../../config";

const verifyToken = async (token: string) => {
  const decoded = await jwt.verify(token, jwtSecret);
  return decoded;
};

export default verifyToken;
