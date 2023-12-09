import Fish, { IFish } from "../models/fish-model";
import User, { IUser } from "../models/user-model";
import { Request, Response } from "express";

export interface CatchFishRequest extends Request {
    userId: string;
    baitId?: string;
}

export const catchFish = async (req: CatchFishRequest, res: Response) => {
    const { userId, baitId } = req.body;
    const user = await User.findById(userId);
    console.log(userId);
    if (!user) {
        console.log("User not found");
        return res.status(404).json({ message: "User not found" });
    }
    let caughtFish;
    if (!baitId) {
        caughtFish = new Fish({
            name: "Small Fish",
            lengthInCm: 5,
            caughtBy: user,
            caughtDate: new Date(),
        });
    } else {
        const bait = await Fish.findById(baitId);
        if (!bait) {
            return res.status(404).json({ message: "Bait not found" });
        }
        caughtFish = catchFishWithBait(user, bait);
        await removeBaitFromUser(user, bait);
    }
    await caughtFish.save();
    console.log(`User ${userId} caught a fish!`);
    console.log(caughtFish);
    return res.json({ caughtFish });
}
// Runs an algorithm to calculate the species and length of the fish caught, based on the bait used.
const catchFishWithBait = (user: IUser, bait: IFish) => {
    // TODO - implement algorithm
    const caughtFish = new Fish({
        name: "Big Fish",
        lengthInCm: bait.lengthInCm * 2,
        caughtBy: user,
        caughtDate: new Date(),
    });
    return caughtFish;
}

const removeBaitFromUser = async (user: IUser, bait: IFish) => {
    await Fish.deleteOne({ _id: bait._id });
}