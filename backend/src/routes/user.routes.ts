import express, { Request, Response } from 'express';
import User from '../models/user-model';

const router = express.Router();

router.get("/", async function(req : Request, res : Response) {
    console.log("get fishes");
});

router.post("/", async function(req : Request, res : Response) {
    console.log(req);

    const newUser = new User({
        name: req.body.name,
        friends: [],
    });
    const createdUser = await User.create(newUser);
    return res.status(200).json({ message: "User created", user: createdUser });
});

export default router;