import * as mongoose from 'mongoose';
import { IUser } from '../types';

const UserSchema = new mongoose.Schema({
    username: String,
    hash: String,
    salt: String
});

const User = mongoose.model<IUser>('User', UserSchema);
export default User;