import { Request, Response } from 'express';
import FishSpecies from '../../models/fish-model';

export interface AddFishRequest extends Request {
    name : string;
    description : string;
}

export const addFish = async (req : AddFishRequest, res : Response) => {
    try {
        const { name, description } = req.body;
        const fish = new FishSpecies({ name, description });
        await fish.save();
        res.status(201).json({ message: 'Fish added successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to add fish' });
    }
}