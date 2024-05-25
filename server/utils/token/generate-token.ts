import jwt from "jsonwebtoken";
import { jwtSecret } from "../../config";

const generateToken = async (data: any, time: string) => {
  const token = await jwt.sign(data, jwtSecret, { expiresIn: time });
  return token;
};

// expire the token in 15 minutes

export default generateToken;
