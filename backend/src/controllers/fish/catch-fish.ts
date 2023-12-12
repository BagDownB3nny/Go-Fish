import FishSpecies, { IFishSpecies } from "../../models/fish-model";
import User, { IUser } from "../../models/user-model";
import { Request, Response } from "express";
import { BaitAndFishMap } from "./fishCatchingStats";

export interface CatchFishRequest extends Request {
    userId: string;
    baits: string[];
}

export const catchFishes = async (req: CatchFishRequest, res: Response) => {
    const { userId, baits } = req.body;
    const user = await User.findById(userId);
    if (!user) {
        console.log("User not found");
        return res.status(404).json({ message: "User not found" });
    }
    let caughtFishes : string[] = [];
    for (const baitName of baits) {
        const bait = await FishSpecies.find({ name: baitName });
        if (!bait && baitName !== "None") {
            console.log("Bait not found");
            return res.status(404).json({ message: "Bait not found" });
        }
        const caughtFish = catchFish(user, baitName);
        caughtFishes.push(caughtFish);
    }
    addCaughtFishesToUser(user, caughtFishes);
    return res.json({ caughtFishes });
}

const addCaughtFishesToUser = async (user: IUser, caughtFishes: string[]) => {
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
    for (const fishName of caughtFishes) {
        const fishSpecies = await FishSpecies.findOne({ name: fishName });
        if (!fishSpecies) {
            console.log("Fish species not found");
            return;
        }
        if (user.fishes.has(fishName)) {
            user.fishes.set(fishName, user.fishes.get(fishName)! + 1);
        } else {
            user.fishes.set(fishName, 1);
        }
    }
    user.save().then(() => {
        console.log(user.fishes);
    });
}

// Runs an algorithm to calculate the species and length of the fish caught, based on the bait used.
const catchFish = (user: IUser, baitName: string) => {
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