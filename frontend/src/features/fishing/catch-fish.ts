import { api } from "../../lib/axios"
import { Fish } from "../../types/fish.types";

export const catchFish = async (userId: string, baitId?: string) : Promise<Fish>=> {
    const data = {
        userId,
        ...(baitId && { baitId })
    };
    try {
        const response = await api.post("/fish/catch-fish", data)
        return response.data.caughtFish;
    } catch (err) {
        console.log(err);
        return {} as Fish;
    }
}