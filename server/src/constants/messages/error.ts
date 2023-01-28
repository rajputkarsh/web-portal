
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

  EMAIL_ALREADY_REGISTERED: {
    status : HTTP_CODES.BAD_REQUEST,
    type   : 'EMAIL_ALREADY_REGISTERED',
    message: 'Email is already registered',
  },

  USERNAME_ALREADY_REGISTERED :{
    status : HTTP_CODES.BAD_REQUEST,
    type   : 'USERNAME_ALREADY_REGISTERED',
    message: 'Username is already registered',
  },

  INVALID_CREDENTIALS :{
    status : HTTP_CODES.BAD_REQUEST,
    type   : 'INVALID_CREDENTIALS',
    message: 'You have entered invalid credentials',
  },
  
}