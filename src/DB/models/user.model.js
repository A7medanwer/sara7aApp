import mongoose, { Schema } from "mongoose";
export const genderEnum = {
  male: "male",
  female: "female",
};
const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
      minLength: [2, "the smallest name should contain two characters"],
      maxLength: [20, "the largest name should contain twinty characters"],
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
      minLength: [2, "the smallest name should contain two characters"],
      maxLength: [20, "the largest name should contain twinty characters"],
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
      enum: {
        values: Object.values(genderEnum),
        message: "(values) is not valid gender",
      },
      default: genderEnum.male,
    },
    phone: {
      type: String,
      required: true,
      confirmEmail: Date, //you need to do this to confirm email
      confirmOTP: String,
    },
  },
  { timestamps: true }
);

const UserModel = mongoose.models.User || mongoose.model("User", UserSchema); // users

export default UserModel;
// another code to know do you understand this command