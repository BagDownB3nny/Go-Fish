import Fish, { IFish } from "../../models/fish-model";
import User, { IUser } from "../../models/user-model";
import { Request, Response } from "express";

export interface GetFishRequest extends Request {
    user: IUser;
}

export const getFish = async (req : GetFishRequest, res : Response) => {
    const { userId } = req.query;
    const user = await User.findById(userId);
    const fish = await Fish.find({ caughtBy: user });
    return res.json({ fish });
}
