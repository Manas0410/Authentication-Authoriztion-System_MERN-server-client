import "dotenv/config";

const {
  PORT = 3000,
  MONGO_URI = "mongodb://127.0.0.1:27017",
  JWT_SECRET = "manas0410",
} = process.env;

export const port = PORT;
export const mongoUri = MONGO_URI;
export const jwtSecret = JWT_SECRET;
