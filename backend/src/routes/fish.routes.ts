import express, { Request, Response } from 'express';
import { GetFishRequest, getFish } from '../controllers/fish/get-fish';
import { CatchFishRequest, catchFishes } from '../controllers/fish/catch-fish';
import { AddFishRequest, addFish } from '../controllers/fish/add-fish';

const router = express.Router();

router.get("/my-fishes", async function(req : Request, res : Response) {
    getFish(req as GetFishRequest, res);
});

router.post("/catch-fish", async function(req : Request, res : Response) {
    catchFishes(req as CatchFishRequest, res);
});

router.post("/add-fish", async function(req : Request, res : Response) {
    addFish(req as AddFishRequest, res);
});

export default router;