import mongoose from "mongoose";
const connectDB = async (req, res) => {
  try {
    await mongoose.connect(
      `mongodb+srv://a7medanwer11_db_user:SldyBjnAK4YOzp2i@cluster0.l9hhal8.mongodb.net/`,
      { serverSelectionTimeoutMS: 2000 }
    );
    console.log("mongoose connected successfully");
  } catch (error) {
    console.log("mongoose not connected", error);
  }
};
export default connectDB;
