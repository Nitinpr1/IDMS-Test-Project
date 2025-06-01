import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name:{
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true,
      unique: true,
      max: 50,
    },
    password: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    }
},
{ timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;