
import { Request, Response, NextFunction } from "express";
import Joi from "joi";
import { REGEX } from "../../constants";
import BaseValidator from "./BaseValidator";

class FollowerValidator extends BaseValidator{

  follow = async (req: Request, res: Response, next: NextFunction) => {

    const validationSchema = Joi.object({
      user: Joi.string().hex().length(24).required(),
    });
    
    this.validateBody(validationSchema, req, res, next)
  }

  unfollow = async (req: Request, res: Response, next: NextFunction) => {

    const validationSchema = Joi.object({
      user: Joi.string().hex().length(24).required(),
    });
    
    this.validateBody(validationSchema, req, res, next)
  }

}

export default new FollowerValidator();