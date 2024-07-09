import mongoose from "mongoose";
async function connect():Promise<void>{
  try {
    // await mongoose.connect("mongodb://localhost:27017/myDatabase", {useNewUrlParser: true, useUnifiedTopology: true});
    await mongoose.connect(process.env.MONGODB_URL as string)
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
  }
}
export default connect;