import { api } from "../../lib/axios"
import { FishSpecies } from "../../types/fish.types";

export const catchFish = async (userId: string, baitId?: string) : Promise<FishSpecies>=> {
    const data = {
        userId,
        ...(baitId && { baitId })
    };
    try {
        const response = await api.post("/fish/catch-fish", data)
        return response.data.caughtFish;
    } catch (err) {
        console.log(err);
        return {} as FishSpecies;
    }
}