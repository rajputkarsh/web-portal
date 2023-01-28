
import { Router } from "express";
import userRouter from "./v1/userRoutes";
import followerRouter from "./v1/followerRoutes";

var router = Router();

router.use('/user', userRouter);
router.use('/follow', followerRouter);

export default router;