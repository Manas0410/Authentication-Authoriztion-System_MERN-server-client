import { connect } from "mongoose";
import { mongoUri } from "../../config";

export const connectToMongoDb = async (): Promise<void> => {
  try {
    await connect(`${mongoUri}/authenticationsystem`);
    console.log("Database connected successfully");
  } catch (err: any) {
    console.error(err);
  }
};
