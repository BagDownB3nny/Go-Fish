import mongoose, { Types } from "mongoose";

export interface IUser extends mongoose.Document {
    username: string;
    email: string;
    password: string;
    friends: Types.ObjectId[];
    fishes: Map<string, number>;
}

export const UserSchema = new mongoose.Schema<IUser> ({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: {type: String, required: true},
    friends: { type: [Types.ObjectId], required: true, ref: "User" },
    fishes: { type: Map, required: true, of: Number },
})

export default mongoose.model<IUser>("User", UserSchema);