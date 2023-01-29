import mongoose from "mongoose";
import { CONSTANTS } from "../../constants";
import { ISubGreddiit } from "../../interfaces";
import { SubGreddiitModel } from "../../models";

class SubGreddiitDao{

  async list(query: Object, page: number, limit: number){
    try{
      const data = await SubGreddiitModel.aggregate([
        {
          $match: {
            ...query,
          },
        },
        {
          $sort: {
            createdAt: -1,
          },
        },
        {
          $skip: (page - 1) * limit,
        },
        {
          $limit: limit,
        },
      ]);

      const count: number = (await SubGreddiitModel.aggregate([
        {
          $match: {
            ...query,
          },
        },
      ])).length;

      return {data, count};

    } catch(error){
      throw error;
    }
  }

  async add(data: ISubGreddiit){
    try{
      return await SubGreddiitModel.create(data);
    } catch(error){
      throw error
    }
  }

  async update(id: string, data: Partial<ISubGreddiit>){
    try{
      return await SubGreddiitModel.updateMany({_id: new mongoose.Schema.Types.ObjectId(id)}, data);
    } catch(error){
      throw error
    }
  }

  async delete(id: string){
    try{
      return await SubGreddiitModel.updateMany({_id: new mongoose.Schema.Types.ObjectId(id)}, {status: CONSTANTS.STATUS.DELETED});
    } catch(error){
      throw error
    }
  }

}

export default new SubGreddiitDao();