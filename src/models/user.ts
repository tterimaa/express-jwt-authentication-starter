import * as mongoose from 'mongoose';
import { UserDocument } from '../types';

const UserSchema = new mongoose.Schema({
    username: String,
    hash: String,
    salt: String
});

const User = mongoose.model<UserDocument>('User', UserSchema);
export default User;