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
    try{
      let query: ICustomObject = {};

      if(req.query['search']){
        query['name'] = req.query['search']
      }
  
      const page  = req.query?.page  ? (req.query.page  as unknown as number) : CONSTANTS.DEFAULT_PAGE_NUMBER;
      const limit = req.query?.limit ? (req.query.limit as unknown as number) : CONSTANTS.DEFAULT_PAGE_SIZE;
  
      const result = await subGreddiitController.list(query, page, limit);
      res.status(HTTP_STATUS_CODE.OK).send(MESSAGES.SUCCESS.SUB_GREDDIIT_LIST(result));
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

      const result = await subGreddiitController.add({
        name        : req.body.name,
        tags        : req.body.tags,
        description : req.body.description,
        bannedWords : req.body.bannedWords,
        moderator   : req.body.moderator,
      });      

      res.status(HTTP_STATUS_CODE.OK).send(MESSAGES.SUCCESS.SUB_GREDDIIT_ADDED(result));
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

      const id = req.params.id;

      const data = {
        name        : req.body?.name,
        tags        : req.body?.tags,
        description : req.body?.description,
        bannedWords : req.body?.bannedWords,
        moderator   : req.body?.moderator,
      };
      const filteredData = Object.fromEntries(Object.entries(data).filter(([_, v]) => v != null));

      const result = await subGreddiitController.update(id, filteredData);      
      res.status(HTTP_STATUS_CODE.OK).send(MESSAGES.SUCCESS.SUB_GREDDIIT_UPDATED(result));
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
      const id = req.params.id;
      const result = await subGreddiitController.delete(id);
      res.status(HTTP_STATUS_CODE.OK).send(MESSAGES.SUCCESS.SUB_GREDDIIT_UPDATED(result));
    } catch(error){
      res.status(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR).send(error);
    }
  }

);

export default subGreddiitRouter;