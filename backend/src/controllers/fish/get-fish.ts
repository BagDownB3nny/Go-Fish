import User, { IUser } from "../../models/user-model";
import { Request, Response } from "express";
import FishSpecies from "../../models/fish-model";

export interface GetFishRequest extends Request {
    user: IUser;
}

export const getFish = async (req : GetFishRequest, res : Response) => {
    const { userId } = req.query;
    const user = await User.findById(userId);
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }
    const fishes = user.fishes;
    return res.json({ fishes });
}
