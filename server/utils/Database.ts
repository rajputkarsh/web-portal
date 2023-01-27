import mongoose from "mongoose";

export const connectToDatabase = () => {
  return mongoose.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.mongodb.net/?retryWrites=true&w=majority`
  );  
}