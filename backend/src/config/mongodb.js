import mongoose from "mongoose";


export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.mongo_URL);
    console.log("mongoDB connected successfully!!");
  } catch (error) {
    console.log(error);
  }
};
