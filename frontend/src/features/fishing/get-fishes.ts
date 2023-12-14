import { api } from "../../lib/axios";
import { Fish } from "../../types/fish.types";

export const getFishes = async (userId : string) : Promise<Fish[]> => {
    try {
        const res = await api.get(`/fish/my-fishes?userId=${userId}`);
        return res.data.fish;
    } catch (err) {
        console.log(err);
        return [];
    }
}