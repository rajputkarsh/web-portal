import { subGreddiitDao } from "../../dao";
import { ICustomObject } from "../../interfaces";

class SubGreddiitController{
  async list(query: ICustomObject, page: number, limit: number){
    try{

      let search: Array<any> = [];
      let searchKeys = Object.keys(query);

      if(searchKeys.length > 0){
        searchKeys.forEach(key => {
          search.push( {key : {$regex: query[key], $options: 'i'} });
        })
      }

      return await subGreddiitDao.list({$or: search}, page, limit)

    } catch(error){
      throw error;
    }
  }
}

export default new SubGreddiitController();