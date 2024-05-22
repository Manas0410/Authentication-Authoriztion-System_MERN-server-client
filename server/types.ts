import { Document } from "mongoose";
import { Request } from "express";

export interface UserDataType {
  name: string;
  email: string;
  password: string;
  role: string;
}

export interface userDataSchemaType extends UserDataType, Document {}

export interface Ireq extends Request {
  role?: string;
}
