import { HTTP_STATUS_CODE } from "..";

export default {
  
  USER_REGISTRATION: (data: Object) => ({
    status : HTTP_STATUS_CODE.OK,
    type   : 'USER_REGISTRATION',
    message: 'User Registered Successfully',
    data   : data,
  }),

  USER_LOGGEDIN: (data: Object) => ({
    status : HTTP_STATUS_CODE.OK,
    type   : 'USER_LOGGEDIN',
    message: 'User Logged in Successfully',
    data   : data,
  }),

  USER_FOLLOWED: (name: string) => ({
    status : HTTP_STATUS_CODE.OK,
    type   : 'USER_FOLLOWED',
    message: `You're now following ${name}`,
  }),

  USER_UNFOLLOWED: (name: string) => ({
    status : HTTP_STATUS_CODE.OK,
    type   : 'USER_FOLLOWED',
    message: `You've unfollowed ${name}`,
  }),

};