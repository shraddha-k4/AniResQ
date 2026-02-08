// import mongoose from "mongoose";


// export const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URL);
//     console.log("mongoDB connected successfully!!");
//   } catch (error) {
//     console.log(error);
//   }
// };

// import mongoose from "mongoose";

// export const connectDB = async () => {
//   try {
//     console.log("Connecting to MongoDB with URI:", process.env.MONGO_URL);
//     await mongoose.connect(process.env.MONGO_URL, {
//       family: 4  // optional: forces IPv4
//     });
//     console.log("MongoDB connected successfully!!");
//   } catch (error) {
//     console.error("MongoDB connection error:", error);
//   }
// };
import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(process.env.MONGO_URL, {
      family: 4,               // force IPv4
      serverSelectionTimeoutMS: 10000, // fail fast if unreachable
    });
    console.log("✅ MongoDB connected successfully!");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
  }
};
