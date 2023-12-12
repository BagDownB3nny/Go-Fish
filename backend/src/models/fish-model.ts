import mongoose, { Types } from "mongoose";

export interface IFishSpecies extends mongoose.Document {
    name: string;
    description: string;
}

export const FishSpeciesSchema = new mongoose.Schema<IFishSpecies> ({
    name: { type: String, required: true },
    description: { type: String, required: true },
})

export default mongoose.model<IFishSpecies>("FishSpecies", FishSpeciesSchema);