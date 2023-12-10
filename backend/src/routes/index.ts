import express, { Response }  from "express";
import fishRoute from './fish.routes';
import userRoute from './user.routes';
import { checkAuth } from "../middleware/checkAuth";

const router = express.Router();

router.use("/fish", checkAuth, fishRoute);
router.use("/user", userRoute);

export default router;