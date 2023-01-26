
import { ObjectId } from "mongodb";
import { model, Schema } from "mongoose";
import { PostModel, UserModel } from ".";
import { IReport } from "../interfaces";

const reportSchema: Schema = new Schema<IReport>({
  post: {
    required: true,
    type: ObjectId,
    ref: PostModel,
  },
  concern: {
    required: true,
    type: String,
  },
  reportedBy: {
    required: true,
    type: ObjectId,
    ref: UserModel
  },
  reportedUser: {
    required: true,
    type: ObjectId,
    ref: UserModel
  },
},
{
  versionKey: false,
  timestamps: true
});
  
reportSchema.set('toObject', {virtuals: true});
reportSchema.set('toJSON', {virtuals: true});

const ReportModel = model<IReport>('Report', reportSchema);

export default ReportModel;