
import HTTP_CODES from "../httpCodes"

export default {

  BAD_REQUEST: (data: string) => ({
    status : HTTP_CODES.BAD_REQUEST,
    type   : 'BAD_REQUEST',
    message: data,
  }),

  INTERNAL_SERVER_ERROR: (data: string) => ({
    status : HTTP_CODES.INTERNAL_SERVER_ERROR,
    type   : 'INTERNAL_SERVER_ERROR',
    message: data,
  }),
  
}