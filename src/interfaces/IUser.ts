import { Document } from "mongoose";

export interface IUser {
  username: string;
  password: string;
  roles: string[];
}

export interface IUserModel extends IUser, Document {
  hash: string;
}