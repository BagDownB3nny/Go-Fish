import express, { Response }  from "express";
import fishRoute from './fish.routes';
import userRoute from './user.routes';

const router = express.Router();

router.use("/fish", fishRoute);
router.use("/user", userRoute);

export default router;