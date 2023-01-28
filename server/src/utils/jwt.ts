
import jwt from 'jsonwebtoken';

export const generateToken = (data : Object)  => {
  return  jwt.sign(data, process.env.JWT_SECRET_KEY as string, {expiresIn: "2d"})
}