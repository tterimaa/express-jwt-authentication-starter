import { Schema, model } from "mongoose";
import { IUserModel } from "../interfaces/IUser";

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  roles: [String],
  hash: {
    type: String,
    required: true,
  }
});

const User = model<IUserModel>("User", UserSchema);
export default User;
