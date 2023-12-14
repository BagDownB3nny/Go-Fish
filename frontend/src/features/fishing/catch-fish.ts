import { api } from "../../lib/axios"

export const catchFish = async (userId: string, bait : string) : Promise<string>=> {
    const data = {
        userId,
        baitName: bait
    };
    try {
        const response = await api.post("/fish/catch-fish", data)
        return response.data.caughtFishName;
    } catch (err) {
        console.log(err);
        return "";
    }
}