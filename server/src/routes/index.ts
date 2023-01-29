
import { Router } from "express";
import userRouter from "./v1/userRoutes";
import followerRouter from "./v1/followerRoutes";
import subGreddiitRouter from "./v1/subGreddiitRoutes";

var router = Router();

router.use('/user', userRouter);
router.use('/follow', followerRouter);
router.use('/sub-greddiit', subGreddiitRouter);

export default router;