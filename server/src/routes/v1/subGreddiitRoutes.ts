import { NextFunction, Response, Router } from "express";
import { HTTP_STATUS_CODE, CONSTANTS, MESSAGES } from "../../constants";
import { subGreddiitController } from "../../controller";
import { ICustomObject } from "../../interfaces";
import { CustomRequest } from "../../interfaces/request";
import { userMiddleware } from "../../middlewares";
import { subGreddiitValidator } from "../../validators";

const subGreddiitRouter = Router();

subGreddiitRouter.get(
  '/',
  userMiddleware.authenticate,
  async function(req: CustomRequest.UserRequest, res:Response, next: NextFunction){

    let query: ICustomObject = {};

    if(req.query['search']){
      query['name'] = req.query['search']
    }

    const page  = req.query?.page  ? (req.query.page  as unknown as number) : CONSTANTS.DEFAULT_PAGE_NUMBER;
    const limit = req.query?.limit ? (req.query.limit as unknown as number) : CONSTANTS.DEFAULT_PAGE_SIZE;

    const result = await subGreddiitController.list(query, page, limit);
    res.status(HTTP_STATUS_CODE.OK).send(MESSAGES.SUCCESS.SUB_GREDDIIT_LIST(result));

    try{

    } catch(error){
      res.status(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).send(error);
    }

  }
);

subGreddiitRouter.post(
  '/',
  subGreddiitValidator.add,
  userMiddleware.authenticate,
  async function(req: CustomRequest.UserRequest, res:Response, next: NextFunction){
    try{

    } catch(error){
      res.status(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).send(error);
    }
  }
);

subGreddiitRouter.patch(
  '/:id',
  subGreddiitValidator.update,
  userMiddleware.authenticate,
  async function(req: CustomRequest.UserRequest, res:Response, next: NextFunction){
    try{

    } catch(error){
      res.status(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).send(error);
    }
  }

);

subGreddiitRouter.delete(
  '/:id',
  userMiddleware.authenticate,
  async function(req: CustomRequest.UserRequest, res:Response, next: NextFunction){
    try{

    } catch(error){
      res.status(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).send(error);
    }
  }

);

export default subGreddiitRouter;