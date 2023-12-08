import express, { Request, Response } from 'express';
import { GetFishRequest, getFish } from '../controllers/get-fish';
import { CatchFishRequest, catchFish } from '../controllers/catch-fish';

const router = express.Router();

router.get("/my-fishes", async function(req : Request, res : Response) {
    getFish(req as GetFishRequest, res);
});

router.post("/catch-fish", async function(req : Request, res : Response) {
    catchFish(req as CatchFishRequest, res);
});

export default router;