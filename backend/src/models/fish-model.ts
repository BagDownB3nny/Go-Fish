import mongoose, { Types } from "mongoose";

export interface IFish extends mongoose.Document {
    name: string;
    lengthInCm: number;
    caughtBy: Types.ObjectId;
    caughtDate: Date;
}

export const FishSchema = new mongoose.Schema<IFish> ({
    name: { type: String, required: true },
    lengthInCm: { type: Number, required: true },
    caughtBy: { type: "ObjectID", required: true, ref: "User" },
    caughtDate: { type: Date, required: true },
})

export default mongoose.model<IFish>("Fish", FishSchema);