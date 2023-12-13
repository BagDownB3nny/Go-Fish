import mongoose, { Types } from "mongoose";
import {IFishSpecies} from "./fish-model";

export interface ICaughtFishes {
    description: string;
    count: number;
}


export interface IUser extends mongoose.Document {
    username: string;
    email: string;
    password: string;
    friends: Types.ObjectId[];
    fishes: Map<string, ICaughtFishes>;
}

export const UserSchema = new mongoose.Schema<IUser> ({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: {type: String, required: true},
    friends: { type: [Types.ObjectId], required: true, ref: "User" },
    fishes: { type: Map, required: true },
})

export default mongoose.model<IUser>("User", UserSchema);