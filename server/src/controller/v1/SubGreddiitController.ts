import { subGreddiitDao } from "../../dao";
import { ICustomObject, ISubGreddiit } from "../../interfaces";

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

  async add(data: ISubGreddiit){
    try{
      return await subGreddiitDao.add(data);
    } catch(error){
      throw error;
    }
  }

  async update(id: string, data: Partial<ISubGreddiit>){
    try{
      return await subGreddiitDao.update(id, data);
    } catch(error){
      throw error;
    }
  }

  async delete(id: string){
    try{
      return await subGreddiitDao.delete(id);
    } catch(error){
      throw error;
    }
  }

}

export default new SubGreddiitController();