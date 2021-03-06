import User from "../models/User";
import { IToken } from "../interfaces/IToken";
import { IUserModel } from "../interfaces/IUser";
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";
import fs from "fs";
import path from "path";

const pathToKey = path.join(__dirname, "../..", "id_rsa_priv.pem");
const PRIV_KEY = fs.readFileSync(pathToKey, "utf8");
const TOKEN_EXPIRES = "1d";

const passwordIsValid = (password: string, user: IUserModel) => {
  return bcrypt.compare(password, user.hash);
};

const issueJWT = (user: IUserModel) => {
  const _id = user._id;

  const expiresIn = TOKEN_EXPIRES;

  const payload = {
    sub: _id,
    iat: Date.now(),
  };

  const signedToken = jsonwebtoken.sign(payload, PRIV_KEY, {
    expiresIn: expiresIn,
    algorithm: "RS256",
  });

  return {
    token: "Bearer " + signedToken,
    expires: expiresIn,
  };
};

const login = async (
  username: string,
  password: string,
): Promise<IToken> => {
  const user = await User.findOne({ username: username }).orFail();

  if (await passwordIsValid(password, user)) {
    return issueJWT(user);
  } else throw new Error("Wrong password");
};

export default { login };
