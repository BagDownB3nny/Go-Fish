import { api } from "../../lib/axios"
import { FishSpecies } from "../../types/fish.types";

export const catchFish = async (userId: string, bait : string) : Promise<FishSpecies>=> {
    const data = {
        userId,
        baitName: bait
    };
    try {
        const response = await api.post("/fish/catch-fish", data)
        return response.data.caughtFish;
    } catch (err) {
        console.log(err);
        return {} as FishSpecies;
    }
}