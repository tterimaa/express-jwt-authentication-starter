import { Schema, model } from "mongoose";
import { UserDocument } from "../types";

const UserSchema = new Schema({
  username: String,
  hash: String,
  salt: String,
});

const User = model<UserDocument>("User", UserSchema);
export default User;
