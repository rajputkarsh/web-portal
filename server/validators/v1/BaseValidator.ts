
import { Request, Response, NextFunction } from "express";
import Joi from "joi";
import { MESSAGES } from "../../constants";

class BaseValidator {

    constructor(){
    }

    async validateHeader(
      validator: Joi.ObjectSchema | Joi.ArraySchema, 
      req: Request,
      res: Response,
      next: NextFunction
  ) {
  
      try {
  
          const { error: errors, value } = validator.validate(req.header);

          if (errors) {
              res.json(MESSAGES.ERROR.BAD_REQUEST(errors.details.map(error => error.message).join(', ')));
              return false;
          } 
          
          req.body = value;

          next();

      } catch (error) {
          res.json({
              status: MESSAGES.ERROR.INTERNAL_SERVER_ERROR(error as string),
              message: error
          })
          return false
      }
  }

    async validateBody (
        validator: Joi.ObjectSchema | Joi.ArraySchema, 
        req: Request,
        res: Response,
        next: NextFunction
    ) {
    
        try {
    
            const { error: errors, value } = validator.validate(req.body);

            if (errors) {
                res.json(MESSAGES.ERROR.BAD_REQUEST(errors.details.map(error => error.message).join(', ')));
                return false;
            } 
            
            req.body = value;

            next();

        } catch (error) {
            res.json({
                status: MESSAGES.ERROR.INTERNAL_SERVER_ERROR(error as string),
                message: error
            })
            return false
        }
    }
    
}

export default BaseValidator