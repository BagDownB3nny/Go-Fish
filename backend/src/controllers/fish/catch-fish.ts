import { Request, Response } from "express";
import FishSpecies from "../../models/fish-model";
import User, { ICaughtFishes, IUser } from "../../models/user-model";
import { BaitAndFishMap } from "./fishCatchingStats";

export interface CatchFishRequest extends Request {
    userId: string;
    baitName: string;
}

export const catchFish = async (req: CatchFishRequest, res: Response) => {
    const { userId, baitName } = req.body;
    const user = await User.findById(userId);
    if (!user) {
        console.log("User not found");
        return res.status(404).json({ message: "User not found" });
    }
    const bait = await FishSpecies.find({ name: baitName });
    if (!bait && bait !== "None") {
        console.log("Bait not found");
        return res.status(404).json({ message: "Bait not found" });
    }
    const caughtFishName = catchFishWithBait(user, baitName);
    addCaughtFishesToUser(user, caughtFishName);
    return res.json({ caughtFishName });
}

const addCaughtFishesToUser = async (user: IUser, caughtFishName: string) => {
    if (!user) {
        console.log("User not found");
        return;
    }
    if (!user.fishes) {
        console.log("User fishes not found");
        return;
    }
    console.log("Adding caught fishes to user");
    console.log(user.fishes);
    const fishSpecies = await FishSpecies.findOne({ name: caughtFishName });
    if (!fishSpecies) {
        console.log("Fish species not found");
        return;
    }
    if (user.fishes.has(caughtFishName)) {
        const newCaughtFishEntry : ICaughtFishes = {
            description: fishSpecies.description,
            count: user.fishes.get(caughtFishName)!.count + 1,
        }
        user.fishes.set(caughtFishName, newCaughtFishEntry);
    } else {
        const newCaughtFishEntry : ICaughtFishes = {
            description: fishSpecies.description,
            count: 1,
        };
        console.log("Setting new caught fish entry");
        user.fishes.set(caughtFishName, newCaughtFishEntry);
    }
    console.log("Saving user");
    user.save().then(() => {
        console.log(user.fishes);
    });
}

// Runs an algorithm to calculate the species and length of the fish caught, based on the bait used.
const catchFishWithBait = (user: IUser, baitName: string) => {
    // TODO - implement algorithm
    console.log("Catching fish");
    console.log(baitName);
    const caughtFish = BaitAndFishMap.get(baitName);
    if (!caughtFish) {
        console.log("Caught fish not found");
        return "";
    }
    return caughtFish;
}

// const removeBaitFromUser = async (user: IUser, bait: IFish) => {
//     await Fish.deleteOne({ _id: bait._id });
// }