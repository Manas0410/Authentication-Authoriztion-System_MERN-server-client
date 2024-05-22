import jwt from "jsonwebtoken";
import { jwtSecret } from "../../config";

const generateToken = async (data: any) => {
  const token = await jwt.sign(data, jwtSecret, { expiresIn: 1 * 60 });
  return token;
};

// expire the token in 15 minutes

export default generateToken;
