import mongoose, { Mongoose } from "mongoose";

const connectMongoDB = async () => {
  // if (process.env.MONGODB_URI == undefined) {
  //   console.log("No MONGODB_URI provided.");
  //   return
  // }
  try {
    mongoose.connect(process.env.MONGODB_URI as string).then(() => {
      console.log("Connected to MongoDB.");
    })
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDB;
