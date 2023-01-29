import { ObjectId } from "mongodb";

export default interface IFollower{
  userId  : ObjectId,
  follower: ObjectId,
  status? : string
};