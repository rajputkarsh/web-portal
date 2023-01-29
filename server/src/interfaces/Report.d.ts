
import { ObjectId } from "mongodb";

export default interface IReport {
  post        : ObjectId,
  concern     : String,
  reportedBy  : ObjectId,
  reportedUser: ObjectId,
  status      : String,
};