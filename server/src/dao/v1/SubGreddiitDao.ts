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


}

export default new SubGreddiitDao();