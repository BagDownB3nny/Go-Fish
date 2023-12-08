import mongoose, { Types } from "mongoose";

export interface IUser extends mongoose.Document {
    name: string;
    friends: Types.ObjectId[];
}

export const UserSchema = new mongoose.Schema<IUser> ({
    name: { type: String, required: true },
    friends: { type: [Types.ObjectId], required: true, ref: "User" },
})

export default mongoose.model<IUser>("User", UserSchema);