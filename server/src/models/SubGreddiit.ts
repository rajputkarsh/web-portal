
import { ObjectId } from "mongodb";
import { model, Schema } from "mongoose";
import { UserModel } from ".";
import { ISubGreddiit } from "../interfaces";

const subGreddiitSchema: Schema = new Schema<ISubGreddiit>({
  name: {
    required: true,
    type: String
  },
  tags: {
    required: true,
    type: [{type: String}],
  },
  description: {
    required: true,
    type: String
  },
  bannedWords: {
    required: true,
    type: [{type: String}],
  },
  moderator: {
    required: true,
    type: String
  },
},
{
  versionKey: false,
  timestamps: true
});
  
subGreddiitSchema.set('toObject', {virtuals: true});
subGreddiitSchema.set('toJSON', {virtuals: true});

const SubGreddiitModel = model<ISubGreddiit>('SubGreddiit', subGreddiitSchema);

export default SubGreddiitModel;