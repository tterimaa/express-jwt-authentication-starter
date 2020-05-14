import * as mongoose from 'mongoose';

export interface IUser extends mongoose.Document {
    username: string,
    hash: string,
    salt: string
}