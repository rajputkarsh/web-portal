
import { Request, Response, NextFunction } from "express";
import Joi from "joi";
import BaseValidator from "./BaseValidator";

class SubGreddiitValidator extends BaseValidator{

  add = async (req: Request, res: Response, next: NextFunction) => {

    const validationSchema = Joi.object({
      name       : Joi.string().required(),
      tags       : Joi.array().items(Joi.string()).min(1).required(),
      description: Joi.string().required(),
      bannedWords: Joi.array().items(Joi.string()).min(0).required(),
      moderator  : Joi.string().hex().length(24).required(),      
    });
    
    this.validateBody(validationSchema, req, res, next);
  }

  update = async (req: Request, res: Response, next: NextFunction) => {

    const validationSchema = Joi.object({
      name       : Joi.string().optional(),
      tags       : Joi.array().items(Joi.string()).min(1).optional(),
      description: Joi.string().optional(),
      bannedWords: Joi.array().items(Joi.string()).min(0).optional(),
      moderator  : Joi.string().hex().length(24).optional(),      
    });
    
    this.validateBody(validationSchema, req, res, next);
  }  


}

export default new SubGreddiitValidator();