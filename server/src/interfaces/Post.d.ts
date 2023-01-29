import { ObjectId } from "mongodb";

export default interface IPost{
  text: String,
  media: String,
  postedBy: ObjectId,
  subGreddiit: ObjectId,
  upvotes: Number,
  downvotes: Number,
  status?: String
};