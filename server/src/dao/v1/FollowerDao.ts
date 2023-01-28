import { ObjectId } from "mongoose";
import { CONSTANTS } from "../../constants";
import { FollowerModel } from "../../models";

class FollowerDao {
  follow(userId: ObjectId, followUser: ObjectId) {
    try {
      return FollowerModel.create({ userId: followUser, follower: userId });
    } catch (error) {
      throw error;
    }
  }

  unfollow(userId: ObjectId, followUser: ObjectId) {
    try {
      return FollowerModel.updateMany(
        {
          userId: followUser,
          follower: userId,
          status: CONSTANTS.STATUS.ACTIVE,
        },
        { status: CONSTANTS.STATUS.INACTIVE }
      );
    } catch (error) {
      throw error;
    }
  }
}

export default new FollowerDao();
