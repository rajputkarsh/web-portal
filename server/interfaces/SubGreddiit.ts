
import { ObjectId } from "mongodb";

export default interface ISubGreddiit{
  name       : String,
  tags       : Array<String>,
  description: String,
  bannedWords: Array<String>,
  modertator : ObjectId,
};