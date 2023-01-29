import { NextFunction, Response, Router } from "express";
import { HTTP_STATUS_CODE } from "../../constants";
import { followerController } from "../../controller";
import { CustomRequest } from "../../interfaces/request";
import { userMiddleware } from "../../middlewares";
import { followerValidator } from "../../validators";

const followerRouter = Router();

followerRouter.post(
  "/",
  followerValidator.follow,
  userMiddleware.authenticate,
  async function (req: CustomRequest.UserRequest, res: Response, next: NextFunction) {
    try{
      const result = await followerController.follow({userId: (req.user as string), follow: req.body.user});
      res.status(HTTP_STATUS_CODE.OK).send(result);
    } catch(error){
      res.status(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).send(error);
    }
  }
);

followerRouter.delete(
  "/",
  followerValidator.unfollow,
  userMiddleware.authenticate,
  async function (req: CustomRequest.UserRequest, res: Response, next: NextFunction) {
    try{
      const result = await followerController.unfollow({userId: (req.user as string), follow: req.body.user});
      res.status(HTTP_STATUS_CODE.OK).send(result);
    } catch(error){
      res.status(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).send(error);
    }
  }
);

export default followerRouter;
