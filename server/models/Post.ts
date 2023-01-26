
import { ObjectId } from "mongodb";
import { model, Schema } from "mongoose";
import { UserModel } from ".";
import { IPost } from "../interfaces";

const postSchema: Schema = new Schema<IPost>({
  text: {
    required: true,
    type: String,
  },
  media: {
    required: true,
    type: String,
  },
  postedBy: {
    required: true,
    type: ObjectId,
    ref: UserModel,
  },
  subGreddiit: {
    required: true,
    type: String,
    ref: UserModel,
  },
  upvotes: {
    required: true,
    type: Number,
  },
  downvotes: {
    required: true,
    type: Number,
  },
},
{
  versionKey: false,
  timestamps: true
});
  
postSchema.set('toObject', {virtuals: true});
postSchema.set('toJSON', {virtuals: true});

const PostModel = model<IPost>('Post', postSchema);

export default PostModel;