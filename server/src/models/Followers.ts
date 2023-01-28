
import { ObjectId } from "mongodb";
import { model, Schema } from "mongoose";
import { CONSTANTS } from "../constants";
import { IFollower } from "../interfaces";

const followerSchema: Schema = new Schema<IFollower>({
  userId: {
    required: true,
    type: ObjectId,
  },
  follower: {
    required: true,
    type: ObjectId,
  },
  status: {
    required: false,
    type: String,
    default: CONSTANTS.STATUS.ACTIVE, 
    enum: Object.values(CONSTANTS.STATUS)
  }
},
{
  versionKey: false,
  timestamps: true
});
  
followerSchema.set('toObject', {virtuals: true});
followerSchema.set('toJSON', {virtuals: true});

const FollowerModel = model<IFollower>('Follower', followerSchema);

export default FollowerModel;