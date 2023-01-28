import mongoose from "mongoose";
import { MESSAGES } from "../../constants";
import { followerDao, userDao } from "../../dao";
import { FollowRequest } from "../../interfaces/request";

class FollowerController {
  async follow(params: FollowRequest.Follow) {
    try {
      const user = await userDao.list({_id: new mongoose.Schema.Types.ObjectId(params.follow)}, 1, 1);

      if(user.count < 1){
        throw MESSAGES.ERROR.INVALID_USER;
      }

      const result = await followerDao.follow(
        new mongoose.Schema.Types.ObjectId(params.userId),
        new mongoose.Schema.Types.ObjectId(params.follow)
      );

      return MESSAGES.SUCCESS.USER_FOLLOWED(user.data[0].firstName);

    } catch (error) {
      throw error;
    }
  }

  async unfollow(params: FollowRequest.Follow) {
    try {
      const user = await userDao.list({_id: new mongoose.Schema.Types.ObjectId(params.follow)}, 1, 1);

      if(user.count < 1){
        throw MESSAGES.ERROR.INVALID_USER;
      }

      const result = await followerDao.unfollow(
        new mongoose.Schema.Types.ObjectId(params.userId),
        new mongoose.Schema.Types.ObjectId(params.follow)
      );

      return MESSAGES.SUCCESS.USER_UNFOLLOWED(user.data[0].firstName);

    } catch (error) {
      throw error;
    }
  }

}

export default new FollowerController();
