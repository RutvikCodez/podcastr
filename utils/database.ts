import mongoose from "mongoose";

export const connectToDb = async () => {
  if (mongoose.connection.readyState === 1) {
    return;
  }
  try {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
      throw new Error("MONGODB_URI is not defined in environment variable!");
    }
    await mongoose.connect(uri, { dbName: "podcastr" });
  } catch (error) {
    console.log(error);
    throw new Error("Error connecting to MongoDB: " + error);
  }
};
