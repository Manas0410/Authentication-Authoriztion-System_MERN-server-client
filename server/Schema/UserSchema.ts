import mongoose, { Schema } from "mongoose";
import { userDataSchemaType } from "../types";

const userDataSchema: Schema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ["normal", "admin"],
    required: [true, "Please specify user role"],
  },
});

export const userDataModel = mongoose.model<userDataSchemaType>(
  "users",
  userDataSchema
);
