import { IUser } from "../interfaces/IUser";
import User from "../models/User";
import bcrypt from "bcrypt";

const saltRounds = 12;

const genPassword = (password: string) => {
  return bcrypt.hash(password, saltRounds);
};

const registerUser = async (user: IUser) => {
  const hash = await genPassword(user.password);

  const newUser = new User({
    username: user.username,
    roles: user.roles,
    hash: hash,
  });

  return newUser.save();
};

export default { registerUser };
